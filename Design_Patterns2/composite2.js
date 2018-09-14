function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    this.arrayElements = [];
/*    this.compositeProto = function(){
        var objectComposite ={
            add: function(product){
                console.log(product)
                arrayElements.push(product);
                return arrayElements;
            },

            remove: function (product){
                arrayElements.split(0, arrayElements.length);
                arrayElements.add(product);
                return arrayElements;
            }        
            
        }
    return objectComposite
    }
*/
}

shoppingCar.prototype  = {

    add: function(product){
        console.log(product)
        this.arrayElements.push(product);
    },

    remove: function (product){
        this.arrayElements.split(0, this.arrayElements.length);
        this.arrayElements.add(product);
    }

}

function buildShoppingCar(lista){
    var car = new shoppingCar("paella");
    for (var i = 0; i < lista.length; i++) {
        car.add(lista[i])
    }
    return car;

}