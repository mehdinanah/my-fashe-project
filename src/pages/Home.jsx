import Carousel from "../components/Carousel";
import CategoriesSection from "../components/CategoriesSection"; 
import SimpleCarousel from "../components/SimpleCarousel";
import BeautyLookbook from "../components/BeautyLookbook";
import OurBlog from "../components/OurBlog";
import InstagramSection from "../components/InstagramSection"; 





export default function Home() {
  return (
    <div>
      <Carousel />
      <CategoriesSection />
       
      <SimpleCarousel />
      <BeautyLookbook />
       <OurBlog />
       <InstagramSection />

      
    </div>
    
  );
}
