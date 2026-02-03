// Function to generate ID from heading text
function generateId(text) {
    let id = text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')      // Replace spaces with hyphens
        .replace(/-+/g, '-')       // Replace multiple hyphens with single
        .replace(/^-|-$/g, '');    // Remove leading/trailing hyphens

    // Ensure ID starts with a letter to be a valid CSS selector
    if (!id || !/^[a-z]/.test(id)) {
        id = 'heading-' + id;
    }
    return id;
}

// Function to ensure all headings have IDs
function ensureHeadingIds() {
    const content = document.querySelector('.content');
    if (!content) return;

    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const usedIds = new Set();

    headings.forEach(function (heading) {
        // If heading already has an ID from kramdown, use it but ensure uniqueness
        if (heading.id) {
            const existingId = heading.id;
            if (usedIds.has(existingId)) {
                // Duplicate ID found, generate a new one
                let counter = 1;
                let newId = existingId + '-' + counter;
                while (usedIds.has(newId) || document.getElementById(newId)) {
                    counter++;
                    newId = existingId + '-' + counter;
                }
                heading.id = newId;
                usedIds.add(newId);
            } else {
                usedIds.add(existingId);
            }
        } else {
            // Generate new ID
            let id = generateId(heading.textContent);
            // Ensure ID is unique
            let counter = 1;
            let originalId = id;
            while (usedIds.has(id) || document.getElementById(id)) {
                id = originalId + '-' + counter;
                counter++;
            }
            heading.id = id;
            usedIds.add(id);
        }
    });
}

// Calculate proper scroll offset based on header height
function calculateScrollOffset() {
    const header = document.querySelector('header');
    if (header) {
        const headerHeight = header.offsetHeight;
        return -(headerHeight + 20); // Add 20px padding
    }
    return -80; // Default offset
}

// Initialize Tocbot
document.addEventListener('DOMContentLoaded', function () {
    // Only initialize if TOC container exists
    const tocContainer = document.getElementById('toc');
    if (!tocContainer) return;

    // Check if there are headings in the content
    const content = document.querySelector('.content');
    if (!content) return;

    // Ensure all headings have unique IDs before initializing tocbot
    ensureHeadingIds();

    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
        // Hide TOC if no headings
        tocContainer.parentElement.style.display = 'none';
        return;
    }

    // Calculate scroll offset
    const scrollOffset = calculateScrollOffset();
    const offsetValue = Math.abs(scrollOffset);

    // Initialize tocbot with proper configuration
    tocbot.init({
        // Where to render the table of contents
        tocSelector: '#toc',

        // Where to grab the headings to build the table of contents
        contentSelector: '.content',

        // Which headings to grab inside of the contentSelector element
        headingSelector: 'h1, h2, h3, h4, h5, h6',

        // For headings inside relative or absolute positioned containers within content
        hasInnerContainers: false,

        // Smooth scroll offset - calculated dynamically
        scrollSmoothOffset: scrollOffset,

        // Collapse sub-headings
        collapseDepth: 0,

        // List class
        listClass: 'toc-list',

        // List item class
        listItemClass: 'toc-list-item',

        // Link class
        linkClass: 'toc-link',

        // Active link class
        activeLinkClass: 'is-active-link',

        // Ordered list
        orderedList: false,

        // Throttle timeout for scroll events
        throttleTimeout: 50,

        // Ignore selector for headings (none)
        ignoreSelector: '.no-toc'
    });

    // Custom active link detection to fix highlighting issues
    // This ensures the correct heading is highlighted after clicking a TOC link
    let isScrolling = false;
    let scrollTimeout = null;

    // Handle TOC link clicks
    tocContainer.addEventListener('click', function (e) {
        const link = e.target.closest('.toc-link');
        if (link) {
            isScrolling = true;
            // Clear any existing timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            // Wait for smooth scroll to complete, then update active link
            scrollTimeout = setTimeout(function () {
                isScrolling = false;
                updateActiveLink(offsetValue);
            }, 500); // Wait 500ms for smooth scroll to complete
        }
    }, true);

    // Function to update the active link based on scroll position
    function updateActiveLink(offset) {
        const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const viewportTop = scrollTop + offset;

        let currentHeading = null;

        // Find the heading that's currently at or just past the viewport top
        for (let i = 0; i < headings.length; i++) {
            const heading = headings[i];
            const headingTop = heading.getBoundingClientRect().top + scrollTop;

            if (headingTop <= viewportTop + 50) { // 50px threshold
                currentHeading = heading;
            } else {
                break; // Stop at first heading past the threshold
            }
        }

        // Update active link
        if (currentHeading && currentHeading.id) {
            const tocLinks = tocContainer.querySelectorAll('.toc-link');
            tocLinks.forEach(function (link) {
                const href = link.getAttribute('href');
                if (href === '#' + currentHeading.id) {
                    link.classList.add('is-active-link');
                } else {
                    link.classList.remove('is-active-link');
                }
            });
        }
    }

    // Update active link on scroll (but not during programmatic scrolling)
    let scrollTicking = false;
    window.addEventListener('scroll', function () {
        if (!scrollTicking && !isScrolling) {
            window.requestAnimationFrame(function () {
                updateActiveLink(offsetValue);
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });
});
