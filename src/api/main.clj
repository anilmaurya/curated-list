(ns api.main
  (:require [ring.adapter.jetty :as jetty]
            [api.migration :as migration]
            [api.routes :refer [app]])
  (:gen-class))

(defn -main [& args]
  (migration/migrate)
  (jetty/run-jetty app {:port (Integer/valueOf (or (System/getenv "PORT") 8080))
                        :join? false}))
