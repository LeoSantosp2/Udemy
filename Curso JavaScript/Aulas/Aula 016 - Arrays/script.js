const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos)
console.log(alunos[0])
console.log(alunos[2])

alunos[0] = 'Eduardo'
alunos[3] = 'Luiza'

alunos.push('Leonardo')
alunos.unshift('Lucas')

alunos.pop()
alunos.shift()

console.log(alunos.length)
console.log(alunos)

console.log(typeof(alunos))
console.log(alunos instanceof Array)
