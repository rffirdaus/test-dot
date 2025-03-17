# TMDB App

TMDB App adalah aplikasi berbasis React.js yang menampilkan daftar film menggunakan API dari The Movie Database (TMDB). Aplikasi ini mencakup fitur pencarian film, detail film, autentikasi pengguna, dan navigasi antar halaman.

## 📌 **Fitur Utama**
- 🔍 **Fetch Data dari API TMDB** menggunakan Axios
- 🖼️ **Menampilkan daftar film populer**
- 🎬 **Detail film lengkap** termasuk deskripsi dan rating
- 🔄 **Conditional Rendering** untuk autentikasi pengguna
- 📦 **Reusable Components** untuk tampilan film
- ⚡ **State Management dengan React Hooks**
- 🚀 **Routing dengan React Router** (termasuk proteksi rute)
- 🎨 **Styling menggunakan CSS Modules & Styled Components**
- ✅ **Linting dengan ESLint**

## 📂 **Struktur Folder**
```
TMDB-App/
│── public/
│── src/
│   ├── components/
│   │   ├── MovieCard.tsx
│   │   ├── Navbar.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── MovieDetails.tsx
│   │   ├── Login.tsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.module.css
│   │   ├── Home.module.css
│   ├── App.tsx
│   ├── index.tsx
│── .eslintrc.json
│── package.json
│── README.md
```

## ⚙️ **Instalasi & Menjalankan Aplikasi**
1. **Clone repository**
   ```sh
   git clone https://github.com/username/tmdb-app.git
   cd tmdb-app
   ```
2. **Instal dependensi**
   ```sh
   npm install
   ```
3. **Buat file `.env` dan tambahkan API key dari TMDB**
   ```sh
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```
4. **Jalankan aplikasi**
   ```sh
   npm start
   ```

## 🛠️ **Teknologi yang Digunakan**
- React.js
- TypeScript
- React Router
- Axios
- Styled Components
- CSS Modules
- ESLint

## 📜 **Lisensi**
Proyek ini menggunakan lisensi MIT.