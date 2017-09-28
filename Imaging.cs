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

            var image = new Bitmap(source);
            var imageConverter = new ImageConverter();
            var imageAsBytes = (byte[])imageConverter.ConvertTo(image, typeof(byte[]));

            using (var stream = new MemoryStream(imageAsBytes))
            {
                var image_new = new Bitmap(stream);

                image_new.Save(target);
            }
        }
    }
}
