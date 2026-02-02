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
