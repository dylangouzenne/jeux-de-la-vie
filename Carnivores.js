function Carnivores (categorie, x, y, attaque, pv){
	this.categorie=categorie;
	this.x=x;
	this.y=y;
	this.attaque=attaque;
	this.pv=pv;
};
var dinosaure = new Carnivores("<img src='images/loup.png' width = '65px'>", 0, 0, 2, 15);

// this.move = function()
// {
// 	var direction = [];

// 	if (this.x<0) direction.push({x:this.x -1, y:this.y})
// 	if (this.x>0) direction.push({x:this.x +1, y:this.y})
// 	if (this.y<0) direction.push({y:this.y -1, x:this.x})
// 	if (this.y>0) direction.push({y:this.y +1, x:this.x})
	
// }


// function Carnivorous(x,y,hp, appearance, sex, dmg, age, maturity){
// 	Animal.call(this, x, y, hp, appearance, sex, dmg, age, maturity);
// this.eat = function(vegetarian){            // Vegetarian.hp = 0;            return 'je mange';        }
// function Animal(x,y,hp, appearance, sex, dmg, age, maturity)
// {
// 	this.x = x;
// 	this.y = y;
// 	this.hp = hp;
// 	this.appearance = appearance;
// 	this.sex = sex;
// 	this.dmg = dmg;
// 	this.age = age;
// 	this.maturity = maturity;
// 	this.move = function()
// 	{
// 		return "jeCours";
// 	}
// };

// function Carnivorous(x,y,hp, appearance, sex, dmg, age, maturity){

// 	Animal.call(this, x, y, hp, appearance, sex, dmg, age, maturity);

// 	this.eat = function(vegetarian){
//           // Vegetarian.hp = 0;
//           return 'je mange';
//       }