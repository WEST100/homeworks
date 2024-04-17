// ---------------создаем игру -------------------------------

// Основанный на истории о походе героев в поисках сокровища.
// Давайте представим, что у нас есть классы Hero (герой) и Treasure (сокровище), и мы хотим создать
// экземпляры этих классов и взаимодействовать с ними.

// В этом уроке мы создаем двух героев (hero1 и hero2) и сокровище (treasure). Герои могут атаковать
// друг друга и исцелять себя, а также находить и собирать сокровище. Вся эта функциональность реализована
// с помощью методов классов Hero и Treasure

class Hero {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }

    attack(target){
      
        console.log(`${this.name} атакует ${target.name}!`);
        
        target.health -= 10;
        
      console.log(`${target.name} получает урон. Здоровье: ${target.health}%`);

      if (target.health === 0 && this.name === "Герой 1") {
        treasure.collect(hero1)
        console.log('game over');
        gameOver();
      } else if (target.health === 0 && this.name === "Герой 2") {
        treasure.collect(hero2)
        console.log('game over');
        gameOver();
      }
  }
  
  heal() {
    this.health += 5;
         console.log(`${this.name} исцеляет себя на 5%, Здоровье: ${this.health}%`);
    }
}

class Treasure {
    constructor(value){
        this.value = value;
  }
  
  collect(target) {
    console.log(`${target.name} находит сокровище стоимостью ${this.value}`);
  }
}

const hero1 = new Hero("Герой 1", 100);
const hero2 = new Hero("Герой 2", 80);
const treasure = new Treasure(500)

function handleKeyPressed(event){
    if(event.key === "a" || event.key === "A"){
        // console.log(`Keydown on ${event.key}`);
        hero1.attack(hero2);
    }else if(event.key === "b" || event.key === "B"){
        // console.log(`Keydown on ${event.key}`);
        hero2.attack(hero1);
  }

  if(event.key === "h" || event.key === "H"){
        // console.log(`Keydown on ${event.key}`);
        hero1.heal();
    }else if(event.key === "j" || event.key === "J"){
        // console.log(`Keydown on ${event.key}`);
        hero2.heal();
  }
}

document.addEventListener("keydown", handleKeyPressed);

function gameOver() {

  if (treasure.collect) {
  document.removeEventListener("keydown", handleKeyPressed)
  }

}