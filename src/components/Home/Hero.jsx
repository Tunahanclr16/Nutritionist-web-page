import HeroLogo from "../../assets/home/HeroLogo.png";
import Customers from "../../assets/home/Customers.png";


export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row  sm:max-w-[1280px] md:max-w-[1920px] items-center gap-[30px]">
      <div className=" flex   w-full h-[374px] sm:w-full   md:w-[949px] sm:h-[712px] md:h-[832px] rounded-r-3xl">
        <img
          src={HeroLogo}
          alt=""
          className="w-full h-full object-cover rounded-r-3xl"
        />
      </div>
      <div className="basis-1/4 flex-1  max-w-[759px] p-2  mt-6 md:mt-0 md:ml-6 items-center">
      <h3 className="text-[#1A3129] sm:text-left text-center border-b-2 border-b-[#CBEA7B] text-[18px] sm:text-[22px] md:text-[28px] font-semibold">
          Transform Your ❤️ Health with
        </h3>
        <h1 className="font-bold sm:text-left text-center text-[#1A3129] text-[38px] sm:text-[48px] md:text-[58px] mt-2 leading-[50px] md:leading-[66px]">
          Personalized Nutrition Coaching
        </h1>
        <p className="text-[#333333] mx-auto md:text-left text-center md:mx-0 text-[18px] mt-[14px] sm:mt-[20px] font-medium md:w-[100%]">
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified nutritionists
          are here to guide you on your weight loss journey, providing
          customized plans and ongoing support. Start your transformation today
          and experience the power of personalized nutrition coaching.
        </p>
        <div className="flex items-center mt-[50px] gap-[14px]">
          <button className="md:w-[187px] md:h-[59px] text-black text-[14px]  w-[149px] h-[49px] md:text-[18px] font-semibold rounded bg-[#CBEA7B]">
              Get Starter Today
          </button>
          <button className="md:text-[18px] rounded text-black bg-[#F6FBE9] md:w-[154px] md:h-[59px] w-[123px] h-[49px] font-semibold">
            Book a Demo
          </button>
        </div>
        <div className="flex mt-[30px] md:mt-[70px] items-center gap-[8px]">
          <img className="md:w-[130px] object-cover w-[102px]" src={Customers} alt="" />
          <h3 className=" text-[16px] sm:text-[18px] md:text-[20px] text-black font-semibold"><span className="text-[#468671]">430+ </span> Happy Customers</h3>
          </div>
      </div>
    </div>
  );
}
