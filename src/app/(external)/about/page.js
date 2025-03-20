import Count from "@/components/about/count";
import Testimonial from "@/components/about/testimonials";
import Mission from "@/components/about/mission"
import ResuableHero from "@/components/reusables/hero";
import Services from "@/components/reusables/services";
import Companion from "@/components/reusables/railCompanion";

export default function About() {
    return(
        <div className="">
            <div className="about-hero ">
            <div className="container mx-auto ">
            <ResuableHero title='About NRC' desc='Safe, comfortable, and reliable train services across the nation. Experience the future of Nigerian transportation, today.'/>
            </div> 
          </div>
          <Mission />
            <Count/>
            <Services/>
            <Testimonial/>
            <Companion/>
        </div>
         
   
        
    )
}

