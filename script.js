// Page transition handler
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href*=".html"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't prevent default for links opening in new tabs/windows
            if (e.ctrlKey || e.shiftKey || e.metaKey || e.button === 1) {
                return;
            }
            
            // Prevent default navigation
            e.preventDefault();
            
            const href = this.getAttribute('href');
            const main = document.querySelector('main');
            
            // Add fade-out class to main
            if (main) {
                main.classList.add('fade-out');
            }
            
            // Navigate after animation completes (0.6s)
            setTimeout(function() {
                window.location.href = href;
            }, 600);
        });
    });
});
