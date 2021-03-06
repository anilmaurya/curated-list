# List of Curated links using Clojure / React / Postgres

This project is inspired from https://github.com/cbegin/react-clojure-postgres-template

This project can be used as template to implement a technology stack intended to bootstrap rapid
development of a web application or web service based on Clojure, React 
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
lein uberjar

java -jar target/{jarfile}.jar
```

### Deploy on heroku

heroku plugins:install java

heroku create

heroku deploy:jar target/curated-list-0.1.0-SNAPSHOT-standalone.jar
