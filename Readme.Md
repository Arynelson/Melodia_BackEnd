# Melodia - Spotify Clone

Welcome to **Melodia**, a Spotify clone! This project is a full-stack web application that replicates some of the core features of Spotify, allowing users to browse, play, and manage music. The stack used includes **React**, **Vite**, **HTML**, **CSS**, **MongoDB**, **JavaScript**, and **Express.js**.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

---

## Features

- **User Authentication**: Sign up, log in, and manage your profile.
- **Music Playback**: Play, pause, skip, and control the volume of songs.
- **Playlist Management**: Create, edit, and delete playlists.
- **Search Functionality**: Search for songs, artists, and albums.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Database Integration**: Store user data, playlists, and music metadata in MongoDB.

---

## Technologies Used

- **Frontend**:
  - React
  - Vite
  - HTML
  - CSS
  - JavaScript
- **Backend**:
  - Express.js
  - MongoDB (Database)
- **Other Tools**:
  - Node.js
  - npm (Node Package Manager)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Arynelson/Melodia.git
   cd Melodia
   ```

2. **Install dependencies**:

   - Navigate to the `client` folder and install frontend dependencies:
     ```bash
     cd client
     npm install
     ```
   - Navigate to the `server` folder and install backend dependencies:
     ```bash
     cd ../server
     npm install
     ```

3. **Set up MongoDB**:

   - Create a MongoDB database (locally or using a cloud service like MongoDB Atlas).
   - Update the connection string in `server/config/db.js` with your MongoDB URI.

4. **Environment Variables**:

   - Create a `.env` file in the `server` folder and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

5. **Run the application**:

   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd ../client
     npm run dev
     ```

6. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`.

---

## Usage

- **Sign Up**: Create a new account to access all features.
- **Log In**: Use your credentials to log in.
- **Browse Music**: Explore songs, artists, and albums.
- **Play Music**: Click on a song to start playback.
- **Create Playlists**: Add your favorite songs to custom playlists.
- **Search**: Use the search bar to find specific tracks or artists.

---

## Contributing

Contributions are welcome! If you'd like to contribute to Melodia, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

- **Ary Hauffe**
- GitHub: [Arynelson](https://github.com/Arynelson)
- Feel free to reach out for questions, feedback, or collaboration opportunities!

---

# Melodia - Backend

Bem-vindo ao **Melodia Backend**! Este repositório contém o código do backend do projeto Melodia, um clone do Spotify. O backend foi desenvolvido utilizando **Node.js**, **Express.js**, e **MongoDB** para fornecer APIs robustas e seguras.

---

## Tabela de Conteúdos

1. [Recursos](#recursos)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação](#instalação)
4. [Uso](#uso)
5. [Contribuindo](#contribuindo)
6. [Licença](#licença)
7. [Contato](#contato)

---

## Recursos

- **Autenticação de Usuário**: Cadastro, login e gerenciamento de perfil.
- **APIs para Reprodução de Música**: Endpoints para gerenciar reprodução, playlists e músicas.
- **Gerenciamento de Playlists**: Criação, edição e exclusão de playlists.
- **Integração com Banco de Dados**: Armazena dados de usuários, playlists e metadados de músicas no MongoDB.

---

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
- **Outras Ferramentas**:
  - JWT (JSON Web Tokens) para autenticação
  - Dotenv para gerenciamento de variáveis de ambiente

---

## Instalação

Siga os passos abaixo para configurar o backend localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Arynelson/Melodia-Backend.git
   cd Melodia-Backend
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure o MongoDB**:

   - Crie um banco de dados MongoDB (localmente ou usando um serviço como o MongoDB Atlas).
   - Atualize a string de conexão no arquivo `config/db.js` com o URI do seu MongoDB.

4. **Variáveis de Ambiente**:

   - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

5. **Inicie o servidor**:

   ```bash
   npm start
   ```

6. **Testando a API**:
   - Use ferramentas como **Postman** ou **Insomnia** para testar os endpoints da API.
   - O servidor estará disponível em `http://localhost:5000`.

---

## Uso

- **Endpoints de Autenticação**: Registre-se, faça login e gerencie seu perfil.
- **Gerenciamento de Playlists**: Crie, edite e exclua playlists usando os endpoints fornecidos.
- **Reprodução de Música**: Utilize os endpoints para gerenciar a reprodução de músicas.

---

## Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir com o backend do Melodia, siga estas etapas:

1. Faça um fork do repositório.
2. Crie um novo branch para sua funcionalidade ou correção de bug:
   ```bash
   git checkout -b feature/sua-funcionalidade
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Adicione sua mensagem aqui"
   ```
4. Envie para o branch:
   ```bash
   git push origin feature/sua-funcionalidade
   ```
5. Abra um pull request no GitHub.

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

- **Ary Hauffe**
- GitHub: [Arynelson](https://github.com/Arynelson)
- Sinta-se à vontade para entrar em contato para perguntas, feedback ou oportunidades de colaboração!

---
