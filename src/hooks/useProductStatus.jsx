import { useEffect, useState } from "react";

const useProductStatus = ({status}) => {
    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${status}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
            setLoading(false)
           
        })
    },[])
    return [product,loading]
};

export default useProductStatus;