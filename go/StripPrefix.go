/*main.go
	dir1
		web
			index.html
			style.css
			...*/

localhost:8080/dir2
http.Handle("/dir2/", http.FileServer(http.Dir("./dir1/web/")))

// Searches: ./dir1/web/dir2 without success
// StripPrefix("/dir2/", ..) removes "dir2" so we only look in ./dir1/web/


http.Handle("/dir2/", http.StripPrefix("/dir2/", http.FileServer(http.Dir("./dir1/web"))))