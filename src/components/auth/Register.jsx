import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Sigup } from "../../store/actions/userActions";
export default function Register () {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const handleOnSubmitRegister = (e) => {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password,
            confirm_password: confirmpassword,
        }
        dispatch(Sigup(user));
    }
    return(
           <section className="h-screen">
        <div className="container px-6 py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <form onSubmit={handleOnSubmitRegister}>
                <div className="mb-6">
                    <input  type="text" 
                            name="name" 
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                         
                    />
           
                </div>
                <div className="mb-6">
                    <input  type="text" 
                            name="email" 
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                    />
      
                </div>
                <div className="mb-6">
                    <input  type="password" 
                            name="password" 
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
             
                </div>
                <div className="mb-6">
                    <input  type="password" 
                            name="confirm_password" 
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Confirm Password" 
                            value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                
                </div>

                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    Register
                </button>
                <div className="flex justify-between items-center mb-6 mt-6">
                    <Link to="/login"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >Already Registered.</Link>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>
    );
}