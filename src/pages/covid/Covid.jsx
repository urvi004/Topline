import  Navbar  from "../../component/navbar/Navbar";
import  Hero  from "../../component/hero/Hero";
import  Partner from "../../component/partner/Partner";


const Covid = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Navbar alert= "This study is now closed. For current opportunities, browse our studies page." />
    <Hero  heading= " Only 500 of the 10,000 diseases that afflict humans today have treatments"
             description= "We've mapped the world, now let's map human health."
             height= "680px"/>
    <Partner/>
    
    <Hero  heading= "Together, we can invent the future of data-powered healthcare "
            description= ""
            height= "400px"
            id="img-2"/>
    </>
  )
}

export default Covid;
