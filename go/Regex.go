import "regexp"

r := regexp.MustCompile(`expression`)
matches := r.FindAllString("...", -1) //len(matches) ..