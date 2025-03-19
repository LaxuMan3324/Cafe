// Toggle cart overlay
const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const overlay = document.getElementById('overlay');

if (cartIcon && cartOverlay && cartClose && overlay) {
    cartIcon.addEventListener('click', () => {
        cartOverlay.classList.add('active');
        overlay.style.display = 'block';
    });

    cartClose.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.style.display = 'none';
    });
}

// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

if (menuIcon && mobileMenu && mobileMenuClose) {
    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.style.display = 'block';
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.style.display = 'none';
    });
}


/*--- FAQ section ----*/
document.addEventListener('DOMContentLoaded', function() {
    // FAQ toggle functionality
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
      question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
      });
    });
    
    // Tag filtering
    const tags = document.querySelectorAll('.tag');
    const items = document.querySelectorAll('.faq-item');
    
    tags.forEach(tag => {
      tag.addEventListener('click', () => {
        // Update active tag
        tags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        
        const filter = tag.getAttribute('data-filter');
        
        // Filter items
        items.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchFaq');
    const searchBtn = document.getElementById('searchBtn');
    
    const performSearch = () => {
      const searchTerm = searchInput.value.toLowerCase();
      
      items.forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer-content').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    };
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  });