// Presentation JavaScript - VW Lemon inspired minimalistic presentation

class Presentation {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = 10;
    this.notesVisible = false;
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.updateSlideCounter();
    this.updateNavButtons();
  }
  
  bindEvents() {
    // Navigation buttons
    document.getElementById('prevBtn').addEventListener('click', () => {
      this.previousSlide();
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
      this.nextSlide();
    });
    
    // Speaker notes toggle
    document.getElementById('notesToggle').addEventListener('click', () => {
      this.toggleNotesOff();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      this.handleKeydown(e);
    });
    
    // Click anywhere to advance (except on notes and navigation)
    document.addEventListener('click', (e) => {
      // Don't advance if clicking on navigation, notes toggle, or speaker notes
      if (!e.target.closest('.navigation') && 
          !e.target.closest('.notes-toggle') && 
          !e.target.closest('.speaker-notes')) {
        this.nextSlide();
      }
    });
  }
  
  handleKeydown(e) {
    switch(e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
        e.preventDefault();
        this.nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        this.previousSlide();
        break;
      case 'Home':
        e.preventDefault();
        this.goToSlide(1);
        break;
      case 'End':
        e.preventDefault();
        this.goToSlide(this.totalSlides);
        break;
      case 'n':
      case 'N':
        e.preventDefault();
        this.toggleNotes();
        break;
      case 'Escape':
        if (this.notesVisible) {
          this.toggleNotes();
        }
        break;
    }
  }
  
  nextSlide() {
    if (this.currentSlide < this.totalSlides) {
      this.goToSlide(this.currentSlide + 1);
    }
  }
  
  previousSlide() {
    if (this.currentSlide > 1) {
      this.goToSlide(this.currentSlide - 1);
    }
  }
  
  goToSlide(slideNumber) {
    if (slideNumber < 1 || slideNumber > this.totalSlides) {
      return;
    }
    
    // Hide current slide
    const currentSlideEl = document.querySelector('.slide.active');
    if (currentSlideEl) {
      currentSlideEl.classList.remove('active');
    }
    
    // Show new slide
    const newSlideEl = document.querySelector(`[data-slide="${slideNumber}"]`);
    if (newSlideEl) {
      newSlideEl.classList.add('active');
    }
    
    this.currentSlide = slideNumber;
    this.updateSlideCounter();
    this.updateNavButtons();
    
    // Hide notes when changing slides
    if (this.notesVisible) {
      this.hideNotes();
    }
  }
  
  updateSlideCounter() {
    document.getElementById('currentSlide').textContent = this.currentSlide;
    document.getElementById('totalSlides').textContent = this.totalSlides;
  }
  
  updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = this.currentSlide === 1;
    nextBtn.disabled = this.currentSlide === this.totalSlides;
  }
  
  toggleNotes() {
    if (this.notesVisible) {
      this.hideNotes();
    } else {
      this.showNotes();
    }
  }
  
  showNotes() {
    const currentSlideEl = document.querySelector('.slide.active');
    const notesEl = currentSlideEl.querySelector('.speaker-notes');
    const toggleBtn = document.getElementById('notesToggle');
    
    if (notesEl) {
      notesEl.classList.add('visible');
      toggleBtn.classList.add('active');
      this.notesVisible = true;
    }
  }
  
  hideNotes() {
    const notesEl = document.querySelector('.speaker-notes.visible');
    const toggleBtn = document.getElementById('notesToggle');
    
    if (notesEl) {
      notesEl.classList.remove('visible');
      toggleBtn.classList.remove('active');
      this.notesVisible = false;
    }
  }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Presentation();
});

// Prevent context menu on right click for cleaner presentation experience
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// Add smooth transitions with CSS class toggling
document.addEventListener('DOMContentLoaded', () => {
  // Add transition classes after initial load to prevent flash
  setTimeout(() => {
    document.body.classList.add('transitions-enabled');
  }, 100);
});