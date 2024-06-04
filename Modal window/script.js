document.addEventListener('DOMContentLoaded', (event) => {
    // Function to open modal
    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
    }
  
    // Function to close modal
    function closeModal(modal) {
      modal.style.display = "none";
    }
  
    // Event listeners for opening modals
    const openButtons = document.querySelectorAll('.open-modal');
    openButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        openModal(modalId);
      });
    });
  
    // Event listeners for closing modals
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const modal = event.target.closest('.modal');
        closeModal(modal);
      });
    });
  
    // Close modal when clicking outside of the modal content
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          closeModal(modal);
        }
      });
    });
  });
  