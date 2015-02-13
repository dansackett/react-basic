package main

import (
	"log"
	"net/http"
	"path/filepath"
)

func main() {
	// Build Paths
	public_path, _ := filepath.Abs("public")
	index_path, _ := filepath.Abs(".")

	// Build Handlers
	static := http.FileServer(http.Dir(public_path))
	index := http.FileServer(http.Dir(index_path))

	// Build Routes
	http.Handle("/public/", http.StripPrefix("/public/", static))
	http.Handle("/", index)

	// Build Server
	log.Println("Application running on: 127.0.0.1:8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
