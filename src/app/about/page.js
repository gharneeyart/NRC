import Count from "@/components/about/count";
import Testimonial from "@/components/about/testimonials";
import Mission from "@/components/about/mission"
import ResuableHero from "@/components/reusables/hero";

export default function About() {
    return(
        <div>
            <div className="about-hero ">
            <div className="container mx-auto ">
            <ResuableHero title='About NRC' desc='Safe, comfortable, and reliable train services across the nation. Experience the future of Nigerian transportation, today.'/>
            </div> 
          </div>
            <Count/>
            <Testimonial/>
            <Mission />
        </div>
         
   
        
    )
}

