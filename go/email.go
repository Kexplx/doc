package main

import (
	"net/smtp"
)

func main() {
	sendMail("Betreff", "The Body")
}

func sendMail(subject, body string) {
	from := ".@gmail.com"
	pw := "."
	to := "."

	msg := "From: " + from + "\n" +
		"To: " + to + "\n" +
		"Subject:" + subject + "\n\n" +
		body

	smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", from, pw, "smtp.gmail.com"),
		from, []string{to}, []byte(msg))
}
