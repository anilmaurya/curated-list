(ns api.models.list
    (:require [clojure.java.jdbc :as sql]))
  
  (def spec (or (System/getenv "DATABASE_URL")
                "postgresql://localhost:5432/curated-lists"))
  
  (defn all []
    (into [] (sql/query spec ["select * from lists order by id desc"])))
  
  (defn create [item]
    (sql/insert! spec :lists item))