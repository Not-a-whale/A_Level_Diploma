using Fragrance_Shop.Data;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FragranceShopDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("FragranceShopDbContext"));
});

var app = builder.Build();
app.UseCors(builder =>
  builder.WithOrigins("http://localhost:3000")
  .AllowAnyHeader()
  .AllowCredentials()
  .AllowAnyMethod());

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
