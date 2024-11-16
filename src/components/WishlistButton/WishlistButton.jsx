import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiousSecure from '../../hooks/useAxiousSecure';

const WishlistButton = ({ id,wishes,refetch }) => {
    // const { _id }
    const {user}=useContext(AuthContext)
    const email=user?.email
    const axiousSecure=useAxiousSecure()
    const handleWishlist=async(id)=>{
          const wishlistInfo={
            pId:id,
            email:email
          }
        //   console.log(wishlistInfo);
         if(user && email){
            const isWishlist=wishes.some(wish => wish.productDetails._id === id)
            // console.log(isWishlist);
            if(isWishlist){
                const res=await axiousSecure.delete(`/api/removeWishlist/${id}`)
                if(res.data.result.deletedCount >0 ){
                    // console.log(res.data);
                    refetch()
                  alert(res.data.message)
                }
            }else{
                const res=await axiousSecure.post('/api/addWishlist',wishlistInfo)
                if(res.data.result.insertedId){
                    // console.log(res.data);
                    refetch()
                  alert(res.data.message)
                }
            }
         }else {
            navigate('/login', { state: { from: location } })
        }
    }
    return (
        <div className="flex items-center">
            <svg onClick={()=>handleWishlist(id)} width={30} className={`cursor-pointer text-[10px] md:text-sm fill-transparent stroke-white stroke-2 ${wishes.some(wish => wish.productDetails._id === id) ?'fill-red-500':'stroke-red-500'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></svg>
            {/* <svg onClick={()=>handleWishlist(id)} width={30} className={`cursor-pointer fill-transparent stroke-white stroke-2 ${wishes.some(wish => wish.productDetails._id === item._id) ?'fill-red-500':'stroke-red-500'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></svg> */}
        </div>
    );
};

export default WishlistButton;