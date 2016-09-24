// var health = 100; 
// var slap = 5; 
// var punch = 10;
// var kick = 20; 
// var hadouken = 35; 

var Player = function(name, health, slap, punch, hadouken){
    this.name = name;
    this.health = health;
    this.slap = slap;
    this.punch = punch;
    this.hadouken = hadouken;
    this.items = [items.shield, items.sword, items.mace];
    this.addMods = function(){
        var modTotal =0 
        for (var i = 0; i < this.items.length; i++){
            modTotal+= this.items[i].modifier
        }
        return modTotal; 
    }

}

var Item = function(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){return '<div class="item">'+ this.name +'</div>'}
}

var items = {
shield: shield = new Item('shield', 0.3, "shield"),
sword: sword = new Item('sword', 0.2, 'nice sword'),
mace: mace =new Item('mace', 0.7, 'mace')
}
console.log(items.shield.name)


var p1 = new Player('test', 0, 5, 10, 99);

function onSlap(){
  p1.health += p1.slap
  update()
  changeImage()
  return p1.health 
}
function onPunch(){
  p1.health += p1.punch
  update()
  changeImage()
  return p1.health
}

function onHadouken(){
    p1.health -= p1.hadouken
    update()
    changeImage()
    return p1.health
}

function reset(){
  p1.health = 0
  update()
  changeImage()
}

function update(){
  if (p1.health >= 100){
    p1.health = 100}
  else if(p1.health <=0){
      p1.health = 0
  }
  var healthElem = document.getElementById('health')
  healthElem.innerHTML = p1.health 
}

function changeImage(){ 
    var cImage = document.getElementById('image')
    if(p1.health == 0){
        cImage.src="flowers/blank.png"
    }
    else if(p1.health > 0 && p1.health < 10){
        cImage.src="flowers/blank.png"
    }else if(p1.health >=10 && p1.health <20){
        cImage.src="flowers/1.png"
    }else if(p1.health >=20 && p1.health <30){
        cImage.src="flowers/2.png"
    }else if(p1.health >=30 && p1.health <40){
        cImage.src="flowers/3.png"
    }else if(p1.health >=40 && p1.health <50){
        cImage.src="flowers/4.png"
    }else if(p1.health >=50 && p1.health <60){
        cImage.src="flowers/5.png"
    }else if(p1.health >=60 && p1.health <70){
        cImage.src="flowers/6.png"
    }else if(p1.health >=70 && p1.health <80){
        cImage.src="flowers/7.png"
    }else if(p1.health>=80 && p1.health <99){
        cImage.src="flowers/8.png"
    }else if(p1.health >99){
        cImage.src="flowers/large.gif"
    }
    }