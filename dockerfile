# Utilitza una imatge de node com a base
FROM node:latest

# Estableix el directori de treball a /server
WORKDIR /usr/src/server

# Copia el fitxer package.json i package-lock.json al directori de treball
COPY package*.json ./

# Instal·la les dependències
RUN npm install

# Copia tot el codi de l'aplicació al directori de treball
COPY . .

# Exposa el port 3000 perquè l'aplicació pugui ser accessible a través d'aquest port
EXPOSE 3000

# Comanda per iniciar l'aplicació quan s'executi el contenidor
CMD ["npm", "start"]
