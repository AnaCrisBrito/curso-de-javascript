//operadores aritméticos, atribuição, relacionais, lógicos e ternário.

//aritméticos: +, -, /, *, %, **.

/*
Aritméticos:
5 + 2 = 7
5 - 2 = 3
5 * 2 = 10
5 / 2 = 2.5
5 % 2 = 1
5 ** 2 = 25

*/


/*
Ordem de Precedência dos operadores:

() parenteses
** potenciação
* / % multiplicação, divisão, resto de divisão
+ - adição, subtração

*/


/*
Atribuição simples:

var a = 5 + 3 = 8
var b = a % 5 = 3
var c = 5 * b ** 2 = 45
var d = 10 - a / 2 = 6
var e = 6 * 2 / d = 2
var f = b % e + 4 / e = 3

*/   

/*
Auto-atribuição:

var n = 3
n = n + 4 / n += 4
n = n - 5 / n -= 5
n = n * 4 / n *= 4
n = n / 2 / n /= 2
n = n ** 2 / n **= 2
n = n % 5 / n %= 5

*/

/*
Incremento e decremento:
var x = 5
x = x + 1 / x++ incremento
x = x - 1 / x-- decremento
*/

/*
Relacionais (valor booleano/ true or false): 

> - maior
< - menor
>= - maior quer
<= - menor quer
== - igual
!= - diferente

5 > 2 - true
7 < 4 - false
8 >= 8 - true
9 <= 7 - false
5 == 5 - true
4 != 4 - false

*/

/*
Identidade:

5 == 5 - true
5 == '5' - true / valor em string (o JavaScript diz que são iguais)
5 === '5' - false / os três === está verificando o tipo, o primeiro 5 é number e o segundo string. Por isso o false.

!== desigual

*/

/*
valores Lógicos:

! - negação
&& - e (conjunção)
|| - ou (disjunção)

! - true = false
false = true

&& - true e true = true
treu e false = false
false e true = false
false e false = false

|| - true e treu = true
true e false = true
false e true = true
false e false = false
*/

/*
Ordem de precedência dos operadores:

aritmético
relacionais
lógicos
   ! negação
    && e
    || ou
*/

/*
ternário:
?
:

teste ? true : false
média >= 7 ? "Aprovado" : "Reprovado"

*/