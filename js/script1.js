(function pageLoad() {
    window.addEventListener('load', function () {
        const [navigationEntry] = performance.getEntriesByType('navigation');
        const loadTime = navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime;
        const footer = document.querySelector("footer");
        if (footer) {
            const p = document.createElement("p");
            p.textContent = `Время загрузки страницы: ${(loadTime / 1000).toFixed(2)} секунд`;
            footer.appendChild(p);
        }
    });

    const menuLinks = document.querySelectorAll(".menu a");

    const currentPage = document.location.pathname.split("/").pop();
    menuLinks.forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("menu__link--active");
        }
    });
})();