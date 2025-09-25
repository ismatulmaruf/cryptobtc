import Layout from "../Layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <section
        className="flex flex-col items-center py-16 px-4 min-h-[100vh] text-white relative"
        style={{
          backgroundImage: `url('https://i.imgur.com/tU6TJOi.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for Contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl text-center space-y-12">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
            Contact Us Today
          </h1>

          {/* Contact Information Section */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-xl">
            {/* Contact Details */}
            <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0 text-left">
              <h2 className="text-3xl font-semibold text-gray-200">
                Get in Touch
              </h2>
              <div>
                <p className="text-xl text-gray-400">Phone</p>
                <p className="text-lg text-yellow-500 font-medium">
                  +971 XXXXXXXX
                </p>
              </div>
              <div>
                <p className="text-xl text-gray-400">Email</p>
                <p className="text-lg text-yellow-500 font-medium">
                  admin@crypto.com
                </p>
              </div>
              <div>
                <p className="text-xl text-gray-400">Address</p>
                <p className="text-lg text-yellow-500 font-medium">
                  United Arab Emirates
                </p>
              </div>
            </div>

            {/* Commitment Section */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl font-semibold text-gray-200">
                Our Commitment
              </h2>
              <p className="text-lg text-gray-400 mt-4">
                At Crypto Gold Minings, we are committed to providing the best
                customer support and assistance in your cryptocurrency journey.
                Whether you have questions about transactions or need help, we
                are here for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
