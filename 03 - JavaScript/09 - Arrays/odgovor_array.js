let names = ['John', 'Jane', 'Bob', , 'Mike'];
//1.
let i = 0;
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//2.
names.push('Ines');
//3.
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
    if (names[i] == "Jane") {
        break;
    }
}
//4.
const result = names.filter(name => !(name === "undefined"));
console.log(result);