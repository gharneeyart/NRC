import Image from 'next/image';
import notFound from '/public/images/13315300_5203298 1.svg';
import arrow from '/public/icons/Arrow-28.svg';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center my-10">
      <Image
        src={notFound}
        alt={notFound}
        width={100}
        height={100}
        className="w-[500px] mx-auto"
      />
      <div>
        <p className="font-semibold text-[47px]">Page Not Found</p>
      </div>
      <div className="border-b border-neutral-950">
        <span className="flex items-center">
          <Image src={arrow} alt="" />
          <Link href="/">Go home</Link>
        </span>
      </div>
    </div>
  );
}
