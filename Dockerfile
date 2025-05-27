# Use imagem oficial do Node.js
FROM node:23

# Diretório de trabalho
WORKDIR /app

# Copia arquivos
COPY package*.json ./
RUN npm install
COPY . .

# Build da aplicação
RUN npm run build

# Servir a aplicação com um servidor estático
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expor a porta padrão
EXPOSE 3000:3000
