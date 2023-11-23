import Icon1 from "../../assets/features/icon1.png";
import Icon2 from "../../assets/features/icon2.png";
import Icon3 from "../../assets/features/icon3.png";
import Icon4 from "../../assets/features/icon4.png";
import Icon5 from "../../assets/features/icon5.png";
import Icon6 from "../../assets/features/icon6.png";

export default function Features() {
  return (
    <div className=" mt-[80px] md:mt-[149px] ">
      <h2 className="  text-[28px] text-[#262626] text-center sm:text-[38px] md:text-[48px] font-bold">
        Features
      </h2>
      <p className="mt-[10px] text-[#333333] mx-auto text-center  sm:text-[16px] text-[14px]  md:text-[18px]">
        Welcome to the Feature Section of Nutritionist, your ultimate
        destination for all things nutrition and wellness.
      </p>
      <div className=" mt-[50px] sm:mt-[80px] flex justify-center items-center flex-wrap gap-2 sm:max-w-[1280px] md:max-w-[1596px] mx-auto">
        <div className=" sm:w-[630px] rounded md:w-[783px] w-[358px] overflow-hidden h-[229px] flex-col  sm:h-[250px] md:h-[253px] bg-[#F6FBE9]">
          <div className="md:max-w-[683px] mt-7 sm:mt-12 sm:max-w-[550px] mx-5 sm:mx-7   max-w-[298px] gap-3 ">
            <div className="flex items-center gap-3">
              <img className=" w-[48px] md:w-[68px]" src={Icon1} alt="" />
              <h3 className="text-[20px] font-semibold text-[#262626]">
                Personalized Nutrition Plans
              </h3>
            </div>
            <p className=" text-[12px] sm:w-[550px] w-[100%] md:w-[683px] mt-3 sm:mt-5 sm:text-[16px] text-[#333333]">
              Receive a tailored nutrition plan designed specifically for your
              body and goals. Our certified nutritionists will consider your
              unique needs, dietary preferences, and health conditions to create
              a plan that suits you best.
            </p>
          </div>
        </div>
        <div className=" sm:w-[630px] rounded md:w-[783px] w-[358px] overflow-hidden h-[229px] flex-col  sm:h-[250px] md:h-[253px] bg-[#F6FBE9]">
          <div className="md:max-w-[683px] mt-7 sm:mt-12 sm:max-w-[550px] mx-5 sm:mx-7   max-w-[298px] gap-3 ">
            <div className="flex items-center gap-3">
              <img className=" w-[48px] md:w-[68px]" src={Icon2} alt="" />
              <h3 className="text-[20px] font-semibold text-[#262626]">
                Guidance from Certified Nutritionists
              </h3>
            </div>
            <p className=" text-[12px] sm:w-[550px] w-[100%] md:w-[683px] mt-3 sm:mt-5 sm:text-[16px] text-[#333333]">
              Receive a tailored nutrition plan designed specifically for your
              body and goals. Our certified nutritionists will consider your
              unique needs, dietary preferences, and health conditions to create
              a plan that suits you best.
            </p>
          </div>
        </div>
        <div className=" sm:w-[630px] rounded md:w-[783px] w-[358px] overflow-hidden h-[229px] flex-col  sm:h-[250px] md:h-[253px] bg-[#F6FBE9]">
          <div className="md:max-w-[683px] mt-7 sm:mt-12 sm:max-w-[550px] mx-5 sm:mx-7   max-w-[298px] gap-3 ">
            <div className="flex items-center gap-3">
              <img className=" w-[48px] md:w-[68px]" src={Icon3} alt="" />
              <h3 className="text-[20px] font-semibold text-[#262626]">
                Food Tracking and Analysis{" "}
              </h3>
            </div>
            <p className=" text-[12px] sm:w-[550px] w-[100%]md:w-[683px] mt-3 sm:mt-5 sm:text-[16px] text-[#333333]">
              Effortlessly track your food intake using our user-friendly app.
              Our nutritionists will analyze your data to provide insights into
              your eating habits, help you identify areas for improvement, and
              make personalized recommendations.{" "}
            </p>
          </div>
        </div>
        <div className=" sm:w-[630px] rounded md:w-[783px] w-[358px] overflow-hidden h-[229px] flex-col  sm:h-[250px] md:h-[253px] bg-[#F6FBE9]">
          <div className="md:max-w-[683px] mt-7 sm:mt-12 sm:max-w-[550px] mx-5 sm:mx-7   max-w-[298px] gap-3 ">
            <div className="flex items-center gap-3">
              <img className=" w-[48px] md:w-[68px]" src={Icon4} alt="" />
              <h3 className="text-[20px] font-semibold text-[#262626]">
                Meal Planning and Recipes{" "}
              </h3>
            </div>
            <p className=" text-[12px]  sm:w-[550px] w-[100%] md:w-[683px] mt-3 sm:mt-5 sm:text-[16px] text-[#333333]">
              Access a vast collection of delicious and healthy recipes tailored
              to your dietary needs. Our nutritionists will also create
              personalized meal plans, making it easier for you to stay on track
              and enjoy nutritious meals.
            </p>
          </div>
        </div>
        <div className=" sm:w-[630px] rounded md:w-[783px] w-[358px] overflow-hidden h-[229px] flex-col  sm:h-[250px] md:h-[253px] bg-[#F6FBE9]">
          <div className="md:max-w-[683px] mt-7 sm:mt-12 sm:max-w-[550px] mx-5 sm:mx-7   max-w-[298px] gap-3 ">
            <div className="flex items-center gap-3">
              <img className=" w-[48px] md:w-[68px]" src={Icon5} alt="" />
              <h3 className="text-[20px] font-semibold text-[#262626]">
                Lifestyle and Behavior Coaching{" "}
              </h3>
            </div>
            <p className=" text-[12px]  sm:w-[550px] w-[100%] md:w-[683px] mt-3 sm:mt-5 sm:text-[16px] text-[#333333]">
              Achieving sustainable results requires more than just a diet plan.
              Our nutritionists will work with you to develop healthy habits,
              address emotional eating, and provide strategies to overcome
              obstacles along the way.
            </p>
          </div>
        </div>
        <div className=" sm:w-[630px] rounded md:w-[783px] w-[358px] overflow-hidden h-[229px] flex-col  sm:h-[250px] md:h-[253px] bg-[#F6FBE9]">
          <div className="md:max-w-[683px] mt-7 sm:mt-12 sm:max-w-[550px] mx-5 sm:mx-7   max-w-[298px] gap-3 ">
            <div className="flex items-center gap-3">
              <img className=" w-[48px] md:w-[68px]" src={Icon6} alt="" />
              <h3 className="text-[20px] font-semibold text-[#262626]">
                Nutritional Education and Workshops{" "}
              </h3>
            </div>
            <p className=" text-[12px]  sm:w-[550px] w-[100%] md:w-[683px] mt-3 sm:mt-5 sm:text-[16px] text-[#333333]">
              Expand your knowledge of nutrition through informative articles
              and educational workshops. Our nutritionists will equip you with
              the knowledge and tools to make informed choices for long-term
              success.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
