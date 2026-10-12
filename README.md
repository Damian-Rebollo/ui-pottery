# 🏺 Taller de cerámica

## Ejercicio — Accesibilidad y Bootstrap

### Requisitos previos

Antes de comenzar, es necesario:

- Tener instalado **Google Chrome**.
- Instalar la extensión [**WAVE** en Google Chrome](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh).

---

### 1. Iniciar el proyecto

Antes de comenzar con el ejercicio, preparar una copia propia del repositorio y ejecutar el proyecto de forma local.

1. Realizar un **fork** del repositorio. A partir de este punto, todos los cambios se realizarán sobre la copia creada.

2. Copiar la URL del fork y clonar el repositorio en la computadora, reemplazando `URL_DEL_FORK` por esa dirección:

   ```bash
   git clone URL_DEL_FORK
   ```

3. Abrir la carpeta del proyecto en **Visual Studio Code**.

4. Abrir una terminal dentro de Visual Studio Code y ejecutar:

   ```bash
   npm install
   ```

5. Una vez finalizada la instalación, ejecutar:

   ```bash
   npm run dev
   ```

6. Abrir en **Google Chrome** la dirección local que aparece en la terminal.

---

## Accesibilidad con WAVE

### 2. Evaluar y corregir la accesibilidad 🔎

En esta parte se utilizará **WAVE** para identificar problemas de accesibilidad presentes en la página y realizar las correcciones necesarias.

1. Ejecutar **WAVE** sobre la página local abierta en Google Chrome.

2. Revisar los resultados y corregir los errores y errores de contraste. Analizar las alertas y resolver aquellas que indiquen un problema de accesibilidad.

Para realizar las modificaciones será necesario trabajar sobre los archivos `index.html` y `src/interface/style.css`.

Una vez realizadas las correcciones, ejecutar **WAVE nuevamente** sobre la página.

👀 **Resultado esperado:** los problemas identificados quedan resueltos y la página mantiene su funcionamiento.

---

## Bootstrap

### 3. Dar estilo al formulario

1. Agregar la clase `form-label` a cada `<label>` correspondiente a los siguientes campos:
   - **Nombre**
   - **Correo electrónico**
   - **Tu consulta**

   Estos `<label>` fueron incorporados durante la parte de accesibilidad.

2. Agregar la clase `form-control` a cada uno de los input de los siguientes campos:
   - **Nombre**
   - **Correo electrónico**
   - **Tu consulta**

3. Agregar las clases `btn-solid` y `theme-primary` al botón **Enviar consulta**.

👀 **Resultado esperado:** los campos y el botón tienen un estilo coherente y cada campo puede identificarse sin depender del texto del `placeholder`.

📚 **Referencias:** [controles de formulario](https://getbootstrap.com/docs/6.0/forms/form-control/) y [botones](https://getbootstrap.com/docs/6.0/components/button/).

---

### 4. Dar estilo a los radio buttons y al switch

#### Radio buttons

1. Agregar la clase `radio` a los dos radio buttons de **¿Ya asististe a uno de nuestros cursos?**.
2. Agregar la clase `form-field` a cada div que envuelve un radio button.

📚 **Referencia:** [radios](https://getbootstrap.com/docs/6.0/forms/radio/)

#### Switch para notificaciones

3. Agregar la clase `switch` al `<div>` interior que ya envuelve el checkbox de notificaciones.

4. Comprobar el funcionamiento de ambos componentes:
   - En los radio buttons, solo debe ser posible seleccionar una de las dos opciones.
   - El switch de notificaciones debe poder activarse y desactivarse.

👀 **Resultado esperado:** las opciones **Sí** y **No, sería mi primera vez** se muestran como radio buttons de Bootstrap y la opción de notificaciones se muestra como un switch. El formulario sigue registrando correctamente la selección y la preferencia elegidas.

📚 **Referencia:** [switches](https://getbootstrap.com/docs/6.0/forms/switch/).

---

### 5. Comprobar el resultado final

Para finalizar, realizar una última verificación de accesibilidad y funcionamiento.

1. Ejecutar **WAVE nuevamente** sobre la página.
2. Comprobar que los cambios realizados al aplicar las clases de Bootstrap no hayan introducido nuevos problemas de accesibilidad.

👀 **Resultado esperado:** la página conserva su funcionamiento, los componentes tienen estilo de Bootstrap y los problemas de accesibilidad identificados quedan resueltos sin introducir otros nuevos.
