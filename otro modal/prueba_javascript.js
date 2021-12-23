// var taza;
// taza = "cafe";
// let taza1 ="leche", taza2="cafe", taza3="té";
// no es un numero(NaN)
// var tazanew="cafe";
// var tazaold="leche";
// var tazagota=5;
// var tazaazucar=6;

// var tazagrande=15;
// tazagrande += tazaazucar; // suma
// document.write(tazagrande); // escribe en el html


// var taza1="cafe";
// var taza2="leche";

// string="hola como tas";
// number=27;
// booleano=true;

//var se declara para una variable universal
//let se declara para una variable que no es universal(si esta en un if lo q se declare solo ocurrira en el if y no fuera)
//const le fija el valor para siempre

// alert(taza1);
// alert(taza2);
// alert(tazanew + tazaold);
// alert(tazagota + tazaazucar);

//el prompt solicita un dato al usuario con un mensaje el cual luego se puede usar en una variable
// var saludo = prompt("buenos dias");
// alert(saludo);
// operadores comparativos
// var nume1=23;
// var nume2=20;
// devuelven true o false 
// nume1==nume1 == nume2; iguales   
// nume1==nume1 != nume2; difentes
// nume1==nume1 === nume2; iguales tanto como el dato y el tipo
// nume1==nume1 !== nume2; difentes tanto como el dato o el tipo
// nume1==nume1 <= nume2; menor igual 
// nume1==nume1 < nume2; menor 
// nume1==nume1 >= nume2; mayor igual
// nume1==nume1 > nume2; mayor  

// operadores logicos
// var valor= false;
// var valor2= true;
// valor && valor2; && es un AND por lo cual devuelve false
// ; || es un OR por lo cual devuelve true
// !valor; es una negacion de valor por lo cual devuelve false

// if (valor && valor2) {
//     alert("ochurro");
// }
// else if(valor2 == false){
//     alert("pelallo");
// }
// else{
//     alert("horse");
// }

//ejemplo de heladeria solo con javascripts

// var roberto= 500;
// var pedro= 550;
// var cofla= 1000;

// var dinero = prompt("ingrese cuanto dinero va a gastar");
// dinero = parseInt(dinero);//transformar a entero

// var palito_agua = 200;
// var palito_crema = 300;
// var bombon_heladix = 500;
// var bombon_heladovich = 550;
// var bombon_helardo = 600;
// var pote_confi = 1000;
// var pote_cuarto = 1000;

// if (dinero>=1000){
//     var sel_helado = prompt("ingrese numero del helado \n 1.- Palito de agua $" + palito_agua + " \n 2.- Palito de crema $" + palito_crema + " \n 3.- Bombón heladix $" + bombon_heladix + " \n 4.- Bombón heladovich $" + bombon_heladovich + " \n 5.- Bombón helardo $" + bombon_helardo + " \n 6.- Potecito con confites $" + pote_confi + " \n 7.- Pote 1/4 $" + pote_cuarto);
//     if(sel_helado==1){
//         var vuelto = dinero - palito_agua;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==2){
//         var vuelto = dinero - palito_crema;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==3){
//         var vuelto = dinero - bombon_heladix;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==4){
//         var vuelto = dinero - bombon_heladovich;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==5){
//         var vuelto = dinero - bombon_helardo;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==6){
//         var vuelto = dinero - pote_confi;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==7){
//         var vuelto = dinero - pote_cuarto;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }else{
//         alert("ingrese numero correcto");
//     }
// }
// else if(dinero>=600 && dinero<1000){
//     var sel_helado = prompt("ingrese numero del helado \n 1.- Palito de agua $" + palito_agua + " \n 2.- Palito de crema $" + palito_crema + " \n 3.- Bombón heladix $" + bombon_heladix + " \n 4.- Bombón heladovich $" + bombon_heladovich + " \n 5.- Bombón helardo $" + bombon_helardo);
//     if(sel_helado==1){
//         var vuelto = dinero - palito_agua;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==2){
//         var vuelto = dinero - palito_crema;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==3){
//         var vuelto = dinero - bombon_heladix;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==4){
//         var vuelto = dinero - bombon_heladovich;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==5){
//         var vuelto = dinero - bombon_helardo;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }else{
//         alert("ingrese numero correcto");
//     }
// }
// else if(dinero>=550 && dinero<600){
//     var sel_helado = prompt("ingrese numero del helado \n 1.- Palito de agua $" + palito_agua + " \n 2.- Palito de crema $" + palito_crema + " \n 3.- Bombón heladix $" + bombon_heladix + " \n 4.- Bombón heladovich $" + bombon_heladovich);
//     if(sel_helado==1){
//         var vuelto = dinero - palito_agua;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==2){
//         var vuelto = dinero - palito_crema;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==3){
//         var vuelto = dinero - bombon_heladix;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==4){
//         var vuelto = dinero - bombon_heladovich;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }else{
//         alert("ingrese numero correcto");
//     }
// }
// else if(dinero>=500 && dinero<550){
//     var sel_helado = prompt("ingrese numero del helado \n 1.- Palito de agua $" + palito_agua + " \n 2.- Palito de crema $" + palito_crema + " \n 3.- Bombón heladix $" + bombon_heladix);
//     if(sel_helado==1){
//         var vuelto = dinero - palito_agua;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==2){
//         var vuelto = dinero - palito_crema;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==3){
//         var vuelto = dinero - bombon_heladix;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }else{
//         alert("ingrese numero correcto");
//     }
// }
// else if(dinero>=300 && dinero<500){
//     var sel_helado = prompt("ingrese numero del helado \n 1.- Palito de agua $" + palito_agua + " \n 2.- Palito de crema $" + palito_crema);
//     if(sel_helado==1){
//         var vuelto = dinero - palito_agua;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }
//     else if(sel_helado==2){
//         var vuelto = dinero - palito_crema;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }else{
//         alert("ingrese numero correcto");
//     }
    
// }
// else if(dinero>=200 && dinero<300){
//     var sel_helado = prompt("ingrese numero del helado \n 1.- Palito de agua $" + palito_agua);
//     if(sel_helado==1){
//         var vuelto = dinero - palito_agua;
//         alert("Su vuelto es $" + vuelto + "\n Gracias por venir");
//         alert("Imprimiendo su boleta");
//     }else{
//         alert("ingrese numero correcto");
//     }
// }
// else{
// alert("tacaño, comprá en otro lado");
// }


