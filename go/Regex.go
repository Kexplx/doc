import "regexp"

r := regexp.MustCompile(`expression`)
matches := r.FindAllString("...", -1) //len(matches) ..

r = regexp.MustCompile(`<hello>(.*)</world>`)
k := r.FindAllStringSubmatch("<hello>oscar</world>", -1)
// k[0][0] is full match
// k[0][1] first group (oscar)