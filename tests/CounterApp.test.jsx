
import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/components/CounterApp";


describe('Pruebas en el CounterApp', () => { 
    
    test('should do match with the snapshoot', () => { 
        

        const value = 0

        const {container} = render( <CounterApp value= { value } /> )

       expect (container).toMatchSnapshot();
    
    
    }),


    test('should show the initial value of 100', () => { 
         
        render ( <CounterApp value= { 100 } /> )

        expect( screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');

        expect(screen.getByText(100)).toBeTruthy();
    
    });

    test('should increment with the button +1', () => { 
        
        render( <CounterApp value = { 0 } /> );

        fireEvent.click( screen.getByText('+1') )

        expect(screen.getByText('1')).toBeTruthy();

     });

    test('should decrease when pressing -1 the button ', () => { 
         
        render( <CounterApp value = { 0 } /> );

        fireEvent.click( screen.getByText('-1') )

        expect(screen.getAllByText('-1')).toBeTruthy();

      });

    test('should reset when pressing reset button', () => { 
        
        render( <CounterApp value = { 0 } /> );

        // fireEvent.click( screen.getByText('Reset') )

        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}));
        
        expect(screen.getByText(0)).toBeTruthy();

     })
 })