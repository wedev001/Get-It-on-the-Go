import React, { useState, useContext } from 'react';
import Logo from '../assets/Login.gif';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';
import VideoBG from '../assets/Login.mp4';

const API_URL = 'https://get-it-on-the-go-3o1f.vercel.app/home';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: SummaryApi.signIn.method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const apiResponse = await response.json();

      if (apiResponse.success) {
        toast.success(apiResponse.message);
        navigate('/home');
        fetchUserDetails();
      } else {
        toast.error(apiResponse.message);
        navigate('/login');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <section id="login">
      <video src={VideoBG} autoPlay loop muted />
      <div className="max-auto container p-4" id="login">
        <div className="bg-white p-2 w-full max-w-sm mx-auto rounded-3xl h-350">
          <div className="w-20 h-20 mx-auto">
            <img src={Logo} alt="Login" />
          </div>
          <form className="pt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="grid">
              <label className="text-black">Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter Your E-mail"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent text-black"
                />
              </div>
            </div>

            <div>
              <label className="text-black">Password :</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Your password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent text-black"
                />
                <div
                  className="cursor-pointer text-xl text-black"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <Link
                  to={'/forgot-password'}
                  className="block w-fit ml-auto hover:underline hover:text-red-600 text-black"
                >
                  Forget Password
                </Link>
              </div>
            </div>

            <button
              className="hover:bg-custom-400 bg-custom-50 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
            >
              Login
            </button>
          </form>
          <p className="my-5 text-black">
            Don't Have Account ?{' '}
            <Link to={"/sign-up
