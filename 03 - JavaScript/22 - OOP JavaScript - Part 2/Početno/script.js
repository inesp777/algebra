function Dog(name){
    this.name=name || 'Rex';
    this.bark= function() {return 'WoW WoW'};
}
Dog.prototype.getname= function()  {return `${this.name}`};

var ndog=new Dog('fifi');
console.log(`${ndog.getname()} say ${ndog.bark()}`);
console.log(ndog);