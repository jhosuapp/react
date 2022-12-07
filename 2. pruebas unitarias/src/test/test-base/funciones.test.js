import { miFuncionJson, miObject } from '../../test-base/funciones';

describe('Funciones <funciones />', ()=>{

    test('Testing Data', ()=>{
        const object = {
            nombre : "jhosua",
            apellido : "penagos",
        }
        const getFunction = miFuncionJson();

        expect( getFunction ).toEqual( object );
    });

    test('get custom name', ()=>{
        const getName = miObject('jhosua');
        const DataUser = {         
            name: 'jhosua',
            lastName: 'penagos',
        }

        expect( getName ).toEqual( DataUser );
    });

});