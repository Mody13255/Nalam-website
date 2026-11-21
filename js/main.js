/* ==========================================================================
   NALAM — Production Interactive & CRO Engine
   Side-by-Side 6-Stage Scroll Kitchen Assembly, EN/AR RTL Switcher,
   Guest & Account Cart/Wishlist, Flat-Rate 5,000 EGP Delivery Engine,
   Pre-Filled WhatsApp Checkout, Meta Pixel & Silent Google Sheet Lead Hook
   ========================================================================== */

(function () {
  'use strict';

  const CONFIG = window.NALAM_CONFIG || {};
  const CATEGORIES = window.NALAM_CATEGORIES || [];
  const PRODUCTS = window.NALAM_PRODUCTS || [];

  /* Configurable Google Apps Script Webhook URL for Silent Lead & Order Capture */
  const GOOGLE_SHEET_WEBHOOK_URL = CONFIG.googleSheetWebhookUrl || '';

  const DEFAULT_FALLBACK_IMG = 'assets/logo.png';

  /* 6-Stage Side-by-Side Hero Narrative Copy (EN & AR) */
  const HERO_STAGES = [
    {
      stepEn: 'Stage 01 • Architectural Canvas',
      stepAr: 'المرحلة 01 • الفراغ المعماري',
      titleEn: 'Raw Space, Measured to the Millimeter',
      titleAr: 'فراغ خام بمقاسات هندسية دقيقة',
      descEn: 'Every Nalam kitchen begins with laser site measurements, plumbing and electrical mapping, and a 3D proportion study tailored to your room.',
      descAr: 'يبدأ كل مطبخ من نالام برفع مقاسات بالليزر وتخطيط دقيق للسباكة والكهرباء ودراسة ثلاثية الأبعاد متكاملة.',
      chipsEn: ['Laser Survey', '3D Proportion Study', 'Zero Guesswork'],
      chipsAr: ['رفع مقاسات بالليزر', 'دراسة 3D واقعية', 'بدون تخمين']
    },
    {
      stepEn: 'Stage 02 • Base Foundation',
      stepAr: 'المرحلة 02 • الوحدات السفلية',
      titleEn: 'Good Wood Carcasses & Waterproof Boardium',
      titleAr: 'علب جود وود وبورديوم مقاوم للمياه',
      descEn: 'Precision-milled Good Wood / Top Wood base units paired with 100% waterproof Boardium under the sink for decades of structural stability.',
      descAr: 'وحدات سفلية من كونتر جود وود / توب وود مع وحدة حوض من البورديوم المقاوم للمياه بنسبة 100% لثبات يدوم لسنوات.',
      chipsEn: ['Good Wood Core', '100% Boardium Sink', 'Moisture Shielded'],
      chipsAr: ['كونتر جود وود', 'حوض بورديوم 100%', 'مقاوم للرطوبة']
    },
    {
      stepEn: 'Stage 03 • Vertical Architecture',
      stepAr: 'المرحلة 03 • الوحدات الطولية',
      titleEn: 'Full-Height Pantry & Tall Storage Towers',
      titleAr: 'وحدات تخزين طولية بارتفاع كامل',
      descEn: 'Floor-to-ceiling tall units seamlessly house ovens, pantries, and refrigerator alcoves with shadow-gap precision and Turkish SAMET hinges.',
      descAr: 'وحدات طولية حتى السقف تستوعب الأفران والثلاجة ووحدات التخزين بدقة متناهية ومفصلات SAMET تركية أصلية.',
      chipsEn: ['260 cm Full Height', 'Turkish SAMET', 'Seamless Alcoves'],
      chipsAr: ['ارتفاع 260 سم', 'مفصلات SAMET', 'توزيع ذكي']
    },
    {
      stepEn: 'Stage 04 • Upper Cabinetry',
      stepAr: 'المرحلة 04 • الوحدات العلوية',
      titleEn: 'Balanced Elevation & Hidden LED Profiles',
      titleAr: 'توازن علوي وإضاءة ليد مخفية',
      descEn: 'Upper cabinets align with minimal gaps and integrated warm task lighting that highlights veined quartz counters and architectural textures.',
      descAr: 'وحدات علوية بأقل فراغات ممكنة مع إضاءة ليد دافئة مدمجة تبرز فخامة الكوارتز وتفاصيل التصميم.',
      chipsEn: ['Minimal-Gap Joinery', 'Warm LED Channel', '10 cm Top Filler'],
      chipsAr: ['تقفيل دقيق', 'إضاءة ليد دافئة', 'فيلر علوي 10 سم']
    },
    {
      stepEn: 'Stage 05 • Hardware & Appliances',
      stepAr: 'المرحلة 05 • الأجهزة والإكسسوارات',
      titleEn: 'Built-In Appliances & Italian FGV Glide',
      titleAr: 'أجهزة بيلت إن ومجر FGV إيطالي',
      descEn: 'Concealed Italian FGV undermount soft-close runners and precision cutouts integrate hobs, hoods, ovens, and sinks into one cohesive plane.',
      descAr: 'مجر أدراج سفلية مخفية من FGV الإيطالية وفتحات دقيقة تدمج البوتاجاز والشفاط والفرن والحوض بتناغم تام.',
      chipsEn: ['Italian FGV Runners', 'Soft-Close Motion', 'Built-In Integration'],
      chipsAr: ['مجر FGV إيطالي', 'إغلاق هادئ', 'دمج الأجهزة']
    },
    {
      stepEn: 'Stage 06 • Ready to Live In',
      stepAr: 'المرحلة 06 • التسليم النهائي',
      titleEn: 'Your Zone Is Glam — Backed by 5-Year Warranty',
      titleAr: 'مساحتك بأناقة فاخرة — بضمان 5 سنوات',
      descEn: 'Delivered and aligned by Nalam site engineers anywhere in Cairo & Giza for one flat 5,000 EGP fee, complete with 5-year warranty and maintenance on request.',
      descAr: 'توصيل وتركيب احترافي على يد مهندسي نالام في القاهرة والجيزة بسعر ثابت 5,000 ج.م، مع ضمان 5 سنوات وصيانة عند الطلب.',
      chipsEn: ['5-Year Warranty', '5,000 EGP Flat Delivery', 'Engineer Installed'],
      chipsAr: ['ضمان 5 سنوات', 'توصيل ثابت 5,000 ج.م', 'تركيب هندسي']
    }
  ];

  const I18N = {
    en: {
      nav_showcase: 'Showcase',
      nav_stages: 'Our Stages',
      nav_catalogue: 'Catalogue',
      nav_materials: 'Materials & Hardware',
      nav_contact: 'Contact Us',
      nav_wa: 'WhatsApp',
      nav_signin: 'Sign In',
      nav_cart: 'Cart',
      nav_wishlist: 'Wishlist',
      lang_btn: 'عربي',

      hero_eyebrow: 'NEW CAIRO ARCHITECTURAL SHOWROOM',
      hero_title_1: 'Watch Space',
      hero_title_em: 'Come Alive',
      hero_cta_cat: 'Explore Sales Catalogue',
      hero_cta_book: 'Book Showroom Visit',
      hero_scroll_cue: 'Scroll to assemble each stage of the kitchen',

      stages_eyebrow: 'THE NALAM CRAFT PROCESS',
      stages_title: 'Three Disciplined Stages. Zero Guesswork.',
      stages_sub: 'From photorealistic 3D layouts to raw factory precision and clean on-site installation—what you approve is exactly what we deliver.',
      journey_1_title: '3D Modelling & Layout',
      journey_1_desc: 'Designing spaces and creating possibilities with corner and straight layout studies before a single board is cut.',
      journey_2_title: 'Pre-Finishing Stage',
      journey_2_desc: 'Every great space starts long before the final touch—precision CNC joinery, raw carcass checks, and lighting integration in our workshop.',
      journey_3_title: 'On-Site Installation',
      journey_3_desc: 'Real spaces, real work, real results—installed by Nalam engineers with 5-year warranty and maintenance on request.',

      spotlight_eyebrow: 'REAL DELIVERED PROJECT',
      spotlight_title: 'Client Walkthrough & On-Site Finish',
      spotlight_quote: '“I would like to thank the Nalam team and Eng. Islam for the design, execution, and finishing—truly outstanding and far better than I imagined, at a very competitive price.”',
      spotlight_credit: '— Verified Nalam Kitchen Client, Cairo',

      cat_eyebrow: 'SALES CATALOGUE — 9 CATEGORIES',
      cat_title: 'Bespoke Furniture & Cabinetry',
      cat_sub: 'Browse all nine custom categories with transparent EGP pricing. Add pieces to your cart or wishlist, inspect multiple angles, and check out via InstaPay or Mobile Wallet.',
      cat_starting: 'Price',
      cat_view_btn: 'Details',
      cat_add_cart: 'Add to Cart',
      cat_add_wish: 'Wishlist',
      cat_saved_wish: 'Saved',
      cat_angles_suffix: 'Angles',

      mat_eyebrow: 'ENGINEERING & HARDWARE',
      mat_title: 'Dedicated Materials for Kitchens & Rooms',
      mat_sub: 'Every Nalam piece is built with purpose-selected boards—heavy-duty moisture-ready construction for kitchens and warp-resistant precision blockboard for bedrooms and living units.',
      mat_scope_kitchen: 'For Kitchens',
      mat_scope_rooms: 'For Rooms & Units',
      mat_scope_wet: 'Sink & WC Units',
      mat_scope_hw: 'Motion Hardware',
      mat_1_title: 'Good Wood / Top Wood',
      mat_1_desc: 'Dedicated for kitchens: melamine-faced sandwich blockboard carcasses delivering superior screw-holding strength and durability.',
      mat_2_title: '16mm Warp-Resistant Blockboard',
      mat_2_desc: 'Dedicated for rooms (bedrooms, dressings, vanities & cabinets): 16mm melamine-faced blockboard precision-joined with minimal gaps.',
      mat_3_title: '100% Waterproof Boardium',
      mat_3_desc: 'High-density 100% water-resistant Boardium engineered for kitchen sink bases and all WC vanity units to prevent moisture swelling.',
      mat_4_title: 'Turkish SAMET Hinges',
      mat_4_desc: 'Original Turkish SAMET soft-close hydraulic hinges engineered for silent, effortless door closing across tens of thousands of cycles.',
      mat_5_title: 'Italian FGV Runners',
      mat_5_desc: 'Concealed Italian FGV undermount soft-close drawer runners delivering smooth full-extension glide under heavy daily loads.',
      war_1_t: 'Professional Installation',
      war_1_s: 'Precision alignment by Nalam site engineers',
      war_2_t: '5-Year Warranty',
      war_2_s: 'Full structural & hardware peace of mind',
      war_3_t: 'Maintenance on Request',
      war_3_s: 'Dedicated after-sales service whenever you need it',

      contact_eyebrow: 'NEW CAIRO SHOWROOM & CONSULTATIONS',
      contact_title: 'Bring Your Space to Life',
      contact_sub: 'Visit our New Cairo showroom or send your project specs directly to our WhatsApp design desk for a tailored quotation.',
      lbl_location: 'Showroom Location',
      lbl_phone: 'Phone & WhatsApp',
      lbl_hours: 'Showroom Hours',
      lbl_social: 'Instagram',
      btn_maps: 'Open in Google Maps',
      btn_copy_map: 'Copy Maps Link',
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
      modal_order_title: 'Quick Reserve via InstaPay or Mobile Wallet',
      modal_instapay_lbl: 'InstaPay Address:',
      modal_copy: 'Copy',
      modal_copied: 'Copied!',
      modal_cust_name: 'Your Full Name',
      modal_cust_area: 'Delivery Area (e.g. New Cairo)',
      modal_pay_instapay: 'InstaPay (Instant Bank Transfer)',
      modal_pay_wallet: 'Mobile Wallet (Vodafone / Orange / Etisalat Cash)',
      modal_order_btn: 'Reserve Directly via WhatsApp',
      modal_no_card: 'Zero credit card gateways — fast confirmation directly with Nalam sales on WhatsApp.',

      auth_signin_tab: 'Sign In',
      auth_signup_tab: 'Create Account',
      auth_perk_1: 'Saved Cart & Wishlist',
      auth_perk_2: '1-Click Checkout Fill',
      auth_perk_3: 'Saved Floor & Address',
      auth_profile_title: 'My Nalam Account',
      auth_email: 'Email Address',
      auth_password: 'Password',
      auth_show: 'Show',
      auth_hide: 'Hide',
      auth_forgot: 'Forgot password?',
      auth_forgot_toast: 'Contact Nalam on WhatsApp (+20 11 32284750) or create a new account with a different email.',
      auth_fullname: 'Full Name',
      auth_phone: 'Phone / WhatsApp',
      auth_gov: 'Governorate',
      auth_gov_cairo: 'Cairo Governorate',
      auth_gov_giza: 'Giza Governorate',
      auth_gov_other: 'Other Governorate',
      auth_address: 'Delivery Area / Street Address',
      auth_floor: 'Building Floor Level',
      auth_signin_btn: 'Sign In to Nalam',
      auth_signup_btn: 'Create My Nalam Account',
      auth_save_profile: 'Save Account Details',
      auth_signout_btn: 'Sign Out',
      auth_need_account: 'Sign in or create a Nalam account to sync your cart, wishlist, and delivery floor.',
      auth_invalid: 'Invalid email or password. Please double-check or create a new account.',
      auth_exists: 'An account with this email already exists. Please sign in instead.',

      cart_title: 'Your Shopping Cart',
      cart_trust: '5-Year Warranty • Flat-Rate Cairo & Giza Delivery • Direct WhatsApp Confirmation',
      cart_empty: 'Your cart is currently empty. Add pieces from the catalogue to start your order.',
      cart_empty_delivery_note: 'Flat-rate 5,000 EGP delivery & professional installation across anywhere in Cairo & Giza (up to 2nd floor) applies to any order size, whether single pieces or full rooms.',
      cart_flat_badge: 'Flat-Rate Delivery: Same 5,000 EGP fee whether you order 1 item or a full room.',
      wish_title: 'Your Wishlist',
      wish_empty: 'Your wishlist is empty. Save your favorite pieces to review or move to cart anytime.',
      move_to_cart: 'Move to Cart',
      remove_lbl: 'Remove',
      checkout_details_title: 'Customer & Delivery Details',
      checkout_name_lbl: 'Customer Name *',
      checkout_name_ph: 'Full Name',
      checkout_phone_lbl: 'Phone / WhatsApp *',
      checkout_phone_ph: '01X XXXX XXXX',
      checkout_gov_lbl: 'Governorate *',
      checkout_floor_lbl: 'Floor Number *',
      checkout_area_lbl: 'Compound / Street Address (Optional)',
      checkout_area_ph: 'e.g. Fifth Settlement, Madinaty, Sheikh Zayed',
      checkout_pay_title: 'Payment Method *',
      pay_instapay_title: 'InstaPay',
      pay_instapay_sub: 'Instant Bank Transfer',
      pay_wallet_title: 'Mobile Wallet',
      pay_wallet_sub: 'Vodafone / Orange / Etisalat',
      subtotal_lbl: 'Items Subtotal',
      delivery_lbl: 'Delivery',
      delivery_base_lbl: 'Flat-Rate Delivery (Cairo & Giza, up to 2nd floor)',
      delivery_floor_lbl: 'Additional Floor Carry Fee',
      delivery_floor_included: 'Included (Up to 2nd Floor)',
      grand_total_lbl: 'Estimated Total',
      checkout_btn: 'Confirm Order & Send via WhatsApp',
      checkout_err_required: 'Please enter your Name and valid Phone Number to confirm your order.',

      footer_desc: 'Bespoke luxury kitchens, dressing rooms, and architectural cabinetry crafted in New Cairo with certified materials and 5-year warranty.',
      footer_nav_title: 'Explore',
      footer_contact_title: 'Showroom & Direct',
      footer_contact_page: 'Contact Us',

      contact_page_title: 'Visit Our New Cairo Showroom',
      contact_page_sub: 'Book a private material consultation, explore Good Wood, 16mm Blockboard, Boardium, SAMET, and FGV samples in person, or send your dimensions for a fast quotation.',
      back_home: 'Back to Home'
    },
    ar: {
      nav_showcase: 'العرض التفاعلي',
      nav_stages: 'مراحل التنفيذ',
      nav_catalogue: 'الكتالوج',
      nav_materials: 'الخامات والإكسسوارات',
      nav_contact: 'تواصل معنا',
      nav_wa: 'واتساب',
      nav_signin: 'تسجيل الدخول',
      nav_cart: 'السلة',
      nav_wishlist: 'المفضلة',
      lang_btn: 'EN',

      hero_eyebrow: 'معرض نالام — القاهرة الجديدة',
      hero_title_1: 'شاهد مساحتك',
      hero_title_em: 'تنطق بالفخامة',
      hero_cta_cat: 'تصفح كتالوج البيع',
      hero_cta_book: 'احجز زيارة المعرض',
      hero_scroll_cue: 'مرّر للأسفل لمشاهدة مراحل تجميع المطبخ',

      stages_eyebrow: 'منهجية التنفيذ في نالام',
      stages_title: 'ثلاث مراحل دقيقة. نتيجة مضمونة.',
      stages_sub: 'من التصميم ثلاثي الأبعاد الواقعي إلى مرحلة ما قبل التشطيب داخل المصنع وحتى التركيب النهائي في موقعك.',
      journey_1_title: 'التصميم ثلاثي الأبعاد (3D)',
      journey_1_desc: 'رسم وتخطيط دقيق لكل زاوية ببدائل توزيع متعددة لتشاهد مطبخك بواقعية قبل بدء التصنيع.',
      journey_2_title: 'مرحلة ما قبل التشطيب',
      journey_2_desc: 'فحص دقيق للخامات والتقفيل والنجارة وتجهيز الإضاءة المخفية قبل الدهان والتشطيب النهائي.',
      journey_3_title: 'التنفيذ والتركيب بالموقع',
      journey_3_desc: 'تركيب احترافي على يد مهندسي نالام مع ضمان 5 سنوات وصيانة عند الطلب.',

      spotlight_eyebrow: 'مشروع منفذ على أرض الواقع',
      spotlight_title: 'جولة حقيقية ورأي عميل نالام',
      spotlight_quote: '«حابب أشكر فريق نالام وبشمهندس إسلام الصراحة على التنفيذ والتصميم والتشطيب؛ كانوا ممتازين جداً والنتيجة كانت أفضل بكتير مما كنت أتخيل وبسعر منافس جداً.»',
      spotlight_credit: '— عميل نالام للمطابخ، القاهرة',

      cat_eyebrow: 'كتالوج البيع — 9 أقسام رئيسية',
      cat_title: 'أثاث ومطابخ ووحدات حسب الطلب',
      cat_sub: 'تصفح الأقسام التسعة بأسعار واضحة بالجنيه المصري. أضف القطع إلى السلة أو المفضلة وشاهد الزوايا المتعددة وأتمم الطلب عبر إنستاباي أو المحفظة الإلكترونية.',
      cat_starting: 'السعر',
      cat_view_btn: 'التفاصيل',
      cat_add_cart: 'أضف للسلة',
      cat_add_wish: 'المفضلة',
      cat_saved_wish: 'بالمفضلة',
      cat_angles_suffix: 'زوايا',

      mat_eyebrow: 'الخامات والإكسسوارات المعتمدة',
      mat_title: 'خامات مخصصة للمطابخ والغرف',
      mat_sub: 'نختار في نالام الخامة الهندسية الأنسب لكل فراغ: علب مطابخ عالية التحمل وخامات غرف مقاومة للتقوس بأعلى دقة تقفيل.',
      mat_scope_kitchen: 'للمطابخ',
      mat_scope_rooms: 'للغرف والوحدات',
      mat_scope_wet: 'الحوض والحمام',
      mat_scope_hw: 'إكسسوارات الحركة',
      mat_1_title: 'كونتر جود وود / توب وود',
      mat_1_desc: 'مخصص للمطابخ: ألواح كونتر ساندويتش ميلامين عالية الكثافة لثبات فائق للمسامير وتحمل الاستخدام اليومي الشاق.',
      mat_2_title: 'كونتر ميلامين مقاوم للتقوس 16 مم',
      mat_2_desc: 'مخصص للغرف (غرف النوم، الدريسينج، التسريحات والجزامات): كونتر ميلامين 16 مم مقاوم للتقوس بتقفيل دقيق وأقل فراغات ممكنة.',
      mat_3_title: 'بورديوم مقاوم للمياه 100%',
      mat_3_desc: 'خامة بورديوم معتمدة ومقاومة للمياه والرطوبة بنسبة 100% مخصصة لوحدات الحوض ووحدات الحمامات.',
      mat_4_title: 'مفصلات SAMET تركي',
      mat_4_desc: 'مفصلات SAMET تركية أصلية بنظام إغلاق هادئ (Soft Close) لأداء سلس وصامت يدوم لعشرات الآلاف من مرات الاستخدام.',
      mat_5_title: 'مجر سفلية FGV إيطالي',
      mat_5_desc: 'مجر أدراج سفلية مخفية من FGV الإيطالية بإغلاق هادئ وتحمّل عالٍ لأثقل أواني المطبخ والملابس.',
      war_1_t: 'تركيب احترافي',
      war_1_s: 'تقفيل وضبط دقيق بواسطة مهندسي نالام',
      war_2_t: 'ضمان 5 سنوات',
      war_2_s: 'ضمان شامل على الهيكل والإكسسوارات',
      war_3_t: 'صيانة عند الطلب',
      war_3_s: 'خدمة ما بعد البيع متوفرة لك وقت الحاجة',

      contact_eyebrow: 'معرض القاهرة الجديدة والاستشارات',
      contact_title: 'ابدأ تصميم مساحتك الآن',
      contact_sub: 'شرفنا بزيارة معرض نالام في القاهرة الجديدة أو أرسل تفاصيل مشروعك مباشرة إلى واتساب فريق التصميم.',
      lbl_location: 'موقع المعرض',
      lbl_phone: 'الهاتف والواتساب',
      lbl_hours: 'مواعيد العمل',
      lbl_social: 'إنستجرام',
      btn_maps: 'فتح في خرائط جوجل',
      btn_copy_map: 'نسخ رابط الموقع',
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
      modal_order_title: 'حجز سريع عبر إنستاباي أو المحفظة الإلكترونية',
      modal_instapay_lbl: 'حساب إنستاباي:',
      modal_copy: 'نسخ',
      modal_copied: 'تم النسخ!',
      modal_cust_name: 'الاسم الكامل',
      modal_cust_area: 'منطقة التوصيل (مثال: القاهرة الجديدة)',
      modal_pay_instapay: 'إنستاباي (تحويل بنكي فوري)',
      modal_pay_wallet: 'محفظة إلكترونية (فودافون / أورانج / اتصالات كاش)',
      modal_order_btn: 'تأكيد الحجز عبر واتساب',
      modal_no_card: 'بدون بوابات بطاقات ائتمان — تأكيد فوري ومباشر مع مبيعات نالام عبر واتساب.',

      auth_signin_tab: 'تسجيل الدخول',
      auth_signup_tab: 'إنشاء حساب جديد',
      auth_perk_1: 'حفظ السلة والمفضلة',
      auth_perk_2: 'تعبئة سريعة للطلب',
      auth_perk_3: 'حفظ الدور والعنوان',
      auth_profile_title: 'حسابي في نالام',
      auth_email: 'البريد الإلكتروني',
      auth_password: 'كلمة المرور',
      auth_show: 'إظهار',
      auth_hide: 'إخفاء',
      auth_forgot: 'نسيت كلمة المرور؟',
      auth_forgot_toast: 'تواصل معنا عبر واتساب (+20 11 32284750) أو أنشئ حساباً جديداً ببريد آخر.',
      auth_fullname: 'الاسم الكامل',
      auth_phone: 'رقم الهاتف / الواتساب',
      auth_gov: 'المحافظة',
      auth_gov_cairo: 'محافظة القاهرة',
      auth_gov_giza: 'محافظة الجيزة',
      auth_gov_other: 'محافظة أخرى',
      auth_address: 'منطقة التوصيل / العنوان التفصيلي',
      auth_floor: 'رقم الدور (الطابق)',
      auth_signin_btn: 'تسجيل الدخول إلى نالام',
      auth_signup_btn: 'إنشاء حساب نالام',
      auth_save_profile: 'حفظ بيانات الحساب',
      auth_signout_btn: 'تسجيل الخروج',
      auth_need_account: 'سجل الدخول أو أنشئ حساب نالام لحفظ السلة والمفضلة وبيانات التوصيل.',
      auth_invalid: 'البريد الإلكتروني أو كلمة المرور غير صحيحة. حاول مرة أخرى أو أنشئ حساباً جديداً.',
      auth_exists: 'يوجد حساب مسجل بهذا البريد بالفعل. يرجى تسجيل الدخول.',

      cart_title: 'سلة المشتريات',
      cart_trust: 'ضمان 5 سنوات • توصيل ثابت للقاهرة والجيزة • تأكيد مباشر عبر واتساب',
      cart_empty: 'السلة فارغة حالياً. أضف قطعاً من الكتالوج لبدء طلبك.',
      cart_empty_delivery_note: 'توصيل وتركيب احترافي بسعر ثابت 5,000 ج.م في جميع أنحاء القاهرة والجيزة (حتى الدور الثاني) لأي حجم طلب، سواء قطعة واحدة أو غرف كاملة.',
      cart_flat_badge: 'توصيل بسعر ثابت: نفس رسوم 5,000 ج.م سواء طلبت قطعة واحدة أو غرفة كاملة.',
      wish_title: 'قائمة المفضلة',
      wish_empty: 'قائمة المفضلة فارغة. احفظ قطعك المفضلة للعودة إليها أو نقلها للسلة لاحقاً.',
      move_to_cart: 'نقل إلى السلة',
      remove_lbl: 'حذف',
      checkout_details_title: 'بيانات العميل والتوصيل',
      checkout_name_lbl: 'الاسم الكامل *',
      checkout_name_ph: 'الاسم بالكامل',
      checkout_phone_lbl: 'رقم الهاتف / الواتساب *',
      checkout_phone_ph: '01X XXXX XXXX',
      checkout_gov_lbl: 'المحافظة *',
      checkout_floor_lbl: 'رقم الدور *',
      checkout_area_lbl: 'المنطقة / الكمبوند (اختياري)',
      checkout_area_ph: 'مثال: التجمع الخامس، مدينتي، الشيخ زايد',
      checkout_pay_title: 'طريقة الدفع *',
      pay_instapay_title: 'إنستاباي',
      pay_instapay_sub: 'تحويل بنكي فوري',
      pay_wallet_title: 'محفظة إلكترونية',
      pay_wallet_sub: 'فودافون / أورانج / اتصالات',
      subtotal_lbl: 'إجمالي المنتجات',
      delivery_lbl: 'التوصيل',
      delivery_base_lbl: 'توصيل بسعر ثابت (القاهرة والجيزة حتى الدور الثاني)',
      delivery_floor_lbl: 'رسوم رفع الأدوار الإضافية',
      delivery_floor_included: 'مشمول (حتى الدور الثاني)',
      grand_total_lbl: 'الإجمالي التقديري',
      checkout_btn: 'تأكيد الطلب والإرسال عبر واتساب',
      checkout_err_required: 'يرجى إدخال الاسم ورقم الهاتف الصحيح لتأكيد الطلب.',

      footer_desc: 'مطابخ ودريسينج روم وأثاث فاخر حسب الطلب في القاهرة الجديدة بخامات معتمدة وضمان 5 سنوات.',
      footer_nav_title: 'تصفح الموقع',
      footer_contact_title: 'المعرض والتواصل المباشر',
      footer_contact_page: 'تواصل معنا',

      contact_page_title: 'تفضل بزيارة معرض نالام بالقاهرة الجديدة',
      contact_page_sub: 'احجز جلسة استشارة مجانية لمعاينة خامات جود وود وكونتر الغرف 16 مم وبورديوم ومفصلات SAMET ومجر FGV على الطبيعة.',
      back_home: 'العودة للرئيسية'
    }
  };

  /* Safe Storage Helpers with In-Memory Fallback */
  const memStore = {};
  function lsGet(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : (key in memStore ? memStore[key] : fallback);
    } catch (e) {
      return key in memStore ? memStore[key] : fallback;
    }
  }
  function lsSet(key, val) {
    memStore[key] = val;
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  /* Meta Pixel Tracking Helper */
  function trackPixel(eventName, params) {
    if (typeof window.fbq === 'function') {
      try {
        window.fbq('track', eventName, params || {});
      } catch (e) {}
    }
  }

  /* Silent Lead & Order Capture Hook (Google Sheets Webhook) */
  function sendToGoogleSheet(payload) {
    if (!GOOGLE_SHEET_WEBHOOK_URL || GOOGLE_SHEET_WEBHOOK_URL.includes('YOUR_')) return;
    try {
      fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    } catch (e) {}
  }

  let currentLang = 'en';
  try {
    const saved = localStorage.getItem('nalam_lang');
    if (saved === 'ar' || saved === 'en') currentLang = saved;
  } catch (e) {}

  let activeCategory = 'all';
  let activeProduct = null;
  let activeAngleIndex = 0;
  let activeHeroStage = 0;
  let currentUser = lsGet('nalam_current_user', null);

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  }

  function formatPrice(egp) {
    const num = Number(egp || 0).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
    return currentLang === 'ar' ? `${num} ج.م` : `${num} EGP`;
  }

  function getCategoryLabel(catId) {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (!cat) return catId;
    return currentLang === 'ar' ? cat.ar : cat.en;
  }

  function floorLabel(n) {
    const f = Number(n);
    if (currentLang === 'ar') {
      if (f === 0) return 'الدور الأرضي';
      if (f === 1) return 'الدور الأول';
      if (f === 2) return 'الدور الثاني';
      return `الدور ${f}`;
    }
    if (f === 0) return 'Ground Floor';
    if (f === 1) return '1st Floor';
    if (f === 2) return '2nd Floor';
    if (f === 3) return '3rd Floor';
    return `${f}th Floor`;
  }

  function copyToClipboard(text, toastMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
    showToast(toastMsg || `${t('modal_copied')} ${text}`);
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

  function showToast(msg) {
    const toast = document.getElementById('nalamToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  /* Guest-Friendly & User-Scoped Cart / Wishlist Storage */
  function storageScope() {
    return currentUser && currentUser.email ? currentUser.email : 'guest';
  }
  function getCart() {
    return lsGet(`nalam_cart_${storageScope()}`, []);
  }
  function saveCart(items, animateBadge) {
    lsSet(`nalam_cart_${storageScope()}`, items);
    updateHeaderBadges(animateBadge);
  }
  function getWishlist() {
    return lsGet(`nalam_wish_${storageScope()}`, []);
  }
  function saveWishlist(ids) {
    lsSet(`nalam_wish_${storageScope()}`, ids);
    updateHeaderBadges(false);
  }

  function mergeGuestDataIntoUser(userEmail) {
    const guestCart = lsGet('nalam_cart_guest', []);
    if (guestCart.length) {
      const userCart = lsGet(`nalam_cart_${userEmail}`, []);
      guestCart.forEach(gi => {
        const ex = userCart.find(ui => ui.id === gi.id);
        if (ex) ex.qty += gi.qty;
        else userCart.push({ id: gi.id, qty: gi.qty });
      });
      lsSet(`nalam_cart_${userEmail}`, userCart);
      lsSet('nalam_cart_guest', []);
    }
    const guestWish = lsGet('nalam_wish_guest', []);
    if (guestWish.length) {
      const userWish = lsGet(`nalam_wish_${userEmail}`, []);
      guestWish.forEach(id => { if (!userWish.includes(id)) userWish.push(id); });
      lsSet(`nalam_wish_${userEmail}`, userWish);
      lsSet('nalam_wish_guest', []);
    }
  }

  /* Luxury Pebble SVG Fallback for Catalogue Photo Slots */
  function makePlaceholderSvg(product, angleLabel, rawPath) {
    const title = (currentLang === 'ar' ? product.titleAr : product.titleEn).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const cat = getCategoryLabel(product.category).replace(/&/g, '&amp;');
    const angle = (angleLabel || 'View').replace(/&/g, '&amp;');
    const fileHint = (rawPath || '').replace(/&/g, '&amp;');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F5F3EF"/>
          <stop offset="100%" stop-color="#DDD6CB"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)"/>
      <rect x="28" y="28" width="744" height="544" rx="18" fill="none" stroke="#C49E65" stroke-opacity="0.52" stroke-width="1.5"/>
      <line x1="260" y1="225" x2="540" y2="225" stroke="#C49E65" stroke-width="1.5" stroke-opacity="0.72"/>
      <text x="400" y="195" text-anchor="middle" font-family="Georgia, serif" font-size="22" letter-spacing="6" fill="#93703B">NALAM</text>
      <text x="400" y="275" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="600" fill="#1E1C1A">${title}</text>
      <text x="400" y="318" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#625C54">${cat} • ${angle}</text>
      <rect x="190" y="365" width="420" height="44" rx="22" fill="#1E1C1A" fill-opacity="0.06"/>
      <text x="400" y="393" text-anchor="middle" font-family="monospace" font-size="14" fill="#3D3935">${fileHint}</text>
      <text x="400" y="460" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="18" fill="#C49E65">Your Zone Is Glam.</text>
    </svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
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
    document.querySelectorAll('[data-config-hours]').forEach(el => {
      el.textContent = currentLang === 'ar' ? CONFIG.showroomHoursAr : CONFIG.showroomHoursEn;
    });
    document.querySelectorAll('[data-config-address]').forEach(el => {
      el.textContent = currentLang === 'ar' ? CONFIG.addressAr : CONFIG.addressEn;
    });

    populateFloorSelects();
    populateInquiryCategorySelect();
    updateHeroStageText(activeHeroStage);
    updateHeaderBadges(false);
    renderFilterTabs();
    renderCatalogue();
    renderCartDrawer();
    renderWishlistDrawer();
    if (activeProduct) renderModalContent();
  }

  function populateFloorSelects() {
    document.querySelectorAll('[data-floor-select]').forEach(sel => {
      const prev = sel.value || '0';
      let opts = '';
      for (let i = 0; i <= 12; i++) {
        opts += `<option value="${i}">${floorLabel(i)}</option>`;
      }
      sel.innerHTML = opts;
      sel.value = prev;
    });
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
     2. Sticky Header, Page Scroll Progress & Mobile Drawer
     ======================================================================== */
  function closeMobileDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const backdrop = document.getElementById('mobileDrawerBackdrop');
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }

  function openMobileDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const backdrop = document.getElementById('mobileDrawerBackdrop');
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
  }

  function initHeader() {
    const header = document.querySelector('.site-header');
    const scrollBar = document.getElementById('pageScrollBar');
    const menuBtn = document.getElementById('mobileMenuBtn');
    const closeBtn = document.getElementById('mobileDrawerCloseBtn');
    const backdrop = document.getElementById('mobileDrawerBackdrop');
    const drawer = document.getElementById('mobileDrawer');

    window.addEventListener('scroll', () => {
      if (header) header.classList.toggle('scrolled', window.scrollY > 24);
      if (scrollBar) {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docH > 0 ? Math.min(100, Math.max(0, (window.scrollY / docH) * 100)) : 0;
        scrollBar.style.width = `${pct.toFixed(1)}%`;
      }
    }, { passive: true });

    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        if (drawer && drawer.classList.contains('open')) closeMobileDrawer();
        else openMobileDrawer();
      });
    }
    if (closeBtn) closeBtn.addEventListener('click', closeMobileDrawer);
    if (backdrop) backdrop.addEventListener('click', closeMobileDrawer);
    if (drawer) {
      drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileDrawer));
    }
  }

  /* ========================================================================
     3. Side-by-Side 6-Stage Scroll-Reveal Kitchen Assembly
     ======================================================================== */
  function updateHeroStageText(stageIdx) {
    const data = HERO_STAGES[stageIdx] || HERO_STAGES[0];
    const stepEl = document.getElementById('heroStageStep');
    const countEl = document.getElementById('heroStageCounter');
    const titleEl = document.getElementById('heroStageTitle');
    const descEl = document.getElementById('heroStageDesc');
    const chipsEl = document.getElementById('heroStageChips');
    const visBadge = document.getElementById('stageVisualBadge');

    if (stepEl) stepEl.textContent = currentLang === 'ar' ? data.stepAr : data.stepEn;
    if (countEl) countEl.textContent = `0${stageIdx + 1} / 0${HERO_STAGES.length}`;
    if (titleEl) titleEl.textContent = currentLang === 'ar' ? data.titleAr : data.titleEn;
    if (descEl) descEl.textContent = currentLang === 'ar' ? data.descAr : data.descEn;
    if (visBadge) visBadge.textContent = currentLang === 'ar' ? data.stepAr : data.stepEn;
    if (chipsEl) {
      const chips = currentLang === 'ar' ? data.chipsAr : data.chipsEn;
      chipsEl.innerHTML = chips.map(c => `<span class="stage-highlight-chip">${c}</span>`).join('');
    }

    document.querySelectorAll('.stage-dot-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === stageIdx);
      btn.classList.toggle('passed', idx < stageIdx);
    });
  }

  function initKitchenScrollShowcase() {
    const track = document.getElementById('showcase');
    if (!track) return;

    const layers = Array.from(track.querySelectorAll('.room-layer[data-stage]'));
    const progressFill = document.getElementById('stageProgressFill');
    const stepper = document.getElementById('heroStageStepper');
    let ticking = false;

    if (stepper) {
      stepper.innerHTML = HERO_STAGES.map((_, idx) =>
        `<button type="button" class="stage-dot-btn ${idx === 0 ? 'active' : ''}" data-jump-stage="${idx}" aria-label="Stage ${idx + 1}"></button>`
      ).join('');
      stepper.querySelectorAll('[data-jump-stage]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-jump-stage'));
          const scrollable = track.offsetHeight - window.innerHeight;
          const fractions = [0.0, 0.16, 0.34, 0.52, 0.70, 0.90];
          const targetY = track.offsetTop + scrollable * (fractions[idx] || 0);
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        });
      });
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

      layers.forEach(img => {
        const s = Number(img.getAttribute('data-stage'));
        img.classList.toggle('visible', s <= stageIdx);
      });
      if (progressFill) {
        progressFill.style.width = `${(raw * 100).toFixed(1)}%`;
      }
      if (stageIdx !== activeHeroStage) {
        activeHeroStage = stageIdx;
        updateHeroStageText(stageIdx);
      }
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateFromScroll);
      }
    }, { passive: true });

    updateHeroStageText(0);
    updateFromScroll();
  }

  /* ========================================================================
     4. Scroll Reveal Observer
     ======================================================================== */
  function initScrollReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('revealed'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ========================================================================
     5. Professional Account System (Sign In / Sign Up / Profile)
     ======================================================================== */
  function updateHeaderBadges(animateCart) {
    const cartCount = getCart().reduce((s, it) => s + (it.qty || 1), 0);
    const wishCount = getWishlist().length;

    document.querySelectorAll('[data-cart-badge]').forEach(el => {
      el.textContent = String(cartCount);
      if (animateCart) {
        el.classList.remove('pop');
        void el.offsetWidth;
        el.classList.add('pop');
      }
    });
    document.querySelectorAll('[data-wish-badge]').forEach(el => { el.textContent = String(wishCount); });

    document.querySelectorAll('[data-account-label]').forEach(el => {
      if (currentUser && currentUser.name) {
        el.textContent = currentUser.name.split(' ')[0];
      } else {
        el.textContent = t('nav_signin');
      }
    });
  }

  function showAuthError(msg) {
    const errEl = document.getElementById('authErrorMsg');
    if (!errEl) return;
    if (!msg) {
      errEl.textContent = '';
      errEl.classList.remove('show');
    } else {
      errEl.textContent = msg;
      errEl.classList.add('show');
    }
  }

  function openAuthModal(mode, showRequireBanner) {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    showAuthError('');

    const banner = document.getElementById('authBanner');
    if (banner) {
      banner.textContent = t('auth_need_account');
      banner.classList.toggle('show', Boolean(showRequireBanner));
    }

    const tabsWrap = document.getElementById('authTabsWrap');
    const signinForm = document.getElementById('authSigninForm');
    const signupForm = document.getElementById('authSignupForm');
    const profileForm = document.getElementById('authProfileForm');

    if (currentUser && mode !== 'signin' && mode !== 'signup') {
      if (tabsWrap) tabsWrap.style.display = 'none';
      if (signinForm) signinForm.style.display = 'none';
      if (signupForm) signupForm.style.display = 'none';
      if (profileForm) {
        profileForm.style.display = 'grid';
        const initials = (currentUser.name || 'N').trim().slice(0, 2).toUpperCase();
        const av = document.getElementById('profAvatar');
        const pEmail = document.getElementById('profEmailLabel');
        if (av) av.textContent = initials;
        if (pEmail) pEmail.textContent = currentUser.email || '';
        document.getElementById('profName').value = currentUser.name || '';
        document.getElementById('profPhone').value = currentUser.phone || '';
        document.getElementById('profGov').value = currentUser.gov || 'Cairo';
        document.getElementById('profFloor').value = String(currentUser.floor ?? 0);
        document.getElementById('profAddress').value = currentUser.address || '';
      }
    } else {
      if (tabsWrap) tabsWrap.style.display = 'grid';
      if (profileForm) profileForm.style.display = 'none';
      switchAuthTab(mode === 'signup' ? 'signup' : 'signin');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function switchAuthTab(tab) {
    showAuthError('');
    const signinForm = document.getElementById('authSigninForm');
    const signupForm = document.getElementById('authSignupForm');
    document.querySelectorAll('.auth-tab').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-auth-tab') === tab);
    });
    if (signinForm) signinForm.style.display = tab === 'signin' ? 'grid' : 'none';
    if (signupForm) signupForm.style.display = tab === 'signup' ? 'grid' : 'none';
  }

  function prefillCheckoutFromUser() {
    if (!currentUser) return;
    const setIfEmpty = (id, val) => {
      const el = document.getElementById(id);
      if (el && val && !el.dataset.userTouched) el.value = val;
    };
    setIfEmpty('checkoutName', currentUser.name);
    setIfEmpty('checkoutPhone', currentUser.phone);
    setIfEmpty('checkoutGov', currentUser.gov || 'Cairo');
    setIfEmpty('checkoutFloor', String(currentUser.floor ?? 0));
    setIfEmpty('checkoutAddress', currentUser.address || '');
  }

  function initAuthModal() {
    const modal = document.getElementById('authModal');
    const closeBtn = document.getElementById('authCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
    if (modal) {
      modal.addEventListener('click', e => { if (e.target === modal) closeAuthModal(); });
    }

    document.querySelectorAll('[data-open-auth]').forEach(btn => {
      btn.addEventListener('click', () => {
        closeMobileDrawer();
        openAuthModal(currentUser ? 'profile' : 'signin', false);
      });
    });

    document.querySelectorAll('.auth-tab').forEach(btn => {
      btn.addEventListener('click', () => switchAuthTab(btn.getAttribute('data-auth-tab')));
    });

    /* Password Show/Hide Toggles */
    document.querySelectorAll('[data-pass-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-pass-toggle');
        const input = document.getElementById(targetId);
        if (!input) return;
        const isPass = input.type === 'password';
        input.type = isPass ? 'text' : 'password';
        btn.textContent = isPass ? t('auth_hide') : t('auth_show');
      });
    });

    /* Password Strength Meter on Sign Up */
    const suPass = document.getElementById('suPass');
    const strengthFill = document.getElementById('suPassStrength');
    if (suPass && strengthFill) {
      suPass.addEventListener('input', () => {
        const v = suPass.value || '';
        let score = 0;
        if (v.length >= 6) score += 35;
        if (v.length >= 9) score += 20;
        if (/[A-Z]/.test(v) || /[0-9]/.test(v)) score += 25;
        if (/[^A-Za-z0-9]/.test(v)) score += 20;
        strengthFill.style.width = `${Math.min(100, score)}%`;
        strengthFill.style.background = score >= 75 ? '#1B6E48' : score >= 45 ? '#C49E65' : '#B33A3A';
      });
    }

    /* Forgot Password Helper */
    const forgotBtn = document.getElementById('authForgotBtn');
    if (forgotBtn) {
      forgotBtn.addEventListener('click', () => showToast(t('auth_forgot_toast')));
    }

    /* Sign In Submit */
    const signinForm = document.getElementById('authSigninForm');
    if (signinForm) {
      signinForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = (document.getElementById('siEmail').value || '').trim().toLowerCase();
        const pass = document.getElementById('siPass').value || '';
        const users = lsGet('nalam_users', []);
        const found = users.find(u => u.email === email && u.password === pass);
        if (!found) {
          showAuthError(t('auth_invalid'));
          return;
        }
        mergeGuestDataIntoUser(found.email);
        currentUser = found;
        lsSet('nalam_current_user', currentUser);
        closeAuthModal();
        prefillCheckoutFromUser();
        updateHeaderBadges(false);
        renderCatalogue();
        renderCartDrawer();
        renderWishlistDrawer();
        showToast(currentLang === 'ar' ? `مرحباً بك يا ${found.name}` : `Welcome back, ${found.name}`);
      });
    }

    /* Account Signup Submit + Google Sheet Hook + Meta Pixel Lead */
    const signupForm = document.getElementById('authSignupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = (document.getElementById('suEmail').value || '').trim().toLowerCase();
        const users = lsGet('nalam_users', []);
        if (users.some(u => u.email === email)) {
          showAuthError(t('auth_exists'));
          switchAuthTab('signin');
          return;
        }
        const newUser = {
          name: (document.getElementById('suName').value || '').trim(),
          email,
          phone: (document.getElementById('suPhone').value || '').trim(),
          password: document.getElementById('suPass').value || '',
          gov: document.getElementById('suGov').value || 'Cairo',
          floor: Number(document.getElementById('suFloor').value || 0),
          address: (document.getElementById('suAddress').value || '').trim(),
          createdAt: new Date().toISOString()
        };
        users.push(newUser);
        lsSet('nalam_users', users);
        mergeGuestDataIntoUser(newUser.email);
        currentUser = newUser;
        lsSet('nalam_current_user', currentUser);

        /* Fire Meta Pixel Lead & Silent Google Sheet Lead Capture */
        trackPixel('Lead', {
          content_name: 'Nalam Account Signup',
          content_category: 'account',
          status: 'registered'
        });
        sendToGoogleSheet({
          type: 'account_signup',
          timestamp: newUser.createdAt,
          language: currentLang,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          governorate: newUser.gov,
          floor: floorLabel(newUser.floor),
          address: newUser.address
        });

        closeAuthModal();
        prefillCheckoutFromUser();
        updateHeaderBadges(false);
        renderCatalogue();
        renderCartDrawer();
        renderWishlistDrawer();
        showToast(currentLang === 'ar' ? `تم إنشاء حسابك بنجاح يا ${newUser.name}` : `Account created — welcome, ${newUser.name}!`);
      });
    }

    /* Profile Update Submit */
    const profileForm = document.getElementById('authProfileForm');
    if (profileForm) {
      profileForm.addEventListener('submit', e => {
        e.preventDefault();
        if (!currentUser) return;
        currentUser.name = (document.getElementById('profName').value || '').trim();
        currentUser.phone = (document.getElementById('profPhone').value || '').trim();
        currentUser.gov = document.getElementById('profGov').value || 'Cairo';
        currentUser.floor = Number(document.getElementById('profFloor').value || 0);
        currentUser.address = (document.getElementById('profAddress').value || '').trim();
        const users = lsGet('nalam_users', []).map(u => u.email === currentUser.email ? currentUser : u);
        lsSet('nalam_users', users);
        lsSet('nalam_current_user', currentUser);
        prefillCheckoutFromUser();
        updateHeaderBadges(false);
        renderCartDrawer();
        closeAuthModal();
        showToast(currentLang === 'ar' ? 'تم تحديث بيانات حسابك' : 'Account details saved');
      });
    }

    const signoutBtn = document.getElementById('authSignoutBtn');
    if (signoutBtn) {
      signoutBtn.addEventListener('click', () => {
        currentUser = null;
        delete memStore['nalam_current_user'];
        try { localStorage.removeItem('nalam_current_user'); } catch (e) {}
        closeAuthModal();
        updateHeaderBadges(false);
        renderCatalogue();
        renderCartDrawer();
        renderWishlistDrawer();
        showToast(currentLang === 'ar' ? 'تم تسجيل الخروج' : 'Signed out');
      });
    }
  }

  /* ========================================================================
     6. Cart & Wishlist (Guest-Friendly + Flat-Rate 5,000 EGP Delivery + Checkout)
     ======================================================================== */
  function addToCart(productId) {
    const cart = getCart();
    const existing = cart.find(i => i.id === productId);
    if (existing) existing.qty += 1;
    else cart.push({ id: productId, qty: 1 });
    saveCart(cart, true);
    renderCartDrawer();

    const p = PRODUCTS.find(x => x.id === productId);
    if (p) {
      trackPixel('AddToCart', {
        content_ids: [p.code],
        content_name: p.titleEn,
        content_category: p.category,
        content_type: 'product',
        value: p.priceEgp,
        currency: 'EGP'
      });
      const name = currentLang === 'ar' ? p.titleAr : p.titleEn;
      showToast(currentLang === 'ar' ? `تمت الإضافة للسلة: ${name}` : `Added to cart: ${name}`);
    }
  }

  function toggleWishlist(productId) {
    let wish = getWishlist();
    const exists = wish.includes(productId);
    if (exists) wish = wish.filter(id => id !== productId);
    else wish.push(productId);
    saveWishlist(wish);
    renderCatalogue();
    renderWishlistDrawer();
    if (activeProduct && activeProduct.id === productId) renderModalContent();
    showToast(exists
      ? (currentLang === 'ar' ? 'تمت الإزالة من المفضلة' : 'Removed from wishlist')
      : (currentLang === 'ar' ? 'تمت الإضافة إلى المفضلة' : 'Saved to wishlist'));
  }

  function openSideDrawer(which) {
    closeMobileDrawer();
    const backdrop = document.getElementById('sideDrawerBackdrop');
    const cartD = document.getElementById('cartDrawer');
    const wishD = document.getElementById('wishlistDrawer');
    if (cartD) cartD.classList.toggle('open', which === 'cart');
    if (wishD) wishD.classList.toggle('open', which === 'wishlist');
    if (backdrop) backdrop.classList.add('open');
    if (which === 'cart') {
      prefillCheckoutFromUser();
      renderCartDrawer();
    } else {
      renderWishlistDrawer();
    }
  }

  function closeSideDrawers() {
    const backdrop = document.getElementById('sideDrawerBackdrop');
    const cartD = document.getElementById('cartDrawer');
    const wishD = document.getElementById('wishlistDrawer');
    if (backdrop) backdrop.classList.remove('open');
    if (cartD) cartD.classList.remove('open');
    if (wishD) wishD.classList.remove('open');
  }

  function calculateDelivery(itemCount, gov, floorNum) {
    if (!itemCount || itemCount <= 0) {
      return { base: 0, floorFee: 0, extraFloors: 0, totalDelivery: 0, gov };
    }
    const base = CONFIG.baseDeliveryFeeEgp || 5000;
    const maxIncluded = CONFIG.includedMaxFloor ?? 2;
    const perFloor = CONFIG.extraFloorFeeEgp || 500;
    const f = Math.max(0, Number(floorNum) || 0);
    const extraFloors = Math.max(0, f - maxIncluded);
    const floorFee = extraFloors * perFloor;
    return { base, floorFee, extraFloors, totalDelivery: base + floorFee, gov };
  }

  function getSelectedPayMethod() {
    const checked = document.querySelector('input[name="checkoutPayMethod"]:checked');
    return checked ? checked.value : 'InstaPay';
  }

  function syncPaymentCardUI() {
    const selected = getSelectedPayMethod();
    document.querySelectorAll('.pay-card-option').forEach(lbl => {
      const inp = lbl.querySelector('input');
      lbl.classList.toggle('selected', Boolean(inp && inp.checked));
    });
    const instapayBox = document.getElementById('checkoutInstapayBox');
    if (instapayBox) {
      instapayBox.style.display = selected === 'InstaPay' ? 'flex' : 'none';
    }
  }

  function renderCartDrawer() {
    const body = document.getElementById('cartDrawerBody');
    const formWrap = document.getElementById('cartCheckoutFormWrap');
    const flatBadge = document.getElementById('cartFlatRateBadge');
    const emptyNote = document.getElementById('cartEmptyDeliveryNote');
    const floorRow = document.getElementById('cartFloorRow');
    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    if (!body) return;

    const cart = getCart();
    const totalQty = cart.reduce((s, it) => s + (it.qty || 1), 0);
    const setEl = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };

    if (!cart.length) {
      body.innerHTML = `<div class="empty-state">${t('cart_empty')}</div>`;
      if (flatBadge) flatBadge.style.display = 'none';
      if (emptyNote) {
        emptyNote.textContent = t('cart_empty_delivery_note');
        emptyNote.style.display = 'block';
      }
      if (formWrap) formWrap.style.display = 'none';
      if (floorRow) floorRow.style.display = 'none';
      if (checkoutBtn) checkoutBtn.style.display = 'none';

      setEl('cartSubtotalVal', formatPrice(0));
      setEl('cartDeliveryLbl', t('delivery_lbl'));
      setEl('cartDeliveryBaseVal', formatPrice(0));
      setEl('cartGrandTotalVal', formatPrice(0));
      return;
    }

    if (flatBadge) {
      flatBadge.textContent = t('cart_flat_badge');
      flatBadge.style.display = 'block';
    }
    if (emptyNote) emptyNote.style.display = 'none';
    if (formWrap) formWrap.style.display = 'flex';
    if (floorRow) floorRow.style.display = 'flex';
    if (checkoutBtn) checkoutBtn.style.display = 'inline-flex';

    let subtotal = 0;
    body.innerHTML = '';

    cart.forEach(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return;
      subtotal += p.priceEgp * item.qty;
      const title = currentLang === 'ar' ? p.titleAr : p.titleEn;
      const firstImg = p.images[0];
      const fallback = makePlaceholderSvg(p, currentLang === 'ar' ? firstImg.labelAr : firstImg.labelEn, firstImg.src);

      const row = document.createElement('div');
      row.className = 'drawer-item';
      row.innerHTML = `
        <img src="${firstImg.src}" alt="${title}" loading="lazy">
        <div>
          <div class="drawer-item-title">${title}</div>
          <div class="drawer-item-dims">${p.dimensions}</div>
          <div class="drawer-item-meta">${formatPrice(p.priceEgp * item.qty)}</div>
          <div class="qty-row">
            <div class="qty-controls">
              <button type="button" class="qty-btn" data-qty-dec="${p.id}" aria-label="Decrease quantity">-</button>
              <span>${item.qty}</span>
              <button type="button" class="qty-btn" data-qty-inc="${p.id}" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="remove-link" data-cart-rem="${p.id}">${t('remove_lbl')}</button>
          </div>
        </div>
      `;
      const img = row.querySelector('img');
      img.addEventListener('error', () => { if (!img.dataset.fb) { img.dataset.fb = '1'; img.src = fallback; } });
      body.appendChild(row);
    });

    body.querySelectorAll('[data-qty-inc]').forEach(b => {
      b.addEventListener('click', () => {
        const c = getCart();
        const it = c.find(x => x.id === b.getAttribute('data-qty-inc'));
        if (it) it.qty += 1;
        saveCart(c, false); renderCartDrawer();
      });
    });
    body.querySelectorAll('[data-qty-dec]').forEach(b => {
      b.addEventListener('click', () => {
        let c = getCart();
        const id = b.getAttribute('data-qty-dec');
        const it = c.find(x => x.id === id);
        if (it) {
          it.qty -= 1;
          if (it.qty <= 0) c = c.filter(x => x.id !== id);
        }
        saveCart(c, false); renderCartDrawer();
      });
    });
    body.querySelectorAll('[data-cart-rem]').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-cart-rem');
        saveCart(getCart().filter(x => x.id !== id), false);
        renderCartDrawer();
      });
    });

    const govSel = document.getElementById('checkoutGov');
    const floorSel = document.getElementById('checkoutFloor');
    const gov = govSel ? govSel.value : 'Cairo';
    const fl = floorSel ? Number(floorSel.value) : 0;
    const calc = calculateDelivery(totalQty, gov, fl);
    const grandTotal = subtotal + calc.totalDelivery;

    setEl('cartSubtotalVal', formatPrice(subtotal));
    setEl('cartDeliveryLbl', t('delivery_base_lbl'));
    setEl('cartDeliveryBaseVal', formatPrice(calc.base));
    setEl('cartFloorFeeVal', calc.floorFee > 0 ? `+${formatPrice(calc.floorFee)}` : t('delivery_floor_included'));
    setEl('cartGrandTotalVal', formatPrice(grandTotal));
    setEl('checkoutInstapayHandle', CONFIG.instapayHandle || 'nalam@instapay');
    syncPaymentCardUI();
  }

  function renderWishlistDrawer() {
    const body = document.getElementById('wishlistDrawerBody');
    if (!body) return;
    const wish = getWishlist();
    if (!wish.length) {
      body.innerHTML = `<div class="empty-state">${t('wish_empty')}</div>`;
      return;
    }
    body.innerHTML = '';
    wish.forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      const title = currentLang === 'ar' ? p.titleAr : p.titleEn;
      const firstImg = p.images[0];
      const fallback = makePlaceholderSvg(p, currentLang === 'ar' ? firstImg.labelAr : firstImg.labelEn, firstImg.src);

      const row = document.createElement('div');
      row.className = 'drawer-item';
      row.innerHTML = `
        <img src="${firstImg.src}" alt="${title}" loading="lazy">
        <div>
          <div class="drawer-item-title">${title}</div>
          <div class="drawer-item-dims">${p.dimensions}</div>
          <div class="drawer-item-meta">${formatPrice(p.priceEgp)}</div>
          <div class="qty-row">
            <button type="button" class="btn btn-primary" style="padding:0.32rem 0.72rem;font-size:0.74rem;" data-move-cart="${p.id}">${t('move_to_cart')}</button>
            <button type="button" class="remove-link" data-wish-rem="${p.id}">${t('remove_lbl')}</button>
          </div>
        </div>
      `;
      const img = row.querySelector('img');
      img.addEventListener('error', () => { if (!img.dataset.fb) { img.dataset.fb = '1'; img.src = fallback; } });
      body.appendChild(row);
    });

    body.querySelectorAll('[data-move-cart]').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-move-cart');
        addToCart(id);
        saveWishlist(getWishlist().filter(x => x !== id));
        renderWishlistDrawer();
        renderCatalogue();
      });
    });
    body.querySelectorAll('[data-wish-rem]').forEach(b => {
      b.addEventListener('click', () => {
        toggleWishlist(b.getAttribute('data-wish-rem'));
      });
    });
  }

  function initDrawers() {
    document.querySelectorAll('[data-open-cart]').forEach(b => b.addEventListener('click', () => openSideDrawer('cart')));
    document.querySelectorAll('[data-open-wishlist]').forEach(b => b.addEventListener('click', () => openSideDrawer('wishlist')));
    const backdrop = document.getElementById('sideDrawerBackdrop');
    if (backdrop) backdrop.addEventListener('click', closeSideDrawers);
    document.querySelectorAll('[data-close-side-drawer]').forEach(b => b.addEventListener('click', closeSideDrawers));

    ['checkoutName', 'checkoutPhone', 'checkoutGov', 'checkoutFloor', 'checkoutAddress'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('input', () => {
        el.dataset.userTouched = '1';
        el.classList.remove('field-error');
      });
      el.addEventListener('change', () => {
        el.dataset.userTouched = '1';
        if (id === 'checkoutGov' || id === 'checkoutFloor') renderCartDrawer();
      });
    });

    document.querySelectorAll('input[name="checkoutPayMethod"]').forEach(radio => {
      radio.addEventListener('change', syncPaymentCardUI);
    });

    const copyCheckoutInsta = document.getElementById('copyCheckoutInstapayBtn');
    if (copyCheckoutInsta) {
      copyCheckoutInsta.addEventListener('click', () => copyToClipboard(CONFIG.instapayHandle || 'nalam@instapay'));
    }

    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        const cart = getCart();
        if (!cart.length) return;

        const nameEl = document.getElementById('checkoutName');
        const phoneEl = document.getElementById('checkoutPhone');
        const govEl = document.getElementById('checkoutGov');
        const floorEl = document.getElementById('checkoutFloor');
        const addrEl = document.getElementById('checkoutAddress');
        const errBox = document.getElementById('checkoutErrorMsg');

        const custName = (nameEl?.value || '').trim();
        const custPhone = (phoneEl?.value || '').trim();
        const gov = govEl?.value || 'Cairo';
        const fl = Number(floorEl?.value ?? 0);
        const addr = (addrEl?.value || '').trim();
        const pay = getSelectedPayMethod();

        let hasErr = false;
        if (!custName) { nameEl?.classList.add('field-error'); hasErr = true; }
        if (!custPhone || custPhone.replace(/\D/g, '').length < 8) { phoneEl?.classList.add('field-error'); hasErr = true; }

        if (hasErr) {
          if (errBox) {
            errBox.textContent = t('checkout_err_required');
            errBox.classList.add('show');
          }
          return;
        }
        if (errBox) errBox.classList.remove('show');

        const totalQty = cart.reduce((s, it) => s + (it.qty || 1), 0);
        const calc = calculateDelivery(totalQty, gov, fl);

        let subtotal = 0;
        const itemRecords = [];
        const lines = cart.map(it => {
          const p = PRODUCTS.find(x => x.id === it.id);
          if (!p) return '';
          const lineTotal = p.priceEgp * it.qty;
          subtotal += lineTotal;
          const nm = currentLang === 'ar' ? p.titleAr : p.titleEn;
          itemRecords.push({
            id: p.id,
            code: p.code,
            title: p.titleEn,
            dimensions: p.dimensions,
            qty: it.qty,
            unitPriceEgp: p.priceEgp,
            lineTotalEgp: lineTotal
          });
          return `• ${nm} (${p.code})\n  ${currentLang === 'ar' ? 'المقاس' : 'Dimensions'}: ${p.dimensions} | ${currentLang === 'ar' ? 'الكمية' : 'Qty'}: ${it.qty} × ${formatPrice(p.priceEgp)} = ${formatPrice(lineTotal)}`;
        }).filter(Boolean).join('\n');

        const grandTotal = subtotal + calc.totalDelivery;

        /* 1. Fire Meta Pixel InitiateCheckout Event */
        trackPixel('InitiateCheckout', {
          content_ids: itemRecords.map(x => x.code),
          content_type: 'product',
          num_items: totalQty,
          value: grandTotal,
          currency: 'EGP'
        });

        /* 2. Silent Lead & Order Capture to Google Sheet Webhook */
        sendToGoogleSheet({
          type: 'whatsapp_order',
          timestamp: new Date().toISOString(),
          language: currentLang,
          customer: {
            name: custName,
            phone: custPhone,
            governorate: gov,
            floor: floorLabel(fl),
            address: addr
          },
          paymentMethod: pay,
          items: itemRecords,
          subtotalEgp: subtotal,
          deliveryBaseEgp: calc.base,
          extraFloorFeeEgp: calc.floorFee,
          grandTotalEgp: grandTotal
        });

        /* 3. Pre-Filled Arabic/English WhatsApp Order Summary */
        const msg = currentLang === 'ar'
          ? `مرحباً فريق نالام،\nطلب جديد عبر الموقع:\n\n${lines}\n\nملخص التكلفة:\n• إجمالي المنتجات: ${formatPrice(subtotal)}\n• توصيل وتركيب ثابت (${gov} - حتى الدور الثاني): ${formatPrice(calc.base)}\n• الدور: ${floorLabel(fl)} (رسوم رفع إضافية: ${calc.floorFee > 0 ? formatPrice(calc.floorFee) : '0 ج.م'})\n• الإجمالي التقديري: ${formatPrice(grandTotal)}\n\nبيانات العميل:\n• الاسم: ${custName}\n• الهاتف: ${custPhone}\n• المحافظة: ${gov}${addr ? `\n• العنوان: ${addr}` : ''}\n• طريقة الدفع: ${pay}${pay === 'InstaPay' ? `\n• حساب إنستاباي: ${CONFIG.instapayHandle}` : ''}`
          : `Hello Nalam Team,\nNew Website Order Summary:\n\n${lines}\n\nOrder Breakdown:\n• Items Subtotal: ${formatPrice(subtotal)}\n• Flat-Rate Delivery & Installation (${gov}, up to 2nd floor): ${formatPrice(calc.base)}\n• Floor Level: ${floorLabel(fl)} (Extra Floor Carry Fee: ${calc.floorFee > 0 ? formatPrice(calc.floorFee) : '0 EGP'})\n• Estimated Total: ${formatPrice(grandTotal)}\n\nCustomer Details:\n• Name: ${custName}\n• Phone: ${custPhone}\n• Governorate: ${gov}${addr ? `\n• Address: ${addr}` : ''}\n• Payment Method: ${pay}${pay === 'InstaPay' ? `\n• InstaPay Handle: ${CONFIG.instapayHandle}` : ''}`;

        window.open(`https://wa.me/${CONFIG.whatsappNumber || '201132284750'}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
      });
    }
  }

  /* ========================================================================
     7. 9-Category Sales Catalogue & Filter Tabs
     ======================================================================== */
  function renderFilterTabs() {
    const bar = document.getElementById('catalogueFilterBar');
    if (!bar) return;

    bar.innerHTML = CATEGORIES.map(cat => {
      const count = cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length;
      const label = currentLang === 'ar' ? cat.ar : cat.en;
      const activeCls = cat.id === activeCategory ? 'active' : '';
      return `<button type="button" class="filter-tab ${activeCls}" data-cat="${cat.id}" role="tab" aria-selected="${cat.id === activeCategory}">
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

    const wishList = getWishlist();
    const list = activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);

    grid.innerHTML = '';
    list.forEach((product, idx) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.style.animationDelay = `${Math.min(idx * 55, 360)}ms`;

      const title = currentLang === 'ar' ? product.titleAr : product.titleEn;
      const mat = currentLang === 'ar' ? product.materialAr : product.materialEn;
      const catLabel = getCategoryLabel(product.category);
      const firstImg = product.images[0];
      const firstAngleLabel = currentLang === 'ar' ? firstImg.labelAr : firstImg.labelEn;
      const fallbackUrl = makePlaceholderSvg(product, firstAngleLabel, firstImg.src);
      const isSaved = wishList.includes(product.id);

      card.innerHTML = `
        <div class="product-media" data-open-modal>
          <img src="${firstImg.src}" alt="${title}" loading="lazy">
          <span class="product-cat-badge">${catLabel}</span>
          <button type="button" class="product-wish-fab ${isSaved ? 'saved' : ''}" data-wish-btn aria-label="${t('cat_add_wish')}">&#9829;</button>
          <span class="product-views-badge">${product.images.length} ${t('cat_angles_suffix')}</span>
        </div>
        <div class="product-body">
          <h3 class="product-title" data-open-modal>${title}</h3>
          <div class="product-dims">${product.dimensions}</div>
          <p class="product-spec">${mat}</p>
          <div class="product-footer">
            <div class="product-price">
              <span class="product-price-label">${t('cat_starting')}</span>
              <span class="product-price-val">${formatPrice(product.priceEgp)}</span>
            </div>
            <button type="button" class="btn btn-outline" style="padding:0.48rem 0.88rem;font-size:0.78rem;" data-open-modal>${t('cat_view_btn')}</button>
          </div>
          <div class="product-card-actions">
            <button type="button" class="btn btn-primary" data-add-cart>${t('cat_add_cart')}</button>
            <button type="button" class="btn btn-outline" data-wish-btn>${isSaved ? '&#9829; ' + t('cat_saved_wish') : '&#9825; ' + t('cat_add_wish')}</button>
          </div>
        </div>
      `;

      const imgEl = card.querySelector('img');
      imgEl.addEventListener('error', () => {
        if (imgEl.dataset.fallbackApplied) return;
        imgEl.dataset.fallbackApplied = '1';
        imgEl.src = fallbackUrl;
      });

      card.querySelectorAll('[data-open-modal]').forEach(el => {
        el.addEventListener('click', () => openProductModal(product));
      });
      card.querySelectorAll('[data-add-cart]').forEach(el => {
        el.addEventListener('click', e => { e.stopPropagation(); addToCart(product.id); });
      });
      card.querySelectorAll('[data-wish-btn]').forEach(el => {
        el.addEventListener('click', e => { e.stopPropagation(); toggleWishlist(product.id); });
      });

      grid.appendChild(card);
    });
  }

  /* ========================================================================
     8. Multi-View Product Modal (with ViewContent Pixel & Quick Reserve)
     ======================================================================== */
  function openProductModal(product) {
    activeProduct = product;
    activeAngleIndex = 0;
    const backdrop = document.getElementById('productModal');
    if (!backdrop) return;

    trackPixel('ViewContent', {
      content_ids: [product.code],
      content_name: product.titleEn,
      content_category: product.category,
      content_type: 'product',
      value: product.priceEgp,
      currency: 'EGP'
    });

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
      mainImg.src = curImg.src || DEFAULT_FALLBACK_IMG;
    }
    if (angleLbl) angleLbl.textContent = curAngleLabel;

    if (thumbsWrap) {
      thumbsWrap.innerHTML = '';
      p.images.forEach((imgObj, idx) => {
        const lbl = currentLang === 'ar' ? imgObj.labelAr : imgObj.labelEn;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `modal-thumb ${idx === activeAngleIndex ? 'active' : ''}`;
        btn.innerHTML = `<img src="${imgObj.src}" alt="${lbl}" loading="lazy"><span>${lbl}</span>`;
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

    const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setText('modalCategory', `${getCategoryLabel(p.category)} • ${p.code}`);
    setText('modalTitle', title);
    setText('modalPrice', formatPrice(p.priceEgp));
    setText('modalDimsVal', p.dimensions);
    setText('modalMatVal', mat);
    setText('modalHwVal', hw);
    setText('modalFinVal', fin);
    setText('modalInstapayHandle', CONFIG.instapayHandle || 'nalam@instapay');

    const wishBtn = document.getElementById('modalWishBtn');
    if (wishBtn) {
      const saved = getWishlist().includes(p.id);
      wishBtn.textContent = saved ? `♥ ${t('cat_saved_wish')}` : `♡ ${t('cat_add_wish')}`;
    }
  }

  function initProductModal() {
    const backdrop = document.getElementById('productModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const copyBtn = document.getElementById('copyInstapayBtn');
    const orderForm = document.getElementById('modalOrderForm');
    const mCartBtn = document.getElementById('modalCartBtn');
    const mWishBtn = document.getElementById('modalWishBtn');

    if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
    if (backdrop) backdrop.addEventListener('click', e => { if (e.target === backdrop) closeProductModal(); });
    if (mCartBtn) mCartBtn.addEventListener('click', () => { if (activeProduct) addToCart(activeProduct.id); });
    if (mWishBtn) mWishBtn.addEventListener('click', () => { if (activeProduct) toggleWishlist(activeProduct.id); });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeProductModal();
        closeAuthModal();
        closeSideDrawers();
        closeMobileDrawer();
        closeZoomModal();
      }
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', () => copyToClipboard(CONFIG.instapayHandle || 'nalam@instapay'));
    }

    if (orderForm) {
      orderForm.addEventListener('submit', e => {
        e.preventDefault();
        if (!activeProduct) return;
        const name = (document.getElementById('orderCustName')?.value || '').trim();
        const area = (document.getElementById('orderCustArea')?.value || '').trim();
        const pay = document.getElementById('orderPayMethod')?.value || 'InstaPay';
        const title = currentLang === 'ar' ? activeProduct.titleAr : activeProduct.titleEn;

        trackPixel('InitiateCheckout', {
          content_ids: [activeProduct.code],
          content_name: activeProduct.titleEn,
          content_type: 'product',
          num_items: 1,
          value: activeProduct.priceEgp,
          currency: 'EGP'
        });

        sendToGoogleSheet({
          type: 'quick_reserve',
          timestamp: new Date().toISOString(),
          language: currentLang,
          productCode: activeProduct.code,
          productTitle: activeProduct.titleEn,
          dimensions: activeProduct.dimensions,
          priceEgp: activeProduct.priceEgp,
          customerName: name,
          deliveryArea: area,
          paymentMethod: pay
        });

        const msg = currentLang === 'ar'
          ? `مرحباً فريق نالام،\nأرغب في حجز/طلب القطعة التالية:\n• الموديل: ${title} (${activeProduct.code})\n• المقاس: ${activeProduct.dimensions}\n• السعر: ${formatPrice(activeProduct.priceEgp)}\n• الاسم: ${name}\n• منطقة التوصيل: ${area}\n• طريقة الدفع المفضلة: ${pay}\n• حساب إنستاباي: ${CONFIG.instapayHandle}`
          : `Hello Nalam Team,\nI would like to reserve/order the following item:\n• Model: ${title} (${activeProduct.code})\n• Dimensions: ${activeProduct.dimensions}\n• Price: ${formatPrice(activeProduct.priceEgp)}\n• Customer Name: ${name}\n• Delivery Area: ${area}\n• Payment Method: ${pay}\n• InstaPay Ref: ${CONFIG.instapayHandle}`;

        window.open(`https://wa.me/${CONFIG.whatsappNumber || '201132284750'}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
      });
    }
  }

  /* ========================================================================
     9. Showroom Inquiry Form, Copy Maps Link & Image Zoom Lightbox
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

  function initInquiryAndMaps() {
    document.querySelectorAll('[data-copy-maps]').forEach(btn => {
      btn.addEventListener('click', () => {
        copyToClipboard(CONFIG.mapsUrl, currentLang === 'ar' ? 'تم نسخ رابط موقع المعرض!' : 'Showroom Maps link copied!');
      });
    });

    document.querySelectorAll('[data-wa-inquiry-form]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const fd = new FormData(form);
        const name = (fd.get('name') || '').toString().trim();
        const phone = (fd.get('phone') || '').toString().trim();
        const category = (fd.get('category') || '').toString().trim();
        const area = (fd.get('area') || '').toString().trim();
        const notes = (fd.get('notes') || '').toString().trim();

        trackPixel('Lead', { content_name: 'Showroom Consultation', content_category: category });
        sendToGoogleSheet({
          type: 'consultation_inquiry',
          timestamp: new Date().toISOString(),
          language: currentLang,
          name, phone, category, area, notes
        });

        const msg = currentLang === 'ar'
          ? `مرحباً معرض نالام بالقاهرة الجديدة،\nاستفسار جديد عبر الموقع:\n• الاسم: ${name}\n• رقم الهاتف: ${phone}\n• القسم المطلوب: ${category}\n• المنطقة: ${area}\n• التفاصيل: ${notes || 'حجز موعد استشارة بالمعرض'}`
          : `Hello Nalam New Cairo Showroom,\nNew website inquiry:\n• Name: ${name}\n• Phone: ${phone}\n• Category: ${category}\n• Area / Compound: ${area}\n• Notes: ${notes || 'Requesting showroom consultation'}`;

        window.open(`https://wa.me/${CONFIG.whatsappNumber || '201132284750'}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
      });
    });
  }

  function openZoomModal(src, alt) {
    const zm = document.getElementById('zoomModal');
    const zi = document.getElementById('zoomModalImg');
    if (!zm || !zi) return;
    zi.src = src || DEFAULT_FALLBACK_IMG;
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
    initScrollReveal();
    initAuthModal();
    initDrawers();
    initProductModal();
    initInquiryAndMaps();
    initZoomTriggers();
    prefillCheckoutFromUser();
    applyLanguage();
  });
})();
