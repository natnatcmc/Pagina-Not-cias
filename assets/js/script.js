document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const timeElement = document.getElementById('current-time');
    const header = document.getElementById('main-header');

    function updateGreeting() {
        const now = new Date();
        const hours = now.getHours();
        let greeting;

        if (hours < 12) {
            greeting = 'Bom dia';
        } else if (hours < 18) {
            greeting = 'Boa tarde';
        } else {
            greeting = 'Boa noite';
        }

        greetingElement.textContent = `${greeting}, bem-vindo à Página de Notícias!`;
        timeElement.textContent = `Horário atual: ${now.toLocaleTimeString()}`;
    }

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    }

    updateGreeting();
    setInterval(updateGreeting, 1000);
    window.addEventListener('scroll', handleScroll);
});
