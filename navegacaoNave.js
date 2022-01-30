let nomePiloto = prompt(
  'Seja bem-vindo piloto! Por favor, nos informe o seu nome.'
)

let velocidadeNave = 0

let velocidadeDesejada = prompt(
  'Piloto ' + nomePiloto + ', informe a velocidade a qual gostaria de navegar.'
)

let confirmacaoVelocidade = confirm(
  'Por favor, confirme se a velocidade desejada é a de ' +
    velocidadeDesejada +
    ' km/s.'
)

if (confirmacaoVelocidade) {
  velocidadeNave = velocidadeDesejada
}

if (velocidadeDesejada <= 0) {
  alert(
    'Piloto ' +
      nomePiloto +
      ', sua velocidade atual é de ' +
      velocidadeDesejada +
      ' km/s. A nave está parada. Considere partir e aumentar a sua velocidade.'
  )
} else if (velocidadeDesejada < 40) {
  alert(
    'Piloto ' +
      nomePiloto +
      ', sua velocidade atual é de ' +
      velocidadeDesejada +
      ' km/s. Você está muito devagar, considere aumentar a sua velocidade.'
  )
} else if (velocidadeDesejada >= 40 && velocidadeDesejada < 80) {
  alert(
    'Piloto ' +
      nomePiloto +
      ', sua velocidade atual é de ' +
      velocidadeDesejada +
      ' km/s. Parece uma boa velocidade para manter.'
  )
} else if (velocidadeDesejada >= 80 && velocidadeDesejada < 100) {
  prompt(
    'Piloto ' +
      nomePiloto +
      ', sua velocidade atual é de ' +
      velocidadeDesejada +
      ' km/s. A velocidade está alta, considere diminuir.'
  )
} else if (velocidadeDesejada >= 100) {
  prompt(
    'Piloto ' +
      nomePiloto +
      ', sua velocidade atual é de ' +
      velocidadeDesejada +
      ' km/s. Essa velocidade tá alta pra caralho, quer morrer PORRA?'
  )
}
