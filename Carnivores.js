function Carnivores (categorie, x, y, attaque, pv){
        this.categorie=categorie;
        this.x=x;
        this.y=y;
        this.attaque=attaque;
        this.pv=pv;
};
var dinosaure = new Carnivores("T-rex", 0, 0, 2, 15);