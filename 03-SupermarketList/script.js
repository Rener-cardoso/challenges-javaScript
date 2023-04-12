/*
 Capture 10 itens para compor a lista de um supermercado.

 Após capturar os 10 itens, imprima-os, separando por vírgula.
*/

//resolução:

let items = [];

for(let item = 1; item <= 10; item++) {
 let itemName = prompt('Digite o item' + item)

items[item] = itemName
}

alert(items)