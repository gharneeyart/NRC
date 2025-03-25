import './globals.css';
import ClientSideWrapper from '@/components/clientSide';
import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
  title: 'NRC Train Station',
  description: 'Your train station application',
  icons: {
    icon: 'https://res.cloudinary.com/dgde8cwjk/image/upload/v1742042071/TrainStation%20Pictures/image_3_v8pug9.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  charset: 'UTF-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ClientSideWrapper>{children}</ClientSideWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}