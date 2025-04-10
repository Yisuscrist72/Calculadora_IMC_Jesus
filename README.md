# Calculadora del IMC

## Descripción
La **Calculadora del IMC** es una página web interactiva que permite a los usuarios calcular su Índice de Masa Corporal (IMC) en función de su peso, altura y edad. Además, valida los datos ingresados para asegurarse de que sean razonables y muestra mensajes claros en caso de errores.

## Características
- **Cálculo del IMC**: Utiliza la fórmula estándar del IMC:  
  `IMC = peso / (altura²)`  
  para determinar si el usuario está en un rango de peso saludable.
- **Validaciones**:
  - Verifica que el peso, la altura y la edad sean valores positivos.
  - Asegura que la edad esté en un rango lógico (entre 2 y 120 años).
  - Comprueba que la altura esté entre 0.5 m y 2.5 m.
  - Calcula un peso mínimo recomendado basado en la altura y la edad.
- **Clasificación del IMC**: Muestra una categoría basada en el resultado del IMC:
  - Bajo de peso
  - Peso normal
  - Sobrepeso
  - Obesidad
- **Mensajes de error claros**: Si los datos ingresados no son válidos, la página muestra mensajes específicos para guiar al usuario.

## Cómo usar la página
1. Ingresa tu **peso** en kilogramos en el campo correspondiente.
2. Ingresa tu **altura** en metros.
3. Ingresa tu **edad** en años.
4. Haz clic en el botón **"Calcular IMC"**.
5. El resultado del IMC y su clasificación aparecerán debajo del botón.

## Validaciones implementadas
- **Peso**:
  - Debe ser mayor que 0.
  - Debe ser mayor o igual al peso mínimo recomendado según la altura y la edad.
- **Altura**:
  - Debe estar entre 0.5 m y 2.5 m.
- **Edad**:
  - Debe estar entre 2 y 120 años.

## Tecnologías utilizadas
- **HTML**: Estructura de la página.
- **CSS**: Estilo y diseño de la página.
- **JavaScript**: Lógica para el cálculo del IMC y validaciones.

## Ejemplo de uso
### Entrada:
- Peso: 70 kg  
- Altura: 1.75 m  
- Edad: 25 años  

### Salida:

- IMC: 22.86 - Peso normal

## Tecnologías utilizadas
- **HTML**: Estructura de la página.
- **CSS**: Estilo y diseño de la página.
- **JavaScript**: Lógica para el cálculo del IMC y validaciones.

## Autor
Desarrollado por **Jesús López Viña**.
