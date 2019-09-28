w.WriteHeader() closes the header package or stream, after it is being called no more headers can be added.
Only w.Write() can be called because it is the body, not the header.
so we have two different streams body, header. The Methods Write() or WriteHeader() close their stream
thats why they can only be called once per handler.




// Header will be sent, no need for explicity w.write, w.writeheader
func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("MyHeader", "yolo")
}


// Header "MyHeader" won't be set
func handler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(404)
	w.Header().Set("MyHeader", "yolo")
}



// Error, w.Write() closes the connection
func handler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello"))
	w.WriteHeader(404)
}

