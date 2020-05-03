(ns api.routes
  (:require [clojure.pprint :refer [pprint]]
            [ring.middleware.nested-params :refer :all]
            [ring.middleware.keyword-params :refer :all]
            [ring.middleware.params :refer :all]
            [ring.middleware.json :refer :all]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.util.response :refer :all]
            [compojure.core :refer [routes context rfn GET POST]]
            [compojure.route :as route]
            [compojure.response :as response]
            [cheshire.core :as cheshire]
            [ring.util.response :as ring]
            [api.models.list :as list]
            [clojure.string :as str])
  (:gen-class))


(defn wrap-utf8 [handler]
  (fn [req]
    (content-type (handler req) "application/json")))

(defn static-resource [body]
  (rfn request
    (-> (response/render body request)
        (status 200))))

(defn json [form]
  (-> form
    cheshire/encode
    response
    (content-type "application/json; charset=utf-8")))

(defn create
  [list]
  (println "In create")
  (println list)
  (list/create list)
  (json {:created "success"}))

(defn app-routes []
  (routes
    (GET "/lists" [] (json {:data (list/all) }))
    (POST "/lists" {list :params} (create list))
    (route/resources "/")
    (static-resource (ring/resource-response "app/index.html" {:root "public"}))))

(def app
  (-> (app-routes)
      (wrap-keyword-params)
      (wrap-nested-params)
      (wrap-params)
      (wrap-json-body {:keywords? true})
      (wrap-json-params)
      (wrap-cors :access-control-allow-origin [#".*"]
        :access-control-allow-methods [:get :post])
      (wrap-json-response)))
