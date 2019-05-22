<template lang="pug">
header.header.color-white
  .container.box-center.flex.flex-column(
    style={
      height: '100%',
    }
  )
    .header-head.flex.box-center.align-center.justify-between
      .header-logo.flex.align-center
        .header-logo__img
          img(style='max-height: 5em' src='/img/logo-vgif.jpg')
        .header-logo__description
          | Подбор квартир
          br.hide-sm-1000
          | в новостройках Владимира
          br.hide-sm-1000
          | от надежных застройщиков без комиссии
      .phone
        .phone__head
          img(src="~/static/img/phone.svg", alt="phone").phone__img
          a(href='tel: 377076').phone__number 377-076
        .phone__description Отдел недвижимости ВГИФ
    .header-content.flex.space-between.align-center
      .flex.justify-between(
        style={
          width: '100%'
        }
      )
        .header-section
          .description-head.fz30.bold.
            Новостройки Владимира <br>
            от проверенных застройщиков
          .description-content.fz18
            | Подбор квартир в&nbsp;новостройках Владимира
            br.hide-sm-1000
            | от&nbsp;надежных застройщиков без комиссии
            br.hide-sm-1000
            |  от&nbsp;отдела недвижимости Владимирского ипотечного фонда
          button.header-btn.color-white(
            @click=`scroll("[data-target='shks']")`
          ) Посмотреть новостроки в&nbsp;продаже
        .header-section.flex.justify-right.flex-column.align-end.justify-right.hide-sm-1000
          .fz18.bold ЖК Династия - дом Лазарев
          .fz13 Кирпичный дом на ул.Диктора Левитана
          a.color-white.fz13(
            href='//жк-династия33.рф/promo.html'
            target='blank'
            style={
              width: '100%',
              padding: '5px 10px',
              "text-align": 'center',
              background: 'red',
              "box-shadow": '0 3px 8px 1px rgba(46, 41, 42, 0.31)',
              "border-radius": '10px',
              "background-color": '#ac1c1d'
            }
          ) Акции и спецпередложения в мае
</template>

<script>
import scroll from '~/assets/scroll'
export default {
  methods: {
    scroll
  }
}
</script>
