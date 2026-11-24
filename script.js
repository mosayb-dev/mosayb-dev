document.addEventListener("DOMContentLoaded", () => {
  /* ========== 6-Language Dictionary (FA default, EN, AR, UR, FR, IT) ========== */
  const translations = {
    fa: {
      dir: "rtl",
      label: "FA",
      nav_about: "درباره من",
      nav_projects: "پروژه‌ها",
      nav_workflow: "فرآیند کار",
      nav_stack: "تکنولوژی‌ها",
      nav_contact: "تماس",
      nav_channel: "کانال تلگرام",
      hero_badge: "آماده همکاری در پروژه‌های وب و اتوماسیون تلگرام",
      hero_title_prefix: "تبدیل ایده‌ها به",
      hero_phrases: [
        "محصولات دیجیتال سریع، مدرن و واقعی",
        "فروشگاه‌های اینترنتی پرسرعت و واکنش‌گرا",
        "ربات‌های هوشمند تلگرام و سیستم‌های خودکار",
      ],
      hero_subtitle:
        "من <strong>مصیب شنبه زهی</strong> هستم؛ دانشجوی مهندسی کامپیوتر و توسعه‌دهنده وب و ربات‌های تلگرامی. تمرکز من بر طراحی رابط‌های کاربری واکنش‌گرا، فروشگاه‌های آنلاین و سیستم‌های هوشمند اتوماسیون با پایتون است.",
      hero_cta_projects: "مشاهده نمونه‌کارها",
      hero_cta_contact: "شروع گفتگو و سفارش",
      hero_cta_resume: "دانلود رزومه PDF",
      metric_exp: "سال تجربه عملی",
      metric_resp: "طراحی واکنش‌گرا",
      metric_auto: "اتوماسیون هوشمند",
      about_title: "چرا همکاری با MosaybDev؟",
      about_subtitle:
        "ترکیب نگاه مهندسی، کدنویسی تمیز و تمرکز بر نتیجه واقعی برای کسب‌وکار شما",
      bio_heading: "درباره من و رویکرد توسعه",
      bio_text:
        "دانشجوی کارشناسی مهندسی کامپیوتر در دانشگاه سراوان هستم. در پروژه‌هایم به جای پیچیدگی‌های غیرضروری، روی سرعت بارگذاری، تجربه کاربری ساده و کدنویسی قابل نگهداری تمرکز می‌کنم؛ از طراحی فروشگاه‌های اینترنتی راست‌چین گرفته تا ساخت ربات‌های تلگرامی متصل به پنل مدیریت.",
      hl_clean: "کدنویسی تمیز و ماژولار",
      hl_mobile: "سازگاری کامل موبایل و دسکتاپ",
      hl_support: "پشتیبانی و توسعه مرحله‌به‌مرحله",
      tg_heading: "کانال و ارتباط مستقیم",
      tg_text:
        "آخرین نمونه‌کارها، نکات برنامه‌نویسی وب و ربات‌های تلگرامی را در کانال رسمی دنبال کنید یا مستقیم پیام دهید.",
      tg_cta: "عضویت در @MosaybDev",
      edu_badge: "در حال تحصیل (۱۴۰۱ – ۱۴۰۶)",
      edu_title: "کارشناسی مهندسی کامپیوتر",
      edu_uni:
        "دانشگاه سراوان — تمرکز بر توسعه نرم‌افزار، پایگاه داده و سیستم‌های تحت وب",
      lang_fa: "فارسی (مسلط)",
      lang_bal: "بلوچی (مادری)",
      lang_en: "انگلیسی (فنی)",
      srv_web_title: "طراحی و توسعه وب‌سایت و فروشگاه",
      srv_web_desc:
        "پیاده‌سازی سایت‌های شرکتی، شخصی و فروشگاهی سریع با HTML5، CSS3، JavaScript و رابط کاربری مدرن.",
      srv_bot_title: "ساخت ربات‌های تلگرام و اتوماسیون",
      srv_bot_desc:
        "توسعه ربات‌های فروشگاهی، ثبت سفارش، مدیریتی و اتصال به API و دیتابیس با Python.",
      projects_title: "پروژه‌های زنده و نمونه‌کارها",
      projects_subtitle:
        "پروژه‌ها را بر اساس حوزه دسته‌بندی کنید یا بدون ترک صفحه پیش‌نمایش زنده را ببینید",
      filter_all: "همه پروژه‌ها (۲)",
      filter_web: "وب و فروشگاه اینترنتی",
      filter_bot: "ربات تلگرام و اتوماسیون",
      p1_cat: "فروشگاه اینترنتی موبایل و کالای دیجیتال",
      p1_status: "● نسخه آنلاین فعال",
      p1_title: "بلو مارکت (Blue Market)",
      p1_desc:
        "یک پلتفرم فروشگاهی مدرن و کاملاً راست‌چین با بیش از ۱۵۰ محصول داینامیک. این پروژه با تمرکز بر تجربه خرید سریع، دسته‌بندی هوشمند، جستجوی لحظه‌ای و صفحه جزئیات محصول حرفه‌ای پیاده‌سازی شده است.",
      p_highlights: "چالش‌های فنی و راه‌حل‌ها:",
      p1_h1:
        "<strong>جستجو و فیلتر آنی سمت کلاینت:</strong> پیاده‌سازی موتور فیلتر چندگانه و سرچ زنده با Vanilla JavaScript بدون نیاز به رفرش صفحه.",
      p1_h2:
        "<strong>مدیریت وضعیت سبد خرید:</strong> ذخیره‌سازی پایدار اقلام سبد خرید و تنظیمات کاربر در LocalStorage.",
      p1_h3:
        "<strong>طراحی Mobile-First:</strong> بهینه‌سازی چیدمان کارت‌های محصول و منوها برای نمایش بی‌نقص در موبایل و دسکتاپ.",
      btn_live_inside: "پیش‌نمایش زنده در سایت",
      btn_source: "سورس کد",
      btn_details: "جزئیات بیشتر",
      p2_cat: "سامانه اتوماسیون خدمات آنلاین و ربات تلگرام",
      p2_status: "● عملیاتی در تلگرام",
      p2_title: "کافی‌نت مهندس (CafeNet Engineer)",
      p2_desc:
        "سیستم یکپارچه پذیرش غیرحضوری سفارش‌های کافی‌نت از طریق ربات تلگرام و پنل مدیریت وب. کاربران بدون مراجعه حضوری خدمات خود را انتخاب، مدارک را ارسال و کد پیگیری دریافت می‌کنند.",
      p2_h1:
        "<strong>مدیریت وضعیت گفت‌وگو (State Machine):</strong> هدایت مرحله‌به‌مرحله کاربر برای ثبت اطلاعات، آپلود مدارک و تایید نهایی.",
      p2_h2:
        "<strong>یکپارچه‌سازی ربات و پنل وب:</strong> اتصال ربات تلگرام به API مرکزی و دیتابیس برای مشاهده و تغییر وضعیت سفارش‌ها توسط مدیر.",
      p2_h3:
        "<strong>کاهش زمان پاسخ‌گویی:</strong> خودکارسازی استعلام تعرفه‌ها، نوبت‌دهی و ارسال رسید به مشتری.",
      btn_bot_sim: "تست تعاملی ربات در سایت",
      btn_open_tg: "باز کردن در تلگرام",
      wf_title: "مسیر اجرای پروژه",
      wf_subtitle: "شفافیت از اولین پیام تا تحویل نهایی و پشتیبانی",
      wf1_t: "تحلیل نیاز و معماری",
      wf1_d:
        "بررسی دقیق هدف پروژه، امکانات مورد نیاز، جریان کاربری و انتخاب بهترین ساختار فنی.",
      wf2_t: "طراحی رابط کاربری",
      wf2_d:
        "طراحی چیدمان مدرن، واکنش‌گرا و استاندارد برای تجربه‌ای روان در موبایل و دسکتاپ.",
      wf3_t: "توسعه و کدنویسی تمیز",
      wf3_d:
        "پیاده‌سازی فرانت‌اند یا ربات تلگرام با کدنویسی ماژولار، سرعت بالا و رعایت نکات امنیتی.",
      wf4_t: "تست، استقرار و پشتیبانی",
      wf4_d:
        "بررسی نهایی در دستگاه‌های مختلف، راه‌اندازی آنلاین و همراهی برای توسعه قابلیت‌های بعدی.",
      stack_title: "ابزارها و تکنولوژی‌ها",
      stack_subtitle: "مهارت‌هایی که در پروژه‌های واقعی به کار می‌برم",
      st1_t: "توسعه فرانت‌اند و وب",
      st2_t: "بک‌اند، ربات و دیتابیس",
      st3_t: "ابزارها و استقرار",
      ct_title: "بیایید پروژه بعدی را بسازیم",
      ct_subtitle:
        "برای سفارش طراحی وب‌سایت، ساخت ربات تلگرام یا همکاری تیمی از سریع‌ترین مسیر زیر پیام دهید.",
      ct_tg_label: "تلگرام مستقیم (پاسخ سریع)",
      ct_em_label: "ایمیل رسمی",
      ct_ph_label: "تماس تلفنی / واتساپ",
      ct_loc_label: "موقعیت",
      ct_loc_val: "ایران — همکاری حضوری و دورکاری",
      form_heading: "ارسال پیام مستقیم",
      form_name_lbl: "نام و نام خانوادگی",
      form_contact_lbl: "ایمیل یا آیدی تلگرام",
      form_sub_lbl: "موضوع همکاری",
      opt_web: "سفارش طراحی وب‌سایت یا فروشگاه",
      opt_bot: "سفارش ساخت ربات تلگرام",
      opt_hire: "همکاری پروژه‌ای یا استخدام",
      opt_other: "مشاوره و سایر موارد",
      form_msg_lbl: "توضیحات پیام",
      btn_send_tg: "ارسال مستقیم در تلگرام",
      btn_send_em: "ارسال با ایمیل",
      footer_tag: "طراحی و توسعه وب و ربات‌های هوشمند تلگرام",
      footer_name: "مصیب شنبه زهی (MosaybDev)",
      footer_built: "ساخته‌شده با کدنویسی تمیز و دقت در جزئیات",
      btn_new_tab: "تب جدید",
      req_err: "لطفاً این بخش را تکمیل کنید",
      mail_sent_msg: "✅ برنامه ایمیل شما با متن آماده باز شد.",
      tg_sent_msg: "✅ پیام شما آماده ارسال در تلگرام (@MosaybDev) شد.",
      bot_title: "ربات کافی‌نت مهندس",
      bot_online: "● آنلاین — شبیه‌ساز تعاملی",
      bot_welcome:
        "سلام 👋 به ربات خدمات غیرحضوری کافی‌نت مهندس خوش آمدید. یکی از گزینه‌های زیر را امتحان کنید:",
      bot_b1: "📝 ثبت سفارش جدید",
      bot_b2: "🔍 پیگیری با کد رهگیری",
      bot_b3: "💳 تعرفه خدمات",
      bot_b4: "👨‍💻 ارتباط با مدیر",
      bot_r1:
        "✅ بخش ثبت سفارش فعال شد. نوع خدمت را انتخاب و مدارک را ارسال کنید تا کد پیگیری صادر شود.",
      bot_r2:
        "🔎 وضعیت سفارش #CN-4026: «تأیید مدارک و در حال انجام توسط اپراتور» — زمان تحویل تخمینی: ۱۵ دقیقه.",
      bot_r3:
        "📋 لیست تعرفه‌ها به‌صورت خودکار از پنل مدیریت خوانده می‌شود و پیش از پرداخت فاکتور دقیق نمایش داده می‌شود.",
      bot_r4:
        "💬 پیام شما مستقیم به پنل مدیریت ارسال می‌شود. برای اجرای واقعی ربات از دکمه بالای پنجره وارد تلگرام شوید.",
    },
    en: {
      dir: "ltr",
      label: "EN",
      nav_about: "About",
      nav_projects: "Projects",
      nav_workflow: "Workflow",
      nav_stack: "Tech Stack",
      nav_contact: "Contact",
      nav_channel: "Telegram Channel",
      hero_badge: "Available for Web & Telegram Automation Projects",
      hero_title_prefix: "Turning Ideas Into",
      hero_phrases: [
        "Fast, Modern & Real Digital Products",
        "High-Speed Responsive Online Stores",
        "Smart Telegram Bots & Automation Systems",
      ],
      hero_subtitle:
        "I am <strong>Mosayb Shanbezehi</strong>, a Computer Engineering student and Web & Telegram Bot Developer focused on responsive interfaces, e-commerce platforms, and Python automation.",
      hero_cta_projects: "Explore Projects",
      hero_cta_contact: "Start a Project",
      hero_cta_resume: "Download Resume PDF",
      metric_exp: "Years Hands-On",
      metric_resp: "Responsive UI",
      metric_auto: "Smart Automation",
      about_title: "Why Work With MosaybDev?",
      about_subtitle:
        "Combining engineering mindset, clean code, and real business impact",
      bio_heading: "About Me & Development Approach",
      bio_text:
        "I am pursuing a B.Sc. in Computer Engineering at Saravan University. Instead of unnecessary bloat, I focus on fast loading speed, intuitive UX, and maintainable code—from e-commerce storefronts to Telegram bots connected to web dashboards.",
      hl_clean: "Clean & Modular Code",
      hl_mobile: "Mobile & Desktop Ready",
      hl_support: "Step-by-Step Support",
      tg_heading: "Official Channel & Direct Chat",
      tg_text:
        "Follow my latest builds, web engineering tips, and Telegram bot releases on my channel or message me directly.",
      tg_cta: "Join @MosaybDev",
      edu_badge: "Undergraduate (2022 – 2027)",
      edu_title: "B.Sc. in Computer Engineering",
      edu_uni:
        "Saravan University — Software Development, Databases & Web Systems",
      lang_fa: "Persian (Fluent)",
      lang_bal: "Balochi (Native)",
      lang_en: "English (Technical)",
      srv_web_title: "Web & E-Commerce Development",
      srv_web_desc:
        "Building fast corporate, portfolio, and online stores using HTML5, CSS3, JavaScript, and modern UI.",
      srv_bot_title: "Telegram Bots & Automation",
      srv_bot_desc:
        "Developing order management, store, and admin bots integrated with APIs and databases in Python.",
      projects_title: "Live Projects & Case Studies",
      projects_subtitle:
        "Filter projects by category or launch an interactive live preview without leaving the page",
      filter_all: "All Projects (2)",
      filter_web: "Web & E-Commerce",
      filter_bot: "Telegram Bots & Automation",
      p1_cat: "Mobile & Digital Goods E-Commerce",
      p1_status: "● Live Online",
      p1_title: "Blue Market",
      p1_desc:
        "A modern, fully responsive e-commerce storefront featuring 150+ dynamic products, instant client-side search, smart filtering, and persistent shopping cart.",
      p_highlights: "Technical Challenges & Solutions:",
      p1_h1:
        "<strong>Real-Time Client Filtering:</strong> Multi-criteria search & filtering in Vanilla JS with zero page reloads.",
      p1_h2:
        "<strong>Cart State Persistence:</strong> Reliable cart and user preference storage powered by LocalStorage.",
      p1_h3:
        "<strong>Mobile-First Layout:</strong> Optimized product grids and navigation across mobile and desktop.",
      btn_live_inside: "Live Preview Here",
      btn_source: "Source Code",
      btn_details: "More Details",
      p2_cat: "Online Service Automation & Telegram Bot",
      p2_status: "● Active on Telegram",
      p2_title: "CafeNet Engineer",
      p2_desc:
        "An integrated remote service ordering platform combining a Telegram bot and web admin panel for document submission, tracking codes, and automated workflows.",
      p2_h1:
        "<strong>Conversation State Machine:</strong> Step-by-step guided user flow for data entry and file uploads.",
      p2_h2:
        "<strong>Bot & Web Panel Sync:</strong> Connected Telegram bot with a central API & database for admin control.",
      p2_h3:
        "<strong>Faster Response Time:</strong> Automated pricing inquiries, appointments, and digital receipts.",
      btn_bot_sim: "Interactive Bot Demo",
      btn_open_tg: "Open in Telegram",
      wf_title: "Project Execution Workflow",
      wf_subtitle:
        "Clear milestones from initial idea to deployment and support",
      wf1_t: "Discovery & Architecture",
      wf1_d:
        "Analyzing goals, core features, user journeys, and selecting the right tech stack.",
      wf2_t: "UI/UX Design",
      wf2_d:
        "Crafting clean, responsive layouts for effortless browsing on every screen size.",
      wf3_t: "Clean Development",
      wf3_d:
        "Building modular frontend or Telegram bot logic with speed and security in mind.",
      wf4_t: "Testing, Launch & Support",
      wf4_d:
        "Cross-device QA testing, live deployment, and ongoing feature iterations.",
      stack_title: "Tools & Technologies",
      stack_subtitle: "Technologies I use to ship production-ready projects",
      st1_t: "Frontend & Web",
      st2_t: "Backend, Bots & Data",
      st3_t: "Tools & Deployment",
      ct_title: "Let's Build Your Next Project",
      ct_subtitle:
        "Reach out via Telegram, email, or phone to discuss your website, online store, or Telegram bot.",
      ct_tg_label: "Direct Telegram (Fastest)",
      ct_em_label: "Official Email",
      ct_ph_label: "Phone / WhatsApp",
      ct_loc_label: "Location",
      ct_loc_val: "Iran — Remote & On-Site Collaboration",
      form_heading: "Send a Direct Message",
      form_name_lbl: "Full Name",
      form_contact_lbl: "Email or Telegram Handle",
      form_sub_lbl: "Project Topic",
      opt_web: "Website or Online Store Development",
      opt_bot: "Telegram Bot Development",
      opt_hire: "Project Collaboration / Hiring",
      opt_other: "Consultation & Other",
      form_msg_lbl: "Message Details",
      btn_send_tg: "Send via Telegram",
      btn_send_em: "Send via Email",
      footer_tag: "Web & Intelligent Telegram Bot Development",
      footer_name: "Mosayb Shanbezehi (MosaybDev)",
      footer_built: "Built with clean code and attention to detail",
      btn_new_tab: "New Tab",
      req_err: "Please complete this field",
      mail_sent_msg: "✅ Your email client opened with a pre-filled draft.",
      tg_sent_msg: "✅ Your message is ready to send on Telegram (@MosaybDev).",
      bot_title: "CafeNet Engineer Bot",
      bot_online: "● Online — Interactive Simulator",
      bot_welcome:
        "Hello 👋 Welcome to CafeNet Engineer remote service bot. Try one of the options below:",
      bot_b1: "📝 New Service Order",
      bot_b2: "🔍 Track Order ID",
      bot_b3: "💳 Service Pricing",
      bot_b4: "👨‍💻 Contact Admin",
      bot_r1:
        "✅ Order flow started. Choose a service category and upload your documents to receive a tracking ID.",
      bot_r2:
        "🔎 Order #CN-4026 status: «Documents verified & in progress» — Estimated turnaround: 15 mins.",
      bot_r3:
        "📋 Pricing is synced dynamically from the admin panel and shown clearly before checkout.",
      bot_r4:
        "💬 Your message routes directly to the admin panel. Use the top button to open the live bot in Telegram.",
    },
    ar: {
      dir: "rtl",
      label: "AR",
      nav_about: "من أنا",
      nav_projects: "المشاريع",
      nav_workflow: "آلية العمل",
      nav_stack: "التقنيات",
      nav_contact: "تواصل معي",
      nav_channel: "قناة تيليجرام",
      hero_badge: "متاح لمشاريع تطوير الويب وأتمتة تيليجرام",
      hero_title_prefix: "تحويل الأفكار إلى",
      hero_phrases: [
        "منتجات رقمية سريعة وحديثة وحقيقية",
        "متاجر إلكترونية متجاوبة وعالية السرعة",
        "بوتات تيليجرام ذكية وأنظمة أتمتة متكاملة",
      ],
      hero_subtitle:
        "أنا <strong>مصيب شنبه زهي</strong>، طالب هندسة حاسوب ومطور مواقع وبوتات تيليجرام. أركز على تصميم واجهات مستخدم متجاوبة، متاجر إلكترونية، وأنظمة أتمتة ذكية بلغة بايثون.",
      hero_cta_projects: "استعراض الأعمال",
      hero_cta_contact: "ابدأ مشروعك الآن",
      hero_cta_resume: "تحميل السيرة الذاتية PDF",
      metric_exp: "سنوات خبرة عملية",
      metric_resp: "تصميم متجاوب",
      metric_auto: "أتمتة ذكية",
      about_title: "لماذا التعاون مع MosaybDev؟",
      about_subtitle:
        "الجمع بين الرؤية الهندسية، الكود النظيف، والنتائج العملية لمشروعك",
      bio_heading: "نبذة عني ومنهجية التطوير",
      bio_text:
        "أدرس بكالوريوس هندسة الحاسوب في جامعة سراوان. أركز في مشاريعي على سرعة التحميل، سهولة تجربة المستخدم، وكتابة كود قابل للتطوير؛ من المتاجر الإلكترونية إلى بوتات تيليجرام المتصلة بلوحات تحكم.",
      hl_clean: "كود نظيف ومنظم",
      hl_mobile: "توافق تام مع الجوال والحاسوب",
      hl_support: "دعم وتطوير مستمر",
      tg_heading: "القناة والتواصل المباشر",
      tg_text:
        "تابع أحدث المشاريع ونصائح البرمجة وبوتات تيليجرام عبر القناة الرسمية أو راسلني مباشرة.",
      tg_cta: "انضم إلى @MosaybDev",
      edu_badge: "طالب جامعي (٢٠٢٢ – ٢٠٢٧)",
      edu_title: "بكالوريوس هندسة الحاسوب",
      edu_uni: "جامعة سراوان — تطوير البرمجيات وقواعد البيانات وأنظمة الويب",
      lang_fa: "الفارسية (بطلاقة)",
      lang_bal: "البلوشية (اللغة الأم)",
      lang_en: "الإنجليزية (تقنية)",
      srv_web_title: "تصميم وتطوير المواقع والمتاجر",
      srv_web_desc:
        "بناء مواقع تعريفية ومتاجر إلكترونية سريعة باستخدام HTML5 و CSS3 و JavaScript.",
      srv_bot_title: "تطوير بوتات تيليجرام والأتمتة",
      srv_bot_desc:
        "برمجة بوتات المتاجر والطلبات والإدارة وربطها بقواعد البيانات عبر Python.",
      projects_title: "المشاريع الحية ونماذج الأعمال",
      projects_subtitle:
        "صنّف المشاريع حسب المجال أو شاهد المعاينة الحية دون مغادرة الصفحة",
      filter_all: "جميع المشاريع (٢)",
      filter_web: "الويب والمتاجر الإلكترونية",
      filter_bot: "بوتات تيليجرام والأتمتة",
      p1_cat: "متجر إلكتروني للهواتف والأجهزة الرقمية",
      p1_status: "● متصل ويعمل حالياً",
      p1_title: "بلو ماركت (Blue Market)",
      p1_desc:
        "منصة تجارة إلكترونية حديثة تضم أكثر من ١٥٠ منتجاً ديناميكياً مع بحث فوري وتصفية ذكية وسلة تسوق متكاملة.",
      p_highlights: "التحديات التقنية والحلول:",
      p1_h1:
        "<strong>بحث وتصفية فورية:</strong> محرك فلترة متعدد المعايير بـ Vanilla JavaScript دون إعادة تحميل الصفحة.",
      p1_h2:
        "<strong>إدارة سلة التسوق:</strong> حفظ المنتجات وإعدادات المستخدم عبر LocalStorage.",
      p1_h3:
        "<strong>تصميم Mobile-First:</strong> عرض مثالي على الهواتف الذكية وأجهزة سطح المكتب.",
      btn_live_inside: "معاينة حية داخل الموقع",
      btn_source: "الكود المصدري",
      btn_details: "تفاصيل أكثر",
      p2_cat: "نظام أتمتة الخدمات الإلكترونية وبوت تيليجرام",
      p2_status: "● نشط على تيليجرام",
      p2_title: "كافي نت مهندس (CafeNet Engineer)",
      p2_desc:
        "منظومة متكاملة لاستقبال الطلبات عن بُعد عبر بوت تيليجرام ولوحة تحكم ويب مع إصدار رمز تتبع فوري.",
      p2_h1:
        "<strong>إدارة مراحل المحادثة:</strong> توجيه المستخدم خطوة بخطوة لإدخال البيانات ورفع المستندات.",
      p2_h2:
        "<strong>ربط البوت بلوحة التحكم:</strong> اتصال مباشر مع API وقاعدة بيانات لإدارة الطلبات.",
      p2_h3:
        "<strong>تسريع الاستجابة:</strong> أتمتة الاستعلامات والمواعيد وإرسال الإيصالات.",
      btn_bot_sim: "تجربة تفاعلية للبوت",
      btn_open_tg: "فتح في تيليجرام",
      wf_title: "مسار تنفيذ المشروع",
      wf_subtitle: "وضوح تام من الفكرة الأولى حتى الإطلاق والدعم",
      wf1_t: "تحليل المتطلبات والهيكلة",
      wf1_d:
        "دراسة أهداف المشروع والميزات المطلوبة واختيار البنية التقنية الأنسب.",
      wf2_t: "تصميم واجهة المستخدم",
      wf2_d: "تصميم واجهة عصرية متجاوبة تضمن تجربة سلسة على جميع الشاشات.",
      wf3_t: "التطوير والبرمجة النظيفة",
      wf3_d:
        "تنفيذ الواجهة أو البوت بكود منظم وسرعة عالية ومعايير أمان موثوقة.",
      wf4_t: "الاختبار والإطلاق والدعم",
      wf4_d:
        "اختبار شامل على مختلف الأجهزة، النشر الفعلي، ومرافقتك للتطوير المستقبلي.",
      stack_title: "الأدوات والتقنيات",
      stack_subtitle: "التقنيات التي أستخدمها في بناء المشاريع الواقعية",
      st1_t: "تطوير الواجهات والويب",
      st2_t: "الخلفية والبوتات وقواعد البيانات",
      st3_t: "الأدوات والنشر",
      ct_title: "لنبني مشروعك القادم معاً",
      ct_subtitle:
        "تواصل معي لطلب موقع إلكتروني أو بوت تيليجرام أو للتعاون التقني.",
      ct_tg_label: "تيليجرام مباشر (أسرع رد)",
      ct_em_label: "البريد الإلكتروني",
      ct_ph_label: "الهاتف / واتساب",
      ct_loc_label: "الموقع",
      ct_loc_val: "إيران — عمل عن بُعد أو حضوري",
      form_heading: "إرسال رسالة مباشرة",
      form_name_lbl: "الاسم الكامل",
      form_contact_lbl: "البريد الإلكتروني أو معرف تيليجرام",
      form_sub_lbl: "موضوع التعاون",
      opt_web: "تصميم موقع إلكتروني أو متجر",
      opt_bot: "برمجة بوت تيليجرام",
      opt_hire: "تعاون في مشروع أو توظيف",
      opt_other: "استشارة واستفسارات أخرى",
      form_msg_lbl: "تفاصيل الرسالة",
      btn_send_tg: "إرسال عبر تيليجرام",
      btn_send_em: "إرسال عبر البريد",
      footer_tag: "تصميم وتطوير مواقع الويب وبوتات تيليجرام الذكية",
      footer_name: "مصيب شنبه زهي (MosaybDev)",
      footer_built: "تم التطوير بكود نظيف وعناية بالتفاصيل",
      btn_new_tab: "نافذة جديدة",
      req_err: "يرجى تعبئة هذا الحقل",
      mail_sent_msg: "✅ تم فتح تطبيق البريد الإلكتروني بنص جاهز.",
      tg_sent_msg: "✅ رسالتك جاهزة للإرسال عبر تيليجرام (@MosaybDev).",
      bot_title: "بوت كافي نت مهندس",
      bot_online: "● متصل — محاكاة تفاعلية",
      bot_welcome:
        "مرحباً 👋 أهلاً بك في بوت خدمات كافي نت مهندس. جرّب أحد الخيارات أدناه:",
      bot_b1: "📝 طلب خدمة جديدة",
      bot_b2: "🔍 تتبع الطلب",
      bot_b3: "💳 أسعار الخدمات",
      bot_b4: "👨‍💻 تواصل مع الإدارة",
      bot_r1:
        "✅ تم بدء تسجيل الطلب. اختر نوع الخدمة وأرسل المستندات لإصدار رمز التتبع.",
      bot_r2:
        "🔎 حالة الطلب #CN-4026: «تم التحقق من المستندات وقيد التنفيذ» — المدة المتوقعة: ١٥ دقيقة.",
      bot_r3:
        "📋 يتم جلب الأسعار تلقائياً من لوحة التحكم وعرض الفاتورة بوضوح قبل الدفع.",
      bot_r4:
        "💬 يتم إرسال رسالتك مباشرة إلى الإدارة. استخدم الزر العلوي لفتح البوت في تيليجرام.",
    },
    ur: {
      dir: "rtl",
      label: "UR",
      nav_about: "میرے بارے میں",
      nav_projects: "پروجیکٹس",
      nav_workflow: "طریقہ کار",
      nav_stack: "ٹیکنالوجیز",
      nav_contact: "رابطہ",
      nav_channel: "ٹیلی گرام چینل",
      hero_badge: "ویب اور ٹیلی گرام آٹومیشن پروجیکٹس کے لیے دستیاب",
      hero_title_prefix: "خیالات کو تبدیل کرنا",
      hero_phrases: [
        "تیز، جدید اور حقیقی ڈیجیٹل مصنوعات میں",
        "ریسپانسیو اور تیز رفتار آن لائن اسٹورز میں",
        "سمارٹ ٹیلی گرام بوٹس اور آٹومیشن سسٹمز میں",
      ],
      hero_subtitle:
        "میں <strong>مصیب شنبہ زہی</strong> ہوں؛ کمپیوٹر انجینئرنگ کا طالب علم اور ویب و ٹیلی گرام بوٹ ڈیولپر۔ میری توجہ جدید ویب سائٹس، ای کامرس اور پائتھون آٹومیشن پر ہے۔",
      hero_cta_projects: "پروجیکٹس دیکھیں",
      hero_cta_contact: "پروجیکٹ شروع کریں",
      hero_cta_resume: "ریزیومے PDF ڈاؤن لوڈ کریں",
      metric_exp: "سال عملی تجربہ",
      metric_resp: "ریسپانسیو ڈیزائن",
      metric_auto: "سمارٹ آٹومیشن",
      about_title: "MosaybDev کے ساتھ کام کیوں کریں؟",
      about_subtitle: "انجینئرنگ سوچ، صاف کوڈنگ اور کاروبار کے لیے حقیقی نتائج",
      bio_heading: "میرے بارے میں اور کام کا انداز",
      bio_text:
        "میں سراوان یونیورسٹی میں کمپیوٹر انجینئرنگ کا طالب علم ہوں۔ اپنے پروجیکٹس میں تیز رفتاری، آسان یوزر انٹرفیس اور پائیدار کوڈنگ پر توجہ دیتا ہوں۔",
      hl_clean: "صاف اور ماڈیولر کوڈ",
      hl_mobile: "موبائل اور ڈیسک ٹاپ مطابقت",
      hl_support: "مرحلہ وار سپورٹ",
      tg_heading: "آفیشل چینل اور براہ راست رابطہ",
      tg_text:
        "تازہ ترین پروجیکٹس اور پروگرامنگ اپڈیٹس کے لیے ٹیلی گرام چینل جوائن کریں۔",
      tg_cta: "@MosaybDev جوائن کریں",
      edu_badge: "زیر تعلیم (۲۰۲۲ – ۲۰۲۷)",
      edu_title: "بی ایس کمپیوٹر انجینئرنگ",
      edu_uni: "سراوان یونیورسٹی — سافٹ ویئر ڈیولپمنٹ اور ویب سسٹمز",
      lang_fa: "فارسی (روان)",
      lang_bal: "بلوچی (مادری)",
      lang_en: "انگریزی (تکنیکی)",
      srv_web_title: "ویب سائٹ اور ای کامرس ڈیولپمنٹ",
      srv_web_desc:
        "HTML5، CSS3 اور JavaScript کے ساتھ تیز رفتار اور جدید ویب سائٹس کی تیاری۔",
      srv_bot_title: "ٹیلی گرام بوٹس اور آٹومیشن",
      srv_bot_desc:
        "Python کے ذریعے آرڈر مینجمنٹ اور کاروباری ٹیلی گرام بوٹس کی تیاری۔",
      projects_title: "لائیو پروجیکٹس اور نمونے",
      projects_subtitle:
        "پروجیکٹس کو فلٹر کریں یا صفحہ چھوڑے بغیر لائیو پریویو دیکھیں",
      filter_all: "تمام پروجیکٹس (۲)",
      filter_web: "ویب اور آن لائن اسٹور",
      filter_bot: "ٹیلی گرام بوٹ اور آٹومیشن",
      p1_cat: "موبائل اور ڈیجیٹل مصنوعات کا آن لائن اسٹور",
      p1_status: "● آن لائن فعال",
      p1_title: "بلو مارکیٹ (Blue Market)",
      p1_desc:
        "۱۵۰ سے زائد مصنوعات، فوری سرچ، سمارٹ فلٹرنگ اور شاپنگ کارٹ کے ساتھ جدید ای کامرس پلیٹ فارم۔",
      p_highlights: "تکنیکی خصوصیات اور حل:",
      p1_h1:
        "<strong>فوری سرچ اور فلٹر:</strong> بغیر پیج ریفریش کے Vanilla JavaScript فلٹر انجن۔",
      p1_h2:
        "<strong>شاپنگ کارٹ مینجمنٹ:</strong> LocalStorage کے ذریعے محفوظ ڈیٹا۔",
      p1_h3: "<strong>موبائل فرسٹ ڈیزائن:</strong> ہر اسکرین پر بہترین ڈسپلے۔",
      btn_live_inside: "سائٹ میں لائیو دیکھیں",
      btn_source: "سورس کوڈ",
      btn_details: "مزید تفصیلات",
      p2_cat: "آن لائن سروس آٹومیشن اور ٹیلی گرام بوٹ",
      p2_status: "● ٹیلی گرام پر فعال",
      p2_title: "کافی نیٹ انجینئر (CafeNet Engineer)",
      p2_desc:
        "ٹیلی گرام بوٹ اور ویب ایڈمن پینل کے ذریعے آن لائن آرڈرز اور دستاویزات جمع کرانے کا خودکار نظام۔",
      p2_h1:
        "<strong>مرحلہ وار گفتگو سسٹم:</strong> صارف کی آسانی کے لیے گائیڈڈ فلو۔",
      p2_h2:
        "<strong>بوٹ اور ویب پینل انضمام:</strong> مرکزی API اور ڈیٹا بیس سے منسلک۔",
      p2_h3: "<strong>تیز رفتار سروس:</strong> خودکار نرخ نامہ اور رسید۔",
      btn_bot_sim: "بوٹ کا لائیو ڈیمو",
      btn_open_tg: "ٹیلی گرام میں کھولیں",
      wf_title: "پروجیکٹ کی تکمیل کے مراحل",
      wf_subtitle: "پہلے پیغام سے حتمی لانچ اور سپورٹ تک مکمل شفافیت",
      wf1_t: "ضروریات کا تجزیہ",
      wf1_d: "پروجیکٹ کے مقاصد اور بہترین تکنیکی ڈھانچے کا انتخاب۔",
      wf2_t: "یوزر انٹرفیس ڈیزائن",
      wf2_d: "موبائل اور ڈیسک ٹاپ کے لیے جدید اور آسان ڈیزائن۔",
      wf3_t: "کلین کوڈنگ اور ڈیولپمنٹ",
      wf3_d: "تیز رفتار اور محفوظ فرنٹ اینڈ یا ٹیلی گرام بوٹ کی تیاری۔",
      wf4_t: "ٹیسٹنگ، لانچ اور سپورٹ",
      wf4_d: "مکمل جانچ کے بعد آن لائن اجرا اور مسلسل معاونت۔",
      stack_title: "ٹولز اور ٹیکنالوجیز",
      stack_subtitle: "وہ مہارتیں جو میں حقیقی پروجیکٹس میں استعمال کرتا ہوں",
      st1_t: "فرنٹ اینڈ اور ویب",
      st2_t: "بیک اینڈ، بوٹس اور ڈیٹا بیس",
      st3_t: "ٹولز اور ڈیپلائمنٹ",
      ct_title: "آئیے اگلا پروجیکٹ مل کر بنائیں",
      ct_subtitle:
        "ویب سائٹ یا ٹیلی گرام بوٹ بنوانے کے لیے براہ راست رابطہ کریں۔",
      ct_tg_label: "براہ راست ٹیلی گرام",
      ct_em_label: "آفیشل ای میل",
      ct_ph_label: "فون / واٹس ایپ",
      ct_loc_label: "مقام",
      ct_loc_val: "ایران — ریموٹ اور آن سائٹ تعاون",
      form_heading: "براہ راست پیغام بھیجیں",
      form_name_lbl: "پورا نام",
      form_contact_lbl: "ای میل یا ٹیلی گرام آئی ڈی",
      form_sub_lbl: "موضوع",
      opt_web: "ویب سائٹ یا آن لائن اسٹور",
      opt_bot: "ٹیلی گرام بوٹ کی تیاری",
      opt_hire: "پروجیکٹ تعاون یا ملازمت",
      opt_other: "مشاورت اور دیگر",
      form_msg_lbl: "پیغام کی تفصیل",
      btn_send_tg: "ٹیلی گرام پر بھیجیں",
      btn_send_em: "ای میل کے ذریعے بھیجیں",
      footer_tag: "ویب اور ذہین ٹیلی گرام بوٹس کی تیاری",
      footer_name: "مصیب شنبہ زہی (MosaybDev)",
      footer_built: "صاف کوڈنگ اور باریک بینی سے تیار کردہ",
      btn_new_tab: "نیا ٹیب",
      req_err: "براہ کرم یہ حصہ مکمل کریں",
      mail_sent_msg: "✅ آپ کا ای میل کلائنٹ تیار متن کے ساتھ کھل گیا ہے۔",
      tg_sent_msg:
        "✅ آپ کا پیغام ٹیلی گرام (@MosaybDev) پر بھیجنے کے لیے تیار ہے۔",
      bot_title: "کافی نیٹ انجینئر بوٹ",
      bot_online: "● آن لائن — انٹرایکٹو ڈیمو",
      bot_welcome:
        "خوش آمدید 👋 کافی نیٹ انجینئر بوٹ میں۔ نیچے دیے گئے بٹن آزمائیں:",
      bot_b1: "📝 نیا آرڈر",
      bot_b2: "🔍 آرڈر ٹریک کریں",
      bot_b3: "💳 نرخ نامہ",
      bot_b4: "👨‍💻 ایڈمن سے رابطہ",
      bot_r1:
        "✅ نیا آرڈر شروع ہو گیا ہے۔ سروس منتخب کریں اور دستاویزات بھیجیں۔",
      bot_r2:
        "🔎 آرڈر #CN-4026 کی حالت: «دستاویزات منظور اور کام جاری ہے» — متوقع وقت: ۱۵ منٹ۔",
      bot_r3:
        "📋 نرخ ایڈمن پینل سے اپڈیٹ ہوتے ہیں اور ادائیگی سے پہلے واضح دکھائے جاتے ہیں۔",
      bot_r4:
        "💬 آپ کا پیغام ایڈمن پینل کو جاتا ہے۔ لائیو بوٹ کے لیے اوپر والا بٹن دبائیں۔",
    },
    fr: {
      dir: "ltr",
      label: "FR",
      nav_about: "À propos",
      nav_projects: "Projets",
      nav_workflow: "Processus",
      nav_stack: "Technologies",
      nav_contact: "Contact",
      nav_channel: "Chaîne Telegram",
      hero_badge: "Disponible pour projets Web & Automatisation Telegram",
      hero_title_prefix: "Transformer les idées en",
      hero_phrases: [
        "Produits numériques rapides, modernes et réels",
        "Boutiques en ligne réactives et performantes",
        "Bots Telegram intelligents et automatisés",
      ],
      hero_subtitle:
        "Je suis <strong>Mosayb Shanbezehi</strong>, étudiant en génie informatique et développeur Web & Bots Telegram, spécialisé dans les interfaces réactives et l'automatisation Python.",
      hero_cta_projects: "Voir les projets",
      hero_cta_contact: "Démarrer un projet",
      hero_cta_resume: "Télécharger CV PDF",
      metric_exp: "Ans d'expérience",
      metric_resp: "Design Réactif",
      metric_auto: "Automatisation",
      about_title: "Pourquoi collaborer avec MosaybDev ?",
      about_subtitle:
        "Approche d'ingénierie, code propre et résultats concrets",
      bio_heading: "À propos et approche technique",
      bio_text:
        "Étudiant en génie informatique à l'Université de Saravan. Je privilégie la rapidité de chargement, une UX fluide et un code maintenable, des boutiques e-commerce aux bots Telegram.",
      hl_clean: "Code propre et modulaire",
      hl_mobile: "Compatible mobile & ordinateur",
      hl_support: "Accompagnement étape par étape",
      tg_heading: "Chaîne officielle & contact direct",
      tg_text:
        "Suivez mes derniers projets et astuces de développement sur Telegram.",
      tg_cta: "Rejoindre @MosaybDev",
      edu_badge: "En cours (2022 – 2027)",
      edu_title: "Licence en Génie Informatique",
      edu_uni: "Université de Saravan — Développement logiciel et systèmes Web",
      lang_fa: "Persan (Courant)",
      lang_bal: "Baloutchi (Maternel)",
      lang_en: "Anglais (Technique)",
      srv_web_title: "Création de sites Web & E-commerce",
      srv_web_desc: "Sites rapides et modernes avec HTML5, CSS3 et JavaScript.",
      srv_bot_title: "Bots Telegram & Automatisation",
      srv_bot_desc:
        "Développement de bots de commande et gestion connectés en Python.",
      projects_title: "Projets en direct & Réalisations",
      projects_subtitle:
        "Filtrez par catégorie ou testez l'aperçu en direct sans quitter la page",
      filter_all: "Tous les projets (2)",
      filter_web: "Web & E-Commerce",
      filter_bot: "Bots Telegram",
      p1_cat: "Boutique en ligne Mobile & High-Tech",
      p1_status: "● En ligne",
      p1_title: "Blue Market",
      p1_desc:
        "Plateforme e-commerce moderne avec plus de 150 produits dynamiques, recherche instantanée et panier persistant.",
      p_highlights: "Défis techniques et solutions :",
      p1_h1:
        "<strong>Filtrage instantané :</strong> Recherche multicritère en Vanilla JS sans rechargement.",
      p1_h2:
        "<strong>Gestion du panier :</strong> Sauvegarde durable via LocalStorage.",
      p1_h3:
        "<strong>Design Mobile-First :</strong> Affichage optimal sur mobile et desktop.",
      btn_live_inside: "Aperçu en direct ici",
      btn_source: "Code source",
      btn_details: "Plus de détails",
      p2_cat: "Automatisation de services & Bot Telegram",
      p2_status: "● Actif sur Telegram",
      p2_title: "CafeNet Engineer",
      p2_desc:
        "Système complet de prise de commandes à distance via bot Telegram et tableau de bord Web.",
      p2_h1:
        "<strong>Machine à états :</strong> Parcours guidé étape par étape pour les clients.",
      p2_h2:
        "<strong>Synchronisation Bot & Web :</strong> Connexion API et base de données centrale.",
      p2_h3:
        "<strong>Gain de temps :</strong> Automatisation des tarifs, rendez-vous et reçus.",
      btn_bot_sim: "Démo interactive du bot",
      btn_open_tg: "Ouvrir dans Telegram",
      wf_title: "Processus de réalisation",
      wf_subtitle: "Transparence totale de l'idée initiale au déploiement",
      wf1_t: "Analyse & Architecture",
      wf1_d:
        "Étude des besoins et choix de la meilleure architecture technique.",
      wf2_t: "Design UI/UX",
      wf2_d: "Interfaces modernes et adaptatives pour tous les écrans.",
      wf3_t: "Développement propre",
      wf3_d: "Code modulaire, performant et sécurisé.",
      wf4_t: "Tests, Déploiement & Support",
      wf4_d: "Tests multi-appareils, mise en ligne et suivi continu.",
      stack_title: "Outils & Technologies",
      stack_subtitle: "Compétences utilisées dans mes projets concrets",
      st1_t: "Frontend & Web",
      st2_t: "Backend, Bots & Données",
      st3_t: "Outils & Déploiement",
      ct_title: "Construisons votre prochain projet",
      ct_subtitle:
        "Contactez-moi pour un site Web, une boutique ou un bot Telegram.",
      ct_tg_label: "Telegram direct (Réponse rapide)",
      ct_em_label: "Email officiel",
      ct_ph_label: "Téléphone / WhatsApp",
      ct_loc_label: "Localisation",
      ct_loc_val: "Iran — Collaboration à distance ou sur place",
      form_heading: "Envoyer un message direct",
      form_name_lbl: "Nom complet",
      form_contact_lbl: "Email ou identifiant Telegram",
      form_sub_lbl: "Sujet",
      opt_web: "Création de site Web ou boutique",
      opt_bot: "Développement de bot Telegram",
      opt_hire: "Collaboration ou recrutement",
      opt_other: "Conseil et autres demandes",
      form_msg_lbl: "Détails du message",
      btn_send_tg: "Envoyer sur Telegram",
      btn_send_em: "Envoyer par Email",
      footer_tag: "Développement Web & Bots Telegram intelligents",
      footer_name: "Mosayb Shanbezehi (MosaybDev)",
      footer_built: "Conçu avec un code propre et le souci du détail",
      btn_new_tab: "Nouvel onglet",
      req_err: "Veuillez remplir ce champ",
      mail_sent_msg: "✅ Votre client mail s'est ouvert avec le message prêt.",
      tg_sent_msg:
        "✅ Votre message est prêt à être envoyé sur Telegram (@MosaybDev).",
      bot_title: "Bot CafeNet Engineer",
      bot_online: "● En ligne — Simulateur interactif",
      bot_welcome:
        "Bonjour 👋 Bienvenue sur le bot CafeNet Engineer. Essayez une option :",
      bot_b1: "📝 Nouvelle commande",
      bot_b2: "🔍 Suivre commande",
      bot_b3: "💳 Tarifs",
      bot_b4: "👨‍💻 Contacter l'admin",
      bot_r1:
        "✅ Commande démarrée. Choisissez un service et envoyez vos documents.",
      bot_r2:
        "🔎 Commande #CN-4026 : « Documents vérifiés et en cours » — Délai estimé : 15 min.",
      bot_r3:
        "📋 Les tarifs sont synchronisés depuis le panneau admin avant paiement.",
      bot_r4:
        "💬 Votre message est envoyé à l'admin. Utilisez le bouton en haut pour Telegram.",
    },
    it: {
      dir: "ltr",
      label: "IT",
      nav_about: "Chi sono",
      nav_projects: "Progetti",
      nav_workflow: "Metodo",
      nav_stack: "Tecnologie",
      nav_contact: "Contatti",
      nav_channel: "Canale Telegram",
      hero_badge: "Disponibile per progetti Web e Automazione Telegram",
      hero_title_prefix: "Trasformo le idee in",
      hero_phrases: [
        "Prodotti digitali veloci, moderni e reali",
        "Negozi online reattivi e ad alte prestazioni",
        "Bot Telegram intelligenti e sistemi automatizzati",
      ],
      hero_subtitle:
        "Sono <strong>Mosayb Shanbezehi</strong>, studente di Ingegneria Informatica e sviluppatore Web & Bot Telegram, focalizzato su interfacce reattive e automazione in Python.",
      hero_cta_projects: "Esplora i progetti",
      hero_cta_contact: "Inizia un progetto",
      hero_cta_resume: "Scarica CV PDF",
      metric_exp: "Anni di esperienza",
      metric_resp: "Design Reattivo",
      metric_auto: "Automazione",
      about_title: "Perché collaborare con MosaybDev?",
      about_subtitle:
        "Approccio ingegneristico, codice pulito e risultati concreti",
      bio_heading: "Chi sono e approccio allo sviluppo",
      bio_text:
        "Studio Ingegneria Informatica all'Università di Saravan. Nei miei progetti punto su velocità, UX intuitiva e codice manutenibile, dagli e-commerce ai bot Telegram.",
      hl_clean: "Codice pulito e modulare",
      hl_mobile: "Ottimizzato per mobile e desktop",
      hl_support: "Supporto passo dopo passo",
      tg_heading: "Canale ufficiale e contatto diretto",
      tg_text:
        "Segui gli ultimi progetti e aggiornamenti su Telegram o scrivimi direttamente.",
      tg_cta: "Unisciti a @MosaybDev",
      edu_badge: "In corso (2022 – 2027)",
      edu_title: "Laurea in Ingegneria Informatica",
      edu_uni: "Università di Saravan — Sviluppo software e sistemi Web",
      lang_fa: "Persiano (Fluente)",
      lang_bal: "Baluchi (Madrelingua)",
      lang_en: "Inglese (Tecnico)",
      srv_web_title: "Sviluppo Siti Web ed E-Commerce",
      srv_web_desc: "Siti veloci e moderni con HTML5, CSS3 e JavaScript.",
      srv_bot_title: "Bot Telegram e Automazione",
      srv_bot_desc:
        "Sviluppo di bot gestionali e per ordini collegati a database in Python.",
      projects_title: "Progetti Live e Case Study",
      projects_subtitle:
        "Filtra per categoria o prova l'anteprima live senza lasciare la pagina",
      filter_all: "Tutti i progetti (2)",
      filter_web: "Web ed E-Commerce",
      filter_bot: "Bot Telegram e Automazione",
      p1_cat: "E-Commerce Mobile e Prodotti Digitali",
      p1_status: "● Online Attivo",
      p1_title: "Blue Market",
      p1_desc:
        "Piattaforma e-commerce moderna con oltre 150 prodotti dinamici, ricerca istantanea e carrello persistente.",
      p_highlights: "Sfide tecniche e soluzioni:",
      p1_h1:
        "<strong>Filtro istantaneo:</strong> Ricerca multi-criterio in Vanilla JS senza ricaricare la pagina.",
      p1_h2:
        "<strong>Gestione carrello:</strong> Salvataggio persistente tramite LocalStorage.",
      p1_h3:
        "<strong>Design Mobile-First:</strong> Layout perfetto su smartphone e desktop.",
      btn_live_inside: "Anteprima live qui",
      btn_source: "Codice sorgente",
      btn_details: "Maggiori dettagli",
      p2_cat: "Automazione Servizi Online e Bot Telegram",
      p2_status: "● Attivo su Telegram",
      p2_title: "CafeNet Engineer",
      p2_desc:
        "Sistema integrato per ordini da remoto tramite bot Telegram e pannello di controllo Web.",
      p2_h1:
        "<strong>Macchina a stati:</strong> Flusso guidato passo dopo passo per l'invio documenti.",
      p2_h2:
        "<strong>Sincronizzazione Bot e Web:</strong> Collegamento con API e database centrale.",
      p2_h3:
        "<strong>Risposta rapida:</strong> Automazione di listini, appuntamenti e ricevute.",
      btn_bot_sim: "Demo interattiva bot",
      btn_open_tg: "Apri in Telegram",
      wf_title: "Metodo di lavoro",
      wf_subtitle: "Chiarezza dalla prima idea fino al lancio e al supporto",
      wf1_t: "Analisi e Architettura",
      wf1_d:
        "Studio degli obiettivi e scelta della migliore struttura tecnica.",
      wf2_t: "Design UI/UX",
      wf2_d: "Interfacce moderne e reattive per ogni dispositivo.",
      wf3_t: "Sviluppo pulito",
      wf3_d: "Codice modulare, veloce e sicuro.",
      wf4_t: "Test, Lancio e Supporto",
      wf4_d:
        "Test multi-dispositivo, pubblicazione online e assistenza continua.",
      stack_title: "Strumenti e Tecnologie",
      stack_subtitle: "Tecnologie che utilizzo in progetti reali",
      st1_t: "Frontend e Web",
      st2_t: "Backend, Bot e Dati",
      st3_t: "Strumenti e Deploy",
      ct_title: "Costruiamo il tuo prossimo progetto",
      ct_subtitle:
        "Contattami per un sito Web, un negozio online o un bot Telegram.",
      ct_tg_label: "Telegram diretto (Risposta rapida)",
      ct_em_label: "Email ufficiale",
      ct_ph_label: "Telefono / WhatsApp",
      ct_loc_label: "Posizione",
      ct_loc_val: "Iran — Collaborazione da remoto o in loco",
      form_heading: "Invia un messaggio diretto",
      form_name_lbl: "Nome e Cognome",
      form_contact_lbl: "Email o username Telegram",
      form_sub_lbl: "Oggetto",
      opt_web: "Sviluppo sito Web o e-commerce",
      opt_bot: "Sviluppo bot Telegram",
      opt_hire: "Collaborazione o assunzione",
      opt_other: "Consulenza e altro",
      form_msg_lbl: "Dettagli del messaggio",
      btn_send_tg: "Invia su Telegram",
      btn_send_em: "Invia via Email",
      footer_tag: "Sviluppo Web e Bot Telegram intelligenti",
      footer_name: "Mosayb Shanbezehi (MosaybDev)",
      footer_built: "Realizzato con codice pulito e cura per i dettagli",
      btn_new_tab: "Nuova scheda",
      req_err: "Compila questo campo",
      mail_sent_msg: "✅ Il client email si è aperto con il testo pronto.",
      tg_sent_msg: "✅ Messaggio pronto per l'invio su Telegram (@MosaybDev).",
      bot_title: "Bot CafeNet Engineer",
      bot_online: "● Online — Simulatore interattivo",
      bot_welcome:
        "Ciao 👋 Benvenuto nel bot CafeNet Engineer. Prova un'opzione qui sotto:",
      bot_b1: "📝 Nuovo ordine",
      bot_b2: "🔍 Traccia ordine",
      bot_b3: "💳 Listino",
      bot_b4: "👨‍💻 Contatta admin",
      bot_r1:
        "✅ Ordine avviato. Seleziona un servizio e invia i documenti per il codice.",
      bot_r2:
        "🔎 Ordine #CN-4026: «Documenti verificati e in lavorazione» — Tempo stimato: 15 min.",
      bot_r3:
        "📋 Le tariffe sono sincronizzate dal pannello admin prima del pagamento.",
      bot_r4:
        "💬 Il messaggio arriva all'admin. Usa il pulsante in alto per aprire Telegram.",
    },
  };

  let currentLang = localStorage.getItem("site_lang") || "fa";
  if (!translations[currentLang]) currentLang = "fa";

  const kineticPhraseEl = document.getElementById("kineticPhrase");
  let phraseIdx = 0;

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.fa;
    currentLang = lang;
    localStorage.setItem("site_lang", lang);

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dict.dir);

    const langLabel = document.getElementById("currentLangLabel");
    if (langLabel) langLabel.textContent = dict.label;

    document.querySelectorAll("#langDropdown button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    phraseIdx = 0;
    if (kineticPhraseEl && dict.hero_phrases?.length) {
      kineticPhraseEl.textContent = dict.hero_phrases[0];
    }
  }

  applyLanguage(currentLang);

  /* ========== Kinetic Hero Phrase Rotator ========== */
  setInterval(() => {
    const dict = translations[currentLang] || translations.fa;
    const list = dict.hero_phrases;
    if (!kineticPhraseEl || !list || list.length < 2) return;

    kineticPhraseEl.classList.add("switching");
    setTimeout(() => {
      phraseIdx = (phraseIdx + 1) % list.length;
      kineticPhraseEl.textContent = list[phraseIdx];
      kineticPhraseEl.classList.remove("switching");
    }, 380);
  }, 4200);

  /* ========== Language Switcher Events ========== */
  const langSwitcher = document.getElementById("langSwitcher");
  const langBtn = document.getElementById("langBtn");

  langBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    langSwitcher?.classList.toggle("open");
  });

  document.querySelectorAll("#langDropdown button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang) applyLanguage(lang);
      langSwitcher?.classList.remove("open");
    });
  });

  document.addEventListener("click", () => {
    langSwitcher?.classList.remove("open");
  });

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

  /* ========== Scroll Progress + Topbar + Active Nav ========== */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const backToTop = document.getElementById("backToTop");
  const topbar = document.getElementById("topbar");
  const scrollProgress = document.getElementById("scrollProgress");
  let scrollTicking = false;

  function onScrollFrame() {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollProgress) {
      const pct =
        docHeight > 0
          ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100))
          : 0;
      scrollProgress.style.width = `${pct.toFixed(2)}%`;
    }

    topbar?.classList.toggle("scrolled", scrollY > 40);
    backToTop?.classList.toggle("show", scrollY > 400);

    let current = "";
    sections.forEach((sec) => {
      if (scrollY >= sec.offsetTop - 160) {
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
      if (hamburger) hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  /* ========== Reveal & Stagger Observer ========== */
  const projectCards = document.querySelectorAll(".case-card");

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
      { threshold: 0.12 },
    );

    projectCards.forEach((card) => projectObserver.observe(card));
  } else {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
    projectCards.forEach((card) => card.classList.add("in-view"));
  }

  /* ========== Project Category Filtering ========== */
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter") || "all";
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        const match = filter === "all" || cat === filter;
        card.classList.toggle("hidden-by-filter", !match);
        if (match) card.classList.add("in-view");
      });
    });
  });

  /* ========== In-Page Live Preview Modal ========== */
  const livePreviewModal = document.getElementById("livePreviewModal");
  const previewStage = document.getElementById("previewStage");
  const previewUrlText = document.getElementById("previewUrlText");
  const previewExternalLink = document.getElementById("previewExternalLink");

  function openLivePreview(projectId) {
    if (!livePreviewModal || !previewStage) return;
    const dict = translations[currentLang] || translations.fa;

    if (projectId === "blue-market") {
      const url = "https://mosayb-dev.github.io/BlueMarket.ir/";
      if (previewUrlText) previewUrlText.textContent = url;
      if (previewExternalLink) previewExternalLink.href = url;
      previewStage.innerHTML = `<iframe src="${url}" title="Blue Market Live Preview" loading="lazy"></iframe>`;
    } else {
      const tgUrl = "https://t.me/CafeNetMohandesBot";
      if (previewUrlText) previewUrlText.textContent = tgUrl;
      if (previewExternalLink) previewExternalLink.href = tgUrl;
      previewStage.innerHTML = `
        <div class="bot-sim-wrap">
          <div class="bot-sim-head">
            <div class="bot-avatar">CN</div>
            <div>
              <strong style="display:block;font-size:14px;">${dict.bot_title}</strong>
              <small style="color:#34d399;font-size:11px;">${dict.bot_online}</small>
            </div>
          </div>
          <div class="bot-sim-messages" id="botSimMsgs">
            <div class="bot-msg">${dict.bot_welcome}</div>
          </div>
          <div class="bot-sim-keyboard">
            <button type="button" data-sim="r1">${dict.bot_b1}</button>
            <button type="button" data-sim="r2">${dict.bot_b2}</button>
            <button type="button" data-sim="r3">${dict.bot_b3}</button>
            <button type="button" data-sim="r4">${dict.bot_b4}</button>
          </div>
        </div>
      `;

      const buttonLabels = {
        r1: dict.bot_b1,
        r2: dict.bot_b2,
        r3: dict.bot_b3,
        r4: dict.bot_b4,
      };
      const replies = {
        r1: dict.bot_r1,
        r2: dict.bot_r2,
        r3: dict.bot_r3,
        r4: dict.bot_r4,
      };

      previewStage.querySelectorAll("[data-sim]").forEach((b) => {
        b.addEventListener("click", () => {
          const key = b.getAttribute("data-sim") || "r1";
          const box = document.getElementById("botSimMsgs");
          if (!box) return;
          box.innerHTML += `<div class="bot-msg user">${buttonLabels[key]}</div>`;
          setTimeout(() => {
            box.innerHTML += `<div class="bot-msg">${replies[key] || ""}</div>`;
            box.scrollTop = box.scrollHeight;
          }, 260);
        });
      });
    }

    livePreviewModal.classList.add("show");
    livePreviewModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLivePreview() {
    if (!livePreviewModal) return;
    livePreviewModal.classList.remove("show");
    livePreviewModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (previewStage) previewStage.innerHTML = "";
  }

  document.querySelectorAll(".live-preview-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-project");
      if (id) openLivePreview(id);
    });
  });

  livePreviewModal?.querySelectorAll("[data-close-preview]").forEach((el) => {
    el.addEventListener("click", closeLivePreview);
  });

  /* ========== Project Details Modal ========== */
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
        "Responsive UI",
        "LocalStorage",
      ],
      demo: "https://mosayb-dev.github.io/BlueMarket.ir/",
      demoLabel: "مشاهده سایت زنده",
      demoIcon: "fa-solid fa-up-right-from-square",
      source: "https://github.com/mosayb-dev/BlueMarket.ir",
    },
    "cafenet-engineer": {
      title: "کافی‌نت مهندس (CafeNet Engineer)",
      type: "سامانه یکپارچه ربات تلگرام و پنل مدیریت کافی‌نت",
      images: ["cafenet-bot-menu.png", "cafenet-bot-services.png"],
      desc: "پلتفرم اتوماسیون خدمات آنلاین و غیرحضوری کافی‌نت. مشتریان از طریق ربات تلگرامی سفارش خود را ثبت کرده، مدارک و فیش واریزی را ارسال می‌کنند و کد پیگیری دریافت می‌نمایند؛ هم‌زمان مدیر از طریق پنل وب سفارش‌ها و تعرفه‌ها را کنترل می‌کند.",
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

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (modalDialog) modalDialog.scrollTop = 0;
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute("data-project");
      if (projectId) openProjectModal(projectId);
    });
  });

  modal?.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeProjectModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal?.classList.contains("show")) closeProjectModal();
      if (livePreviewModal?.classList.contains("show")) closeLivePreview();
    }
  });

  /* ========== Quick Copy Buttons ========== */
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const val = btn.getAttribute("data-copy");
      if (!val) return;
      try {
        await navigator.clipboard.writeText(val);
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 1600);
      } catch {
        // Fallback ignored
      }
    });
  });

  /* ========== Contact Form ========== */
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const sendTelegramBtn = document.getElementById("sendTelegramBtn");

  function validateContactForm() {
    const dict = translations[currentLang] || translations.fa;
    let valid = true;
    ["name", "email", "message"].forEach((id) => {
      const input = document.getElementById(id);
      const err = document.querySelector(`.err-msg[data-for="${id}"]`);
      if (!input || !err) return;
      input.classList.remove("invalid");
      err.textContent = "";

      if (!input.value.trim()) {
        input.classList.add("invalid");
        err.textContent = dict.req_err;
        valid = false;
      }
    });
    return valid;
  }

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateContactForm()) return;
    const dict = translations[currentLang] || translations.fa;

    const name = document.getElementById("name")?.value.trim() || "";
    const contact = document.getElementById("email")?.value.trim() || "";
    const subject =
      document.getElementById("subject")?.value || "Website Message";
    const message = document.getElementById("message")?.value.trim() || "";

    const mailBody = `Name: ${name}%0D%0AContact: ${contact}%0D%0ASubject: ${subject}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:mshanbhzhi@gmail.com?subject=${encodeURIComponent(
      `${subject} - ${name}`,
    )}&body=${mailBody}`;

    if (formStatus) {
      formStatus.textContent = dict.mail_sent_msg;
    }
  });

  sendTelegramBtn?.addEventListener("click", () => {
    if (!validateContactForm()) return;
    const dict = translations[currentLang] || translations.fa;

    const name = document.getElementById("name")?.value.trim() || "";
    const contact = document.getElementById("email")?.value.trim() || "";
    const subject =
      document.getElementById("subject")?.value || "Website Message";
    const message = document.getElementById("message")?.value.trim() || "";

    const text = `Message from portfolio:%0A👤 ${encodeURIComponent(
      name,
    )}%0A📌 ${encodeURIComponent(subject)}%0A📞 ${encodeURIComponent(
      contact,
    )}%0A📝 ${encodeURIComponent(message)}`;
    window.open(
      `https://t.me/MosaybDev?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );

    if (formStatus) {
      formStatus.textContent = dict.tg_sent_msg;
    }
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
