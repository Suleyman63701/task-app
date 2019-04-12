const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})
console.log(mongoose.connection.readyState);



//0 DISCONNECTED
//1 CONNECTED
//2 CONNECTING
//3 dISCONNECTING

