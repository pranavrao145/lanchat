// the message type, to represent the data coming in from the client
package server

type Message struct {
	Page    string `json:"page"`
	Content string `json:"content"`
}
