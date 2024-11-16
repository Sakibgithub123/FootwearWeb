
import freeShoppinngImg from "../../../assets/img/bannercard/freeshipping.png"
import moneBackImg from "../../../assets/img/bannercard/money-back.png"
import safePaymentImg from "../../../assets/img/bannercard/safe-payment.png"
import loyalityImg from "../../../assets/img/bannercard/loyalty-customer.png"
const BannerCard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex flex-col items-center">
                <img className="w-[60px] md:w-[100px]" src={freeShoppinngImg} alt="" />
                <h3 className="font-bold text-base md:text-2xl py-2">Free Shipping</h3>
                <p className="text-xs md:text-sm">Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!</p>
            </div>
            <div className="flex flex-col items-center">
                <img className="w-[60px] md:w-[100px]"  src={moneBackImg} alt="" />
                <h3 className="font-bold text-base md:text-2xl py-2">30 DAYS MONEY BACK</h3>
                <p className="text-xs md:text-sm">100% satisfaction guaranteed, or get your money back within 30 days!</p>
            </div>
            <div className="flex flex-col items-center">
                <img className="w-[60px] md:w-[100px]"  src={safePaymentImg} alt="" />
                <h3 className="font-bold text-base md:text-2xltext-2xl py-2">Safe Payment</h3>
                <p className="text-xs md:text-sm">Pay with the world’s most popular and secure payment methods.</p>
            </div>
            <div className="flex flex-col items-center">
                <img className="w-[60px] md:w-[100px]"  src={loyalityImg} alt="" />
                <h3 className="font-bold text-base md:text-2xl py-2">Loyalty customer</h3>
                <p className="text-xs md:text-sm">Card for the other 30% of their purchases at a rate of 1% cash back.</p>
            </div>
            
        </div>
    );
};

export default BannerCard;