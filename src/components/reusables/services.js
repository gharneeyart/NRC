import ServiceCard from "@/components/reusables/cards/serviceCard"
export default function Services() {
    return(
        <div className="bg-[#F2FAF4] py-10 flex flex-col items-center gap-6">
            <div className="lg:w-[700px] text-center">
                <h1 className="text-center text-2xl lg:text-3xl font-semibold py-2">Discover Our Services</h1>
                <p className=" text-sm lg:px-20 px-10 text-[#4E4E4E] ">Experience a new standard of rail travel with our comprehensive range of services designed for your comfort and convenience.</p>
            </div>
         <ServiceCard/> 
            
        </div>
    )
}