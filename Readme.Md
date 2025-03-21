
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
