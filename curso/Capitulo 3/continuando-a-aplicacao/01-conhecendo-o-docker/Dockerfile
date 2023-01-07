# Imagem que utilizaremos
FROM node

# Diretório aonde será salvo nossas informações
WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]
