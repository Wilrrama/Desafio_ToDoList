# Desafio ToDoList

Bem-vindo ao projeto **Desafio ToDoList** desenvolvido para a Jack Experts. Este é um backend completo para um sistema de gerenciamento de tarefas (to-do list) que permite o gerenciamento de usuários e tarefas com autenticação via JWT.

## Funcionalidades

- **Gerenciamento de Usuários**: Criação, visualização e exclusão de usuários.
- **Autenticação**: Login e geração de token JWT.
- **Gerenciamento de Tarefas**: Criação, atualização, listagem e exclusão de tarefas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **PostgreSQL**: Banco de dados relacional.
- **TypeORM**: ORM para comunicação com o PostgreSQL.
- **Swagger**: Documentação interativa da API.
- **JWT**: Autenticação baseada em tokens.
- **Typescript**: Linguagem para desenvolvimento com tipagem estática.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

- `back/` - Diretório principal do backend, onde estão localizados todos os arquivos relacionados à API e ao servidor.

## Instalação

Para começar a utilizar o projeto, siga as etapas abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Wilrrama/Desafio_ToDoList.git
   ```

2. **Navegue até o diretório do projeto**:

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
   npm run
   ```

   O servidor estará disponível em `http://localhost:3000`.

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

Para mais informações, consulte a documentação da API ou entre em contato com a equipe de desenvolvimento.
