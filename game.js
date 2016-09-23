var health = 100; 
var slap = 5; 
var punch = 10;
var kick = 20; 

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