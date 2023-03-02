import  Navbar  from "../../component/navbar/Navbar";
import { useState } from "react";
import  Hero  from "../../component/hero/Hero";
import  Filter  from "../../component/filter/Filter";
import  Footer  from "../../component/footer/Footer";

const imagePerRow = 4

const Blog = () => {
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
      setNext(next + imagePerRow);
    };
  return (
    <>
    <Navbar  />
    <Hero  heading= " Only 500 of the 10,000 diseases that afflict humans today have treatments"
             description= "We've mapped the world, now let's map human health."
             height= "680px"/>
    <Filter handleMoreImage={handleMoreImage}
               next={next}/>
    <Hero  heading= "Together, we can invent the future of data-powered healthcare "
            description= ""
            height= "400px"
            id="img-2"/>
            <Footer/>
    </>
     
  )
}

export default Blog;