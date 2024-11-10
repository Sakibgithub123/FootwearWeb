import { useForm } from "react-hook-form";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import useCategoryBrand from "../../../hooks/useCategoryBrand";
import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddBrand = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const axiousSecure = useAxiousSecure()
    const [,brand] = useCategoryBrand()
    // console.log(brand);
    const onSubmit = async (data) => {
        const brandName = { brand: data.brand }
        const res = await axiousSecure.post('/addBrand', brandName)
        if (res.data.insertedId) {
            alert('Brand added')
        }

    }
    //handle delete
    const handleDelete = async (id) => {
        const res = await axiousSecure.delete(`/dltBrand/${id}`)
        if (res.data.deletedCount > 0) {
            alert('deleted')
        }

    }
    return (
        <div className="brand">
            <SectionTitle heading={'Brands'}></SectionTitle>
            <div className="flex justify-center">
                <div className="w-full max-w-md rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
                    <div className="mb-6">
                        <h2 className="text-center text-2xl pb-2 font-semibold text-orange-300 tracking-tight">Brand Add Form</h2>
                        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium text-left" htmlFor="name">
                                Brand Name
                            </label>
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                placeholder="Enter brand name"
                                {...register('brand', { required: true })}
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
                        <button className="rounded-md bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
                    </form>
                </div>
            </div>
            {/* table */}

            <div className="overflow-x-auto ">
                <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                    <thead>
                        <tr className="bg-orange-400 text-white">
                            <th className="py-2 px-3  text-sm border-b">#</th>
                            <th className="py-2 px-3  text-sm border-b">BRAND NAME</th>
                            <th className="py-2 px-3  text-sm border-b">STATUS</th>
                            <th className="py-2 px-3   border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brand.map((brands, index) =>
                                <tr key={index} className="hover:bg-gray-50 transition duration-300">
                                    <td className="py-2 px-3  border-b text-sm font-bold">{index} </td>
                                    <td className="py-2 px-3  border-b text-sm font-bold">{brands.brand}</td>
                                    <td className="py-2 px-3  border-b text-end">
                                        <button onClick={() => handleDelete(brands._id, brands.brand)} className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-1 px-1 rounded-md"><MdDeleteForever /></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AddBrand;