import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Agenda de Serviços',
  description: 'Aplicação de agendamento de serviços',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 font-sans">
        {/* Navbar colorida e responsiva */}
        <Navbar />

        {/* Conteúdo principal */}
        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
