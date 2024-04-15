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
//? git commit -m "Titulo" -m "Descripción" 
// Mueve todos los cambios realizados de área de staging => área de repositorio.
// Se recomienda realizar commits pequeños y frecuentes, cada vez que se haya realizado un cambio significativo

//Los mensajes de los commits:
//* El titulo debe tener como máximo 50 caracteres
//* Utilizar verbos imperativos (add, delete, fix, update)
//* Dejar un salto de linea entre el titulo y la descripción
//* La descripción debe enfocarse en el que y el porque de los cambios
//* Sin puntos al final del mensaje 
// Ejemplos: Add readme.md, Delete main.js, Fix login.js, Update carousel.js

//! Convencional commits structure:
// <TYPE> [OPTIONAL SCOPE] : <DESCRIPTION>
// Ejemplo: fix(login): Fix login form, feat(navbar) : Add navbar

//* Tipos de commits:
//* Feat => Nuevas funcionalidades
//* Fix => Corregir bugs
//* Refactor => Reescribir código
//* Chore => Cambios de configuración, documentación, etc.
//* Docs => Documentación
//* Perf => Mejorar la performance del código
//* Style => Cambios de estilos, elementos del UI
//* Test => Corrección de tests
//* Build => Cambios de configuración de build, por ej vite
//* CI => Corrección de CI, github o gitlab, etc.
//* ENV => Cambios variables de entorno, cambios globales.

// El scope es para indicar en que parte va a afectar ek commit que estamos realizando

//? git log
// Nos permite ver el historial de commits realizados.

//? git push
// Nos permite enviar los cambios realizados desde el repositorio local => repositorio remoto.

//? git pull
// Nos permite traer los cambios realizados desde el repositorio remoto => repositorio local

//? git remote add origin [url del repositorio remoto]
// Permite vincular el repositorio local con el repositorio remoto.

//? git branch -M main
// Permite cambiar el nombre de la rama principal en caso de que la misma no se llame main (ej: MASTER)

//? git push -u origin main
// Permite actualizar nuestro repositorio remoto con los cambios realizados en nuestro repositorio local.
// El -u permite vincular nuestra rama MAIN local con la rama MAIN remota. //! SE UTILIZA SOLO LA PRIMERA VEZ QUE SE HACE EL PUSH

//? git clone [url del repositorio remoto a clonar]
// Permite clonar un repositorio remoto en nuestro repositorio local.
// Cuando se realiza la clonación se realiza automáticamente la vinculación entre ambos repositorios y no es necesario asociarlos.

//? git branch
// Permite ver las ramas existentes en el directorio.

//? git switch -c [Nombre de la rama]
// Permite crear una nueva rama

//? git switch [nombre de la rama a cambiar]
// Nos permite movernos hacia una rama en especifico.
// Si tenemos cambios en nuestra área de trabajo sin guardar, éstos no se van a perder, se van a transportar a la nueva rama.

//? git branch -D
// Permite borrar una rama existente. Previamente debemos posicionarnos en una rama diferente a la que sera borrada.

//? NOMBRE DE RAMAS
//* Debe ser descriptivo
//* Debe permitir identificar issues/tareas asociadas
//* EJEMPLOS => issue45-add-navbar, fix-contact-cta, test-color-brand, 59-update-user-db-model
//! SE DEBE CREAR UNA NUEVA RAMA CADA VEZ QUE SE REALICE UN CAMBIO EN EL CÓDIGO COMO => ADD, FIX, DELETE, MODIFY

// Convención de prefijos para las ramas:
//* FEATURE => Nueva funcionalidad
//* RELEASE => Nueva versión
//* BUGFIX => Corregir errores
//* HOTFIX => Corregir bugs críticos
//* DOCS => Documentación
// Ejemplos: feature/add-navbar, release/update-user-db-model, bugfix/fix-contact-cta, hotfix/59-update-user-db-model, docs/59-update-user-db-model

//? git merge
// Permite fusionar los cambios realizados en una rama secundaria con la rama principal.
// El comando se ejecuta estando posicionados en la rama principal.
// El merge se puede realizar usando diferentes estrategias:
//* FAST-FORWARD MERGE (PREDETERMINADA) => Cuando la rama secundaria a fusionar tiene actualizada la última version de la rama padre.
//* MERGE COMMIT => Se genera un nuevo commit cuando se realiza el merge, el cual contiene los cambios que se están fusionando. La rama que contiene los cambios no está actualizada con la última version de la rama padre.
//* SQUASH MERGE (git merge --squash [nombreRama]) => Es la combinación de las dos anteriores, se genera un commit con todos los cambios fusionados y el apuntador de la rama padre se moverá hacia ese nuevo commit.

//? git status
// Nos permite conocer el estado de nuestra área de trabajo y del área de repositorio.
// Nos muestra los archivos que se encuentran en el área de trabajo y los que se encuentran en el área de staging.

//? git status
// Es una versión resumida del git status

//? git config color.status.branch [color]
// Permite cambiar el color con que se visualiza la rama en la que nos encontramos cuando ejecutamos el comando git status.

//? git config color.status.added [color]
// Permite cambiar el color con que se visualiza los archivos en el área de staging cuando ejecutamos el comando git status.

//? git config color.status.untracked "[color] bold"
// Permite cambiar el color y la letra con que se visualiza los archivos en el área de trabajo cuando ejecutamos el comando git status.

//? git log
// Nos proporciona información sobre todos los commits realizados.
// Nos proporciona un ID, la persona que realizo el commit, la fecha que se hizo el commit y el mensaje.

//? git log --oneline
// Es la versión resumida del git log

//? git log -n [Número de commits]
// Nos permite ver la cantidad de commits que nosotros especifiquemos.

//? git log --format=[short, medium, full] (MEDIUM POR DEFECTO)
// Nos muestra la información en una forma corta o extendida, según las necesidades.

//? git diff
// Nos permite conocer el estado en el que se encuentran nuestros cambios. 
// Nos permite ver las diferencias que hay entre archivos, commits, ramas, etc. POR DEFECTO, nos muestra las diferencias entre área de trabajo != área de repositorio.

//* OUTPUT DEL COMANDO
// diff -- git *Archivos que se están comparando*
// index *identificadores internos de los objetos que se están comparando*
// --- *identificador para archivo en área de repositorio*
// +++ *identificador para archivo en área de trabajo*
// @@ -(Número de linea en la cual se hizo el cambio - 3, cantidad de lineas que había después del cambio) +(Número de linea donde se hizo el cambio - 3, cantidad de lineas que hay después del cambio) @@
// Nos muestra tres lineas anteriores y posteriores a partir del primer cambio.

//? git stash
// El stash seria como una cuarta área de git en la cual podemos almacenar cambios sin que sea parte del historial de versiones.
// Nos permite guardar un bloque de código y volver a utilizarlo cuando lo requiramos, sin realizar ningún commit.

//? git stash list
// Permite ver los cambios que se encuentran en el área de stashing.

//? git stash pop
// Permite reincorporar los cambios que se encuentran en el área de stashing a nuestra área de trabajo.

//? git stash save "Nombre"
// Permite asignarle un nombre a los cambios que estamos guardando.
// POR DEFECTO, siempre se guarda primero el último cambio que hicimos en nuestra área de trabajo.
// Si hiciéramos git stash pop se reincorporara los últimos cambios que guardamos, si deseamos recuperar algún cambio anterior a ese se usa...
//* git stash pop stash@{Número} => El número a elegir lo podemos ver con git stash list.

//? git stash --include-untracked
// Permite guardar en el área de stashing archivos recién creados.
//! POR DEFECTO GIT STASH NO TIENE EN CUENTA ARCHIVOS QUE HAYAN SIDO RECIENTEMENTE CREADOS.

//? git show [ID DEL COMMIT]
// Permite visualizar de forma detallada algún commit en especifico.
// Si no se especifica un commit, por defecto, muestra la información del último commit realizado.

//? GIT IGNORE
// Nos permite ignorar archivos que no creemos necesarios en el historial de versiones, como archivos .env con datos sensibles, archivos compilados, librerías, etc.
// Este archivo nos permite especificar el nombre de los archivos a ignorar, como asi también especificar patrones (Ej. *.zip => ignora todos los archivos .zip)

//? MERGE CONFLICTS
// Se producen cuando git no puede fusionar los cambios de diferentes ramas de forma automática. 
// Se puede dar cuando dos personas modificaron la misma linea de código, o cuando actualizamos la rama local con los cambios que hay en la rama remota.
// Cuando haya conflictos git nos mostrara con un mensaje:
//* <<<<<<<<<<< HEAD (Cambios en la rama principal o rama padre)
//* >>>>>>>>>>> (Cambios en la rama secundaria o rama hija)
const test1 = 'Soy el verdadero conflicto'

//? git checkout (MERGE)
// Permite resolver los conflictos al fusionar cambios de dos ramas, hay dos alternativas...
//* git checkout --ours [nombre del archivo] => Cuando queremos conservar los cambios de la rama padre.
//* git checkout --theirs [nombre del archivo] => Cuando queremos conservar los cambios de la rama secundaria/hija.
// Después se realiza un git add . y un git commit (Sin mensaje)

//? EVITAR MERGE CONFLICTS:
//* Realizar commits pequeños y frecuentes
//* Escribir mensajes descriptivos en los commits
//* Actualizar constantemente el repositorio local
//* Trabajar en ramas propias

//? git checkout
// Es uno de los comandos mas versátiles de git, ya que posee muchas funciones, como crear ramas, navegar entre archivos, ramas o commits, deshacer cambios, etc.
//* git checkout [nombre del archivo] => Deshace los cambios realizados en un archivo especifico.
//* git checkout . => Deshace los cambios realizados en todo el repositorio.

//? git revert [Hash del commit]
// Nos permite volver a los cambios realizados en un commit especifico, borrar los cambios que se hicieron a partir de ese mismo commit y generar un nuevo commit con los cambios restaurados.

//? git reset
// Nos permite volver a un estado anterior, deshaciendo uno o más commits.
// Tiene 3 alternativas... Determinan el destino de los cambios realizados posterior al commit especificado.
//* git reset --soft [Hash commit] => Deshace el commit y mantiene los cambios en el área de staging.
//* git reset (--MIXED) [Hash commit] => Por defecto. Deshace el commit y mantiene los cambios en el área de trabajo.
//* git reset --hard [Hash commit] => Por defecto. Deshace el commit y deshace los cambios.

// ======================================================================================================================================================================
//? git rebase [nombre de la rama]
// Permite manipular el origen del cual fue creada alguna rama secundaria, por ejemplo cuando necesitamos actualizar la rama secundaria con los últimos cambios de la rama padre.
// Debemos estar posicionados en la rama que vamos a manipular el punto de origen y ejecutar el código (Ej: git rebase main)
//* git rebase -i [nombre de la rama] => Permite manipular cada commit de la rama especificada, se pueden borrar, editar, fusionar, etc.

//? git commit --amend
// Permite modificar la información del último commit realizado

//? git cherry-pick [Hash del commit]
// Nos permite traer cambios que se encuentran en una rama diferente a la que estamos trabajando, es como un copiar y pegar.
// Escenario => Otra persona realiza cambios en una rama secundaria, dichos cambios los necesitamos y no se encuentran en la rama principal, hacemos uso del comando.
// Debemos estar posicionados en la rama en la que estamos trabajando, y escribir el código con el hash del commit de la rama que contiene los cambios que necesitamos.

// Rebase, amend y cherry-pick permiten manipular la la secuencia de cambios en el historial de git incluyendo su contenido, sus referencias y su meta-data. También deshacen cambios.
//! Estos comandos solo deben ser utilizados en proyectos personales, debido a que puede generar muchos conflictos al hacer merge en proyectos con otras personas.
// ======================================================================================================================================================================

//? FEATURED BASED
//* Es un workflow ideal para trabajar con git. Es un guía a seguir para trabajar en proyectos personales o en equipo y evitar incidencias.
//* Cada integrante crea una rama secundaria por cada cambio a realizar en el proyecto original
//* No se realiza el merge de una vez, se realiza un pull request, en el cual los demás integrantes del equipo pueden verificar el código en Github, antes de fusionar las ramas.

//? GIT FLOW
//* Es la metodología mas utilizada para organizar los proyectos grandes y complejos, algunas veces con ligeros cambios de acuerdo a necesidades.
// Utiliza dos ramas principales...
//* MAIN => Es la rama principal del proyecto y contiene unicamente la versión ESTABLE del código
//* DEVELOP => Es la rama de integración y contiene la última versión del código que esta en desarrollo.
// También utiliza ramas secundarias para manejar el flujo de trabajo...
//* FEATURED BRANCHES => Son ramas secundarias en las que se desarrollan nuevas características del proyecto. Se crean a partir de la rama develop y después de fusionan.
//* RELEASE BRANCHES => Son utilizadas para preparar una versión del código para su lanzamiento. Se crean a partir de la rama develop y se fusionan con la rama MAIN.
//* HOTFIX BRANCHES => Se utilizan para corregir errores CRÍTICOS en la rama principal. Se crean a partir de la rama MAIN y se fusionan con la rama MAIN Y DEVELOP una vez arreglado los errores.

//? TRUNK BASED
//* Pretende destronar a git flow, se basa en la desventaja del mismo con CI/CD, ya que al tener tantas ramas hay mucha demora en la llegada del código a la rama principal
//* Hay una única rama principal para el desarrollo del proyecto => MAIN
//* Las ramas utilizadas para el desarrollo de features son de muy corta vida => SHORT-LIVED-BRANCH. Se aplican tests automatizados y luego son fusionadas a la rama principal.
//* Sus ventajas son: Simplicidad, entrega rápida, menor complejidad y mayor visibilidad.
//* Es ideal para proyectos pequeños o grupos pequeños. Especialmente para grupos de desarrolladores con mucha experiencia, ya que al haber más libertad para agregar cambios, hay más posibilidades de provocar errores.