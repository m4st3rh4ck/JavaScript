/*                                   Ejercicio
Crea un objeto literal llamado cuentaBancaria con las siguientes propiedades y métodos:

saldo: una propiedad inicializada con el valor 100.
obtenerSaldo(): un método que retorna el saldo actual de la cuenta.
depositar(cantidad): un método que recibe un argumento cantidad y lo suma al saldo de la cuenta.
*/

cuentaBancaria = {

      saldo : 100,
      obtenerSaldo : function()
      {
        return this.saldo;
      },
      depositar : function(cantidad)
      {
        return this.saldo += cantidad;
      }
}

cuentaBancaria.depositar(25);
console.log(cuentaBancaria.obtenerSaldo());


cuentaBancaria.depositar(225);
console.log(cuentaBancaria.obtenerSaldo());
