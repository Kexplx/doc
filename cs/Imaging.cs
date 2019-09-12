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
            
            //Edit existing file
            var tempPath = Path.GetTempFileName();
            var originalPath = @"C:\Users\rosnero\Desktop\2.png";

            using (var bitmap = new Bitmap(originalPath))
            {
                for (int i = 0; i < bitmap.Height; i++)
                {
                    for (int j = 0; j < bitmap.Width; j++)
                    {
                        bitmap.SetPixel(j, i, Color.Yellow);
                    }
                }

                bitmap.Save(tempPath);
            }

            File.Delete(originalPath);
            File.Move(tempPath, originalPath);
        }
    }
}
