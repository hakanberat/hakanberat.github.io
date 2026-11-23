(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observed = new WeakSet();
    let observer;
    let initialized = false;
    let currentLanguage = 'en';
    const descriptions = {
        en: {
            home: 'Hakan Berat Demircan — C# / .NET software developer. Explore Blazor, ASP.NET Core, SQL Server and .NET MAUI projects, alongside business experience and research.',
            projects: 'Explore eight web, desktop, PWA and mobile projects by Hakan Berat Demircan, with technology stacks, implementation details and GitHub repositories.',
            experience: 'The professional journey of Hakan Berat Demircan: software, IT, business operations, education, technical skills and professional training.',
            research: 'Academic publications and research by Hakan Berat Demircan on mobile applications, sustainable diving tourism and environmental stewardship.',
            creative: 'Graphic design, underwater videography and digital storytelling by Hakan Berat Demircan. Explore original work and the Dive Hub channels.',
            awards: 'Four international underwater video awards and the diving, maritime and sports qualifications of Hakan Berat Demircan.',
            contact: 'Contact Hakan Berat Demircan for software, research and creative collaborations. Email and professional profiles in English and Turkish.'
        },
        tr: {
            home: 'Hakan Berat Demircan — C# / .NET yazılım geliştirici. Web, mobil ve masaüstü projeleri; Blazor, ASP.NET Core, SQL Server ve .NET MAUI.',
            projects: 'Hakan Berat Demircan’ın sekiz yazılım projesi: web, masaüstü, PWA ve mobil uygulamalar. Kullanılan teknolojiler, uygulama özellikleri ve GitHub kaynak kodları.',
            experience: 'Hakan Berat Demircan’ın mesleki geçmişi: yazılım geliştirme, bilgi teknolojileri, işletme yönetimi, akademik eğitim ve teknik yetkinlikler.',
            research: 'Hakan Berat Demircan’ın mobil uygulamalar, sürdürülebilir dalış turizmi ve çevresel sorumluluk üzerine akademik yayınları ve saha çalışmaları.',
            creative: 'Hakan Berat Demircan’ın grafik tasarım, sualtı video çekimi ve dijital içerik çalışmaları. Fuar broşürleri, sosyal medya tasarımları ve Dive Hub videoları.',
            awards: 'Hakan Berat Demircan’ın uluslararası sualtı video yarışmalarında kazandığı dört ikincilik ödülü ile dalış, denizcilik ve spor alanlarındaki mesleki belgeleri.',
            contact: 'Yazılım geliştirme, araştırma ve yaratıcı projelerde iş birliği için Hakan Berat Demircan ile iletişime geçin. E-posta adresi ve profesyonel profiller.'
        }
    };
    function updateMetadata() {
        const route = location.pathname.split('/').filter(Boolean).pop() || 'home';
        const description = descriptions[currentLanguage][route] || descriptions[currentLanguage].home;
        for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
            const meta = document.querySelector(selector);
            if (meta) meta.content = description;
        }
        for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
            const meta = document.querySelector(selector);
            if (meta) meta.content = document.title;
        }
        const url = new URL(location.pathname, 'https://hakanberat.github.io').href;
        const canonical = document.querySelector('link[rel="canonical"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (canonical) canonical.href = url;
        if (ogUrl) ogUrl.content = url;
        const locale = document.querySelector('meta[property="og:locale"]');
        if (locale) locale.content = currentLanguage === 'tr' ? 'tr_TR' : 'en_US';
    }
    function watchReveals(root = document) {
        const elements = [...root.querySelectorAll('.reveal')];
        if (root instanceof Element && root.matches('.reveal')) elements.unshift(root);
        for (const element of elements) {
            if (observed.has(element)) continue;
            observed.add(element);
            if (reducedMotion.matches || !observer) continue;
            element.classList.add('is-pending');
            observer.observe(element);
        }
    }
    window.portfolio = {
        initialize() {
            if (!initialized) {
                initialized = true;
                if ('IntersectionObserver' in window) {
                    observer = new IntersectionObserver(entries => {
                        for (const entry of entries) {
                            if (!entry.isIntersecting) continue;
                            entry.target.classList.remove('is-pending');
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    }, { threshold: 0.04, rootMargin: '0px 0px 30px 0px' });
                }
                watchReveals();
                new MutationObserver(records => {
                    for (const record of records) {
                        for (const node of record.addedNodes) {
                            if (node instanceof Element) watchReveals(node);
                        }
                        for (const node of record.removedNodes) {
                            if (!(node instanceof Element)) continue;
                            observer?.unobserve(node);
                            node.querySelectorAll('.reveal').forEach(el => observer?.unobserve(el));
                        }
                    }
                }).observe(document.getElementById('main-content'), { childList: true, subtree: true });
                new MutationObserver(updateMetadata).observe(document.head, { childList: true, subtree: true, characterData: true });
                reducedMotion.addEventListener('change', () => {
                    if (reducedMotion.matches) document.querySelectorAll('.is-pending').forEach(el => { el.classList.remove('is-pending'); observer?.unobserve(el); });
                });
            }
            try { return localStorage.getItem('portfolio-language') === 'tr' ? 'tr' : 'en'; }
            catch { return 'en'; }
        },
        saveLanguage(language) {
            try { localStorage.setItem('portfolio-language', language); } catch { /* Storage restrictions must not disable language switching. */ }
        },
        setLanguage(language) {
            currentLanguage = language === 'tr' ? 'tr' : 'en';
            document.documentElement.lang = currentLanguage;
            updateMetadata();
            const tr = currentLanguage === 'tr';
            document.getElementById('error-message').textContent = tr ? 'Beklenmeyen bir hata oluştu.' : 'An unexpected error occurred.';
            document.querySelector('#blazor-error-ui .reload').textContent = tr ? 'Yeniden yükle' : 'Reload';
            document.querySelector('#blazor-error-ui .dismiss').setAttribute('aria-label', tr ? 'Kapat' : 'Dismiss');
        },
        onNavigate() {
            if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
            requestAnimationFrame(updateMetadata);
        },
        focusMenu() { document.getElementById('menu-toggle')?.focus(); },
        async copyEmail() {
            try { await navigator.clipboard.writeText('hakanberatdemircan@gmail.com'); return true; }
            catch { return false; }
        }
    };
})();
