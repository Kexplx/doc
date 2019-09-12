package main

import (
	"reflect"
)

type student struct {
	fname string
}

func main() {
	s := student{}

	if reflect.TypeOf(s) == reflect.TypeOf(student{}) {
		// Same type
	}
}
