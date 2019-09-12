package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	// This wouldn't work in standard library
	// We would have to say http.HandleFunc("/student/", handler)
	// And then parse name and age out of the r.Url.Path
	r.HandleFunc("/student/{name}/{age}", getStudent)

	http.ListenAndServe(":8080", r)
}

func getStudent(w http.ResponseWriter, r *http.Request) {
	name := mux.Vars(r)["name"]
	age := mux.Vars(r)["age"]
	fmt.Fprintf(w, "The Name is: %s, age is %s", name, age)
}
