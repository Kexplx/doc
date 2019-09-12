import "golang.org/x/crypto/bcrypt"

bytes, _ := bcrypt.GenerateFromPassword([]byte(c.Password), bcrypt.MinCost)
err := bcrypt.CompareHashAndPassword([]byte(pwHash), []byte(c.Password))

if err != nil {
	// Passwords didn't match!
}