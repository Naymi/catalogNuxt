export default function(test, data) {
  let firstInstallmentPercentage =
    data.region && data.creditAmount <= 10e6 ? 20 : 50
  let rate
  if ((data.creditAmount <= 12e6 && data.region) || data.creditAmount <= 5e6) {
    if (data.firstInstallmentPercentage <= 30) {
      rate = 10.95
    } else if (data.firstInstallmentPercentage <= 40) {
      rate = 10.45
    } else {
      rate = 10.2
    }
  }
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
      data.region ? 300000 : 500000,
      /* до */
      data.region ? 10000000 : 20000000,
    ],
  }
  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate: rate + 1.5,
        firstInstallmentPercentage,
      },
      '2_документа': {
        rate: rate + 0.5,
        firstInstallmentPercentage: 30,
      },
      ИП: {
        rate: rate + 0.5,
        firstInstallmentPercentage,
      },
    }

  return false
}
