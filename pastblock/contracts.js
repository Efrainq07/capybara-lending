const Web3 = require('web3');
const fs = require('fs');

const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-mainnet.g.alchemy.com/v2/slq8n323pJiFBLP5aEHyUuOxwvPdpgjY"));
web3.eth.handleRevert = true


const pool_rawdata = fs.readFileSync('PoolABI.json');
const pool_abi = JSON.parse(pool_rawdata);
const pool_address = "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9"
const PoolContract = new web3.eth.Contract(pool_abi,pool_address);

const protocol_data_rawdata = fs.readFileSync('ProtocolDataProviderABI.json');
const protocol_data_abi = JSON.parse(protocol_data_rawdata);
const protocol_data_address = "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d"
const ProtocolDataContract = new web3.eth.Contract(protocol_data_abi,protocol_data_address);


module.exports = {PoolContract,ProtocolDataContract}
