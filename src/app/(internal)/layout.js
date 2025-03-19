import Nav from '@/layouts/Nav';
import Footer from '@/layouts/Footer';

export default function ExternalLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
