var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MVCDemoDBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("FragranceShopConnectionString"));
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
