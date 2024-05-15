import React, {useContext, useState} from 'react'
import Logo from '../assets/Login.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';
import VideoBG from '../assets/Login.mp4'
import axios from 'axios
const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })

    const handleOnChange = (e) => {
      const {name,value} = e.target
      setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
      })
    }

    const navigate = useNavigate()
    const {fetchUserDetails}= useContext(Context)

    const handlesubmit = async(e)=>{
     e.preventDefault();
        axios.post('https://get-it-on-the-go-3o1f.vercel.app/login',{SummaryApi.signIn.url}).then(result=>console.log(result)).catch(err=>console.log(err)


     const dataResponse = await fetch(SummaryApi.signIn.url,{
        method : SummaryApi.signIn.method,
        credentials : 'include',
        headers : {
           "content-type" : "application/json"
        },
        body : JSON.stringify(data)
     }) 

    const dataApi = await dataResponse.json()

    if(dataApi.success){
       toast.success(dataApi.message)
       navigate('/home')
       fetchUserDetails()
       }
     if(dataApi.error){
        toast.error(dataApi.message);
        navigate('/login')
       }

    }

  return (
    <section id="login">
        <video src={VideoBG} autoPlay loop muted/>
        <div className='max-auto container p-4' id="login">
          <div className='bg-white p-2 w-full max-w-sm mx-auto rounded-3xl h-350'>
            <div className='w-20 h-20 mx-auto'>
                <img src={Logo} alt='Login'/>
                </div>  
                <form className='pt-6 flex flex-col gap-3' onSubmit={handlesubmit}>
                    <div className='grid'>
                        <label className='text-black'>Email : </label>
                        <div className='bg-slate-100 p-2'>
                        <input type='email' 
                        placeholder='Enter Your E-mail' 
                        name='email'
                        value={data.email}
                        onChange={handleOnChange}
                        required
                        className='w-full h-full outline-none bg-transparent  text-black'/>
                        </div>
                    </div>

                    <div>
                        <label className='text-black'>Password : </label>
                        <div className='bg-slate-100 p-2 flex'>
                        <input type={showPassword ? "text" : "password" } 
                        placeholder='Enter Your password' 
                        name='password'
                        value={data.password}
                        onChange={handleOnChange}
                        required
                        className='w-full h-full outline-none bg-transparent text-black'/>
                        <div className='cursor-pointer text-xl text-black' onClick={()=>setShowPassword((preve)=>!preve)}>
                            <span>
                                {
                                    showPassword ? (
                                        <FaEyeSlash/>
                                    )
                                    :
                                    (
                                        <FaEye/>   
                                    )
                                }
                                
                            </span>
                        </div>
                        </div>
                        <Link to = {'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600 text-black'>
                            Forget Password
                        </Link>
                    </div>

                    <button className='hover:bg-custom-400 bg-custom-50 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                </form>
                <p className='my-5 text-black'>Don't Have Account ? <Link to = {"/sign-up"} className='text-black hover:text-custom-50 hover:underline'>Sign Up</Link></p>
          </div>
        </div>
    </section>
  )
}

export default Login
