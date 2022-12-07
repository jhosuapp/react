describe('pruebas en <micomponente />', ()=>{

    test('Prueba textos iguales', ()=>{
    
        //DECLARACIÓN
        const message1 = 'hola mundo';
    
        //ESTÍMULO
        const message2 = message1.trim();
    
        //OBSERVAR EL COMPORTAMINETO ESPERADO
        // expect( message1 ).toBe( message2 );
        expect(message1).toBe(message2);
        
    });
    
});

