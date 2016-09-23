var health = 100; 
var slap = 5; 
var punch = 10;
var kick = 20; 
var hadouken = 35;

var Player = function(name, health){
    this.name = name;
    this.health = health
}

var Item = function(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){}
}


var items = {
shield:new Item('shield', 0.3, "shield"),
sword:new Item('sword', 0.2, 'nice sword'),
mace: new Item('mace', 0.7, 'mace')
}


items[items.shield, items.sword, items.mace] 

function onSlap(){
  health -= slap
  update()
  return health 
}
function onPunch(){
  health -= punch
  update()
  return health
}

function onKick(){
    health -= kick   
    update()
    return health
}

function onHadouken(){
    health -= hadouken
    update()
    return health
}

function reset(){
  health = 100
  update()
}

function update(){
  if (health <= 0){
    health = 0
  }
  var healthElem = document.getElementById('health')
  healthElem.innerHTML = health
}