import ResuableHero from "@/components/reusables/hero";
import Image from "next/image"


export default function About() {
    return(
        <div className="about-hero ">
            <div className="container mx-auto ">
            <ResuableHero title='About NRC' desc='Safe, comfortable, and reliable train services across the nation. Experience the future of Nigerian transportation, today.'/>
            </div> 
        </div>
        
    )
}

