/* Das Factory Pattern dient zum information Hiding, der Client soll nicht mehr selbst die 
Klassen erstellen sondern lässt dieses eine Factory machen. */

using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections;
using System.IO;
using System.Threading;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            SpinnerFactory myFactory = new SpinnerFactory();
            ISpinner mySpinner = myFactory.createSpinner(SpinnerType.ASpinner);   
        }
    }

    public class SpinnerFactory
    {
        public ISpinner createSpinner(SpinnerType type)
        {
            if(type == SpinnerType.ASpinner)
            {
                return new ASpinner();
            }
            if(type == SpinnerType.BSpinner)
            {
                return new BSpinner();
            }
            if(type == SpinnerType.CSpinner)
            {
                return new CSpinner();
            }
            return null;        
        }
    }

    public interface ISpinner
    {
        void spin();
    }

    public class ASpinner : ISpinner
    {
        void ISpinner.spin()
        {
            System.Console.WriteLine("Im Spinning!");
        }
    }
    public class BSpinner : ISpinner
    {
        void ISpinner.spin()
        {
            System.Console.WriteLine("Im Spinning!");
        }
    }

    public class CSpinner : ISpinner
    {
        void ISpinner.spin()
        {
            System.Console.WriteLine("Im Spinning!");
        }
    }

    public enum SpinnerType
    {
        ASpinner,
        BSpinner,
        CSpinner
    }
}