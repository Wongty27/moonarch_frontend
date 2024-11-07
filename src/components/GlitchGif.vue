<template>
    <div>
      <div class="container" :style="{height: wrapperHeight}">
        <h1 class="glitch bpdots ml-4 text-h1" data-text="STRING">STRING</h1>
        <v-btn to="/customise" v-if="showButton" color="#E324BD" class="bitstream">Build My PC Now</v-btn>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChildComponent',
    props: ['text', 'showButton', 'opac', 'wrapperHeight'],
    mounted() {
      this.$el.querySelector('.glitch').textContent = this.text;
      this.$el.querySelector('.glitch').dataset.text = this.text;
    },
    }
  </script>
  
  <style scoped>
  @import url('../assets/BitStreamFont/stylesheet.css');
  @import url('../assets/BPdotsFont/stylesheet.css');
  /* .wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
  } */
  
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-size: contain;
    overflow: hidden;
  }
  
  
  .glitch {
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    color: white;
    letter-spacing: 0.5rem;
    animation: glitch-skew 1s infinite linear alternate-reverse;
    font: Arial; /* Specify the font here */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .glitch::before {
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }
  
  .glitch::after {
    left: -2px;
    text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
  
  @keyframes glitch-anim {
    0% {
      clip: rect(31px, 9999px, 94px, 0);
      transform: skew(0.85deg);
    }
    5% {
      clip: rect(70px, 9999px, 78px, 0);
      transform: skew(0.85deg);
    }
    10% {
      clip: rect(21px, 9999px, 75px, 0);
      transform: skew(0.85deg);
    }
    15% {
      clip: rect(80px, 9999px, 16px, 0);
      transform: skew(0.85deg);
    }
    20% {
      clip: rect(33px, 9999px, 5px, 0);
      transform: skew(0.85deg);
    }
    25% {
      clip: rect(31px, 9999px, 16px, 0);
      transform: skew(0.85deg);
    }
    30% {
      clip: rect(62px, 9999px, 78px, 0);
      transform: skew(0.85deg);
    }
    35% {
      clip: rect(85px, 9999px, 7px, 0);
      transform: skew(0.85deg);
    }
    40% {
      clip: rect(72px, 9999px, 46px, 0);
      transform: skew(0.85deg);
    }
    45% {
      clip: rect(23px, 9999px, 48px, 0);
      transform: skew(0.85deg);
    }
    50% {
      clip: rect(45px, 9999px, 35px, 0);
      transform: skew(0.85deg);
    }
    55% {
      clip: rect(74px, 9999px, 71px, 0);
      transform: skew(0.85deg);
    }
    60% {
      clip: rect(23px, 9999px, 22px, 0);
      transform: skew(0.85deg);
    }
    65% {
      clip: rect(69px, 9999px, 22px, 0);
      transform: skew(0.85deg);
    }
    70% {
      clip: rect(75px, 9999px, 85px, 0);
      transform: skew(0.85deg);
    }
    75% {
      clip: rect(75px, 9999px, 47px, 0);
      transform: skew(0.85deg);
    }
    80% {
      clip: rect(50px, 9999px, 25px, 0);
      transform: skew(0.85deg);
    }
    85% {
      clip: rect(67px, 9999px, 83px, 0);
      transform: skew(0.85deg);
    }
    90% {
      clip: rect(10px, 9999px, 86px, 0);
      transform: skew(0.85deg);
    }
    95% {
      clip: rect(6px, 9999px, 95px, 0);
      transform: skew(0.85deg);
    }
    100% {
      clip: rect(66px, 9999px, 91px, 0);
      transform: skew(0.85deg);
    }
  }
  
  @keyframes glitch-anim2 {
    0% {
      clip: rect(65px, 9999px, 99px, 0);
      transform: skew(0.85deg);
    }
    5% {
      clip: rect(79px, 9999px, 63px, 0);
      transform: skew(0.85deg);
    }
    10% {
      clip: rect(93px, 9999px, 71px, 0);
      transform: skew(0.85deg);
    }
    15% {
      clip: rect(75px, 9999px, 15px, 0);
      transform: skew(0.85deg);
    }
    20% {
      clip: rect(73px, 9999px, 9px, 0);
      transform: skew(0.85deg);
    }
    25% {
      clip: rect(44px, 9999px, 92px, 0);
      transform: skew(0.85deg);
    }
    30% {
      clip: rect(50px, 9999px, 27px, 0);
      transform: skew(0.85deg);
    }
    35% {
      clip: rect(56px, 9999px, 68px, 0);
      transform: skew(0.85deg);
    }
    40% {
      clip: rect(39px, 9999px, 52px, 0);
      transform: skew(0.85deg);
    }
    45% {
      clip: rect(67px, 9999px, 93px, 0);
      transform: skew(0.85deg);
    }
    50% {
      clip: rect(57px, 9999px, 70px, 0);
      transform: skew(0.85deg);
    }
    55% {
      clip: rect(28px, 9999px, 99px, 0);
      transform: skew(0.85deg);
    }
    60% {
      clip: rect(39px, 9999px, 31px, 0);
      transform: skew(0.85deg);
    }
    65% {
      clip: rect(85px, 9999px, 39px, 0);
      transform: skew(0.85deg);
    }
    70% {
      clip: rect(1px, 9999px, 47px, 0);
      transform: skew(0.85deg);
    }
    75% {
      clip: rect(82px, 9999px, 4px, 0);
      transform: skew(0.85deg);
    }
    80% {
      clip: rect(17px, 9999px, 41px, 0);
      transform: skew(0.85deg);
    }
    85% {
      clip: rect(40px, 9999px, 89px, 0);
      transform: skew(0.85deg);
    }
    90% {
      clip: rect(57px, 9999px, 30px, 0);
      transform: skew(0.85deg);
    }
    95% {
      clip: rect(31px, 9999px, 86px, 0);
      transform: skew(0.85deg);
    }
    100% {
      clip: rect(69px, 9999px, 65px, 0);
      transform: skew(0.85deg);
    }
  }
  
  @keyframes glitch-skew {
    0% {
      transform: skew(-2deg);
    }
    10% {
      transform: skew(-1deg);
    }
    20% {
      transform: skew(0deg);
    }
    30% {
      transform: skew(1deg);
    }
    40% {
      transform: skew(-1deg);
    }
    50% {
      transform: skew(2deg);
    }
    60% {
      transform: skew(1deg);
    }
    70% {
      transform: skew(0deg);
    }
    80% {
      transform: skew(-1deg);
    }
    90% {
      transform: skew(2deg);
    }
    100% {
      transform: skew(-2deg);
    }
  }
  </style>