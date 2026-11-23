namespace HakanBeratDemircan.Services;
// Shared factual project data for the homepage and searchable catalogue.
public static class ProjectCatalog
{
    public static IReadOnlyList<PortfolioProject> All { get; } = new List<PortfolioProject>()
    {
        new("LifeDeck", "pwa", "LifeDeckDesc", 2026, true,
            new[] { ".NET 10", "Blazor WebAssembly", "PWA", "REST API", "localStorage" },
            "https://github.com/hakanberat/LifeDeck"),

        new("Scuba Diving Marketplace", "web", "DiveMarketplaceDesc", 2026, true,
            new[] { ".NET 10", "ASP.NET Core MVC", "Dapper", "SQL Server" },
            "https://github.com/hakanberat/Scuba-Diving-Marketplace"),

        new("Dive Center Management System — Web", "web", "DiveCenterManagerDesc", 2026, true,
            new[] { ".NET 10", "ASP.NET Core MVC", "Dapper", "SQL Server" },
            "https://github.com/hakanberat/Dive-Center-Management-System"),

        new("Dive Center Management System — Desktop", "desktop", "DesktopDiveCenterDesc", 2026, false,
            new[] { ".NET 10", "WPF", "MVVM", "EF Core", "SQLite" },
            "https://github.com/hakanberat/Desktop-Dive-Center-Management-System"),

        new("DiveHub Logbook", "mobile", "DiveHubLogbookDesc", 2026, false,
            new[] { ".NET 10", ".NET MAUI", "MVVM", "SQLite" },
            "https://github.com/hakanberat/DiveHub-Logbook-MAUI"),

        new("Personal Finance Tracker", "mobile", "PersonalAccountingDesc", 2026, false,
            new[] { ".NET 10", ".NET MAUI", "SQLite" },
            "https://github.com/hakanberat/Personal-Finance-Tracker-MAUI"),

        new("EMU SCT Mobile App — Master's Project", "legacy", "EmuSctDesc", 2014, false,
            new[] { "Java", "Android", "PHP", "MySQL" },
            "https://github.com/hakanberat/EMU-SCT-MobileApp-Legacy"),

        new("DiveHub Android — Legacy", "legacy", "DiveHubLegacyDesc", 2014, false,
            new[] { "Java", "Android", "SQLite" },
            "https://github.com/hakanberat/DiveHub-Android-Legacy")
    };

}
public sealed record PortfolioProject(
        string Name,
        string Category,
        string DescriptionKey,
        int Year,
        bool Featured,
        string[] Technologies,
        string GitHubUrl);
