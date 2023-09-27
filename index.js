// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
    return (cats);
}
  
  
  function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
    return (cats )
  }
  
  function  destructivelyRemoveLastCat(garfield) {
    cats.pop(garfield);
    return (cats);
  }
  
  function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
    return (cats)
  }
  
  function destructiveAppendCat(Broom) {
    const cats= [...cats, Broom];
    return name_1;
  }
  
  function destructivePrependCat(Arnold) {
    const name_2 = [Arnold, ...cats];
    return name_2;
  }
  
  function destructiveRemoveLastCat(Garfield) {
    const caats = cats.slice(0, cats.length - 1);
    return caats;
  }
  
  function destructiveRemoveFirstCat(Milo) {
    return cats.slice(1);
  }
  