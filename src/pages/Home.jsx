import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import Blog from "../components/Home/Blog";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Features/>
      <Blog/>
      <Testimonials/>
    </div>
  )
}
