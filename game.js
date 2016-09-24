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


var p1 = new Player('test', 0, 5, 10, 20);

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
    if (p1.health >= 90){
        cImage.src = 'flowers/8.png'
    }else{cImage.src = 'flower/1.png'
}
}