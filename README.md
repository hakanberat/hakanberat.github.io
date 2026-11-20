# Hakan Berat Demircan — Developer Portfolio

A bilingual personal portfolio built with **C#, .NET 10 and Blazor WebAssembly**, presenting my software projects, professional experience, academic research and creative work.

**Website:** [hakanberat.github.io](https://hakanberat.github.io)

## Overview

This portfolio introduces my work across web, desktop and mobile development, with a focus on the .NET ecosystem.

The website brings together project repositories, technology stacks and implementation descriptions, alongside my background in information technology, business operations and tourism research.

It is a standalone Blazor WebAssembly application configured for static hosting on GitHub Pages. No application server or database is required.

## Features

- **English and Turkish:** Switch languages without leaving the current page.
- **Remembered language preference:** The selected language is stored in browser localStorage.
- **Searchable project catalog:** Search project names, descriptions, problem statements and technologies.
- **Category filters:** Browse web, PWA, desktop, mobile and legacy projects.
- **Featured projects:** Highlighted applications on the homepage.
- **Responsive navigation:** Desktop navigation and a collapsible mobile menu.
- **Professional background:** Experience, education, research and awards.
- **Creative portfolio:** Design and underwater media work.
- **Contact links:** Email and professional/social profiles.
- **Automated deployment:** GitHub Actions workflow for GitHub Pages.

## Website Sections

| Section | Contents |
|---|---|
| Home | Developer introduction, core technologies and featured projects |
| Projects | Searchable software catalog with categories and repository links |
| Experience | Professional history and operational experience |
| Research | Publications, doctoral research and related projects |
| Creative | Design and visual media work |
| Awards & Media | Awards, qualifications and media-related background |
| Contact | Email and external profile links |

## Software Portfolio

| Project | Main Technologies | Repository |
|---|---|---|
| LifeDeck | Blazor WebAssembly, .NET 10, PWA | [LifeDeck](https://github.com/hakanberat/LifeDeck) |
| Scuba Diving Marketplace | ASP.NET Core MVC, Dapper, SQL Server | [Repository](https://github.com/hakanberat/Scuba-Diving-Marketplace) |
| Dive Center Management — Web | ASP.NET Core MVC, Dapper, SQL Server | [Repository](https://github.com/hakanberat/Dive-Center-Management-System) |
| Dive Center Management — Desktop | WPF, MVVM, EF Core, SQLite | [Repository](https://github.com/hakanberat/Desktop-Dive-Center-Management-System) |
| Dive Hub Logbook | .NET MAUI, MVVM, SQLite | [Repository](https://github.com/hakanberat/DiveHub-Logbook-MAUI) |
| Personal Finance Tracker | .NET MAUI, SQLite | [Repository](https://github.com/hakanberat/Personal-Finance-Tracker-MAUI) |
| EMU SCT — Master's Project | Java, Android, PHP, MySQL | [Repository](https://github.com/hakanberat/EMU-SCT-Android-Application-Legacy) |
| Dive Hub Android — Legacy | Java, Android, SQLite | [Repository](https://github.com/hakanberat/DiveHub-Android-Legacy) |

Project metadata is maintained in the source code rather than retrieved dynamically from GitHub. Each linked repository documents its own implementation and limitations.

## Technology Stack

| Area | Technology |
|---|---|
| Language | C# |
| Framework | .NET 10 / Blazor WebAssembly |
| Components | Razor |
| Styling | CSS, CSS isolation and bundled Bootstrap |
| Browser Integration | JavaScript interop |
| Localization | Custom English/Turkish LanguageService |
| Preference Storage | Browser localStorage |
| Hosting | GitHub Pages |
| Deployment | GitHub Actions |

## Architecture

The portfolio separates page content, shared components, project metadata and translations.

| Path | Responsibility |
|---|---|
| `Pages/` | Portfolio sections and interactive project listing |
| `Layout/MainLayout.razor` | Shared header, content area and footer |
| `Layout/NavMenu.razor` | Navigation and language controls |
| `Layout/ProjectCard.razor` | Reusable project presentation |
| `Services/ProjectCatalog.cs` | Project names, categories, technologies and repository URLs |
| `Services/LanguageService.cs` | Translations, current language and change notifications |
| `wwwroot/css/` | Shared visual styles |
| `wwwroot/js/portfolio.js` | HTML language and metadata updates |
| `wwwroot/assets/` | Portfolio images |
| `.github/workflows/deploy.yml` | GitHub Pages deployment |
| `Program.cs` | Blazor startup and service registration |

The homepage and Projects page share the same project catalog, helping keep featured projects and the full listing consistent.

## Language Support

The custom `LanguageService` provides English and Turkish translations.

When the language changes:

- Subscribed components refresh their content.
- The browser stores the preference under `portfolio-language`.
- JavaScript updates the document language and selected description metadata.

The saved preference is restored on subsequent visits.

This is client-side localization, without separate language-specific URLs.

## Getting Started

### Requirements

- .NET 10 SDK
- A browser capable of running Blazor WebAssembly
- Git

### Clone the Repository

```bash
git clone https://github.com/hakanberat/hakanberat.github.io.git
cd hakanberat.github.io
```

### Run Locally

```bash
dotnet restore
dotnet run
```

Open the local address printed in the terminal.

For development with automatic reload:

```bash
dotnet watch run
```

### Publish

```bash
dotnet publish HakanBeratDemircan.csproj -c Release -o publish
```

The deployable static website is generated in:

```text
publish/wwwroot
```

## GitHub Pages Deployment

The workflow in `.github/workflows/deploy.yml` runs on:

- Pushes to `main`
- Manual workflow dispatch

It performs the following steps:

1. Checks out the repository.
2. Installs the .NET 10 SDK.
3. Publishes the application in Release mode.
4. Adds `.nojekyll` to the output.
5. Copies `index.html` to `404.html` for client-side route fallback.
6. Uploads the static website artifact.
7. Deploys it to GitHub Pages.

GitHub Pages must be configured to use **GitHub Actions** as its deployment source.

The current HTML base path is `/`, matching the root-hosted `hakanberat.github.io` site. Hosting beneath a project subdirectory requires corresponding path changes.

## Updating Content

| Change | Main Location |
|---|---|
| Add or update a software project | `Services/ProjectCatalog.cs` |
| Update translated descriptions | `Services/LanguageService.cs` |
| Change page layout or content structure | `Pages/` |
| Change navigation | `Layout/NavMenu.razor` |
| Update shared styling | `wwwroot/css/portfolio.css` |
| Update contact destinations | `Pages/Contact.razor` |
| Update content and image provenance | `PORTFOLIO-SOURCES.md` |

After renaming a project repository, update its URL in the project catalog and any related documentation.

## Current Scope

- Portfolio content is maintained in source code.
- The site does not include a content management dashboard.
- Contact uses email and external profile links rather than a backend contact form.
- Language preference is stored locally in the browser.
- No automated test project is included.

Content and image provenance notes are available in [PORTFOLIO-SOURCES.md](PORTFOLIO-SOURCES.md).

## Author

**Hakan Berat Demircan, PhD**  
C# / .NET Software Developer

My background combines software development and information technology with business operations, tourism research and scuba diving instruction.

- [Website](https://hakanberat.github.io)
- [GitHub](https://github.com/hakanberat)
- [LinkedIn](https://www.linkedin.com/in/hakan-berat-demircan/)
- [Behance](https://www.behance.net/hakanberatdemircan)
