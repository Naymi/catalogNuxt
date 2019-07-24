<template lang="pug">
.modal-overlay(
  :class='v ? "active" : ""'
  @click='closeModal'
)
  .modal
    .modal-head.text-center.fz20 Заявка на консультацию
    .modal-sub-head.text-center.fz16 Оставьте свои контактные данные*
    form(
      @submit="checkForm"
    ).inputs
      input-text(
        color='black'
        label='ФИО'
        name='name'
        dark='dark'
        v-model='person.name'
      )
      input-mask(
        :getInput='getPhoneInput'
        v-model='person.phone'
        mask='+{7} (000) 000 00-00'
        @complete='phoneValid = true'
        @accept ='phoneValid = false'
      )
        input-text(
          @input='test'
          :dontEmit='true'
          slot='input'
          color='black'
          label='Номер телефона'
          name='phone'
          dark='dark'
        )
      input-text(
        slot='input'
        name='email'
        color='black'
        label='Email'
        dark='dark'
        v-model='person.email'
      )
      button.modal-btn.btn.text-uppercase.color-white.box-center Отправить
    .privacy.
      *Нажимая кнопку «Отправить», вы соглашаетесь с #[a(href='/privat_policy.pdf' style='text-decoration: underline; color: #1867c0;' target='blank') условиями обработки персональных данных]
</template>

<style lang="sass">
.privacy
  font-size: 10px
</style>




<style lang="sass" scoped>
.inputs
  *
    margin: 10px 0
</style>

<style lang="sass" scoped>
.btn
  display: block

  padding: 15px 60px

  border-radius: 10px
  background-color: #1867c0
  box-shadow: 0 3px 8px 1px rgba(46, 41, 42, 0.31)
.modal-btn
  display: block
  margin: 20px auto

</style>

<script>
import inputText from '~/components/UI/inputs/text'
import IMask from 'imask'
import inputMask from '~/components/UI/mask/'
function validate(prop) {
  return this.rules[prop].test(this.person[prop].replace(/(^\s*)|(\s*)$/g, ''))
}
export default {
  data() {
    return {
      phoneValid: false,
      person: {
        phone: '',
        name: '',
        email: '',
      },
      rules: {
        name: /^[а-яё\ ]+$/i,
        email: /^([a-z0-9]\.?)+@[a-z0-9]+(\.?[a-z])+\.([a-z]{2,})$/i,
      },
    }
  },
  props: {
    value: Boolean,
  },
  components: {
    inputMask,
    inputText,
  },
  methods: {
    checkForm(v) {
      this.valid
        ? this.$emit('complete', this.person)
        : alert('Данные заполнены некорректно')
      event.preventDefault()
    },
    test(v) {
      console.log('v :', v)
      console.log('event :', event)
    },
    getPhoneInput: function(that) {
      return [...that.$el.childNodes[0].childNodes[0].childNodes].find(
        el => el.nodeName === 'INPUT',
      )
    },
    closeModal(v) {
      event.target.classList.contains('modal-overlay') && (this.v = false)
    },
  },
  computed: {
    valid() {
      validate = validate.bind(this)
      return validate('name') && validate('email') && this.phoneValid
    },
    nameSubtext() {
      validate = validate.bind(this)
      return {
        text: 'Только кирилица',
        style: !validate('name') && 'color: red;',
      }
    },
    v: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      },
    },
  },
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
  width: 550px
  margin: 5px
  padding: 20px
  border-radius: 10px
  transition: .2s transform
  transform: scale(0)

  background: white
  &-head
    margin: 10px 0
</style>
