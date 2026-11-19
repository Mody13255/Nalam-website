/* ==========================================================================
   NALAM (نالام) — Interactive Engine
   Scroll-Driven 5-Stage Kitchen Assembly, EN/AR RTL Switcher,
   9-Category Sales Catalogue, Multi-View Gallery & InstaPay/WhatsApp Builder
   ========================================================================== */

(function () {
  'use strict';

  const CONFIG = window.NALAM_CONFIG || {};
  const CATEGORIES = window.NALAM_CATEGORIES || [];
  const PRODUCTS = window.NALAM_PRODUCTS || [];

  const I18N = {
    en: {
      nav_showcase: 'Showcase',
      nav_stages: 'Our Stages',
      nav_catalogue: 'Catalogue',
      nav_materials: 'Materials & Hardware',
      nav_contact: 'Contact Us',
      nav_wa: 'WhatsApp Inquiry',
      lang_btn: 'عربي',

      hero_eyebrow: 'NEW CAIRO ARCHITECTURAL SHOWROOM',
      hero_title_1: 'Watch Space',
      hero_title_em: 'Come Alive',
      hero_lead: 'Scroll down to experience how Nalam transforms an empty architectural room into a bespoke luxury kitchen—stage by stage.',
      hero_cta_cat: 'Explore Sales Catalogue',
      hero_cta_book: 'Book Showroom Visit',
      hero_scroll_cue: 'Scroll to assemble the kitchen',

      stage_0_num: 'STAGE 00 / 05 — ARCHITECTURAL CANVAS',
      stage_0_title: 'The Empty Architectural Space',
      stage_0_desc: 'Every Nalam project begins with exact on-site laser measurements, plumbing/electrical mapping, and bespoke space planning.',
      stage_1_num: 'STAGE 01 / 05 — FOUNDATION',
      stage_1_title: 'Base Cabinets & Marble Countertop',
      stage_1_desc: 'Precision-built Good Wood sandwich blockboard base units with 100% waterproof Boardium sink carcass and honed veined marble countertop.',
      stage_2_num: 'STAGE 02 / 05 — VERTICAL ARCHITECTURE',
      stage_2_title: 'Tall Wardrobe Tower & Refrigerator',
      stage_2_desc: 'Full-height pantry cabinetry seamlessly integrating the stainless French-door refrigerator alongside the built-in microwave and oven tower.',
      stage_3_num: 'STAGE 03 / 05 — ELEVATION & LIGHT',
      stage_3_title: 'Upper Cabinets & Illuminated Backsplash',
      stage_3_desc: 'Full-height upper cabinetry with smoked glass showcase, warm recessed LED profiles, and book-matched veined marble backsplash.',
      stage_4_num: 'STAGE 04 / 05 — CULINARY HARDWARE',
      stage_4_title: 'Built-In Stove & Chimney Air Vent',
      stage_4_desc: 'Flush-mounted induction/gas cooktop paired with a matte black architectural chimney hood for clean airflow and sleek lines.',
      stage_5_num: 'STAGE 05 / 05 — THE CENTERPIECE',
      stage_5_title: 'Center Island & Barstool Seating',
      stage_5_desc: 'The completed Nalam kitchen: a generous veined marble island with deep storage drawers and six tailored barstools. Your Zone Is Glam.',

      pill_0: '00 Empty',
      pill_1: '01 Base & Counter',
      pill_2: '02 Wardrobe & Fridge',
      pill_3: '03 Uppers & Backsplash',
      pill_4: '04 Stove & Vent',
      pill_5: '05 Island & Chairs',

      stages_eyebrow: 'THE NALAM CRAFT PROCESS',
      stages_title: 'Three Disciplined Stages. Zero Guesswork.',
      stages_sub: 'From photorealistic 3D layouts to raw factory precision and clean on-site installation—what you approve is exactly what we deliver.',
      journey_1_title: '3D Modelling & Layout',
      journey_1_desc: 'Designing spaces and creating possibilities with corner and straight layout studies before a single board is cut.',
      journey_2_title: 'Pre-Finishing Stage',
      journey_2_desc: 'Every great space starts long before the final touch—precision CNC joinery, raw carcass checks, and lighting integration in our workshop.',
      journey_3_title: 'On-Site Installation',
      journey_3_desc: 'Real spaces, real work, real results—installed by Nalam engineers with 5-year warranty and lifetime maintenance support.',

      spotlight_eyebrow: 'REAL DELIVERED PROJECT',
      spotlight_title: 'Client Walkthrough & On-Site Finish',
      spotlight_quote: '“I would like to thank the Nalam team and Eng. Islam for the design, execution, and finishing—truly outstanding and far better than I imagined, at a very competitive price.”',
      spotlight_credit: '— Verified Nalam Kitchen Client, Cairo',

      cat_eyebrow: 'SALES CATALOGUE — 9 CATEGORIES',
      cat_title: 'Bespoke Furniture & Cabinetry',
      cat_sub: 'Browse all nine custom categories with transparent EGP pricing. Select any piece to inspect multiple angles and reserve directly via InstaPay or Mobile Wallet.',
      cat_starting: 'Price',
      cat_view_btn: 'View Angles & Order',
      cat_angles_suffix: 'Angles',

      mat_eyebrow: 'ENGINEERING & HARDWARE',
      mat_title: 'Built for Decades of Daily Use',
      mat_sub: 'Luxury aesthetics mean nothing without structural integrity underneath. Every Nalam unit is engineered with certified boards and European/Turkish motion hardware.',
      mat_1_title: 'Good Wood / Top Wood',
      mat_1_desc: 'Premium melamine-faced sandwich blockboard carcasses providing superior screw-holding strength, zero warping, and clean interior finishes.',
      mat_2_title: '100% Waterproof Boardium',
      mat_2_desc: 'Dedicated high-density, 100% water-resistant Boardium used for kitchen sink bases and all WC vanity units to eliminate moisture swelling forever.',
      mat_3_title: 'Turkish SAMET Hinges',
      mat_3_desc: 'Original Turkish SAMET soft-close hydraulic hinges engineered for silent, effortless door closing across tens of thousands of cycles.',
      mat_4_title: 'Italian FGV Runners',
      mat_4_desc: 'Concealed Italian FGV undermount soft-close drawer runners delivering smooth full-extension glide even under heavy cookware loads.',
      war_1_t: 'Professional Installation',
      war_1_s: 'Precision alignment by Nalam site engineers',
      war_2_t: '5-Year Warranty',
      war_2_s: 'Full structural & hardware peace of mind',
      war_3_t: 'Lifetime Maintenance',
      war_3_s: 'Ongoing after-sales care whenever you need us',

      contact_eyebrow: 'NEW CAIRO SHOWROOM & CONSULTATIONS',
      contact_title: 'Bring Your Space to Life',
      contact_sub: 'Visit our New Cairo showroom or send your project specs directly to our WhatsApp design desk for a tailored quotation.',
      lbl_location: 'Showroom Location',
      lbl_phone: 'Phone & WhatsApp',
      lbl_hours: 'Showroom Hours',
      lbl_social: 'Instagram',
      btn_maps: 'Open in Google Maps',
      btn_wa_direct: 'Chat on WhatsApp',

      form_name: 'Full Name',
      form_name_ph: 'e.g. Ahmed Hassan',
      form_phone: 'Phone / WhatsApp Number',
      form_phone_ph: '01X XXXX XXXX',
      form_category: 'Interested Category',
      form_area: 'Compound / Delivery Area',
      form_area_ph: 'e.g. New Cairo, Fifth Settlement, Rehab',
      form_notes: 'Dimensions or Project Notes',
      form_notes_ph: 'Share rough dimensions, preferred finish, or showroom visit time...',
      form_submit: 'Send Inquiry via WhatsApp',

      modal_dims: 'Dimensions:',
      modal_mat: 'Materials:',
      modal_hw: 'Hardware:',
      modal_fin: 'Featured Finish:',
      modal_order_title: 'Reserve / Order via InstaPay or Mobile Wallet',
      modal_instapay_lbl: 'InstaPay Address (Default):',
      modal_copy: 'Copy',
      modal_copied: 'Copied!',
      modal_cust_name: 'Your Full Name',
      modal_cust_area: 'Delivery Area (e.g. New Cairo)',
      modal_pay_instapay: 'InstaPay (Instant Bank Transfer)',
      modal_pay_wallet: 'Mobile Wallet (Vodafone / Orange / Etisalat Cash)',
      modal_order_btn: 'Reserve / Order via WhatsApp',
      modal_no_card: 'Zero credit card gateways — fast confirmation directly with Nalam sales on WhatsApp.',

      footer_desc: 'Bespoke luxury kitchens, dressing rooms, and architectural cabinetry crafted in New Cairo with European/Turkish hardware and 5-year warranty.',
      footer_nav_title: 'Explore',
      footer_contact_title: 'Showroom & Direct',
      footer_contact_page: 'Dedicated Contact Page',
      footer_copy: '© 2026 Nalam (نالام). All Rights Reserved.',

      contact_page_title: 'Visit Our New Cairo Showroom',
      contact_page_sub: 'Book a private material consultation, explore Good Wood, Boardium, SAMET, and FGV samples in person, or send your dimensions for a fast quotation.',
      back_home: 'Back to Home'
    },
    ar: {
      nav_showcase: 'العرض التفاعلي',
      nav_stages: 'مراحل التنفيذ',
      nav_catalogue: 'الكتالوج',
      nav_materials: 'الخامات والإكسسوارات',
      nav_contact: 'تواصل معنا',
      nav_wa: 'استفسار واتساب',
      lang_btn: 'EN',

      hero_eyebrow: 'معرض نالام — القاهرة الجديدة',
      hero_title_1: 'شاهد مساحتك',
      hero_title_em: 'تنطق بالفخامة',
      hero_lead: 'مرّر للأسفل لتشاهد كيف تحوّل نالام المساحة الفارغة إلى مطبخ فاخر متكامل خطوة بخطوة.',
      hero_cta_cat: 'تصفح كتالوج البيع',
      hero_cta_book: 'احجز زيارة المعرض',
      hero_scroll_cue: 'مرّر للأسفل لتجميع المطبخ',

      stage_0_num: 'المرحلة 00 / 05 — الفراغ المعماري',
      stage_0_title: 'المساحة الفارغة قبل التنفيذ',
      stage_0_desc: 'يبدأ كل مشروع في نالام برفع مقاسات دقيق بالليزر وتخطيط كامل للسباكة والكهرباء وتوزيع المساحات.',
      stage_1_num: 'المرحلة 01 / 05 — التأسيس',
      stage_1_title: 'الوحدات السفلية وسطح الرخام',
      stage_1_desc: 'تركيب العلب السفلية من كونتر جود وود ساندويتش مع وحدة حوض بورديوم 100% مقاوم للمياه وسطح كوارتز أبيض معرق.',
      stage_2_num: 'المرحلة 02 / 05 — الوحدات الطولية',
      stage_2_title: 'الدولاب الطولي وتجويف الثلاجة والأفران',
      stage_2_desc: 'وحدات تخزين بكامل الارتفاع تحتضن الثلاجة الستانلس ستيل مع برج الميكروويف والفرن المدمج بتناسق تام.',
      stage_3_num: 'المرحلة 03 / 05 — الوحدات العلوية والإضاءة',
      stage_3_title: 'الوحدات العلوية وتجليد الرخام (الباكسبلاش)',
      stage_3_desc: 'ضلف علوية ممتدة مع وحدة زجاج فاميه مضاءة ببروفايل ليد دافئ وتجليد رخام معرق متجانس.',
      stage_4_num: 'المرحلة 04 / 05 — الأجهزة المدمجة',
      stage_4_title: 'البوتاجاز البيلت إن والشفاط المعماري',
      stage_4_desc: 'دمج مسطح الطهي مع شفاط هرمي أسود مطفي لأداء عملي وخطوط تصميمية نظيفة.',
      stage_5_num: 'المرحلة 05 / 05 — اللمسة النهائية',
      stage_5_title: 'الجزيرة الوسطية وكراسي البار',
      stage_5_desc: 'المطبخ مكتمل: جزيرة رخامية واسعة بوحدات تخزين عميقة وستة كراسي بار مريحة. مساحتك بأناقة فاخرة.',

      pill_0: '00 غرفة فارغة',
      pill_1: '01 السفلي والرخام',
      pill_2: '02 الدولاب والثلاجة',
      pill_3: '03 العلوي والتجليد',
      pill_4: '04 البوتاجاز والشفاط',
      pill_5: '05 الجزيرة والكراسي',

      stages_eyebrow: 'منهجية التنفيذ في نالام',
      stages_title: 'ثلاث مراحل دقيقة. نتيجة مضمونة.',
      stages_sub: 'من التصميم ثلاثي الأبعاد الواقعي إلى مرحلة ما قبل التشطيب داخل المصنع وحتى التركيب النهائي في موقعك.',
      journey_1_title: 'التصميم ثلاثي الأبعاد (3D)',
      journey_1_desc: 'رسم وتخطيط دقيق لكل زاوية ببدائل توزيع متعددة لتشاهد مطبخك بواقعية قبل بدء التصنيع.',
      journey_2_title: 'مرحلة ما قبل التشطيب',
      journey_2_desc: 'فحص دقيق للخامات والتقفيل والنجارة وتجهيز الإضاءة المخفية قبل الدهان والتشطيب النهائي.',
      journey_3_title: 'التنفيذ والتركيب بالموقع',
      journey_3_desc: 'تركيب احترافي على يد مهندسي نالام مع ضمان 5 سنوات وصيانة مدى الحياة.',

      spotlight_eyebrow: 'مشروع منفذ على أرض الواقع',
      spotlight_title: 'جولة حقيقية ورأي عميل نالام',
      spotlight_quote: '«حابب أشكر فريق نالام وبشمهندس إسلام الصراحة على التنفيذ والتصميم والتشطيب؛ كانوا ممتازين جداً والنتيجة كانت أفضل بكتير مما كنت أتخيل وبسعر منافس جداً.»',
      spotlight_credit: '— عميل نالام للمطابخ، القاهرة',

      cat_eyebrow: 'كتالوج البيع — 9 أقسام رئيسية',
      cat_title: 'أثاث ومطابخ ووحدات حسب الطلب',
      cat_sub: 'تصفح الأقسام التسعة بأسعار واضحة بالجنيه المصري. اضغط على أي قطعة لمشاهدة الزوايا المتعددة والحجز مباشرة عبر إنستاباي أو المحفظة الإلكترونية.',
      cat_starting: 'السعر',
      cat_view_btn: 'التفاصيل والطلب',
      cat_angles_suffix: 'زوايا',

      mat_eyebrow: 'الخامات والإكسسوارات المعتمدة',
      mat_title: 'جودة هندسية تدوم لسنوات',
      mat_sub: 'الجمال الخارجي يكتمل بمتانة التأسيس الداخلي. نعتمد في نالام أفضل ألواح الكونتر والمفصلات والمجر العالمية.',
      mat_1_title: 'كونتر جود وود / توب وود',
      mat_1_desc: 'ألواح كونتر ساندويتش ميلامين عالية الكثافة تضمن ثباتاً فائقاً للمسامير ومقاومة للالتواء وتشطيباً داخلياً أنيقاً.',
      mat_2_title: 'بورديوم مقاوم للمياه 100%',
      mat_2_desc: 'خامة بورديوم معتمدة ومقاومة للمياه والرطوبة بنسبة 100% مخصصة لوحدات الحوض ووحدات الحمامات.',
      mat_3_title: 'مفصلات SAMET تركي',
      mat_3_desc: 'مفصلات SAMET تركية أصلية بنظام إغلاق هادئ (Soft Close) لأداء سلس وصامت يدوم لعشرات الآلاف من مرات الاستخدام.',
      mat_4_title: 'مجر سفلية FGV إيطالي',
      mat_4_desc: 'مجر أدراج سفلية مخفية من FGV الإيطالية بإغلاق هادئ وتحمّل عالٍ لأثقل أواني المطبخ.',
      war_1_t: 'تركيب احترافي',
      war_1_s: 'تقفيل وضبط دقيق بواسطة مهندسي نالام',
      war_2_t: 'ضمان 5 سنوات',
      war_2_s: 'ضمان شامل على الهيكل والإكسسوارات',
      war_3_t: 'صيانة مدى الحياة',
      war_3_s: 'خدمة ما بعد البيع متوفرة لك دائماً',

      contact_eyebrow: 'معرض القاهرة الجديدة والاستشارات',
      contact_title: 'ابدأ تصميم مساحتك الآن',
      contact_sub: 'شرفنا بزيارة معرض نالام في القاهرة الجديدة أو أرسل تفاصيل مشروعك مباشرة إلى واتساب فريق التصميم.',
      lbl_location: 'موقع المعرض',
      lbl_phone: 'الهاتف والواتساب',
      lbl_hours: 'مواعيد العمل',
      lbl_social: 'إنستجرام',
      btn_maps: 'الموقع على خرائط جوجل',
      btn_wa_direct: 'تحدث عبر واتساب',

      form_name: 'الاسم الكامل',
      form_name_ph: 'مثال: أحمد حسن',
      form_phone: 'رقم الهاتف / الواتساب',
      form_phone_ph: '01X XXXX XXXX',
      form_category: 'القسم المطلوب',
      form_area: 'المنطقة / الكمبوند',
      form_area_ph: 'مثال: القاهرة الجديدة، التجمع الخامس، الرحاب',
      form_notes: 'المقاسات أو تفاصيل المشروع',
      form_notes_ph: 'اكتب المقاسات التقريبية أو موعد زيارة المعرض المفضل...',
      form_submit: 'إرسال الاستفسار عبر واتساب',

      modal_dims: 'الأبعاد:',
      modal_mat: 'الخامات:',
      modal_hw: 'الإكسسوارات:',
      modal_fin: 'التشطيب المقترح:',
      modal_order_title: 'الحجز / الطلب عبر إنستاباي أو المحفظة الإلكترونية',
      modal_instapay_lbl: 'حساب إنستاباي (افتراضي):',
      modal_copy: 'نسخ',
      modal_copied: 'تم النسخ!',
      modal_cust_name: 'الاسم الكامل',
      modal_cust_area: 'منطقة التوصيل (مثال: القاهرة الجديدة)',
      modal_pay_instapay: 'إنستاباي (تحويل بنكي فوري)',
      modal_pay_wallet: 'محفظة إلكترونية (فودافون / أورانج / اتصالات كاش)',
      modal_order_btn: 'تأكيد الحجز عبر واتساب',
      modal_no_card: 'بدون بوابات بطاقات ائتمان — تأكيد فوري ومباشر مع مبيعات نالام عبر واتساب.',

      footer_desc: 'مطابخ ودريسينج روم وأثاث فاخر حسب الطلب في القاهرة الجديدة بخامات معتمدة وإكسسوارات تركية وإيطالية وضمان 5 سنوات.',
      footer_nav_title: 'تصفح الموقع',
      footer_contact_title: 'المعرض والتواصل المباشر',
      footer_contact_page: 'صفحة التواصل وحجز المعاينة',
      footer_copy: '© 2026 Nalam (نالام). All Rights Reserved.',

      contact_page_title: 'تفضل بزيارة معرض نالام بالقاهرة الجديدة',
      contact_page_sub: 'احجز جلسة استشارة مجانية لمعاينة خامات جود وود وبورديوم ومفصلات SAMET ومجر FGV على الطبيعة.',
      back_home: 'العودة للرئيسية'
    }
  };

  let currentLang = 'en';
  let activeCategory = 'all';
  let activeProduct = null;
  let activeAngleIndex = 0;

  try {
    const saved = localStorage.getItem('nalam_lang');
    if (saved === 'ar' || saved === 'en') currentLang = saved;
  } catch (e) { /* ignore storage restrictions */ }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  }

  function formatPrice(egp) {
    const num = Number(egp).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
    return currentLang === 'ar' ? `${num} ج.م` : `${num} EGP`;
  }

  function getCategoryLabel(catId) {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (!cat) return catId;
    return currentLang === 'ar' ? cat.ar : cat.en;
  }

  /* Luxury SVG fallback for placeholder product photo slots */
  function makePlaceholderSvg(product, angleLabel, rawPath) {
    const title = (currentLang === 'ar' ? product.titleAr : product.titleEn).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const cat = getCategoryLabel(product.category).replace(/&/g, '&amp;');
    const angle = (angleLabel || 'View').replace(/&/g, '&amp;');
    const fileHint = (rawPath || '').replace(/&/g, '&amp;');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F7F3ED"/>
          <stop offset="100%" stop-color="#E5D7C3"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)"/>
      <rect x="28" y="28" width="744" height="544" rx="18" fill="none" stroke="#B08D57" stroke-opacity="0.45" stroke-width="1.5"/>
      <rect x="44" y="44" width="712" height="512" rx="12" fill="none" stroke="#231F1D" stroke-opacity="0.08" stroke-width="1"/>
      <line x1="260" y1="225" x2="540" y2="225" stroke="#B08D57" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="400" y="195" text-anchor="middle" font-family="Georgia, serif" font-size="22" letter-spacing="6" fill="#8F6F3F">NALAM</text>
      <text x="400" y="275" text-anchor="middle" font-family="Georgia, serif" font-size="30" font-weight="600" fill="#231F1D">${title}</text>
      <text x="400" y="318" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#6E635B">${cat} • ${angle}</text>
      <rect x="200" y="365" width="400" height="44" rx="22" fill="#231F1D" fill-opacity="0.07"/>
      <text x="400" y="393" text-anchor="middle" font-family="monospace" font-size="14" fill="#4A423D">${fileHint}</text>
      <text x="400" y="460" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="18" fill="#B08D57">Your Zone Is Glam.</text>
    </svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  function showToast(msg) {
    let toast = document.getElementById('nalamToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  /* ========================================================================
     1. Language Switcher (EN / AR + RTL)
     ======================================================================== */
  function applyLanguage() {
    const html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });

    // Dynamic config text
    document.querySelectorAll('[data-config-hours]').forEach(el => {
      el.textContent = currentLang === 'ar' ? CONFIG.showroomHoursAr : CONFIG.showroomHoursEn;
    });
    document.querySelectorAll('[data-config-address]').forEach(el => {
      el.textContent = currentLang === 'ar' ? CONFIG.addressAr : CONFIG.addressEn;
    });

    renderFilterTabs();
    renderCatalogue();
    populateInquiryCategorySelect();
    if (activeProduct) renderModalContent();
  }

  function bindLanguageToggles() {
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        try { localStorage.setItem('nalam_lang', currentLang); } catch (e) {}
        applyLanguage();
      });
    });
  }

  /* ========================================================================
     2. Sticky Header & Mobile Drawer
     ======================================================================== */
  function initHeader() {
    const header = document.querySelector('.site-header');
    const menuBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');

    if (header) {
      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 24);
      }, { passive: true });
    }

    if (menuBtn && drawer) {
      menuBtn.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
      });
      drawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => drawer.classList.remove('open'));
      });
    }
  }

  /* ========================================================================
     3. Scroll-Reveal 5-Stage Kitchen Assembly Animation
     ======================================================================== */
  function initKitchenScrollShowcase() {
    const track = document.getElementById('showcase');
    if (!track) return;

    const layers = Array.from(track.querySelectorAll('.room-layer[data-stage]'));
    const cards = Array.from(track.querySelectorAll('.stage-card[data-stage-card]'));
    const pills = Array.from(track.querySelectorAll('.stage-pill[data-stage-btn]'));
    const progressFill = document.getElementById('stageProgressFill');
    const badgeText = document.getElementById('stageBadgeText');

    let currentStage = 0;
    let ticking = false;

    function applyStage(stageIdx, progressPct) {
      currentStage = stageIdx;
      layers.forEach(img => {
        const s = Number(img.getAttribute('data-stage'));
        img.classList.toggle('visible', s <= stageIdx);
      });
      cards.forEach(card => {
        const s = Number(card.getAttribute('data-stage-card'));
        card.classList.toggle('active', s === stageIdx);
      });
      pills.forEach(pill => {
        const s = Number(pill.getAttribute('data-stage-btn'));
        pill.classList.toggle('active', s === stageIdx);
      });
      if (progressFill) {
        progressFill.style.width = `${Math.max(0, Math.min(100, progressPct))}%`;
      }
      if (badgeText) {
        badgeText.textContent = `0${stageIdx} / 05`;
      }
    }

    function updateFromScroll() {
      ticking = false;
      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const raw = Math.max(0, Math.min(1, -rect.top / scrollable));
      let stageIdx = 0;
      if (raw >= 0.82) stageIdx = 5;
      else if (raw >= 0.64) stageIdx = 4;
      else if (raw >= 0.46) stageIdx = 3;
      else if (raw >= 0.28) stageIdx = 2;
      else if (raw >= 0.10) stageIdx = 1;
      else stageIdx = 0;

      applyStage(stageIdx, raw * 100);
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateFromScroll);
      }
    }, { passive: true });

    // Interactive pill buttons let users jump straight to any stage
    const stageScrollTargets = [0.02, 0.18, 0.36, 0.54, 0.72, 0.94];
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const idx = Number(pill.getAttribute('data-stage-btn'));
        const scrollable = track.offsetHeight - window.innerHeight;
        const targetY = track.offsetTop + scrollable * (stageScrollTargets[idx] || 0);
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        applyStage(idx, (stageScrollTargets[idx] || 0) * 100);
      });
    });

    applyStage(0, 0);
  }

  /* ========================================================================
     4. 9-Category Sales Catalogue & Filter Tabs
     ======================================================================== */
  function renderFilterTabs() {
    const bar = document.getElementById('catalogueFilterBar');
    if (!bar) return;

    bar.innerHTML = CATEGORIES.map(cat => {
      const count = cat.id === 'all'
        ? PRODUCTS.length
        : PRODUCTS.filter(p => p.category === cat.id).length;
      const label = currentLang === 'ar' ? cat.ar : cat.en;
      const activeCls = cat.id === activeCategory ? 'active' : '';
      return `<button type="button" class="filter-tab ${activeCls}" data-cat="${cat.id}">
        <span>${label}</span>
        <span class="filter-count">(${count})</span>
      </button>`;
    }).join('');

    bar.querySelectorAll('.filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-cat');
        renderFilterTabs();
        renderCatalogue();
      });
    });
  }

  function renderCatalogue() {
    const grid = document.getElementById('catalogueGrid');
    if (!grid) return;

    const list = activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === activeCategory);

    grid.innerHTML = '';
    list.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');

      const title = currentLang === 'ar' ? product.titleAr : product.titleEn;
      const mat = currentLang === 'ar' ? product.materialAr : product.materialEn;
      const catLabel = getCategoryLabel(product.category);
      const firstImg = product.images[0];
      const firstAngleLabel = currentLang === 'ar' ? firstImg.labelAr : firstImg.labelEn;
      const fallbackUrl = makePlaceholderSvg(product, firstAngleLabel, firstImg.src);

      card.innerHTML = `
        <div class="product-media">
          <img src="${firstImg.src}" alt="${title}" loading="lazy">
          <span class="product-cat-badge">${catLabel}</span>
          <span class="product-views-badge">${product.images.length} ${t('cat_angles_suffix')}</span>
        </div>
        <div class="product-body">
          <h3 class="product-title">${title}</h3>
          <div class="product-dims">${product.dimensions}</div>
          <p class="product-spec">${mat}</p>
          <div class="product-footer">
            <div class="product-price">
              <span class="product-price-label">${t('cat_starting')}</span>
              <span class="product-price-val">${formatPrice(product.priceEgp)}</span>
            </div>
            <span class="btn btn-outline product-view-btn">${t('cat_view_btn')}</span>
          </div>
        </div>
      `;

      const imgEl = card.querySelector('img');
      imgEl.addEventListener('error', () => {
        if (imgEl.dataset.fallbackApplied) return;
        imgEl.dataset.fallbackApplied = '1';
        imgEl.src = fallbackUrl;
      });

      const openHandler = () => openProductModal(product);
      card.addEventListener('click', openHandler);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openHandler();
        }
      });

      grid.appendChild(card);
    });
  }

  /* ========================================================================
     5. Multi-View Product Modal & InstaPay / Wallet WhatsApp Order Builder
     ======================================================================== */
  function openProductModal(product) {
    activeProduct = product;
    activeAngleIndex = 0;
    const backdrop = document.getElementById('productModal');
    if (!backdrop) return;
    renderModalContent();
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    const backdrop = document.getElementById('productModal');
    if (!backdrop) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    activeProduct = null;
  }

  function renderModalContent() {
    if (!activeProduct) return;
    const p = activeProduct;
    const title = currentLang === 'ar' ? p.titleAr : p.titleEn;
    const mat = currentLang === 'ar' ? p.materialAr : p.materialEn;
    const hw = currentLang === 'ar' ? p.hardwareAr : p.hardwareEn;
    const fin = currentLang === 'ar' ? p.finishAr : p.finishEn;
    const curImg = p.images[activeAngleIndex] || p.images[0];
    const curAngleLabel = currentLang === 'ar' ? curImg.labelAr : curImg.labelEn;

    const mainImg = document.getElementById('modalMainImg');
    const angleLbl = document.getElementById('modalAngleLabel');
    const thumbsWrap = document.getElementById('modalThumbs');

    if (mainImg) {
      delete mainImg.dataset.fallbackApplied;
      mainImg.alt = `${title} — ${curAngleLabel}`;
      mainImg.onerror = () => {
        if (mainImg.dataset.fallbackApplied) return;
        mainImg.dataset.fallbackApplied = '1';
        mainImg.src = makePlaceholderSvg(p, curAngleLabel, curImg.src);
      };
      mainImg.src = curImg.src;
    }
    if (angleLbl) angleLbl.textContent = curAngleLabel;

    if (thumbsWrap) {
      thumbsWrap.innerHTML = '';
      p.images.forEach((imgObj, idx) => {
        const lbl = currentLang === 'ar' ? imgObj.labelAr : imgObj.labelEn;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `modal-thumb ${idx === activeAngleIndex ? 'active' : ''}`;
        btn.innerHTML = `<img src="${imgObj.src}" alt="${lbl}"><span>${lbl}</span>`;
        const tImg = btn.querySelector('img');
        tImg.addEventListener('error', () => {
          if (tImg.dataset.fallbackApplied) return;
          tImg.dataset.fallbackApplied = '1';
          tImg.src = makePlaceholderSvg(p, lbl, imgObj.src);
        });
        btn.addEventListener('click', () => {
          activeAngleIndex = idx;
          renderModalContent();
        });
        thumbsWrap.appendChild(btn);
      });
    }

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setText('modalCategory', `${getCategoryLabel(p.category)} • ${p.code}`);
    setText('modalTitle', title);
    setText('modalPrice', formatPrice(p.priceEgp));
    setText('modalDimsVal', p.dimensions);
    setText('modalMatVal', mat);
    setText('modalHwVal', hw);
    setText('modalFinVal', fin);
    setText('modalInstapayHandle', CONFIG.instapayHandle || 'nalam@instapay');
  }

  function initProductModal() {
    const backdrop = document.getElementById('productModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const copyBtn = document.getElementById('copyInstapayBtn');
    const orderForm = document.getElementById('modalOrderForm');

    if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
    if (backdrop) {
      backdrop.addEventListener('click', e => {
        if (e.target === backdrop) closeProductModal();
      });
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeProductModal();
        closeZoomModal();
      }
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const handle = CONFIG.instapayHandle || 'nalam@instapay';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(handle).catch(() => fallbackCopy(handle));
        } else {
          fallbackCopy(handle);
        }
        showToast(`${t('modal_copied')} ${handle}`);
      });
    }

    if (orderForm) {
      orderForm.addEventListener('submit', e => {
        e.preventDefault();
        if (!activeProduct) return;
        const name = (document.getElementById('orderCustName')?.value || '').trim();
        const area = (document.getElementById('orderCustArea')?.value || '').trim();
        const pay = document.getElementById('orderPayMethod')?.value || 'InstaPay';
        const title = currentLang === 'ar' ? activeProduct.titleAr : activeProduct.titleEn;

        const msg = currentLang === 'ar'
          ? `مرحباً فريق نالام (Nalam)،\nأرغب في حجز/طلب القطعة التالية:\n• الموديل: ${title} (${activeProduct.code})\n• السعر: ${formatPrice(activeProduct.priceEgp)}\n• الاسم: ${name}\n• منطقة التوصيل: ${area}\n• طريقة الدفع المفضلة: ${pay}\n• حساب إنستاباي: ${CONFIG.instapayHandle}`
          : `Hello Nalam Team,\nI would like to reserve/order the following item:\n• Model: ${title} (${activeProduct.code})\n• Price: ${formatPrice(activeProduct.priceEgp)}\n• Customer Name: ${name}\n• Delivery Area: ${area}\n• Payment Method: ${pay}\n• InstaPay Ref: ${CONFIG.instapayHandle}`;

        const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ========================================================================
     6. Showroom WhatsApp Inquiry Form & Image Zoom Lightbox
     ======================================================================== */
  function populateInquiryCategorySelect() {
    document.querySelectorAll('[data-inquiry-cat-select]').forEach(sel => {
      const currentVal = sel.value;
      sel.innerHTML = CATEGORIES.filter(c => c.id !== 'all').map(cat => {
        const label = currentLang === 'ar' ? cat.ar : cat.en;
        return `<option value="${label}">${label}</option>`;
      }).join('');
      if (currentVal) sel.value = currentVal;
    });
  }

  function initInquiryForms() {
    document.querySelectorAll('[data-wa-inquiry-form]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const fd = new FormData(form);
        const name = (fd.get('name') || '').toString().trim();
        const phone = (fd.get('phone') || '').toString().trim();
        const category = (fd.get('category') || '').toString().trim();
        const area = (fd.get('area') || '').toString().trim();
        const notes = (fd.get('notes') || '').toString().trim();

        const msg = currentLang === 'ar'
          ? `مرحباً معرض نالام بالقاهرة الجديدة،\nاستفسار جديد عبر الموقع:\n• الاسم: ${name}\n• رقم الهاتف: ${phone}\n• القسم المطلوب: ${category}\n• المنطقة: ${area}\n• التفاصيل: ${notes || 'حجز موعد استشارة بالمعرض'}`
          : `Hello Nalam New Cairo Showroom,\nNew website inquiry:\n• Name: ${name}\n• Phone: ${phone}\n• Category: ${category}\n• Area / Compound: ${area}\n• Notes: ${notes || 'Requesting showroom consultation'}`;

        const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    });
  }

  function openZoomModal(src, alt) {
    const zm = document.getElementById('zoomModal');
    const zi = document.getElementById('zoomModalImg');
    if (!zm || !zi) return;
    zi.src = src;
    zi.alt = alt || 'Nalam Project';
    zm.classList.add('open');
  }

  function closeZoomModal() {
    const zm = document.getElementById('zoomModal');
    if (zm) zm.classList.remove('open');
  }

  function initZoomTriggers() {
    document.querySelectorAll('[data-zoomable]').forEach(img => {
      img.addEventListener('click', () => openZoomModal(img.src, img.alt));
    });
    const zm = document.getElementById('zoomModal');
    if (zm) zm.addEventListener('click', closeZoomModal);
  }

  /* ========================================================================
     Init
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    bindLanguageToggles();
    initKitchenScrollShowcase();
    initProductModal();
    initInquiryForms();
    initZoomTriggers();
    applyLanguage();
  });
})();
