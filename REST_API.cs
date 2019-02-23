REST API

[Route("api/[controller]/")]

private static IList<User> users = new List<User>();

[HttpGet("name")]
public IActionResult GetUserByName([FromRoute] string name)
{
	if (!users.Any(x => x.userName == name))
	{
		return NotFound();
	}

	return Ok(users.FirstOrDefault(...));
}

[HttpPost]
public IActionResult CreateNewUser([FromBody]User user)
{
	if (!ModelState.IsValid)
	{
		return BadRequest(ModelState);
		// In Model: [MinLength] public string UserName{get; set;}
	}

	//add User
	return CreatedAtAction(nameof(GetUserByName), new { name = user.UserName }, user);
}


//wichtig: unames in Methode muss unames in URL heißen
https://localhost:44387/api/User?unames=Oscar3&unames=Oscar5
[HttpGet]
public IActionResult Get(string[] unames)
{
	return Ok(users.Where(X => unames.Contains(X.UserName)));
}

-----------------------------------------------------------------------------------------------------------
    class Program
    {
        private static readonly HttpClient client = new HttpClient();

        static void Main(string[] args)
        {
            var task = PostAsync();

            //Methode wartet.
            task.Wait();
        }

        static async Task PostAsync()
        {
            //body bauen
            var values = new Dictionary<string, string>
            {
                { "UserName", Guid.NewGuid().ToString() }
            };

            //body formatieren
            var content = new FormUrlEncodedContent(values);

            //hier wird zurück in die Main gesprungen wenn die response noch nicht fertig ist.
            //Wenn er zurück kommt wird die main methode gestoppt und hier her zurück gesprungen
            //es wird das Programm beendet, auch wenn noch awaits laufen, daher ist Task.WaitAll() wichtig
            var response = await client.PostAsync("http://localhost:60499/api/Users", content);

            var responseString = response.Content;
            var header = response.Headers;
        }
    }