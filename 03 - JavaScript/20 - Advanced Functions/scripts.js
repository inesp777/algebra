class Apartman {
    constructor(size, rooms, price, mstatus) {
        this.size = size;
        this.rooms = rooms;
        this.price = price;
        this.mstatus = mstatus;

    }
    fstatus() {
        if (this.mstatus) {
            return 'Apartman je zauzet';
        } else { return 'Apartman je slobodan'; }

    }
}

class Petapartman extends Apartman {
    constructor(size, rooms, price, mstatus, spet) {
        super(size, rooms, price, mstatus);
        this.spet = spet;
    }
    petstatus() {
        if (this.spet) {
            return 'Kućni ljubimci su dobrodošli';
        } else {
            return 'Kućni ljubimci nisu dobrodošli}';
        }
    }

}

        let Apartman1 = new Apartman(60, 2, 100, false);
        let Apartman2 = new Petapartman(60, 3, 100, false, true);

        console.log(Apartman1.fstatus());
        console.log(Apartman2.petstatus());