(defproject curated-list "0.1.0-SNAPSHOT"
  :description "List of curated links"
  :url "https://github.com/anilmaurya/curated-list"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/java.jdbc "0.7.11"]
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [ring/ring-core "1.8.0"]
                 [ring/ring-jetty-adapter "1.8.0"]
                 [ring/ring-json "0.5.0"]
                 [ring-cors "0.1.13"]
                 [compojure "1.6.1"]
                 [cheshire "5.10.0"]]

  :ring {:handler api.routes/app
         :port 8080}

  :main api.main

  :profiles {:dev {:dependencies [[ring/ring-mock "0.4.0"]]}
             :uberjar {:aot :all}}

  :plugins [[lein-ring "0.12.5"]])
