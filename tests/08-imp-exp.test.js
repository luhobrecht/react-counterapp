import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un héroe por ID', () =>{
        const id = 1;

        const heroe = getHeroeById(id);

    expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })
    
    test('getHeroeById debe de retornar undefined si no existe', () =>{
        const id = 100;

        const heroe = getHeroeById(id);

    expect( heroe ).toBeFalsy();
    })


    test('debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC'
        const heroe = getHeroesByOwner(owner);
        //console.log(heroe)
        
    expect(heroe).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ])

    expect( heroe.length ).toBe(3)
    })


    test('debe retornar un arreglo con los heroes de Marvel', () => { 
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner);
        //console.log(heroe)
        
    expect(heroes).toEqual([
        { id: 2, name: 'Spiderman', owner: 'Marvel' },
        { id: 5, name: 'Wolverine', owner: 'Marvel' }
      ])

    expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner))    

    })

});