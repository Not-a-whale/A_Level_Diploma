﻿// <auto-generated />
using Fragrance_Shop.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Fragrance_Shop.Migrations
{
    [DbContext(typeof(FragranceShopDbContext))]
    [Migration("20221021230607_MySecondMigration")]
    partial class MySecondMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Fragrance_Shop.Models.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<string>("currency")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("img_links")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("inStock")
                        .HasColumnType("int");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("price")
                        .HasColumnType("float");

                    b.Property<double>("price_discount")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            id = 1,
                            currency = "€",
                            description = "Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.;Instructions for use: <br> Smile and gently swirl color over the cheekbones. For an all-over glow, lightly dust powder wherever the sun hits your face.;This is a demonstration store. This product, and its image and text, is placeholder only.",
                            img_links = "assets/img/just_dropped/1/0.jpg;assets/img/just_dropped/1/1.jpg",
                            inStock = 10,
                            name = "Bright Blush Powder",
                            price = 21.949999999999999,
                            price_discount = 32.950000000000003
                        },
                        new
                        {
                            id = 2,
                            currency = "€",
                            description = "This is a Beyond Beauty product which means it has been sourced, tried and tested and finally declared one of the most new and innovative heroes out there.;ORSEN's anti-aging Face Cream will keep your skin hydrated and firm throughout the day. When used at night, you awaken to healthy-looking and refreshed skin 24/7. It quickly absorbs into the skin to give your complexion a radiant glow. Skullcap and Purslane are anti-aging powerhouses that help calm the skin and reduce visible signs of irritation.;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/2/0.jpg;assets/img/just_dropped/2/1.jpg",
                            inStock = 10,
                            name = "Luxe Face Cream",
                            price = 30.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 3,
                            currency = "€",
                            description = "Triple Luxe formula is long lasting, natural and moisturising. Enriched with Avocado, Jojoba Oils and Vitamins C and E, it provides deep hydration while creating a barrier to lock in moisture. It also works to reduce the appearance of fine lines and wrinkles, for a smooth and supple smile.;Instructions for use: Smile and gently swirl color over the cheekbones. Apply directly to lips from the bullet or with a lip. Glide onto the heart of lips, working outward towards the corners.;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/3/0.jpg;assets/img/just_dropped/3/1.jpg;assets/img/just_dropped/3/2.jpg",
                            inStock = 10,
                            name = "Astro Space Lipstick",
                            price = 30.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 4,
                            currency = "€",
                            description = "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil ;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/4/0.jpg;assets/img/just_dropped/4/1.jpg;assets/img/just_dropped/4/2.jpg",
                            inStock = 10,
                            name = "Sera perfume",
                            price = 65.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 5,
                            currency = "€",
                            description = "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose.;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/5/0.jpg;assets/img/just_dropped/5/1.jpg;assets/img/just_dropped/5/2.jpg",
                            inStock = 10,
                            name = "Bloom No.2",
                            price = 65.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 6,
                            currency = "€",
                            description = "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/6/0.jpg;assets/img/just_dropped/6/1.jpg;assets/img/just_dropped/6/2.jpg",
                            inStock = 10,
                            name = "Oat and juniper hand cream",
                            price = 30.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 7,
                            currency = "€",
                            description = "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/7/0.jpg;assets/img/just_dropped/7/1.jpg",
                            inStock = 10,
                            name = "Base Concealer",
                            price = 20.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 8,
                            currency = "€",
                            description = "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/8/0.jpg;assets/img/just_dropped/8/1.jpg",
                            inStock = 10,
                            name = "Base Concealer",
                            price = 15.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 9,
                            currency = "€",
                            description = "Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.;Instructions for use: <br> Smile and gently swirl color over the cheekbones. For an all-over glow, lightly dust powder wherever the sun hits your face.;This is a demonstration store. This product, and its image and text, is placeholder only.",
                            img_links = "assets/img/just_dropped/9/0.jpg;assets/img/just_dropped/9/1.jpg",
                            inStock = 10,
                            name = "Bright Blush Powder",
                            price = 21.949999999999999,
                            price_discount = 32.950000000000003
                        },
                        new
                        {
                            id = 10,
                            currency = "€",
                            description = "This is a Beyond Beauty product which means it has been sourced, tried and tested and finally declared one of the most new and innovative heroes out there.;ORSEN's anti-aging Face Cream will keep your skin hydrated and firm throughout the day. When used at night, you awaken to healthy-looking and refreshed skin 24/7. It quickly absorbs into the skin to give your complexion a radiant glow. Skullcap and Purslane are anti-aging powerhouses that help calm the skin and reduce visible signs of irritation.;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/10/0.jpg;assets/img/just_dropped/10/1.jpg",
                            inStock = 10,
                            name = "Luxe Face Cream",
                            price = 30.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 11,
                            currency = "€",
                            description = "Triple Luxe formula is long lasting, natural and moisturising. Enriched with Avocado, Jojoba Oils and Vitamins C and E, it provides deep hydration while creating a barrier to lock in moisture. It also works to reduce the appearance of fine lines and wrinkles, for a smooth and supple smile.;Instructions for use: Smile and gently swirl color over the cheekbones. Apply directly to lips from the bullet or with a lip. Glide onto the heart of lips, working outward towards the corners.;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/11/0.jpg;assets/img/just_dropped/11/1.jpg;assets/img/just_dropped/11/2.jpg",
                            inStock = 10,
                            name = "Astro Space Lipstick",
                            price = 30.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 12,
                            currency = "€",
                            description = "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil ;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/12/0.jpg;assets/img/just_dropped/12/1.jpg;assets/img/just_dropped/12/2.jpg",
                            inStock = 10,
                            name = "Sera perfume",
                            price = 65.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 13,
                            currency = "€",
                            description = "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose.;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/13/0.jpg;assets/img/just_dropped/13/1.jpg;assets/img/just_dropped/13/2.jpg",
                            inStock = 10,
                            name = "Bloom No.2",
                            price = 65.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 14,
                            currency = "€",
                            description = "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/14/0.jpg;assets/img/just_dropped/14/1.jpg;assets/img/just_dropped/14/2.jpg",
                            inStock = 10,
                            name = "Oat and juniper hand cream",
                            price = 30.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 15,
                            currency = "€",
                            description = "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/15/0.jpg;assets/img/just_dropped/15/1.jpg",
                            inStock = 10,
                            name = "Base Concealer",
                            price = 20.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 16,
                            currency = "€",
                            description = "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/16/0.jpg;assets/img/just_dropped/16/1.jpg",
                            inStock = 10,
                            name = "Base Concealer",
                            price = 15.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 17,
                            currency = "€",
                            description = "Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.;Instructions for use: <br> Smile and gently swirl color over the cheekbones. For an all-over glow, lightly dust powder wherever the sun hits your face.;This is a demonstration store. This product, and its image and text, is placeholder only.",
                            img_links = "assets/img/just_dropped/17/0.jpg;assets/img/just_dropped/17/1.jpg",
                            inStock = 10,
                            name = "Bright Blush Powder",
                            price = 21.949999999999999,
                            price_discount = 32.950000000000003
                        },
                        new
                        {
                            id = 18,
                            currency = "€",
                            description = "This is a Beyond Beauty product which means it has been sourced, tried and tested and finally declared one of the most new and innovative heroes out there.;ORSEN's anti-aging Face Cream will keep your skin hydrated and firm throughout the day. When used at night, you awaken to healthy-looking and refreshed skin 24/7. It quickly absorbs into the skin to give your complexion a radiant glow. Skullcap and Purslane are anti-aging powerhouses that help calm the skin and reduce visible signs of irritation.;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/18/0.jpg;assets/img/just_dropped/18/1.jpg",
                            inStock = 10,
                            name = "Luxe Face Cream",
                            price = 30.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 19,
                            currency = "€",
                            description = "Triple Luxe formula is long lasting, natural and moisturising. Enriched with Avocado, Jojoba Oils and Vitamins C and E, it provides deep hydration while creating a barrier to lock in moisture. It also works to reduce the appearance of fine lines and wrinkles, for a smooth and supple smile.;Instructions for use: Smile and gently swirl color over the cheekbones. Apply directly to lips from the bullet or with a lip. Glide onto the heart of lips, working outward towards the corners.;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/19/0.jpg;assets/img/just_dropped/19/1.jpg;assets/img/just_dropped/19/2.jpg",
                            inStock = 10,
                            name = "Astro Space Lipstick",
                            price = 30.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 20,
                            currency = "€",
                            description = "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil ;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/20/0.jpg;assets/img/just_dropped/20/1.jpg;assets/img/just_dropped/20/2.jpg",
                            inStock = 10,
                            name = "Sera perfume",
                            price = 65.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 21,
                            currency = "€",
                            description = "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose.;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/21/0.jpg;assets/img/just_dropped/21/1.jpg;assets/img/just_dropped/21/2.jpg",
                            inStock = 10,
                            name = "Bloom No.2",
                            price = 65.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 22,
                            currency = "€",
                            description = "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. ;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/22/0.jpg;assets/img/just_dropped/22/1.jpg;assets/img/just_dropped/22/2.jpg",
                            inStock = 10,
                            name = "Oat and juniper hand cream",
                            price = 30.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 23,
                            currency = "€",
                            description = "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/23/0.jpg;assets/img/just_dropped/23/1.jpg",
                            inStock = 10,
                            name = "Base Concealer",
                            price = 20.0,
                            price_discount = 0.0
                        },
                        new
                        {
                            id = 24,
                            currency = "€",
                            description = "Dark circles, redness, and other imperfections are no match for this buildable, medium-coverage concealer. In addition to providing flawless coverage, it’s formulated with knotgrass extract to help reduce the appearance of fine lines and photoaging—so skin looks firmer, brighter, and instantly more even. The click-pen design and brush applicator make it easy to apply just the right amount exactly where you need it.;Instructions for use: <br> Spritz onto pulse point <br> 50ml/ 1.69fl.oz. <br> Made in Brazil;This is a demonstration store. This product, and its image and text, is placeholder only..",
                            img_links = "assets/img/just_dropped/24/0.jpg;assets/img/just_dropped/24/1.jpg",
                            inStock = 10,
                            name = "Base Concealer",
                            price = 15.0,
                            price_discount = 0.0
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
