var x = 10;
var y = 10;
var table = [];
var monde = generer_monde(table, x, y);
var randomX;
var randomY;
var randomX1;
var randomY1;
var mouton;
var loup;

function generer_monde( x, y){
	for (var i = 0; i < x; i++) 
	{                   
		$("#grille").append( '<tr id="'+i+'"></tr>');                     
		for (var j = 0; j < y; j++) 
		{                       
			$("#grille tr:last-child").append( '<td id="'+i+j+'"></td>' );

		}          
	}  
};
generer_monde(x, y);

var xtab = new Array(0,1,2,3,4, 5, 6, 7, 8, 9);
var ytab = new Array(0,1,2,3,4, 5, 6, 7, 8, 9);


function nbAleatoir(){
	return Math.floor(Math.random() * ( 9 - 0 + 1 )) + 0;
}

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
		$("#" + tabXshu[3] + tabYshu[6]).append(plante.categorie);
	});				
});

$("#troupeau").click(function(){
	shuffleX(xtab);
	shuffleY(ytab);
	$('Herbivores.js', function(){ 
		$("#" + tabXshu[1] + tabYshu[7]).append(troupeau.categorie);
	});				
});

// $("#stop").click(function(){

// });

$("#go").click(function(){
	randomX = nbAleatoir();
	randomY = nbAleatoir();
	randomX1 = nbAleatoir();
	randomY1 = nbAleatoir();
	mouton=[randomY,randomX,"#randomYramdomX"];
	loup = [randomY1,randomX1, "#randomY1ramdomX1"];
	console.log(randomX);
	console.log(randomY);
	console.log(randomX1);
	console.log(randomY1);
	// mouvement();
	setInterval(function(){mouvement();},1000);
});


function getid(mouton)
{
	var number=mouton[1]+1;
	var number2=mouton[0];
	console.log(mouton);
	var res="#"+number+number2;
	var array=[number,number2,res];
	console.log(array);
	return array;
}


function getid2(loup)
{
	var number=loup[1]+1;
	var number2=loup[0];
	var res="#"+number+number2;
	var array=[number,number2,res];
	console.log(array);
	return array;
}

function mouvement()
{
	limiteMonde();
	limiteMondeM()
	$(loup[2]).empty();
	$(mouton[2]).empty();
	loup =getid2(loup);
	mouton =getid(mouton);
	$(loup[2]).append(dinosaure.categorie);
	$(mouton[2]).append(troupeau.categorie);
}



function limiteMondeM()
{
	if (mouton[0]<= 0 )
	{
		mouton[0]++;
	}
	if (mouton[0]>= 9)
	{
		mouton[0] --;
	}
	if (mouton[1]<= 0)
	{
		mouton[1] ++;
	}
	if (mouton[1]>= 9)
	{
		mouton[1] --;
	}
} 

function limiteMonde()
{
	if (loup[0]<= 0 )
	{
		loup[0]++;
	}
	if (loup[0]>= 9)
	{
		loup[0] --;
	}
	if (loup[1]<= 0)
	{
		loup[1] ++;
	}
	if (loup[1]>= 9)
	{
		loup[1] --;
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
