// let r = Math.random().toString(36).substring(5);
// console.log(r);

// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }

// console.log(makeid(6));

const bcryptjs = require('bcryptjs')
let senha = 'senha'
let cripto = bcryptjs.hashSync(senha)
console.log(cripto)
if (bcryptjs.compareSync(senha, cripto)){
    console.log('sao iguais')
}
else{
    console.log('deu ruim')
}

