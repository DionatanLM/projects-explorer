let attempt = 1

function handleClick(event) {
  document.querySelector('.screen1').classList.add('hidden')
  document.querySelector('.screen2').classList.remove('hidden')
  const phrases = [
    'O significado da vida é encontrar o seu dom. O propósito da vida é entregá-lo',
    'Creia em si, mas não duvide sempre dos outros',
    'Pense antes de falar, mas não fale tudo o que pensar.',
    'Não dê atenção às palavras vãs de más línguas.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'Más companhias são como um mercado de peixes: acaba-se acostumando com o mal cheiro.'
  ]
  const randomPhrases = phrases[Math.floor(6 * Math.random())]

  console.log(randomPhrases)

  document.querySelector('.luckCard p').innerText = `${randomPhrases}`
}

function handleBack() {
  document.querySelector('.screen2').classList.add('hidden')
  document.querySelector('.screen1').classList.remove('hidden')
}
