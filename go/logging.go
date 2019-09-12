func main() {
	var (
		file, _ = os.OpenFile("myApp.log", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0644)
		logger  = log.New(file, "", log.LstdFlags) //2017-09-13 08:14:22 Hello World
	)

	// we created a pointer in line 4
	// no '&'' needed when passing it to the function
	util.MyExportedLoggingMethod(logger)
}


/...
MyExportedLoggingMethod(logger *net.Logger){
	logger.Print("..")
}