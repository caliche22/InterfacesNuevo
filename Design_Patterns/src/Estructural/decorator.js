function productPaella(name) {
	this.name = name;
}

function decoratorNameProduct(product, descripcion) {
this.product = product;
this.descripcion = descripcion;

var allName = this.product.name + "" + descripcion;
}

function executeDecorator(item) {
	for(var i = 0; i < item.length; i++) {
		var productName = productPaella(item[i]);
		var decorated = new decoratorNameProduct(productName, "la mejor paella de la universidad")
		console.log(item[i]);
	}

}