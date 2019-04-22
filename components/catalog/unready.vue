<template lang="pug">
section.unready.color-white
  .unready-head.text-center.fz35.bold Если я пока не готов к покупке,  а просто присматриваюсь?
  .unready-description.text-center.fz20.
    Вы можете оставить нам свою почту и названия интересующих вас<br>
    объектов. Как только по ним будет появляться какая-то новая информация<br>
    от застройщика - мы сразу же будем вас об этом оповещать
  .unready-form.box-center
    form
      input(
        type="text"
        placeholder="Укажите какая (-ие) новостройки вас интересуют"
      ).unready-form__input
      input(
        type="text"
        placeholder="Отправлять инфу на e-mail, viber, whats app"
      ).unready-form__input
      button.unready-form__btn.text-center.color-white Оставить заявку на оповещение
</template>
