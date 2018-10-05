function Herbivores (categorie, x, y, attaque, pv){
        this.categorie=categorie;
        this.x=x;
        this.y=y;
        this.attaque=attaque;
        this.pv=pv;
};
var troupeau = new Herbivores("mouton", 0, 0, 1, 10);