package main

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, _ := sql.Open("mysql", "id:pw@tcp(127.0.0.1:port)/dbName")


	sqlStatement := `insert into credentials values (?, ?)`
	_, err  := db.Exec(sqlStatement, a, b)

	query   := `select password_hash from credentials where userName = ?`
	rows, _ := db.Query(query, c.UserName)
	// row,_ := db.QueryRow(query, c.UserName)

	name := ""

	rows.Next()
	rows.Scan(&name)

	defer db.Close()
}
