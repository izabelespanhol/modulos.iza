var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplicar = require("./modulos/multiplicar");
var subtrair = require("./modulos/subtrair");
var mensagem = require("./modulos/mensagem");
var nome = "Izabel";

console.log("A soma de x e y é:" + somar(45,30));
console.log("A media de x e y é:" + media(12,18));
console.log("O produto de x e y é:" + multiplicar(47,25));
console.log("A subtração de x e y é:" + subtrair(87,34));
console.log(mensagem(nome))