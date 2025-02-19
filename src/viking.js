// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack(){
      return this.strength;
    };
    receiveDamage(theDamage){  
      this.health -= theDamage
    };
  }
  
  // Viking
  class Viking extends Soldier {
    constructor(name, health, strength){
      super(health, strength)
      this.name = name
    }
    receiveDamage(theDamage) {
      this.health -= theDamage
      if (this.health > 0){
        return `${this.name} has received ${theDamage} points of damage`
      }else {
        return `${this.name} has died in act of combat`
      }
    }
     battleCry(){
       return `Odin Owns You All!`
     }
  }
  
  // Saxon
  class Saxon extends Soldier {
      receiveDamage(theDamage) {
      this.health -= theDamage
      if (this.health > 0){
        return `A Saxon has received ${theDamage} points of damage`
      }else {
        return `A Saxon has died in combat`
      
      }
    }
  }

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
         let randomVik = Math.floor(Math.random() * this.vikingArmy.length);
         let randomSax = Math.floor(Math.random() * this.saxonArmy.length);


         let attack = this.saxonArmy[randomSax].receiveDamage(this.vikingArmy[randomVik].strength);

         if (this.saxonArmy[randomSax].health <= 0) {
            this.saxonArmy.splice(randomSax, 1)
            }
         return attack
    }
    saxonAttack(){
        let randomVik = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSax = Math.floor(Math.random() * this.saxonArmy.length);

        let attack = this.vikingArmy[randomVik].receiveDamage(this.saxonArmy[randomSax].strength);

        if (this.vikingArmy[randomVik].health <= 0) {
           this.vikingArmy.splice(randomVik, 1)
        }
        return attack
    }
    showStatus(){
        if (this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
