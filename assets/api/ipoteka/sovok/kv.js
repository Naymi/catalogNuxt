export default function(test, data) {
  const rate = data.type === 'Новостройка' ? 10.9 : 11.4
  const firstInstallmentPercentage = 20
  const conditions = {
    creditTerm: [
      /* от */
      1,
      /* до */
      data.type == 'Новостройка' ? 30 : 20,
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      300e3,
      /* до */
      20e6,
    ],
  }

  return (
    test(conditions, data) && {
      rate,
      Форма_банка: {
        rate,
        firstInstallmentPercentage: 20,
      },
      '2_документа': {},
      ИП: {
        rate: rate + 1.5,
        firstInstallmentPercentage,
      },
    }
  )
}
