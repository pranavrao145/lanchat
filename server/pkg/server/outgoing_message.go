package server

type OutgoingMessage struct {
	Username string `json:"username"`
	Text     string `json:"text"`
}
