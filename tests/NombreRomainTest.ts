const assert = require('assert');
import { NombreRomain } from '../app/NombreRomain';

describe("Test Chiffres Romain", function () {
    it("ETANT donne le chiffre 1 QUAND on convertit le chiffre en nombre romain ALORS le nombre est I", function () {
       
        // Etant donne le chiffre 1
        let chiffreArabe : number = 1;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est I

        assert.equal(chiffreRomain, "I");
    });
});