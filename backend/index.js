const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 SIMPAN DONASI SEMENTARA (IN-MEMORY)
let donations = [];

// 🔹 ROOT CHECK
app.get("/", (req, res) => {
  res.send("Backend API Web3 Donation App is running");
});

// 🔹 GET SEMUA DONASI (DIPAKAI FRONTEND / POSTMAN)
app.get("/api/donations", (req, res) => {
  res.json(donations);
});

// 🔹 POST DONASI DARI FRONTEND
app.post("/api/donations", (req, res) => {
  const { address, amount, txHash } = req.body;

  if (!address || !amount || !txHash) {
    return res.status(400).json({
      message: "Data donasi tidak lengkap",
    });
  }

  const newDonation = {
    address,
    amount,
    txHash,
    time: new Date().toISOString(),
  };

  donations.push(newDonation);

  console.log("DATA DONASI MASUK:", newDonation);

  res.json({
    message: "Donasi berhasil disimpan",
    data: newDonation,
  });
});

app.get("/", (req, res) => {
  res.send("Backend API Web3 Donation App is running");
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});


// 🔹 JALANKAN SERVER (PALING BAWAH)
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

// 🔹 ENDPOINT DUMMY SESUAI SOAL
app.get("/api/transactions", (req, res) => {
  res.json([
    {
      from: "0x1234567890abcdef",
      to: "0xabcdef1234567890",
      amount: "0.05 ETH",
      status: "success",
    },
    {
      from: "0xabcdef9876543210",
      to: "0x1234567890abcdef",
      amount: "0.1 ETH",
      status: "success",
    },
  ]);
});
