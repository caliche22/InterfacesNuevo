/*Esta funcion permite obtener el valor del select de html(onchange)*/
let menuItems = ["Mariscos", "Vegetariana", "Carne y pollo"]

let originalPrice;
let ivaCalculate;
var carrito = [];

function getValueType (paellaType){

	this.paellaType = paellaType;
	carrito.push(paellaType);

}

function getValuePrice(paellaPrice){

	this.paellaPrice = paellaPrice;
	ivaCalculate = Math.round((this.paellaPrice.value * 19) / 100);
	originalPrice = this.paellaPrice.value - ivaCalculate;
}

function get_Value_Coin(typeCoin){
	this.typeCoin = typeCoin;
}



function buildPaella(){

	/*Construccion de paella*/
	var factory = executeFactory(this.paellaType.value);
	var paellaProduct = generatePaella(factory.type);
	console.log(paellaProduct);

	/*llamamdo a patrones de diseño prototype y singleton*/
	var buildBase = produceBase(); //prototype
	var executeSingle = executeSingleton();
	console.log(buildBase);
	console.log(executeSingle);

	/*validacion de tipo de moneda para llamado del adaptador*/
	if(this.typeCoin.value == "dolar"){
		console.log("Precio en dolares con iva " + new CalculatePriceDolar().newCalculateDolar(originalPrice));
	}else if(this.typeCoin.value == "euro"){
		console.log("Precio en dolares con iva " + new CalculatePriceEuro().newCalculateEuro(originalPrice));
	}else if(this.typeCoin.value == "peso"){
		console.log("Precio en pesos con iva " + new CalculatePricePeso().newCalculatePeso(originalPrice));
	}

	var micarrito = new buildShoppingCar(factory.type, paellaProduct);
	console.log(micarrito);
	console.log("Precio Original " + originalPrice);
	console.log("Precio Iva " + ivaCalculate);

	var decorator = new executeDecorator(menuItems);
}	