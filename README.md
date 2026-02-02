# Web3-donasi

## Deskripsi Proyek

Web3 Donation App adalah aplikasi web fullstack berbasis Web3 yang dikembangkan sebagai mini project mata kuliah **Pemrograman Web**. Aplikasi ini memungkinkan pengguna untuk melakukan donasi menggunakan cryptocurrency Ethereum melalui wallet MetaMask. Seluruh transaksi dicatat secara **on-chain** menggunakan smart contract, serta didukung pencatatan **off-chain** melalui backend REST API.

Proyek ini bertujuan untuk menerapkan konsep Web3, integrasi frontend–backend, serta pemahaman dasar interaksi aplikasi web dengan blockchain.

---

## Latar Belakang

Pada era Web3, pengguna memiliki kendali penuh atas aset dan datanya tanpa perantara. Oleh karena itu, aplikasi donasi dipilih sebagai studi kasus karena relevan untuk menunjukkan:

* Transparansi transaksi
* Kepemilikan aset oleh pengguna
* Keamanan data melalui blockchain

Aplikasi ini juga relevan dengan mata kuliah Pemrograman Web karena menggabungkan frontend, backend, API, dan integrasi layanan eksternal (blockchain & wallet).

---

## Teknologi yang Digunakan

### Frontend

* React.js
* ethers.js
* HTML & CSS (custom theme pink & cherry red)

### Backend

* Node.js
* Express.js
* REST API
* CORS

### Blockchain

* Ethereum
* Sepolia Testnet
* Smart Contract (Solidity)

### Tools Pendukung

* MetaMask Wallet
* Remix Ethereum IDE
* Postman / Thunder Client

---

## Arsitektur Sistem

1. Pengguna mengakses aplikasi melalui browser
2. Pengguna menghubungkan wallet MetaMask
3. Frontend membaca saldo dan alamat wallet
4. Pengguna mengirim donasi ETH
5. Smart contract menerima dan mencatat transaksi (on-chain)
6. Frontend mengirim data transaksi ke backend
7. Backend menyimpan data donasi secara off-chain
8. Data donasi ditampilkan kembali di antarmuka

---

## Alur Pengerjaan Proyek

### 1. Perancangan Ide

Proyek dimulai dengan menentukan konsep aplikasi Web3 sederhana namun relevan, yaitu aplikasi donasi berbasis blockchain.

### 2. Pembuatan Smart Contract

* Smart contract dibuat menggunakan Solidity
* Fungsi utama:

  * Menerima donasi ETH
  * Menyimpan data donor
  * Mengambil jumlah dan detail donasi
* Smart contract dideploy ke jaringan Sepolia Testnet menggunakan Remix

### 3. Pengembangan Frontend

* Membuat UI menggunakan React.js
* Integrasi MetaMask menggunakan ethers.js
* Menampilkan alamat wallet, saldo, dan daftar donasi
* Menambahkan fitur donasi ETH

### 4. Pengembangan Backend

* Backend dibuat menggunakan Node.js dan Express
* Endpoint utama:

  * `POST /api/donations` untuk menerima data donasi
  * `GET /api/donations` untuk mengambil data donasi
* Data disimpan sementara dalam memori server (tanpa database)

### 5. Integrasi Fullstack

* Frontend mengirim data transaksi ke backend setelah transaksi berhasil
* Backend menerima dan mencatat data donasi

### 6. Testing

* Pengujian koneksi MetaMask
* Pengujian transaksi donasi di Sepolia Testnet
* Pengujian endpoint backend menggunakan frontend dan Postman

### 7. Penyempurnaan UI

* Menambahkan tema warna pink dan cherry red
* Meningkatkan tampilan agar lebih nyaman dilihat dan presentable

---

## Fitur Utama

* Connect wallet MetaMask
* Menampilkan saldo ETH
* Melakukan donasi ETH
* Menampilkan daftar donasi
* Pencatatan transaksi on-chain dan off-chain

---

## Konsep Web3 yang Diterapkan

* Kepemilikan aset sepenuhnya oleh pengguna
* Transparansi transaksi melalui blockchain
* Minim peran pihak ketiga
* Wallet sebagai identitas pengguna

---

## Kesimpulan

Web3 Donation App berhasil mengimplementasikan konsep Web3 dalam bentuk aplikasi web fullstack. Proyek ini menggabungkan frontend, backend, dan blockchain secara terintegrasi serta memberikan pemahaman praktis mengenai pengembangan aplikasi Web3.

Aplikasi ini diharapkan dapat menjadi contoh sederhana penerapan teknologi Web3 dalam pengembangan web modern.

---

## Catatan

Aplikasi dijalankan pada jaringan **Sepolia Testnet** untuk keperluan pengujian. Seluruh transaksi yang dilakukan menggunakan ETH testnet dan tidak melibatkan aset nyata.

---

## Penutup

Proyek ini dibuat untuk memenuhi tugas mini project mata kuliah **Pemrograman Web** dan menjadi sarana pembelajaran pengembangan aplikasi Web3 secara praktis.
