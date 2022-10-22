namespace Fragrance_Shop.Models
{
    public class Product
    {
        public int id { get; set; }

        public string name { get; set; }

        public double price { get; set; }

        public double price_discount { get; set; }

        public string currency { get; set; }

        public int inStock { get; set; }

        public string[] description { get; set; }

        public string[] img_links { get; set; }
    }
}
