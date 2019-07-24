export default function(test, data) {
  const rate = 10.75
  const firstInstallmentPercentage =
    data.type === 'Новостройка' ? (data.maternalKapital ? 15 : 20) : 15
  const conditions = {
    creditTerm: [
      /* от */
      1,
      /* до */
      30,
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      data.region ? 375000 : 625000,
      /* до */
      data.region ? 18000000 : 25000000,
    ],
  }
  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate: rate + 0.5,
        firstInstallmentPercentage,
      },
      '2_документа': {
        rate: 10.9,
        firstInstallmentPercentage: 35,
      },
      ИП: {
        rate: rate + 1,
        firstInstallmentPercentage,
      },
    }

  return false
}
