// pages/payment/failed.js
'use client'
import { useRouter } from 'next/router';

const errorMessages = {
  verification_failed: "Payment verification failed",
  payment_not_found: "Payment record not found",
  booking_not_found: "Booking not found",
  server_error: "Server error occurred",
  default: "Payment failed"
};

export default function PaymentFailed() {
  const router = useRouter();
  const { reason } = router.query;
  
  return (
    <div>
      <h1>Payment Failed</h1>
      <p>{errorMessages[reason] || errorMessages.default}</p>
      {/* ... */}
    </div>
  );
}