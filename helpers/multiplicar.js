const fs = require('fs')
const colors = require('colors');
const { stringify } = require('querystring');

const crearArchivo = async ( base = 4, listar = false, hasta = 10 ) => {
    
    try{
        
        let salida = '';
        let consola = '';

        for(i = 1; i <= hasta; i++){
            console.log(i)
            salida += `${base} x ${i} = ${base*i}\n` ;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n` ;        
        }

        if(listar){
            console.log('================================='.green)
            console.log('Tabla del:'.green, colors.blue(base))
            console.log('================================='.green)
            console.log(consola)
        } 

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        

        return `Tabla-${base} creada`;

    } catch(err){
        throw err;
    }
        
    
        
}



module.exports = {
    crearArchivo
}