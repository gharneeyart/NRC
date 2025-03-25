// pages/payment/success.js
import { useRouter } from 'next/navigation';

const PaymentSuccess = () => {
  const router = useRouter();
  const { bookingId } = router.query;

  return (
    <div className="max-w-6xl mx-auto p-4 mb-14 min-h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-8">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mt-2">
            Your booking has been confirmed.
          </p>
          {bookingId && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="font-medium">Booking Reference:</p>
              <p className="text-lg font-semibold text-gray-800">{bookingId}</p>
            </div>
          )}
          <p className="text-gray-600 mt-4">
            We've sent your ticket to your email address.
          </p>
          <div className="mt-6">
            <button
              onClick={() => router.push('/bookings')}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-150"
            >
              View My Bookings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;