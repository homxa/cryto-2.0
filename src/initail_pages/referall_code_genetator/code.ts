import { db } from "../../auth/cofig/config";
import { collection,getDoc,addDoc } from "firebase/firestore";
// Function to generate a random alphanumeric code of specified length
function generateReferralCode(length:number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let referralCode = '';

  for (let i = 0; i < length; i++) {
    referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return referralCode;
}

// Function to check if a code already exists in the database
async function isReferralCodeUnique(code:string, database) {
  // Here, database is a placeholder for your actual database
  // You would need to replace this with your database query logic
  // to check if the code exists in your database
  // For example, you could query your user table to see if the code exists
  const codeExists = await database.checkIfCodeExists(code);
  return !codeExists;
}

// Function to generate a unique referral code
async function generateUniqueReferralCode(database, codeLength) {
  let referralCode;
  let isUnique = false;

  while (!isUnique) {
    referralCode = generateReferralCode(codeLength);
    isUnique = await isReferralCodeUnique(referralCode, database);
  }

  return referralCode;
}

// Example usage:
const database = {}; // Placeholder for your database connection or ORM
const codeLength = 6; // Length of the referral code
const uniqueReferralCode = await generateUniqueReferralCode(database, codeLength);
console.log(uniqueReferralCode);
