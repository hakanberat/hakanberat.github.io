# Hakan Berat Demircan — Personal Portfolio

**Developed: 2026**  
**Technology: .NET 10 · Blazor WebAssembly · C#**

A bilingual (English/Turkish) personal portfolio highlighting my work in **software development and information technology**, alongside professional experience, academic research, and creative projects.

**Website:** [hakanberat.github.io](https://hakanberat.github.io)  
**GitHub:** [github.com/hakanberat](https://github.com/hakanberat)

## Overview

This website is my professional portfolio and online CV. It puts software engineering work first while providing a more complete view of my background in IT, business operations, tourism research, scuba diving, and visual media.

The website is built as a **standalone Blazor WebAssembly application** and designed for deployment to **GitHub Pages** without a dedicated application server or database.

## Features

- **English and Turkish:** Language switching with the selected preference stored in the browser's `localStorage`.
- **Responsive design:** Layouts for desktop, tablet, and mobile screens, including mobile navigation.
- **Software portfolio:** Searchable and category-filtered projects, with technology tags and repository links.
- **Professional experience:** Career history, business operations, and IT-related work.
- **Education and research:** Academic degrees, doctoral research, publications, and conference contributions.
- **Creative portfolio:** Underwater videography, graphic design, and digital media work.
- **Awards and certifications:** International underwater video competition awards and professional qualifications.
- **Contact and social profiles:** Professional links and email contact without a publicly displayed phone number.
- **Automated deployment:** A GitHub Actions workflow configured to publish the site to GitHub Pages.

## Technology Stack

| Area | Technology |
| --- | --- |
| Framework | .NET 10, Blazor WebAssembly (standalone) |
| Languages | C#, Razor, HTML, CSS, JavaScript |
| UI | Blazor components, responsive CSS, Bootstrap |
| Localization | Custom `LanguageService` with English/Turkish translations |
| Browser storage | `localStorage` for language preference via JavaScript interop |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

The portfolio itself does not require a backend API or database. The software projects it showcases use their own architectures and technologies.

## Software Projects

The Projects page includes the following repositories:

| Project | Main technologies | Repository |
| --- | --- | --- |
| LifeDeck | Blazor WebAssembly, .NET 10, PWA | [LifeDeck](https://github.com/hakanberat/LifeDeck) |
| Scuba Diving Marketplace | ASP.NET Core MVC, Dapper, SQL Server | [Scuba-Diving-Marketplace](https://github.com/hakanberat/Scuba-Diving-Marketplace) |
| Dive Center Management System — Web | ASP.NET Core MVC, Dapper, SQL Server | [Dive-Center-Management-System](https://github.com/hakanberat/Dive-Center-Management-System) |
| Dive Center Management System — Desktop | WPF, MVVM, EF Core, SQLite | [Desktop-Dive-Center-Management-System](https://github.com/hakanberat/Desktop-Dive-Center-Management-System) |
| DiveHub Logbook | .NET MAUI, MVVM, SQLite | [DiveHub-Logbook-MAUI](https://github.com/hakanberat/DiveHub-Logbook-MAUI) |
| Personal Finance Tracker | .NET MAUI, SQLite | [Personal-Finance-Tracker-MAUI](https://github.com/hakanberat/Personal-Finance-Tracker-MAUI) |
| EMU SCT Mobile App (2014) | Java, Android, PHP, MySQL | [EMU-SCT-MobileApp-Legacy](https://github.com/hakanberat/EMU-SCT-MobileApp-Legacy) |
| DiveHub Android (2014) | Java, Android, SQLite | [DiveHub-Android-Legacy](https://github.com/hakanberat/DiveHub-Android-Legacy) |

Project descriptions and links are maintained within the portfolio source code rather than fetched dynamically from the GitHub API.

## Website Sections

- **Home:** Introduction, areas of expertise, career highlights, education, and selected work.
- **Projects:** Software applications, technology stacks, search, and filters.
- **Experience:** Professional career and work history.
- **Research:** Academic publications, doctoral research, and related projects.
- **Creative:** Design, video, and digital media portfolio.
- **Awards & Media:** Competition awards and professional certifications.
- **Contact:** Contact details and links to professional platforms.

## Project Structure

```text
HakanBeratDemircan/
├── Pages/                  # Portfolio pages
├── Layout/                 # Shared layout and navigation
├── Services/               # Language and application services
├── wwwroot/                # Static assets, CSS, and JavaScript
├── .github/workflows/      # GitHub Pages deployment workflow
├── App.razor
├── Program.cs
└── HakanBeratDemircan.csproj
```

## Getting Started

**Requirement:** .NET 10 SDK

Clone the repository:

```bash
git clone https://github.com/hakanberat/hakanberat.github.io.git
cd hakanberat.github.io
```

Restore dependencies and start the development server:

```bash
dotnet restore
dotnet watch run
```

Open the localhost URL shown in the terminal.

To verify a production build locally:

```bash
dotnet publish -c Release
```

## Deployment

The repository contains a GitHub Actions workflow at `.github/workflows/deploy.yml` configured to:

1. Check out the `main` branch.
2. Install the .NET 10 SDK.
3. Publish the Blazor WebAssembly application in Release mode.
4. Prepare the static website files for GitHub Pages.
5. Upload and deploy the published output.

The workflow runs on pushes to `main` and can also be started manually. GitHub Pages must be configured to use **GitHub Actions** as its deployment source.

## About the Author

**Hakan Berat Demircan, PhD**  
Software Developer · IT Professional · Researcher · Underwater Videographer

My background combines software development and information technology with business operations, academic research in tourism, scuba diving instruction, and visual content production.

- [Website](https://hakanberat.github.io)
- [GitHub](https://github.com/hakanberat)
- [LinkedIn](https://www.linkedin.com/in/hakan-berat-demircan/)
- [Behance](https://www.behance.net/hakanberatdemircan)
- [Instagram](https://www.instagram.com/hakanbdemircan/)

## Project Status

**Active development — 2026.** The site and portfolio content may continue to evolve as new projects and professional work are added.

---

© 2026 Hakan Berat Demircan.
