//Konvertieren 
int x = Int32.Parse(LblSolution.Text); //String to int
tryParse(in, out);
LblSolution.Text = Convert.ToString(x); //int to string
Int32.Parse(Console.ReadLine());//int von console lesen
/*------------------------------------------------------------------------------*/
//Listen
List<string> s1 = new List<string>();
s1.Add("...");
s1.Remove("hello");
s1.clear();//löscht ganzen Inhalt der Liste
foreach(string dummy in s1){
}

/*------------------------------------------------------------------------------*/
//Getter und Setter:
propfull + 2x tab

/*------------------------------------------------------------------------------*/
//Vererbung:
public class Kind : Vater{}

//Konstruktoren bei vererbung:
public Kind(int x, int y, int z) : base(z)//z wird an superkonstrukt. übergeben
{
//kind konstruktor
}

/*------------------------------------------------------------------------------*/
//strings vergleichen:
int result = String.Compare(string1,string2,false);
/*
0 = gleich
1 = string1 alphabetisch vor string2
-1 = string2 alphabetisch vor string1
*/
/*------------------------------------------------------------------------------*/
if (ff1 is ListObjectFather){..}


//x muss zugewiesene variable sein
public void method1(ref int x){..}
method1(ref x);

int[] arr1 = new int[3];
int[,] arr2 = new int[3, 3];


class retardedExcpetion : Exception
{
public retardedExcpetion() : base("retardedException gefangen"){}
}

/*throw Notation hinter Methoden nicht notwendig, auch catch block 
bei methodenaufruf*/

Text einlesen / schreiben

var stream = File.Open("path..");
var reader = new StreamReader(stream);
var writer = new StreamWriter(stream);
writer.close(); //wichtig!!



Delegates && Lambda:
public delegate string Del(string s); //Delegate
public static string methodForDelegate(string s)
{return s + " World";}
Del firstDelegate = x => x + " World"; // = methodForDelegate;

sealed //davon kann nicht geerbt werden
virtual //bei override wird kind Methode genutzt 

if(a is Dog) //casten
Dog newDog = a as Dog;

//Dictionaries(key, value)

IEnumerable<Person> // wird bei yield benötigt
yield return x;
//Predicate gibt immer boolean wert zurück
Predicate<Person> isOld = x => x.Age > age;


Generics, platzhalter um in main  methode beliebige datentypen nutzen zu könen
internal class someClass<T>
{
	private T[] myList = new T[5];
}

IEnumerable<string> selectedItems = auswahlListe.Where(x => x == "Oscar").
												.OrderBy(n => n);




var tuple = GivesTuples();

tuple.item1;
tuple.item2;

public Tuple<int, int> GivesTuples()
{
	Tuple.Create(3,1);
}

Event handlers:
event += WhatToDoWithEvent;

public void WhatToDoWithEvent(object sender, EventArgs e)
{
	// handle the event...
}


var enumerable = Enumerable.Range(0,1000);

var doubleArray = enumerable.Select(x => (double)x)
						    .ToArray();