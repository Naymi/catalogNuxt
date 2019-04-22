export default function (test, data){

  const rate = data.creditAmount > 7000000 ? 9.99 : 10.49
  const firstInstallmentPercentage = data.motherCapital ? 0 : 15
  const conditions = {
    creditTerm: [
      /* от */
      1,
      /* до */
      30
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      data.region ? 500000 : 800000,
      /* до */
      26000000
    ],
  }
  
  if (test(conditions,data))
    return {
      rate,
      'Форма_банка': {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': {},
      ИП: data.creditTerm <= 15 && {
        rate,
        firstInstallmentPercentage: 25,
      },
    }
  
  return false
}