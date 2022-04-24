import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import "./SignUp.css"
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { sendEmailVerification } from 'firebase/auth';



const SignUp = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const [signInWithGoogle, loading] = useSignInWithGoogle(auth);





    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


    const handleGoogleSignUp = () => {

        signInWithGoogle(user)

    }

    const handleNameBlur = (e) => {

        setName(e.target.value)
    }

    const handleEmailBlur = e => {

        setEmail(e.target.value)
    }


    const handlePasswordBlur = e => {

        setPassword(e.target.value)
    }

    const handleConfrimPasswordBlur = e => {

        setConfirmPassword(e.target.value)
    }


    const handleSignUPSubmit = (e) => {

        e.preventDefault()

        if (password !== confirmPassword) {
            setError('your password didnot match')
            return;
        }

        if (password.length < 6) {

            setError('password must be 6 charecter long')
        }


        createUserWithEmailAndPassword(email, password)

        setName(user.displayName)
        verifyEmail()


    }

    // console.log(name)

    console.log(user);


    const verifyEmail = () => {

        sendEmailVerification(auth.currentUser)
            .then(() => {

                console.log('verify')
            })
    }

    const navigate = useNavigate()

    if (user) {
        navigate('/shop')
    }


    return (


        <div>
            <div className="flex justify-center">
                <div className="w-full max-w-xs relative">


                    <form onSubmit={handleSignUPSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">


                        <h2 className="text-lg text-center text-[32px]">Sign up</h2>
                        <div className="mt-4 mx-auto">

                            {/* <button className="bg-blue-200 mx-auto text-center hover:bg-gray-600 hover:text-white text-black font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-[14px]">

                        </button> */}
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>

                            <input onBlur={handleNameBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" required />
                        </div>
                        {

                            !name && <p className="text-red-600 text-xs italic">Provide a name</p>
                        }



                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>

                            <input onBlur={handleEmailBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required />
                        </div>



                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input onBlur={handlePasswordBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />

                            <p className="text-red text-xs italic">Please choose a password.</p>
                        </div>


                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                                Confrim Password
                            </label>
                            <input onBlur={handleConfrimPasswordBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="ConfrimPassword" type="password" placeholder="******************" required />

                            {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
                            <p className="text-red-600 text-xs italic">{error}</p>
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


                            <input type='submit' className=" ml-10 bg-orange-400 hover:bg-gray-600 hover:text-white text-black font-bold py-1 px-16 rounded-pill focus:outline-none  focus:shadow-outline" value='Sign up' />

                            {/* <button className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                            Forgot Password?
                        </button> */}
                            <br />

                            {/* <Link to="/signup" className="bg-blue-200 hover:bg-gray-600 hover:text-white text-black font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-[14px]">
                        Sign Up
                    </Link> */}



                        </div>

                        <div className="p-4" >

                            <p className="text-xs">Already user? <Link className="text-xs text-orange-600" to="/login">
                                Login ema jonson

                            </Link></p>


                        </div>





                    </form>

                    <button onClick={handleGoogleSignUp} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 left-12   text-black font-bold py-1 px-8 rounded focus:outline-none focus:shadow-outline text-[14px]">
                        <p>Continue  with</p>   <FcGoogle className='ml-2'></FcGoogle>
                    </button>


                </div>


            </div>
        </div>
    );
};

export default SignUp;