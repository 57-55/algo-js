
  function rand10()
  // Math.round permet d'arrondir décimales en entier
  // Math.random prend un nombre au hasard entre 0 et 1
   { 
    return Math.round(Math.random() * 10);
 }
 function multiRand(n)
 // let r = tableau vide
 // la boucle commmence à 0, i doit être < n, puis chaque fois +1
 // on "push" la fonction rand10 dans le tableau vide
 // ça retourne donc dans le tableau les éléments de la fonction rand10
 // à la question "how many...", ça affiche r (tableau vide devenu rand10)
 {
    let r = [];
    for(let i = 0; i < n; i++)
    {
        r.push(rand10());
    }
    return r;
}
let N = prompt('How many number to generate?');
console.log(multiRand(N));


