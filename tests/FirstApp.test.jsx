import { render } from "@testing-library/react"
import { FirstApp } from "../src/components/FirstApp"

 describe('Prueba sobre el component FirstApp', () => { 
     
   //  test('should make match with the snapshot', () => { 
        
   //    const title = 'Hola, Soy Goku'
   //    const {container} = render( <FirstApp title= { title } /> )

   //    expect (container).toMatchSnapshot();
   //   }),

     test('should have the title in h1', () => { 
        
      const title = 'Hola, Soy Goku'
      const {container, getByText, getByTestId} = render( <FirstApp title= { title } /> )

      expect (getByText(title)).toBeTruthy();

      // const h1 = container.querySelector('h1')
      // expect (getByText(title)).toBe(h1);
      // expect(h1.innerHTML).toContain(title);

      expect(getByTestId('test-title').innerHTML).toContain(title);

     })

      test('should show the subtitle send by props', () => { 
         const title= 'Hola, Soy Goku'
      const subTitle= 'Soy un subtitulo'

      const { getByText } = render(
         <FirstApp
         title={title}
         subTitle={subTitle} 
         />
      );

      expect( getByText(subTitle)).toBeTruthy();

      });

  })