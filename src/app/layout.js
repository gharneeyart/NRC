import './globals.css';
import ClientSideWrapper from '@/components/clientSide';
import { AuthProvider } from '@/context/AuthContext';

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
