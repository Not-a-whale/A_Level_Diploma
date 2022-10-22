using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Fragrance_Shop.Migrations
{
    public partial class MySecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "inStock",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 1,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 2,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 3,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 4,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 5,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 6,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 7,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 8,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 9,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 10,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 11,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 12,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 13,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 14,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 15,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 16,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 17,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 18,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 19,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 20,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 21,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 22,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 23,
                column: "inStock",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "id",
                keyValue: 24,
                column: "inStock",
                value: 10);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "inStock",
                table: "Products");
        }
    }
}
