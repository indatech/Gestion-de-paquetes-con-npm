const messages = [
   'Daniel',
   'Tatiana',
   'Ana',
   'Juan',
   'Luis',
   'Marisa',
   'Marcelo',
]

const randomMsg = () => {
   const message = messages[Math.floor(Math.random() * messages,length)]
   console.log(message)
}

module.exports = { randomMsg }