import Link from 'next/link'
export default function NotFound(){
    return(
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <h1 className='font-semibold text-4xl '>404: Page Not Found</h1>
            <p className='text-xl '>Return back to <Link href="/" className='text-[#18A532] font-medium'>Home</Link></p>
        </div>
    )
}