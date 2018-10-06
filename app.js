var x = 15;
var y = 15;
var table = [];
var monde = generer_monde(table, x, y);
var start=[0,0,"#00"];
var debut = [5,5,"#55"];
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
			$("#grille tr:last-child").append( '<td id="'+i+j+'">'+chevreVide.icone+ '</td>' );

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

$("#dinosaure").click(function(){
	shuffleX(xtab);
	shuffleY(ytab);
	$('Carnivores.js', function(){ 
		$("#" + tabXshu[0] + tabYshu[2]).append(dinosaure.categorie);
	});				
});

$("#plante").click(function(){
	shuffleX(xtab);
	shuffleY(ytab);
	$('Vegetaux.js', function(){ 
		$("#" + tabXshu[3] + tabYshu[10]).append(plante.categorie);
	});				
});

$("#troupeau").click(function(){
	shuffleX(xtab);
	shuffleY(ytab);
	$('Herbivores.js', function(){ 
		$("#" + tabXshu[7] + tabYshu[12]).append(troupeau.categorie);
	});				
});

$("#stop").click(function(){
	 setInterval(function(){move();},1000);
});

function getid(Start)
{
	var number=Start[1]+1;
	var number2=Start[0];
	var n1 = number.toString();
	var n2 = number2.toString();
	var res="#"+n1+n2;
	var array=[number,number2,res];
	console.log(array);
	return array;
}

function move()
{
	$(start[2]).empty();
	$(debut[2]).empty();
	start =getid(start);
	debut =getid(debut);

	$(start[2]).append(troupeau.categorie);
	$(debut[2]).append(dinosaure.categorie);
} 

function stopMove()
{
	if (start[0] < 0)
	{
		start[0] += 1;
	}else
	if (start[0] > 15)
	{
		start[0] -= 1;
	}else
	if (start[1] < 0)
	{
		start[0] += 1;
	}else
	if (start[1] > 15)
	{
		start[0] -= 1;
	}else{
		setInterval(function(){move();},1000);
	}
}


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
