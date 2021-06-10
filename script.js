
//0) Solicitar al usuario su nombre y mostrarlo por consola. Luego Mostrar un alert que salude diciendo Hola y el nombre de la persona. //
//Luego solicitar el apellido y que salude por consola con el nombre completo (Ej: Hola Florencia Andres).//
//EJERCICIO 0//

/*let nombre = prompt ("Ingrese su nombre");
alert("Hola " + nombre);
let apellido = prompt ("Ingrese su apellido");
alert("Hola " + nombre + " " + apellido);*/


//1) Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos.//

/*let numero1 = parseInt(prompt ("Ingrese un número"));
let numero2 = parseInt (prompt ("Ingrese otro número"));
console.log(numero1 + numero2);*/



//2) Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y mostrar un mensaje por consola //
//(Ej: Usted nació en 1974)//

/* let edad = parseInt (prompt ("Ingrese la edad que cumple este año"));
console.log(2021 + " " - edad); */


//3) Mostrar al usuario su balance de cuenta (Numero asignado por nosotros). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.//

/*let saldo = 10000;
let susaldoes = "Su saldo es de pesos ";
alert(susaldoes+saldo);
let retiro = parseInt (prompt("¿Cuánto dinero desea retirar?"));
let haretirado = "Ha retirado su dinero con éxito. Su nuevo saldo es de: ";
let saldofinal = (saldo-retiro);
alert(haretirado + saldofinal);*/


//4) Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por consola.//

/*let nota1 = parseInt (prompt ("Ingrese la nota 1"));
let nota2 = parseInt (prompt ("Ingrese la nota 2"));
let nota3 = parseInt (prompt ("Ingrese la nota 3"));
let enunciadopromedio = "Su promedio de notas es de: ";
let promedio = (nota1+nota2+nota3)/3;
console.log(enunciadopromedio + promedio);*/



//5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centimetros y pulgadas. //
//Mostrar por consola los tres resultados.//

/*let medida = parseInt (prompt("Ingrese una medida en metros: "))
let metro = medida
let pies = 3
let centimetros = 100
let pulgadas = 39.3701
let respies = (medida*3);
let rescenti = (medida*100);
let respulga = (medida*39.3701);
let suresultado = "metros equivalen a: "
let xpies = " pies";
let xcenti = " centímetros";
let xpulga = " pulgadas";
let espacio = " ";
let resultado = prompt (medida+espacio+suresultado+respies+xpies+espacio+rescenti+xcenti+espacio+respulga+xpulga);*/



//6) Solicitar al usuario dos números y mostrar el resultado de la suma. //
//Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.//

/*let numero1 = parseInt ( prompt ("Ingrese un número:"));
let numero2 = parseInt ( prompt ("Ingrese otro número:"));
let sumar = (numero1+numero2);
let resultado1 = "El resultado de la suma es de: ";
alert(resultado1+sumar);
let numero3 = parseInt (prompt("Ingrese un tercer número:"));
let multiplicar = (sumar*numero3);
let resultado2 = "El resultado de la multiplicación es de: ";
alert(resultado2+multiplicar);*/


//7) Armar un conversor de minutos a segundos. //
//Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.//

/*let medida = parseInt (prompt("Ingrese la cantidad de minutos que desea convertir:"));
let segundos = 60;
let conversion = (medida*60);
let sures = "minutos equivalen a ";
let resseg = "segundos.";
let espacio = " ";
alert(medida+espacio+sures+conversion+espacio+resseg);*/


//8) Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.//

/*let base = parseInt (prompt("Ingrese la medida de la base del rectángulo:"));
let altura = parseInt (prompt("Ingrese la medida de la altura del rectángulo:"));
let calculo = (base*altura);
let resultado = "El área del rectángulo es de: ";
alert(resultado+calculo);*/


//9) Solicitar al usuario la medida de la base y de la altura de un triángulo equilatero y devolver el área.//

/*let base = parseInt (prompt("Ingrese la medida de la base del triángulo equilatero:"));
let altura = parseInt (prompt("Ingrese la medida de la altura del triángulo equilatero:"));
let calculo = (base*altura)/2;
let resultado = "El área del triángulo equilatero es de: ";
alert(resultado+calculo);*/


//10) Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.//

/*let monto = parseInt (prompt("Ingrese un monto"));
let descuento = parseInt (prompt("Ingrese el número de descuento"));
let cálculo = (monto*descuento)/100;
let montotal = (monto-cálculo);
alert("El precio final es de: " + montotal);*/

//11) Solicitar al usuario su nombre y edad, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"//

/*let edadcumple = parseInt (prompt ("Ingrese la edad que cumple este año"));
let nombre = (prompt ("Ingrese su nombre"))
let edad = (2021 + " " - edadcumple);
let hanacido = ("ha nacido en el año: ");
alert(nombre+" "+hanacido+edad);*/

//12) Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por consola su equivalente en //
//Celsius junto con un mensaje que incluya ambos datos. //

/*let sunombre = prompt ("Ingrese su nombre");
let temperatura = parseInt (prompt ("Ingrese la temperatura"));
let celsius = (temperatura*9/5)+32;
let detemp = ("grados farenheit equivale a ");
let gradoscel = ("grados celsius");
let latemp = ("la temperatura")
console.log(sunombre+" "+latemp+" "+temperatura+" "+detemp+celsius+" "+gradoscel);*/

//13) Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.//

/*let sunombre = prompt ("Ingrese su nombre");
let temperatura = parseInt (prompt ("Ingrese la temperatura"));
let farenheit = (temperatura-32)*(5/9);
let detemp = ("grados celsius equivale a ");
let gradosfar = ("grados farenheit");
let latemp = ("la temperatura");
console.log(sunombre+" "+latemp+" "+temperatura+" "+detemp+farenheit+" "+gradosfar);*/

//14) Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y //
//sacar el resto de su división por 3. Mostrar el resultado sin comas.//

/*let numero = parseInt (prompt("Ingrese un número"));
let calculo1 = (numero+5)*10;
let calculo2 = (calculo1%3);*/


//BONUS://

//0) Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529)//

/*let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese otro número");
let lasuma = ("La suma de las cifras de los números ingresados es de: ");
let cifrafinal = (numero1+numero2);
alert (lasuma+cifrafinal);*/


//1) Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por consola// 
//o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)//

/*let dias = parseFloat (prompt("Ingrese la cantidad de días que desea calcular"));
let segundos = (dias*86400);
let equivalen = ("días equivalen a ");
let tantoseg = (" segundos.");
alert(dias+" "+equivalen+segundos+tantoseg);*/


//2) Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. //
//A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. //
//Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)//

/* let kilometros = parseFloat (promtp ("Ingrese la cantidad de kilómetros que desea recorrer con su motocicleta"));
let velocidad = parseFloat (prompt("Ingrese la velocidad promedio a la que desea recorrer en k/h"));
let demora = (kilometros/velocidad)*60;
alert("El tiempo estimado de llega a destino es de: "+demora+" minutos.");
 */


//3) Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta:// 
//Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. //
//No contempla impuesto a las ganancias ni sindicatos.//
/*ej: Sueldo bruto: $70.000
    Deducciones:
    Obra social: $2100
    Ley 19032: $2100
   Jubilación: $7700
   Neto a pagar: $58100*/

   /*let sueldobruto = parseFloat (prompt("Ingrese su sueldo en bruto"));
   let obrasocial = (sueldobruto*3)/100;
   let jubilacion = (sueldobruto*11)/100;
   let ley19032 = (sueldobruto*3)/100;
   let deducciones = (obrasocial+jubilacion+ley19032);
   let sueldoneto = (sueldobruto-deducciones);
   let sumatotal = ("Deducciones: ");
   let dedos = ("Obra social: ");
   let dedjub = ("Jubilación: ");
   let dedley = ("Ley 19032: ");
   let netoapagar= ("Total de sueldo neto: ");
   alert(sumatotal+" "+dedos+obrasocial+" "+dedjub+jubilacion+" "+dedley+ley19032+" "+netoapagar+sueldoneto);*/

/* práctica de STRINGS
let saludo = "Buenas tardes para todos";
let agradecimiento = "Gracias por venir el día de hoy.";
let bienvenida = (saludo+agradecimiento);
alert(bienvenida);
let saludos = (saludo+"adiosito dijo monchito");
alert(saludos);*/

/*let browserType = "Mozilla"
alert(browserType.length);
console.log(browserType.length);*/

//let text = "En seguida sentí que era extranjero. Al principio lo creí viejo; luego advertí que me había engañado su escaso pelo rubio, casi blanco, a la manera escandinava. En el curso de nuestra conversación, que no duraría una hora, supe que procedía de las Orcadas. Le señalé una silla. El hombre tardó un rato en hablar. Exhalaba melancolía, como yo ahora.";//
//alert(text.length);//
//console.log(text.charAt(450));//
//alert(text.indexOf(", a la manera escandinava"));//


// ALGORITMO//

//1 - Elegir y guardar un número al azar (entre 1 y 100) //

/* let aleatorio = Math.floor(Math.random()*101); //esto sirve para elegir un número ENTERO aleatorio entra 0 y 100//
alert("El número random es: "+aleatorio); */


//2 - Pedirle al usuario que ingrese un número //

/* let ingresenumero = parseInt (prompt("Ingrese un número de su preferencia")); */


//3 - Sumar uno en cantidad de intentos //

/* let cantintentos = 0
let sumarle = (cantintentos+1); */

/* 4 - Si el número ingresado es igual al pensado 
	Informar “Ganaste” y Terminar 
Si el número ingresado es mayor al pensado
	Informar “Es mayor”
Si el número ingresado es menor al pensado
	Informar “Es menor” */

/* if (ingresenumero===aleatorio) {

    alert("Ganaste")

}
if (ingresenumero<aleatorio){

    alert("Es menor")
}

if (ingresenumero>aleatorio){

    alert("Es mayor")
}
 */

