//1.
let auto = {
    marka: 'Peugeot',
    model: {
        ime: "406",
        godina: 2020,
    },
    boja: function () {
        switch (this.model.godina) {
            case 2019: return "plava"; break;
            case 2020: return "zelena"; break;
            case 2021: return "crvena"; break;
            case 2021: return "srebrna"; break;
            default: return "bijela"; break;
        }
    },
    price: {
        vrijednost: 11000,
        valuta: '€',
        price_display: function () {
            return `${auto.price.vrijednost} ${auto.price.valuta}` //ako ovdje stavim this. ne radi mi ????
        }
    },
    maxbrzina: 200,

    best: function () {
        if (this.price.vrijednost >= 10000 && this.price.valuta == "€") {
            return "Preskupo!";
        } else {
            return "Best by!!";
        }
    }
}


//2.
// godina-godiše automobila , godinaa - granična godina do koje ide akcija, cijena-puna cijena, 30-postotak sniženja
function akcija(godina, godinaa, cijena, postotak) {
    if (godina <= godinaa) {
        cijena = cijena * (100-postotak) / 100;
    }
    return cijena;
}
auto.price.vrijednost = akcija(auto.model.godina, 2020, auto.price.vrijednost, 30);

//3.
console.log(`Na akciji je automobil ${auto.marka} ${auto.model.ime} Godište:${auto.model.godina} Cijena: ${auto.price.price_display()} `);
console.log(auto.best());

//4.
const myJsonObject = JSON.stringify(auto);
