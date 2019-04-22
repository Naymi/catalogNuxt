import calcPlatesh from '~/assets/api/util/platesh'
import Target from './target'
export default function bank({
  Квартира = () => false,
  Дом = () => false,
  core = false
}) {
  if (!core) {
    throw new Error('Не найден core банка')
  }
  return function(data) {
    if (data.firstInstallmentPercentage) {
      data.creditAmountPercentage = 100 - data.firstInstallmentPercentage
    } else {
      data.firstInstallmentPercentage =
        (data.firstInstallment / data.price) * 100
    }
    if (data.family) {
      const rate = 6
      return {
        ...core,
        platesh: calcPlatesh({
          rate,
          creditAmount: data.creditAmount,
          creditTerm: data.creditTerm
        }),
        rate,
        '2_документа': {},
        ИП: {},
        Форма_банка: {}
      }
    }
    const target = Target(data)
    let result = false
    if (data.target === 'Квартира') result = target(Квартира)

    if (data.target === 'Дом') result = target(Дом)
    // console.log('bank', result);
    if (result) {
      return {
        ...core,
        ...result,
        platesh: calcPlatesh({
          rate: result.rate,
          creditAmount: data.creditAmount,
          creditTerm: data.creditTerm
        })
      }
    }

    return false
  }
}
