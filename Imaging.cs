using System.IO;
using System.Drawing;

namespace Testing
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var source = @"C:\Users\Oscar Rosner\Desktop\1.png";
            var target = @"C:\Users\Oscar Rosner\Desktop\target\1.jpg";
            var textFileWithBytes = @"C:\Users\Oscar Rosner\Desktop\bytes.txt";

            var image = new Bitmap(source);
            //Set reference
            var imageConverter = new ImageConverter();

            //image -> Byte[]
            var imageAsBytes = (byte[])imageConverter.ConvertTo(image, typeof(byte[]));

            // byte[] -> image
            // using a memory stream
            using (var stream = new MemoryStream(imageAsBytes))
            {
                var image_new = new Bitmap(stream);

                image_new.Save(target);
            }

            // can ofc also use file stream(ugly)
            using(var stream = new FileStream(textFileWithBytes,FileMode.OpenOrCreate))
            {
                stream.Write(imageAsBytes,0,imageAsBytes.Length);

                var image_new = new Bitmap(stream);
                image_new.Save(target);       
            }
        }
    }
}
