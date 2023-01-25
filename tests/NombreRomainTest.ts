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

    it("ETANT donne le chiffre 2 QUAND on convertit le chiffre en nombre romain ALORS le nombre est II", function () {
       
        // Etant donne le chiffre 2
        let chiffreArabe : number = 2;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est II

        assert.equal(chiffreRomain, "II");
    });

    it("ETANT donne le chiffre 3 QUAND on convertit le chiffre en nombre romain ALORS le nombre est III", function () {
       
        // Etant donne le chiffre 3
        let chiffreArabe : number = 3;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est III

        assert.equal(chiffreRomain, "III");
    });

    it("ETANT donne le chiffre 4 QUAND on convertit le chiffre en nombre romain ALORS le nombre est IV", function () {
       
        // Etant donne le chiffre 4
        let chiffreArabe : number = 4;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est IV

        assert.equal(chiffreRomain, "IV");
    });

    it("ETANT donne le chiffre 5 QUAND on convertit le chiffre en nombre romain ALORS le nombre est V", function () {
       
        // Etant donne le chiffre 5
        let chiffreArabe : number = 5;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est V

        assert.equal(chiffreRomain, "V");
    });

    it("ETANT donne le chiffre 6 QUAND on convertit le chiffre en nombre romain ALORS le nombre est VI", function () {
       
        // Etant donne le chiffre 6
        let chiffreArabe : number = 6;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est VI

        assert.equal(chiffreRomain, "VI");
    });

    it("ETANT donne le chiffre 7 QUAND on convertit le chiffre en nombre romain ALORS le nombre est VII", function () {
       
        // Etant donne le chiffre 7
        let chiffreArabe : number = 7;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est VII

        assert.equal(chiffreRomain, "VII");
    });

    it("ETANT donne le chiffre 8 QUAND on convertit le chiffre en nombre romain ALORS le nombre est VIII", function () {
       
        // Etant donne le chiffre 8
        let chiffreArabe : number = 8;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est VIII

        assert.equal(chiffreRomain, "VIII");
    });
});