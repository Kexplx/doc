var students []Student

func main() {
	corsObj := handlers.AllowedOrigins([]string{"*"})
	router := mux.NewRouter()
	students = append([]Student{Student{FirstName: "oscar"}, Student{FirstName: " Max"}, Student{FirstName: "Jonas"}}, students...)

	router.HandleFunc("/api/students", getStudents).Methods("GET")
	router.HandleFunc("/api/students", addStudent).Methods("POST")

	http.ListenAndServe(":8080", handlers.CORS(corsObj)(router))
}

func addStudent(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	s := Student{}

	q := r.URL.Query()
	firstname := q["sadds"]

	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&s)

	//if bad
	http.Error(w, "I dont want this student because...", http.StatusBadRequest)

	//else
	//add to list..
	w.WriteHeader(http.StatusOK)
}

func getStudents(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(students)
}