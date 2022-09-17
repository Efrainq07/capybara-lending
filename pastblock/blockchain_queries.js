const {PoolContract, ProtocolDataContract} = require('./contracts');
const Promise = require('bluebird');
const fs = require('fs');

const reserve_rawdata = fs.readFileSync('aave_reserve_data_simple.json');
var reserve_data = JSON.parse(reserve_rawdata);

async function getUserPositionOnBlock(user,block){
    var data_list = [];

    const total_data = await PoolContract.methods.getUserAccountData(user).call(block).then(
        (result) =>{
            result.symbol = 'Total'
            result.underlyingAsset = '0x0'
            result.user = user
            result.block = block
            return result
        }
    )

    data_list.push(total_data)

    const filtered_reserve_data = reserve_data.filter(
        ({symbol}) => {
            return !symbol.startsWith('Amm')
        }
    )
    
    var promise_list = []
    const max_simultaneus_queries = 4

    for (var pos = 0; pos<filtered_reserve_data.length; pos += max_simultaneus_queries){
        let promise_list = []
        for( var res_data of filtered_reserve_data.slice(pos,pos+max_simultaneus_queries)){
            const underlyingAsset = res_data.underlyingAsset
            const symbol = res_data.symbol
            promise_list.push(ProtocolDataContract.methods.getUserReserveData(underlyingAsset,user).call(block)
            .then(
                (result)=>{
                    result.symbol = symbol
                    result.underlyingAsset = underlyingAsset
                    result.user = user
                    result.block = block
                    data_list.push(result)
                }
            ).catch(
                (err) => {
                    if(err.message !== 'Returned error: execution reverted'){
                        console.log(err.message)
                    }
                }
            ));
        }
        await Promise.all(promise_list)
    }
    return data_list
    
}

module.exports = {getUserPositionOnBlock}