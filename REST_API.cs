REST API

[Route("api/[controller]/")]

private static IList<User> users = new List<User>();

//client IP Adress, in Constructor des Controllers packen?
var ip = Request.HttpContext.Connection.RemoteIpAddress;

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

------------------------------------------------------------------------------------------------------------
	
	class Program
    {
        static void Main(string[] args)
        {
            var client = new HttpClient();

            var getTask = GetUser(client);
            getTask.Wait();

            var content = getTask.Result.content;
            var responseCode = getTask.Result.statusCode;
        }

        static async Task<(string content, HttpStatusCode statusCode)> GetUser(HttpClient client)
        {
			//hier wird zurück in die Main gesprungen wenn die response noch nicht fertig ist.
            //Wenn er zurück kommt wird die main methode gestoppt und hier her zurück gesprungen
            //es wird das Programm beendet, auch wenn noch awaits laufen, daher ist Task.WaitAll() wichtig
            var response = await client.GetAsync("https://localhost:44332/api/Users");
            var content = await response.Content.ReadAsStringAsync();
            var responseCode = response.StatusCode;

            //Json to User Object
            var user = JsonConvert.DeserializeObject<User>(content);

            //Json to xml
            var xmlDoc = JsonConvert.DeserializeXmlNode(content, "User");

            return (xmlDoc.InnerXml, responseCode);
        }
    }