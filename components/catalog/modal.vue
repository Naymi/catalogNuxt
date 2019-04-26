<template lang="pug">
.modal-overlay(
  :class='v ? "active" : ""'
  @click='closeModal'
)
  .modal.container-940
    .modal-head.text-center.fz20 Почти готово!
    .modal-sub-head.text-center.fz16 Оставьте свои контактные данные**
    .inputs
      input-text(
        color='black'
        label='ФИО'
        name='name'
        dark='dark'
      )
      | {{person.phone}}
      | {{typeof  tmp}}
      inputPhone(
        :getInput='getPhoneInput'
        v-model='person.phone'
      )
        input-text(
          @input='test'
          v-model='tmp'
          slot='input'
          color='black'
          label='Номер телефона'
          name='phone'
          dark='dark'
        )
      input-text(
        name='email'
        color='black'
        label='Email'
        dark='dark'
      )
    button.modal-btn.btn.text-uppercase.color-white.box-center Отправить
    .privacy.
      **Нажимая кнопку «Отправить заявку на ипотеку», вы соглашаетесь с условиями обработки персональных данных
</template>

<style lang="sass">
.privacy
  font-size: 10px
</style>


<style lang="sass" scoped>
.modal-btn
  margin: 20px auto
.btn
  display: block

  padding: 15px 60px

  border-radius: 10px
  background-color: #1867c0
  box-shadow: 0 3px 8px 1px rgba(46, 41, 42, 0.31)

</style>


<style lang="sass" scoped>
.inputs
  *
    margin: 10px
</style>


<script>
import inputText from '~/components/UI/inputs/text'
import IMask from 'imask'
import inputPhone from '~/components/UI/mask/phone'
export default {
  data() {
    return {
      person: {
        phone: ''
      },
      tmp: undefined
    }
  },
  props: {
    value: Boolean
  },
  components: {
    inputPhone,
    inputText
  },
  methods: {
    test(v) {
      console.log('v :', v)
      console.log('event :', event)
    },
    getPhoneInput: function(that) {
      return [...that.$el.childNodes[0].childNodes[0].childNodes].find(
        el => el.nodeName === 'INPUT'
      )
    },
    closeModal(v) {
      event.target.classList.contains('modal-overlay') && (this.v = false)
    }
  },
  computed: {
    v: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>

<style lang="sass">
.modal-overlay
  position: fixed
  z-index: -1
  top: 0
  right: 0
  bottom: 0
  left: 0

  display: flex
  align-items: center
  justify-content: center

  opacity: 0
  background: rgba(0,0,0,.5)
  &.active
    z-index: 1
    

    opacity: 1
    .modal
      transform: scale(1)

.modal
  width: 100%
  margin: 5px
  padding: 10px

  transition: .2s transform
  transform: scale(0)

  background: white
  &-head
    margin: 10px 0
</style>
