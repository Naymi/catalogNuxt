<template lang="pug">
.main-container(:data-id='mainSelector').color-white.container-940.box-center
  .section
    .target(
      style={
        "margin-bottom": '20px'
      }
    ) Цель кредита: Новостройка
    .data-container
      .data-input
        input-text(
          label='Стоимость квартиры от 900 000 рублей'
          data-name='price'
          hide_border
          :value='(+price).toLocaleString("ru")'
          :postfix='postfixRub(this.price)'
        )
        input-range(
          v-model='price'
          max='10000000'
          min='900000'
        )
      .data-input
        input-text(
          hide_border
          :label='firstInstallmentLabel'
          data-name='firstInstallment'
          :value='(+firstInstallment).toLocaleString("ru")'
          :postfix='postfixRub(this.firstInstallment)'
        )
        input-range(
          v-model='firstInstallment'
          :min='~~(price * firstInstallmentKoef)'
          :max='price - 500000'
        )
      .data-input
        input-text(
          :value='(+value.creditTerm).toLocaleString("ru")'
          hide_border 
          label='Срок кредита'
          :postfix='creditTermPostfix'
          data-name='creditTerm'
        )
        input-range(
          v-model='creditTerm'
          min='3'
          max='30'
        )
      label.data-input.flex.align-center
        input-check(
          v-model='motherCapital'
        )
        span(style={
          "margin-left": '10px',
          "user-select": 'none',
          cursor: 'pointer'
        }) У меня есть материнский капитал
    .output-data.flex(
      style={
        "margin-top": '10px'
      }
    ).hide-sm-600
      .icon-info(style={
        "margin-right": '10px',
        "font-size": '10px',
        "margin-top": '6px'
      }) i
      div
        .output-data-head.fz13.flex.align-center(
          style='line-height: 29.17px;'
        ) Указанные параметры:
        .output-data.fz16.semibold(
          style='line-height: 29.17px;'
        ).
          {{(+creditAmount).toLocaleString('ru')}} {{postfixRub(creditAmount)}}
          на {{creditTerm }} {{(creditTermPostfix)}} <br>
          Платёж от {{(+value.minplatesh).toLocaleString('ru')}} руб.
  .section
    .data-output
      .data-output__head Ежемесячный платеж от
      .data-output__main {{(+value.minplatesh).toLocaleString('ru')}} руб.
    .data-output
      .data-output__head Ставка по кредиту от
      .data-output__main {{+value.minrate}}%
    .data-output
      .data-output__head {{firstInstallmentLabel}}
      .data-output__main {{(+firstInstallment).toLocaleString('ru')}} руб.
    button.calc__btn.btn-blue.color-white.text-center(
      @click=`scroll("[data-target='banks']")`
    ) Посмотреть предложения
    .privacy(
      style={
        marginTop:'10px'
      }
    ).
      *Рассчитанные параметры кредита являются предварительными.
      Окончательные условия кредитования определяются после телефонной 
      консультации с кредитным менеджером.
</template>

<style lang="sass">
.calc__btn
  box-sizing: border-box
  width: 100%
  min-width: 200px
  padding-right: 10px !important
  padding-left: 10px  !important

</style>


<style lang="sass" scoped>
.btn-blue
  padding: 15px 60px

  border-radius: 10px
  background-color: #0894ed
  box-shadow: 0 3px 8px 1px rgba(46, 41, 42, 0.31)
</style>

<style lang="sass">
.data-output
  margin: 2em 0
  &__head
    opacity: 0.5
    color: #ffffff

    font-size: 16px
  &__main
    font-size: 40px
    font-weight: 700
    @media screen and (max-width: 600px)
      font-size: 30px
</style>

<style lang="sass">
.icon-info
  display: inline-flex
  align-items: center
  justify-content: center

  width: 15px
  height: 15px

  cursor: pointer

  border: 1px solid white
  border-radius: 50%
</style>

<script>
import inputText from '~/components/UI/inputs/text'
import inputCheck from '~/components/UI/inputs/check'
import inputRange from '~/components/UI/inputs/range'
import IMask from 'imask'
import postfixYear from '~/assets/util/srcpostfixYear'
import postfixRub from '~/assets/util/rub'
import scroll from '~/assets/scroll'
import startValue from '~/assets/startValue'
let masks = [
  {
    name: 'price',
    params: {
      mask: Number,
      min: 700e3,
      max: 20e6,
      scale: 0,
      thousandsSeparator: ' ',
    },
    call(masks, mask) {
      const firstmask = masks.find(el => {
        return el.name == 'firstInstallment'
      }).mask
      if (mask.typedValue >= mask.masked.min) {
        firstmask.updateOptions({
          min: ~~(mask.typedValue * (this.value.motherCapital ? 0.1 : 0.15)),
          max: mask.typedValue - 500000,
        })
      }
    },
  },
  {
    name: 'firstInstallment',
    params: {
      mask: Number,
      scale: 0,
      min: ~~(startValue.price * 0.15),
      max: startValue.price - 500e3,
      thousandsSeparator: ' ',
    },
    call(masks, mask) {
      const v = mask.typedValue
      v <= mask.masked.max &&
        v >= mask.masked.min &&
        (this.value.firstInstallment = v)
    },
  },
  {
    name: 'creditTerm',
    params: {
      mask: Number,
      scale: 0,
      min: 3,
      max: 30,
      thousandsSeparator: ' ',
    },
  },
]
export default {
  methods: {
    postfixRub,
    scroll,
  },
  computed: {
    creditAmount() {
      return this.price - this.firstInstallment
    },
    creditTermPostfix() {
      return postfixYear(this.creditTerm)
    },
    firstInstallmentKoef() {
      return this.motherCapital ? 0.1 : 0.15
    },
    firstInstallmentLabel() {
      return `Первый взнос (${this.motherCapital ? 'от 10%' : 'от 15%'})`
    },
    price: {
      get() {
        return this.value.price
      },
      set(v) {
        const koef = this.firstInstallmentKoef
        let firstmask = this.Masks.find(i => i.name === 'firstInstallment').mask
        firstmask.masked.min = ~~(v * koef)
        firstmask.masked.max = v - 500000
        const firstInstallment =
          this.firstInstallment > v * koef
            ? this.firstInstallment < v - 500e3
              ? this.firstInstallment
              : +v - 500e3
            : ~~(v * koef)
        this.$emit('input', {
          ...this.value,
          price: v,
          firstInstallment,
        })
      },
    },
    firstInstallment: {
      get() {
        return this.value.firstInstallment
      },
      set(v) {
        this.$emit('input', { ...this.value, firstInstallment: v })
      },
    },
    creditTerm: {
      get() {
        return this.value.creditTerm
      },
      set(v) {
        this.$emit('input', { ...this.value, creditTerm: v })
      },
    },
    motherCapital: {
      get() {
        return this.value.motherCapital
      },
      set(v) {
        const koef = this.firstInstallmentKoef
        const firstInstallment =
          this.firstInstallment > this.price * koef
            ? this.firstInstallment < this.price - 500e3
              ? this.firstInstallment
              : +this.price - 500e3
            : ~~(this.price * koef)
        this.$emit('input', {
          ...this.value,
          motherCapital: v,
          firstInstallment,
        })
      },
    },
  },
  mounted() {
    this.Masks = masks.map(i => {
      const inp = this.$el.querySelector(`[data-name="${i.name}"] input`)
      const startValue = inp.value
      const mask = new IMask(inp, i.params)
      // debugger
      mask.on('accept', () => {
        const tmp = {}
        tmp[i.name] = mask.typedValue
        i.call && i.call.call(this, this.Masks, mask)
        mask.typedValue >= mask.masked.min &&
          this.$emit('input', { ...this.value, ...tmp })
      })

      return {
        ...i,
        mask,
      }
    })
  },
  components: {
    inputText,
    inputRange,
    inputCheck,
  },
  props: {
    value: Object,
  },
  data() {
    return {
      Masks: null,
      mainSelector: 'Suka',
    }
  },
}
</script>

<style scoped>
.main-container {
  display: grid;
  justify-content: center;

  padding: 2em;
  padding-top: 57px;
  padding-bottom: 40px;

  border-radius: 10px;
  background: #1867c0;

  grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
  grid-column-gap: 80px;
}

@media screen and (max-width: 900px) {
  .main-container {
    justify-content: center;

    width: 600px;
  }
}

@media screen and (max-width: 600px) {
  .main-container {
    justify-content: center;

    box-sizing: border-box;
    width: 300px;
  }
}

.main-container .section {
  width: 100%;
  max-width: 380px;
}
</style>
