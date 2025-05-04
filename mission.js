const themeSelector = document.getElementById('display-select');
themeSelector.addEventListener('change', changeTheme);
    function changeTheme() {
        const body = document.body;
        const logo = document.querySelector('footer img');

        
        if (themeSelector.value === 'dark') {
            body.classList.add('dark');
            logo.src = 'byui-logo_white.png';
        } else {
            body.classList.remove('dark');
            logo.src = 'byui-logo_blue.webp';
        }
    }