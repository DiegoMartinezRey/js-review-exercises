// - Escribe una función que reciba un número y lo devuelva sumando 2.

const addition = (num1, num2) => {
  return num1 + num2;
};
console.log(addition(3, 5));

// - Escribe una función que reciba un número y devuelva el doble de ese número.

const duplicateDouble = (num) => {
  return num * 2;
};
console.log(duplicateDouble(5));

// - Escribe una función que reciba una palabra y devuelva su longitud.

const lengthOfWord = (word) => {
  return word.length;
};
console.log(lengthOfWord("Diego"));

// - Escribe una función que reciba una palabra y la imprima en mayúsculas.

const toCapitalize = (word) => {
  return word.toUpperCase();
};
console.log(toCapitalize("diego"));

// - Escribe una función que reciba dos palabras e imprima si son iguales o no

const isTheSameWord = (word1, word2) => {
  return word1.includes(word2);
};
console.log(isTheSameWord("mora", "mora"));

// - Crea una función que tome dos números como parámetro y devuelva su multiplicación.

const multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(40, 10));

// - Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos.

const sumDigits = (num) => {
  const numToText = String(num);
  if (numToText.length === 3) {
    return (
      Number(numToText.charAt(0)) +
      Number(numToText.charAt(1)) +
      Number(numToText.charAt(2))
    );
  }
  return "El numero no es de 3 cifras";
};
console.log(sumDigits(345));

// - Crea una función llamada longestWord que reciba 2 palabras como parámetro y devuelva la palabra más larga.

const longestWord = (word1, word2) => {
  if (word1.length > word2.length) {
    return word1;
  } else if (word2.length > word1.length) {
    return word2;
  } else {
    return "Las palabras tienen el mismo largo";
  }
};
console.log(longestWord("largoo", "corto"));

// - Escribe una función llamada getfirstElement que reciba un array y devuelva la primera posición del array.

const getfirstElement = (array) => {
  if (array) {
    return array[0];
  }
  return "No se ha ingresado un array";
};
console.log(getfirstElement(["Hola", "Adios", "Gracias"]));

// - Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (array, num) => {
  if (array) {
    return array[num];
  }
  return "No se ha ingresado un array";
};
console.log(getArrayElement(["a", "b", "c"], 2));

// - Crea una función llamada shortestWord que reciba 2 palabras como parámetro y devuelva la palabra más corta.

const shortestWord = (word1, word2) => {
  if (word1.length > word2.length) {
    return word2;
  } else if (word2.length > word1.length) {
    return word1;
  } else {
    return "Las palabras tienen el mismo largo";
  }
};
console.log(shortestWord("largoo", "corto"));

// - Crea una función llamada onlyEven que reciba 3 números e imprima sólo los números pares.

const onlyEven = (num1, num2, num3) => {
  const even1 = num1 % 2 === 0 ? num1 : "";
  const even2 = num2 % 2 === 0 ? num2 : "";
  const even3 = num3 % 2 === 0 ? num3 : "";

  return even1 + " " + even2 + " " + even3;
};
console.log(onlyEven(22, 43, 46));

// - Crea una función que reciba un número y devuelva su cuadrado y su cubo. El objeto Math tiene el método pow que sirve para calcular potencias, Math.pow(base, exponente)

const powOperations = (num) => {
  return `Su cuadrado es: ${Math.pow(num, 2)} y su cubo es: ${Math.pow(
    num,
    3
  )}`;
};
console.log(powOperations(5));

// - Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.

const letterWithComas = (word) => {
  if (word && word.length === 5) {
    return `${word.charAt(0)},${word.charAt(1)},${word.charAt(2)},${word.charAt(
      3
    )},${word.charAt(4)}`;
  }
};
console.log(letterWithComas("Diego"));

// - Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

const arrayDuplicate = (array) => {
  if (array && array.length === 3) {
    array.push(array[0]);
    array.push(array[1]);
    array.push(array[2]);
    return array;
  }
  return "El array debe tener 3 elementos";
};
console.log(arrayDuplicate([1, 2, 3]));

// - Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el último valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

const modifyArray = (array) => {
  if (array && array.length) {
    array.pop();
    array.shift();
    return array;
  }
  return "El array debe ser de 5 elementos";
};
console.log(modifyArray([1, 2, 3, 4, 5]));

// - Crea una función que reciba un array con 5 letras y que imprima las 5 letras unidas en una sola palabra

const arrayToWord = (array) => {
  if (array && array.length === 5) {
    return array[0] + array[1] + array[2] + array[3] + array[4];
  }
};
console.log(arrayToWord(["d", "i", "e", "g", "o"]));

// - Crea una función llamada longestWordArray que reciba un array con 3 palabras y devuelva la palabra más larga del array.

const longestWordArray = (array) => {
  if (array && array.length === 3) {
    if (
      array[0].length > array[1].length &&
      array[1].length > array[2].length
    ) {
      return array[0];
    } else if (
      array[1].length > array[0].length &&
      array[0].length > array[2].length
    ) {
      return array[1];
    } else {
      return array[2];
    }
  }
  return "El array debe tener 3 palabras";
};
console.log(longestWordArray(["Diego", "Hola", "Yo"]));

// - Crea una función que reciba un array con 3 números y un array con 3 letras e imprima los números y las letras intercaladas, por ejemplo, si recibe ([1,2,3],['a','b','c']) deberá imprimir 1,a,2,b,3,c

const joinArrays = (array1, array2) => {
  let arrayTotal = [];
  if (array1 && array1.length === 3 && array2 && array2.length === 3) {
    arrayTotal.push(array1[0]);
    arrayTotal.push(array2[0]);
    arrayTotal.push(array1[1]);
    arrayTotal.push(array2[1]);
    arrayTotal.push(array1[2]);
    arrayTotal.push(array2[2]);
    return arrayTotal;
  }
  return "Los dos arrays deben tener 3 elementos";
};
console.log(joinArrays([1, 2, 3], ["a", "b", "c"]));

// - Crea una función que reciba un array con un número impar de elementos e imprima por consola el valor de la posición central, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir 3, pero si recibe [1,2,3] deberá imprimir 2, si el número de elementos no es impar deberá imprimir "el array no es válido"

const middleElementOfArray = (array) => {
  if (array && array.length % 2 !== 0) {
    return array[Math.floor(array.length / 2)];
  }
  return "El array no es válido";
};
console.log(middleElementOfArray([1, 2, 3, 4, 5]));

// - Crea una función que reciba una palabra de 5 letras e imprima sólo las vocales, por ejemplo, si recibe "hola" deberá imprimir "oa"

const returnVowels = (word) => {
  const vowels = "aeiouAEIOU";

  const letter1 = vowels.includes(word.charAt(0)) ? word.charAt(0) : "";
  const letter2 = vowels.includes(word.charAt(1)) ? word.charAt(1) : "";
  const letter3 = vowels.includes(word.charAt(2)) ? word.charAt(2) : "";
  const letter4 = vowels.includes(word.charAt(3)) ? word.charAt(3) : "";
  const letter5 = vowels.includes(word.charAt(4)) ? word.charAt(4) : "";

  return letter1 + letter2 + letter3 + letter4 + letter5;
};
console.log(returnVowels("hola"));
