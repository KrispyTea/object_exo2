let personnage = {
    nom: "BOGGINS",
    prenom: "Frodon",
    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}
personnage.sePresenter();

let nice = {
    nom: "Alain",
    ageDon(){
        this.age = prompt("Change mon âge")
        alert(this.nom +" a " + this.age + " ans")
    }
}
nice.ageDon()