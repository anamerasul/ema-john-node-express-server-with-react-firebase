import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [date, setDate] = useState('')
    const [error, setError] = useState('')


    const handleNameBlur = (e) => {

        setName(e.target.value)
    }

    const handleEmailBlur = e => {

        setEmail(user.email)
    }


    const handleAddressBlur = e => {

        // setPassword(e.target.value)

        setAddress(e.target.value)
    }

    const handlePhoneNumberdBlur = e => {
        console.log(e.target.value)

        const num = e.target.value
        console.log(typeof +num)

        if (num) {
            setPhoneNumber(num)
        }
    }
    const handleDateBlur = e => {

        setDate(e.target.value)
    }


    const handleShipment = (e) => {

        e.preventDefault()
        const shiping = { name, email, address, phoneNumber, date }

        console.log(shiping)


    }

    // console.log(name)






    return (


        <div>
            <div className="flex justify-center">
                <div className="w-full max-w-xs relative">


                    <form onSubmit={handleShipment} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">


                        <h2 className="text-lg text-center text-[32px]">Shiping information</h2>
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

                            <input value={user.email} onBlur={handleEmailBlur} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder={user.email} required />
                        </div>



                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                                Address
                            </label>
                            <input onBlur={handleAddressBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Dhaka,bangladesh" required />

                        </div>


                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                                Phone number
                            </label>
                            <input onBlur={handlePhoneNumberdBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="PhoneNumber" type="number" placeholder="+88347645644" required />

                            {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
                            <p className="text-red-600 text-xs italic">{error}</p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                                Date
                            </label>
                            <input onBlur={handleDateBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Date" type="date" placeholder="22-mar-2022" required />

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


                            <input type='submit' className=" ml-10 bg-orange-400 hover:bg-gray-600 hover:text-white text-black font-bold py-1 px-16 rounded-pill focus:outline-none  focus:shadow-outline" value='Add shippinggit' />

                            {/* <button className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                            Forgot Password?
                        </button> */}
                            <br />

                            {/* <Link to="/signup" className="bg-blue-200 hover:bg-gray-600 hover:text-white text-black font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-[14px]">
                        Sign Up
                    </Link> */}



                        </div>

                        <div className="p-4" >

                            {/* <p className="text-xs">Already user? <Link className="text-xs text-orange-600" to="/login">
                                Login ema jonson

                            </Link></p> */}


                        </div>





                    </form>


                </div>


            </div>
        </div>
    );
};

export default Shipment;