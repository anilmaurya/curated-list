# List of Curated links using React / Clojure / Postgres

This project is inspired from https://github.com/cbegin/react-clojure-postgres-template

This project can be used as template to implement a technology stack intended to bootstrap rapid
development of a web application or web service based on React, Clojure
and Postgres.

The resulting deployable artifact is a standalone executable JAR file which
contains the complete single-page web application, including all web resources 
embedded within it.

## Features

* React 16.2.0
  * React-Router
  * React-Bootstrap
* Clojure 1.10.1
  * Ring
  * Compojure
  * Cheshire

## Prerequisites

* Java 1.8+
* Leiningen 2.6.1+
* Node 4.4.6+
* Postgres 9.3+

## Usage


### Run in development mode:

```
cd {clone_dir}/web
npm install
npm run-script start

cd {clone_dir}
lein run
```

### Build for deployment:

```
cd {clone_dir}/web
npm run-script build

cd {clone_dir}
lein ring uberjar

java -jar target/{jarfile}.jar
```
