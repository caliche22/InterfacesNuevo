function cuadrador(sq){
	var valoractual=Math.sqrt(sq)+1
	var valorsiguiente=Math.sqrt(sq)+1
	valorsiguiente*=valorsiguiente
	if(valorsiguiente==Math.floor(valoractual*valoractual))
	return valorsiguiente
	else
	return -1
}