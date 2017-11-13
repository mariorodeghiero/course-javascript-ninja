/*
Crie um array com 5 items (tipos variados).
*/
let arr = [1, 'mario', true, undefined, [1, 2, 4]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(el) {
    arr.push(el);
    console.log(arr)
}


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([6, "Bernardo", false])

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log(`O segundo elemento do segundo array é ${arr[4][1]}.`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${arr.length} itens.`)


/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O segundo array tem ${arr[4].length} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Números pares entre 10 e 20:');
let num = 10;
let res = 0;
while (num <= 20) {
    if (num % 2 === 0) {

        console.log(num)
    }
    num++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Números ímpares entre 10 e 20:');
let num2 = 10;

while (num2 <= 20) {

    num2 % 2 === 1 ? console.log(num2) : '';
    num2++
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for (let num3 = 100; num3 <= 120; num3++) {
    num3 % 2 === 0 ? console.log(num3) : '';
}


for (let num4 = 100; num4 <= 120; num4++) {
    num4 % 2 === 1 ? console.log(num4) : '';
}
// ?