import calcPlatesh from '~/assets/api/util/platesh'
import Target from './target'
export default function bank({
  Квартира = () => false,
  Дом = () => false,
  core = false,
  family = {},
}) {
  if (!core) {
    throw new Error('Не найден core банка')
  }
  return function(data) {
    if (data.firstInstallmentPercentage) {
      data.creditAmountPercentage = 100 - data.firstInstallmentPercentage
    }
    if (data.family) {
      if (family.default) {
        const platesh = calcPlatesh({
          rate: family.default,
          creditAmount: data.creditAmount,
          creditTerm: data.creditTerm,
        })
        return {
          ...core,
          platesh,
          rate: family.default,
        }
      } else {
        return false
      }
    }
    const target = Target(data)
    let result = false
    if (data.target === 'Квартира') result = target(Квартира)

    if (data.target === 'Дом') result = target(Дом)
    if (result) {
      return {
        ...core,
        ...result,
        platesh: calcPlatesh({
          rate: result.rate,
          creditAmount: data.creditAmount,
          creditTerm: data.creditTerm,
        }),
      }
    }

    return false
  }
}
