const axios = require('axios');
const {getUserPositionOnBlock} = require('./blockchain_queries.js')

async function main(){
    let payload = {
        query : `
        query userBorrowHistory($lastUserId: String = "0x000000000000512644392395185ad535410f98c2") {
            users(first: 1000, orderBy: id, where:{
              id_gt:$lastUserId
            }) {
              id
              depositHistory(first: 1000, orderBy: timestamp){
                ...TransactionFields
                amount
                reserve {
                  ...ReserveFields
                }
              }
              redeemUnderlyingHistory(first: 1000, orderBy: timestamp){
                ...TransactionFields
                amount
                reserve {
                  ...ReserveFields
                }
              }
              borrowHistory(first: 1000, orderBy: timestamp){
                ...TransactionFields
                amount
                stableTokenDebt
                variableTokenDebt
                borrowRateMode
                borrowRate
                reserve {
                  ...ReserveFields
                }
              }
              repayHistory(first: 1000, orderBy: timestamp){
                ...TransactionFields
                amount
                reserve {
                  ...ReserveFields
                }
              }
              swapHistory(first: 1000, orderBy: timestamp){
                ...TransactionFields
                borrowRateModeFrom
                borrowRateModeTo
                stableBorrowRate
                variableBorrowRate
                reserve{
                  ...ReserveFields
                }
              }
              rebalanceStableBorrowRateHistory(first: 1000, orderBy: timestamp){
                ...TransactionFields
                borrowRateFrom
                borrowRateTo
                reserve{
                  ...ReserveFields
                }
              }
              liquidationCallHistory(first: 1000, orderBy: timestamp){
                ...TransactionFields
                collateralAmount
                principalAmount
                collateralReserve {
                  ...ReserveFields
                }
                principalReserve {
                  ...ReserveFields
                }
              }
            }
          }
          
          fragment TransactionFields on UserTransaction{
            id
            timestamp
          }
          
          fragment ReserveFields on Reserve{
            id
            symbol
            decimals
          }
        `
    };

    
    let res = await axios.post('https://api.thegraph.com/subgraphs/name/aave/protocol-v2', payload);

    var final_data = {}
    let count = 0;
    for(var user of res.data.data.users){
      final_data[user] = {}
        for(tx of user.depositHistory){
              const block = parseInt(tx.id.substr(0,tx.id.indexOf(':')))+1;
              final_data[user][block] = await getUserPositionOnBlock(user.id,block);
              count+=1
              console.log(count)
        }
    }

    console.log(final_data.length)

}

main()