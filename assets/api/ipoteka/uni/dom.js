export default function (test, data){

  const rate = 13.25
  const firstInstallmentPercentage = 50
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
      Number.MAX_SAFE_INTEGER
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