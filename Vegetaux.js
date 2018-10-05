function Vegetaux (categorie, x, y, attaque, pv){
        this.categorie=categorie;
        this.x=x;
        this.y=y;
        this.attaque=attaque;
        this.pv=pv;
};
var plante = new Vegetaux("arbre", 0, 0, 0, 5);