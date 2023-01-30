const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let n of num){
    if(n === 2){
        console.log(`Pulei o número ${n}`)
        continue
    }

    console.log(n)

    if(n === 7){
        console.log(`${n} encontrado, saindo...`)
        break
    }
}