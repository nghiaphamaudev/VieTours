// Toast function
export const showAlert = (title, message, duration = 3000) => {
  const type = title;
  title = title === 'success' ? 'Thành Công!' : 'Thất Bại!';
  const main = document.getElementById('toast_custom');
  if (main) {
    const toast = document.createElement('div');

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest('.toast__close--custom')) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: 'fas fa-check-circle',
      info: 'fas fa-info-circle',
      warning: 'fas fa-exclamation-circle',
      fail: 'fas fa-exclamation-circle',
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add('toast--custom', `toast--${type}--custom`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon--custom">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body--custom">
                        <h3 class="toast__title--custom">${title}</h3>
                        <p class="toast__msg--custom">${message}</p>
                    </div>
                    <div class="toast__close--custom">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
};