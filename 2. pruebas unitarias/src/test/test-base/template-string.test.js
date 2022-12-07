import { getSaludo } from '../../test-base/template-string';

describe('pruebas en <template-string />', ()=>{

    test('prueba nombre', ()=>{
        
       const name = 'Jhosua';
       const message = getSaludo(name);
        
       expect( message ).toBe(`hola ${name}`);

    });
    
});