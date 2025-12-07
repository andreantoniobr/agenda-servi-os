import './globals.css';

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
          {children}        
      </body>
    </html>
  );
}
