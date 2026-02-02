// Wallet connect
const connectBtn = document.getElementById("connectWallet");
const walletStatus = document.getElementById("walletStatus");
let userAccount;

connectBtn.addEventListener("click", async () => {
  if (!window.ethereum) return (walletStatus.textContent = "MetaMask not detected ❌");
  try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    userAccount = accounts[0];
    walletStatus.textContent = `Connected: ${accounts[0]}`;
  } catch {
    walletStatus.textContent = "Connection rejected";
  }
});

// Mint NFT (simulate free mint)
const mintBtn = document.getElementById("mintNFT");
const mintStatus = document.getElementById("mintStatus");

mintBtn.addEventListener("click", () => {
  if (!userAccount) return (mintStatus.textContent = "Connect wallet first!");
  mintStatus.textContent = `NFT minted successfully for ${userAccount}! 🎉`;
});

// AI Wealth Guide
const askBtn = document.getElementById("askAI");
const aiInput = document.getElementById("aiPrompt");
const aiOutput = document.getElementById("aiOutput");

askBtn.addEventListener("click", async () => {
  const prompt = aiInput.value;
  if (!prompt) return;
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });
  const data = await res.json();
  aiOutput.textContent = data.response;
});
