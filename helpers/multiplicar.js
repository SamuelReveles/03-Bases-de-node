const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, l = false, h = 10) => {

    try {
    
        let salida = '';
    
        for (let i = 1; i <= h; i++) {
            salida += `${colors.blue(base)} ${'x'.rainbow} ${colors.blue(i)} ${'='.red} ${colors.green(base * i)}\n`;
        }
        
        if(l){
            console.log('==================='. rainbow);
            console.log('    Tabla del '. rainbow, colors.blue(base));
            console.log('==================='. rainbow);
            console.log(salida);
        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base} creada`;
    } catch (error) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}