export default function (test, data){

  const rate = 10.7
  const firstInstallmentPercentage = data.maternalСapital ? 10 : 15
  const conditions = {
    creditTerm: [
      /* от */
      3,
      /* до */
      30
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      300000,
      /* до */
      data.region ? 6000000 : 15000000
    ],
  }
  if (test(conditions,data))
    return {
      rate,
      'Форма_банка': {
        rate: rate,
        firstInstallmentPercentage,
      },
      '2_документа': {
        rate: (+rate) + .5,
        firstInstallmentPercentage: 40,
      },
      ИП: {
        rate: rate + 1,
        firstInstallmentPercentage: 40,
      },
    }
  
  return false
}