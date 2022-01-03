# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Entregables](#6-entregables)
* [7. Hacker edition](#7-hacker-edition)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)
* [10. Achicando el problema](#10-achicando-el-problema)

***

## 1. Md-Links

fritza-md-links es una librería que extrae los links que se encuentran dentro de archivos con formato markdown y procede a validar cada uno de ellos.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Instalación

Para comenzar la instalación de esta libreria necesitas primero instalar Node.js y luego ejecutar el comando:
```yaml
  npm i fritza-md-links
```

## 3. Guía de uso

Una vez que ya se instaló la libería se debe porceder a ejecutar con el siguiente comando: 

```yaml
  fritza-md-links ./path/to/file.md
```
### Opciones de argumentos

```yaml
  --validate: Este argumento devuelve href, texto, la ruta del archivo, número de línea, status y statusText
``` 