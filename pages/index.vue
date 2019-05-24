<template>
  <header>
    <div class="header">
      <div class="header-top">
        <div class="header-left">
          <img class="header-top__logo" src="/img/logo.png" alt>
          <div class="header-left__txt">
            Подбор квартир
            <br>в новостройках Владимира
            <br>от надежных застройщиков без
            комиссии
          </div>
        </div>
        <div class="header-right">
          <div class="header-right__phone">377-076</div>
          <div class="header-right__graph">с 9:00 до 18:00</div>
        </div>
      </div>
      <section class="header-content">
        <div class="header-banner">
          <p class="header-banner__txt1">
            Новостройки Владимира
            <br>от проверенных застройщиков
          </p>
          <p class="header-banner__txt2 descktop">
            Пройдите тест из 7 вопросов
            и получите подборку квартир
            <br>во Владимире по Вашим параметрам
            от проверенных застройщиков,
            <br>которые строят качественное жилье,
            не срывают сроки строительства
            <br>и сдают свои объекты вовремя
          </p>
          <button
            class="header-banner__btn btn"
            onclick="Marquiz.showModal('5bbe104eae6539004435a34a')"
          >
            Подобрать
            новостройку во Владимире
          </button>
        </div>
      </section>
    </div>
    <!-- Marquiz script start -->
    <script src="//script.marquiz.ru/v1.js" type="application/javascript"></script>
    <script>
  document.addEventListener('DOMContentLoaded', function() {
    Marquiz.init({
      id: '5bbe104eae6539004435a34a',
      autoOpen: false,
      autoOpenFreq: 'always',
      openOnExit: true
    })
  })
    </script>
    <!-- Marquiz script end -->
  </header>
</template>
<style scoped>
@keyframes a {
  0% {
    left: -30px;
    margin-left: 0;
  }
  30%,
  to {
    left: 110%;
    margin-left: 80px;
  }
}
header {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}
.btn {
  cursor: pointer;
}
.cbalink,
.whitelabel[data-v-2f731652] {
  display: none !important;
}
.mobile,
.planshet {
  display: none;
}
@media screen and (max-width: 1100px) {
  .planshet {
    display: block;
  }
}
.header {
  height: 100vh;
  width: 100vw;
  background: url(/img/test_back.jpg) no-repeat;
  background-position: center;
  background-size: auto 100%;
}
.header-top {
  height: 120px;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 1020px;
  margin: 0 auto;
}
@media screen and (max-width: 1100px) {
  .header-top {
    width: 747px;
  }
}
@media screen and (max-width: 768px) {
  .header-top {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: 75px;
  }
}
.header-top__logo {
  width: 103px;
  height: 101px;
  margin-right: 17px;
}
@media screen and (max-width: 1100px) {
  .header-top__logo {
    width: 97px;
    height: 95px;
  }
}
@media screen and (max-width: 768px) {
  .header-top__logo {
    width: 71px;
    height: 69px;
  }
}
.header-left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}
.header-left__txt {
  height: 80px;
  color: #fff;
  font-size: 21px;
  font-weight: 400;
  line-height: 29.02px;
  letter-spacing: 0.52px;
}
@media screen and (max-width: 1100px) {
  .header-left__txt {
    font-size: 20px;
  }
}
@media screen and (max-width: 768px) {
  .header-left__txt {
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: end;
    -ms-flex-align: end;
    font-size: 9px;
    display: flex;
    align-items: flex-end;
    line-height: 13.21px;
  }
}
.header-right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
@media screen and (max-width: 768px) {
  .header-right {
    display: none;
  }
}
.header-right__phone {
  font-weight: 700;
  font-size: 50px;
  line-height: 40.17px;
}
@media screen and (max-width: 1100px) {
  .header-right__phone {
    font-size: 48px;
  }
}
.header-right__graph {
  height: 26px;
  font-size: 26px;
  font-weight: 400;
  line-height: 31.62px;
  letter-spacing: 0.6px;
}
@media screen and (max-width: 1100px) {
  .header-right__graph {
    font-size: 25px;
  }
}
.header-content {
  height: calc(100vh - 120px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header-banner {
  width: 874px;
  text-align: center;
}
.header-banner__txt1 {
  font-weight: 700;
  font-size: 47px;
  margin-bottom: 37px;
}
@media screen and (max-width: 1100px) {
  .header-banner__txt1 {
    font-size: 40px;
  }
}
@media screen and (max-width: 768px) {
  .header-banner__txt1 {
    font-size: 17px;
  }
}
@media screen and (max-height: 654px) {
  .header-banner__txt1 {
    font-size: 17px;
  }
}
.header-banner__txt2 {
  font-size: 23px;
  margin-bottom: 50px;
}
.header-banner__txt2 strong {
  font-weight: 400;
  font-style: normal;
}
@media screen and (max-width: 1100px) {
  .header-banner__txt2 {
    font-size: 30px;
  }
}
@media screen and (max-width: 768px) {
  .header-banner__txt2 {
    font-size: 16px;
  }
}
@media screen and (max-height: 654px) {
  .header-banner__txt2 {
    font-size: 16px;
  }
}
.header-banner__btn,
.header-banner__btn:after {
  color: #fff;
  display: block;
  -webkit-transition: all 0.1s ease 0s;
  transition: all 0.1s ease 0s;
}
.header-banner__btn {
  -webkit-box-shadow: 0 4px 1px #0d58aa;
  box-shadow: 0 4px 1px #0d58aa;
  background-color: #166ac6;
  font-size: 23px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 20px;
  height: 72px;
  letter-spacing: 0.6px;
  position: relative;
}
@media screen and (max-width: 1100px) {
  .header-banner__btn {
    width: 631px;
    height: 95px;
    font-size: 30px;
  }
}
@media screen and (max-width: 768px) {
  .header-banner__btn {
    width: 269px;
    height: 39px;
    font-size: 14px;
  }
}
@media screen and (max-height: 654px) {
  .header-banner__btn {
    width: 269px;
    height: 39px;
    font-size: 14px;
  }
}
.header-banner__btn:after {
  background-position: 0 0;
  bottom: -106px;
  content: '""""""';
  cursor: pointer;
  height: 300px;
  left: 273.891px;
  letter-spacing: 0.36px;
  opacity: 0.5;
  position: absolute;
  right: 244.406px;
  -webkit-text-decoration: none solid #fff;
  text-decoration: none solid #fff;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  top: -150px;
  width: 20px;
  -webkit-column-rule-color: #fff;
  column-rule-color: #fff;
  -webkit-perspective-origin: 10px 150px;
  perspective-origin: 10px 150px;
  -webkit-transform: matrix(0.70711, 0.70711, -0.70711, 0.70711, 0, 0);
  transform: matrix(0.70711, 0.70711, -0.70711, 0.70711, 0, 0);
  -webkit-transform-origin: 10px 150px;
  transform-origin: 10px 150px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  caret-color: #fff;
  -webkit-animation: a 3s ease-in-out 0.05s infinite normal none running;
  animation: a 3s ease-in-out 0.05s infinite normal none running;
  background: #fff 0 0 / auto padding-box border-box;
  border: 0 #fff;
  font: 400 18px/20.7px 'DIN Pro';
  margin: 0 0 0 80px;
  outline: #fff 0;
}
.header-banner__btn:hover {
  background: #2883e7;
  -webkit-box-shadow: 0 4px 1px #1171d9;
  box-shadow: 0 4px 1px #1171d9;
}
.highlight-red {
  background: #d42d25;
}
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  border: 0;
  outline: 0;
}
</style>