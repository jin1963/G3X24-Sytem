let web3;
let contract;
let token;
let user;

const contractAddress = "0x4436a07606de10ea23dac531672d855ec4b9de37";
const tokenAddress = "0x65e47d9bd03c73021858ab2e1acb2cab38d9b039";

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        user = accounts[0];
        document.getElementById("wallet").innerText = user;

        contract = new web3.eth.Contract(stakingABI, contractAddress);
        token = new web3.eth.Contract(erc20ABI, tokenAddress);

        updateDashboard();
    }
};

async function updateDashboard() {
    const balance = await token.methods.balanceOf(user).call();
    const staked = await contract.methods.totalStaked().call();
    const reward = await contract.methods.rewardPool().call();

    document.getElementById("balance").innerText = (balance / 1e18).toFixed(2);
    document.getElementById("staked").innerText = (staked / 1e18).toFixed(2);
    document.getElementById("reward").innerText = (reward / 1e18).toFixed(2);
}

async function approveTokens() {
    const amount = document.getElementById("amount").value;
    await token.methods.approve(contractAddress, web3.utils.toWei(amount, "ether")).send({ from: user });
    updateDashboard();
}

async function stakeTokens() {
    const amount = document.getElementById("amount").value;
    const days = document.getElementById("days").value;
    await contract.methods.stake(web3.utils.toWei(amount, "ether"), days).send({ from: user });
    updateDashboard();
}
