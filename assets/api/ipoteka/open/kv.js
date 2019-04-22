export default function (test, data){

  const rate = 10

  const firstInstallmentPercentage = 
    data.motherCapital ? 10 : 20

  const conditions = {

    creditTerm: [
      /* от */
      5,
      /* до */
      30
    ],

    firstInstallmentPercentage,

    creditAmount: [
      /* от */
      5e5,
      /* до */
      30e6
    ],

  }
  
  if (test(conditions,data))
    return {
      rate,
      'Форма_банка': {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': {
        rate: rate + .5,
        firstInstallmentPercentage: data.type == 'Новостройка' ? 40 : 50,
      },
      'ИП': {
        rate: rate + 1,
        firstInstallmentPercentage,
      },
    }
  
  return false
}