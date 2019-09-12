package main

import (
	"encoding/json"
	"io/ioutil"
)

type config struct {
	Port int    `json:"port"`
	Host string `json:"host"`
}

func main() {
	config := config{}
	
	buf, _ := ioutil.ReadFile("config.json")
	json.Unmarshal(buf, &config)

	config.Host = "changed"

	json, _ := json.Marshal(config)
	ioutil.WriteFile("config.json", json, 6044) // If exists: overrites, if not: creates new
}

// 	os.MkdirAll("myfolder/subfolder", os.ModePerm)