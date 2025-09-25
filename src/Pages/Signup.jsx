import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { createAccount } from "../Redux/Slices/AuthSlice";
import InputBox from "../Components/InputBox/InputBox";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { refer } = useParams();
  console.log(refer);

  const [isLoading, setIsLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  }

  async function createNewAccount(event) {
    event.preventDefault();
    if (
      !signupData.email ||
      !signupData.password ||
      !signupData.fullName ||
      !signupData.phone
    ) {
      toast.error("Please fill all the details");
      return;
    }

    // checking name field length
    if (signupData.fullName.length < 3) {
      toast.error("Name should be atleast of 3 characters");
      return;
    }
    // checking valid email
    if (!signupData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      toast.error("Invalid email id");
      return;
    }

    // dispatch create account action
    const response = await dispatch(createAccount({ ...signupData, refer }));
    if (response?.payload?.success) {
      setSignupData({
        fullName: "",
        email: "",
        password: "",
        phone: "",
      });

      navigate("/");
    }
  }

  return (
    <Layout>
      <section className="relative flex flex-col gap-6 items-center py-8 px-3 min-h-[100vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.imgur.com/AnaUA4R.jpeg')",
            opacity: 0.5, // Adjust the background's opacity
          }}
        ></div>
        {/* Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <form
          onSubmit={createNewAccount}
          autoComplete="off"
          noValidate
          className="relative flex flex-col gap-4 rounded-lg md:py-5 py-7 md:px-7 px-3 md:w-[500px] bg-[#0A1018]/80 border-2 border-[#00D084] w-full shadow-custom backdrop-blur-md"
        >
          <h1 className="text-center text-purple-500 text-4xl font-bold font-inter">
            Registration Page
          </h1>

          {/* Name */}
          <InputBox
            label={"Name"}
            name={"fullName"}
            type={"text"}
            placeholder={"Enter your name..."}
            onChange={handleUserInput}
            value={signupData.fullName}
          />
          {/* Mobile Number */}
          <InputBox
            label={"Mobile Number"}
            name={"phone"}
            type={"text"}
            placeholder={"Enter your Mobile Number..."}
            onChange={handleUserInput}
            value={signupData.phone}
          />
          {/* Email */}
          <InputBox
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Enter your email..."}
            onChange={handleUserInput}
            value={signupData.email}
          />
          {/* Referral Email */}
          <InputBox
            label={"Refferal Email"}
            name={"refer"}
            type={"email"}
            placeholder={"Enter your Referral email..."}
            onChange={handleUserInput}
            value={refer}
          />
          {/* Password */}
          <InputBox
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Enter your password..."}
            onChange={handleUserInput}
            value={signupData.password}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 bg-yellow-500 text-white hover:bg-yellow-300 transition-all ease-in-out duration-300 rounded-md py-2 font-nunito-sans font-[500] text-lg cursor-pointer"
          >
            {isLoading ? "Creating account" : "Create account"}
          </button>

          {/* Login Link */}
          <p className="text-center font-inter text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="link text-blue-600 font-lato cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}
