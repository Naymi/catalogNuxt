export default function (test, data) {
  if (data.type === 'Новостройка') {
    return false
  }
  const rate = 11.5
  const firstInstallmentPercentage = 15
  const conditions = {
    creditTerm: [
      /* от */
      3,
      /* до */
      25
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      600000,
      /* до */
      data.region ? 12000000 : 15000000
    ],
  }

  if (test(conditions, data))
    return {
      rate,
      '2_документа': data.region && data.creditAmount < 6000000 || {
        rate: 12.5,
        firstInstallmentPercentage: 35,
      },
      ИП: {
        rate,
        firstInstallmentPercentage
      }
    }

  return false
}
