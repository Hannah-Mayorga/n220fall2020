class Vending {
    constructor(name, stock) {
        this.name = name;
        this.stock = stock;

    }
    render() {
        return `
            <div>${this.name}</div>
            <div>Stock: ${this.stock}</div>
        `;
    }
    purchase() {
        if(this.stock <= 0){
            return "Out of stock";
        } else {
            this.stock --;
        }
    }
}

let firstCandy = new Vending("KitKat", 10);
console.log(firstCandy);
let secondCandy = new Vending("Twix", 5);
console.log(secondCandy);
let firstChips = new Vending("Cheetos", 20);
console.log(firstChips);
///
let firstCandyDiv = document.getElementById("firstCandyDiv");
firstCandyDiv.innerHTML = firstCandy.render();

function buy(){
    firstCandy.purchase();
    firstCandyDiv.innerHTML = firstCandy.render();
}
///
let secondCandyDiv = document.getElementById("secondCandyDiv");
secondCandyDiv.innerHTML = secondCandy.render();
///
function buySecond(){
    secondCandy.purchase();
    secondCandyDiv.innerHTML = secondCandy.render();
}
///
let firstChipsDiv = document.getElementById("firstChipsDiv");
firstChipsDiv.innerHTML = firstChips.render();

function buyChips(){
    firstChips.purchase();
    firstChipsDiv.innerHTML = firstChips.render();
}