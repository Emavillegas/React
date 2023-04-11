

describe('Pruebas en <DemoComponent>', () => { /// esto nos describe el tipo de prueba que vamos a realizar

    test ('esta prueba no debe fallar', () => {

        /// pasos de una prueba
        /// 1.inicializacion 
        const message1 = 'Hola Mundo';
        /// 2.estimulo 
        const message2 = message1.trim(); /// el trim() sirve para sacarle los espacios adelante y atras.
        /// 3.observar el comportamiento... esperado 
         expect (message1).toBe(message2); /// esto nos dice que se espera que el mensaje1 sea igual al mensaje2
         
     
     
     })


});


