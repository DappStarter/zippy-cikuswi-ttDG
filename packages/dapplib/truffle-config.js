require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stomach regret punch purpose jazz end army gaze'; 
let testAccounts = [
"0xa0b1a085ffb0635137e54242898bf6214d5d22559f48deb9b8ac52f56e3a0a5a",
"0x1eaa40fcd1e2e7c79b07700b9d7710afdbca8fb178e61ead5ca22a05ca04da4f",
"0xc7a06cbdb6321f1774045b80939ca9fe4b4634b454810c76c7783f1f76ba239c",
"0xcd1dd5fb116874f6d8a8f002ff6031590ce40dd8c4b9e2858012eec9ba61e053",
"0xf35b104551f4e7cebce43107b154cac5bd97c690a62fbdd4959faf0f815cf1d2",
"0x6aff4d5a0988e7ff8668401d69ecda18764f66db73eefc2156988a392d3ba9a3",
"0xe05464e410b08b33ef1f8852efc874cbd151030ae1d903aae01d29a3aed54a32",
"0xdd61ccf1d7f733b7c265c70a4c3fab8332e8ea9d29e4c3302c8faf5fe3c686f1",
"0x63917033c2c47946917629318ec4f61dafeb886b4de681f8efe5c456309be880",
"0xec1a8d5deeff8b03fbdf99d9f44baca1761f15fa1ad11d70a826e2a9430b7889"
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

