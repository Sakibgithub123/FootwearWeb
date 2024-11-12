import React, { useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { SiNamecheap } from 'react-icons/si';
import { MdAttachEmail } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import useAxiousSecure from '../../../hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import useUser from '../../../hooks/useUser';

const Profile = () => {
    const { email } = useParams()
    const { register, handleSubmit,  watch, formState: { errors } } = useForm();
    const {userData}=useUser(email)
    //update profile
    const onSubmit = async (data) => {
        const { name,email} = data;
        const imageFile = { image: data.image[0] };

        try {
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
                    image: photo,
                };

                // Save user info to the database
                const userResponse = await axiousSecure.patch(`/users/${email}`, userInfo);

                if (userResponse.data.modifiedCount>0) {
                    alert('Update success');
                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <SectionTitle heading={'Profile'}></SectionTitle>
            <div className='flex justify-evenly gap-10'>
                <div className="flex max-w-[350px]  flex-col mt-5 items-center justify-center space-y-4 rounded-xl bg-white p-8 shadow-lg dark:bg-[#18181B]">
                    <div className="group relative">
                        <img width={110} height={110} className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover" src={userData?.image} />
                        <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
                        <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-2xl text-gray-700 dark:text-white/90">{userData?.name}</h1>
                        <p className="text-sm text-gray-400">{userData?.role}</p>
                    </div>
                    <div className="flex w-full flex-col py-2">
                        <div className="space-y-1 text-left">
                            <p className="text-gray-500 dark:text-white/70">Name:</p>
                            <p className="font-mono text-xl text-gray-700 dark:text-white/50 flex gap-1 justify-center items-center"><SiNamecheap /><span>{userData?.name}</span></p>
                        </div>
                        <div className="space-y-1 text-left">
                            <p className="text-gray-500 dark:text-white/70">Email:</p>
                            <p className="font-mono text-xl text-gray-700 dark:text-white/50 flex gap-1 justify-center items-center"><MdAttachEmail /><span>{userData?.email}</span></p>
                        </div>
                        {/* <div className="space-y-1 text-left ">
                        <p className="text-gray-500 dark:text-white/70">Followers</p>
                        <p className="font-mono text-xl text-gray-700 dark:text-white/50">11</p>
                    </div> */}
                    </div>
                    {/* bio  */}
                    {/* social icons  */}
                </div>

                {/* //update profile  */}
                <div className=" w-full max-w-[350px] space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
                    <h1 className="text-3xl font-semibold tracking-tight">Edit Profile</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                                User Name
                            </label>
                            <input
                            {...register("name", { required: "Name is required" })}
                            defaultValue={userData?.name}
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="username"
                                placeholder="Enter username"
                                type="text"
                                required
                            />
                             {errors.name && <p role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="space-y-2 text-sm">
                            {/* <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                                User Email
                            </label> */}
                            <input
                            {...register("email", { required: "Email Address is required" })}
                            defaultValue={userData?.email}
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="email"
                                placeholder="Enter email"
                                type="hidden"
                                required
                            />
                            {errors.email && <p role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="space-y-2 text-sm">
                            <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                                Image
                            </label>
                            <input type="file" 
                            {...register("image",)}
                            className="file-input file-input-bordered w-full text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700" />
                        </div>
                        <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Save</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Profile;