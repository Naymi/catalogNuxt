<template lang="pug">
.main(:data-id='mainSelector' style={
  display: 'grid',
  gridTemplateColumns:'repeat(2, 1fr)',
  gridColumnGap: '78px',
  padding: '35px',
  borderRadius: '10px'
}).color-white.container-940.box-center
  .section
    .target(
      style={
        marginBottom: '20px'
      }
    ) Цель кредита: Новостройка
    .data-container
      .data-input
        input-text(
          label='Стоимость квартиры от 900 000 рублей'
          data-name='price'
          hide_border
          :value='price'
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
          :value='firstInstallment'
          :postfix='postfixRub(this.firstInstallment)'
        )
        input-range(
          v-model='firstInstallment'
          :min='~~(price * this.firstInstallmentKoef)'
          :max='price - 500000'
        )
      .data-input
        input-text(
          :value='value.creditTerm'
          hide_border 
          label='Срок кредита'
          :postfix='creditTermPostfix'
          data-name='creditTerm'
        )
        input-range(
          v-model='creditTerm'
          min='3',
          max='30'
        )
      label.data-input.flex.align-center
        input-check(
          v-model='motherCapital'
        )
        span(style={
          marginLeft: '10px'
        }) У меня есть материнский капитал
    .output-data.flex(
      style={
        marginTop: '10px'
      }
    )
      .icon-info(style={
        marginRight: '10px',
        fontSize: '10px',
        marginTop: '6px'
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
    button.btn-blue.color-white.text-center Отправить заявку
</template>

<style lang="sass" scoped>
.btn-blue
  padding: 15px 60px

  border-radius: 10px
  background-color: #0894ed
  box-shadow: 0 3px 8px 1px rgba(46, 41, 42, 0.31)
</style>

<style lang="sass">
.data-output
  margin: 1em 0
  &__head
    opacity: 0.5
    color: #ffffff

    font-size: 16px
  &__main
    font-family: 'Montserrat-SemiBold'
    font-size: 40px
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
// function Computed(prop) {
//   return {
//     get() {
//       return this.value[prop.name]
//     },
//     set(v) {
//       let mask = this.Masks.find(i => i.name == prop.name).mask
//       // console.log("mask :", mask.unmaskedValue)
//       let tmp = {}
//       tmp[prop.name] = v
//       this.$emit('input', { ...this.value, ...tmp })
//     }
//   }
// }
let masks = [
  {
    name: 'price',
    params: {
      mask: Number,
      min: 700e3,
      max: 20e6,
      scale: 0,
      thousandsSeparator: ' '
    },
    call(masks, mask) {
      const firstmask = masks.find(el => el.name === 'firstInstallment').mask
      // global.console.log('firstmask :', firstmask)
      // global.console.log('mask :', mask.unmaskedValue)
      firstmask.updateOptions({
        min: ~~(+mask.unmaskedValue * 0.15),
        max: +mask.unmaskedValue - 500000
      })
      // global.console.log(
      //   '+mask.unmaskedValue * 0.15 :',
      //   +mask.unmaskedValue * 0.15
      // )
    }
  },
  {
    name: 'firstInstallment',
    params: {
      mask: Number,
      scale: 0,
      min: ~~(100e3 * 0.15),
      max: 1000e3 - 500e3,
      thousandsSeparator: ' '
    }
    // call(masks) {
    //   console.log("call this :", this)
    //   console.log("masks :", masks)
    //   let pricemask = masks.find(el => el.name == "price").mask
    //   console.log("pricemask :", pricemask)
    // }
  },
  {
    name: 'creditTerm',
    params: {
      mask: Number,
      scale: 0,
      min: 3,
      max: 30,
      thousandsSeparator: ' '
    }
  }
]
export default {
  created() {
    console.log('this.value :', this.value)
  },
  methods: {
    postfixRub
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
      return 'Первый взнос ' + (this.motherCapital ? 'от 10%' : 'от 15%')
    },
    price: {
      get() {
        return this.value.price
      },
      set(v) {
        const koef = this.firstInstallmentKoef
        const firstInstallment =
          this.firstInstallment > v * koef
            ? this.firstInstallment < v - 500e3
              ? this.firstInstallment
              : +v - 500e3
            : ~~(v * koef)
        this.$emit('input', {
          ...this.value,
          price: v,
          firstInstallment
        })
      }
    },
    firstInstallment: {
      get() {
        return this.value.firstInstallment
      },
      set(v) {
        this.$emit('input', { ...this.value, firstInstallment: v })
      }
    },
    creditTerm: {
      get() {
        return this.value.creditTerm
      },
      set(v) {
        this.$emit('input', { ...this.value, creditTerm: v })
      }
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
          firstInstallment
        })
      }
    }
  },
  mounted() {
    masks = masks.map(i => {
      return {
        ...i,
        ...{
          mask: (() => {
            const startValue = document.querySelector(
              `[data-id="${this.mainSelector}"] [data-name="${i.name}"] input`
            ).value
            console.log('i :', i)
            console.info(`value before ${i.name}:`, startValue)
            const mask = new IMask(
              document.querySelector(
                `[data-id="${this.mainSelector}"] [data-name="${i.name}"] input`
              ),
              i.params
            )
            console.info(
              `value after ${i.name}:`,
              document.querySelector(
                `[data-id="${this.mainSelector}"] [data-name="${i.name}"] input`
              ).value
            )
            // mask.el.input.addEventListener("blur", event => {
            //   console.log("blur on", event.target.value)
            //   console.log("blur on", mask.value)
            //   setTimeout(() => {
            //     console.log("blur out", event.target.value)
            //     console.log("blur out", mask.value)
            //     event.target.value = mask.value
            //   }, 0)
            // })
            mask.on('accept', () => {
              global.console.log('accept', event)
              const tmp = {}
              tmp[i.name] = mask.unmaskedValue
              i.call && i.call.call(this, masks, mask)
              this.$emit('input', { ...this.value, ...tmp })
            })
            // document.querySelector(
            //   `[data-id="${this.mainSelector}"] [data-name="${i.name}"] input`
            // ).value = startValue
            mask.on('complete', () => {
              global.console.log('complete')
            })
            return mask
          })()
        }
      }
    })
    // this.Masks.map(i => console.log(i))
  },
  components: {
    inputText,
    inputRange,
    inputCheck
  },
  props: {
    value: Object
  },
  data() {
    return {
      Masks: null,
      mainSelector: Math.random()
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  background: #1867c0
  .section
    width: 100%
    max-width: 380px
</style>
