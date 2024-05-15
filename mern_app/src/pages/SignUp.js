import React,{useState} from 'react'
import Logo from '../assets/Login.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import VideoBG from '../assets/Login.mp4'
const SignUp = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : "",
        name : "",
        Confirmpassword : "",
        ProfilePic : "",
    })
    // console.log(data);

    const navigate = useNavigate()

    const handleOnChange = (e) => {
      const {name,value} = e.target
      setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
      })
    }

    const handlesubmit = async (e)=>{
     e.preventDefault();

     if(data.password === data.Confirmpassword){
        const dataResponse = await fetch(SummaryApi.signUp.url,{
            method : SummaryApi.signUp.method,
            headers : {
             "content-type" : "application/json"   
            },
             body : JSON.stringify(data)
          })   
         
          const dataApi = await dataResponse.json()

          if(dataApi.success){
             toast.success(dataApi.message)
             navigate("/login")
          }

          if(dataApi.error){
            toast.error(dataApi.message)
          }
            
    
     }
     else{
        toast.error("Password and Confirm Password are not same")
     }

    }
    const handleUploadPic = async(e) => {
        const file=e.target.files[0]

        const imagePic =  await imageTobase64(file)
        setData((preve)=>{
            return{
                ...preve,
                ProfilePic : imagePic
            }
        })
    }
    // console.log("Data Login",data);
  return (
    <section id="sign-up">
         <video src={VideoBG} autoPlay loop muted/>
        <div className='max-auto container p-10' id="sign-Up">
          <div className='bg-white p-2 w-full max-w-sm mx-auto rounded-3xl'>

            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                <div>
                    <img src={data.ProfilePic || Logo} alt='Login'/>
                    </div>
                    <form>
                    <label className='text-black'>
                    <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 text-center absolute bottom-0 w-full cursor-pointer text-black'>
                        Upload Photo
                    </div>
                        <input type='file' className='hidden' onChange = {handleUploadPic}/>
                    </label>
                    </form>
                </div>  
                <form className='pt-6 flex flex-col gap-3' onSubmit={handlesubmit}>
                <div className='grid'>
                        <label className='text-black'>Name : </label>
                        <div className='bg-slate-100 p-2'>
                        <input type='text' 
                        placeholder='Enter Your Full Name' 
                        name='name'
                        value={data.name}
                        onChange={handleOnChange}
                        required
                        className='w-full h-full outline-none bg-transparent text-black'/>
                        </div>
                    </div>
                    <div className='grid'>
                        <label className='text-black'>Email : </label>
                        <div className='bg-slate-100 p-2'>
                        <input type='email' 
                        placeholder='Enter Your E-mail' 
                        name='email'
                        value={data.email}
                        onChange={handleOnChange}
                        required
                        className='w-full h-full outline-none bg-transparent text-black'/>
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
                    </div>

                    <div>
                        <label className='text-black'> Confirm Password : </label>
                        <div className='bg-slate-100 p-2 flex'>
                        <input type={showPassword ? "text" : "password" } 
                        placeholder='Confirm password' 
                        name='Confirmpassword'
                        value={data.Confirmpassword}
                        onChange={handleOnChange}
                        required
                        className='w-full h-full outline-none bg-transparent text-black'/>
                        <div className='cursor-pointer text-xl text-black' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                            <span>
                                {
                                    showConfirmPassword ? (
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
                    </div>
                   

                    <button className='hover:bg-custom-400 bg-custom-50 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>
                </form>
                <p className='my-5 text-black'>Already Have Account ? <Link to = {"/login"} className='text-black hover:text-custom-50 hover:underline'>Login</Link></p>
          </div>
        </div>
    </section>
  )
}

export default SignUp