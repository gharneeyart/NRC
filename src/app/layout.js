import "./globals.css";
import ClientSideWrapper from "@/components/clientSide";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientSideWrapper>
          {children}
        </ClientSideWrapper>
      </body>
    </html>
  );
}