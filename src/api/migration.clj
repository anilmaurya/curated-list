(ns api.migration
    (:require [clojure.java.jdbc :as sql]
              [api.models.list :as list]))
  
  (defn migrated? []
    (-> (sql/query list/spec
                   [(str "select count(*) from information_schema.tables "
                         "where table_name='lists'")])
        first :count pos?))
  
  (defn migrate []
    (print "In Migrate...")
    (when (not (migrated?))
      (print "Creating database structure...") (flush)
      (sql/db-do-commands list/spec
                          (sql/create-table-ddl
                           :lists
                           [[:id :serial "PRIMARY KEY"]
                           [:title :varchar "NOT NULL"]
                           [:link :varchar "NOT NULL"]
                           [:category :varchar "NOT NULL"]
                           [:created_at :timestamp
                            "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]]))
      (println " done")))