# Markdown Links

## Índice

* [1. Md-Links](#1-Md-Links)
* [2. Instalación](#2-Instalación)
* [3. Guía de uso](#3-Guía-de-uso)
* [4. API](#4-API)
* [5. Diagrama de flujo](#5-Diagrama-de-flujo)
* [6. Librería ejecutada en terminal](#6-Librería-ejecutada-en-terminal)

***

## 1. Md-Links

md-links-fritza es una librería que extrae los links que se encuentran dentro de archivos con formato markdown y procede a validar cada uno de ellos.

## 2. Instalación

Para comenzar la instalación de esta libreria necesitas primero instalar Node.js y luego ejecutar el comando:
```yaml
  npm i md-links-fritza
```

## 3. Guía de uso

Una vez que ya se instaló la libería se debe porceder a ejecutar con el siguiente comando: 

```yaml
  md-links-fritza ./path/to/file.md
```
### Opciones de argumentos

  >--validate: Este argumento devuelve href, texto, la ruta del archivo, número de línea, status y statusText.

  >--stats: Este argumento devuelve el total de links encontrados y cuántos de ellos son únicos.

  >--validate --stats: Este argumento devuelve el total de links encontrados, cuántos de ellos son únicos y el número de links rotos.

## 4. API

```yaml
  mdLinks(dirPath, options)
``` 
* *dirPath*: una cadena que representa una ruta relativa o absoluta.

* *options*: un objeto para argumentos opcionales para la api

  * validate: un booleano para validar enlaces.
  * stats: un booleano para solicitar estadísticas de enlaces.
  * validate y stats: un booleano que solicita la validación y estadística de los enlaces. 

## 5. Diagrama de flujo

![foto1](https://github.com/Fritza02/SCL018-md-links/blob/main/imageReadme/diagrama.png?raw=true)

## 6. Librería ejecutada en terminal

![foto2](https://github.com/Fritza02/SCL018-md-links/blob/main/imageReadme/mdlinks.png?raw=true)