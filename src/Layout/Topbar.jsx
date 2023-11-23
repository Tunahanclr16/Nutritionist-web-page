import Abstractone from "../assets/Abstractone.png"
import Icon from "../assets/Icon.png"
export default function Topbar() {
  return (
<div className="bg-[#234338] h-[72px] flex justify-center items-center">
   <div className="flex justify-center sm:justify-between items-center w-full max-w-[358px]  mx-2 sm:max-w-[1280px] md:max-w-[1596px] h-[40px] sm:h-[44px] bg-[#2C5446] rounded">
      <div className="sm:block hidden w-[143px]">
         <img className="object-cover" src={Abstractone} alt="" />
      </div>
      <div className="flex items-center gap-2">
        <img src={Icon} alt="" />
         <h2 className="text-[#fff] sm:w-[360px] w-[280px] md:text-[18px] sm:text-[16px] text-[12px]">
         Join Our Personalized Nutrition Demo For Free
         </h2>
      </div>
      <div className="sm:block hidden w-[143px]">
         <img className="object-cover" src={Abstractone} alt="" />
      </div>
   </div>
</div>

 
  )
}
