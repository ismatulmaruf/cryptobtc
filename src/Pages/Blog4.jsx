import React from "react";
import Layout from "../Layout/Layout"; // Assuming you have a Layout component

const BlogPage = () => {
  return (
    <Layout>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="my-10">
          {/* Blog Header */}
          <div className="relative">
            <img
              src="https://i.imgur.com/FChTrly.jpeg"
              alt="Secure Your Crypto Wallet"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                How to Secure Your Crypto Wallet: A Comprehensive Guide
              </h1>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-6 md:p-12">
            <p className="text-lg leading-relaxed mb-4">
              In the world of cryptocurrency, security is paramount. A
              well-secured wallet is the cornerstone of protecting your digital
              assets. Here are some essential tips to safeguard your crypto:
            </p>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                1. Choose a Strong, Unique Password:
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Complexity is Key:</strong> Combine uppercase and
                  lowercase letters, numbers, and symbols.
                </li>
                <li>
                  <strong>Avoid Common Passwords:</strong> Steer clear of easily
                  guessable passwords like birthdays or pet names.
                </li>
                <li>
                  <strong>Use a Password Manager:</strong> A reliable password
                  manager can generate and store strong, unique passwords for
                  each of your accounts.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                2. Enable Two-Factor Authentication (2FA):
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Add an Extra Layer of Security:</strong> 2FA requires
                  a second verification step, usually a code sent to your phone
                  or email.
                </li>
                <li>
                  <strong>Choose a Secure 2FA Method:</strong> Opt for
                  authenticator apps like Google Authenticator or Authy over
                  SMS-based 2FA, which can be less secure.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                3. Regularly Update Your Wallet Software:
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Stay Ahead of Threats:</strong> Keep your wallet
                  software up-to-date to benefit from the latest security
                  patches and bug fixes.
                </li>
                <li>
                  <strong>Beware of Phishing Attacks:</strong> Only download
                  wallet software from official sources to avoid malicious
                  software.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                4. Be Wary of Phishing Attacks:
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Verify Links and Emails:</strong> Double-check the
                  sender's address and the URL before clicking any links.
                </li>
                <li>
                  <strong>Never Share Your Seed Phrase:</strong> Legitimate
                  services will never ask for your seed phrase.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                5. Store Your Seed Phrase Securely:
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Write it Down:</strong> Write your seed phrase on
                  paper and store it in a safe, fireproof location.
                </li>
                <li>
                  <strong>Use a Hardware Wallet:</strong> A hardware wallet
                  provides offline storage for your seed phrase, offering an
                  extra layer of security.
                </li>
                <li>
                  <strong>Avoid Digital Storage:</strong> Refrain from storing
                  your seed phrase digitally, as it could be compromised.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                6. Be Mindful of Scams and Social Engineering:
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Educate Yourself:</strong> Stay informed about the
                  latest crypto scams and social engineering tactics.
                </li>
                <li>
                  <strong>Verify Information:</strong> Cross-reference
                  information from multiple reliable sources before making
                  decisions.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                7. Limit Your Exposure:
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Avoid Overexposure:</strong> Don't store all your
                  crypto in a single wallet.
                </li>
                <li>
                  <strong>Diversify Your Holdings:</strong> Spread your assets
                  across multiple wallets to minimize potential losses.
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-4">
              By following these guidelines, you can significantly enhance the
              security of your crypto wallet. Remember, vigilance is key in the
              ever-evolving world of cryptocurrency.
            </p>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm italic text-gray-400">
                Disclaimer: This post is for informational purposes only and
                does not constitute financial advice. Always do your own
                research before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
