
// Types of the Primitve data (Imutáveis)
let nome = 'Leonardo'

nome[0] = 'R'

console.log(nome[0], nome)

// Types of the Reference data (Mutáveis)
let a = [1, 2, 3]
let b = a
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)