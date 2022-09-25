
const campus = 'Remote';

const userInfo = require('./information.js');


var cowsay = require("cowsay");

console.log(cowsay.say({

    text : `Hi, my name is ${userInfo.name} from ${userInfo.campus} campus`
    
}));


// or cowsay.think()



