// Write your solution here!
const CatsMembers=["Milo", "Otis", "Garfield"]
const Cats= ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    Cats.push(Ralph);
    return (Cats);
}
  
  
  function destructivelyPrependCat(Bob) {
    Cats.unshift(Bob);
    return (Cats )
  }
  
  function  destructivelyRemoveLastCat(Garfield) {
    Cats.pop(Garfield);
    return (Cats);
  }
  
  function destructivelyRemoveFirstCat(Milo) {
    Cats.shift(Milo);
    return (Cats)
  }
  
  function destructiveAppendCat(Broom) {
    const Cats= [...Cats, Broom];
    return name_1;
  }
  
  function destructivePrependCat(Arnold) {
    const name_2 = [Arnold, ...Cats];
    return name_2;
  }
  
  function destructiveRemoveLastCat(Garfield) {
    const caats = Cats.slice(0, Cats.length - 1);
    return caats;
  }
  
  function destructiveRemoveFirstCat(Milo) {
    return cats.slice(1);
  }
  