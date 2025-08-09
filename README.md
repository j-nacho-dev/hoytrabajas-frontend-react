# Prueba Técnica Frontend - React + TypeScript + Vite

Aplicación frontend que consume la API del backend para mostrar productos, agregar al carrito y visualizarlo.
Construido con React, TypeScript y Vite.

## Crear el Proyecto
    El proyecto fue creado con: 

    ```bash
       npm create vite
       Framework: React
       Variante: Typescript + SWC
    ```

  ## Instalación y ejecución

  ```bash
      # Clonar el repositorio
      git clone https://github.com/j-nacho-dev/hoytrabajas-frontend-react.git

      # Instalar dependencias
      npm install

      # En modo desarrollo 
      cambiar la variable de entorno a http://localhost:3000 para que corra

      # Ejecutar en desarrollo
      npm run dev

      # Tener el backend corriendo en otra terminal, si se levanta localmente

      # Compilar y ejecutar en producción
      npm run build
      npm start
  ```


## Decisiones y enfoque
- Stack: Proyecto creado con React + Vite + TypeScript.

- Objetivo: Mantener la solución simple y directa, acorde a la consigna, sin sobre–ingeniería.

- Estructura: Árbol de archivos claro y escalable, siguiendo principios SOLID y patrones donde aportan valor.

- Utilicé Axios para hacer las llamadas a la API.

- Unificar llamadas HTTP en actions (estilo Next) para mantener separación de responsabilidades.

## Manejo de estado
- Para esta prueba opté por levantar el estado al componente padre y pasar props a los hijos. 

- En un proyecto más grande usaría Context API o Redux Toolkit para el estado del carrito (acciones globales, memoización, etc.).

## Funcion “Mejor combinación” 
- La función que calcula la mejor combinación está implementada con un enfoque simple y suficiente para el alcance de la prueba.

- Soy consciente de que una versión más óptima puede usar programación dinámica; con más tiempo, se puede refactorizar sin cambiar la interfaz pública.

## Posibles mejoras
- Extraer un hook genérico tipo useFetch o incorporar React Query para manejo de caché, loading y errores.

- Ampliar tests, tipados más estrictos y validaciones.



En resumen: prioricé claridad y simplicidad para cumplir la consigna; dejé el terreno preparado para escalar con Context/Redux, hooks reutilizables y una versión optimizada del cálculo de combinaciones cuando sea necesario.
