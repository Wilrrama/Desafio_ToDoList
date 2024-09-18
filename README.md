# Desafio ToDoList

Bem-vindo ao projeto **Desafio ToDoList** desenvolvido para a Jack Experts. Este projeto consiste em um sistema completo de gerenciamento de tarefas (to-do list) com backend e frontend separados. O backend gerencia usuários, autenticação e tarefas, enquanto o frontend fornece a interface para interação do usuário.

## Funcionalidades do Backend

- **Gerenciamento de Usuários**: Criação, visualização e exclusão de usuários.
- **Autenticação**: Login e geração de token JWT.
- **Gerenciamento de Tarefas**: Criação, atualização, listagem e exclusão de tarefas.

## Funcionalidades do Frontend

- **Autenticação de Usuário**: Interface para login e logout.
- **Gerenciamento Visual de Tarefas**: Listagem, criação, atualização e exclusão de tarefas.
- **Atualização de Status**: Permite marcar tarefas como concluídas ou pendentes.
- **Responsividade**: Design adaptado para diferentes dispositivos.

## Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **PostgreSQL**: Banco de dados relacional.
- **TypeORM**: ORM para comunicação com o PostgreSQL.
- **Swagger**: Documentação interativa da API.
- **JWT**: Autenticação baseada em tokens.
- **Typescript**: Linguagem para desenvolvimento com tipagem estática.

### Frontend

- **React**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Linguagem para desenvolvimento com tipagem estática.
- **Context API**: Gerenciamento de estado global da aplicação.
- **Styled-components**: Estilização de componentes de forma modular e escalável.
- **Axios**: Cliente HTTP para comunicação com o backend.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

- `back/` - Diretório principal do backend, onde estão localizados todos os arquivos relacionados à API e ao servidor.
- `front/` - Diretório principal do frontend, onde estão os arquivos da interface de usuário e interações.

## Instalação

### Backend

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Wilrrama/Desafio_ToDoList.git
   ```

2. **Navegue até o diretório do backend**:

   ```bash
   cd Desafio_ToDoList/back
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do diretório `back/` e defina as variáveis de ambiente necessárias. Exemplo de arquivo `.env`:

   ```env
   PORT=3000
   DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
   JWT_SECRET=seu_segredo_jwt
   ```

5. **Inicie o servidor**:

   ```bash
   npm run dev
   ```

   O servidor estará disponível em `http://localhost:3000`.

### Frontend

1. **Navegue até o diretório do frontend**:

   ```bash
   cd Desafio_ToDoList/front
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie a aplicação**:

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:5173/`.

## Diagrama UML

O diagrama UML a seguir ilustra a estrutura e as relações principais do sistema. Ele inclui as entidades principais, seus atributos e os relacionamentos entre elas.

![Diagrama UML](back/DER.png)

## Documentação da API

A documentação da API é fornecida pelo Swagger e pode ser acessada em:

- **URL de Desenvolvimento**: `http://localhost:3000/api-doc`

### Insomnia Button

Você pode importar a coleção de endpoints para o Insomnia utilizando o botão abaixo:

[![Run in Insomnia](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Desafio%20ToDo%20List&uri=https%3A%2F%2Fraw.githubusercontent.com%2FWilrrama%2FDesafio_ToDoList%2Fmain%2Fback%2FInsomnia_end_points)

## Endpoints

Aqui estão alguns dos principais endpoints disponíveis na API:

- **POST** `/users`: Criação de um novo usuário.
- **POST** `/sessions`: Login de usuário e geração de token JWT.
- **GET** `/tasks`: Listagem de todas as tarefas do usuário.
- **POST** `/tasks`: Criação de uma nova tarefa.
- **GET** `/tasks/{id}`: Busca uma tarefa específica.
- **PUT** `/tasks/{id}`: Atualização de uma tarefa existente.
- **DELETE** `/tasks/{id}`: Exclusão de uma tarefa.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
