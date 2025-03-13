import Image from "next/image"
export default function Card() {
  return (
    <div>
      <div className="w-full relative">
        <Image className="container w-full h-full rounded-[0.432rem] lg:rounded-[0.77rem]" src="/images/Frame 40989 (1).svg" width={100} height={100} alt="train-times"/>

      <div className="container px-[1.043rem] md:px-[1.8rem] xl:px-[1.861rem]  space-y-[1.547rem] md:space-y-[3rem] lg:space-y-[1.5rem] xl:space-y-[2.759rem] text-[#263238] absolute top-[2.087rem] md:top-[3rem] lg:top-[2rem] xl:top-[3.722rem]">
        <div className="space-y-[0.36rem] xl:space-y-[0.642rem]">
          <h1 className="text-[1.125rem] font-bold md:text-[2.5rem] lg:text-[1.5rem] xl:text-[2.053rem]">Changes to Train Times</h1>
          <h4 className="text-[0.75rem] md:text-[1.5rem] lg:text-[1rem] xl:text-[1.283rem]">Check your routes before traveling</h4>
        </div>

        <div className="">
          <button className="py-2 px-4 rounded-[0.449rem] bg-white">Know More</button>
        </div>
      </div>
      </div>
    </div>
  )
}