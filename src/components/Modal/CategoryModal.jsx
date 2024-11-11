import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import useAxiousSecure from "../../hooks/useAxiousSecure";

const CategoryModal = ({id}) => {
    const { register, handleSubmit,setValue, formState: { errors }, } = useForm()
    const axiousSecure = useAxiousSecure()
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        axiousSecure.get(`/category/${id}`)
        .then(res=>{
            setValue('category',res.data.category)
            setValue('status',res.data.status)

        })
        console.log(id);
    }, [id])
    const handleModal = (id) => {
        setOpenModal(true, id)
    }
    const onSubmit = (data) => {
        const categoryData = {
            category: data.category,
            status: data.status
        }
        const res = axiousSecure.patch(`/updateCategory/${id}`, categoryData)
        if (res.data.insertedId) {
            alert('update success')
        }

    }
    return (
        <div>
            <button onClick={() => handleModal(id)} className="bg-orange-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-1 px-1 rounded-md"><FaEdit /></button>
            <div className="mx-auto w-fit">
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] w-screen ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-96 rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${openModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                        <svg onClick={() => setOpenModal(false)} className="absolute right-3 top-3 w-6 cursor-pointer fill-zinc-600 dark:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path></svg>
                        <h1 className="mb-2 text-2xl font-semibold text-orange-300 text-center">UPDATE BRAND!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium text-left" htmlFor="name">
                                    Category Name
                                </label>
                                <input
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    placeholder="Enter category name"
                                    {...register('category', { required: true })}
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium text-left" htmlFor="name">
                                    Status
                                </label>
                                <select
                                    {...register('status', { required: true })}
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                >
                                    <option value="Published">Published</option>
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Hidden">Hidden</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button onClick={() => setOpenModal(false)} className="rounded-md bg-orange-500 px-6 py-[6px] text-white hover:bg-emerald-700">
                                    Update
                                </button>
                                <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryModal;