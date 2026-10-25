window.portfolio = {
    setLanguage(language) {
        const tr = language === 'tr';
        document.documentElement.lang = tr ? 'tr' : 'en';
        const description = tr
            ? 'Hakan Berat Demircan — C# / .NET yazılım geliştirici. Blazor, ASP.NET Core, SQL Server ve .NET MAUI projeleri, işletme deneyimi ve araştırmalar.'
            : "Hakan Berat Demircan — C# / .NET software developer. Explore Blazor, ASP.NET Core, SQL Server and .NET MAUI projects, alongside business experience and research.";
        for (const selector of ['meta[name="description"]', 'meta[property="og:description"]']) {
            const meta = document.querySelector(selector);
            if (meta) meta.content = description;
        }
        const title = document.querySelector('meta[property="og:title"]');
        if (title) title.content = tr
            ? 'Hakan Berat Demircan | C# / .NET Yazılım Geliştirici'
            : 'Hakan Berat Demircan | C# / .NET Software Developer';
    }
};
