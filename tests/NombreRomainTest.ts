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

    it("ETANT donne le chiffre 9 QUAND on convertit le chiffre en nombre romain ALORS le nombre est IX", function () {
       
        // Etant donne le chiffre 9
        let chiffreArabe : number = 9;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est IX

        assert.equal(chiffreRomain, "IX");
    });

    it("ETANT donne le chiffre 10 QUAND on convertit le chiffre en nombre romain ALORS le nombre est X", function () {
       
        // Etant donne le chiffre 10
        let chiffreArabe : number = 10;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est X

        assert.equal(chiffreRomain, "X");
    });

    it("ETANT donne le chiffre 11 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XI", function () {
       
        // Etant donne le chiffre 11
        let chiffreArabe : number = 11;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XI

        assert.equal(chiffreRomain, "XI");
    });

    it("ETANT donne le chiffre 12 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XII", function () {
       
        // Etant donne le chiffre 12
        let chiffreArabe : number = 12;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XII

        assert.equal(chiffreRomain, "XII");
    });

    it("ETANT donne le chiffre 13 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XIII", function () {
       
        // Etant donne le chiffre 13
        let chiffreArabe : number = 13;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XIII

        assert.equal(chiffreRomain, "XIIII");
    });


    it("ETANT donne le chiffre 13 QUAND on convertit le chiffre en nombre romain ALORS le nombre est XIII", function () {
       
        // Etant donne le chiffre 13
        let chiffreArabe : number = 13;


        // Quand on covertit le chiffre en nombre romain

        let chiffreRomain : string = NombreRomain.convertirChiffreRomain(chiffreArabe);

        // ALORS le nombre romain est XIII

        assert.equal(chiffreRomain, "XIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
    });
});