import ResetPassword from "@/components/resetPassword";

export default function ResetPasswordPage({ params }) {
  return <ResetPassword token={params.token} />;
}