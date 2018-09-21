<?php

class hexa {
    public $r;
    public $g;
    public $b;
    public $hex;
    
    private function decahex($numero)
    {
        $hexvalues = array('0','1','2','3','4','5','6','7',
                   '8','9','A','B','C','D','E','F'); // opciones binarias 0-15
        $hexvalor = ''; // inicializo el result en vacio
         while($numero != '0')
         {
            $hexvalor = $hexvalues[bcmod($numero,'16')].$hexvalor; // modulo 16
            $numero = bcdiv($numero,'16',0);
        }
        return $hexvalor;
    }
    
    private function __construct($_r, $_g, $_b) {
        $this->hex = decahex($_r) . decahex($_g) . decahex($_b);
    }
}

$hex = new hexa(123,78,146);

?>