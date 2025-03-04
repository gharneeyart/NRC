import ResuableHero from "@/components/reusables/hero"
import Map from '@/components/contact/map'

export default function Contact() {
    return(
       <div>
         <div className="contact-hero ">
          <div className="container mx-auto">
          <ResuableHero title='Contact Us' desc='Safe, comfortable, and reliable train services across the nation. Experience the future of Nigerian transportation, today.'/>
          </div>
        </div>
        <Map/>
       </div>
    )
}