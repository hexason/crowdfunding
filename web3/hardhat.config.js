/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: "polygon_mumbai",
    networks: {
      hardhat: {
      },
      polygon_mumbai: {
        url: "https://rpc-mumbai.maticvigil.com",
        accounts: [process.env.PRIVATE_KEY]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
