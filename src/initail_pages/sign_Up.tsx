import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../auth/cofig/config";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";

const SignUp = () => {
  console.log(auth?.currentUser);

  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const [creating, setCreating] = useState<boolean>(false);
  const [err, setErr] = useState(false)


  //validation checking
  const schema = yup.object().shape({
    userName: yup.string().required("Please Enter Your User Name").max(8),
    email: yup
      .string()
      .email("Invalid email")
      .required("Please Enter Your Email "),
    password: yup
      .string()
      .min(6)
      .max(16)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one number"
      )
      .required("Please Enter Your Password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please re-enter your password"),
    referrerCode: yup.string().optional(), // Referrer code is optional
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // geneating refaral code and checking and updating

  const generateReferralCode = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";

    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return code;
  };

  const generateUniqueReferralCode = async () => {
    let referralCode;
    let isUnique = false;

    while (!isUnique) {
      referralCode = generateReferralCode(5); // Generate UUID
      isUnique = await isReferralCodeUnique(referralCode);
    }

    return referralCode;
  };

  const isReferralCodeUnique = async (referralCode: any) => {
    try {
      const docRef = doc(db, "userProfiles", referralCode);
      const docSnap = await getDoc(docRef);
      console.log(docSnap, "here we are");
      return !docSnap.exists();
    } catch (error) {
      console.error("Error checking referral code uniqueness:", error);
      return false;
    }
  };

  const updateReferrerReferrals = async (referrerCode: any) => {
    try {
      const userDocCollection = collection(db, "userProfiles");
      const specifcuser = query(
        userDocCollection,
        where("referralCode", "==", referrerCode)
      );
      const gettenDoc = (await getDocs(specifcuser)).docs[0];

      if (gettenDoc) {
        // if refer code match any user own then updating it
        const docId = gettenDoc.id;
        const preRefNumber = gettenDoc.data().referrals;
        console.log(preRefNumber, "prev number");
        await updateDoc(doc(db, "userProfiles", docId), {
          referrals: preRefNumber + 1,
        });
        console.log("Referrer referrals count updated successfully");
      } else {
        console.error("Referrer code not found");
      }
    } catch (error) {
      console.error("Error updating referrer referrals count:", error);
    }
  };

  interface Submit {
    email: string;
    password: string;
    userName: string;
    referrerCode?: string;
  }
  // creating user account
  const submitData = async (data: Submit) => {
    setDisableBtn(true);
    setCreating(true);
    try {
      const { email, password, userName, referrerCode } = data;

      const currentUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const defaultpicRef = ref(storage, "userName");
      const defaulRowPic = await listAll(defaultpicRef);
      const gettingURL = await getDownloadURL(defaulRowPic.items[0]);
      const defaultPicURL = gettingURL;

      const referralCode = await generateUniqueReferralCode();

      await addDoc(collection(db, "userProfiles"), {
        userId: currentUser.user.uid,
        userName: userName,
        profilePic: defaultPicURL,
        isAdmin: false,
        points: 0,
        referrals: 0,
        referralCode: referralCode,
      });

      // If referrer code provided, update referrer's referrals count
      if (referrerCode) {
        await updateReferrerReferrals(referrerCode);
      }

      console.log("User account created successfully");

      return;
    } catch (error) {
      console.error("Error creating user account:", error);
      setErr(true)
      setDisableBtn(false);
      setCreating(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text">
          Sign Up for <b className="header">Crypto 2.0</b>
        </h1>
        <p className="text-red-500 mb-4">{err ? 'User already exists' : ''}</p>
        <form className="max-w-md" onSubmit={handleSubmit(submitData)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg mb-2 text">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full py-2 px-3 bg-gray-800 text-white rounded-md outline-none"
              {...register("userName")}
            />
            <p className="text">{errors.userName?.message}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2 text">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full py-2 px-3 bg-gray-800 text-white rounded-md outline-none"
              {...register("email")}
            />
            <p className="text">{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg mb-2 text">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full py-2 px-3 bg-gray-800 text-white rounded-md outline-none"
              {...register("password")}
            />
            <p className="text">{errors.password?.message}</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-lg mb-2 text"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full py-2 px-3 bg-gray-800 text-white rounded-md outline-none"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>
          </div>

          <div className="mb-6">
        <label htmlFor="referrerCode" className="block text-lg mb-2 text">
          Referrer's Code (optional)
        </label>
        <input
          type="text"
          id="referrerCode"
          className="w-full py-2 px-3 bg-gray-800 text-white rounded-md outline-none"
          {...register("referrerCode")}
        />
      </div>
          <button
            type="submit"
            className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md font-bold transition-colors duration-300"
            disabled={disableBtn}
          >
            {creating ? "creating..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
