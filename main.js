//? git init
// Se crea el repositorio local a través de la creación de un directorio .git oculto que contiene la configuración y el historial.

//? git add
// Se mueven los cambios realizados del area de trabajo => area de staging. Se puede realizar de varias formas:

//* git add main.js => Mueve los cambios realizados en un archivo especifico.
//* git add *.js => Mueve los cambios realizados en archivos con una extensión especifica.
//* git add . => Mueve todos los archivos del directorio al area del staging.
//* git add -A => Mueve todos los cambios realizados en el directorio al area del staging.
//* git add -u => Mueve los archivos modificados o eliminados al area de staging, pero no incluye archivos recientemente creados.

//? git reset
// Devuelve los cambios realizados de area de staging => area de trabajo.

//? git commit -m ""
// Mueve todos los cambios realizados de área de staging => área de repositorio.