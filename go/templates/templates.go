package main

import (
	"log"
	"os"
	"text/template"
	"time"
)

var tpl *template.Template

var fm = template.FuncMap{
	"fd": fdateHHMMSS,
}

func fdateHHMMSS(t time.Time) string {
	return t.Format("15:04")
}

func init() {
	tpl = template.Must(template.New("").Funcs(fm).ParseGlob("*.gohtml"))
}

func main() {
	err := tpl.ExecuteTemplate(os.Stdout, "tpl.gohtml", menus)
	if err != nil {
		log.Fatalln(err)
	}
}
