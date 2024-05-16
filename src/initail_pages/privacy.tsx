import { Footer } from "../footer/footer";
import Navbar from "../loggin_succ/navbar";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 text">
      <Navbar/>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">Last updated May 2nd, 2024.</p>
      <p className="mb-6">
        This Privacy Policy describes how Crypto Sphere ("we", "us", or "our")
        collects, uses, and protects the personal information of users of our
        platform. By using our services, you agree to the collection and use of
        information as described in this policy.
      </p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-5">
          <li>Username</li>
          <li>Email address</li>
          <li>Profile picture (optional)</li>
          <li>Device token for push notifications (with user permission)</li>
          <li>Network state (with user permission)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          2. How We Collect Information
        </h2>
        <p>
          We collect personal information during the registration process when
          users create an account on our platform. User permission is obtained
          for collecting profile picture and network state.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">3. Purpose of Collection</h2>
        <p>
          The personal information collected is used to provide users with
          access to our services, including but not limited to:
        </p>
        <ul className="list-disc pl-5">
          <li>Username: for identification and account management.</li>
          <li>
            Email address: for account creation, password resets, and
            potentially for sending important service-related information (with
            user consent).
          </li>
          <li>
            Profile picture (optional): for personalization of user profiles.
          </li>
          <li>
            Device token (with user permission): to deliver push notifications.
          </li>
          <li>
            Network state (with user permission): to optimize app performance
            based on network conditions (optional).
          </li>
        </ul>
      </section>

      {/* Add other sections similarly */}

      <section>
        <h2 className="text-xl font-bold mb-2">13. Contact Us</h2>
        <p>
          For any questions or concerns regarding this Privacy Policy or our
          privacy practices, users can contact us at cryptosphere.org@gmail.com
          or through the profile page, which directs users to our official
          Telegram channel.
        </p>
      </section>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicyPage;
