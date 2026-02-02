import { useState } from "react";
import { ethers } from "ethers";
import donationABI from "./abi/DonationABI.json";
import "./App.css";

const CONTRACT_ADDRESS = "0x7EA688d11659E1a4BA4713A3C0D684B84A6011Ce";

function App() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [donors, setDonors] = useState([]);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setError("MetaMask tidak terdeteksi");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();

      const balanceWei = await provider.getBalance(accounts[0]);
      const balanceEth = ethers.formatEther(balanceWei);

      setAccount(accounts[0]);
      setBalance(balanceEth);
      setError("");

      loadDonations(provider);
    } catch {
      setError("Gagal menghubungkan wallet");
    }
  };

const loadDonations = async (provider) => {
  // 🔍 CEK apakah address benar-benar ada kontraknya
  const code = await provider.getCode(CONTRACT_ADDRESS);
  console.log("Contract code:", code);

  if (code === "0x") {
    setError("Contract tidak ditemukan di network Sepolia");
    return;
  }

  // kalau lolos cek, baru buat instance contract
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    donationABI,
    provider
  );

  const count = await contract.getDonorsCount();
  const items = [];

  for (let i = 0; i < count; i++) {
    const donor = await contract.getDonor(i);
    items.push({
      address: donor[0],
      amount: ethers.formatEther(donor[1]),
    });
  }

  setDonors(items);
};


  const donate = async () => {
    try {
      if (!amount) return;

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        donationABI,
        signer
      );

      const tx = await contract.donate({
        value: ethers.parseEther(amount),
      });

      await tx.wait();

      await fetch("http://localhost:5000/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: account,
          amount: amount,
          txHash: tx.hash
        })
      });

      setAmount("");
      loadDonations(provider);
    } catch {
      setError("Transaksi donasi gagal");
    }
    
  };

  return (
    <div className="container">
      <h1>Web3 Donation App</h1>

      {!account ? (
        <button onClick={connectWallet}>Connect MetaMask</button>
      ) : (
        <>
          <div className="wallet-info">
            <p><strong>Address:</strong> {account}</p>
            <p><strong>Balance:</strong> {balance} ETH</p>
          </div>

          <div className="donate-box">
            <input
              type="number"
              placeholder="Jumlah ETH"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={donate}>Donate</button>
          </div>

          <h3>Daftar Donasi</h3>
          {donors.map((d, i) => (
            <p key={i}>
              {d.address} — {d.amount} ETH
            </p>
          ))}
        </>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
