import { async } from "regenerator-runtime"

function promise(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('Hey, eu sou a Promise')
            resolve()
        }, 2000)
    })
}

export default async () =>{
    await promise()
    console.log('Terminou!')
}