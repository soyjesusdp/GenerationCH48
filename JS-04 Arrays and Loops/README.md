# Soluciones de Ejercicios en JavaScript

Este repositorio contiene soluciones a varios ejercicios en JavaScript. Cada ejercicio está resuelto con una función que realiza una tarea específica. A continuación, se describe cada ejercicio y se incluyen ejemplos de uso.

## Entregable

Un enlace a este repositorio de GitHub con los ejercicios resueltos en JavaScript.

---

## Ejercicios

### 1. Suma de Resistencias en Serie

Calcula la suma de todas las resistencias conectadas en serie. La función toma un arreglo de valores de resistencias y devuelve la resistencia total como una cadena en "ohmios". Cada valor de resistencia se convierte en su valor absoluto para asegurarse de que todos los valores sean positivos.

**Función:** `sumResitance(resistencias)`

**Ejemplos:**
- `sumResitance([-1,5,6,3])` devuelve `"15 ohms"`
- `sumResitance([14,3.5,6])` devuelve `"23.5 ohms"`
- `sumResitance([8,15,100])` devuelve `"123 ohms"`

---

### 2. Número Dividido en Mitades

Dado un número, esta función devuelve el número dividido en dos mitades dentro de un arreglo.

**Función:** `numDiv(numero)`

**Ejemplos:**
- `numDiv(4)` devuelve `[2, 2]`
- `numDiv(10)` devuelve `[5, 5]`

---

### 3. Sociedad Secreta

Encuentra el nombre de una "sociedad secreta" tomando la primera letra de cada nombre de sus miembros, ordenando las letras y combinándolas en una cadena.

**Función:** `secretName(nombres)`

**Ejemplos:**
- `secretName(["Esperanza", "Franco", "Nia"])` devuelve `'EFN'`
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` devuelve `'CJMPRR'`
- `secretName(['Harry', 'Ron', 'Hermione'])` devuelve `'HHR'`

---

### 4. Estado en Línea

Muestra el estado en línea de una lista de usuarios. La función toma un arreglo de nombres de usuario y devuelve una cadena indicando quiénes están en línea.

**Función:** `onlineStatus(usuarios)`

**Ejemplo:**
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` devuelve `'mockIng99, J0eyPunch y 1 más en línea'`

---

### 5. Arreglo de Múltiplos

Crea un arreglo que contiene múltiplos de un número dado hasta una longitud especificada.

**Función:** `arrayMultiplos(numero, longitud)`

**Ejemplos:**
- `arrayMultiplos(2, 10)` devuelve `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`
- `arrayMultiplos(17, 6)` devuelve `[17, 34, 51, 68, 85, 102]`

---

### 6. Dominancia Positiva en un Arreglo

Determina si un arreglo es "positivamente dominante", es decir, si contiene más elementos positivos que negativos.

**Función:** `positiveDom(arreglo)`

**Ejemplo:**
- `positiveDom([-1, -3, -5, 4, 6767])` devuelve `false`

---

### 7. Promedio Antípoda

Esta función toma un arreglo, lo divide en dos partes iguales (eliminando el elemento del medio si es necesario), suma cada número de la primera parte con el número correspondiente en la segunda parte invertida y luego divide cada suma entre 2 para crear un nuevo arreglo.

**Función:** `antipodalAverage(arreglo)`

**Ejemplo:**
- Para el arreglo `[1, 2, 3, 5, 22, 6]`, `antipodalAverage([1,2,3,5,22,6])` devuelve `[3.5, 12, 4]`

---

## Instrucciones para Empezar

Para ejecutar estas funciones, clona el repositorio y usa Node.js o tu entorno de JavaScript preferido. Importa cada función desde el archivo y utiliza los ejemplos proporcionados para probarlas.

---

## Contribuir

Si tienes ideas para mejorar o agregar nuevos ejercicios, siéntete libre de hacer un fork del repositorio y enviar un pull request. ¡Las contribuciones son bienvenidas!

---

## Licencia

Este proyecto está bajo la licencia MIT.