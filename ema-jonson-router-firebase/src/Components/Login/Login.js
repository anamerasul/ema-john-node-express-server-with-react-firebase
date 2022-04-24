import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'

import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState('')

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation()



    const handleGoogleSignIn = () => {


        signInWithGoogle(user)
    }


    const handleEmailBlur = e => {

        setEmail(e.target.value)
    }


    const handlePasswordBlur = e => {

        setPassword(e.target.value)
    }


    const handleLoginSubmit = (e) => {

        e.preventDefault()

        signInWithEmailAndPassword(email, password)



    }

    // console.log(name)
    const from = location?.state?.form?.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
    }





    return (
        // <div className="form-container mt-16">
        //     <div>

        //         <h2 className='form-title'>Login</h2>

        //         <div className="input-group">

        //             <label htmlFor="email">Email</label>

        //             <input className="border-red-500" type="email" name="email" id="email" />
        //         </div>
        //     </div>
        // </div>


        <div className="flex justify-center">
            <div className="w-full max-w-xs relative">


                <form onSubmit={handleLoginSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">


                    <h2 className="text-lg text-center text-[32px]">Login</h2>
                    <div className="mt-4 mx-auto">

                        {/* <button className="bg-blue-200 mx-auto text-center hover:bg-gray-600 hover:text-white text-black font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-[14px]">

                        </button> */}
                    </div>


                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="Email">
                            Email
                        </label>

                        <input onBlur={handleEmailBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required />
                    </div>



                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input onBlur={handlePasswordBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />

                        <p className="text-red text-xs italic">{error?.message}</p>

                    </div>

                    <div className="flex items-start mb-6">
                        {/* <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div> */}
                        {/* <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">Already register</label>
                </div> */}
                    </div>
                    <div className="flex items-center justify-between ">


                        <input type='submit' className=" ml-10 bg-orange-400 hover:bg-gray-600 hover:text-white text-black font-bold py-1 px-16 rounded-pill focus:outline-none  focus:shadow-outline" value='Login' />

                        {/* <button className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                            Forgot Password?
                        </button> */}
                        <br />

                        {/* <Link to="/signup" className="bg-blue-200 hover:bg-gray-600 hover:text-white text-black font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-[14px]">
                        Sign Up
                    </Link> */}



                    </div>

                    {
                        loading && <p>Loading</p>
                    }

                    <div className="p-4" >

                        <p className="text-xs">New to ema-jon? <Link className="text-xs text-orange-600" to="/signup">
                            Create a user

                        </Link></p>


                    </div>





                </form>

                <button onClick={handleGoogleSignIn} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 left-12   text-black font-bold py-1 px-8 rounded focus:outline-none focus:shadow-outline text-[14px]">
                    <p>Continue with</p>   <FcGoogle className='ml-2'></FcGoogle>
                </button>


            </div>


        </div>
    );
};

export default Login;