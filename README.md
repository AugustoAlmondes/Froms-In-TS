# TailwindProject

Este é um projeto de exemplo utilizando **React**, **TypeScript**, **Vite** e **Tailwind CSS**. Ele apresenta um formulário simples com validação de campos, desenvolvido para fins de aprendizado e treinamento.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Funcionalidades

- Formulário com campos de nome, email e aceite dos termos.
- Validação dos campos com feedback visual de erros.
- Estilização responsiva utilizando Tailwind CSS.

## Como rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repo>
   cd TailwindProject
   ```

2. **Instale as dependências:**
```sh
pnpm install
# ou
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento:**
```sh
**pnpm dev
# ou
npm run dev
# ou
yarn dev**
```

4. **Acesse http://localhost:5173 no navegador.**

Estrutura de Pastas
```sh
src/
  components/
    [Forms.tsx](http://_vscodecontentref_/0)        # Componente principal do formulário
  types/
    User.ts          # Tipagem do usuário
  utils/
    validate.ts      # Função de validação dos campos
  [App.tsx](http://_vscodecontentref_/1)            # Componente principal da aplicação
  main.tsx           # Ponto de entrada do React
[styles.css](http://_vscodecontentref_/2)           # Estilos globais com Tailwind
```
Observações
O projeto utiliza validação simples para os campos do formulário.
O objetivo principal é demonstrar a integração das tecnologias e boas práticas de organização de código.

Desenvolvido para fins de estudo e prática com React, TypeScript e Tailwind CSS.
