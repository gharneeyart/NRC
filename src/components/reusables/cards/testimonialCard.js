import Image from 'next/image';
// import { Testimonials } from '@/db'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Pagination, Navigation } from 'swiper/modules'
import Eclipse from '/public/images/Ellipse 2021.svg';
import Eclipse2 from '/public/images/Ellipse 2021 (1).svg';
import Eclipse3 from '/public/images/Ellipse 2021 (2).svg';

const Testimonials = [
  {
    id: 1,
    description:
      'I love how simple it is to book my train tickets. No long queues, just a few clicks, and I’m set. Traveling from Lagos to Abuja has never been this easy',
    image: Eclipse,
    name: 'Benji Ibeawuchi',
  },
  {
    id: 2,
    description:
      'The First-Class coach was super comfortable, and the train departed on time. I appreciate the real-time updates on the website. Definitely the best.',
    image: Eclipse2,
    name: 'Chimaobi Aisha',
  },
  {
    id: 3,
    description:
      'I had an issue with my payment, but the support team resolved it quickly. I highly recommend NRC Train Booking for a stress-free experience!',
    image: Eclipse3,
    name: 'Kemi Olufemi',
  },
];
export default function TestimonialCard() {
  const settings = {
    dots: true, // Shows pagination dots
    infinite: true, // Enables infinite looping
    speed: 500,
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full ">
      <Slider {...settings}>
        {Testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="   text-center flex flex-col lg:flex-row h-[350px] md:h-[241px] lg:h-[310px] w-[333.06px] lg:w-[1236.39px] mx-auto space-y-7 p-[23px] gap-[24px]"
          >
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <p className="text-left text-[#5F5F60] font-medium  mb-[25px]">
                {testimonial?.description}
              </p>

              <div className="flex items-center font-sans gap-[15.21px]">
                <Image src={testimonial.image} alt={testimonial.name} />
                <p className="text-[16.3px] font-semibold">
                  {testimonial?.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

{
  /* <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-center text-3xl font-bold mb-6">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-700 text-lg italic">"{testimonial.text}"</p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-green-500"
                />
                <span className="ml-3 font-semibold text-gray-900 text-lg">{testimonial.name}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div> */
}
