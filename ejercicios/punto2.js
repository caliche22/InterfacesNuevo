function solve(s, k)//// opcion 1 corregir falta idea slice como python
  var i = 0;
  var char = 'a';
  while (i < k) {
    for (let j = 0; j < s.length; j++){
      if (s[j] === char) {
        s = s.slice(0,j)+s.slice(j+1);
        i += 1;
        if (i === k || s.length === 0) {
          i = k;
          break;
        }
      }
    }
    char = String.fromCharCode(char.charCodeAt(0) + 1); // me lo explico norbey
  }
  return s;
}

function solve(s, k) { // opcion2 la que primero se me ocurrio toca arreglarla
  letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  solve = "";
  contador = 0;
  for(var l = 0; l < s.length; l++) {
    for(var i = 0; i++; i < s.length) {
      if(contador < k && s[i] == letras[l]){
        contador += 1;
      } else {
        solve = solve + s[i];
      }
    }

    if(contador >= k) {
      break;
    }
  }

  return solve;
}