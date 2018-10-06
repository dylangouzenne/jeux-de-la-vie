function Herbivores (categorie, x, y, attaque, pv){
        this.categorie=categorie;
        this.x=x;
        this.y=y;
        this.attaque=attaque;
        this.pv=pv;
};
var troupeau = new Herbivores("<img src='mouton.png' width = '100px'>", 0, 0, 1, 10);