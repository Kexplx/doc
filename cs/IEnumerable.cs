/*Enumerable wird in eine Klasse implementiert wenn diese selbst 
eine Collection darstellen soll über die iteriert wird. Also Eine Klasse enthält eine Liste, 
ich will aber nicht auf Class1.list auf die Liste zugreifen sondern  per Class(Siehe Z. 13)*/

 class Program
    {
        static void Main(string[] args)
        {
            MyCollection<string> collectionObject = new MyCollection<string>(2);
            collectionObject[0] = "Hello ";
            collectionObject[1] = "World";
            
            foreach(string current in collectionObject)
            {
                System.Console.Write(current);
            }
            
        }
    }
    public class MyCollection<T> : IEnumerable
    {
    	//Array, keine generelles IEnumerable Collection
        T[] actualCollection;

        public MyCollection(int size)
        {
            actualCollection = new T[size];
        }
        //allows access to Collection by MyCollection[..]
        public T this [int index]
        {
           get
            {
                return actualCollection[index];
            }
           set
            { 
               actualCollection[index] = value; 
            }
        }
        IEnumerator IEnumerable.GetEnumerator()
        {
           return actualCollection.GetEnumerator();
        }
    }

/*in oben definierter Collection kann nichts geaddet werden, da eine Klasse die nur
IEnumerable implemntiert nicht unbedingt einen Collection sein muss in die man etwas adden kann/darf
daher muss eine methode MyAdd geschrieben werden*/


	internal class Program
    {
        static void Main(string[] args)
        {
            MyCollection<string> collectionObject = new MyCollection<string>(2);

            collectionObject.MyAdd("Hello");
            collectionObject.MyAdd("World");
            
            foreach(string current in collectionObject)
            {
                System.Console.Write(current);
            }
        }
    }

    //generisches Interface um Linq funktionen nutzen zu können
    internal class MyCollection<T> : IEnumerable<T>
    {
        IEnumerable<T> actualCollection;

        public void MyAdd(T var)
        {
            T[] toAdd = new T[1];
            toAdd[0] = var;
            
            actualCollection = toAdd.Concat(actualCollection);
        }

        public MyCollection(int size)
        {
            actualCollection = new T[size];
        }


        IEnumerator IEnumerable.GetEnumerator()
        {
           return actualCollection.GetEnumerator();
        }

         IEnumerator<T> IEnumerable<T>.GetEnumerator()
        {
            return actualCollection.GetEnumerator();
        }
    }