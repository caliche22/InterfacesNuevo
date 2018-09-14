function productPaella(name){
	this.name=name;
}
function decoratorNameProduct(product, descripcion){
	this.product=product;
	this.descripcion=descripcion;
	var allName = this.product.name + " " + this.descripcion;
	return allName;

}
function excuteDecorator(item){
	var itemDecorate =[]
	console.log(item)
	for (var i = 0; i < item.length; i++) {
        var productName = new productPaella(item[i])
        var decorated = new decoratorNameProduct(productName, "la mejor paella de la universidad")
        itemDecorate.push(decorated)
    }

    console.log(productPaella)
}