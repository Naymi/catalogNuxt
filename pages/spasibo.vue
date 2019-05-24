<template>
  <!-- <head>
  <title>Спасибо за обращение в нашу компанию</title>
  <link rel="manifest" href="/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge"></head>-->

  <main class="spasibo__container">
    <section class="block">
      <p class="spasibo__head">Спасибо!</p>
      <p class="spasibo__header">Ваша заявка получена!</p>
      <p class="spasibo__message">
        Наши менеджеры свяжутся
        <br>с вами в течение часа
      </p>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Спасибо за обращение в нашу компанию'
    }
  }
}
</script>


<style lang="sass" scoped>
.spasibo
  &__container
    color: white
    display: flex
    justify-content: center
    width: 100vw
    height: 100vh
    align-items: center
    background: url(/img/header-back.png) center no-repeat
    background-size: cover
  &__head, &__header, &__message
    text-align: center
  &__head
    font-size: 63px
    font-weight: 700
  &__header
    font-weight: 700
    font-size: 47px
  &__message
    font-size: 35px
</style>
