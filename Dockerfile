# Gunakan image Node.js dari Docker Hub
FROM node:v18.15.0

# Set direktori kerja di dalam container
WORKDIR /dist

# Salin package.json dan package-lock.json ke direktori kerja
COPY package* ./

# Install dependensi menggunakan npm
RUN npm install

# Salin seluruh proyek ke direktori kerja
COPY . .

# Expose container port
EXPOSE 8080

# Perintah untuk menjalankan aplikasi ketika container dijalankan
CMD ["npm", "run", "start"]