window.portfolio = {
    setLanguage(language) {
        const tr = language === 'tr';
        document.documentElement.lang = tr ? 'tr' : 'en';
        const description = document.querySelector('meta[name="description"]');
        if (description) description.content = tr
            ? 'Hakan Berat Demircan — yazılım geliştirici, tasarımcı ve turizm araştırmacısı. Yazılım projeleri, grafik tasarım, sualtı videoları ve akademik çalışmalar.'
            : 'Hakan Berat Demircan — software developer, visual creator and tourism researcher. Explore software projects, design, underwater video and academic work.';
    }
};
