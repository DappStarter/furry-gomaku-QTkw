require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stool response remain coin inside light army gauge'; 
let testAccounts = [
"0xe80a73f4d135c52d551cec59b48d6287db373e859828a1ef44883d90fc649e1c",
"0xe3754be99df7c534076655c6f58a2593f23112dcfeef306dba2e5e4f01ba8708",
"0x4639170fef4f130f6253380befcd4a044c73048a5d1934dc1e5bdbe5ebd45bce",
"0xaeb3b7985ad8b99ecf7cb86ce3c9e2297fc6ba3725a184f980b6347ee82ab713",
"0x46c0bd5c49b0f3c81532637d9596989df9db225d4cab2fb4d194ad3084c129dd",
"0x2c62fa2a903a887a4d40515350b71fb714613747f0bd321a9b8dece8a250a86f",
"0x4e002b0c4959f4850df786e1cbdee2f746d8f5685500a2628dfebe8d15eb6d9c",
"0x69cc8b6d45636093f1651161d494e67b1fb82bf02b68502894e3ccd50433d8a3",
"0x1166da6840525a2c24e95a86f276ab07ec595cf452a935edcf1977ea103c06d7",
"0x965c5bd7184ac06386c8fa779320146844e3ab09a31c762a98ae62d0e9f37ca7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

