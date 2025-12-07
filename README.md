# Agenda de Serviços - Projeto Fullstack Next.js

## Equipe

* Ana Clara Meireles
* André Antônio Bezerra
* Raimundo Nonato

## Descrição

Aplicação de agendamento de serviços, desenvolvida com Next.js, TypeScript, Tailwind CSS e ShadCN/UI.
O sistema permite o cadastro e login de usuários, gerenciamento de profissionais e agendamentos, oferecendo uma interface intuitiva e rotas protegidas por autenticação.

## Tecnologias

* Next.js 14+ (App Router / TypeScript)
* MongoDB Atlas & Mongoose
* Tailwind CSS & ShadCN/UI
* NextAuth.js (Auth.js) 
* bcryptjs para hash de senha

## Funcionalidades

* [x] Cadastro e Login de Usuários
* [x] CRUD completo de Agendamentos
* [x] Dashboard do usuário com visualização de agendamentos
* [x] Rotas protegidas
* [x] Integração com MongoDB Atlas

## Estrutura de Pastas

/app
/api
/usuarios
route.ts        # CRUD de usuários
/profissionais
route.ts        # CRUD de profissionais
/agendamentos
route.ts        # CRUD de agendamentos
/cadastro
page.tsx          # Página de cadastro
/login
page.tsx          # Página de login
/dashboard
page.tsx          # Dashboard do usuário
/components
Navbar.tsx           # Navbar reutilizável
layout.tsx
loading.tsx
not-found.tsx
/lib
mongodb.ts           # Conexão com MongoDB
auth.ts              # Funções de geração de token JWT
authMiddleware.ts    # Middleware de autenticação
/models
usuario.ts
profissional.ts
agendamento.ts
.env.local             # Variáveis de ambiente (não subir valores sensíveis)

## Configuração do Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/andreantoniobr/agenda-servi-os
```

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo `.env.local` na raiz do projeto com as variáveis:

```
MONGODB_URI=COLE_SUA_URI_AQUI
NEXTAUTH_SECRET=COLE_UMA_CHAVE_SECRETA
NEXTAUTH_URL=http://localhost:3000
```

4. Rode o projeto localmente:

```bash
npm run dev
```

## Deploy

O projeto está disponível no seguinte link:
[Acesse o projeto aqui](https://agenda-servi-os.vercel.app/)
