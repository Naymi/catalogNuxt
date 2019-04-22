export default function (test, data){
  if (data.type === 'Новостройка')
    return false
  const rate = 10.99
  const firstInstallmentPercentage = 50
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
      600000,
      /* до */
      50000000
    ],
  }
  
  if (test(conditions,data))
    return {
      rate,
      'Форма_банка': {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': false,
      ИП: {
        rate,
        firstInstallmentPercentage,
      },
    }
  
  return false
}