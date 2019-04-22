<template lang="pug">
header.header.color-white
  .container.box-center
    .header-head.flex.box-center.align-center.justify-between
      .header-logo.flex.align-center
        .header-logo__img
          img(src='/img/logo-vgif.png')
        .header-logo__description.
          Подбор квартир<br>
          в новостройках Владимира<br>
          от надежных застройщиков без комиссии
      .contacts
        .wrapper
          .contacts-icon
            img(src="/img/phone.svg", alt="")
          .contacts-phone.fz53.bold.text-right 377-076
        .contacts-description.fz18 Отдел недвижимости ВГИФ
    .header-content
      .header-description
        .description-head.fz30.bold.
          Новостройки Владимира <br>
          от проверенных застройщиков
        .description-content.fz18.
          Подбор квартир в новостройках Владимира <br>
          от надежных застройщиков без комиссии <br>
          от отдела недвижимости Владимирского ипотечного фонда
        button.header-btn.color-white Посмотреть новостроки в продаже
</template>
