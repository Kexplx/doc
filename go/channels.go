close(chan) // Sends _, false as second paramter
			// Can check for false to indicate channel close

func FanOut(In <- chan int, OutA, OutB chan int)7{
	
	for date := range In { // Receive until closed
		select {		  // Send to first non blocking
			case OutA <- data:
			case OutB <- data:
		}
	}
}