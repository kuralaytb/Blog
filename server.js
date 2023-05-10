const express=require('express');

const app=express()

require('./server/config/db')
app.use(express.urlencoded())

app.use(require('./server/pages/router'))
app.use(require('./server/categories/router'))
app.use(require('./server/auth/router'))

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))


const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})