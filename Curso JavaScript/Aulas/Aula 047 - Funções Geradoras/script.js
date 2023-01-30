/*
function* contador(){
    let i = 0 

    while(true){
        yield i 
        i++
    }
}

const c = contador()

console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)


function* cont1(){
    yield 1 
    yield 2
    yield 3
}

function* cont2(){
    yield* cont1()

    yield 4
    yield 5
    yield 6
}

const c = cont2()

for(let i of c){
    console.log(i)
}
*/

function* cont(){
    yield function(){
        console.log('Num 01')
    }

    // ...

    yield function(){
        console.log('Num 02')
    }
}

const c = cont()

const c1 = c.next().value
const c2 = c.next().value

c1()
c2()