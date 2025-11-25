document.addEventListener('DOMContentLoaded', () => {
    const leftSidebar = document.getElementById('left-sidebar');
    const rightSidebar = document.getElementById('right-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // Toggle Buttons
    const leftToggleBtn = document.getElementById('left-sidebar-toggle');
    const rightToggleBtn = document.getElementById('right-sidebar-toggle');

    // Close Buttons (if we add them inside sidebars, optional but good UX)
    // For now, we rely on clicking outside or the toggle button acting as close if needed, 
    // but usually a close button inside is better. Let's assume we might click overlay to close.

    function openLeftSidebar() {
        leftSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeLeftSidebar() {
        leftSidebar.classList.remove('active');
        // Only remove overlay if right sidebar is also closed
        if (!rightSidebar || !rightSidebar.classList.contains('active')) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function openRightSidebar() {
        if (rightSidebar) {
            rightSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeRightSidebar() {
        if (rightSidebar) {
            rightSidebar.classList.remove('active');
            // Only remove overlay if left sidebar is also closed
            if (!leftSidebar.classList.contains('active')) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    }

    function closeAllSidebars() {
        closeLeftSidebar();
        closeRightSidebar();
    }

    if (leftToggleBtn) {
        leftToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (leftSidebar.classList.contains('active')) {
                closeLeftSidebar();
            } else {
                openLeftSidebar();
            }
        });
    }

    if (rightToggleBtn) {
        rightToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (rightSidebar && rightSidebar.classList.contains('active')) {
                closeRightSidebar();
            } else {
                openRightSidebar();
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeAllSidebars);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllSidebars();
        }
    });
});
