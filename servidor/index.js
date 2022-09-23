const expreess = require("express");
const app = expreess();

app.use(expreess.json())

app.use('/', require('./router/criacaoAcaoServico'));

app.listen(3000);