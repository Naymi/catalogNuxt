<template lang="pug">
section.shks.container-940.box-center
  .shks-head
    .shks-sort.flex.justify-right
      .shks-sort__label Сортировать по
      .shks-sort__item Цене
      .shks-sort__item Цене за кв.м
      .shks-sort__item Готовности дома
  .shks-content
    - for (let i = 0; i++ < 5;)
        .shk
          .shk-img
            img(src="/img/shks/1.jpg", alt="")
          .shk-content
            .shk-ready.fz13(data-key='ready') IV квартал 2021 года
            .shk-title.bold.fz15 ЖК Московский 2 оч. корп.1
            .shk-address.fz13 Ленинский&nbsp;район Ставровская&nbsp;ул., 1&nbsp;по&nbsp;ГП
            .shk-cost
              span от
              div(style={
                display: 'inline-block',
                position: 'relative'
              }
              )
                b.fz30.bold(data-key='cost') 1 409 995
                .color-gray.shk-price(data-key='price') от 33 000 руб./м#[sup 2]
              span  руб.
            div.text-right.shk-ref.fz13
              a(href='#' target='blank') Узнать больше >>
//- .shk-back.color-white.flex.justify-center.flex-column.align-center.back-blue
//-   .shk-back__image ТИПО ИКОНКА КАЛЬКУЛЯТОРА
//-   .shk-back__title.fz20.bold.text-uppercase Ипотека от ВГИФ
//-   hr.shk-back__divider
//-   .shk-back__description.text-center.
//-     Рассчитайте ипотеку на новостройку<br>
//-     сразу в нескольких банках<br>
//-     на сайте прямо сейчас
//-   button(tabindex=-1).shk-back__btn.color-white.back-blue.cursor-pointer Рассчитать ипотеку

</template>
