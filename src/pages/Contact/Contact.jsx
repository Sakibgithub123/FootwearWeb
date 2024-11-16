import React, { useRef } from 'react';
import contactImg from "../../assets/img/contact/Contact-us.jpg"
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const form = useRef();
    const serviceId = import.meta.env.VITE_EmailJs_serviceId
    const templateId = import.meta.env.VITE_EmailJs_templateId
    const userId = import.meta.env.VITE_EmailJs_publicKey
    const onSubmit = () => {
        emailjs.sendForm(serviceId, templateId, form.current, userId)
            .then(result => {
                alert('Message Sent Successfully!')
                reset()
            })
            .catch(error => {
                console.error('Error sending message', error);
                alert('Failed To Sending Message.Please Try Again.')

            })

    }
    return (
        <div>
            <div className='mt-5 md:mt-0'>
                <img src={contactImg} alt="contact img" />
            </div>
            <SectionTitle heading={'Contact Us'}></SectionTitle>
            <p className="text-center text-xs  md:text-sm italic text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p>
            <div className='flex flex-col md:flex-row justify-center items-center md:gap-20'>
                <div>
                    <p className="text-center text-xs  md:text-sm italic text-zinc-500 dark:text-zinc-400 my-2">Find Us On Map!</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.4993006025!2d90.2548719436871!3d23.781067239905454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1731582581035!5m2!1sen!2sbd" className='md:w-[600px] md:h-[450px] rounded w-full max-w-md'  style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="w-full max-w-md rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900 mt-20">
                    <div className="mb-6">
                        <h2 className="text-center  text-sm md:text-2xl font-semibold tracking-tight">Contact Us</h2>
                    </div>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                        <div className="space-y-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium text-xs md:text-sm" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-xs md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                id="name"
                                placeholder="Your Name"
                                {...register("name", { required: "Name is required" })}
                                type="text"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium" htmlFor="_email">
                                Email
                            </label>
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-xs md:text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                id="_email"
                                placeholder="Your Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email address" }
                                })}
                                type="email"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium" htmlFor="_message">
                                Message
                            </label>
                            <textarea
                                className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                id="_message"
                                placeholder="what's in your mind"
                                {...register("message", { required: "Message is required" })}
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                        </div>
                        <button className="rounded-md text-[10px] text-sm bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;