const stakingABI = [
{"inputs":[{"internalType":"address","name":"_g3xToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"aprByTier","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"g3xToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getStakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getStakeInfo","outputs":[{"internalType":"uint112","name":"amount"},{"internalType":"uint32","name":"startTime"},{"internalType":"uint32","name":"unlockTime"},{"internalType":"uint16","name":"durationDays"},{"internalType":"uint16","name":"apr"},{"internalType":"bool","name":"claimed"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"rewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint16","name":"duration","type":"uint16"},{"internalType":"uint16","name":"newApr","type":"uint16"}],"name":"setAPR","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint16","name":"duration","type":"uint16"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeCounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakes","outputs":[{"internalType":"uint112","name":"amount"},{"internalType":"uint32","name":"startTime"},{"internalType":"uint32","name":"unlockTime"},{"internalType":"uint16","name":"durationDays"},{"internalType":"uint16","name":"apr"},{"internalType":"bool","name":"claimed"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"token"},{"internalType":"uint256","name":"amount"}],"name":"withdrawExcess","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

const erc20ABI = [
  {"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},
  {"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"type":"function"}
];
