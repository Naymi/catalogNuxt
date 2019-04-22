export default function (test, data) {

  let firstInstallmentPercentage
  let rate
  if (data.firstInstallmentPercentage < 35) {
    rate = 10.95
  } else if (data.firstInstallmentPercentage < 50) {
    rate = 10.45
  } else {
    rate = 10.2
  }
  if (data.region) {
    if (data.creditAmount < 5000000) {
      firstInstallmentPercentage = 20
    } else {
      rate++
      firstInstallmentPercentage = 35
    }
  } else {
    if (data.creditAmount < 12000000) {
      firstInstallmentPercentage = 20
    } else {
      rate++
      firstInstallmentPercentage = 35
    }
  }
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
      data.region ? 300000 : 500000,
      /* до */
      data.region ? 10000000 : 20000000
    ],
  }
  if (test(conditions, data))
    return {
      rate,
      'Форма_банка': {
        rate: rate + 1.5,
        firstInstallmentPercentage,
      },
      '2_документа': {
        rate: rate + 1.5,
        firstInstallmentPercentage: 30,
      },
      ИП: {
        rate: rate + .5,
        firstInstallmentPercentage,
      },
    }

  return false
}
