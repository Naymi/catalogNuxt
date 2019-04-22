import ipotekaBanks from './ipoteka'
import Bank from './models/bank'
global.console.log('ipotekaBanks :', ipotekaBanks)
function getBanks(mdata) {
  const data = {
    ...mdata,
    firstInstallmentPercantage: (mdata.firstInstallment * 100) / mdata.price
  }
  const Banks = ipotekaBanks
  const banks = Banks.reduce((acc, bank) => {
    const result = Bank(bank)(data)
    if (result) {
      acc.push(result)
    }
    return acc
  }, [])
  return banks
}
export default getBanks
