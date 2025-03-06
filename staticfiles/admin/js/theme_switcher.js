document.addEventListener('DOMContentLoaded', function() {
    // Si les boutons de thème ne sont pas visibles, ajouter notre propre bouton
    setTimeout(function() {
        const existingButtons = document.querySelectorAll('.unfold-header-inner a[href*="theme"]');
        if (existingButtons.length === 0) {
            // Créer le conteneur pour le bouton
            const container = document.createElement('div');
            container.className = 'theme-toggle-container';
            container.style.cssText = 'margin-left: auto; display: flex; align-items: center;';
            
            // Créer le bouton de bascule
            const toggle = document.createElement('button');
            toggle.className = 'theme-toggle-btn';
            toggle.style.cssText = 'background: none; border: none; cursor: pointer; font-size: 24px; display: flex; align-items: center; padding: 5px 10px; margin-right: 15px;';
            
            // Déterminer le thème actuel
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            toggle.innerHTML = currentTheme === 'dark' ? '🌙' : '☀️';
            
            // Ajouter un gestionnaire d'événement pour basculer le thème
            toggle.addEventListener('click', function() {
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                window.location.href = '/unfold/theme/' + newTheme + '/';
            });
            
            // Ajouter le bouton au DOM
            container.appendChild(toggle);
            
            // Insérer le bouton dans l'en-tête
            const header = document.querySelector('.unfold-header-inner');
            if (header) {
                header.appendChild(container);
            }
        }
    }, 500); // Attendre un peu pour s'assurer que la page est chargée
});