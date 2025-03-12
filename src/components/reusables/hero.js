export default function ResuableHero({title, desc}){
    return(
      <div className="text-white text-center md:w-[80%] lg:w-[50%] mx-auto flex flex-col gap-4">
        <h1 className="font-semibold text-5xl">{title}</h1>
        <p className="text-gray-200 font-sans lg:text-lg">{desc}</p>
      </div>
    )
}