# PRINCIPIOS BÁSICOS
- Mantenerlo simple y rehusar lo máximo posible.
- El código debería de verse como si solo lo hubiera escrito una persona
- Escribir para escalabilidad

# ESTRUCTURA
```
NombreProyecto
	index.html
	README.md
	assets
		images
		logos
		videos
	css
		normalize.css
		styles.css
		styles.css.map
	doc
	js
		scripts.js

```
Se puede hacer uso de MyLinuxTools para crear la estructura automáticamente:
https://github.com/EleazarRC/scripts/tree/main/MyLinuxTools

# REGLAS GENERALES
- Usaremos BEM como metodología de creación de código
- Usaremos Pug y Sass con todas sus ventajas.
- Nombre de archivos en plural (Ejemplo: _botones.scss) 
- Clases en singular y minúsculas (Ejemplo: .galeria__boton) 
- Nombrar imágenes relativas a su bloque. (Ejemplo: icono-busqueda.png)

# SINTAXIS
- 1 espacio después del selector y antes de {}
- 2 espacios para indentación.
- 1 espacio después del :
- Bloques de CSS separados por 2 líneas
- Evitar abuso de anidaciones. Limite 1 nivel
- Mixins para tamaño, estilos y valores numéricos de fuentes.

# PROPIEDADES  EN LAS CLASES CSS
- Usaremos rem como medida estandar ya que root -> font-size: 62.5% = 1rem(10px)
- Propiedades del modelo de caja (display, width, height, margin, etc)
- Posicionamiento (position, left, top, right, etc)
- Tipografía (text-transform, text-decoration)
- Decoración (background-image, color, etc)
- Variables
- Mixins

# Uso de Git y GitHub

- A develop branch is created from main. (Versión final)
- A release branch is created from develop (Versión de prueba)
- Feature branches are created from develop (Desarrollo de una característica)
- When a feature is complete it is merged into the develop branch
- When the release branch is done it is merged into develop and main
- If an issue in main is detected a hotfix branch is created from main (Arreglar error)
- Once the hotfix is complete it is merged to both develop and main


 
# Sincronización PUG 
pug -w ./pugs/index.pug -o ./htmls -P
 
# Sincronización SASS 
sass --watch ./sasss/styles.scss ./csss/styles.css
 
