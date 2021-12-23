//variable
//var variable
//let variable
//constant variable

// array comun
// let fru1 ="banana";
// let fru2 ="mango";
// let fru3 ="manzana";
// let fru4 ="naranja";
// let fru5 ="pera";
// let frutas =[fru1,fru2,fru3,fru4,fru5];
// alert(frutas[1] + frutas[3]);

//array asociativo
// let cosas = {
//     caja: "plastica",
//     destornillador: "electrico",
//     corchete: "pequeño",
//     sacapuntas: "metalico"
// };
// alert(cosas['caja'] + cosas['corchete']);

//while
// let cont =0;
// let cont2 =0;
// while (cont <=10){
//     cont++;
//     cont++;
//     cont++;
//     document.write('ao <br>');
//     if(cont == 9)
//     break //para parar el bucle antes
// }
// document.write('<br><br>');

//do while
// do{
//     cont2++;
//     document.write('oa <br>');
// }
// while (cont2 <=10);

//for simple
// for (let i = 0; i<5; i++){
//     if(i == 2){
//         continue;//saltarse un ciclo
//     }
//     ;
//     document.write("tortuga numero "+(i+1)+"<br>");
// };

// let old_animal = ["gato","perro","marmota","oso","mi anaconda"];
// let new_animal = ["canario","anguila","tiburon","paloma","vaca"];
// old_animal.shiny ="zorro";
// new_animal.shiny ="zorro";

// for (let animales in old_animal) {
//     document.write(animales + old_animal[animales] +"<br>");
// };//el in devulve la posicion a no ser que le coloques la posicion(en este caso animales)
// document.write("<br>");
// for (let animales of new_animal) {
//     document.write(animales +"<br>");
// };//el of muestra directamente el contenido de la casilla del array


let array1 = [7,5,13];
let array2 = [1,2,array1];

for (let array in array2){
    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
            
        };
    }else{
        document.write(array2[array] + "<br>");
    };
};

forInventado:
    for (let array in array2){
        if (array == 2) {
            for (let array of array1) {
                document.write(array + "<br>");
                break forInventado;
            };
        }else{
            document.write(array2[array] + "<br>");
        };
    };
