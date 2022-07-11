import { getSaludo } from '../src/base-pruebas/02-template-string'

describe('Pruebas en 02-template-string', () => { 


    test('getSaludo debe retornar "Hola Lucía"', () => {
    
        // 1. Inicialización
            const name = 'Lucía';
            const message = getSaludo( name );
    
        // 2. Estímulo
    
    
        // 3. Observar el comportamiento
    
            expect( message ).toBe( `Hola ${ name }`)
    
       });
    });