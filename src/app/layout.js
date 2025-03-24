import './globals.css';
import ClientSideWrapper from '@/components/clientSide';
import { AuthProvider } from '@/context/AuthContext';
import { ModalProvider } from '@/context/modalContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ModalProvider>
          <ClientSideWrapper>{children}</ClientSideWrapper>
          </ModalProvider>
        </AuthProvider>
        
      </body>
    </html>
  );
}
