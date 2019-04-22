export default function (test, data){

  const rate = 9.5
  const firstInstallmentPercentage = data.motherCapital ? 0 : 20
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
      250000,
      /* до */
      9000000
    ],
  }
  if (test(conditions,data))
    return {
      rate,
      Форма_банка: {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': {},
      ИП: {
        rate,
        firstInstallmentPercentage,
      }
    }
  
  return false
}