document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const body = document.body;

  // Check theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
    applyTheme(savedTheme);
  } else {
    body.classList.add('light-theme');
  }

  themeToggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Save in localStorage
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', currentTheme);

    applyTheme(currentTheme);
  });

  // Apply theme
  function applyTheme(theme) {
    if (theme === 'dark-theme') {
      document.documentElement.style.setProperty('--background-color', '#001410');
      document.documentElement.style.setProperty('--text-color', '#F7F7F7');
      document.documentElement.style.setProperty('--card-background-color', '#005C49');
    } else {
      document.documentElement.style.setProperty('--background-color', '#E9FFE8');
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--card-background-color', '#FAFFB0');
    }
  }
});

