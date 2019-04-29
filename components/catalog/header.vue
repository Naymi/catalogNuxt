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
          img(src='/img/logo-vgif.png')
        .header-logo__description.
          Подбор квартир<br>
          в новостройках Владимира<br>
          от надежных застройщиков без комиссии
      .contacts
        .wrapper.flex
          .contacts-phone.fz53.bold.text-right.align-center.flex
            span.contacts-icon
              img(src="~static/img/phone.svg", style='max-height: .8em' alt="")
            | 	&nbsp;377-076
        .contacts-description.fz18 Отдел недвижимости ВГИФ
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
          .description-content.fz18.
            Подбор квартир в новостройках Владимира <br>
            от надежных застройщиков без комиссии <br>
            от отдела недвижимости Владимирского ипотечного фонда
          button.header-btn.color-white(
            @click=`scroll("[data-target='shks']")`
          ) Посмотреть новостроки в продаже
        .header-section.flex.justify-right.flex-column.align-end.justify-right.hide-sm-1000
          .fz18.bold ЖК Династия - дом Лазарев
          .fz13 Кирпичный дом на ул.Диктора Левитана
          a.color-white.fz13(
            href='//жк-династия33.рф/promo.html'
            target='blank'
            style={
              padding: '5px 10px',
              background: 'red',
              boxShadow: '0 3px 8px 1px rgba(46, 41, 42, 0.31)',
              borderRadius: '10px',
              backgroundColor: '#ac1c1d'
            }
          ) Акции и спецпередложения в апреле
</template>

<script>
import scroll from '~/assets/scroll'
export default {
  methods: {
    scroll
  }
}
</script>
