var x = 15;
var y = 15;
var table = [];
var monde = generer_monde(table, x, y);
var chevreVide=
{
	name:"chevre",
	icone:"&nbsp;"
};

function generer_monde( x, y){
	for (var i = 0; i < x; i++) 
	{                   
		$("#grille").append( '<tr id="'+i+'"></tr>');                     
		for (var j = 0; j < y; j++) 
		{                       
			$("#grille tr:last-child").append( '<td id="'+i+'L'+j+'">'+chevreVide.icone+ '</td>' );

		}          
	}  
};
generer_monde(x, y);

var xtab = new Array(1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
var ytab = new Array(1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);



function shuffleY(ytab)
{
	var j, x, i;
	for(i=ytab.length - 1; i>0; i--)
	{
		j = Math.floor(Math.random() * (i+ 1));
		x = ytab[i];
		ytab[i] = ytab[j];
		ytab[j]=x;
	}
	return ytab;
}

function shuffleX(xtab)
{
	var j, x, i;
	for(i=xtab.length - 1; i>0; i--)
	{
		j = Math.floor(Math.random() * (i + 1));
		x = xtab[i];
		xtab[i] = xtab[j];
		xtab[j]=x;
		console.log(xtab.length +'/'+ i);
	}
	return xtab;
}

var tabXshu = xtab;
var tabYshu = ytab; 

var interval =   
	setInterval(function(){
		shuffleX(xtab);
		shuffleY(ytab);
		$('Carnivores.js', function(){ 
			$("#" + tabXshu[0] + "L" + tabYshu[2]).append(dinosaure.categorie);
		});				
	},
	500);

var vege = setInterval(function(){
		shuffleX(xtab);
		shuffleY(ytab);
		$('Vegetaux.js', function(){ 
			$("#" + tabXshu[3] + "L" + tabYshu[10]).append(plante.categorie);
		});				
	},
	500);

var herbi = setInterval(function(){
		shuffleX(xtab);
		shuffleY(ytab);
		$('Herbivores.js', function(){ 
			$("#" + tabXshu[7] + "L" + tabYshu[12]).append(troupeau.categorie);
		});				
	},
	500);

$("#stop").click(function () {
	clearInterval(interval);	
});

$("#stop").click(function () {
	clearInterval(vege);	
});

$("#stop").click(function () {
	clearInterval(herbi);	
});

// function attaque(){
// 	for (var i = 0; i < monde.length; i++)
// 	{
// 		if ( == )
// 		{
// 			pv = 
// 		}
// 	}
// }

// function maj_animaux(monde){
// 		for (var i = 0; i < monde.length; i++)
// 		{
// 			for (var j = 0; j < monde.length; j++)
// 			{
// 				if (monde [i] [j] == null)
// 				{

// 				}
// 			}
// 		}
// };


// setInterval(function{
// 	afficher_monde( monde );
// 	maj_animaux( monde );
// },
// 500);
