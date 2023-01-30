const { lookahead } = require('./base')

// console.log(lookahead)

// console.log(lookahead.match(/.+[^in]active$/gim))

// Positive lookahead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim))

// Positive lookahead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim))

// Negative lookahead (frases que NÃO tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

// Negative lookahead (frases que NÃO tem inactive)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim))

// Positive lookbehind (Frases que começam com ONLINE)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))

// Negative lookbehind (Frases que NÃO começam com ONLINE)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))

const cpf = `
120.458.467-50
111.111.111-11
999.999.999-99
555.555.555-55
145.789.885-89
aaa.bbb.ccc-dd
`

console.log(cpf.match(/(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm))