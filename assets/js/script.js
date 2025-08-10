function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("dark-icon");
  const isDark = body.classList.toggle("dark-mode");

  if (isDark) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
}

function toggleLanguage() {
  const langID = document.querySelectorAll('.lang-id');
  const langEN = document.querySelectorAll('.lang-en');
  const label = document.getElementById("lang-label");

  const current = localStorage.getItem("language") || "id";
  const nextLang = current === "id" ? "en" : "id";

  langID.forEach(el => el.classList.toggle('d-none', nextLang === 'en'));
  langEN.forEach(el => el.classList.toggle('d-none', nextLang === 'id'));

  label.innerText = nextLang.toUpperCase();
  localStorage.setItem("language", nextLang);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function filterBlog(category) {
  const items = document.querySelectorAll('.blog-item');
  const buttons = document.querySelectorAll('.btn-group .btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    const itemCat = item.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });

  // Clear search when switching filter
  document.getElementById("blogSearch").value = "";
}

function searchBlog() {
  const query = document.getElementById("blogSearch").value.toLowerCase();
  const items = document.querySelectorAll('.blog-item');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// Show or hide back to top button on scroll
window.onscroll = function() {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

window.addEventListener("DOMContentLoaded", () => {
  // Load theme
  const theme = localStorage.getItem("theme");
  const body = document.body;
  const icon = document.getElementById("dark-icon");
  if (theme === "dark") {
    body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  // Load language
  const lang = localStorage.getItem("language") || "id";
  const label = document.getElementById("lang-label");
  const langID = document.querySelectorAll('.lang-id');
  const langEN = document.querySelectorAll('.lang-en');

  langID.forEach(el => el.classList.toggle('d-none', lang === 'en'));
  langEN.forEach(el => el.classList.toggle('d-none', lang === 'id'));
  label.innerText = lang.toUpperCase();
});
