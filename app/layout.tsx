import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";

export const metadata = {
  title: "Agenda de Serviços",
  description: "Sistema de agendamento moderno e personalizável",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-800">
        <Providers>
          <Navbar />
          <main className="p-6 container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}