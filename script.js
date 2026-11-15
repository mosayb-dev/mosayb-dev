/* ========== Preloader ========== */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader")?.classList.add("hidden");
  }, 600);
});

/* ========== Year ========== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ========== Back to top ========== */
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 400);
  document
    .getElementById("topbar")
    .classList.toggle("scrolled", window.scrollY > 50);
  updateActiveNav();
});
backToTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

/* ========== Mobile menu ========== */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  hamburger.innerHTML = mobileMenu.classList.contains("show")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }),
);

/* ========== Theme toggle ========== */
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
themeToggle.innerHTML =
  savedTheme === "dark"
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeToggle.innerHTML =
    next === "dark"
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
});

/* ========== Active nav on scroll ========== */
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
}

/* ========== Typing effect ========== */
const typedEl = document.getElementById("typed");
const words = [
  "دانشجوی مهندسی کامپیوتر",
  "توسعه‌دهنده وب",
  "علاقه‌مند به UI/UX",
  "عاشق یادگیری",
];
let wordIndex = 0,
  charIndex = 0,
  deleting = false;
function typeLoop() {
  const word = words[wordIndex];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ++charIndex);
    if (charIndex === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    typedEl.textContent = word.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 90);
}
typeLoop();

/* ========== Reveal on scroll ========== */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

/* ========== Skill bars ========== */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        skillObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.4 },
);
document
  .querySelectorAll(".skill-bar")
  .forEach((el) => skillObserver.observe(el));

/* ========== Counter animation ========== */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const target = +e.target.dataset.count;
        let n = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(() => {
          n += step;
          if (n >= target) {
            n = target;
            clearInterval(timer);
          }
          e.target.textContent = n + (target === 100 ? "%" : "+");
        }, 30);
        counterObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.6 },
);
document
  .querySelectorAll("[data-count]")
  .forEach((el) => counterObserver.observe(el));

/* ========== Project modal ========== */
const projectsData = {
  "blue-market": {
    title: "بلو مارکت",
    type: "فروشگاه اینترنتی موبایل",
    // ✅ مسیر عکس بدون پوشه
    img: "blue-market-1.jpg",
    desc: "طراحی و توسعه یک فروشگاه آنلاین موبایل با تمرکز بر نمایش محصولات، تجربه خرید ساده، پشتیبانی کامل از زبان فارسی و چیدمان راست‌چین. رابط کاربری واکنش‌گرا برای موبایل، تبلت و دسکتاپ. از Bootstrap 5 و طراحی مدرن استفاده شده است.",
    tags: ["HTML / CSS", "JavaScript", "Bootstrap 5", "RTL", "Responsive"],
    demo: "https://mosayb-dev.github.io/BlueMarket.ir/",
    source: "https://github.com/mosayb-dev/BlueMarket.ir",
  },
};

const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll(".project-card[data-project]").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("a")) return; // don't open if clicking link
    const id = card.dataset.project;
    const data = projectsData[id];
    if (!data) return;
    modalBody.innerHTML = `
      <h2>${data.title}</h2>
      <div class="modal-type">${data.type}</div>
      <img src="${data.img}" alt="${data.title}" onerror="this.style.display='none'">
      <p>${data.desc}</p>
      <div class="project-tags">${data.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="project-actions">
        <a class="project-btn project-btn-primary" href="${data.demo}" target="_blank" rel="noopener">مشاهده دمو <i class="fa-solid fa-arrow-up-left-from-circle"></i></a>
        <a class="project-btn project-btn-ghost" href="${data.source}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> سورس کد</a>
      </div>
    `;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

modal.querySelectorAll("[data-close]").forEach((el) => {
  el.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
});

/* ========== Contact form ========== */
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  const fields = ["name", "email", "subject", "message"];

  fields.forEach((id) => {
    const input = document.getElementById(id);
    const err = document.querySelector(`.error[data-for="${id}"]`);
    input.classList.remove("invalid");
    err.textContent = "";

    if (!input.value.trim()) {
      input.classList.add("invalid");
      err.textContent = "این فیلد الزامی است";
      valid = false;
    } else if (
      id === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
    ) {
      input.classList.add("invalid");
      err.textContent = "ایمیل معتبر وارد کنید";
      valid = false;
    }
  });

  if (!valid) return;

  // شبیه‌سازی ارسال — برای اتصال واقعی از EmailJS یا Formspree استفاده کن
  status.textContent = "در حال ارسال...";
  status.className = "form-status";

  setTimeout(() => {
    status.textContent = "✅ پیام شما با موفقیت ارسال شد. به زودی پاسخ می‌دهم.";
    status.className = "form-status success";
    form.reset();

    setTimeout(() => {
      status.textContent = "";
      status.className = "form-status";
    }, 5000);
  }, 1200);
});
