var Player = function(name, health, water, sunshine){
    this.name = name;
    this.health = health;
    this.water = water;
    this.sunshine = sunshine;
}

var p1 = new Player('test', 0, 10, 20);

function onWater(){
  p1.health += p1.water
  update()
  changeImage()
  return p1.health 
}
function onSunshine(){
  p1.health += p1.sunshine
//   update()
//   changeImage()
//   return p1.health
}

function reset(){
  p1.health = 0
  update()
  changeImage()
}
// DO NOT REPEAT YOURSELF
function update(){
  if (p1.health >= 100){
    p1.health = 100}
  else if(p1.health <=0){
      p1.health = 0
  }
  var healthElem = document.getElementById('health')
  healthElem.innerHTML = p1.health 
}
// McCaller funciton
function caller(func){
    func;
    update()
    changeImage()
}
// caller(reset())
function changeImage(){ 
    var cImage = document.getElementById('image')
    if(p1.health == 0){
        cImage.src="flowers/roots.png"
    }else if(p1.health > 0 && p1.health < 10){
        cImage.src="flowers/roots.png"
    }else if(p1.health >=10 && p1.health <20){
        cImage.src="flowers/bulb.png"
    }else if(p1.health >=20 && p1.health <30){
        cImage.src="flowers/1.png"
    }else if(p1.health >=30 && p1.health <40){
        cImage.src="flowers/2.png"
    }else if(p1.health >=40 && p1.health <50){
        cImage.src="flowers/3.png"
    }else if(p1.health >=50 && p1.health <60){
        cImage.src="flowers/4.png"
    }else if(p1.health >=60 && p1.health <70){
        cImage.src="flowers/5.png"
    }else if(p1.health >=70 && p1.health <80){
        cImage.src="flowers/6.png"
    }else if(p1.health>=80 && p1.health <90){
        cImage.src="flowers/7.png"
    }else if(p1.health>=90 && p1.health <99){
        cImage.src="flowers/8.png"
    }else{
        cImage.src="flowers/large.gif"
    }
    }
// var imgNum = 0
// imgNum++
// document.getElementById(img).src = "flowers/"+imgNum + ".png"