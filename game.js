// var health = 100; 
// var slap = 5; 
// var punch = 10;
// var kick = 20; 
// var hadouken = 35; 

var Player = function(name, health, slap, punch, kick, hadouken){
    this.name = name;
    this.health = health;
    this.slap = slap;
    this.punch = punch;
    this.kick = kick;
    this.hadouken = hadouken;
    this.items = [items.shield, items.sword, items.mace];
    this.addMods = function(items){
        var modTotal =0 
        for (var i = 0; i < items.length; i++){
            modTotal+= items[i].modifier
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
shield:new Item('shield', 0.3, "shield"),
sword:new Item('sword', 0.2, 'nice sword'),
mace: new Item('mace', 0.7, 'mace')
}


var p1 = new Player('test', 100, 5, 10, 40, 20);


function onSlap(){
  p1.health -= p1.slap
  update()
  return p1.health 
}
function onPunch(){
  p1.health -= p1.punch
  update()
  return p1.health
}

function onKick(){
    p1.health -= p1.kick   
    update()
    return p1.health
}

function onHadouken(){
    p1.health -= p1.hadouken
    update()
    return p1.health
}

function reset(){
  p1.health = 100
  update()
}

function update(){
  if (p1.health <= 0){
    p1.health = 0
  }
  var healthElem = document.getElementById('health')
  healthElem.innerHTML = p1.health
}