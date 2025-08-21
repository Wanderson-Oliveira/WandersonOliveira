        // Toggle de tema claro/escuro
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Verificar preferência do usuário
        if (localStorage.getItem('theme') === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        }
        
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            }
        });

        // Função para rolar até a seção de contato
        function scrollToContact() {
            document.querySelector('.contact-cards').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Adicionar lazy loading para imagens que não estão na viewport inicial
        document.addEventListener("DOMContentLoaded", function() {
            const images = document.querySelectorAll('img');
            
            if ('loading' in HTMLImageElement.prototype) {
                // Navegador suporta lazy loading nativo
                images.forEach(img => {
                    if (!img.getAttribute('loading')) {
                        img.setAttribute('loading', 'lazy');
                    }
                });
            }
        });