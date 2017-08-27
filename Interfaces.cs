Interfaces:

//Generic Interface
//Rückgabetypen <T> werden in Klasse die diese Implementiert festgelegt

public interface ISoundMaker<T>
{
	T makeSound();
}

//generic T wird in der nutzenden Klasse konkret definiert
public class Animal : ICalculator<string> 
string ISoundMaker<string, int>.makeSound()
{
	return "Raww";
}
/*Enumerable wird in eine Klasse implementiert wenn diese selbst 
eine Collection darstellen soll.
Also Eine Klasse enthält eine Liste, 
ich will aber nicht auf Class1.list auf die Liste zugreifen sondern 
per Class*/

