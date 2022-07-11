import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 


    test('getUser debe retornar un objeto', () => {
    
        // 1. Inicialización
            const testUser = {  uid: 'ABC123',
            username: 'El_Papi1502'
         };
            const user = getUser();
    
        // 2. Estímulo
    
    
        // 3. Observar el comportamiento
    
            expect( testUser ).toEqual( user )
    
       });
    });

    test('getUsuarioActivo debe retornar un objeto', () => { 

        const name = "Lucía" 

        const activeUser = getUsuarioActivo(name)

        expect( activeUser ).toEqual({
            uid: 'ABC567',
            username: name
        })
     })