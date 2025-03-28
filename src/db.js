import Calender from './icons/calendar-1-svgrepo-com 1.svg';
import Security from './icons/security-safe-svgrepo-com 1.svg';
import Station from './icons/station-svgrepo-com 1.svg';
import Train from './icons/train-svgrepo-com 1.svg';

export const Discover = [
  {
    id: 1,
    image: Train,
    title: 'Modern Fleet',
    description:
      'Experience comfort in our modern air-conditioned trains with spacious seating',
  },
  {
    id: 2,
    image: Calender,
    title: 'Easy Booking',
    description:
      'Book your tickets anytime, anywhere. Use our website or mobile app',
  },
  {
    id: 3,
    image: Security,
    title: 'Security & Safety',
    description:
      'Travel with confidence knowing your  security is our top priority. ',
  },
  {
    id: 4,
    image: Station,
    title: 'Station Facilities',
    description:
      'Everything you need for a pleasant and convenient travel experience',
  },
];

// import Eclipse from '/public/images/Ellipse 2021.svg'
// import Eclipse2 from '/public/images/Ellipse 2021 (1).svg'
// import Eclipse3 from '/public/images/Ellipse 2021 (2).svg'

//     export const Testimonials  = [
//     {
//         id: 1,
//         description: 'I love how simple it is to book my train tickets. No long queues, just a few clicks, and I’m set. Traveling from Lagos to Abuja has never been this easy',
//         image: Eclipse,
//         name: 'Benji Ibeawuchi'

//     },
//     {
//         id: 2,
//         description: 'The First-Class coach was super comfortable, and the train departed on time. I appreciate the real-time updates on the website. Definitely the best.',
//         image: Eclipse2,
//         name: 'Chimaobi Aisha'

//     },
//     {
//         id: 3,
//         description: 'I had an issue with my payment, but the support team resolved it quickly. I highly recommend NRC Train Booking for a stress-free experience!',
//         image: Eclipse3,
//         name: 'Kemi Olufemi'
//     },
// ]
import Image1 from './images/image 16.png';
import Image2 from './images/image.png';

export const NewsUpdates = [
  {
    id: 1,
    image: Image1,
    name: 'Enhanced Safety Measures Implementation',
    description:
      'New safety protocols and equipment installations across all major stations.',
    date: '2 Jan, 2025',
    time: '1 min read',
  },
  {
    id: 2,
    image: Image2,
    name: 'New Express Service Launch on Lagos-Ibadan Route',
    description:
      'starting next month, enjoy faster journey times with our new express service running...',
    date: '2 Jan, 2025',
    time: '1 min read',
  },
  {
    id: 3,
    image: Image2,
    name: 'New Express Service Launch on Lagos-Ibadan Route',
    description:
      'starting next month, enjoy faster journey times with our new express service running...',
    date: '2 Jan, 2025',
    time: '1 min read',
  },
];

import img from './images/Frame 40970.svg'
import img1 from './images/Frame 40971.svg';
import img2 from './images/Frame 40972.svg';

export const Explores = [
  {
    id: 1,
    image: img,
    location: 'Lagos',
    destination: '20k visitors daily',
  },
  {
    id: 2,
    image: img1,
    location: 'Ibadan',
    destination: '14k visitors daily',
  },
  {
    id: 3,
    image: img2,
    location: 'Abeokuta',
    destination: '15k visitors daily',
  },
];

import Imag from './icons/Frame 1000003430.svg';
import Img1 from './icons/Frame 1000003430 (1).svg';
import Img2 from './icons/Frame 1000003430 (2).svg';
export const Classes = [
    {
        id: 1,
        image: Imag,
        class: 'First Class',
        priceAdult: "₦6000",
        priceChild: "₦4500",
        reserves: '8',
        coach: ['C01']
        
    },
    {
        id: 2,
        image: Img1,
        class: 'Business Class',
        priceAdult: "₦5000",
        priceChild: "₦4000",
        reserves: '12',
        coach: ['C02', 'C03']
    },
    {
        id: 3,
        image: Img2,
        class: 'Standard Class',
        priceAdult: "₦3000",
        priceChild: "₦2500",
        reserves: '18',
        coach: ['C04','C05', 'C06']
    }
]


    export const trainSchedule = [
        {
            id: 1,
            code: 'MJS',
            name: 'Mobolaji Johnson Station Ebute Metta',
            arrivalTime: '07:42',
            departureTime: '07:45',
            distance: '20km'
        },
        {
            id: 2,
            code: 'BRF',
            name: 'Babatunde Raji Fashola Station Agege',
            arrivalTime: '08:06',
            departureTime: '08:09',
            distance: '20km'
        },
        {
            id: 3,
            code: 'LKJ',
            name: 'Lateef Kayode Jakande Station Agbado',
            arrivalTime: '08:21',
            departureTime: '08:24',
            distance: '20km'
        },
        {
            id: 4,
            code: 'PYO',
            name: 'Professor Yemi Oshinbajo Station Kajola',
            arrivalTime: '08:42',
            departureTime: '08:45',
            distance: '20km'
        },
        {
            id: 5,
            code: 'OFR',
            name: 'Olu Funmilayo Ransome Kuti Papalanto',
            arrivalTime: '08:52',
            departureTime: '08:55',
            distance: '20km'
        },
        {
            id: 6,
            code: 'PWS',
            name: 'Professor Wole Soyinka Station Abeokuta',
            arrivalTime: '09:16',
            departureTime: '09:21',
            distance: '20km'
        },
        {
            id: 7,
            code: 'AOO',
            name: 'Aremo Olusegun Osoba Olodo',
            arrivalTime: '09:40',
            departureTime: '09:43',
            distance: '20km'
        },
        {
            id: 8,
            code: 'LA',
            name: 'Ladoke Akintola Station Omi-Adio',
            arrivalTime: '09:57',
            departureTime: '10:00',
            distance: '20km'
        },
        {
            id: 9,
            code: 'OA',
            name: 'Obafemi Awolowo station Moniya',
            arrivalTime: '10:18',
            departureTime: '10:21',
            distance: '20km'
        }
    ]

    export const Schedule = [
        {
            id: 1,
            code: 'OA',
            name: 'Obafemi Awolowo station',
            arrivalTime: '07:57',
            departureTime: '08:00',
            distance: '20km'
        },
        {
            id: 2,
            code: 'LA',
            name: 'Ladoke Akintola Station Omi-Adio',
            arrivalTime: '08:17',
            departureTime: '08:20',
            distance: '20km'
        },
        {
            id: 3,
            code: 'AO',
            name: 'Aremo Olusegun Osoba Olodo',
            arrivalTime: '08:35',
            departureTime: '08:38',
            distance: '20km'
        },
        {
            id: 4,
            code: 'PWS',
            name: 'Professor Wole Soyinka Station Abeokuta',
            arrivalTime: '08:57',
            departureTime: '09:02',
            distance: '20km'
        },
        {
            id: 5,
            code: 'OFR',
            name: 'Olu Funmilayo Ransome Kuti Papalanto',
            arrivalTime: '09:22',
            departureTime: '09:25',
            distance: '20km'
        },
        {
            id: 6,
            code: 'PYO',
            name: 'Professor Yemi Oshinbajo Station Kajola',
            arrivalTime: '09:33',
            departureTime: '09:36',
            distance: '20km'
        },
        {
            id: 7,
            code: 'AOO',
            name: 'Aremo Olusegun Osoba Olodo',
            arrivalTime: '09:54',
            departureTime: '09:57',
            distance: '20km'
        },
        {
            id: 8,
            code: 'LA',
            name: 'Ladoke Akintola Station Omi-Adio',
            arrivalTime: '10:09',
            departureTime: '10:12',
            distance: '20km'
        },
        {
            id: 9,
            code: 'OA',
            name: 'Obafemi Awolowo Station Moniya',
            arrivalTime: '10:33',
            departureTime: '10:36',
            distance: '20km'
        }
    ]
    export const Morning = [
        {
            id: 1,
            code: 'MJS',
            name: 'Mobolaji Johnson Station Ebute Metta',
            arrivalTime: '10:47',
            departureTime: '10:50',
            distance: '20km'
        },
        {
            id: 2,
            code: 'LA',
            name: 'Ladoke Akintola Station Omi-Adio',
            arrivalTime: '11:07',
            departureTime: '11:10',
            distance: '20km'
        },
        {
            id: 3,
            code: 'PWS',
            name: 'Professor Wole Soyinka Station Abeokuta',
            arrivalTime: '11:44',
            departureTime: '11:49',
            distance: '20km'
        },
        {
            id: 4,
            code: 'OO',
            name: 'Babatunde Raji Fashola Station Agege',
            arrivalTime: '12:47',
            departureTime: '12:50',
            distance: '20km'
        },
        {
            id: 5,
            code: 'MJS',
            name: 'Mobolaji Johnson Station Ebute Metta',
            arrivalTime: '13:11',
            departureTime: '13:14',
            distance: '20km'
        }
    ];
    export const Faq = [
        {
            id: 1,
            question: 'How can I create an account',
            answer:'You can access the registration form by clicking on the Sign-Up/Register Now button on our platforms.'
        },
        {
            id: 2,
            question: 'I have registered and logged in, how do I get a ticket?',
            answer: `
      <ol>
                <li>1. Select the Originating and Destination stations.</li>
                <li>2. Select your desired journey date.</li>
                <li>3. Click on the Find My Train button to show available trains for your trip.</li>
                <li>4. Select train and coach. e.g. Business, Standard, First </li>
                <li>5. Click on the dropdown (below Please select a coach), to see coach details.</li>
                <li>6. Select coach pick a seat, and fill in all the passenger details</li>
                <li>7. After providing all the necessary information, click on the "Make Payment" button to initiate the payment process and book your ticket.</li>
                </ol>
                
            <p>Once you complete all the steps, QR based ticket will generated and sent to your mail. You can access your booked tickets in your booking history.</p>`,
  },

        {
            id: 3,
            question: 'I forgot my password.',
            answer:'You can click on Forget Password link to set a new password.'
        },
        {
            id: 4,
            question: 'How long is my ticket valid for?',
            answer:'Your ticket is valid until the date of expected travel.'
        },
        {
            id: 5,
            question: 'Is it necessary to carry a printout of the E-ticket while traveling?.',
            answer:'No, it is not necessary to carry a printout. Passengers can show the E-ticket on their mobile or a mail with a valid ID proof to the ticket checker during the journey.'
        },
        {
            id: 6,
            question: 'Can I buy a ticket for next week?',
            answer:'No, you can buy for the same day or the next day only.'
        },
        {
            id: 7,
            question: 'Can I get a refund?',
            answer:'Currently, NRC has a NO REFUND policy.'
        },
        {
            id: 8,
            question: 'Can I book a return ticket?',
            answer:'No, this feature is currently not available. You are required to book one-way tickets.'
        },
        {
            id: 9,
            question: 'I bought my online ticket from Ebute-Metta to Ibadan, but I am stuck at Agbado, can I board from Agbado?',
            answer:'Yes, you can board from the nearest station, if your ticket covers it.'
        },
        {
            id: 10,
            question: 'I made payment for a ticket, and I got debited, but I did not get a ticket.',
            answer:'On the Menu tab, Go to the profile, click on the My Tickets, and see ticket history. Select a ticket and reprint your ticket.If you can not find your tickets here, you can call our customer service number or send an email to info@gsds.ng with the payment receipt details, booking information, and reference number.'
        },
    ]
    export const Lagos =[
        {
            id: 1,
            code: 'MJS',
            name: 'Mobalaji Johnson station Ebute Metta',
            arrivalTime: '07:57',
            departureTime: '08:00',
            distance: '20km'  
        },
        {
            id: 2,
            code: 'BRF',
            name: 'Babatunde Raji Fashola Station Agege',
            arrivalTime: '08:21',
            departureTime: '08:24',
            distance: '20km'  
        },
        {
            id: 3,
            code: 'LKJ',
            name: 'Lateef Kayode Jakande Station Agbado',
            arrivalTime: '07:57',
            departureTime: '08:00',
            distance: '20km'  
        },
        {
            id: 4,
            code: 'PYO',
            name: 'Professor Yemi Oshinbajo Station Kajola',
            arrivalTime: '08:36',
            departureTime: '08:39',
            distance: '20km'  
        },
        {
            id: 5,
            code: 'OFR',
            name: 'Olu Funmilayo Ransome Kuti Papalanto',
            arrivalTime: '07:57',
            departureTime: '08:00',
            distance: '20km'  
        },
        {
            id: 6,
            code: 'PWS',
            name: 'Professor Wole Soyinka Station Abeokuta',
            arrivalTime: '09:07',
            departureTime: '09:10',
            distance: '20km'  
        },
        {
            id: 7,
            code: 'AOO',
            name: 'Aremo Olusegun Osoba Olodo',
            arrivalTime: '09:55',
            departureTime: '09:58',
            distance: '20km'  
        },
        {
            id: 8,
            code: 'LA',
            name: 'Ladoke Akintola Station Omi-Adio',
            arrivalTime: '10:12',
            departureTime: '10:15',
            distance: '20km'  
        },
        {
            id: 9,
            code: 'OA',
            name: 'Obafemi Awolowo Station Moniya',
            arrivalTime: '10:33',
            departureTime: '10:36',
            distance: '20km'  
        },
    ]
    