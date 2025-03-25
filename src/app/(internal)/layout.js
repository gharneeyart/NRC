import Nav from '@/layouts/Nav';
import Footer from '@/layouts/Footer';

export default function InternalLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
