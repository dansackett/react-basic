package main

import (
	"log"
	"net/http"
	"path"
)

func FileServer(s string) http.Handler {
	path := http.Dir(path.Join("examples", s))
	return http.StripPrefix("/"+s+"/", http.FileServer(path))
}

func main() {
	// Index Route
	http.Handle("/", http.FileServer(http.Dir("")))

	// Example Routes
	http.Handle("/timer/", FileServer("timer"))
	http.Handle("/nav_menu/", FileServer("nav_menu"))
	http.Handle("/search/", FileServer("search"))
	http.Handle("/todo/", FileServer("todo"))

	// Build Server
	log.Println("Application running on: 127.0.0.1:8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
