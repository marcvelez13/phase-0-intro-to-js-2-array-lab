const cats = ['Milo','Otis','Garfield'];
function destructivelyAppendCat() {
cats.push('Ralph');

}
function destructivelyPrependCat() {
cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
cats.splice(2)
}
function destructivelyRemoveFirstCat() {
    cats.splice(0,1)
}
const allCats = [...cats, 'Broom']
function appendCat(){
 return allCats.slice()

}
const newCats = ['Arnold', ...cats]
function prependCat() {
return newCats.slice()
}
function removeLastCat() {
   return cats.slice(0, cats.length-1);
}
function removeFirstCat() {
    return cats.slice(1);

}