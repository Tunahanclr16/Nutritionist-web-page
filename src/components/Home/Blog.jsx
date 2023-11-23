import blog1 from "../../assets/blog/blog1.png"
import blog2 from "../../assets/blog/blog2.png"
import blog3 from "../../assets/blog/blog3.png"
import blog4 from "../../assets/blog/blog4.png"

export default function Blog() {
  return (
  <>
    <div className=" sm:mt-[120px] mt-[60px] md:mt-[177px]">
            <h2 className="text-center mx-auto font-bold text-[24px] text-[#262626s] sm:text-[38px] md:text-[48px]">Our Blogs</h2>
            <p className="mx-auto text-center text-[#333333] text-[14px] sm:text-[16px] md:text-[18px] sm:w-[500px] w-[250px] md:w-[796px]">
            Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Heres what you can expect from our blog.
            </p>
    </div>
        <div className="flex flex-wrap mt-10 md:mt-20 items-center justify-center gap-4">
                <div className="flex flex-col gap-4 items-center">
                    <div className="bg-[#F6FBE9] sm:w-[630px] sm:h-[666px] w-full h-[442px] md:w-[783px] md:h-[732px]">
                            <img className="mx-auto object-cover mt-6 w-[310px] sm:w-[570px] md:w-[703px] h-[200px] sm:h-[336px] md:h-[428px] rounded" src={blog1} alt="" />
                           <div className=" max-w-[310px] sm:max-w-[570px] md:max-w-[703px] mx-auto mt-[12px] tex sm:mt-[20px] md:mt-[40px] ">
                           <span className=" text-[14px] sm:text-[16px] md:text-[18px] text-[#333333] ">
                                Weight Loss
                            </span>
                            <h3 className=" text-[20px] font-semibold text-[#262626] sm:text-[22px] md:text-[26px]">The Benefits of Hydration for Weight Loss</h3>
                            <p className="text-[#4C4C4D] mt-[18px] sm:mt-[20px] md:mt-[30px] text-[14px] sm:text-[16px] md:text-[18px]">
                            Discover how staying hydrated can support your weight loss goals and improve overall health.
                            </p>
                           </div>
                    </div>   
                    <div className="bg-[#F6FBE9] sm:w-[630px] sm:h-[666px] w-full h-[442px] md:w-[783px] md:h-[732px]">
                            <img className="mx-auto object-cover mt-6 w-[310px] sm:w-[570px] md:w-[703px] h-[200px] sm:h-[336px] md:h-[428px] rounded" src={blog2} alt="" />
                           <div className=" max-w-[310px] sm:max-w-[570px] md:max-w-[703px] mx-auto mt-[12px] tex sm:mt-[20px] md:mt-[40px] ">
                           <span className=" text-[14px] sm:text-[16px] md:text-[18px] text-[#333333] ">
                                Weight Loss
                            </span>
                            <h3 className=" text-[20px] font-semibold text-[#262626] sm:text-[22px] md:text-[26px]">The Benefits of Hydration for Weight Loss</h3>
                            <p className="text-[#4C4C4D] mt-[18px] sm:mt-[20px] md:mt-[30px] text-[14px] sm:text-[16px] md:text-[18px]">
                            Discover how staying hydrated can support your weight loss goals and improve overall health.
                            </p>
                           </div>
                    </div>                      
                </div>
                <div>
                <div className="flex flex-col gap-4 items-center">
                <div className="bg-[#F6FBE9] sm:w-[630px] sm:h-[666px] w-full h-[442px] md:w-[783px] md:h-[732px]">
                            <img className="mx-auto object-cover mt-6 w-[310px] sm:w-[570px] md:w-[703px] h-[200px] sm:h-[336px] md:h-[428px] rounded" src={blog3} alt="" />
                           <div className=" max-w-[310px] sm:max-w-[570px] md:max-w-[703px] mx-auto mt-[12px] tex sm:mt-[20px] md:mt-[40px] ">
                           <span className=" text-[14px] sm:text-[16px] md:text-[18px] text-[#333333] ">
                                Weight Loss
                            </span>
                            <h3 className=" text-[20px] font-semibold text-[#262626] sm:text-[22px] md:text-[26px]">The Benefits of Hydration for Weight Loss</h3>
                            <p className="text-[#4C4C4D] mt-[18px] sm:mt-[20px] md:mt-[30px] text-[14px] sm:text-[16px] md:text-[18px]">
                            Discover how staying hydrated can support your weight loss goals and improve overall health.
                            </p>
                           </div>
                    </div> 
                    <div className="bg-[#F6FBE9] sm:w-[630px] sm:h-[666px] w-full h-[442px] md:w-[783px] md:h-[732px]">
                            <img className="mx-auto object-cover mt-6 w-[310px] sm:w-[570px] md:w-[703px] h-[200px] sm:h-[336px] md:h-[428px] rounded" src={blog4} alt="" />
                           <div className=" max-w-[310px] sm:max-w-[570px] md:max-w-[703px] mx-auto mt-[12px] tex sm:mt-[20px] md:mt-[40px] ">
                           <span className=" text-[14px] sm:text-[16px] md:text-[18px] text-[#333333] ">
                                Weight Loss
                            </span>
                            <h3 className=" text-[20px] font-semibold text-[#262626] sm:text-[22px] md:text-[26px]">The Benefits of Hydration for Weight Loss</h3>
                            <p className="text-[#4C4C4D] mt-[18px] sm:mt-[20px] md:mt-[30px] text-[14px] sm:text-[16px] md:text-[18px]">
                            Discover how staying hydrated can support your weight loss goals and improve overall health.
                            </p>
                           </div>
                    </div>                 
                </div> 
               </div>
                </div>
  </>
  ) 
}





