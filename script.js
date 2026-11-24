document.addEventListener("DOMContentLoaded", () => {
  /* ========== Theme Toggle ========== */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
  }

  updateThemeIcon(savedTheme);

  themeToggle?.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon(next);
  });

  /* ========== Cursor Glow ========== */
  const cursorGlow = document.getElementById("cursorGlow");
  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener(
      "mousemove",
      (e) => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      },
      { passive: true },
    );
  }

  /* ========== Active Nav Link on Scroll ========== */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function updateActiveNav() {
    if (!sections.length || !navLinks.length) return;
    let current = "";
    const scrollPos = window.scrollY || document.documentElement.scrollTop || 0;

    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop - 150) {
        current = sec.getAttribute("id") || "";
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle(
        "active",
        Boolean(current) && href === `#${current}`,
      );
    });
  }

  /* ========== Smooth Scroll Progress + Topbar + BackToTop + Projects Parallax ========== */
  const backToTop = document.getElementById("backToTop");
  const topbar = document.getElementById("topbar");
  const scrollProgress = document.getElementById("scrollProgress");
  const projectCards = document.querySelectorAll(".case-card");

  let scrollTicking = false;

  function onScrollFrame() {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollProgress) {
      const progressPercent =
        docHeight > 0
          ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100))
          : 0;
      scrollProgress.style.width = `${progressPercent.toFixed(2)}%`;
    }

    topbar?.classList.toggle("scrolled", scrollY > 40);
    backToTop?.classList.toggle("show", scrollY > 400);

    const viewportHeight = window.innerHeight || 800;
    projectCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalDist = viewportHeight + rect.height;
        const ratio =
          totalDist > 0 ? (viewportHeight - rect.top) / totalDist : 0.5;
        const offset = (ratio - 0.5) * 16;
        const imgs = card.querySelectorAll(".media-grid img");
        if (imgs[0]) {
          imgs[0].style.setProperty(
            "--parallax-y",
            `${(offset * -0.7).toFixed(2)}px`,
          );
        }
        if (imgs[1]) {
          imgs[1].style.setProperty(
            "--parallax-y",
            `${(offset * 0.9).toFixed(2)}px`,
          );
        }
      }
    });

    updateActiveNav();
    scrollTicking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(onScrollFrame);
        scrollTicking = true;
      }
    },
    { passive: true },
  );

  onScrollFrame();

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ========== Mobile Drawer ========== */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger?.addEventListener("click", () => {
    if (!mobileMenu) return;
    const isOpen = mobileMenu.classList.toggle("show");
    hamburger.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  mobileMenu?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      if (hamburger) {
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
  });

  /* ========== Reveal on Scroll & Projects Stagger Animation ========== */
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".reveal")
      .forEach((el) => revealObserver.observe(el));

    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            projectObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    projectCards.forEach((card) => projectObserver.observe(card));
  } else {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
    projectCards.forEach((card) => card.classList.add("in-view"));
  }

  /* ========== Complete Project Modal Data & Scroll Lock Compensation ========== */
  const projectsData = {
    "blue-market": {
      title: "بلو مارکت (Blue Market)",
      type: "فروشگاه اینترنتی موبایل و کالای دیجیتال",
      images: ["blue-market-home.jpg", "blue-market-product.jpg"],
      desc: "فروشگاه اینترنتی مدرن و داینامیک با بیش از ۱۵۰ محصول در دسته‌بندی‌های موبایل، لپ‌تاپ و لوازم جانبی. طراحی‌شده با چیدمان استاندارد راست‌چین، جستجوی آنی، فیلتر محصولات، اسلایدر ویژه، صفحه جزئیات محصول و سبد خرید ماندگار.",
      highlights: [
        "پیاده‌سازی سیستم فیلتر و جستجوی زنده سمت کلاینت بدون وابستگی به بک‌اند",
        "مدیریت وضعیت سبد خرید و علاقه‌مندی‌ها با LocalStorage",
        "بهینه‌سازی کامل رابط کاربری برای نمایش در موبایل و دسکتاپ",
      ],
      tags: [
        "HTML5",
        "CSS3",
        "Vanilla JS",
        "Bootstrap 5",
        "Responsive Design",
        "LocalStorage",
      ],
      demo: "https://mosayb-dev.github.io/BlueMarket.ir/",
      demoLabel: "مشاهده سایت زنده",
      demoIcon: "fa-solid fa-arrow-up-left-from-circle",
      source: "https://github.com/mosayb-dev/BlueMarket.ir",
    },
    "cafenet-engineer": {
      title: "کافی‌نت مهندس (CafeNet Engineer)",
      type: "سامانه یکپارچه ربات تلگرام و پنل مدیریت کافی‌نت",
      images: ["cafenet-bot-menu.png", "cafenet-bot-services.png"],
      desc: "پلتفرم اتوماسیون خدمات آنلاین و غیرحضوری کافی‌نت. مشتریان از طریق ربات تلگرامی سفارش خود را ثبت کرده، مدارک و فیش واریزی را ارسال می‌کنند و کد رهگیری دریافت می‌نمایند؛ هم‌زمان مدیر از طریق پنل وب سفارش‌ها و تعرفه‌ها را کنترل می‌کند.",
      highlights: [
        "طراحی جریان مکالمه مرحله‌به‌مرحله در تلگرام برای ثبت سفارش و ارسال مدارک",
        "ذخیره‌سازی ساخت‌یافته سفارش‌ها، تیکت‌ها و نوبت‌های حضوری در دیتابیس SQLite",
        "اتصال ربات به بک‌اند FastAPI و داشبورد مدیریتی تحت وب",
      ],
      tags: [
        "Python",
        "Telegram Bot API",
        "FastAPI",
        "SQLite",
        "Admin Panel",
        "HTML/CSS/JS",
      ],
      demo: "https://t.me/CafeNetMohandesBot",
      demoLabel: "اجرای ربات در تلگرام",
      demoIcon: "fa-brands fa-telegram",
      source: "",
    },
  };

  const modal = document.getElementById("projectModal");
  const modalDialog = modal?.querySelector(".modal-dialog");
  const modalBody = document.getElementById("modalBody");

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modal || !modalBody) return;

    const imagesHTML = data.images
      .map(
        (src) =>
          `<img src="${src}" alt="${data.title}" loading="lazy" onerror="this.style.display='none'" />`,
      )
      .join("");

    const highlightsHTML = data.highlights
      .map((item) => `<li>${item}</li>`)
      .join("");

    const sourceBtn = data.source
      ? `<a href="${data.source}" target="_blank" rel="noopener" class="btn btn-outline btn-sm"><i class="fa-brands fa-github"></i> سورس کد</a>`
      : "";

    modalBody.innerHTML = `
      <span class="case-category">${data.type}</span>
      <h2 id="modalTitle" style="font-size:24px;margin:6px 0 12px;">${data.title}</h2>
      <div class="modal-gallery">${imagesHTML}</div>
      <p style="font-size:13.5px;color:var(--text-muted);line-height:2;margin-bottom:14px;">${data.desc}</p>
      <div class="case-highlights">
        <h4><i class="fa-solid fa-layer-group"></i> ویژگی‌ها و دستاوردهای فنی:</h4>
        <ul>${highlightsHTML}</ul>
      </div>
      <div class="tech-tags">${data.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="case-actions">
        <a href="${data.demo}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
          ${data.demoLabel} <i class="${data.demoIcon}"></i>
        </a>
        ${sourceBtn}
      </div>
    `;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingLeft = `${scrollbarWidth}px`;
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (modalDialog) {
      modalDialog.scrollTop = 0;
    }
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.body.style.paddingLeft = "";
  }

  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute("data-project");
      if (projectId) openProjectModal(projectId);
    });
  });

  document.querySelectorAll(".case-card[data-project]").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a") || e.target.closest("button")) return;
      const projectId = card.getAttribute("data-project");
      if (projectId) openProjectModal(projectId);
    });
  });

  modal?.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeProjectModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("show")) {
      closeProjectModal();
    }
  });

  /* ========== Contact Form (Real Mailto + Telegram Direct) ========== */
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const sendTelegramBtn = document.getElementById("sendTelegramBtn");

  function validateContactForm() {
    let valid = true;
    ["name", "email", "message"].forEach((id) => {
      const input = document.getElementById(id);
      const err = document.querySelector(`.err-msg[data-for="${id}"]`);
      if (!input || !err) return;
      input.classList.remove("invalid");
      err.textContent = "";

      if (!input.value.trim()) {
        input.classList.add("invalid");
        err.textContent = "لطفاً این بخش را تکمیل کنید";
        valid = false;
      }
    });
    return valid;
  }

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateContactForm()) return;

    const name = document.getElementById("name")?.value.trim() || "";
    const contact = document.getElementById("email")?.value.trim() || "";
    const subject = document.getElementById("subject")?.value || "پیام از سایت";
    const message = document.getElementById("message")?.value.trim() || "";

    const mailBody = `نام: ${name}%0D%0Aراه ارتباطی: ${contact}%0D%0Aموضوع: ${subject}%0D%0A%0D%0Aمتن پیام:%0D%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:mshanbhzhi@gmail.com?subject=${encodeURIComponent(
      `${subject} - ${name}`,
    )}&body=${mailBody}`;

    if (formStatus) {
      formStatus.textContent = "✅ برنامه ایمیل شما با متن آماده باز شد.";
    }
  });

  sendTelegramBtn?.addEventListener("click", () => {
    if (!validateContactForm()) return;

    const name = document.getElementById("name")?.value.trim() || "";
    const contact = document.getElementById("email")?.value.trim() || "";
    const subject = document.getElementById("subject")?.value || "پیام از سایت";
    const message = document.getElementById("message")?.value.trim() || "";

    const text = `سلام مصیب عزیز، از سایت رزومه پیام میدم:%0A👤 نام: ${encodeURIComponent(
      name,
    )}%0A📌 موضوع: ${encodeURIComponent(subject)}%0A📞 راه ارتباطی: ${encodeURIComponent(
      contact,
    )}%0A📝 پیام: ${encodeURIComponent(message)}`;
    window.open(
      `https://t.me/MosaybDev?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );

    if (formStatus) {
      formStatus.textContent =
        "✅ پیام شما آماده ارسال در تلگرام (@MosaybDev) شد.";
    }
  });

  /* ========== Dynamic Year ========== */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});
