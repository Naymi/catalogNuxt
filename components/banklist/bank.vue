<template lang="pug">
.bank
  .back(@click='pickbank(bank)').color-white
    .back-head.bold Оставить заявку на ипотеку
    .back-subtext Заполните форму и мы подберем <br> оптимальный ипотечный кредит <br> по  указанным параметрам
    button.fz17.back-btn.color-white Отправить заявку
  .core
    .logo
      img(:src='bank.icon' height='35px' :alt='bank.name').logo__img
    hr(
      style = {
        height: '2px',
        width: '100%',
        backgroundColor: '#e0dcdc',
        opacity: '.3'
      }
    )
    .data
      div.platesh-preview Ежемесячный платеж, руб.
      div.value.bold {{Number(bank.platesh).toLocaleString('ru')}}₽
      div.stavka {{stavka}}
      div.value.bold {{bank.rate}}%
    .options
      div.col.semibold Другие варианты:
      div.col.semibold Ставка
      div.text-right.col.semibold Взнос
      div.options__param 2 документа
      div.options__value {{Доки.rate}}
      div.text-right {{Доки.firstInstallmentPercentage}}
      div.options__param По форме банка
      div.options__value {{Форма.rate}}
      div.text-right {{Форма.firstInstallmentPercentage}}
      div(style='letter-spacing: -0.56px').options__param Предприниматель
      div.options__value {{ИП.rate}}
      div.text-right {{ИП.firstInstallmentPercentage}}
</template>

<script>
function kr(obj) {
  const ob = { ...obj }
  for (const key in ob) ob[key] += '%'
  return ob
}

function kr_refinans(obj) {
  const ob = { ...obj }
  for (const key in ob) {
    ob[key] += '%'
    if (key == 'firstInstallmentPercentage') {
      ob[key] = 'до ' + ob[key]
    }
  }
  return ob
}
function decorator(prop) {
  const empty = {
    rate: '-',
    firstInstallmentPercentage: '-'
  }
  return function() {
    let mkr = kr
    if (this.refinans == '') {
      mkr = kr_refinans
    }
    return (
      (this.bank &&
        this.bank[prop] &&
        this.bank[prop].rate &&
        mkr(this.bank[prop])) ||
      empty
    )
  }
}
export default {
  methods: {
    pickbank(v) {
      this.$emit('pickbank', v)
    }
  },
  props: ['bank'],
  computed: {
    stavka() {
      return `Ставка по ипотеке`
    },
    ИП: decorator('ИП'),
    Форма: decorator('Форма_банка'),
    Доки: decorator('2_документа')
  }
}
</script>

<style lang="sass">
.bank
  position: relative

  overflow: hidden

  padding: 20px
  padding-top: 32px

  cursor: pointer
  max-width: 300px
  border: 1px solid #e0dcdc
  border-radius: 10px
  
  box-shadow: 0 0 6px 1px rgba(60, 61, 65, 0.05)
  // height: 325px

  backface-visibility: hidden
  .logo
    &__img
      max-width: 50%
      margin-bottom: 10px
  &:hover
    .core
      transform: rotateY(180deg)
    .back
      transform: rotateY(0deg)
  .core
    border-radius: 10px
    transition: .2s all
  .back
    border-radius: 10px
    position: absolute
    z-index: 1
    top: 0
    left: 0
    box-sizing: border-box
    padding: 20px
    display: flex
    flex-direction: column
    justify-content: center
    width: 100%
    height: 100%

    cursor: pointer
    transition: .2s all
    transform: rotateY(180deg)

    color: white
    background-color: #1867C0

    backface-visibility: hidden
    &-head
      letter-spacing: -0.82px

      font-size: 30px
      font-weight: 700
      line-height: 36.52px
    &-subtext
      margin-top: 16px

      letter-spacing: -0.72px

      font-size: 14px
      font-weight: 400
      line-height: 20px
    &-btn
      width: 100%
      height: 45px
      margin-top: 20px
      box-sizing: border-box
      border-radius: 10px
      background-color: #0894ed
      box-shadow: 0 3px 8px 1px rgba(46, 41, 42, 0.31)

  .data
    display: grid

    margin-top: 13px  

    grid-template-columns: min-content 1fr
    .value
      display: flex
      align-items: center
      justify-content: flex-end

      letter-spacing: -0.82px

      font-size: 31px
      font-weight: 700
      line-height: 43.52px
    .platesh-preview
      display: flex
      align-items: center

      line-height: 1
    .stavka
      display: flex
      align-items: center

      line-height: 1
  .options
    display: grid

    margin-top: 21px

    font-size: 14px

    grid-template-columns: 3fr 1fr 1fr

    grid-row-gap: 2px

    .col
      letter-spacing: -0.56px

      font-size: 14px
      font-weight: 500
      line-height: 16.67px

</style>
