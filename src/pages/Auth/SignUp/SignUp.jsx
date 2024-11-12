import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiousSecure from '../../../hooks/useAxiousSecure';
import { useNavigate } from 'react-router-dom';
import useAxiousPublic from '../../../hooks/useAxiousPublic';
const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const axiousSecure = useAxiousSecure()
    const axiousPublic = useAxiousPublic()
    const [emailError, setEmailError] = useState('')
    const navigate = useNavigate()
    const image_api_key = import.meta.env.VITE_imageBB_api;
    const imageUploadURL = `https://api.imgbb.com/1/upload?key=${image_api_key}`
    const onSubmit = async (data) => {
        const { name, email, password } = data;
        const imageFile = { image: data.image[0] };

        try {
            // Create user
            const result = await createUser(email, password);
            console.log(result);

            // Upload image
            const imageResponse = await axiousPublic.post(imageUploadURL, imageFile, {
                headers: { 'content-type': 'multipart/form-data' },
            });

            if (imageResponse.data.success) {
                const photo = imageResponse.data.data.display_url;

                // Update user profile
                const profileUpdate = await updateUserProfile(name, photo);
                console.log(profileUpdate);

                const userInfo = {
                    name: name,
                    email: email,
                    image: photo,
                };

                // Save user info to the database
                const userResponse = await axiousSecure.post('/users', userInfo);

                if (userResponse.data.insertedId) {
                    alert('Sign-up success');
                    setEmailError("");
                    navigate('/login');
                }
            }
        } catch (error) {
            console.error(error);
            if (error.code === "auth/email-already-in-use") {
                setEmailError("Email Already Exists");
            } else {
                console.error(error.message);
            }
        }
    };

    return (
        <div className="mx-auto w-full max-w-md space-y-4 my-20 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <h1 className="text-3xl font-semibold">Sign Up</h1>
            <p className='text-center py-1 text-red-400'>{emailError}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="username_2" className="block font-medium text-left">
                        Name
                    </label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        aria-invalid={errors.name ? "true" : "false"}
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="username_2"
                        placeholder="Enter username"
                        type="text"
                    />
                    {/* {errors.name?.type === 'required' && <p role="alert text-left">Name is required</p>} */}
                    {errors.name && <p role="alert ">{errors.name?.message}</p>}
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 text-left">
                    <label htmlFor="username_2" className="block font-medium">
                        Email
                    </label>
                    <input
                        {...register("email", { required: "Email Address is required" })}
                        aria-invalid={errors.email ? "true" : "false"}
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="email"
                        placeholder="Enter Email"
                        type="email"
                    />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}
                </div>

                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="password_2" className="block font-medium text-left">
                        Password
                    </label>
                    <input
                        {...register("password", { required: true, minLength: 6 })}
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"

                        id="password_2"
                        placeholder="Enter password"
                        type="password"
                    />
                    {errors.password?.type === 'required' && <p role="text-left">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p role="text-left">Password must be less than is 8</p>}
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 text-left">
                    <label htmlFor="username_2" className="block font-medium">
                        Image
                    </label>
                    <input
                        {...register("image", { required: "Image is required" })}
                        type="file"
                        className="file-input file-input-bordered  w-full focus:ring-1 focus-visible:outline-none dark:border-zinc-700" />
                    {errors.image && <p role="alert">{errors.image?.message}</p>}
                </div>
                <div className="flex justify-end text-xs">
                    <a href="#" className="text-zinc-700 hover:underline dark:text-zinc-300">
                        Forgot Password?
                    </a>
                </div>


                <button className="w- rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>

            </form>

            <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">

                Don&apos;t have an account?

                <a href="/login" className="font-semibold underline">

                    LogIn

                </a>

            </p>

            <div className="my-8 flex items-center">

                <hr className="flex-1 border-gray-400" />

                <div className="mx-4 text-gray-400">OR</div>

                <hr className="flex-1 border-gray-400" />

            </div>

            {/* Social icons */}

            <div className="flex justify-center space-x-4 *:border hover:*:bg-zinc-400/20 *:dark:border-zinc-700">

                <button aria-label="Log in with Google" className="rounded-full p-3">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">

                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>

                    </svg>

                </button>

                <button aria-label="Log in with Twitter" className="rounded-full p-3">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">

                        <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>

                    </svg>

                </button>

                <button aria-label="Log in with GitHub" className="rounded-full p-3">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">

                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>

                    </svg>

                </button>

            </div>

        </div>
    );
};

export default SignUp;