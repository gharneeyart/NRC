import ServiceCard from '@/components/reusables/cards/serviceCard';
export default function Services() {
  return (
    <div className=" bg-[#F2FAF4] lg:py-[67px] py-12 ">
      <div className="w-11/12 container mx-auto flex flex-col items-center gap-6">
        <div className=" text-center space-y-2.5">
          <h1 className="text-center text-2xl lg:text-[52px] xl:text5xl font-semibold py-2">
            Discover Our Services
          </h1>
          <p className="md:w-[668px] lg:w-[868px] font-medium text-sm md:text-base lg:text-lg xl:text-[22px]  text-[#4E4E4E] ">
            Experience a new standard of rail travel with our comprehensive
            range of services designed for your comfort and convenience.
          </p>
        </div>
        <ServiceCard />
      </div>
    </div>
  );
}
