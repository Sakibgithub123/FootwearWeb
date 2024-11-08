import { useEffect, useState } from "react";
import useAxiousSecure from "./useAxiousSecure";



const useCategoryBrand = () => {
    const axiousSecure = useAxiousSecure()
    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await axiousSecure.get('/getCategoryBrand')
            const data = res.data
            const [categoryData, brandData] = data
            setCategory(categoryData)
            setBrand(brandData)
        }
        fetchData()

    }, [category,brand])
    return [category,brand]
};

export default useCategoryBrand;