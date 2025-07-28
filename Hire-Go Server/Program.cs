var builder = WebApplication.CreateBuilder(args);

// 1. Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDevClient", policy =>
    {
        policy.WithOrigins(
        // ? Add your Dev Tunnel origin here
        )
        .AllowAnyHeader()
        .AllowAnyMethod();
        policy
    .SetIsOriginAllowed(_ => true)
    .AllowAnyHeader()
    .AllowAnyMethod();

    });
});

builder.Services.AddControllersWithViews();

var app = builder.Build();

app.UseCors(x => x
        .AllowAnyHeader()
        .AllowAnyOrigin()
        .WithOrigins("http://localhost:4200", "https://55h3jgp0-7107.inc1.devtunnels.ms")
        .AllowAnyMethod()
        .SetIsOriginAllowed(_ => true)
        .AllowCredentials()
      );

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// 2. Use CORS before Authorization
app.UseCors("AllowAngularDevClient");

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();