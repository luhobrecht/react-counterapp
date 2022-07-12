import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/components/FirstApp"

 describe('Prueba sobre el component FirstApp', () => { 
     const title = 'Hola, Soy Goku'
     const subTitle= 'Soy un subtitulo'
    test('should make match with the snapshot', () => { 
        
      const {container} = render( <FirstApp title= { title } /> )

      expect (container).toMatchSnapshot();
     }),

     test('should show the message "Hola, Soy Goku"', () => { 
        
      render( <FirstApp title= {title} /> );
      expect( screen.getAllByText(title) ).toBeTruthy();

      }),

      test('should show title in h1', () => { 
         
         render( <FirstApp title= {title} /> );
         expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);

       });

       test('should show the subtitle send by props', () => { 
          
         render( <FirstApp 
            title= {title} 
            subTitle= {subTitle}
            /> );
         expect(screen.getAllByText(subTitle).length).toBe(2)

        })

  })