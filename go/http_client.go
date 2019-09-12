package utils

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

type student struct {
	name string
	age  int
}

func makeCall() {
	students := []student{}

	response, _ := http.Get("http://localhost:55257/api/Student")
	body, _ := ioutil.ReadAll(response.Body)
	defer response.Body.Close()

	json.Unmarshal(body, &students)
}
