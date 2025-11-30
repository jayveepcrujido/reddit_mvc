//js
document.getElementById('sidebarToggle').addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        var toggleBtn = document.getElementById('sidebarToggle');
        
        sidebar.classList.toggle('collapsed');
        toggleBtn.classList.toggle('collapsed');
    });

document.addEventListener('DOMContentLoaded', function() {
        var currentPath = window.location.pathname;
        var navLinks = document.querySelectorAll('.sidebar .nav-link');
        
        navLinks.forEach(function(link) {
            // Remove active class from all links
            link.classList.remove('active');
            
            // Add active class to matching link
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
        
        // Add click event to update active state
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.forEach(function(l) {
                    l.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    });