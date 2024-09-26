// const networkConfig = {
//     31337: {
//         name: "localhost",
//         ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
//         gasLane:
//             "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
//         mintFee: "10000000000000000", // 0.01 ETH
//         callbackGasLimit: "500000", // 500,000 gas
//         vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
//     },
//     // Price Feed Address, values can be obtained at https://docs.chain.link/data-feeds/price-feeds/addresses
//     11155111: {
//         name: "sepolia",
//         ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
//         vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
//         gasLane:
//             "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
//         callbackGasLimit: "500000", // 500,000 gas
//         mintFee: "10000000000000000", // 0.01 ETH
//         subscriptionId:
//             "45032234869588095786800904020760360677974966548657636015474135124423362912445", // add your ID here!
//     },
// };
// const DECIMALS = "18";
// const INITIAL_PRICE = "200000000000000000000";
// const developmentChains = ["hardhat", "localhost"];
// const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

// module.exports = {
//     networkConfig,
//     developmentChains,
//     VERIFICATION_BLOCK_CONFIRMATIONS,
//     DECIMALS,
//     INITIAL_PRICE,
// };
const networkConfig = {
    default: {
        name: "hardhat",
    },
    31337: {
        name: "localhost",
    },
    11155111: {
        name: "sepolia",
    },
    1: {
        name: "mainnet",
    },
};

const developmentChains = ["hardhat", "localhost"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
};