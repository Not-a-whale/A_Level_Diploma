using Fragrance_Shop.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Fragrance_Shop.Data
{
    public class FragranceShopDbContext : DbContext
    {
        public FragranceShopDbContext(DbContextOptions<FragranceShopDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product { 
                    id = 1, 
                    name = "Bright Blush Powder", 
                    price = 21.95, 
                    price_discount = 32.95, 
                    currency = "€", 
                    inStock = 10,
                    description = new string[3] { 
                        "Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.",
                        "Instructions for use: <br> Smile and gently swirl color over the cheekbones. For an all-over glow, lightly dust powder wherever the sun hits your face.",
                        "This is a demonstration store. This product, and its image and text, is placeholder only."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/1/0.jpg", "assets/img/just_dropped/1/1.jpg" }
                },
                new Product
                {
                    id = 2,
                    name = "Luxe Face Cream",
                    price = 30.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "This is a Beyond Beauty product which means it has been sourced, tried and tested and finally declared one of the most new and innovative heroes out there.",
                        "ORSEN's anti-aging Face Cream will keep your skin hydrated and firm throughout the day. When used at night, you awaken to healthy-looking and refreshed skin 24/7. It quickly absorbs into the skin to give your complexion a radiant glow. Skullcap and Purslane are anti-aging powerhouses that help calm the skin and reduce visible signs of irritation.",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/2/0.jpg", "assets/img/just_dropped/2/1.jpg" }
                },
                new Product
                {
                    id = 3,
                    name = "Astro Space Lipstick",
                    price = 30.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "Triple Luxe formula is long lasting, natural and moisturising. Enriched with Avocado, Jojoba Oils and Vitamins C and E, it provides deep hydration while creating a barrier to lock in moisture. It also works to reduce the appearance of fine lines and wrinkles, for a smooth and supple smile.",
                        "Instructions for use: Smile and gently swirl color over the cheekbones. Apply directly to lips from the bullet or with a lip. Glide onto the heart of lips, working outward towards the corners.",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/3/0.jpg", "assets/img/just_dropped/3/1.jpg", "assets/img/just_dropped/3/2.jpg" }
                },
                new Product
                {
                    id = 4,
                    name = "Sera perfume",
                    price = 65.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil ",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/4/0.jpg", "assets/img/just_dropped/4/1.jpg", "assets/img/just_dropped/4/2.jpg" }
                },
                new Product
                {
                    id = 5,
                    name = "Bloom No.2",
                    price = 65.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose.",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/5/0.jpg", "assets/img/just_dropped/5/1.jpg", "assets/img/just_dropped/5/2.jpg" }
                },
                new Product
                {
                    id = 6,
                    name = "Oat and juniper hand cream",
                    price = 30.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/6/0.jpg", "assets/img/just_dropped/6/1.jpg", "assets/img/just_dropped/6/2.jpg" }
                },
                new Product
                {
                    id = 7,
                    name = "Base Concealer",
                    price = 20.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/7/0.jpg", "assets/img/just_dropped/7/1.jpg" }
                },
                new Product
                {
                    id = 8,
                    name = "Base Concealer",
                    price = 15.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/8/0.jpg", "assets/img/just_dropped/8/1.jpg" }
                },
                                new Product
                                {
                                    id = 9,
                                    name = "Bright Blush Powder",
                                    price = 21.95,
                                    price_discount = 32.95,
                                    currency = "€",
                                    inStock = 10,
                                    description = new string[3] {
                        "Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.",
                        "Instructions for use: <br> Smile and gently swirl color over the cheekbones. For an all-over glow, lightly dust powder wherever the sun hits your face.",
                        "This is a demonstration store. This product, and its image and text, is placeholder only."
                    },
                                    img_links = new string[2] { "assets/img/just_dropped/9/0.jpg", "assets/img/just_dropped/9/1.jpg" }
                                },
                new Product
                {
                    id = 10,
                    name = "Luxe Face Cream",
                    price = 30.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "This is a Beyond Beauty product which means it has been sourced, tried and tested and finally declared one of the most new and innovative heroes out there.",
                        "ORSEN's anti-aging Face Cream will keep your skin hydrated and firm throughout the day. When used at night, you awaken to healthy-looking and refreshed skin 24/7. It quickly absorbs into the skin to give your complexion a radiant glow. Skullcap and Purslane are anti-aging powerhouses that help calm the skin and reduce visible signs of irritation.",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/10/0.jpg", "assets/img/just_dropped/10/1.jpg" }
                },
                new Product
                {
                    id = 11,
                    name = "Astro Space Lipstick",
                    price = 30.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "Triple Luxe formula is long lasting, natural and moisturising. Enriched with Avocado, Jojoba Oils and Vitamins C and E, it provides deep hydration while creating a barrier to lock in moisture. It also works to reduce the appearance of fine lines and wrinkles, for a smooth and supple smile.",
                        "Instructions for use: Smile and gently swirl color over the cheekbones. Apply directly to lips from the bullet or with a lip. Glide onto the heart of lips, working outward towards the corners.",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/11/0.jpg", "assets/img/just_dropped/11/1.jpg", "assets/img/just_dropped/11/2.jpg" }
                },
                new Product
                {
                    id = 12,
                    name = "Sera perfume",
                    price = 65.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil ",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/12/0.jpg", "assets/img/just_dropped/12/1.jpg", "assets/img/just_dropped/12/2.jpg" }
                },
                new Product
                {
                    id = 13,
                    name = "Bloom No.2",
                    price = 65.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose.",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/13/0.jpg", "assets/img/just_dropped/13/1.jpg", "assets/img/just_dropped/13/2.jpg" }
                },
                new Product
                {
                    id = 14,
                    name = "Oat and juniper hand cream",
                    price = 30.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/14/0.jpg", "assets/img/just_dropped/14/1.jpg", "assets/img/just_dropped/14/2.jpg" }
                },
                new Product
                {
                    id = 15,
                    name = "Base Concealer",
                    price = 20.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/15/0.jpg", "assets/img/just_dropped/15/1.jpg" }
                },
                new Product
                {
                    id = 16,
                    name = "Base Concealer",
                    price = 15.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/16/0.jpg", "assets/img/just_dropped/16/1.jpg" }
                },
                                new Product
                                {
                                    id = 17,
                                    name = "Bright Blush Powder",
                                    price = 21.95,
                                    price_discount = 32.95,
                                    currency = "€",
                                    inStock = 10,
                                    description = new string[3] {
                        "Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.",
                        "Instructions for use: <br> Smile and gently swirl color over the cheekbones. For an all-over glow, lightly dust powder wherever the sun hits your face.",
                        "This is a demonstration store. This product, and its image and text, is placeholder only."
                    },
                                    img_links = new string[2] { "assets/img/just_dropped/17/0.jpg", "assets/img/just_dropped/17/1.jpg" }
                                },
                new Product
                {
                    id = 18,
                    name = "Luxe Face Cream",
                    price = 30.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "This is a Beyond Beauty product which means it has been sourced, tried and tested and finally declared one of the most new and innovative heroes out there.",
                        "ORSEN's anti-aging Face Cream will keep your skin hydrated and firm throughout the day. When used at night, you awaken to healthy-looking and refreshed skin 24/7. It quickly absorbs into the skin to give your complexion a radiant glow. Skullcap and Purslane are anti-aging powerhouses that help calm the skin and reduce visible signs of irritation.",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/18/0.jpg", "assets/img/just_dropped/18/1.jpg" }
                },
                new Product
                {
                    id = 19,
                    name = "Astro Space Lipstick",
                    price = 30.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "Triple Luxe formula is long lasting, natural and moisturising. Enriched with Avocado, Jojoba Oils and Vitamins C and E, it provides deep hydration while creating a barrier to lock in moisture. It also works to reduce the appearance of fine lines and wrinkles, for a smooth and supple smile.",
                        "Instructions for use: Smile and gently swirl color over the cheekbones. Apply directly to lips from the bullet or with a lip. Glide onto the heart of lips, working outward towards the corners.",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/19/0.jpg", "assets/img/just_dropped/19/1.jpg", "assets/img/just_dropped/19/2.jpg" }
                },
                new Product
                {
                    id = 20,
                    name = "Sera perfume",
                    price = 65.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil ",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/20/0.jpg", "assets/img/just_dropped/20/1.jpg", "assets/img/just_dropped/20/2.jpg" }
                },
                new Product
                {
                    id = 21,
                    name = "Bloom No.2",
                    price = 65.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose.",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/21/0.jpg", "assets/img/just_dropped/21/1.jpg", "assets/img/just_dropped/21/2.jpg" }
                },
                new Product
                {
                    id = 22,
                    name = "Oat and juniper hand cream",
                    price = 30.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[3] { "assets/img/just_dropped/22/0.jpg", "assets/img/just_dropped/22/1.jpg", "assets/img/just_dropped/22/2.jpg" }
                },
                new Product
                {
                    id = 23,
                    name = "Base Concealer",
                    price = 20.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/23/0.jpg", "assets/img/just_dropped/23/1.jpg" }
                },
                new Product
                {
                    id = 24,
                    name = "Base Concealer",
                    price = 15.00,
                    price_discount = 0,
                    currency = "€",
                    inStock = 10,
                    description = new string[3] {
                        "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.",
                        "Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil",
                        "This is a demonstration store. This product, and its image and text, is placeholder only.."
                    },
                    img_links = new string[2] { "assets/img/just_dropped/24/0.jpg", "assets/img/just_dropped/24/1.jpg" }
                }
                );
            var converter = new ValueConverter<string[], string>(
            x => string.Join(";", x),
            x => x.Split(';', StringSplitOptions.RemoveEmptyEntries));


            modelBuilder.Entity<Product>()
                            .Property(e => e.description)
                            .HasConversion(converter);
            modelBuilder.Entity<Product>()
                            .Property(e => e.img_links)
                            .HasConversion(converter);
        }

        public DbSet<Product>? Products { get; set; }
    }
}
