export default function (test, data){
  if (data.type == 'Вторичка') {
    return false
  }
  let rate = 9.75
  if (data.creditTerm < 5) {
    if (data.firstInstallmentPercentage > 50) {
      rate = 10.05
    }
  }else if(data.firstInstallmentPercentage > 20 && data.firstInstallmentPercentage > 50){
    rate = 10.04
  }
  const firstInstallmentPercentage = 20
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
      1e5,
      /* до */
      1e7
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
        firstInstallmentPercentage,
      },
    }
  
  return false
}