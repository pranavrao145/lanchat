package main

import (
	"flag"
	"log"
	"net/http"

	"github.com/pranavrao145/lanchat/server/pkg/server"
)

var addr = flag.String("addr", ":8080", "http service address")

func main() {
	flag.Parse()
	hub := server.NewHub()
	go hub.Run()
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		username, err := r.Cookie("username")

		if err != nil {
			log.Println("Unable to retrieve username from cookies. Letting client redirect to login page.")
			return
		}

		server.ServeWs(hub, username.Value, w, r)
	})
	err := http.ListenAndServe(*addr, nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
