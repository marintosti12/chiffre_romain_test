export class NombreRomain
{
    static convertirChiffreRomain(chiffreRomain: number) : string
    {
        let result : string = "I";

        return result.repeat(chiffreRomain);
    }
}