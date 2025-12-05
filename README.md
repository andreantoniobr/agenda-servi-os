Agenda de Serviços - Projeto Fullstack Next.js
📝 Descrição

Aplicação de agendamento de serviços, desenvolvida com Next.js, TypeScript, Tailwind CSS e HeroUI.

O projeto possui:

Cadastro e login de usuários

Dashboard do usuário

Visualização de agendamentos

Estrutura de API pronta para integração com MongoDB Atlas

🚀 Tecnologias utilizadas

Next.js (App Router / TypeScript)

Tailwind CSS

HeroUI / NextUI

MongoDB Atlas (via Mongoose)

NextAuth.js (opcional, para autenticação)

📂 Estrutura de pastas
/app
  /api
    /usuarios
      route.ts          # Rota para criação de usuários
  /cadastro
    page.tsx            # Página de cadastro
  /login
    page.tsx            # Página de login (ainda a criar)
  /dashboard
    page.tsx            # Dashboard do usuário
  /agendamentos
    page.tsx            # Lista de agendamentos
  /components
    Navbar.tsx          # Navbar reutilizável
  layout.tsx
  providers.tsx
/lib
  mongodb.ts             # Função de conexão com MongoDB
/models
  usuario.ts             # Modelo de usuário
.env.local               # Variáveis de ambiente (não subir valores sensíveis)

⚙️ Configuração do ambiente

Instalar dependências:

npm install


Criar o arquivo .env.local na raiz do projeto com as variáveis:

MONGODB_URI=COLE_SUA_URI_AQUI
NEXTAUTH_SECRET=COLE_AQUI
NEXTAUTH_URL=http://localhost:3000


Rodar o projeto localmente:

npm run dev


Acesse: http://localhost:3000
