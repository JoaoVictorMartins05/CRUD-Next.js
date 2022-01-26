This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Firestore DataBase

Para Salvar os arquivos para que eles persistam na aplicação, é necessário adicionar um projeto em "https://console.firebase.google.com/". 

Depois é necessário criar um arquivo na raiz do projeto chamado ".env.local", e nele adicionar as seguintes linhas:

NEXT_PUBLIC_FIREBASE_API_KEY =  "Sua Chave"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = "Seu Domínio"
NEXT_PUBLIC_FIREBASE_PROJECT_ID = "Seu Project ID"

Você deverá substituir os valores acima, incluindo as chaves pelos valores disponibilizados nas configurações do seu projeto no firebase.

Para acessar as configurações do seu projeto, basta clicar na engrenagem, ir até o final da página e observar os valores logo abaixo do comentário:

// Your web app's Firebase configuration.

Após isso, você conseguirá executar e persistir com os dados.

## Vercel Aplication

O projeto está no ar pela vercel, mas como as informações de banco de dados do firebase são dados sensíveis (chave de acesso, id, etc...), não estão presentes neste repositório. Dito isso, no site da vercel poderá ser observado apenas o template. Caso queira ver o projeto funcionando, basta baixar o projeto seguir o tutorial acima sobre o "Firestore Database" e executálo em sua máquina.
