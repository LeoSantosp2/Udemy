// Tuple
const dadosCliente1: [number, string] = [1, 'Leonardo'];
const dadosCliente2: [number, string, string] = [1, 'Leonardo', 'Santos'];
const dadosCliente3: [number, string, string?] = [1, 'Leonardo'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Leonardo', 'Santos'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Luiz';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Leonardo', 'Santos'];
const array2: ReadonlyArray<string> = ['Leonardo', 'Santos'];

console.log(array1);
console.log(array2);
