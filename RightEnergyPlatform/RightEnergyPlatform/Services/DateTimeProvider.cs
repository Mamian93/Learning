using System;
using System.Xml.Linq;

namespace RightEnergyPlatform.Services
{
    public class DateTimeProvider
    {
        private XElement _context;

        public DateTimeProvider(XElement context)
        {
            _context = context;
        }

        public DateTime GetTime48Records(string v)
        {
            string start = "";
            foreach (XElement points in _context.Descendants("timeInterval"))

            {

                start += points.Element("start").Value;


            }
            var result = DateTime.ParseExact(start, "yyyy-MM-ddTHH:mmZ",
                System.Globalization.CultureInfo.InvariantCulture);

            var time = Convert.ToInt32(v) * 30;
            DateTime d = result.AddMinutes(time);
            return d;
        }

        public DateTime GetTime24Records(string v)
        {
            string start = "";
            foreach (XElement points in _context.Descendants("timeInterval"))

            {

                start += points.Element("start").Value;


            }
            var result = DateTime.ParseExact(start, "yyyy-MM-ddTHH:mmZ",
                System.Globalization.CultureInfo.InvariantCulture);

            var time = Convert.ToInt32(v) * 60;
            DateTime d = result.AddMinutes(time);
            return d;
        }
    }
}
