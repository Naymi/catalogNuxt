<template lang="pug">
footer.footer.color-white
  .footer__container
    .footer__head
      .contacts
        .logo-name.contacts__item
          .logo-name__name НовостройкиВладимира
          .logo-name__slogan Подбор квартир в новостройках Владимира от надежных застройщиков без комиссии 
        .contacts__social.social.contacts__item
          a(href="https://vk.com/ipoteka33")
            img(src='~/assets/img/social-icons/vk.svg').social__item
          a(href="https://facebook.com/ipoteka33")
            img(src='~/assets/img/social-icons/facebook.svg').social__item
          a(href="https://www.instagram.com/ipoteka_vladimir/")
            img(src='~/assets/img/social-icons/insta.svg').social__item
          a(href="https://ok.ru/profile/563716191982")
            img(src='~/assets/img/social-icons/ok_ru.svg').social__item
        .contacts__phone.phone.contacts__item
          .phone__head
            img(src="~/static/img/phone.svg", alt="alt").phone__img
            a(href="tel:377076").phone__number 377-076
          .phone__description Отдел недвижимости ВГИФ
  hr.footer__divider
  .footer__container
    .footer__content.novostroyki
      .novostroyki__section
        a(href="#").novostroyki__item ЖК “Династия” дом “Лазарев”
        a(href="#").novostroyki__item ЖК Московский 2 оч. корп.1
        a(href="#").novostroyki__item ЖК «Дуброва Парк 2» корпус 4
        a(href="#").novostroyki__item Жилой Комплекс «Волна»
        a(href="#").novostroyki__item Жилой комплекс «Зеленый Берег»
        a(href="#").novostroyki__item Жилой комплекс «Поколение»
        a(href="#").novostroyki__item Элитный дом «Жемчужина»
        a(href="#").novostroyki__item Жилой комплекс «Содышка»
        a(href="#").novostroyki__item Жилой комплекс «7 квартал»
      .novostroyki__section
        a(href="#").novostroyki__item ЖК “Династия” дом “Столетов”
        a(href="#").novostroyki__item Жилой комплекс «Молодёжный»
        a(href="#").novostroyki__item ЖК «Добросельский-2»
        a(href="#").novostroyki__item Добросельская ул., 186а 2 очередь
        a(href="#").novostroyki__item Добросельская ул., 186а 1 очередь
        a(href="#").novostroyki__item Клубный дом «da Vinci»
        a(href="#").novostroyki__item ЖК «Северный» 2 оч. корп.9
      .novostroyki__section
        a(href="#").novostroyki__item ЖК “Династия” дом “Левитан”
        a(href="#").novostroyki__item ЖК «Северный» 1 оч. корп.1
        a(href="#").novostroyki__item Дом на 1-ом Толмачевском проезде
        a(href="#").novostroyki__item Жилой дом на ул. Ломоносова
        a(href="#").novostroyki__item Жилой дом на ул. Учительская
</template>

<style lang="sass">
.social
  display: flex
  &__item
    display: block
    height: 40px
    margin: 0 1ch
</style>


<style lang="sass">
.novostroyki
  display: flex
  flex-wrap: wrap
  justify-content: space-between

  &__section
    margin: 20px 0
    @media screen and (max-width: 600px)
      &:last-child
        margin-bottom: 0

      &:first-child
        margin-top: 0
  &__item
    display: block

    line-height: 30px
    &:first-child
      padding-bottom: 15px

      font-size: 18px
      font-weight: 700
</style>


<style lang="sass">
.logo-name
  &__name
    font-size: 33px
    font-weight: 700
    @media screen and (max-width: 550px)
      font-size: 20px
  &__slogan
    letter-spacing: -0.26px

    font-size: 10px
</style>

<style lang="sass">
.footer
  margin-top: 90px
  padding-top: 40px

  background-color: #1867c0
  &__container
    box-sizing: content-box
    max-width: 1142px
    margin: 0 auto
    padding: 0 20px
  &__divider
    width: 100%
    height: 2px
    margin: 25px 0

    opacity: .09
    background: #fff
  &__content
    padding-bottom: 15vh

</style>

<style lang="sass">
.contacts
  display: flex
  align-items: flex-end
  flex-wrap: wrap
  justify-content: space-between
  &__item
    margin: 10px 0
</style>

<style lang="sass">
.phone
  &__head
    display: flex
    align-items: center
  &__img
    height: 38px
    margin-right: 1ch
  &__number
    font-size: 53px
    font-weight: 700
    @media screen and (max-width: 500px)
      font-size: 30px
  &__description
    letter-spacing: -0.27px

    font-size: 18px

</style>
