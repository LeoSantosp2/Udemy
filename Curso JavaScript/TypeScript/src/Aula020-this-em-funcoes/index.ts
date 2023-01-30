function funcao(this: Date, nome: string, age: number): void {
    console.log(this);
    console.log(nome);
    console.log(age);
}

funcao.call(new Date(), 'Leonardo', 22);
funcao.apply(new Date(), ['Leonardo', 22]);
