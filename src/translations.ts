export type Language = 'ky' | 'ru' | 'tr' | 'en' | 'de' | 'fr' | 'ar';

export interface LanguageDef {
  code: Language;
  name: string;
  flag: string;
  isRtl?: boolean;
}

export const languagesList: LanguageDef[] = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ky', name: 'Кыргызча', flag: '🇰🇬' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', isRtl: true }
];

export const staticTranslations: Record<string, Record<Language, string>> = {
  // Navigation
  nav_tickets: {
    ru: 'Авиабилеты',
    ky: 'Авиабилеттер',
    tr: 'Uçak biletleri',
    en: 'Flight Tickets',
    de: 'Flugtickets',
    fr: 'Billets d\'avion',
    ar: 'تذاكر طيران'
  },
  nav_international: {
    ru: 'Зарубежные Туры',
    ky: 'Чет өлкөлүк турлар',
    tr: 'Yurt dışı Turları',
    en: 'International Tours',
    de: 'Auslandsreisen',
    fr: 'Tours Internationaux',
    ar: 'رحلات دولية'
  },
  nav_domestic: {
    ru: 'Туры в Кыргызстане',
    ky: 'Кыргызстан ичиндеги турлар',
    tr: 'Kırgızistan Turları',
    en: 'Kyrgyzstan Tours',
    de: 'Kirgisistan-Touren',
    fr: 'Tours au Kirghizistan',
    ar: 'جولات في قيرغيزستان'
  },
  nav_incoming: {
    ru: 'Прием Гостей (Инкаминг)',
    ky: 'Конокторду тосуп алуу (Инкаминг)',
    tr: 'Misafir Karşılama (Incoming)',
    en: 'Inbound Tourism (Incoming)',
    de: 'Inbound-Tourismus (Incoming)',
    fr: 'Tourisme Réceptif (Incoming)',
    ar: 'استقبال الضيوف (إنكامينج)'
  },
  nav_about_services: {
    ru: 'О компании & Услуги',
    ky: 'Компания & Кызматтар',
    tr: 'Hakkımızda & Hizmetler',
    en: 'About & Services',
    de: 'Über uns & Services',
    fr: 'À Propos & Services',
    ar: 'عن الشركة والخدمات'
  },
  about_company_badge: {
    ru: 'Туроператор Kerben Travel',
    ky: 'Kerben Travel Туроператору',
    tr: 'Kerben Travel Acentesi',
    en: 'Kerben Travel Operator',
    de: 'Kerben Travel Reiseveranstalter',
    fr: 'Kerben Travel Opérateur',
    ar: 'شركة كيربين ترافيل السياحية'
  },
  about_company_title: {
    ru: 'Kerben Travel — Ваш надежный мост в Кыргызстан и весь мир',
    ky: 'Kerben Travel — Сиздин Кыргызстанга жана дүйнөгө ишенимдүү көпүрөңүз',
    tr: 'Kerben Travel — Kırgızistan ve Dünyaya Açılan Güvenilir Kapınız',
    en: 'Kerben Travel — Your Trusted Gateway to Kyrgyzstan & Beyond',
    de: 'Kerben Travel — Ihr vertrauenswürdiges Tor nach Kirgisistan & weltweit',
    fr: 'Kerben Travel — Votre Passerelle de Confiance vers le Kirghizistan et le Monde',
    ar: 'كيربين ترافيل — جسركم الموثوق إلى قيرغيزستان وجميع أنحاء العالم'
  },
  about_company_tagline: {
    ru: 'Принимающий туроператор в Кыргызстане, основанный в 2013 году. Наш профиль – индивидуальный и корпоративный туризм высокого уровня.',
    ky: 'Кыргызстандагы кабыл алуучу туроператор, 2013-жылы негизделген. Биздин профиль – жогорку деңгээлдеги жеке жана корпоративдик туризм.',
    tr: '2013 yılında kurulan Kırgızistan merkezli bir incoming acentesiyiz. Profilimiz bireysel ve seçkin kurumsal turizmdir.',
    en: 'An inbound tour operator in Kyrgyzstan, founded in 2013. Our core profile is high-quality individual and corporate tourism for global guests.',
    de: 'Ein 2013 gegründeteter Inbound-Reiseveranstalter in Kirgisistan. Unser Profil ist der individuelle und exklusive Geschäftstourismus.',
    fr: 'Un voyagiste réceptif au Kirghizistan, fondé en 2013. Notre spécialité est le tourisme individuel et d\'affaires haut de gamme.',
    ar: 'شركة سياحية لاستقبال الوفود في قيرغيزستان، تأسست عام ٢٠١٣. نتخصص في تقديم خدمات السياحة الفردية وسياحة الشركات رفيعة المستوى.'
  },
  about_company_p1: {
    ru: 'Компания Kerben Travel успешно работает с 2013 года. Наши современные офисы и представительства расположены в ключевых хабах — Бишкеке и Таласе. Мы специализируемся на комплексном приеме, обслуживании и отправке туристов со всех уголков земного шара.',
    ky: 'Kerben Travel компаниясы 2013-жылдан бери ийгиликтүү иштеп келет. Биздин заманбап кеңселерибиз жана өкүлчүлүктөрүбүз Бишкек жана Талас шаарларында жайгашкан. Биз дүйнөнүн бардык булуң-бурчтарынан келген туристтерди тосуп алуу, тейлөө жана саякатка жөнөтүү боюнча адистешкенбиз.',
    tr: 'Kerben Travel, 2013 yılından bu yana başarıyla faaliyet göstermektedir. Ofislerimiz ve temsilciliklerimiz stratejik öneme sahip Bişkek ve Talas şehirlerinde yer almaktadır. Dünyanın her yerinden gelen turistlerin karşılanması, ağırlanması и gidiş-dönüş organizasyonlarında uzmanız.',
    en: 'Kerben Travel has been operating successfully since 2013. Our professional offices are located in key hubs — Bishkek and Talas. We specialize in comprehensive reception, travel management, and custom solutions for tourists from every corner of the globe.',
    de: 'Kerben Travel ist seit 2013 erfolgreich tätig. Unsere Büros befinden sich in den wichtigsten Zentren Bischkek und Talas. Wir sind auf den Empfang, den Service und die Entsendung von Touristen aus der ganzen Welt spezialisiert.',
    fr: 'Kerben Travel opère avec succès depuis 2013. Nos bureaux modernes sont situés à Bichkek et à Talas. Nous sommes spécialisés dans la réception, la logistique et la prise en charge complète de voyageurs venus du monde entier.',
    ar: 'تعمل كيربين ترافيل بنجاح منذ عام ٢٠١٣. تقع مكاتبنا وفروعنا الحديثة في المراكز الحيوية — بيشكيك وطلاس. نحن متخصصون في تقديم خدمات الاستقبال المتكاملة، وخدمة وتفويج السياح من جميع أنحاء العالم.'
  },
  about_company_p2: {
    ru: 'Нашей главной ценностью является удовлетворение потребностей B2B партнеров и безукоризненное качество обслуживания их клиентов. Мы гарантируем индивидуальный подход к каждому запросу, предлагаем уникальные чартерные и комбинированные программы, экскурсии по Тянь-Шаню и роскошный отдых на Иссык-Куле.',
    ky: 'Биздин эң негизги баалуулугубуз – B2B өнөктөштөрүбүздүн талаптарын аткаруу жана алардын кардарларын кемчиликсиз тейлөө. Биз ар бир суроо-талапка жеке мамиле жасоону кепилдейбиз, сизге уникалдуу чартердик жана айкалышкан программаларды, Ала-Тоо аралап экскурсияларды жана Ысык-Көлдөгү ажайып эс алууну сунуштайбыз.',
    tr: 'En büyük değerimiz, acente ortaklarımızın ihtiyaçlarını tam olarak karşılamak ve müşterilerine kusursuz hizmet sunmaktır. Her talebe bireysel yaklaşımı garanti ediyor, benzersiz charter ve kombine programlar, Tanrı Dağları turları ve muazzam Issık Göl tatilleri sunuyoruz.',
    en: 'Our primary corporate value is exceeding the goals of our B2B partners and delivering flawless hospitality to their direct clients. We execute an individual approach to every dynamic request, offering unique charter paths, multi-destination combinations, Tian Shan trekking, and premium alpine stays by Lake Issyk-Kul.',
    de: 'Unser Hauptwert ist die Zufriedenheit unserer B2B-Partner und der einwandfreie Service für deren Kunden. Wir garantieren einen individuellen Ansatz für jede Anfrage, bieten einzigartige Charter- und Kombinationsprogramme, Exkursionen im Tian Shan-Gebirge und exquisiten Urlaub am Yssykköl-See.',
    fr: 'Notre valeur cardinale est de surpasser les attentes de nos partenaires B2B et d\'assurer un service d\'excellence de bout en bout à leurs clients. Nous offrons une approche personnalisée à chaque dossier : vols charters, séjours combinés uniques, excursions dans le Tian Shan ou villégiatures d\'exception à Issyk-Koul.',
    ar: 'إن القيمة الأساسية لشركة كيربن ترافيل تكمن في تلبية احتياجات شركائنا من الشركات B2B وتقديم خدمة لا تشوبها شائبة لعملائهم. نحن نضمن معالجة متفردة لكل طلب، ونقدم برامج طيران عارض كيربين متميزة، وجولات مركبة، ورحلات في جبال تيان شان، واستجمام فاخر على بحيرة إيسيك كول.'
  },
  about_company_value_label: {
    ru: 'Главная Ценность',
    ky: 'Башкы Баалуулук',
    tr: 'En Temel Değer',
    en: 'Our Main Value',
    de: 'Hauptwert',
    fr: 'Valeur Principale',
    ar: 'القيمة الرئيسية لدينا'
  },
  about_company_value_val: {
    ru: 'Удовлетворение запросов наших Партнеров и безукорязенный, качественный сервис для их клиентов.',
    ky: 'Өнөктөштөрүбүздүн суроо-талаптарын толлук канааттандыруу жана алардын кардарларына кемчиликсиз, сапаттуу кызмат көрсөтүү.',
    tr: 'Acente ortaklarımızın taleplerini en hızlı şekilde çözmek ve müşterilerine kusursuz, kaliteli bir tatil sunmak.',
    en: 'Full satisfaction of our trusted B2B Partners and high-quality, seamless, state-of-the-art service for their clients.',
    de: 'Volle Zufriedenheit unserer geschätzten B2B-Partner und fehlerfreier, hochwertiger Service für deren Gäste.',
    fr: 'La satisfaction absolue de nos partenaires B2B et un accueil irréprochable et de qualité supérieure pour leurs clients.',
    ar: 'تلبية تطلعات شركائنا بالكامل وتقديم خدمة ممتازة ومثالية تليق بعملائهم.'
  },
  about_company_partners_notice_label: {
    ru: 'Привилегии Партнеров',
    ky: 'Өнөктөштөрдүн Артыкчылыктары',
    tr: 'Ortaklarımıza Özel Bilgilendirme',
    en: 'Partner Privileges',
    de: 'Partner-Vorteile',
    fr: 'Privilèges Partenaires',
    ar: 'امتيازات الشركاء'
  },
  about_company_partners_notice_val: {
    ru: 'Все наши Партнеры первыми информируются о спецпредложениях в отелях, наличии мест на рейсах, новых чартерных направлениях, а также получают приоритетные скидки на турпакеты.',
    ky: 'Биздин бардык өнөктөштөр мейманканалардагы атайын сунуштар, каттамдардагы бош орундар, жаңы чартердик багыттар тууралуу биринчилерден болуп кабардар болушат жана турпакеттерге артыкчылыктуу арзандатууларды алышат.',
    tr: 'Tüm iş ortaklarımız, otellerdeki özel kampanyalardan, uçuşlardaki anlık yer durumlarından, yeni charter uçuş rotalarından ilk elden haberdar olur ve özel paket indirimlerinden öncelikli olarak yararlanır.',
    en: 'All our B2B Partners are continuously updated about exclusive hotel deals, real-time seat inventories, new charter destinations, and receive priority pricing and discounts on packages.',
    de: 'Unsere Partner werden stets über exklusive Hotelangebote, freie Plätze auf Flügen, neue Charterziele und Prioritätsrabatte auf Reisepakete informiert.',
    fr: 'Tous nos partenaires B2B bénéficient en priorité d\'alertes sur les offres hôtelières exclusives, la disponibilité des vols, les nouvelles liaisons charters et profitent de tarifs préférentiels.',
    ar: 'يتم إخطار جميع شركائنا باستمرار بالعروض الفندقية الخاصة، وتوفر المقاعد على الرحلات الجوية، والوجهات الجديدة للطيران العارض، فضلاً عن كونهم أول من يستفيد من خصومات الباقات.'
  },
  about_company_spec_label: {
    ru: 'Профессиональное Кредо',
    ky: 'Кесиптик Кредо',
    tr: 'Profesyonel Yaklaşım',
    en: 'Our Professional Creed',
    de: 'Professionelles Kredo',
    fr: 'Crédo Professionnel',
    ar: 'رؤيتنا المهنية والأساسية'
  },
  about_company_spec_val: {
    ru: 'Профессионализм и индивидуальный подход — это незыблемый принцип нашей работы и главный залог общего успеха!',
    ky: 'Профессионализм жана ар бир кардарга жеке мамиле жасоо — бул биздин ишибиздин бекем принциби жана ийгиликтин кепилдиги!',
    tr: 'Profesyonellik ve her misafire özel yaklaşım, çalışma felsehemizin sarsılmaz temel taşı ve ortak başarımızın en büyük anahtarıdır!',
    en: 'Professionalism and an individual customized approach—this is the unwavering principle of our daily work and the guarantee of success!',
    de: 'Professionalität und ein maßgeschneiderter, individueller Ansatz – das ist der unumstößliche Grundsatz unserer täglichen Arbeit und die Erfolgsgarantie!',
    fr: 'Professionnalisme et approche sur mesure : tel est le principe inébranlable de notre travail et le gage de notre succès commun !',
    ar: 'الاحترافية والتعامل الفردي المخصص — هذا هو المبدأ الراسخ والركيزة الأساسية لعملنا اليومي وضمان نجاحنا المشترك!'
  },
  about_company_welcome: {
    ru: 'До встречи в Кыргызстане!',
    ky: 'Кыргызстандан жолукканча!',
    tr: 'Kırgızistan\'da görüşmek üzere!',
    en: 'See you in Kyrgyzstan!',
    de: 'Bis bald in Kirgisistan!',
    fr: 'À bientôt au Kirghizistan !',
    ar: 'نراكم قريباً في قيرغيزستان!'
  },
  services_badge: {
    ru: 'Перечень Сервисов',
    ky: 'Кызматтардын Тизмеси',
    tr: 'Hizmet Yelpazemiz',
    en: 'Service Spectrum',
    de: 'Leistungsspektrum',
    fr: 'Gamme de Services',
    ar: 'مجموعة الخدمات المتكاملة'
  },
  services_title: {
    ru: '15 Лицензированных Услуг Kerben Travel',
    ky: 'Kerben Travel Кабыл Алган 15 Лицензиялуу Кызмат',
    tr: 'Kerben Travel\'ın Sunduğu 15 Lisanslı Hizmet',
    en: '15 Premium Services of Kerben Travel',
    de: '15 Premium-Services von Kerben Travel',
    fr: '15 Services d\'Excellence Kerben Travel',
    ar: '١٥ خدمة مرخصة ومتميزة من كيربين ترافيل'
  },
  services_subtitle: {
    ru: 'Полный цикл туристической логистики и VIP гостеприимства в Кыргызстане и по всему миру в одной компании',
    ky: 'Кыргызстан боюнча жана дүйнө жүзүндөгү туристтик логистиканын жана VIP меймандостуктук толук цикли бир компанияда',
    tr: 'Kırgızistan\'da ve dünya genelinde, tam kapsamlı turizm lojistiği ve VIP misafirperverlik tek çatı altında',
    en: 'A comprehensive cycle of travel logistics, air ticketing, and B2B VIP hospitality in Central Asia and globally',
    de: 'Ein umfassendes Spektrum an Reiselogistik, Flugtickets und B2B-VIP-Betreuung in Zentralasien und weltweit',
    fr: 'Une logistique complète, de la billetterie aérienne à l\'accueil VIP d\'affaires au Kirghizistan et partout dans le monde',
    ar: 'دورة متكاملة من الخدمات اللوجستية للسفر، حجز الطيران، والضيافة المتميزة لقطاع الأعمال في قيرغيزستان والعالم'
  },
  serv_1_title: {
    ru: 'Выписка авиабилетов',
    ky: 'Авиабилеттерди чыгаруу',
    tr: 'Uçak Bileti Satışı',
    en: 'Worldwide Air Ticket Booking',
    de: 'Weltweite Flugticketbuchung',
    fr: 'Billetterie Aérienne Mondiale',
    ar: 'إصدار تذاكر الطيران عالمياً'
  },
  serv_1_desc: {
    ru: 'Быстрая выписка авиабилетов по всем направлениям мира, работа со всеми альянсами, выгодные тарифы.',
    ky: 'Дүйнөнүн бардык багыттары боюнча авиабилеттердин тез арада даярдалышы, ыңгайлуу тарифтер.',
    tr: 'Dünya genelindeki tüm havayolları ve uçuş destinasyonları için hızlı bilet kesimi ve özel acente fiyatları.',
    en: 'Instant ticketing across all global destinations, airline alliances integration, and access to corporate agent discounts.',
    de: 'Sofortige Ticketausstellung für alle globalen Ziele, Zusammenarbeit mit sämtlichen Allianzen und Sondertarifen.',
    fr: 'Émission instantanée de billets sur toutes les destinations mondiales aux meilleurs tarifs négociés.',
    ar: 'إصدار فوري لتذاكر الطيران لجميع الوجهات العالمية وأفضل الأسعار لجميع خطوط الطيران.'
  },
  serv_2_title: {
    ru: 'Отдых за границей',
    ky: 'Чет өлкөдө эс алуу',
    tr: 'Yurt Dışı Tatil Paketleri',
    en: 'Outbound Leisure Tours',
    de: 'Auslandsurlaubsreisen',
    fr: 'Séjours de Vacances à l\'Étranger',
    ar: 'العطلات والرحلات الخارجية'
  },
  serv_2_desc: {
    ru: 'Пакетные предложения, пляжный и экскурсионный отдых в Турции, Египте, Таиланде, ОАЭ, Европе.',
    ky: 'Түркия, Египет, Таиланд, БАЭ жана Европадагы пакеттик сунуштар, пляж жана таанып-билүүчү эс алуулар.',
    tr: 'Türkiye, Mısır, Tayland, BAE ve Avrupa\'da paket tatiller, deniz kum güneş keyfi ve kültür turları.',
    en: 'Complete vacation packages, beach escapes, and culture tours in Turkey, Egypt, Thailand, UAE, and Europe.',
    de: 'Komplette Urlaubspakete, Strandaufenthalte und Bildungsreisen in die Türkei, Ägypten, Thailand, VAE, Europa.',
    fr: 'Formules tout compris, séjours balnéaires et culturels en Turquie, Égypte, Thaïlande, Émirats et Europe.',
    ar: 'باقات عطلات متكاملة وحجوزات شاطئية وثقافية في تركيا، مصر، تايلاند، الإمارات، وأوروبا.'
  },
  serv_3_title: {
    ru: 'Визовая поддержка',
    ky: 'Визалык колдоо',
    tr: 'Vize Başvuru Desteği',
    en: 'Visa Support Services',
    de: 'Visa-Support-Dienste',
    fr: 'Assistance Visa Complète',
    ar: 'خدمات الدعم التأشيري'
  },
  serv_3_desc: {
    ru: 'Консультации, сбор документов и квалифицированное содействие в получении виз для граждан и гостей.',
    ky: 'Жарандар жана коноктор конокко баруу үчүн виза алуу коопсуздугу, документтерди топтоо жана жардам көрсөтүү.',
    tr: 'Tüm vizeler için profesyonel danışmanlık, dökümantasyon kontrolü ve başvuru sürecinin eksiksiz takibi.',
    en: 'Professional visa consulting, documents verification, and official invitation handling for overseas destinations.',
    de: 'Professionelle Visaberatung, Dokumentenprüfung und Unterstützung bei der Visabeschaffung.',
    fr: 'Conseil visa professionnel, vérification des dossiers et préparation complète des documents officiels.',
    ar: 'استشارات تأشيرات السفر الاحترافية، تدقيق المستندات والملفات للحصول على تأشيرات السفر المختلفة.'
  },
  serv_4_title: {
    ru: 'Страхование',
    ky: 'Камсыздандыруу',
    tr: 'Seyahat Sigortası',
    en: 'Travel Health Insurance',
    de: 'Reisekrankenversicherung',
    fr: 'Assurance Médicale de Voyage',
    ar: 'التأمين الطبي والمسؤولي'
  },
  serv_4_desc: {
    ru: 'Оформление надежных международных медицинских страховых полисов на период пребывания за рубежом.',
    ky: 'Чет мамлекеттерде коопсуз жүрүү үчүн ишенимдүү эл аралык медициналык камсыздандыруу баракчаларын даярдоо.',
    tr: 'Seyahatleriniz ve vize başvurularınız için tam kapsamlı uluslararası seyahat sağlık sigortası poliçeleri.',
    en: 'Issuing secure international medical travel policies compliant with Schengen zones and global entry requirements.',
    de: 'Ausstellung von zuverlässigen Auslandsreisekrankenversicherungen für die gesamte Reisedauer.',
    fr: 'Souscription de contrats d\'assurance voyage conformes Schengen pour couvrir sereinement vos trajets.',
    ar: 'إصدار بوالص تأمين طبي دولية للمسافرين متوافقة مع شروط شنغن والمتطلبات العالمية.'
  },
  serv_5_title: {
    ru: 'Чартерные программы',
    ky: 'Чартердик программалар',
    tr: 'Charter Uçuş Programları',
    en: 'Charter Flight Operations',
    de: 'Charterflugprogramme',
    fr: 'Programmes de Vols Charters',
    ar: 'برامج الطيران العارض (التشارتر)'
  },
  serv_5_desc: {
    ru: 'Разработка и осуществление сезонных чартерных программ полетов внутри Кыргызстана и за границу.',
    ky: 'Кыргызстандын ичинде жана чет өлкөлөргө сезондук чартердик учуу программаларды иштеп чыгуу.',
    tr: 'Kırgızistan içi ve yurt dışı lokasyonlara özel sezonluk charter uçuş organizasyonları ve koltuk satışı.',
    en: 'Planning and execution of custom seasonal charter flight operations within Kyrgyzstan or direct to foreign resorts.',
    de: 'Planung und Abwicklung von saisonalen Charterflügen innerhalb Kirgisistans oder zu ausländischen Urlaubsorten.',
    fr: 'Planification et réalisation de vols charters saisonniers locaux ou à destination de stations internationales.',
    ar: 'تخطيط وتنفيذ رحلات الطيران العارض الموسمية داخل قيرغيزستان ومباشرة إلى المنتجعات الخارجية.'
  },
  serv_6_title: {
    ru: 'Событийный туризм',
    ky: 'Окуялык туризм',
    tr: 'Etkinlik & Festival Turizmi',
    en: 'Concert & Event Tourism',
    de: 'Event- und Eventreisen',
    fr: 'Tourisme Événementiel',
    ar: 'سياحة الفعاليات والمناسبات'
  },
  serv_6_desc: {
    ru: 'Организация туров на мировые концерты, спортивные кубки, культурные фестивали и развлекательные шоу.',
    ky: 'Дүйнөлүк концерттерге, спорттук кубокторго, маданий фестивалдарга жана шоулорго турларды уюштуруу.',
    tr: 'Dünyaca ünlü turneler, kupa maçları, uluslararası festivaller ve moda etkinlikleri için biletli seyahat turları.',
    en: 'Tailored travel plans to world-famous concerts, sports finals, cultural festivals, and entertainment shows.',
    de: 'Reisen zu weltweiten Konzerten, Sportfinals, Kulturfestivals und exklusiven Unterhaltungsshows.',
    fr: 'Organisation de séjours pour assister aux concerts mythiques, matches de coupe ou festivals d\'art insolites.',
    ar: 'تنفيذ برامج متكاملة لحضور الكونسرتات العالمية والبطولات الرياضية والمهرجانات الفنية المختلفة.'
  },
  serv_7_title: {
    ru: 'Шоппинг туры',
    ky: 'Шоппинг турлары',
    tr: 'Alışveriş Turları',
    en: 'Guided Shopping Tours',
    de: 'Shopping-Reisen',
    fr: 'Voyages Shopping Guidés',
    ar: 'جولات التسوق والتبادل التجاري'
  },
  serv_7_desc: {
    ru: 'Поездки по крупнейшим торговым центрам, аутлетам и оптовым рынкам в сопровождении гидов.',
    ky: 'Талкууланган эң ири соода борборлоруна, аутлеттерге жана дүң базарларга коштоочу гиддер менен саякаттар.',
    tr: 'Önde gelen marka merkezleri, lüks outlet köyleri ve toptan ticaret merkezlerine rehberli alışveriş turları.',
    en: 'Outings to major shopping districts, luxury designer outlets, and grand wholesale markets with guide support.',
    de: 'Fahrten zu führenden Shoppingzentren, exklusiven Outlet-Dörfern und Großmärkten mit lokaler Begleitung.',
    fr: 'Séjours d\'achats vers les plus grands centres commerciaux et villages outlets de créateurs.',
    ar: 'جولات مخصصة للمراكز التجارية الكبرى والآوتلت والأسواق التجارية مع دعم كامل بالتنقل والإرشاد.'
  },
  serv_8_title: {
    ru: 'MICE услуги',
    ky: 'MICE кызматтары',
    tr: 'MICE & Kongre Hizmetleri',
    en: 'Corporate MICE Services',
    de: 'Firmenevents & MICE',
    fr: 'Services d\'Affaires MICE',
    ar: 'خدمات الشركات والمؤتمرات MICE'
  },
  serv_8_desc: {
    ru: 'Полный сервис корпоративного обслуживания групп: выставки, тимбилдинги, семинары, конференции.',
    ky: 'Топторду корпоративдик тейлөөнүн толук кызматы: тимбилдингтер, көргөзмөлөр, семинарлар, конференциялар.',
    tr: 'Şirket grupları için profesyonel çözümler: bayi toplantıları, fuar katılımları, takım ruhu kampları ve seminerler.',
    en: 'B2B logistics layout: exhibitions, team-building camps, symposia, educational seminars, and conferences.',
    de: 'Organisation von B2B-Veranstaltungen: Messen, Teambuilding, Fachseminare und internationale Konferenzen.',
    fr: 'Logistique d\'affaires haut de gamme : salons professionnels, séminaires, lancements de produits et teambuildings.',
    ar: 'توفير التجهيزات والترتيبات المتكاملة لرحلات الموظفين، المؤتمرات، المعارض والتدريبات.'
  },
  serv_9_title: {
    ru: 'Комбинированные туры',
    ky: 'Айкалыштырылган турлар',
    tr: 'Kombine Çoklu Turlar',
    en: 'Combined Multi-Route Tours',
    de: 'Kombinationsrundreisen',
    fr: 'Circuits Combinés Sur Mesure',
    ar: 'الجولات والبرامج السياحية المشتركة'
  },
  serv_9_desc: {
    ru: 'Интересные путевые связки, объединяющие пляж, исторический экскурсионный туризм и активный трекинг.',
    ky: 'Пляж, тарыхый экскурсия жана активдүү трекинг саякатын бириктирген кызыктуу жол программалары.',
    tr: 'Plaj tatili, tarihi geziler ve aktif dağ doğa yürüyüşlerini harmanlayan çok yönlü seyahat rotaları.',
    en: 'Rich multi-destination itineraries fusing beach relaxation, historic city sightseeings, and mountain treks.',
    de: 'Vielseitige Rundreisen, die Strandurlaub, historische Stadtführungen und Bergtouren harmonisch verbinden.',
    fr: 'Itinéraires combinant activités balnéaires, excursions culturelles et trekking montagneux en un séjour.',
    ar: 'تصميم برامج مشتركة مميزة تجمع بين استرخاء الشواطئ، وجولات المدن المعمارية، والمغامرات الجبلية.'
  },
  serv_10_title: {
    ru: 'Медицинский туризм',
    ky: 'Медициналык туризм',
    tr: 'Tıbbi & Sağlık Turizmi',
    en: 'Medical & Wellness Tourism',
    de: 'Gesundheits- & Medizintourismus',
    fr: 'Tourisme Médical & Bien-être',
    ar: 'السياحة الطبية والمنتجعات الاستشفائية'
  },
  serv_10_desc: {
    ru: 'Поездки в лучшие зарубежные клиники, санатории, спа-курорты и термальные оздоровительные центры.',
    ky: 'Чет өлкөлүк эң мыкты клиникаларга, санаторийлерге, спа-курортторго жана дарылоо борборлоруна баруу.',
    tr: 'Yurt dışındaki en seçkin klinikler, termal kaplıcalar, spa otelleri ve tescilli rehabilitasyon merkezleri.',
    en: 'Health stays at world-renowned clinics, wellness thermal spas, and certified diagnostic check-up centers.',
    de: 'Gesundheitsreisen zu erstklassigen Kliniken, zertifizierten Heilbädern und exklusiven Thermal-Resorts.',
    fr: 'Séjours de thalassothérapie, cures thermales de pointe et diagnostics de santé dans des cliniques de renom.',
    ar: 'علاجات وإقامات صحية في أشهر المصحات الطبية والمنتجعات الاستشفائية ومراكز التشخيص العالمية.'
  },
  serv_11_title: {
    ru: 'VIP / CIP обслуживание',
    ky: 'VIP / CIP тейлөө',
    tr: 'VIP & CIP Havalimanı Hizmeti',
    en: 'VIP & CIP Airport Care',
    de: 'VIP & CIP Flughafen-Service',
    fr: 'Services VIP & Assistance CIP',
    ar: 'الخدمات الخاصة وصالات كبار الشخصيات'
  },
  serv_11_desc: {
    ru: 'Премиальный сервис встречи и проводов в аэропорту, доступ в CIP-лаунжи, индивидуальный трансфер.',
    ky: 'Аэропорттордо конокторду өзгөчө узатуу жана тосуп алуу, CIP-лаунждарына кирүү, жеке трансфер.',
    tr: 'Havalimanlarında CIP salonu kullanımı, hızlı geçiş kartları, lüks karşılama ve kişiye özel transfer araçları.',
    en: 'Meet-and-greet airport support, CIP executive lounge access, fast-track boarding, and luxury transfers.',
    de: 'Exklusiver Empfang am Flughafen, Zugang zu CIP-Lounges, beschleunigter Boarding-Service und Limousinen-Transfers.',
    fr: 'Accueil personnalisé haut de gamme aux aéroports, salons VIP CIP et transferts privatifs de prestige.',
    ar: 'استقبال وتوديع خاص في المطارات، توفير صالات كبار الشخصيات والمسارات السريعة وتوفير السيارات الفاخرة.'
  },
  serv_12_title: {
    ru: 'Отели и туры в КР',
    ky: 'КРдагы отелдер жана турлар',
    tr: 'Kırgızistan Konaklama & Tur',
    en: 'Kyrgyzstan Hotels booking',
    de: 'Hotels & Touren in Kirgisistan',
    fr: 'Hôtels & Expériences au Kirghizistan',
    ar: 'حجز الفنادق والجولات في قيرغيزستان'
  },
  serv_12_desc: {
    ru: 'Выгодное бронирование отелей, курортных комплексов, пансионатов и гостевых домов по всему Кыргызстану.',
    ky: 'Кыргызстан боюнча мейманканаларды, курорттук комплекстерди, пансионаттарды жана конок үйлөрдү үнөмдүү ээлөө.',
    tr: 'Kırgızistan genelinde lüks oteller, dağ evleri ve butik pansiyonlar için en cazip fiyat garantili odalar.',
    en: 'Excellent rates at alpine resorts, lakeside hotels, boutique guesthouses, and authentic yurt camps in Kyrgyzstan.',
    de: 'Sonderkonditionen für die besten Berghotels, Jurtenlager und Wellnesszentren in ganz Kirgisistan.',
    fr: 'Réservation avantageuse d\'hôtels, de centres de villégiature et de yourtes traditionnelles à travers tout le pays.',
    ar: 'أفضل أسعار حجز الفنادق والمنتجعات الجبلية والخيام التراثية في جميع أنحاء قيرغيزستان.'
  },
  serv_13_title: {
    ru: 'Экскурсии по Кыргызстану',
    ky: 'Кыргызстан боюнча экскурсиялар',
    tr: 'Kırgızistan Kültür Gezileri',
    en: 'Guided Sightseeing Tours',
    de: 'Geführte Kirgisistan-Touren',
    fr: 'Excursions Historiques & Nature',
    ar: 'الجولات والرحلات الاستكشافية في قيرغيزستان'
  },
  serv_13_desc: {
    ru: 'Уникальные программы во все регионы нашей страны: ущелья, озера, каньоны в сопровождении опытных гидов.',
    ky: 'Өлкөбүздүн бардык аймактарына кызыктуу программалар: шарттуу ущельелерге, көлдөргө тажрыйбалуу гиддердин коштоосунда.',
    tr: 'Deneyimli rehberler eşliğinde kanyonlar, muazzam vadiler ve milli parkların keşfini içeren benzersiz turlar.',
    en: 'Exclusive guided routes across spectacular canyons, valleys, and national parks with professional multilingual guides.',
    de: 'Exklusive Führungen zu spektakulären Canyons, Tälern und Seen mit erfahrenen, mehrsprachigen Guides.',
    fr: 'Itinéraires guidés d\'exception vers les canyons sauvages, cascades et parcs nationaux du Kirghizistan.',
    ar: 'برامج سياحية متكاملة برفقة مرشدين محترفين لاستكشاف الأودية والأنهار والحدائق الطبيعية الساحرة.'
  },
  serv_14_title: {
    ru: 'Горнолыжные курорты',
    ky: 'Тоо лыжа базаларында эс алуу',
    tr: 'Kış & Kayak Turizmi',
    en: 'Ski Resort Stays',
    de: 'Skiurlaub & Skigebiete',
    fr: 'Stations de Ski Alpin',
    ar: 'منتجعات التزلج والرياضات الشتوية'
  },
  serv_14_desc: {
    ru: 'Зимний активный отдых на горнолыжной базе Каракол и других склонах Тянь-Шаня, аренда снаряжения.',
    ky: 'Каракол тоо лыжа базасында жана башка Ала-Тоо тоолорунда кышкы активдүү эс алуу, шаймандарды ижарага алуу.',
    tr: 'Karakol kayak merkezi başta olmak üzere, kış sporları turları, skipass paketleri ve ekipman temini.',
    en: 'Winter adventures at Karakol ski base and other Tian Shan alpine snow parks, with equipment hire.',
    de: 'Winterabenteuer im Skigebiet Karakol und weiteren Pisten des Tian Shan, inklusive Ausrüstungsverleih.',
    fr: 'Séjours d\'hiver à la station de ski de Karakol et autres pistes de glisse entourées d\'épinettes enneigées.',
    ar: 'مغامرات شتوية مذهلة في قاعدة كاراكول للتزلج وممرات جبال تيان شان الجليدية الساحرة مع استئجار المعدات.'
  },
  serv_15_title: {
    ru: 'Аренда яхт и вилл на Иссык-Куле',
    ky: 'Ысык-Көлдө яхта жана виллаларды ижаралоо',
    tr: 'Göl Kenarında Yat & Villa',
    en: 'Yachts & Premium Villas',
    de: 'Yachten & Luxusvillen am See',
    fr: 'Yachts & Villas d\'Exception',
    ar: 'تأجير اليخوت والفلل على بحيرة إيسيك كول'
  },
  serv_15_desc: {
    ru: 'Аренда современных моторных и парусных яхт, бронирование закрытых элитных коттеджей и береговых вилл.',
    ky: 'Заманбап мотордук жана парустук яхталарды ижарага берүү, жабык элиталык коттедждерди жана виллаларды ээлөө.',
    tr: 'Issık Göl\'de modern lüks yat turları, yelkenli seyahatler, kapalı site içi lüks villa ve göl haneleri kiralama.',
    en: 'Chartering motor or sailing yachts and renting shoreline premium villas/private cottages directly on Lake Issyk-Kul.',
    de: 'Charter von Motor- oder Segelyachten und Buchung von luxuriösen Ferienvillen direkt am Yssykköl-See.',
    fr: 'Location de yachts à moteur ou à voile pour naviguer sur le lac Issyk-Koul et réservation de villas de maître.',
    ar: 'تأجير اليخوت الشراعية والسريعة الفخمة، وحجز الفلل الشاطئية والمجمعات السكنية الراقية والمطلة على بحيرة إيسيك كول.'
  },
  nav_activities: {
    ru: 'Интересные Мероприятия',
    ky: 'Кызыктуу иш-чаралар',
    tr: 'İlginç Etkinlikler',
    en: 'Interesting Activities',
    de: 'Interessante Aktivitäten',
    fr: 'Activités Intéressantes',
    ar: 'الأنشطة والفعاليات'
  },
  book_now: {
    ru: 'Оставить Заявку',
    ky: 'Заявка калтыруу',
    tr: 'Talep Gönder',
    en: 'Leave Feedback / Request',
    de: 'Anfrage Senden',
    fr: 'Laisser une Demande',
    ar: 'تقديم طلب'
  },
  btn_book_tour: {
    ru: 'Забронировать Тур',
    ky: 'Тур заказ кылуу',
    tr: 'Tur Rezervasyonu Yap',
    en: 'Book a Tour',
    de: 'Tour Buchen',
    fr: 'Réserver un Tour',
    ar: 'حجز رحلة'
  },
  admin_panel: {
    ru: 'Панель Заказов',
    ky: 'Буйрутмалар панели',
    tr: 'Yönetici Paneli',
    en: 'Orders Dashboard',
    de: 'Bestellungs-Dashboard',
    fr: 'Tableau de Bord',
    ar: 'لوحة التحكم'
  },
  admin_desc_alert: {
    ru: 'Вы находитесь в Панели Наблюдения: Тут накапливаются все бронирования. Нажмите «Закрыть панель», чтобы вернуться.',
    ky: 'Сиз Көзөмөлдөө панелиндесиз: Бул жерде бардык заказ чогулат. Кайтуу үчүн «Жабуу» баскычын басыңыз.',
    tr: 'Gözlem Panelindesiniz: Tüm rezervasyonlar burada toplanır. Geri dönmek için "Kapat" düğmesine basın.',
    en: 'You are in the Monitoring Dashboard. All reservations are listed here. Click "Close panel" to return.',
    de: 'Sie befinden sich im Dashboard. Alle Buchungen sind hier aufgelistet. Klicken Sie auf "Schließen", um zurückzukehren.',
    fr: 'Vous êtes dans le tableau de bord de surveillance. Toutes les réservations sont ici. Cliquez sur "Fermer" pour revenir.',
    ar: 'أنت في لوحة المراقبة. جميع الحجوزات مدرجة هنا. انقر على "إغلاق اللوحة" للعودة.'
  },
  btn_close_panel: {
    ru: 'Закрыть панель',
    ky: 'Панелди жабуу',
    tr: 'Paneli kapat',
    en: 'Close Panel',
    de: 'Schließen',
    fr: 'Fermer le panneau',
    ar: 'إغلاق اللوحة'
  },
  ticker_banner: {
    ru: 'Групповые скидки на авиабилеты до 15%! Комплексный прием делегаций со всей Европы и Азии: звоните',
    ky: 'Топтук авиабилеттерге 15% чейин арзандатуулар! Европа жана Азиядан делегацияларды комплекстүү кабыл алуу: чалыңыз',
    tr: 'Uçak biletlerinde %15\'e varan grup indirimleri! Avrupa ve Asya\'dan delegasyonların kabulü: bizi arayın',
    en: 'Group flight ticket discounts up to 15%! Premium inbound delegation services across Europe & Asia: Call',
    de: 'Gruppenrabatte auf Flugtickets bis zu 15%! Umfassender Empfang von Delegationen aus Europa und Asien: rufen Sie uns an',
    fr: 'Remises de groupe sur les billets d\'avion jusqu\'à 15% ! Accueil complet des délégations d\'Europe et d\'Asie : appelez',
    ar: 'خصومات جماعية على تذاكر الطيران تصل إلى 15٪! استقبال كامل للوفود من جميع أنحاء أوروبا وآسيا: اتصلوا بنا'
  },
  online_now: {
    ru: 'Сейчaс в сети: Ждем вопросы!',
    ky: 'Азыр тармакта: Суроолорду күтөбүз!',
    tr: 'Şu an çevrimiçi: Sorularınızı bekliyoruz!',
    en: 'Online now: We are waiting! 🟢',
    de: 'Jetzt online: Wir freuen uns auf Ihre Fragen! 🟢',
    fr: 'En ligne : Posez vos questions ! 🟢',
    ar: 'متصلون الآن: بانتظار استفساراتكم! 🟢'
  },
  whatsapp_bubble: {
    ru: 'Задать вопрос в WhatsApp',
    ky: 'WhatsApp аркылуу суроо берүү',
    tr: 'WhatsApp\'tan soru sor',
    en: 'Ask a question via WhatsApp',
    de: 'Frage per WhatsApp stellen',
    fr: 'Poser une question via WhatsApp',
    ar: 'استفسار عبر الواتساب'
  },

  // Hero Section
  hero_badge: {
    ru: 'Ваш надежный гид Кербен Тревел',
    ky: 'Сиздин ишенимдүү жол көрсөткүчүңүз Кербен Тревел',
    tr: 'Güvenilir rehberiniz Kerben Travel',
    en: 'Your Dedicated Guide Kerben Travel',
    de: 'Ihr vertrauenswürdiger Reiseführer Kerben Travel',
    fr: 'Votre guide de confiance Kerben Travel',
    ar: 'مرشدكم الموثوق كيربن ترافيل'
  },
  hero_title_1: {
    ru: 'Открывайте ',
    ky: 'Биз менен бирге ',
    tr: 'Bizimle ',
    en: 'Discover ',
    de: 'Entdecken Sie ',
    fr: 'Découvrez ',
    ar: 'اكتشفوا '
  },
  hero_title_gradient: {
    ru: 'весь мир',
    ky: 'бүткүл дүйнөнү',
    tr: 'tüm dünyayı',
    en: 'the whole world',
    de: 'die ganze Welt',
    fr: 'le monde entier',
    ar: 'العالم بأكمله'
  },
  hero_title_2: {
    ru: ' вместе с нами',
    ky: ' ачыңыз',
    tr: ' keşfedin',
    en: ' with us',
    de: ' mit uns',
    fr: ' avec nous',
    ar: ' معنا'
  },
  hero_subtitle: {
    ru: 'Авиабилеты в любую точку планеты по лучшим ценам, незабываемые зарубежные туры, колоритное погружение в быт кочевников Кыргызстана и безупречный прием иностранных делегаций.',
    ky: 'Дүйнөнүн каалаган булуң-бурчуна эң сонун баада авиабилеттер, унутулгус чет өлкөлүк турлар, Кыргызстандын көчмөн турмушуна терең аралашуу жана чет өлкөлүк делегацияларды жогорку деңгээлде кабыл алуу.',
    tr: 'Gezegenin her yerine en iyi fiyatlarla uçak biletleri, unutulmaz yurt dışı turları, Kırgızistan göçebelerinin yaşamına renkli bir dalış ve yabancı delegasyonların kusursuz kabulü.',
    en: 'Flight tickets everywhere at best rates, unforgettable international trips, colorful nomadic adventure inside Kyrgyzstan, and seamless support for international delegations.',
    de: 'Flugtickets an jeden Ort der Welt zu den besten Preisen, unvergessliche Auslandsreisen, farbenfrohes Eintauchen in das Leben der Nomaden in Kirgisistan und makelloser Empfang ausländischer Delegationen.',
    fr: 'Billets d\'avion partout au meilleur prix, voyages internationaux inoubliables, immersion colorée dans la vie nomade du Kirghizistan et accueil professionnel de délégations.',
    ar: 'تذاكر طيران إلى أي مكان في العالم بأفضل الأسعار، ورحلات دولية لا تُنسى، وتجربة فريدة في حياة البدو في قيرغيزستان، واستقبال مثالي للوفود الأجنبية.'
  },
  stat_flights: {
    ru: 'Авиабилеты везде',
    ky: 'Авиабилеттер баардык жерге',
    tr: 'Her yere uçuşlar',
    en: 'Flights Worldwide',
    de: 'Flugtickets überall',
    fr: 'Billets d\'avion partout',
    ar: 'تذاكر طيران لكل مكان'
  },
  stat_resorts: {
    ru: 'Мировые курорты',
    ky: 'Дүйнөлүк курорттор',
    tr: 'Dünya tatil köyleri',
    en: 'Global Resorts',
    de: 'Exotische Resorts',
    fr: 'Stations Mondiales',
    ar: 'منتجعات عالمية'
  },
  stat_tours: {
    ru: 'Эксклюзивных туров',
    ky: 'Эксклюзивдүү турлар',
    tr: 'Özel lüks turlar',
    en: 'Exclusive Tours',
    de: 'Exklusive Touren',
    fr: 'Tours Exclusifs',
    ar: 'جولات حصرية'
  },
  stat_support: {
    ru: 'Поддержка гостей',
    ky: 'Конокторду колдоо',
    tr: '7/24 Kesintisiz destek',
    en: 'Guest Support',
    de: 'Gästebetreuung',
    fr: 'Support Client',
    ar: 'دعم الضيوف والزوار'
  },
  btn_book_vacation: {
    ru: 'Забронировать отдых',
    ky: 'Эс алууну заказ кылуу',
    tr: 'Tatil rezervasyonu yap',
    en: 'Book Your Vacation',
    de: 'Urlaub Buchen',
    fr: 'Réserver des Vacances',
    ar: 'احجز إجازتك الآن'
  },
  btn_search_flights: {
    ru: 'Поиск авиабилетов',
    ky: 'Авиабилет издөө',
    tr: 'Uçak Bileti Ara',
    en: 'Search Flight Tickets',
    de: 'Flugtickets Suchen',
    fr: 'Recherche de Billets',
    ar: 'البحث عن تذاكر الطيران'
  },

  // Flight Ticket Search
  search_badge: {
    ru: 'Авиабилеты по всему миру',
    ky: 'Бүткүл дүйнө боюнча авиабилеттер',
    tr: 'Tüm dünyaya uçak biletleri',
    en: 'Global Air Tickets Booking',
    de: 'Flugreisen Weltweit',
    fr: 'Billets d\'Avion Internationaux',
    ar: 'تذاكر طيران حول العالم'
  },
  search_title: {
    ru: 'Поиск дешевых авиабилетов',
    ky: 'Арзан авиабилеттерди издөө',
    tr: 'Ucuz Uçak Bileti Arama',
    en: 'Search Cheap Flight Tickets',
    de: 'Günstige Flüge Finden',
    fr: 'Trouver des Billets d\'Avion',
    ar: 'البحث عن تذاكر طيران مخفضة'
  },
  search_desc: {
    ru: 'Kerben Travel сотрудничает напрямую с крупнейшими авиакомпаниями мира (Turkish Airlines, FlyDubai, Pegasus, Air Astana и др.). Наведи маршрут, и мы подберем тариф по GDS-системам.',
    ky: 'Кербен Тревел дүйнөнүн эң ири авиакомпаниялары (Turkish Airlines, FlyDubai, Pegasus, Air Astana ж. б.) менен тикелей кызматташат. Багытты көрсөтүңүз, биз GDS системалары аркылуу эң ыңгайлуу тарифти таап беребиз.',
    tr: 'Kerben Travel, dünyanın en büyük havayolları (Turkish Airlines, FlyDubai, Pegasus, Air Astana vb.) ile doğrudan işbirliği yapmaktadır. Rotanızı belirleyin, GDS sistemlerinde size en iyi tarifeyi bulalım.',
    en: 'Kerben Travel works directly with major airlines worldwide (Turkish Airlines, FlyDubai, Pegasus, Air Astana, etc.). Specify your route and we will select the best GDS rates.',
    de: 'Kerben Travel arbeitet direkt mit den weltweit führenden Fluggesellschaften zusammen (Turkish Airlines, FlyDubai, Pegasus, Air Astana usw.). Wählen Sie Ihre Route, wir vergleichen über GDS.',
    fr: 'Kerben Travel collabore directement avec les plus grandes compagnies aériennes mondiales (Turkish Airlines, FlyDubai, Air Astana, etc.). Indiquez l\'itinéraire pour trouver le meilleur tarif.',
    ar: 'تتعاون كيربن ترافيل مباشرة مع كبريات شركات الطيران العالمية (الخطوط التركية، فلاي دبي، بيغاسوس، إير أستانا وغيرها). حدد مسارك وسنختار لك أفضل الأسعار عبر أنظمة التوزيع العالمية.'
  },
  search_round: {
    ru: 'В обе стороны',
    ky: 'Эки тарапка тең',
    tr: 'Gidiş-Dönüş',
    en: 'Round Trip',
    de: 'Hin- und Rückflug',
    fr: 'Aller-Retour',
    ar: 'ذهاب وعودة'
  },
  search_oneway: {
    ru: 'В одну сторону',
    ky: 'Бир тарапка',
    tr: 'Tek Yön',
    en: 'One-Way',
    de: 'Hinflug',
    fr: 'Aller Simple',
    ar: 'ذهاب فقط'
  },
  label_from: {
    ru: 'Откуда вылет',
    ky: 'Кайдан учуп чыгуу',
    tr: 'Nereden',
    en: 'Departure From',
    de: 'Abflug von',
    fr: 'Départ de',
    ar: 'المغادرة من'
  },
  label_to: {
    ru: 'Куда (Город / Страна)',
    ky: 'Кайда (Шаар / Өлкө)',
    tr: 'Nereye (Şehir / Ülke)',
    en: 'Destination To (City / Country)',
    de: 'Reiseziel (Stadt / Land)',
    fr: 'Destination (Ville / Pays)',
    ar: 'الوجهة إلى (المدينة / الدولة)'
  },
  placeholder_to: {
    ru: 'Например: Стамбул, Анталья, Москва...',
    ky: 'Мисалы: Стамбул, Анталья, Москва...',
    tr: 'Örnek: İstanbul, Antalya, Paris...',
    en: 'E.g., Istanbul, Antalya, London...',
    de: 'Z.B. Istanbul, Antalya, Berlin...',
    fr: 'Ex: Istanbul, Antalya, Paris...',
    ar: 'مثال: إسطنبول، أنطاليا، لندن...'
  },
  label_date_from: {
    ru: 'Дата туда',
    ky: 'Учуп кетүү убактысы',
    tr: 'Gidiş Tarihi',
    en: 'Departure Date',
    de: 'Hinflugsdatum',
    fr: 'Date de Départ',
    ar: 'تاريخ الذهاب'
  },
  label_date_to: {
    ru: 'Дата обратно',
    ky: 'Кайра кайтуу убактысы',
    tr: 'Dönüş Tarihi',
    en: 'Return Date',
    de: 'Rückflugsdatum',
    fr: 'Date de Retour',
    ar: 'تاريخ العودة'
  },
  not_required: {
    ru: '(Не требуется)',
    ky: '(Кереги жок)',
    tr: '(Gerekli değil)',
    en: '(Not required)',
    de: '(Nicht erforderlich)',
    fr: '(Non requis)',
    ar: '(غير مطلوب)'
  },
  label_passengers: {
    ru: 'Пассажиров',
    ky: 'Жүргүнчүлөр',
    tr: 'Yolcu sayisi',
    en: 'Passengers',
    de: 'Passagiere',
    fr: 'Voyageurs',
    ar: 'المسافرون'
  },
  pax_count: {
    ru: 'чел.',
    ky: 'киши',
    tr: 'kişi',
    en: 'pax',
    de: 'Pers.',
    fr: 'pers.',
    ar: 'أفراد'
  },
  label_class: {
    ru: 'Класс',
    ky: 'Класс',
    tr: 'Kabin Sınıfı',
    en: 'Class',
    de: 'Flugklasse',
    fr: 'Classe',
    ar: 'درجة السفر'
  },
  class_economy: {
    ru: 'Эконом',
    ky: 'Эконом',
    tr: 'Ekonomi',
    en: 'Economy',
    de: 'Economy',
    fr: 'Économique',
    ar: 'اقتصادية'
  },
  class_business: {
    ru: 'Бизнес',
    ky: 'Бизнес',
    tr: 'Business',
    en: 'Business',
    de: 'Business',
    fr: 'Affaires',
    ar: 'درجة أعمال'
  },
  label_fullname: {
    ru: 'ФИО клиента (как в загранпаспорте)',
    ky: 'Аты-жөнү (чет элдик паспорттогудай)',
    tr: 'Müşterinin Adı Soyadı (pasaporttaki gibi)',
    en: 'Full Name (as in International Passport)',
    de: 'Vollständiger Name (wie im Reisepass)',
    fr: 'Nom Complet (comme dans le passeport)',
    ar: 'الاسم الكامل للعميل (كما في جواز السفر)'
  },
  placeholder_fullname: {
    ru: 'Например: Имя Фамилия',
    ky: 'Мисалы: Асан Үсөн уулу',
    tr: 'Örneğin: Ahmet Yılmaz',
    en: 'E.g., John Doe',
    de: 'Z.B. Max Mustermann',
    fr: 'Ex: Jean Dupont',
    ar: 'مثال: محمد أحمد'
  },
  label_phone: {
    ru: 'Номер Телефона (WhatsApp)',
    ky: 'Телефон номери (WhatsApp)',
    tr: 'Telefon Numarası (WhatsApp)',
    en: 'Phone Number (WhatsApp)',
    de: 'Telefonnummer (WhatsApp)',
    fr: 'Numéro de Téléphone (WhatsApp)',
    ar: 'رقم الهاتف (الواتساب)'
  },
  placeholder_phone: {
    ru: 'Например: +996 555 123 456',
    ky: 'Мисалы: +996 555 123 456',
    tr: 'Örneğin: +90 532 123 45 67',
    en: 'E.g., +996 706 33 00 14',
    de: 'Z.B. +49 170 1234567',
    fr: 'Ex: +33 6 12345678',
    ar: 'مثال: 996706330014+'
  },
  btn_search_submit: {
    ru: 'Искать Авиабилеты',
    ky: 'Авиабилет издөө',
    tr: 'Uçak Bileti Bul',
    en: 'Search Flights',
    de: 'Flüge Suchen',
    fr: 'Rechercher des vols',
    ar: 'البحث عن الطيران'
  },
  btn_searching: {
    ru: 'Подбираем тарифы...',
    ky: 'Тарифтерди тандап жатабыз...',
    tr: 'Tarifeler aranıyor...',
    en: 'Selecting best rates...',
    de: 'Tarife werden gesucht...',
    fr: 'Sélection des tarifs...',
    ar: 'جاري اختيار أفضل الأسعار...'
  },
  security_note: {
    ru: 'Ваши данные зашифрованы и защищены TLS 1.3',
    ky: 'Сиздин маалыматтар шифрленген жана TLS 1.3 тарабынан коргоого алынган',
    tr: 'Verileriniz şifrelenmiş ve TLS 1.3 ile korunmaktadır',
    en: 'Your critical data is secure and encrypted via TLS 1.3',
    de: 'Ihre Daten sind verschlüsselt und durch TLS 1.3 geschützt',
    fr: 'Vos données sont cryptées et sécurisées par TLS 1.3',
    ar: 'بياناتكم مشفرة ومحمية ببروتوكول آمنTLS 1.3'
  },
  search_success_title: {
    ru: 'Заявка принята!',
    ky: 'Суроо-талап кабыл алынды!',
    tr: 'Plan Sended!',
    en: 'Request Accepted!',
    de: 'Anfrage Erhalten!',
    fr: 'Demande Reçue !',
    ar: 'تم استقبال طلبكم بنجاح!'
  },
  search_success_desc: {
    ru: 'Мы получили ваш запрос на авиабилеты. Наш ведущий авиакассир выполняет подбор тарифов по системам Amadeus и Sabre. В течение 10 минут мы свяжемся с вами по WhatsApp или телефону.',
    ky: 'Биз сиздин авиабилет издөө сурооңузду алдык. Биздин башкы кассир Amadeus жана Sabre системалары боюнча тандайт. 10 мүнөттүн ичинде биз сиз менен байланышабыз.',
    tr: 'Uçak bilet talebiniz alınmıştır. Rezervasyon sorumlumuz Amadeus ve Sabre sistemleri üzerinden en ucuz bilet fiyatını arıyor. 10 dakika içinde WhatsApp\'tan iletişime geçeceğiz.',
    en: 'Flight ticket requests successfully created. Our main operator is compiling the absolute lowest custom fare via Amadeus and Sabre. We will ping you in 10 minutes on WhatsApp.',
    de: 'Wir haben Ihre Anfrage für Flugtickets erhalten. Unser führender Mitarbeiter vergleicht Tarife über Amadeus und Sabre. Wir melden uns in 10 Minuten über WhatsApp bei Ihnen.',
    fr: 'Nous avons reçu votre demande de billets. Notre agent recherche les meilleurs tarifs via Amadeus et Sabre. Nous vous contacterons sur WhatsApp sous 10 minutes.',
    ar: 'تلقينا طلبكم لحجز تذاكر الطيران. يقوم موظف الحجز الأول بمقارنة الأسعار عبر أنظمة أماديوس وسيبر. سنتواصل معكم عبر الواتساب في غضون 10 دقائق.'
  },
  btn_search_other: {
    ru: 'Искать другие авиабилеты',
    ky: 'Башка авиабилет издөө',
    tr: 'Diğer biletleri ara',
    en: 'Search new flights',
    de: 'Neue Flüge suchen',
    fr: 'Chercher d\'autres billets',
    ar: 'البحث عن تذاكر أخرى'
  },
  error_fill_all: {
    ru: 'Пожалуйста, заполните пункты отправления, назначения, дату вылета, ФИО и телефон.',
    ky: 'Сураныч, учуп чыгуучу, бара турган жерлерди, күндү, ФИО жана телефонду жазыңыз.',
    tr: 'Lütfen kalkış, varış yeri, uçuş tarihi, isim ve telefon numarasını doldurun.',
    en: 'Please fill out departure, destination, departure date, full name and phone.',
    de: 'Bitte füllen Sie Abflugort, Reiseziel, Datum, Name und Telefonnummer aus.',
    fr: 'Veuillez remplir le départ, la destination, la date, le nom et le téléphone.',
    ar: 'يرجى ملء نقطة المغادرة، الوجهة، التاريخ، الاسم ورقم الهاتف.'
  },

  // Tour Section Headers
  tour_badge: {
    ru: 'Мир Приключений',
    ky: 'Укмуштуу окуялар дүйнөсү',
    tr: 'Macera Dünyası',
    en: 'World of Adventure',
    de: 'Welt der Abenteuer',
    fr: 'Monde d\'Aventure',
    ar: 'عالم المغامرات'
  },
  tour_title: {
    ru: 'Популярные направления отдыха',
    ky: 'Эс алуунун популярдуу багыттары',
    tr: 'Popüler Tatil Rotaları',
    en: 'Popular Tour Destinations',
    de: 'Beliebte Urlaubsziele',
    fr: 'Destinations de Vacances Populaires',
    ar: 'وجهات العطلات الأكثر شعبية'
  },
  tour_desc: {
    ru: 'От пляжного расслабления All Inclusive до авторских этно-экспедиций в горах Кыргызстана. Выбирайте поездку вашей мечты.',
    ky: 'Пляжда ALL Inclusive шартта эс алуудан баштап кыргыз тоолорундагы автордук этно-экспедицияларга чейин. Кыялыңыздагы саякатты тандаңыз.',
    tr: 'All Inclusive plaj dinlenmesinden Kırgızistan dağlarındaki özel etno-gezilere kadar. Hayalinizdeki seyahati seçin.',
    en: 'From coastal ultra-relaxing All Inclusive packages to exclusive ethno-expeditions within Kyrgyzstan. Find your dream trip.',
    de: 'Vom erholsamen All-inclusive-Strandurlaub bis hin zu maßgeschneiderten Ethno-Expeditionen in den Bergen Kirgisistans. Wählen Sie Ihre Traumreise.',
    fr: 'Du repos balnéaire All Inclusive aux expéditions ethnographiques sur mesure dans les montagnes du Kirghizistan.',
    ar: 'من الاسترخاء التام على الشواطئ بنظام الكل مشمول إلى البعثات الإثنوغرافية المخصصة في جبال قيرغيزستان. اختر رحلة أحلامك.'
  },

  // Inbound Tourism (Incoming)
  incoming_badge: {
    ru: 'Инкаминг в Кыргызстане / Incoming Tourism',
    ky: 'Кыргызстанга конок кабыл алуу / Кирүү туризми',
    tr: 'Kırgızistan Gelen Turizm / Incoming',
    en: 'Inbound Tourism to Kyrgyzstan',
    de: 'Inbound-Tourismus in Kirgisistan',
    fr: 'Tourisme Réceptif au Kirghizistan',
    ar: 'السياحة الوافدة إلى قيرغيزستان'
  },
  incoming_title: {
    ru: 'Прием гостей и групповых делегаций',
    ky: 'Конокторду жана топтук делегацияларды кабыл алуу',
    tr: 'Yabancı Misafirlerin ve Delegasyonların Kabulü',
    en: 'Reception of Guests & Executive Delegations',
    de: 'Empfang von Gästen und Delegationen',
    fr: 'Accueil de Groupes et de Délégations',
    ar: 'استقبال الضيوف والوفود الرسمية'
  },
  incoming_desc: {
    ru: 'Kerben Travel организует профессиональный прием зарубежных гостей, корпоративных визитеров и туристических групп под ключ. Позвольте вашим гостям влюбиться в величие кыргызских просторов и аутентичную кочевую культуру с безупречным сервисом.',
    ky: 'Кербен Тревел чет өлкөлүк конокторду, корпоративдик визитерлорду жана туристтик топторду кесипкөй түрдө, толугу менен кабыл алууну уюштурат. Берилген жогорку деңгээлдеги кызмат менен конокторуңуздун кыргыз жергесин жана кочмөн салтын сүйүп калышына жол ачыңыз.',
    tr: 'Kerben Travel, yabancı misafirlerin, kurumsal ziyaretçilerin ve turist gruplarının anahtar teslimi profesyonel karşılanmasını organize eder. Misafirleriniz kusursuz hizmetimizle Kırgız coğrafyasının görkemine ve otantik göçebe kültürüne aşık olsun.',
    en: 'Kerben Travel organizes complete professional support for international guests, corporate visitors, and Tourist Delegations. Give your guests a lifetime memory of beautiful mountain ranges and wild nomadic Kyrgyz culture with exquisite support.',
    de: 'Kerben Travel organisiert den professionellen Empfang ausländischer Gäste, Geschäftsreisender und Reisegruppen. Lassen Sie Ihre Gäste sich mit tadellosem Service in die atemberaubende Natur Kirgisistans verlieben.',
    fr: 'Kerben Travel organise l\'accueil sur mesure des invités étrangers et des délégations d\'affaires. Permettez à vos visiteurs de tomber sous le charme du Kirghizistan et de sa culture nomade.',
    ar: 'تنظم كيربن ترافيل استقبالاً احترافياً كاملاً للضيوف الأجانب والزوار من قطاع الشركات والمجموعات السياحية. دع ضيوفك يعشقون روعة الطبيعة القيرغيزية وثقافة البدو الأصيلة مع خدمة متميزة وعالية الجودة.'
  },
  guarantee_lang_title: {
    ru: 'Языковая поддержка',
    ky: 'Тил жагынан колдоо',
    tr: 'Dil desteği',
    en: 'Multilingual Guides',
    de: 'Sprachliche Unterstützung',
    fr: 'Support Linguistique',
    ar: 'الدعم اللغوي'
  },
  guarantee_lang_desc: {
    ru: 'Гиды-переводчики на английском, немецком, турецком, китайском, французском и арабском языках.',
    ky: 'Англис, немис, түрк, кытай, француз жана араб тилдеринде сүйлөгөн гид-котормочулар.',
    tr: 'İngilizce, Almanca, Türkçe, Çince, Fransızca ve Arapça bilen profesyonel rehberler.',
    en: 'Certified guides speaking English, German, Turkish, Chinese, French, and Arabic.',
    de: 'Zertifizierte Guides für Englisch, Deutsch, Türkisch, Chinesisch, Französisch und Arabisch.',
    fr: 'Guides parlant anglais, allemand, turc, chinois, français et arabe.',
    ar: 'مرشدون ومترجمون باللغات الإنجليزية، الألمانية، التركية، الصينية، الفرنسية والعربية.'
  },
  guarantee_groups_title: {
    ru: 'Группы любого масштаба',
    ky: 'Кандай көлөмдөгү топтор болбосун',
    tr: 'Her büyüklükte gruplar',
    en: 'Groups of All Sizes',
    de: 'Gruppen jeder Größe',
    fr: 'Groupes de Toutes Tailles',
    ar: 'مجموعات من كافة الأحجام'
  },
  guarantee_groups_desc: {
    ru: 'Принимаем корпоративные делегации, туристические группы, школьников, спортивные клубы до 150 человек.',
    ky: 'Корпоративдик делегацияларды, туристтик топторду, мектеп окуучуларын, 150 кишиге чейинки спорт клубдарын кабыл алабыз.',
    tr: '150 kişiye kadar kurumsal delegasyonları, turist gruplarını, öğrencileri, spor kulüplerini kabul ediyoruz.',
    en: 'We arrange services for corporate delegations, tourist parties, student groups, and sport teams up to 150 pax.',
    de: 'Wir empfangen Delegationen, Touristengruppen, Schüler und Sportvereine bis zu 150 Personen.',
    fr: 'Services pour les délégations, groupes touristiques, scolaires et clubs sportifs jusqu\'à 150 personnes.',
    ar: 'نستقبل الوفود المؤسسية، والمجموعات السياحية، والطلاب، والأندية الرياضية حتى 150 شخصاً.'
  },
  guarantee_transport_title: {
    ru: 'Премиум транспорт',
    ky: 'Премиум унаалар',
    tr: 'Premium araç filosu',
    en: 'Premium Cars & Buses',
    de: 'Premium-Transport',
    fr: 'Transport Premium',
    ar: 'مركبات ووسائل نقل فاخرة'
  },
  guarantee_transport_desc: {
    ru: 'Собственный парк комфортабельных автобусов Setra, внедорожников 4x4 Lexus/Toyota для горных трасс.',
    ky: 'Setra жайлуу автобустарынын, тоо жолдору үчүн заманбап 4x4 Lexus/Toyota жол тандабастарынын жеке автопаркы.',
    tr: 'Dağ yolları için konforlu Setra otobüsleri ve 4x4 Lexus/Toyota SUV araç filomuz mevcuttur.',
    en: 'Our own fleet of comfortable Setra coaches, and 4x4 Lexus/Toyota SUVs for off-road mountain passes.',
    de: 'Eigener Fuhrpark aus Setra-Bussen und 4x4-Geländewagen (Lexus, Toyota) für Gebirgsstrecken.',
    fr: 'Flotte d\'autocars Setra confortables et de SUV 4x4 (Lexus, Toyota) pour les pistes de montagne.',
    ar: 'أسطولنا الخاص من حافلات Setra المريحة وسيارات الدفع الرباعي الفاخرة (Lexus, Toyota) الملائمة للمنحدرات الجبلية.'
  },
  guarantee_hotels_title: {
    ru: 'Полный пансион',
    ky: 'Толук тейлөө (Пансион)',
    tr: 'Tam pansiyon hizmet',
    en: 'Full Board Support',
    de: 'Vollpension',
    fr: 'Pension Complète',
    ar: 'إقامة وإعاشة كاملة'
  },
  guarantee_hotels_desc: {
    ru: 'Бронирование элитных юрточных комплексов, сертифицированных отелей, ресторанное и походное питание.',
    ky: 'Элиталык боз үй комплекстерин, сертификатталган мейманканаларды брондоого көмөктөшүү, ресторандык жана походдук даамдуу тамак-аш уюштуруу.',
    tr: 'Seçkin yurt kompleksleri, sertifikalı oteller, restoran ve açık hava yemek hizmetleri.',
    en: 'Booking of design yurt complexes, rated star hotels, master restaurant cuisines, and off-road camping meals.',
    de: 'Buchung exklusiver Jurten-Camps, zertifizierter Hotels, erstklassiges Catering und Verpflegung.',
    fr: 'Réservation de camps de yourtes haut de gamme, d\'hôtels étoilés, restauration gastronomique et de camping.',
    ar: 'حجز مجمعات الخيام الفاخرة (اليورت قديماً)، الفنادق المعتمدة، وخدمات الكاتريج الراقية والوجبات البرية.'
  },

  // Activities Section
  activities_badge: {
    ru: 'Кызыктуу мероприятиялар',
    ky: 'Кызыктуу иш-чаралар',
    tr: 'Eğlenceli Etkinlikler',
    en: 'Fascinating Experiences',
    de: 'Interessante Erlebnisse',
    fr: 'Expériences Fascinantes',
    ar: 'أنشطة تراثية شيقة'
  },
  activities_title: {
    ru: 'Аутентичные этнические шоу и активности',
    ky: 'Аутентикалык этникалык шоулор жана иш-чаралар',
    tr: 'Otantik Etnik Gösteriler ve Aktiviteler',
    en: 'Authentic Ethnic Shows & Activities',
    de: 'Authentische Ethno-Shows und Aktivitäten',
    fr: 'Spectacles et Activités Ethniques Authentiques',
    ar: 'عروض تراثية وأنشطة واقعية أصيلة'
  },
  activities_desc: {
    ru: 'Групповые экскурсии включают яркие элементы национальных традиций, организуемые по согласованию.',
    ky: 'Топтук саякаттарга макулдашуу боюнча улуттук каада-салттардын кызыктуу көрүнүштөрү кошулат.',
    tr: 'Grup turları, anlaşmaya göre düzenlenen ulusal geleneklerin canlı unsurlarını içerir.',
    en: 'Executive group trips include colorful elements of national Kyrgyz arts, designed individually.',
    de: 'Gruppenreisen beinhalten lebendige Elemente kirgisischer Traditionen nach individueller Absprache.',
    fr: 'Les excursions de groupe incluent des démonstrations vibrantes des traditions locales.',
    ar: 'تتضمن الرحلات الجماعية فقرات وعناصر حيوية من التراث والتقاليد الوطنية، تُرتب حسب الطلب.'
  },
  intensity: {
    ru: 'Нагрузка',
    ky: 'Энергия',
    tr: 'Zorluk',
    en: 'Level',
    de: 'Intensität',
    fr: 'Intensité',
    ar: 'مستوى المجهود'
  },
  price_org: {
    ru: 'Стоимость организации:',
    ky: 'Уюштуруу баасы:',
    tr: 'Organize ücreti:',
    en: 'Organization Cost:',
    de: 'Organisationskosten:',
    fr: 'Coût d\'organisation :',
    ar: 'تكلفة التنظيم:'
  },
  btn_order_group: {
    ru: 'Заказать на группу',
    ky: 'Топко заказ кылуу',
    tr: 'Grup için ayırt',
    en: 'Book for a Group',
    de: 'Für Gruppe buchen',
    fr: 'Réserver pour un Groupe',
    ar: 'حجز لمجموعة'
  },
  corp_title: {
    ru: 'Индивидуальные групповые расчеты',
    ky: 'Жекече топтук эсептөөлөр',
    tr: 'Özel Grup ve Delegasyon Hesaplamaları',
    en: 'Bespoke Executive Calculations',
    de: 'Individuelle Gruppenangebote',
    fr: 'Calculs de Groupes Personnalisés',
    ar: 'حسابات مخصصة للمجموعات'
  },
  corp_desc: {
    ru: 'Планируете приезд делегации, партнеров, дипломатов или проведение MICE-мероприятий в Кыргызстане? Мы составим уникальный поминутный таймлайн программы, согласуем безопасность и организуем безупречную встречу в VIP-зале аэропортов Манас или Ош.',
    ky: 'Делегациянын, өнөктөштөрдүн, дипломаттардын келүүсүн же Кыргызстанда MICE-иш-чараларды уюштурууну пландап жатасызбы? Биз программанын ыңгайлуу хронологиясын түзөбүз, коопсуздукту камсыздайбыз жана Манас же Ош аэропортторунун VIP залдарында сонун жолугушуу уюштурабыз.',
    tr: 'Kırgızistan\'da turlar, MICE etkinlikleri veya resmi heyet ziyaretleri mi planlıyorsunuz? Dakika dakika özel program hazırlar, VIP hizmetleri ve havalimanı VIP salon karşılamasını organize ederiz.',
    en: 'Planning an incoming delegation, diplomatic visit, or corporate MICE event in Kyrgyzstan? We will build a detailed custom itinerary, secure personal transfers, and coordinate absolute luxury VIP meets in Manas or Osh airport.',
    de: 'Planen Sie eine Delegationsreise, einen Partnerbesuch oder MICE-Events in Kirgisistan? Wir erstellen ein detailliertes Programm und organisieren den VIP-Empfang am Flughafen (Manas oder Osch).',
    fr: 'Vous prévoyez la venue d\'une délégation ou des événements MICE au Kirghizistan ? Nous élaborons un calendrier précis, gérons la sécurité et l\'accueil VIP à l\'aéroport.',
    ar: 'هل تخطط لوفد رسمي، زيارة دبلوماسية، أو فعالية للشركات في قيرغيزستان؟ سنضع جدولاً مفصلاً دقيقة بدقيقة، مع تنسيق كامل لمستلزمات الأمان والاستقبال الفاخر بقاعة كبار الشخصيات بمطار مناس أو أوش.'
  },
  btn_contact_coordinator: {
    ru: 'Связаться с координатором',
    ky: 'Координатор менен байланышуу',
    tr: 'Koordinatörle İletişime Geç',
    en: 'Contact Coordinator',
    de: 'Koordinator kontaktieren',
    fr: 'Contacter le Coordinateur',
    ar: 'التواصل مع المنسق المسؤول'
  },

  // Reservation Form
  calc_badge: {
    ru: 'Расчёт стоимости',
    ky: 'Турдун баасын эсептөө',
    tr: 'Fiyat Hesaplama',
    en: 'Quote & Booking Form',
    de: 'Buchungsanfrage',
    fr: 'Formulaire de Réservation',
    ar: 'طلب اقتباس السعر والحجز'
  },
  calc_title: {
    ru: 'Оставить Заявку на Расчет Тура',
    ky: 'Эс алууга экспресс-айлануу эсептөө куралы',
    tr: 'Tur Rezervasyonu için Talep Bırakın',
    en: 'Submit Booking Request / Custom Quote',
    de: 'Individuelle Buchungsanfrage senden',
    fr: 'Demande Rapide de Calcul de Tour',
    ar: 'تقديم طلب حجز واقتباس سعر رحلة'
  },
  calc_desc: {
    ru: 'Заполните простую экспресс-форму, и наши эксперты рассчитают наиболее выгодную поездку, подберут лучшие стыковки рейсов и отправят готовое предложение в WhatsApp.',
    ky: 'Жөнөкөй экспресс-форманы толтуруңуз, биздин адистер эң пайдалуу бааны эсептеп, каттамдарды тандап, даяр сунушту WhatsApp\'ка жөнөтүшөт.',
    tr: 'Basit talep formunu doldurun; uzmanlarımız sizin için en avantajlı seyahati hesaplayıp, en uygun uçuşları bulsun ve hazır teklifi WhatsApp üzerinden göndersin.',
    en: 'Fill in the express quote form below, and our experts will customize the absolute best route, flights, and prices for your dream vacation, sent directly on WhatsApp.',
    de: 'Füllen Sie das Formular aus und unsere Experten berechnen die vorteilhafteste Reise, wählen die besten Flüge und senden Ihnen das Angebot per WhatsApp.',
    fr: 'Remplissez le formulaire rapide : nos experts calculeront le meilleur itinéraire et vous enverront un devis sur mesure directement sur WhatsApp.',
    ar: 'يرجى ملء النموذج السريع أدناه، وسيتولى خبراؤنا مواءمة وتصميم أفضل مسار، مع اختيار أفضل الرحلات والأسعار لإجازة أحلامك، وإرسال العرض إليك على الواتساب مباشرة.'
  },
  dest_antalya: {
    ru: 'Анталья, Турция (Всё Включено)',
    ky: 'Анталия, Турция (Бардыгы кошулган)',
    tr: 'Antalya, Türkiye (Her Şey Dahil)',
    en: 'Antalya, Turkey (All Inclusive)',
    de: 'Antalya, Türkei (All Inclusive)',
    fr: 'Antalya, Turquie (Tout Inclus)',
    ar: 'أنطاليا، تركيا (كل شيء شامل)'
  },
  dest_sharm: {
    ru: 'Шарм-эль-Шейх, Египет (Красное Море)',
    ky: 'Шарм-эль-Шейх, Египет (Кызыл деңиз)',
    tr: 'Şarm El-Şeyh, Mısır (Kızıldeniz)',
    en: 'Sharm el-Sheikh, Egypt (Red Sea)',
    de: 'Scharm El-Scheich, Ägypten (Rotes Meer)',
    fr: 'Charm el-Cheikh, Égypte (Mer Rouge)',
    ar: 'شرم الشيخ، مصر (البحر الأحمر)'
  },
  dest_phuket: {
    ru: 'Пхукет, Таиланд (Тропический Рай)',
    ky: 'Пхукет, Таиланд (Тропикалык бейиш)',
    tr: 'Phuket, Tayland (Tropikal Cennet)',
    en: 'Phuket, Thailand (Tropical Paradise)',
    de: 'Phuket, Thailand (Tropisches Paradies)',
    fr: 'Phuket, Thaïlande (Paradis Tropical)',
    ar: 'بوكيت، تايلاند (الجنة الاستوائية)'
  },
  dest_dubai: {
    ru: 'Дубай, ОАЭ (Оазис Ультрамодерна)',
    ky: 'Дубай, БАЭ (Ультразаманбап оазис)',
    tr: 'Dubai, Birleşik Arap Emirlikleri (Ultra Modern Vaha)',
    en: 'Dubai, UAE (Ultra-modern Oasis)',
    de: 'Dubai, VAE (Ultramoderne Oase)',
    fr: 'Dubaï, EAU (Oasis Ultra-moderne)',
    ar: 'دبي، الإمارات العربية المتحدة (واحة فائقة الحداثة)'
  },
  dest_europe: {
    ru: 'Париж - Рим - Прага, Европа',
    ky: 'Париж - Рим - Прага, Европа',
    tr: 'Paris - Roma - Prag, Avrupa',
    en: 'Paris - Rome - Prague, Europe',
    de: 'Paris - Rom - Prag, Europa',
    fr: 'Paris - Rome - Prague, Europe',
    ar: 'باريس - روما - براغ، أوروبا'
  },
  dest_issyk_kul: {
    ru: 'Иссык-Куль, Кыргызстан',
    ky: 'Ысык-Көл, Кыргызстан',
    tr: 'Issık Göl, Kırgızistan',
    en: 'Issyk-Kul Lake, Kyrgyzstan',
    de: 'Yssykköl-See, Kirgisistan',
    fr: 'Lac Issyk-Koul, Kirghizistan',
    ar: 'بحيرة إيسيك كول، قيرغيزستان'
  },
  dest_son_kul: {
    ru: 'Озеро Сон-Куль, Кыргызстан',
    ky: 'Соң-Көл көлү, Кыргызстан',
    tr: 'Son Göl, Kırgızistan',
    en: 'Son-Kul Lake, Kyrgyzstan',
    de: 'Songköl-See, Kirgisistan',
    fr: 'Lac Son-Koul, Kirghizistan',
    ar: 'بحيرة سون كول، قيرغيزستان'
  },
  dest_ala_archa: {
    ru: 'Природный парк Ала-Арча, Кыргызстан',
    ky: 'Ала-Арча улуттук паркы, Кыргызстан',
    tr: 'Ala Arça Millî Parkı, Kırgızistan',
    en: 'Ala-Archa Nature Park, Kyrgyzstan',
    de: 'Ala-Artscha-Nationalpark, Kirgisistan',
    fr: 'Parc National d\'Ala-Archa, Kirghizistan',
    ar: 'منتزه ألا أرتشا الوطني، قيرغيزستان'
  },
  dest_sary_chelek: {
    ru: 'Заповедник Сары-Челек, Кыргызстан',
    ky: 'Сары-Челек коругу, Кыргызстан',
    tr: 'Sarı Çelek Doğa Rezervi, Kırgızistan',
    en: 'Sary-Chelek Biosphere Reserve, Kyrgyzstan',
    de: 'Sary-Tschelek-Biosphärenreservat, Kirgisistan',
    fr: 'Réserve de Biosphère de Sary-Chelek, Kirghizistan',
    ar: 'محمية ساري تشيليك الطبيعية، قيرغيزستان'
  },
  dest_incoming_package: {
    ru: 'Групповой прием гостей под ключ / Incoming Group Package',
    ky: 'Топтук конокторду тосуп алуу / Топтук инкаминг',
    tr: 'Grup Karşılama Paketi (Incoming)',
    en: 'Turnkey Group Inbound Guest Package',
    de: 'Schlüsselfertiges Gruppen-Inbound-Paket',
    fr: 'Forfait de Réception de Groupe Clé en Main',
    ar: 'باقة استقبال الوفود السياحية المتكاملة'
  },
  dest_other: {
    ru: 'Другое направление (Укажите в примечаниях)',
    ky: 'Башка багыт (Түшүндүрмөдө жазыңыз)',
    tr: 'Diğer Destinasyon (Notlarda belirtin)',
    en: 'Other Destination (Specify in comments)',
    de: 'Anderes Ziel (Bitte in den Kommentaren angeben)',
    fr: 'Autre Destination (Préciser dans les commentaires)',
    ar: 'وجهة أخرى (يرجى التحديد في الملاحظات)'
  },
  select_destination_placeholder: {
    ru: '-- Выберите направление --',
    ky: '-- Багытты тандаңыз --',
    tr: '-- İstediğiniz destinasyonu seçin --',
    en: '-- Select Destination --',
    de: '-- Reiseziel auswählen --',
    fr: '-- Sélectionner la destination --',
    ar: '--اختر وجهة السفر--'
  },
  lbl_your_name: {
    ru: 'Ваше Имя / ФИО',
    ky: 'Сиздин атыңыз / ФИО',
    tr: 'Adınız / Soyadınız',
    en: 'Your Full Name',
    de: 'Ihr Name / Nachname',
    fr: 'Votre Nom Complet',
    ar: 'الاسم الكامل'
  },
  ph_your_name: {
    ru: 'Например: Асан Усенов',
    ky: 'Мисалы: Асан Үсөнөв',
    tr: 'Örneğin: Ahmet Yılmaz',
    en: 'E.g., John Doe',
    de: 'Z.B. Max Mustermann',
    fr: 'Ex: Jean Dupont',
    ar: 'مثال: أسعد علوان'
  },
  lbl_phone_number: {
    ru: 'Номер телефона (WhatsApp)',
    ky: 'Телефон номериңиз (WhatsApp)',
    tr: 'Telefon Numarası (WhatsApp)',
    en: 'Phone Number (WhatsApp)',
    de: 'Telefonnummer (WhatsApp)',
    fr: 'Numéro de Téléphone (WhatsApp)',
    ar: 'رقم الهاتف (الواتساب)'
  },
  ph_phone_number: {
    ru: 'Например: +996 555 12 34 56',
    ky: 'Мисалы: +996 555 12 34 56',
    tr: 'Örneğin: +996 555 12 34 56',
    en: 'E.g., +996 555 12 34 56',
    de: 'Z.B. +996 555 12 34 56',
    fr: 'Ex: +996 555 12 34 56',
    ar: 'مثال: +996 555 12 34 56'
  },
  tele_manager_title: {
    ru: 'Симулятор Tele-Manager',
    ky: 'Tele-Manager Симулятору',
    tr: 'Tele-Yönetici Simülatörü',
    en: 'Tele-Manager Simulator',
    de: 'Tele-Manager-Simulator',
    fr: 'Simulateur Tele-Manager',
    ar: 'محاكي إدارة الاتصالات'
  },
  tele_manager_desc: {
    ru: 'Посмотрите, как уведомление мгновенно поступает на телефон туроператора Kerben Travel при клике!',
    ky: 'Буйрутма берилгенде Kerben Travel операторунун телефонуна билдирүү кантип заматта түшөрүн көрүңүз!',
    tr: 'Gönderdiğiniz talebin Kerben Travel acentesinin telefonuna nasıl anında ulaştığını görün!',
    en: 'See how the push notification instantly reaches Kerben Travel operator\'s dashboard in real-time!',
    de: 'Sehen Sie, wie die Benachrichtigung in Echtzeit auf dem Telefon von Kerben Travel eingeht!',
    fr: 'Regardez comment la notification arrive instantanément sur le téléphone de l\'opérateur de Kerben Travel !',
    ar: 'شاهد كيف يبدو إشعار الدفع الفوري على لوحة تحكم مشغل الرحلات في كيربين ترافيل في الوقت الفعلي!'
  },
  tele_manager_idle: {
    ru: 'Заполните форму слева, чтобы смоделировать активацию связи...',
    ky: 'Активацияны баштоо үчүн сол тараптагы форманы толтуруңуз...',
    tr: 'İletişim simülasyonunu etkinleştirmek için soldaki formu doldurun...',
    en: 'Fill in the form on the left to simulate active CRM transmission...',
    de: 'Füllen Sie das Formular links aus, um die CRM-Übertragung zu simulieren...',
    fr: 'Remplissez le formulaire à gauche pour simuler l\'activation de la liaison...',
    ar: 'يرجى ملء النموذج الموجود على اليسار لمحاكاة تشغيل نقل البيانات النشط...'
  },
  tele_manager_analytics: {
    ru: 'Аналитика Ввода',
    ky: 'Маалыматты талдоо',
    tr: 'Giriş Analitiği',
    en: 'Input Telemetry',
    de: 'Eingabe-Telemetrie',
    fr: 'Télémétrie de Saisie',
    ar: 'تحليل البيانات المدخلة'
  },
  tele_manager_recipient: {
    ru: 'Покупатель:',
    ky: 'Сатып алуучу:',
    tr: 'Müşteri:',
    en: 'Client:',
    de: 'Kunde:',
    fr: 'Client :',
    ar: 'العميل:'
  },
  tele_manager_phone: {
    ru: 'WhatsApp:',
    ky: 'WhatsApp:',
    tr: 'WhatsApp:',
    en: 'WhatsApp:',
    de: 'WhatsApp:',
    fr: 'WhatsApp :',
    ar: 'الواتساب:'
  },
  tele_manager_dest: {
    ru: 'Направление:',
    ky: 'Багыт:',
    tr: 'Destinasyon:',
    en: 'Destination:',
    de: 'Reiseziel:',
    fr: 'Destination :',
    ar: 'الوجهة:'
  },
  tele_manager_new_alert: {
    ru: '🔔 Новая бронь на сайте!',
    ky: '🔔 Сайттан жаңы буйрутма!',
    tr: '🔔 Web sitesinden yeni rezervasyon!',
    en: '🔔 New Booking Received!',
    de: '🔔 Neue Buchung eingegangen!',
    fr: '🔔 Nouvelle Réservation Reçue !',
    ar: '🔔 تم استلام حجز جديد!'
  },
  tele_manager_delivered: {
    ru: '✓ Доставлено через Webhook API',
    ky: '✓ Webhook API аркылуу жеткирилди',
    tr: '✓ Webhook API ile iletildi',
    en: '✓ Delivered via Webhook API',
    de: '✓ Über Webhook-API zugestellt',
    fr: '✓ Livré via Webhook API',
    ar: '✓ تم التسليم بنجاح عبر برمجية الويب'
  },
  tele_manager_reset: {
    ru: 'Сбросить симулятор',
    ky: 'Симуляторду баштапкы абалга келтирүү',
    tr: 'Simülatörü Sıfırla',
    en: 'Reset Simulator',
    de: 'Simulator zurücksetzen',
    fr: 'Réinitialiser le Simulateur',
    ar: 'إعادة تعيين المحاكي'
  },
  more_app_order: {
    ru: 'Оформить еще одну заявку',
    ky: 'Дагы бир буйрутма берүү',
    tr: 'Yeni Bir Talep Gönder',
    en: 'Submit Another Request',
    de: 'Weitere Anfrage senden',
    fr: 'Soumettre une Autre Demande',
    ar: 'تقديم طلب حجز آخر'
  },
  label_tour_select: {
    ru: 'Выберите или введите Направление',
    ky: 'Турду тандаңыз же багытты жазыңыз',
    tr: 'Tur veya İstediğiniz Ülkeyi Seçin',
    en: 'Select or Type Destination',
    de: 'Reiseziel auswählen oder eingeben',
    fr: 'Sélectionnez la Destination',
    ar: 'اختر أو اكتب جهتك المفضلة'
  },
  ph_tour_select: {
    ru: 'Выбрать из туров...',
    ky: 'Турлардан тандоо...',
    tr: 'Mevcut turlardan seçin...',
    en: 'Select from available turs or write custom...',
    de: 'Zielort auswählen...',
    fr: 'Choisir parmi les destinations...',
    ar: 'اختر من الرحلات التراثية أو اكتبها بنفسك...'
  },
  label_guests_count: {
    ru: 'Количество путешественников',
    ky: 'Саякатчылардын саны',
    tr: 'Yolcu Sayısı',
    en: 'Number of Travelers',
    de: 'Anzahl der Reisenden',
    fr: 'Nombre de Voyageurs',
    ar: 'عدد المسافرين'
  },
  pax_unit: {
    ru: 'чел',
    ky: 'адам',
    tr: 'kişi',
    en: 'pax',
    de: 'Pers.',
    fr: 'pers.',
    ar: 'أفراد'
  },
  label_days: {
    ru: 'Примерная длительность (дней)',
    ky: 'Болжолдуу узактыгы (күн)',
    tr: 'Tahmini Süre (Gün)',
    en: 'Estimated Duration (Days)',
    de: 'Ungefähre Dauer (Tage)',
    fr: 'Durée Estimée (Jours)',
    ar: 'مستهدف عدد الأيام للرحلة'
  },
  label_date: {
    ru: 'Желаемая дата вылета',
    ky: 'Пландалган учуу убактысы',
    tr: 'Arzulanan Seyahat Başlangıcı',
    en: 'Preferred Departure Date',
    de: 'Gewünschtes Reisedatum',
    fr: 'Date de Départ Souhaitée',
    ar: 'تاريخ السفر المفضل'
  },
  label_notes: {
    ru: 'Дополнительные пожелания / Комментарии',
    ky: 'Кошумча каалоолор / Комментарийлер',
    tr: 'Ek İstekler ve Yorumlar',
    en: 'Additional Wishes / Comments',
    de: 'Zusätzliche Wünsche / Kommentare',
    fr: 'Demandes Générales / Commentaires',
    ar: 'ملاحظات إضافية / طلبات خاصة'
  },
  ph_notes: {
    ru: 'Например: нужен отель со своим пляжем, детское питание, трансфер для коляски...',
    ky: 'Мисалы: өздүк пляжы бар отель, балдар тамагы, балдар арабасы үчүн трансфер керек...',
    tr: 'Örneğin: Kendi plajı olan otel, çocuk menüsü, bebek arabası ulaştırma servisi...',
    en: 'E.g., Need private beach resort, child assistance, accessible transport...',
    de: 'Z.B. Hotel mit Privatstrand, Kindermahlzeiten, barrierefreier Transfer...',
    fr: 'Ex: Besoin d\'un hôtel avec plage privée, repas enfant, transfert adapté...',
    ar: 'مثال: نحتاج منتجعاً بشاطئ خاص، مأكولات مخصصة للأطفال، سيارة مجهزة ومريحة...'
  },
  btn_send_request: {
    ru: 'Отправить Заявку эксперту',
    ky: 'Заявканы адиске жөнөтүү',
    tr: 'Uzmana Talebimi İlet',
    en: 'Send Application to Expert',
    de: 'Anfrage an Experten senden',
    fr: 'Envoyer à l\'Expert',
    ar: 'إرسال طلب الاستعلام للخبراء'
  },
  btn_sending: {
    ru: 'Отправляем...',
    ky: 'Жөнөтүлүүдө...',
    tr: 'Gönderiliyor...',
    en: 'Sending...',
    de: 'Eingaben senden...',
    fr: 'Envoi...',
    ar: 'جاري الإرسال...'
  },
  success_booking_title: {
    ru: 'Заявка успешно отправлена!',
    ky: 'Заявка ийгиликтүү жөнөтүлдү!',
    tr: 'Talep Başarıyla İletildi!',
    en: 'Booking Application Sent!',
    de: 'Buchungsanfrage erfolgreich gesendet!',
    fr: 'Demande Envoyée avec Succès !',
    ar: 'تم إرسال طلبكم بنجاح!'
  },
  success_booking_desc: {
    ru: 'Наши менеджеры по бронированию уже принялись за подбор вариантов. Мы напишем вам на указанный номер в WhatsApp с готовым расчетом в течение нескольких минут.',
    ky: 'Арзандатууларга жана турлардын ыңгайлуу шарттарына ылайык менеджерлер өз ишин башташты. Бир нече мүнөттүн ичинде WhatsApp номериңизге байланышабыз.',
    tr: 'Tur rezervasyon ekibimiz çalışmaya başladı. Birkaç dakika içinde belirttiğiniz WhatsApp hattı üzerinden size özel hazırlanmış hesaplama ve teklif iletilecektir.',
    en: 'Our professional travel planners are assembling custom routes and pricing for you. You will receive a bespoke PDF proposal on WhatsApp in a few minutes!',
    de: 'Unsere Reiseplaner arbeiten bereits an Ihrem maßgeschneiderten Angebot. Sie erhalten in wenigen Minuten eine Aufstellung per WhatsApp.',
    fr: 'Nos conseillers préparent votre devis. Nous vous enverrons le tarif détaillé sur votre WhatsApp de suite.',
    ar: 'بدأ مسؤولو التخطيط لدينا في جمع وتنسيق أفضل الخيارات لكم. سنرسل إليكم العرض مع الفئات والأسعار على رقم الواتساب الخاص بكم في غضون ثوانٍ المعدودة.'
  },

  // Feedback Testimonials
  feedback_badge: {
    ru: 'Отзывы Клиентов',
    ky: 'Кардарлардын сын-пикирлери',
    tr: 'Müşteri Yorumları',
    en: 'Client Testimonials',
    de: 'Kundenrezensionen',
    fr: 'Avis des Clients',
    ar: 'آراء وتقييمات العملاء'
  },
  feedback_title: {
    ru: 'Что говорят о Kerben Travel',
    ky: 'Kerben Travel жөнүндө пикирлер',
    tr: 'Kerben Travel Hakkında Söylenenler',
    en: 'What Clients Say About Kerben Travel',
    de: 'Was unsere Kunden über uns sagen',
    fr: 'Ce qu\'on dit de Kerben Travel',
    ar: 'ماذا يقول العملاء عن كيربن ترافيل'
  },
  feedback_desc: {
    ru: 'Реальные впечатления наших туристов о качестве полетов, организации отелей и этно-приключений по всему миру.',
    ky: 'Туристтерибиздин учуу сапаты, мейманканалардын уюштурулушу жана дүйнө жүзүндөгү этно-саякаттар боюнча чыныгы ой-пикирлери.',
    tr: 'Gezginlerimizin uçuş kalitesi, otel organizasyonu ve dünya çapındaki etnik maceraları hakkındaki gerçek deneyimleri.',
    en: 'Genuine feedback directly from our travelers on flights comfort, accommodation quality, and ethnical tours support.',
    de: 'Echte Eindrücke unserer Reisenden bezüglich Servicequalität, Hotels und Abenteuern weltweit.',
    fr: 'Découvrez les commentaires de nos voyageurs sur le confort des vols et l\'organisation des circuits.',
    ar: 'تجارب حقيقية لعملائنا الكرام حول جودة الطيران، والخدمات الفندقية، والمغامرات التراثية في جميع أنحاء العالم.'
  },

  // Footer Section
  footer_brand_desc: {
    ru: 'Авиабилеты по всему миру и лучшие туристические путевки из Кыргызстана. Надежность, оперативность и индивидуальное обслуживание каждого туриста.',
    ky: 'Кыргызстандан бүткүл дүйнө боюнча авиабилеттер жана эң сонун туристтик жолдомолор. Ар бир туристке ишенимдүүлүк, тездик жана жекече мамиле.',
    tr: 'Kırgızistan çıkışlı dünya geneline uçak biletleri ve en popüler tatil turları. Güvenilirlik, etkinlik ve her gezgin kişiye özel yaklaşım.',
    en: 'Flight tickets worldwide and absolute best tour packages starting from Kyrgyzstan. Loyalty, efficiency, and customized approach for every single traveler.',
    de: 'Flugtickets weltweit und die besten Pauschalreisen ab Kirgisistan. Zuverlässigkeit, Schnelligkeit und individueller Service für jeden Reisenden.',
    fr: 'Billets d\'avion mondiaux et nos meilleurs séjours touristiques au départ de Kirghizistan. Fiabilité, efficacité et accueil chaleureux.',
    ar: 'تذاكر طيران عالمية وأفضل العروض والبرامج السياحية المنطلقة من قيرغيزستان. الأمان، والسرعة، والخدمة المشخصة لكل عميل.'
  },
  footer_links_quick: {
    ru: 'Навигация',
    ky: 'Шилтемелер',
    tr: 'Hızlı Erişim',
    en: 'Quick Links',
    de: 'Navigation',
    fr: 'Liens Rapides',
    ar: 'روابط هامة'
  },
  footer_contacts: {
    ru: 'Контакты',
    ky: 'Байланыш',
    tr: 'İletişim',
    en: 'Contacts',
    de: 'Kontakt',
    fr: 'Contacts',
    ar: 'اتصل بنا'
  },
  footer_offices: {
    ru: 'Наши Офисы',
    ky: 'Биздин кеңселер',
    tr: 'Ofislerimiz',
    en: 'Our Offices',
    de: 'Unsere Büros',
    fr: 'Nos Bureaux',
    ar: 'مكاتبنا'
  },
  office_bishkek: {
    ru: 'Офис г. Бишкек:',
    ky: 'Бишкек шаарындагы кеңсе:',
    tr: 'Bişkek Ofisi:',
    en: 'Bishkek Office:',
    de: 'Büro Bischkek:',
    fr: 'Bureau de Bichkek :',
    ar: 'مكتب بيشكيك:'
  },
  office_talas: {
    ru: 'Офис г. Талас:',
    ky: 'Талас шаарындагы кеңсе:',
    tr: 'Talas Ofisi:',
    en: 'Talas Office:',
    de: 'Büro Talas:',
    fr: 'Bureau de Talas :',
    ar: 'مكتب طلاس:'
  },
  footer_hours_delivery: {
    ru: 'Офис: 09:00 - 20:00 ежедневно | Онлайн: 24/7',
    ky: 'Кеңсе: 09:00 - 20:00 күн сайын | Онлайн: 24/7',
    tr: 'Ofis: Her gün 09:00 - 20:00 | Çevrimiçi: 24/7',
    en: 'Office: 09:00 - 20:00 Daily | Online: 24/7',
    de: 'Büro: Täglich 09:00 - 20:00 | Online: 24/7',
    fr: 'Bureau : 09h00 - 20h00 Quotidien | En Ligne : 24/7',
    ar: 'المكتب: 09:00 - 20:00 يومياً | متصلون 24/7'
  },
  test_1_name: {
    ru: 'Эльдар Мамытов',
    ky: 'Эльдар Мамытов',
    tr: 'Eldar Mamytov',
    en: 'Eldar Mamytov',
    de: 'Eldar Mamytov',
    fr: 'Eldar Mamytov',
    ar: 'إيلدار ماميتوف'
  },
  test_1_tourName: {
    ru: 'Солнечная Анталья',
    ky: 'Анталия турлору',
    tr: 'Güneşli Antalya',
    en: 'Sunny Antalya',
    de: 'Sonniges Antalya',
    fr: 'Antalya Ensoleillée',
    ar: 'أنطاليا المشمسة'
  },
  test_1_text: {
    ru: 'Огромное спасибо за организацию отдыха! Всё прошло без сучка и задоринки. Визы, трансферы, шикарный отель. За билетами и турами теперь только в Kerben Travel! Оперативность на высшем уровне.',
    ky: 'Эс алууну уюштурганыңыз үчүн чоң рахмат! Баары эң сонун өттү. Виза, трансферлер, сонун отель. Билет жана турлар үчүн эми Кербен Тревелге гана кайрылабыз! Тездүүлүк эң жогорку деңгээлде.',
    tr: 'Tatili organize ettiğiniz için çok teşekkür ederim! Her şey pürüzsüz geçti. Vizeler, transferler, harika bir otel. Bilet ve turlar için artık tek adresimiz Kerben Travel! Hızlı ve kaliteli hizmet.',
    en: 'Many thanks for organizing the vacation! Everything went absolutely flawlessly. Visas, transfers, gorgeous hotel. For flights and tours, now only with Kerben Travel! Top-tier efficiency and customer care.',
    de: 'Vielen Dank für die Organisation des Urlaubs! Alles lief absolut reibungslos. Visa, Transfers, tolles Hotel. Flüge und Touren buchen wir ab jetzt nur noch bei Kerben Travel!',
    fr: 'Merci beaucoup d\'avoir organisé nos vacances ! Tout s\'est déroulé à la perfection. Visas, transferts, hôtel magnifique. Pour nos prochains vols et circuits, ce sera Kerben Travel de suite !',
    ar: 'شكراً جزيلاً لجهودكم في تنظيم إجازتنا! سارت الأمور بأعلى درجة من الترتيب واليُسر. التأشيرات، والانتقالات، والفندق الرائع. لحجز التذاكر والرحلات لن نتعامل إلا مع كيربن ترافيل! سرعة وكفاءة ممتازة.'
  },
  test_2_name: {
    ru: 'Маргарита Смирнова',
    ky: 'Маргарита Смирнова',
    tr: 'Margarita Smirnova',
    en: 'Margarita Smirnova',
    de: 'Margarita Smirnova',
    fr: 'Margarita Smirnova',
    ar: 'مارغاريتا سميرنوفا'
  },
  test_2_tourName: {
    ru: 'Великий Кочевой Опыт',
    ky: 'Улуу Көчмөн Экспедициясы',
    tr: 'Büyük Göçebe Deneyimi',
    en: 'Great Nomad Expedition',
    de: 'Kochende Nomadenexpedition',
    fr: 'La Grande Expédition Nomade',
    ar: 'رحلة الكفاح البدوي العظيم'
  },
  test_2_text: {
    ru: 'Принимали партнерскую делегацию из Германии. Kerben Travel организовал невероятно аутентичную программу! Фольклорное шоу, охота с беркутом, комфортабельный транспорт. Немецкие гости в восторге! Высокопрофессионально.',
    ky: 'Германиядан өнөктөштөрдүн делегациясын тосуп алдык. Кербен Тревел укмуштуудай кооз программа даярдаптыр! Фольклордук шоу, бүркүт салуу, заманбап унаалар. Конокторубуз абдан ыраазы болушту!',
    tr: 'Almanya\'dan gelen ortak delegasyonumuzu ağırladık. Kerben Travel inanılmaz derecede otantik bir program hazırladı! Halk oyunları, kartal avı gösterisi ve harika araçlar. Alman misafirlerimiz çok memnun kaldı!',
    en: 'We hosted a partner delegation from Germany. Kerben Travel organized an incredibly authentic program! Folk show, eagle hunting display, and perfect transport. Our German guests were absolutely thrilled!',
    de: 'Wir haben eine Partnerdelegation aus Deutschland empfangen. Kerben Travel hat ein wunderbar authentisches Programm organisiert! Folklore-Show, Adlerjagd und perfekter Transport.',
    fr: 'Nous avons accueilli une délégation d\'Allemagne. Kerben Travel a organisé un séjour folklorique incroyable ! Spectacle traditionnel, chasse à l\'aigle et excellent transport. Nos invités ont adoré !',
    ar: 'استقبلنا وفداً من الشركاء في ألمانيا. نظمت كيربن ترافيل برنامجاً تراثياً مذهلاً! عروض الفلكلور والخيول، واستكشاف الصيد الجوي، وتوفير حافلات ممتازة. ضيوفنا الألمان كانوا في غاية السعادة والإعجاب!'
  },
  test_3_name: {
    ru: 'Азамат Исаев',
    ky: 'Азамат Исаев',
    tr: 'Azamat Isaev',
    en: 'Azamat Isaev',
    de: 'Azamat Isaev',
    fr: 'Azamat Isaev',
    ar: 'عظمة عيساييف'
  },
  test_3_tourName: {
    ru: 'Кочевники Сон-Куля',
    ky: 'Соң-Көлдүн Көчмөндөрү',
    tr: 'Son Göl Göçebeleri',
    en: 'Son-Kul Nomads',
    de: 'Songköl-Nomaden',
    fr: 'Nomades de Son Koul',
    ar: 'بدو بحيرة سون كول'
  },
  test_3_text: {
    ru: 'Потрясающие выходные на Сон-Куле! Лошади, юрты, чистейшее горное небо. Организаторы предусмотрели тёплые вещи и обогрев в юртах, кормили безумно вкусно. Будем заказывать новые туры внутри страны!',
    ky: 'Соң-Көлдөгү унутулгус дем алыш күндөр! Аттар, боз үйлөр, туптунук тоо асманы. Уюштуруучулар жылуу кийимдерди, боз үйдү жылытууну даярдап, тамакты абдан даамдуу беришти.',
    tr: 'Son Göl\'de harika bir hafta sonu! Atlar, yurt çadırları, tertemiz gökyüzü. Organizatörler çadırlarda soba ve ısınmayı önceden düşünmüştü ve yemekler muhteşem lezzetliydi.',
    en: 'Stunning weekend at Son-Kul Lake! Horses, yurts, crystal-clear mountain skies. The team thoughtfully arranged firewood and heating in yurts; the local traditional food was exceptionally delicious!',
    de: 'Atemberaubendes Wochenende am Songköl-See! Pferde, Jurten, kristallklarer Berghimmel. Das Team hat für Wärme in den Jurten gesorgt und das Essen war extrem lecker.',
    fr: 'Superbe week-end au lac Son Koul ! Chevaux, yourtes traditionnelles, ciel pur. Les organisateurs ont prévu le chauffage dans les yourtes et la nourriture locale était un régal.',
    ar: 'عطلة نهاية أسبوع رائعة للغاية في بحيرة سون كول! ركوب الخيل، النوم في الخيام الجلدية، وسحر السماء الجبلية الصافية، واهتمت الشركة بكافة تفاصيل التدفئة والملابس، ووجبات العشاء لذيذة للغاية.'
  },
  footer_all_rights: {
    ru: 'Все права защищены.',
    ky: 'Бардык укуктар корголгон.',
    tr: 'Tüm hakları saklıdır.',
    en: 'All rights reserved.',
    de: 'Alle Rechte vorbehalten.',
    fr: 'Tous droits réservés.',
    ar: 'جميع الحقوق محفوظة.'
  }
};

export const toursTranslations: Record<string, Record<Language, {
  title: string;
  destination: string;
  description: string;
  highlights: string[];
  tags: string[];
}>> = {
  'turkey-antalya': {
    ru: {
      title: 'Солнечная Анталья — Всё Включено',
      destination: 'Анталья, Турция',
      description: 'Великолепный пляжный отдых на Средиземноморском побережье Турции. Исторические экскурсии, чистейшие лазурные бухты, аквапарки и знаменитый премиальный сервис All Inclusive.',
      highlights: ['Отели 5* на первой линии', 'Питание Ultra All Inclusive', 'Бесплатные трансферы', 'Обзорная экскурсия по Старому городу (Калеичи)'],
      tags: ['Пляж', 'Всё включено', 'Семейный']
    },
    ky: {
      title: 'Күнөстүү Анталья — Баары Ичинде',
      destination: 'Анталья, Турция',
      description: 'Түркиянын Жер ортолук деңиз жээгиндеги сонун пляждык эс алуу. Тарыхый экскурсиялар, тунук көгүлтүр булуңдар, аквапарктар жана атактуу All Inclusive заманбап сервиси.',
      highlights: ['Биринчи линиядагы 5* мейманканалар', 'Ultra All Inclusive тамактануу', 'Акысыз трансферлер', 'Калеичи эски шаары боюнча экскурсия'],
      tags: ['Пляж', 'Баары ичинде', 'Үй-бүлөлүк']
    },
    tr: {
      title: 'Güneşli Antalya — Her Şey Dahil',
      destination: 'Antalya, Türkiye',
      description: 'Türkiye\'nin Akdeniz kıyısında muhteşem bir plaj tatili. Tarih turları, tertemiz turkuaz koylar, su parkları ve ünlü All Inclusive lüks servisi.',
      highlights: ['Denize sıfır 5 yıldızlı oteller', 'Ultra All Inclusive Açık Büfe Yemek', 'Ücretsiz Çift Yön Transferler', 'Kaleiçi Eski Şehir Turları'],
      tags: ['Deniz', 'Her Şey Dahil', 'Aile Tatili']
    },
    en: {
      title: 'Sunny Antalya — Ultra All Inclusive',
      destination: 'Antalya, Turkey',
      description: 'Gorgeous beach getaway on the warm Mediterranean coast of Turkey. Ancient tours, crystalline lagoons, aqua parks, and famous Ultra All Inclusive luxury quality service.',
      highlights: ['5* shoreline beachfront hotels', 'Ultra All Inclusive infinite meals', 'Airport executive transfers included', 'Old Town (Kaleiçi) historical guide tour'],
      tags: ['Beach', 'All Inclusive', 'Family']
    },
    de: {
      title: 'Sonniges Antalya — All Inclusive',
      destination: 'Antalya, Türkei',
      description: 'Traumhafter Strandurlaub an der türkischen Riviera. Historische Ausflüge, kristallklare Buchten, spektakuläre Aquaparks und erstklassiger All-inclusive-Service.',
      highlights: ['5-Sterne-Hotels in erster Strandlinie', 'Ultra All-inclusive-Verpflegung', 'Kostenlose Flughafentransfers', 'Stadtführung durch die Altstadt (Kaleiçi)'],
      tags: ['Strand', 'All Inclusive', 'Familie']
    },
    fr: {
      title: 'Antalya Ensoleillée — Tout Inclus',
      destination: 'Antalya, Turquie',
      description: 'Vacances balnéaires magiques sur la côte méditerranéenne turque. Excursions historiques, criques azur, parcs aquatiques et service All Inclusive réputé.',
      highlights: ['Hôtels 5* de première ligne', 'Pension Ultra All Inclusive', 'Transferts gratuits', 'Visite guidée de la vieille ville (Kaleiçi)'],
      tags: ['Plage', 'Tout Inclus', 'Famille']
    },
    ar: {
      title: 'أنطاليا المشمسة — نظام كل شيء مشمول',
      destination: 'أنطاليا، تركيا',
      description: 'عطلة شاطئية رائعة على ساحل البحر الأبيض المتوسط في تركيا. جولات تاريخية، خلجان لازوردية نقية، مدن مائية وخدمة خمس نجوم راقية تفوق توقعاتكم.',
      highlights: ['فنادق 5 نجوم على الخيط الأول للشاطئ', 'وجبات طعام وخدمات فائقة الجودة شاملة بالكامل', 'توصيل مجاني من وإلى المطار بسيارات حديثة', 'جولة سياحية مرشدة في المدينة القديمة (كالتشي)'],
      tags: ['شواطئ', 'شامل كلياً', 'عائلي']
    }
  },
  'egypt-sharm': {
    ru: {
      title: 'Тайны Красного Моря',
      destination: 'Шарм-эль-Шейх, Египет',
      description: 'Жемчужина Синайского полуострова. Уникальные коралловые рифы, теплое море круглый год, поездки к величественным пирамидам Гизы и незабываемые сафари в пустыне.',
      highlights: ['Золотые пляжи Синая', 'Экскурсия к Пирамидам и Сфинксу', 'Профессиональный дайвинг на рифе Рас-Мохаммед', 'Катание на квадроциклах по дюнам'],
      tags: ['Дайвинг', 'Пляж', 'Достопримечательности']
    },
    ky: {
      title: 'Кызыл Деңиздин Сырлары',
      destination: 'Шарм-эль-Шейх, Египет',
      description: 'Синай жарым аралынын седеби. Кайталангыс коралдуу рифтер, жыл бою жылуу деңиз, Гизанын улуу пирамидаларына саякат жана чөлдө унутулгус сафари.',
      highlights: ['Синайдын алтын кумдуу пляждары', 'Пирамидаларга жана Сфинкске экскурсия', 'Рас-Мохаммедд рифинде профессионалдуу дайвинг', 'Дөбөлөрдө квадроцикл тебүү'],
      tags: ['Дайвинг', 'Пляж', 'Көрүнүктүү жерлер']
    },
    tr: {
      title: 'Kızıldeniz\'in Gizemleri',
      destination: 'Şarm El-Şeyh, Mısır',
      description: 'Sina Yarımadası\'nın incisi. Benzersiz mercan resifleri, yıl boyu sıcak deniz, görkemli Gize Piramitleri gezisi ve unutulmaz çöl safarileri.',
      highlights: ['Sina\'nın altın kumsalları', 'Gize Piramitleri ve Sfenks turu', 'Ras Muhammed milli parkında dalış deneyimi', 'Çölde atv safari'],
      tags: ['Dalış', 'Deniz', 'Tarihi Yerler']
    },
    en: {
      title: 'Secrets of the Red Sea',
      destination: 'Sharm El-Sheikh, Egypt',
      description: 'Sinai Peninsula gem. Unique coral reefs, warm sea water all year round, legendary Giza Pyramid history tours, and desert off-road ATV safari trips.',
      highlights: ['Sinai premium gold beaches', 'Direct trip to Great Pyramids and Sphinx', 'Professional snorkeling at Ras Muhammad reserve', 'Desert dunes 4x4 or ATV quad adventure'],
      tags: ['Diving', 'Beach', 'Sightseeing']
    },
    de: {
      title: 'Geheimnisse des Roten Meeres',
      destination: 'Sharm El-Sheikh, Ägypten',
      description: 'Das Juwel der Sinai-Halbinsel. Atemberaubende Korallenriffe, ganzjährig warmes Wasser, Ausflüge zu den monumentalen Pyramiden von Giseh und Wüstensafaris.',
      highlights: ['Goldene Sandstrände des Sinai', 'Ausflug zu den Pyramiden und der Sphinx', 'Professionelles Tauchen im Ras-Mohammed-Riff', 'Quad-Safarifahrt durch die Dünen'],
      tags: ['Tauchen', 'Strand', 'Sehenswürdigkeiten']
    },
    fr: {
      title: 'Mystères de la Mer Rouge',
      destination: 'Charm el-Cheikh, Égypte',
      description: 'Bijou de la péninsule du Sinaï. Récifs coralliens magiques, eau chaude toute l\'année, excursions aux Pyramides de Gizeh et safaris désertiques mémorables.',
      highlights: ['Sables dorés du Sinaï', 'Excursion aux Pyramides et au Sphinx', 'Plongée guidée au parc de Ras Mohammed', 'Randonnée en quad dans les dunes de sable'],
      tags: ['Plongée', 'Plage', 'Histoire']
    },
    ar: {
      title: 'أسرار البحر الأحمر الساحر',
      destination: 'شرم الشيخ، مصر',
      description: 'لؤلؤة شبه جزيرة سيناء. شعاب مرجانية خلابة فريدة، مياه بحر دافئة طوال العام، رحلات غنية إلى أهرامات الجيزة الخالدة وسفاري شيقة في قلب الصحراء.',
      highlights: ['شواطئ سيناء الذهبية الهادئة', 'جولة خاصة لزيارة الأهرامات وأبو الهول كبار الشخصيات', 'إرشاد احترافي للغطس والغوص بمحمية رأس محمد الطبيعية', 'قيادة سيارات الدفع الرباعي والدراجات النارية في تلال الرمال'],
      tags: ['غوص', 'شواطئ', 'معالم أثرية']
    }
  },
  'thailand-phuket': {
    ru: {
      title: 'Тропический Рай Пхукета',
      destination: 'Пхукет, Таиланд',
      description: 'Уголок абсолютного уединения и экзотики. Белоснежные пески Пляжа Патонг и Карон, плавучие рынки, древние буддийские храмы и невероятно вкусная тайская кухня.',
      highlights: ['Посещение островов Пхи-Пхи', 'Экскурсия в храм Большого Будды', 'Традиционный тайский спа', 'Шоу трансвеститов и тайский бокс'],
      tags: ['Экзотика', 'Острова', 'Культура']
    },
    ky: {
      title: 'Пхукеттин Тропикалык Бейиши',
      destination: 'Пхукет, Таиланд',
      description: 'Абсолюттук бейпилдиктин жана экзотиканын бурчу. Патонг жана Карон Бичтин аппак кумдары, калкып жүрүүчү базарлар, байыркы буддисттердин храмдары жана даамдуу тай тамактары.',
      highlights: ['Пхи-Пхи аралдарына баруу', 'Чоң Будда храмына экскурсия', 'Салттуу тай спасы', 'Тай боксу жана шоу программалар'],
      tags: ['Экзотика', 'Аралдар', 'Маданият']
    },
    tr: {
      title: 'Phuket Tropikal Cenneti',
      destination: 'Phuket, Tayland',
      description: 'Mutlak huzur ve egzotizmin köşesi. Bembeyaz kumlu Patong ve Karon plajları, yüzen pazarlar, tarihi Budist tapınakları ve inanılmaz derecede lezzetli Tay yemekleri.',
      highlights: ['Phi Phi Adalarına lüks tekne gezisi', 'Büyük Buddha Tapınağı turu', 'Geleneksel profesyonel Tay masajı ve spa', 'Tay boks ve kültürel şovlar'],
      tags: ['Egzotik', 'Adalar', 'Kültür']
    },
    en: {
      title: 'Phuket Tropical Paradise',
      destination: 'Phuket, Thailand',
      description: 'A cozy corner of tropical serenity. Snow-white sands of Patong and Karon, floating markets, ancient Buddhist temples, and legendary gourmet Thai cuisine.',
      highlights: ['Breathtaking Phi Phi islands yacht cruise', 'Big Buddha temple cultural tour', 'Traditional rejuvenating Thai Spa sessions', 'Spectacular Muay Thai or cultural show entry'],
      tags: ['Exotic', 'Islands', 'Culture']
    },
    de: {
      title: 'Tropisches Paradies Phuket',
      destination: 'Phuket, Thailand',
      description: 'Ein Winkel absoluter Abgeschiedenheit und Exotik. Die weißen Sandstrände von Patong und Karon, schwimmende Märkte, leckere thailändische Küche.',
      highlights: ['Besuch der atemberaubenden Phi-Phi-Inseln', 'Großer-Buddha-Tempel Besichtigung', 'Traditionelles thailändisches Spa', 'Thai-Boxen und weltklasse Shows'],
      tags: ['Exotik', 'Inseln', 'Kultur']
    },
    fr: {
      title: 'Paradis Tropical de Phuket',
      destination: 'Phuket, Thaïlande',
      description: 'Coin intime de sérénité exotique. Sables blancs de Karon et Patong, marchés flottants, temples bouddhistes anciens et incroyable street-food thaïlandaise.',
      highlights: ['Excursion en croisière vers les îles Phi Phi', 'Visite du temple majestueux du Grand Bouddha', 'Séance de massage traditionnel thaïlandais', 'Spectacles culturels ou combat de Muay Thaï'],
      tags: ['Exotique', 'Îles', 'Culture']
    },
    ar: {
      title: 'جنة بوكيت الاستوائية الساحرة',
      destination: 'بوكيت، تايلاند',
      description: 'ملاذ رائع من الطبيعة الاستوائية والهدوء والجمال. شواطئ باتونغ وكارون ذات الرمال البيضاء الناعمة، والأسواق العائمة، ومعابد البوذية الأثرية كجزء من المأكولات التايلاندية الرائعة.',
      highlights: ['رحلة بحرية فاخرة باليخت إلى جزر في في المذهلة', 'زيارة لمعبد تمثال بوذا الكبير الأثري', 'جلسة مساج وعلاج طبيعي استرخائي تايلاندي تقليدي', 'حضور عروض الملاكمة التايلاندية موياي تاي الحماسية'],
      tags: ['استوائي', 'جزر', 'ثقافة']
    }
  },
  'dubai-luxury': {
    ru: {
      title: 'Оазис Ультрамодерна',
      destination: 'Дубай, ОАЭ',
      description: 'Погрузитесь в роскошь будущего. Футуристические небоскребы, искусственные острова, гигантские торговые центры и захватывающий подъем на высочайшую башню в мире — Бурдж-Халифа.',
      highlights: ['Билеты на вершину Бурдж-Халифа', 'Экстремальное джип-сафари в пустыне с барбекю', 'Шоу танцующих фонтанов', 'Посещение Dubai Mall'],
      tags: ['Люкс', 'Шопинг', 'Развлечения']
    },
    ky: {
      title: 'Ультрамодерн Оазиси',
      destination: 'Дубай, ОАЭ',
      description: 'Келечектин люкс дүйнөсүнө аралашыңыз. Футуристтик асман тиреген имараттар, жасалма аралдар, гигант соода борборлору жана дүйнөнүн эң бийик мунарасы — Бурдж-Халифага өйдө чыгуу.',
      highlights: ['Бурдж-Халифанын чокусуна билеттер', 'Экстремалдуу джип-сафари чөлдө барбекю менен', 'Бийлеген фонтандардын шоусу', 'Dubai Mall соода борборуна саякат'],
      tags: ['Люкс', 'Шопинг', 'Көңүл ачуу']
    },
    tr: {
      title: 'Ultramodern Vaha',
      destination: 'Dubai, Birleşik Arap Emirlikleri',
      description: 'Geleceğin lüksüne dalın. Fütüristik gökdelenler, yapay adalar, devasa alışveriş merkezleri ve dünyanın en yüksek binası Burj Khalifa\'ya nefes kesen yürüyüş veya asansör çıkışı.',
      highlights: ['Burj Khalifa zirve biletleri', 'Çölde barbekülü heyecan verici çöl jipleri safari turu', 'Dans eden efsanevi su çeşmeleri gösterisi', 'Dubai Mall alışveriş deneyimleri'],
      tags: ['Lüks', 'Alışveriş', 'Eğlence']
    },
    en: {
      title: 'Ultramodern Oasis of Luxury',
      destination: 'Dubai, UAE',
      description: 'Dive straight into the luxury of the future. Futuristic skyscrapers, artificial island bays, giant shopping malls, and breathtaking views from the world tallest tower — Burj Khalifa.',
      highlights: ['Fast-track tickets to Burj Khalifa observatory floor', '4x4 desert dunes Jeep Safari with premium BBQ dinner', 'Spectacular Dancing Fountains lake views', 'Ultimate shopping in the famous Dubai Mall'],
      tags: ['Luxury', 'Shopping', 'Entertainment']
    },
    de: {
      title: 'Ultramoderne Oase des Luxus',
      destination: 'Dubai, VAE',
      description: 'Tauchen Sie ein in den Luxus der Zukunft. Futuristische Wolkenkratzer, künstliche Inseln, riesige Einkaufszentren und die Aussicht vom höchsten Gebäude Burj Khalifa.',
      highlights: ['Tickets für die Aussichtsplattform des Burj Khalifa', 'Extremes Wüstensafari-Abenteuer mit Grillabend', 'Spektakuläre Show der tanzenden Fontänen', 'Shopping in der gigantischen Dubai Mall'],
      tags: ['Luxus', 'Shopping', 'Unterhaltung']
    },
    fr: {
      title: 'Oasis d\'Ultra-Modernité',
      destination: 'Dubaï, Émirats Arabes Unis',
      description: 'Plongez dans le luxe du futur. Gratte-ciel futuristes, îles artificielles célèbres, centres commerciaux géants et montée au sommet du célèbre Burj Khalifa.',
      highlights: ['Accès privilégié au sommet du Burj Khalifa', 'Safari en 4x4 dans le désert avec dîner barbecue', 'Spectacle magique des fontaines dansantes', 'Visite shopping au Dubai Mall'],
      tags: ['Luxe', 'Shopping', 'Divertissement']
    },
    ar: {
      title: 'واحة الرفاهية والابتكار المستقبلية',
      destination: 'دبي، الإمارات العربية المتحدة',
      description: 'انغمس في عالم الفخامة والمستقبل المعماري الخارق. ناطحات سحاب مذهلة، جزر اصطناعية فريدة كالنخلة، مراكز تسوق عملاقة بجانب إطلالة من برج خليفة الأطول في العالم.',
      highlights: ['تذاكر الدخول السريع لمرصد الطوابق العليا لبرج خليفة', 'مغامرة سفاري بسيارات الدفع الرباعي 4x4 متبوعة بعشاء مشاوي فاخر', 'مشاهدة عرض النافورات الموسيقية الراقصة بنقاط حصرية', 'جولة تسوق متكاملة في المول الأشهر دبي مول'],
      tags: ['فخامة', 'تسوق', 'ترفيه']
    }
  },
  'europe-classic': {
    ru: {
      title: 'Классическая Европа — Кольцо Истории',
      destination: 'Париж - Рим - Прага, Европа',
      description: 'Грандиозный гранд-тур по самым романтичным и культурно богатым столицам Европы. Уютные кафе Парижа, великое наследие Рима и готическая сказка Праги.',
      highlights: ['Экскурсия в Лувр и к Эйфелевой башне', 'Прогулка по Колизею и Ватикану', 'Вечерний круиз по Сене', 'Пешеходная прогулка по Карлову мосту'],
      tags: ['Культура', 'Города', 'Архитектура']
    },
    ky: {
      title: 'Классикалык Европа — Тарых Шакеги',
      destination: 'Париж - Рим - Прага, Европа',
      description: 'Европанын эң романтикалуу жана маданий бай борборлоруна гранд-тур. Париждин жайлуу кафелери, Римдин улуу мурасы жана Праганын готикалык жомогу.',
      highlights: ['Лувр музейине жана Эйфель мунарасына экскурсия', 'Колизей жана Ватикан боюнча сейилдөө', 'Сена дарыясында кечки круиз', 'Карлов көпүрөсү боюнча жөө басуу'],
      tags: ['Маданият', 'Шаарлар', 'Архитектура']
    },
    tr: {
      title: 'Klasik Avrupa — Tarih Halkası',
      destination: 'Paris - Roma - Prag, Avrupa',
      description: 'Avrupa\'nın en romantik ve kültürel açıdan zengin başkentlerinde unutulmaz bir büyük tur. Paris\'in romantik kafeleri, Roma\'nın muhteşem mirası ve Prag\'ın gotik masalı.',
      highlights: ['Louvre Müzesi ve Eyfel Kulesi gezisi', 'Kolezyum ve Vatikan turları', 'Seine Nehri üzerinde akşam tekne turu', 'Tarihi Karl Köprüsü\'nde yürüyüşler'],
      tags: ['Kültür', 'Şehirler', 'Mimari']
    },
    en: {
      title: 'Classical Europe — Ring of History',
      destination: 'Paris - Rome - Prague, Europe',
      description: 'Breathtaking grand-tour across the most romantic and culturally rich capitals of Europe. Beautiful cafes of Paris, eternal legacy of Rome, and gothic fairy-tales of Prague.',
      highlights: ['Direct entry to Louvre museum & Eiffel Tower', 'Guided historical walk in Colosseum & Vatican City', 'Charming evening cruise on the Seine river', 'Pedestrian historical walking tour on Charles Bridge'],
      tags: ['Culture', 'Cities', 'Architecture']
    },
    de: {
      title: 'Klassisches Europa — Ring der Geschichte',
      destination: 'Paris - Rom - Prag, Europa',
      description: 'Eine grandiose Rundreise durch die romantischsten und geschichtsträchtigsten Hauptstädte Europas. Die Cafés von Paris, das antike Erbe Roms und das gotische Prag.',
      highlights: ['Führung im Louvre und zum Eiffelturm', 'Rundgang durch das Kolosseum und den Vatikan', 'Abendliche Schiffsfahrt auf der Seine', 'Romantischer Spaziergang über die Karlsbrücke'],
      tags: ['Kultur', 'Städte', 'Architektur']
    },
    fr: {
      title: 'L\'Europe Classique — Anneau de l\'Histoire',
      destination: 'Paris - Rome - Prague, Europe',
      description: 'Grand tour mémorable des capitales les plus romantiques et riches en histoire de l\'Europe. Les cafés de Paris, l\'héritage de Rome et les contes gothiques de Prague.',
      highlights: ['Entrée coupe-file au Louvre et à la Tour Eiffel', 'Visite historique du Colisée et du Vatican', 'Croisière romantique en soirée sur la Seine', 'Flânerie piétonne guidée sur le pont Charles'],
      tags: ['Culture', 'Villes', 'Architecture']
    },
    ar: {
      title: 'أوروبا الكلاسيكية العريقة — حلقة التاريخ',
      destination: 'باريس - روما - براغ، أوروبا',
      description: 'الجولة الكبرى الشاملة في أكثر العواصم الأوروبية رومانسية وغنى بالثقافة والتراث. مقاهي باريس الخلابة، والإرث التاريخي العظيم لروما، وحكايات العصور الوسطى القوطية في براغ.',
      highlights: ['دخول ميسر لمتحف اللوفر والصعود لبرج إيفل', 'جولة سياحية مرشدة في مسرح الكولوسيوم ومتحف الفاتيكان', 'رحلة بحرية مسائية ساحرة في نهر السين بباريس', 'جولة مشي معمارية فوق جسر كارل التاريخي الشهير في براغ'],
      tags: ['ثقافة', 'مدن', 'معمار']
    }
  },

  // Domestic Tours
  'kg-issyk-kul': {
    ru: {
      title: 'Жемчужина Азии: Озеро Иссык-Куль',
      destination: 'Иссык-Куль, Кыргызстан',
      description: 'Легендарное высокогорное озеро Иссык-Куль — второе по величине соленое озеро мира. Благоприятный микроклимат, золотые песчаные пляжи и целебные термальные источники.',
      highlights: ['Проживание в лучших пансионатах Чолпон-Аты', 'Экскурсия в ущелье Григорьевское и Семеновское', 'Прогулка на теплоходе по озеру', 'Посещение культурного центра Рух Ордо'],
      tags: ['Озеро', 'Горы', 'Оздоровление']
    },
    ky: {
      title: 'Азиянын Бермети: Ысык-Көл',
      destination: 'Ысык-Көл, Кыргызстан',
      description: 'Легендарлуу бийик тоолуу Ысык-Көл — дүйнөдөгү эң чоң туздуу көлдөрдүн экинчиси. Жагымдуу микроклимат, алтын кумдуу пляждар жана дарылык касиеттүү ысык суулар.',
      highlights: ['Чолпон-Атанын кооз пансионаттарында жашоо', 'Григорьев жана Семенов капчыгайларына экскурсия', 'Көлдө кеме куралында сейилдөө', 'Рух Ордо маданий борборуна баруу'],
      tags: ['Көл', 'Тоолор', 'Ден-соолук']
    },
    tr: {
      title: 'Asya\'nın İncisi: Issık Göl',
      destination: 'Issık Göl, Kırgızistan',
      description: 'Efsanevi yüksek rakımlı Issık Göl, dünyanın ikinci en büyük tuzlu gölüdür. Harika mikroklima, altın sapsarı kumlar ve şifalı kaplıcalar.',
      highlights: ['Çolpon-Ata\'nın en iyi tatil yerlerinde konaklama', 'Grigoryevskoye ve Semyonovskoye kanyonlarına geziler', 'Göl üzerinde tekne turları', 'Ruh Ordo Kültür Merkezi ziyareti'],
      tags: ['Göl', 'Dağlar', 'Sağlık']
    },
    en: {
      title: 'Pearl of Asia: Lake Issyk-Kul',
      destination: 'Issyk-Kul, Kyrgyzstan',
      description: 'Legendary alpine Lake Issyk-Kul — the second largest saline lake in the world. Therapeutic microclimate, pristine golden sandy beaches, and thermal mineral hot springs.',
      highlights: ['Premium stay in best lake resorts of Cholpon-Ata', 'Guided day trip to Grigoryevka & Semenovka gorges', 'Scenic thermal boat cruise on the infinite lake', 'Excursion to Ruh Ordo cultural open-air complex'],
      tags: ['Lake', 'Mountains', 'Wellness']
    },
    de: {
      title: 'Perle Asiens: See Issyk-Kul',
      destination: 'Issyk-Kul, Kirgisistan',
      description: 'Der legendäre Hochgebirgssee Issyk-Kul — der zweitgrößte Salzsee der Welt. Perfektes Mikroklima, goldene Sandstrände und heilende Thermalquellen.',
      highlights: ['Unterkunft in den besten Ferienanlagen in Cholpon-Ata', 'Ausflug in die Grigoryevka- und Semenovka-Schlucht', 'Bootsfahrt auf dem riesigen Bergsee', 'Besuch des Kulturzentrums Ruh Ordo'],
      tags: ['See', 'Berge', 'Erholung']
    },
    fr: {
      title: 'Perle de l\'Asie : Lac Issyk-Koul',
      destination: 'Issyk-Koul, Kirghizistan',
      description: 'L\'un des plus grands lacs alpins du monde. Climat propice au ressourcement, sable doré et sources chaudes minérales curatives ancestrales.',
      highlights: ['Séjour de qualité dans les meilleurs resorts de Cholpon-Ata', 'Excursion dans les magnifiques gorges de Grigorievka', 'Croisière panoramique en bateau sur le lac salé', 'Visite du centre oecuménique Ruh Ordo'],
      tags: ['Lac', 'Montagnes', 'Détente']
    },
    ar: {
      title: 'لؤلؤة آسيا: بحيرة إيسيك كول الرائعة',
      destination: 'إيسيك كول، قيرغيزستان',
      description: 'بحيرة إيسيك كول الجبلية الأسطورية - وهي ثاني أكبر بحيرة مالحة في العالم بأسره. تتميز بمناخ محلي فريد، وشواطئ ذات رمال ذهبية ناعمة وينابيع مياه معدنية حارة شفائية.',
      highlights: ['الإقامة في أرقى المنتجعات المطلة على البحيرة في تشولبون آتا', 'رحلة ليوم كامل إلى واديي غريغوريفكا وسيمينوفكا الجبليين', 'رحلة بحرية وتجربة ممتعة بالقارب الفاخر في البحيرة', 'زيارة للمركز الثقافي والمتحف المفتوح "روخ أوردو"'],
      tags: ['بحيرة', 'جبال', 'استجمام']
    }
  },
  'kg-son-kul': {
    ru: {
      title: 'Кочевники Сон-Куля',
      destination: 'Озеро Сон-Куль, Кыргызстан',
      description: 'Путешествие на высоту 3016 метров. Испытайте первозданный быт кочевников, переночуйте в традиционной кыргызской юрте у кристальной глади высокогорного озера Сон-Куль.',
      highlights: ['Проживание в аутентичном юрточном лагере', 'Конные прогулки по джайлоо', 'Дегустация национальных блюд и кумыса', 'Участие в мастер-классе по сборке юрты'],
      tags: ['Юрты', 'Природа', 'Этно']
    },
    ky: {
      title: 'Соң-Көлдүн Көчмөндөрү',
      destination: 'Соң-Көл көлү, Кыргызстан',
      description: '3016 метр бийиктикке саякат. Көчмөндөрдүн куралсыз турмушун сезип көрүңүз, бийик тоолуу Соң-Көлдүн жанындагы салттуу боз үйлөрдө түнөңүз.',
      highlights: ['Аутентикалык боз үй лагеринде жашоо', 'Жайлоодо ат минүү', 'Улуттук тамак-аштардан жана кымыздан даам татуу', 'Боз үйдү чогултуу боюнча мастер-класска катышуу'],
      tags: ['Боз үйлөр', 'Жаратылыш', 'Этно']
    },
    tr: {
      title: 'Son Göl Göçebeleri',
      destination: 'Son Göl, Kırgızistan',
      description: '3016 metre yüksekliğe yolculuk. Göçebelerin antik yaşamını ilk elden deneyimleyin, Son Göl kıyısındaki geleneksel Kırgız yurtlarında geceleyin.',
      highlights: ['Otantik yurt kampında konaklama', 'Yayla yaylarında at binme turları', 'Yerel şeflerden Kımız ve kımız tadımı', 'Geleneksel Kırgız yurt kurulumu workshop katılımı'],
      tags: ['Yurtlar', 'Doğa', 'Etnik']
    },
    en: {
      title: 'Nomads of Son-Kul',
      destination: 'Lake Son-Kul, Kyrgyzstan',
      description: 'Journey to the altitude of 3016 meters. Live like ancient nomads, spend nights in handmade traditional Kyrgyz felt yurts near the crystal shoreline of high altitude Lake Son-Kul.',
      highlights: ['Prisinte stay in authentic warm yurt camps', 'Horseback premium trekking across jailoo grasslands', 'Tasting native organic food and fermented mare milk (Kymyz)', 'Masterclass in building yurt from wooden structure'],
      tags: ['Yurts', 'Nature', 'Ethno']
    },
    de: {
      title: 'Nomaden von Son-Kul',
      destination: 'See Son-Kul, Kirgisistan',
      description: 'Eine Reise auf 3016 Meter Höhe. Erleben Sie das traditionelle Nomadenleben und übernachten Sie in einer echten kirgisischen Jurte am Ufer des Bergsees Son-Kul.',
      highlights: ['Übernachtung in einem authentischen Jurten-Camp', 'Reiten auf den Hochweiden (Dschailoo)', 'Verkostung traditioneller Speisen und Kumys', 'Jurten-Aufbau-Workshop'],
      tags: ['Jurten', 'Natur', 'Ethno']
    },
    fr: {
      title: 'Nomades de Son-Koul',
      destination: 'Lac Son-Koul, Kirghizistan',
      description: 'Aventure à 3016 mètres d\'altitude. Vivez le quotidien authentique des bergers et passez la nuit sous une yourte au bord du miroir d\'eau de Son-Koul.',
      highlights: ['Hébergement traditionnel dans un authentique camp de yourtes', 'Randonnées équestres guidées dans les alpages de Jailoo', 'Dégustation de plats nationaux et de Koumys frais', 'Atelier pratique de montage d\'une yourte kirghize'],
      tags: ['Yourtes', 'Nature', 'Ethno']
    },
    ar: {
      title: 'حياة بدو السون كول الجبلية والأصالة',
      destination: 'بحيرة سون كول، قيرغيزستان',
      description: 'رحلة استثنائية على ارتفاع 3016 متراً فوق سطح البحر. عيشوا بساطة البدو الأوائل واقضوا ليلة دافئة في خيمة اليورت القرغيزية الصوفية بجوار ضفاف بحيرة سون كول المتلألئة.',
      highlights: ['الإقامة في مخيم خيام اليورت الأصلي الدافئ والمنسق', 'جولة وتجربة ركوب الخيل العريقة في مروج جيلو الجبلية الخصبة', 'تذوق الأطعمة العضوية الفلكلورية واللبن المخمر العضوي القيرغيزي (القمر)', 'حضور ورشة عمل تفاعلية لبناء خيمة اليورت من الألف إلى الياء'],
      tags: ['خيام', 'طبيعة', 'تراث بدوي']
    }
  },
  'kg-ala-archa': {
    ru: {
      title: 'Ущелье Ала-Арча — Ледники и Вершины',
      destination: 'Природный парк Ала-Арча, Кыргызстан',
      description: 'Живописное ущелье всего в 40 километрах от Бишкека. Пьянящий хвойно-арчовый воздух, заснеженные вершины Тянь-Шаня, горные реки и водопад «Ак-Сай».',
      highlights: ['Трансфер из отеля на комфортабельном авто', 'Пеший трекинг к водопаду мощностью 30 метров', 'Величественные панорамы ледника Ак-Сай', 'Уютный пикник в окружении Тянь-Шаньских елей'],
      tags: ['Поход', 'Водопад', 'Горы']
    },
    ky: {
      title: 'Ала-Арча капчыгайы — Мөңгүлөр жана Чокулар',
      destination: 'Ала-Арча улуттук паркы, Кыргызстан',
      description: 'Бишкектен 40 чакырым аралыкта жайгашкан ажайып капчыгай. Арча-карагайдын жагымдуу жыты, Тянь-Шандын ак карлуу чокулары, тоо дарыялары жана «Ак-Сай» шаркыратмасы.',
      highlights: ['Мейманканадан жайлуу унаа менен трансфер', 'Бийиктиги 30 метр шаркыратмага жөө басуу', 'Ак-Сай мөңгүсүнүн кооз панорамалары', 'Тянь-Шань карагайларынын курчоосунда пикник'],
      tags: ['Поход', 'Шаркыратма', 'Тоолор']
    },
    tr: {
      title: 'Ala Arça Kanyonu — Buzullar ve Zirveler',
      destination: 'Ala Arça Milli Parkı, Kırgızistan',
      description: 'Bişkek\'e sadece 40 km uzaklıkta büyüleyici dağ kanyonu. Sağlıklı temiz çam havası, karlı Tanrı Dağları zirveleri, gür dağ nehirleri ve "Ak-Sai" şelalesi.',
      highlights: ['Otelle karşılıklı konforlu araç transferi', '30 metre yüksekliğindeki şelaleye yürüyüş trekking', 'Görkemli Ak-Saj buzul panzarası', 'Tanrı Dağları çam ağaçları içinde piknik keyfi'],
      tags: ['Trekking', 'Şelale', 'Dağlar']
    },
    en: {
      title: 'Ala-Archa Gorge — Glaciers and Peaks',
      destination: 'National Park Ala-Archa, Kyrgyzstan',
      description: 'Spectacular mountain canyon only 40 km away from Bishkek. Fresh alpine juniper air, snow-covered peaks of Tien Shan range, rapid rivers, and Ak-Sai waterfall.',
      highlights: ['Comfortable private hotel pickup & dispatch transfers', 'Hiking tour to the powerful 30-meter Ak-Sai waterfall', 'Majestic panoramic view overlooking the epic Ak-Sai glacier', 'Cozy mountain picnic surrounded by Tien Shan fur trees'],
      tags: ['Hiking', 'Waterfall', 'Mountains']
    },
    de: {
      title: 'Ala-Artscha-Schlucht — Gletscher und Gipfel',
      destination: 'Nationalpark Ala-Artscha, Kirgisistan',
      description: 'Malerische Schlucht nur 40 km von Bischkek entfernt. Frische Gebirgsluft, schneebedeckte Gipfel des Tian-Shan-Gebirges, tosende Flüsse und der Ak-Sai-Wasserfall.',
      highlights: ['Bequemer Hoteltransfer im Premium-Auto', 'Wanderung zum spektakulären 30-Meter-Wasserfall', 'Majestätische Ausblicke auf den Ak-Sai-Gletscher', 'Picknick inmitten von Tian-Shan-Fichten'],
      tags: ['Wandern', 'Wasserfall', 'Berge']
    },
    fr: {
      title: 'Gorges d\'Ala-Archa — Glaciers et Sommets',
      destination: 'Parc National d\'Ala-Archa, Kirghizistan',
      description: 'Canyon montagneux spectaculaire à seulement 40 km de Bichkek. Air pur de sapin, sommets enneigés du Tian-Shan, rivières sauvages et cascade d\'Ak-Sai.',
      highlights: ['Transfert depuis votre hôtel dans un véhicule tout confort', 'Randonnée pédestre guidée vers la cascade d\'Ak-Sai de 30 mètres', 'Vues panoramiques mémorables sur le glacier d\'Ak-Sai', 'Pique-nique rustique au milieu des sapins du Tian-Shan'],
      tags: ['Randonnée', 'Cascade', 'Montagnes']
    },
    ar: {
      title: 'وادي ألا أرتشا الجبلي — قمم وجبال الجليد',
      destination: 'المحمية الطبيعية "ألا أرتشا"، قيرغيزستان',
      description: 'وادي جبلي طبيعي ساحر يبعد مسافة 40 كيلومتراً فقط عن العاصمة بيشكيك. هواء صنوبري جبلي نقي عطر، قمم مغطاة بثلوج جبال تيان شان الساحرة، أنهار جارية وشلال "أك ساي".',
      highlights: ['توصيل كبار الشخصيات من الفندق بسيارة صالون فارهة مريحة', 'مسار مشي جبلي شيق وصعود لشلال أك ساي بارتفاع 30 متراً', 'إطلالات بانورامية مهيبة تحبس الأنفاس لقمم أك ساي الجليدية', 'نزهة خلوية دافئة وجلسة شاي محاطة بغابات وأشجار صنوبر تيان شان'],
      tags: ['مشي جبلي', 'شلالات', 'جبال']
    }
  },
  'kg-sary-chelek': {
    ru: {
      title: 'Дикая Красота Сары-Челека',
      destination: 'Заповедник Сары-Челек, Kyrgyzstan',
      description: 'Потрясающий заповедник с каскадом чистейших озер, окруженных ореховыми рощами и пихтовыми лесами. Место, где природа сохранилась в первозданной чистоте.',
      highlights: ['Путешествие по 7 заповедным озерам Сары-Челека', 'Прогулка на моторной лодке', 'Ночевка в гостевых домах в селе Аркит', 'Знаменитые фотопоинты среди лесных хребтов'],
      tags: ['Заповедник', 'Озера', 'Фототур']
    },
    ky: {
      title: 'Сары-Челектин Жапайы Кооздугу',
      destination: 'Сары-Челек коругу, Кыргызстан',
      description: 'Жаңгак токойлору жана карагайлар менен курчалган тунук көлдөрдүн каскады бар укмуштуудай корук. Жаратылыш баштапкы тазалыгында сакталган жер.',
      highlights: ['Сары-Челектин 7 корулуу көлүнө саякат', 'Моторлуу кайыкта сүзүү', 'Аркыт айылындагы мейман үйлөрүндө түнөө', 'Тоо кыркаларындагы белгилүү фотопоинттер'],
      tags: ['Корук', 'Көлдөр', 'Фототур']
    },
    tr: {
      title: 'Sarı Çelek Vahşi Doğası',
      destination: 'Sarı Çelek Doğa Koruma Alanı, Kırgızistan',
      description: 'Ceviz bahçeleri ve ladin ormanları ile çevrili muazzam berrak göller zinciri. Doğanın en orijinal tertemiz halinde korunduğu kutsal yer.',
      highlights: ['Sarı Çelek\'in korunan 7 asil gölüne turlar', 'Hızlı motorlu tekne gezintisi koruma gölünde', 'Arkit köyü yerel misafir konaklarında geceleme', 'Benzersiz dağ ve orman manzaralarında fotoğraf turları'],
      tags: ['Milli Park', 'Göller', 'Fotoğrafçılık']
    },
    en: {
      title: 'Wild Beauty of Sary-Chelek',
      destination: 'Sary-Chelek Biosphere, Kyrgyzstan',
      description: 'Breathtaking state reserve featuring a cascade of 7 ultra-pure lakes bordered by ancient walnut trees and fir forests. A sanctuary of untouched wild raw nature.',
      highlights: ['Expedition through all 7 protected lakes of Sary-Chelek', 'Fast motorboat ride experience on the main lake', 'Stay in cozy homestays in Arkit local village', 'Stunning scenic photography stops across mountain ridges'],
      tags: ['Reserve', 'Lakes', 'Photo Tour']
    },
    de: {
      title: 'Wilde Schönheit von Sary-Tschelek',
      destination: 'Biosphärenreservat Sary-Tschelek, Kirgisistan',
      description: 'Ein atemberaubendes Naturschutzgebiet mit einer Kaskade von reinsten Bergseen, umgeben von Walnussbäumen und Tannenwäldern.',
      highlights: ['Expedition zu den 7 geschützten Seen von Sary-Tschelek', 'Fahrt mit dem Motorboot auf dem Hauptsee', 'Übernachtung in gemütlichen Gästehäusern im Dorf Arkit', 'Die berühmtesten Fotopunkte inmitten der bewaldeten Bergkämme'],
      tags: ['Naturschutzgebiet', 'Seen', 'Fototour']
    },
    fr: {
      title: 'Beauté Sauvage de Sary-Chelek',
      destination: 'Réserve de Sary-Chelek, Kirghizistan',
      description: 'Une réserve biologique préservée abritant une cascade de 7 lacs cristallins au milieu des forêts séculaires de noyers sauvages.',
      highlights: ['Randonnée au coeur des 7 lacs sauvages de la réserve', 'Balade mémorable en bateau à moteur sur le lac principal', 'Nuitée chaleureuse en maison d\'hôte dans le village d\'Arkit', 'Séances photos uniques devant des panoramas grandioses'],
      tags: ['Réserve', 'Lacs', 'Photo']
    },
    ar: {
      title: 'سحر الطبيعة العذراء في ساري تشيليك',
      destination: 'محمية ساري تشيليك الطبيعية، قيرغيزستان',
      description: 'محمية طبيعية مذهلة لا تفوت تضم سلسلة من 7 بحيرات فائقة النقاء تقع وسط غابات ثمار الجوز وأشجار الصنوبر العتيقة. ملاذ بكر للطبيعة الهادئة.',
      highlights: ['رحلة استكشافية حصرية عبر بحيرات ساري تشيليك الـ 7 المحمية', 'جولة وتجربة ممتعة بالقارب السريع في البحيرة الكبرى', 'الإقامة الهادئة في بيوت الضيافة الريفية في قرية أركيت', 'محطات تصوير سياحية بانورامية فريدة ومصادقة للمناظر الطبيعية'],
      tags: ['محمية', 'بحيرات', 'جولة تصوير']
    }
  },

  // Incoming Tours
  'inc-nomad-exp': {
    ru: {
      title: 'The Great Nomad Expedition / Великий Кочевой Опыт',
      destination: 'Кыргызстан (Групповой этно-тур)',
      description: 'Специальная программа приема иностранных гостей и туристических групп. Полноценное погружение в кочевую культуру, быт народа, конные игры и легендарное восточное гостеприимство.',
      highlights: ['Этно-интерактив: демонстрация соколиной охоты (Салбуурун)', 'Национальное конно-спортивное шоу (Кок-Бору, Кыз-Куу)', 'Мастер-класс по приготовлению праздничного плова и бешбармака', 'Гиды на английском, немецком, французском и турецком языках'],
      tags: ['Инкаминг', 'Групповой', 'Этно-шоу']
    },
    ky: {
      title: 'Улуу Көчмөн Экспедициясы / Nomad Experience',
      destination: 'Кыргызстан (Топтук конок тосуу этно-туру)',
      description: 'Чет өлкөлүк конокторду жана туристтик топторду кабыл алуунун атайын программасы. Көчмөн маданиятына толук сүңгүү, элдин жашоо тиричилиги, улуттук ат оюндары жана белгилүү чыгыш меймандостугу.',
      highlights: ['Этно-интерактив: куш салуу (Салбуурун шоусу)', 'Улуттук ат оюндары (Көк-Бөрү, Кыз-Куу ж. б.)', 'Даамдуу кыргыз пловун жана бешбармагын бышыруу мастер-классы', 'Англис, немис, түрк, француз тилдериндеги коопсуз гиддер'],
      tags: ['Инкаминг', 'Топтук', 'Этно-шоу']
    },
    tr: {
      title: 'The Great Nomad Expedition / Büyük Göçebe Seferi',
      destination: 'Kırgızistan (Grup Etno Turu)',
      description: 'Yabancı turistler ve özel seyahat grupları için tasarlanmış özel ağırlama programı. Göçebe Kırgız kültürüne tam adaptasyon, at oyunları ve meşhur misafirperverlik turları.',
      highlights: ['Etnik gösteriler: Alıcı kuşlarla avcılık performansı (Salbuurun)', 'Geleneksel Kırgız At Oyunları (Kök Börü, Kız Kuu şovları)', 'Ulusal zengin pilav ve beşparmak yemek yapımı masterclassı', 'İngilizce, Almanca, Türkçe ve Fransızca konuşan üst düzey rehberler'],
      tags: ['Incoming', 'Grup Turu', 'Etno Şov']
    },
    en: {
      title: 'The Great Nomad Expedition / Inbound Ethno-Tour',
      destination: 'Kyrgyzstan (Inbound Group Experience)',
      description: 'Exclusive inbound program for foreign tourists, delegates, and corporate groups. Total integration into the ancient nomad way of living, horseback games, and legendary mountain hospitality.',
      highlights: ['Ethno show: Demonstration of historical hunting with eagles (Salbuurun)', 'Spectacular high-speed horse sports (Kok-Boru polo, Kyz-Kuu chase)', 'Culinary masterclass preparing traditional Plov & Hand-made Beshbarmak', 'Fluent multilingual guides in English, German, French, and Turkish'],
      tags: ['Inbound', 'Group', 'Ethno Show']
    },
    de: {
      title: 'The Great Nomad Expedition / Die Große Nomaden-Expedition',
      destination: 'Kirgisistan (Gruppen-Ethno-Tour)',
      description: 'Spezialprogramm für den Empfang ausländischer Reisegruppen. Vollständiges Eintauchen in die Nomadenkultur, Pferdespiele und legendäre herzliche Gastfreundschaft.',
      highlights: ['Ethno-Interaktivität: Demonstration der Adlerjagd (Salbuurun)', 'Traditionelle Pferdesport-Shows (Kok-Boru, Kyz-Kuu)', 'Sterne-Kochkurs für festlichen Plov und das Nationalgericht Beschbarmak', 'Professionelle Guides auf Englisch, Deutsch, Französisch und Türkisch'],
      tags: ['Inbound', 'Gruppen', 'Ethno-Show']
    },
    fr: {
      title: 'Nomad Expedition — Voyage Ethnique en Groupe',
      destination: 'Kirghizistan (Tour Réceptif de Groupe)',
      description: 'Programme sur mesure pour les touristes et les comités d\'entreprises étrangers. Une immersion totale dans le mode de vie nomade et les célèbres jeux équestres centrasiatiques.',
      highlights: ['Spectacle ethnique : Démonstration de chasse au faucon (Salbuurun)', 'Démonstration impressionnante de sports équestres (Kok-Boru, Kyz-Kuu)', 'Cours de cuisine traditionnelle : Préparation du Plov festif et du Beshbarmak', 'Guides certifiés parlant anglais, allemand, turc et français'],
      tags: ['Réceptif', 'Groupe', 'Ethno']
    },
    ar: {
      title: 'البعثة الإثنوغرافية البدوية الكبرى في قيرغيزستان',
      destination: 'قيرغيزستان (رحلة تراثية جماعية متكاملة للوافدين)',
      description: 'برنامج مصمم بعناية خصيصاً لاستقبال السواح والوفود الأجنبية والمجموعات السياحية. معيشة بدوية واقعية متكاملة، عروض الفروسية، كرم الضيافة الشرقي التاريخي لأهل الجبال.',
      highlights: ['استعراض تفاعلي: فن الصيد بالصقور والنسور الجارحة وتدريب كلاب التايغان (سالبورون)', 'حضور ألعاب الفروسية القتالية والتراثية الكبرى (كوك بورو، كيز كوو)', 'ورشة عمل طبخ ممتعة لإعداد الرز الأوزبكي (بلوف) والبيرشبارماك اللذيذ بأيديكم', 'مرافقة مرشدين فصحاء في اللغات الإنجليزية، الألمانية، الفرنسية، والتركية'],
      tags: ['سياحة وافدة', 'مجموعات', 'برنامج تراثي']
    }
  },
  'inc-silk-road': {
    ru: {
      title: 'По Следам Великого Шелкового Пути',
      destination: 'Сулайман-Тоо - Таш-Рабат - Бурана',
      description: 'Уникальный исторический маршрут для иностранных делегаций и любителей древности. Посетите башню Бурана XI века, средневековый караван-сарай Таш-Рабат и священную гору Сулайман-Тоо в Оше.',
      highlights: ['Караван-сарай Таш-Рабат на высоте 3200м', 'Буранинское городище и музей балбалов под открытым небом', 'Священная гора ЮНЕСКО Сулайман-Тоо', 'Опытное координирование приема делегаций и групп любого масштаба'],
      tags: ['История', 'Музеи', 'Группы']
    },
    ky: {
      title: 'Улуу Жибек Жолунун издери менен',
      destination: 'Сулайман-Тоо - Таш-Рабат - Бурана',
      description: 'Чет өлкөлүк делегациялар жана байыркы маданиятты сүйүүчүлөр үчүн уникалдуу тарыхый маршрут. XI кылымдагы Бурана мунарасына, орто кылымдагы Таш-Рабат караван-сарайына жана Оштогу Сулайман-Тоого барыңыз.',
      highlights: ['3200 м бийиктиктеги легендарлуу Таш-Рабат караван-сарайы', 'Бурана мунарасы жана балбал таштардын ачык асман алдындагы музейи', 'ЮНЕСКОнун Сулайман-Тоо ыйык жайы', 'Ар кандай масштабдагы топторду уюштуруунун кесипкөй коопсуздугу'],
      tags: ['Тарых', 'Музейлер', 'Топтор']
    },
    tr: {
      title: 'İpek Yolu İzinde Büyük Tarih Turu',
      destination: 'Süleyman Dağı - Taş Rabat - Burana Kulesi',
      description: 'Yabancı delegasyonlar ve tarihi sevenler için benzersiz rota. XI. yüzyıldan kalma Burana Kulesi\'ni, Orta Çağ kervansarayı Taş Rabat\'ı ve kutsal Süleyman Dağı\'nı ziyaret edin.',
      highlights: ['3200 metre yükseklikteki Taş Rabat Taş Kervansarayı', 'Burana Kulesi Açık Hava Müzesi ve Balballar', 'UNESCO Mirası kutsal Süleyman Dağı gezisi', 'Yolcular için güvenli organizasyon destek sistemi'],
      tags: ['Tarih', 'Müzeler', 'Grup Turu']
    },
    en: {
      title: 'Following the Great Silk Road route',
      destination: 'Sulayman-Too - Tash-Rabat - Burana',
      description: 'A stellar historical route designed for international delegations. Visit the 11th-century Burana Tower observatory, medieval fortress caravan-sarai Tash-Rabat, and the UNESCO sacred mountain Sulayman-Too.',
      highlights: ['Tash-Rabat caravan-sarai fortress at 3200m elevation', 'Ancient Burana settlement & open-air museum of stone tablets (balbals)', 'UNESCO World Heritage sacred mountain Sulayman-Too in Osh', 'Professional coordination of diplomatic, executive and corporate MICE delegations'],
      tags: ['History', 'Museums', 'Delegations']
    },
    de: {
      title: 'Auf den Spuren der Großen Seidenstraße',
      destination: 'Sulaiman-Too - Tasch-Rabat - Burana',
      description: 'Eine einzigartige historische Route für Delegationen und Geschichtsliebhaber. Besuchen Sie den Burana-Turm (11. Jh.), Karawanserei Tasch-Rabat und heiligen Berg Sulaiman-Too.',
      highlights: ['Karawanserei Tasch-Rabat auf einer Höhe von 3200 m', 'Ruinenstätte Burana und Freilichtmuseum der Balbals', 'UNESCO-Weltkulturerbe Heiliger Berg Sulaiman-Too in Osch', 'Umfassende Betreuung von Delegations- und Besuchergruppen'],
      tags: ['Geschichte', 'Museen', 'Gruppen']
    },
    fr: {
      title: 'Sur les Traces de la Route de la Soie',
      destination: 'Sulaiman-Too - Tash-Rabat - Burana',
      description: 'Un itinéraire culturel conçu pour les délégations internationales. Visitez la tour Burana du XIe siècle, le caravansérail médiéval de Tash-Rabat et le mont sacré d\'Osh.',
      highlights: ['Le caravansérail de pierre de Tash-Rabat à 3200m d\'altitude', 'Le minaret de Burana et son musée archéologique de balbals', 'Le mont sacré Sulaiman-Too, classé au patrimoine mondial de l\'UNESCO', 'Prise en charge officielle complète pour les visites de délégations'],
      tags: ['Histoire', 'Musées', 'Groupes']
    },
    ar: {
      title: 'على خطى وطريق الحرير التاريخي العظيم',
      destination: 'سليمان تو - تاش رباط - مئذنة بورانا',
      description: 'مسار تاريخي فريد مصمم خصيصاً للوفود الدولية وعشاق التاريخ القديم. ستزورون مئذنة بورانا من القرن الحادي عشر، خان وقوافل تاش رباط الحجري وسليمان تو المقدس بالجنوب.',
      highlights: ['خان وقصر تاش رباط الحجري الأثري على ارتفاع 3200 متر', 'مئذنة بورانا ومتحف شواهد القبور الحجرية التراثية المفتوح بالهواء', 'جبل سليمان تو المقدس في أوش والمدرج ضمن التراث العالمي لليونسكو', 'الخبرة العالية في تنظيم وخدمة كبار الشخصيات والوفود واللقاءات الرسمية MICE'],
      tags: ['تاريخ', 'متاحف', 'وفود رسمية']
    }
  }
};

export const activitiesTranslations: Record<string, Record<Language, {
  title: string;
  description: string;
  duration: string;
  intensity: string;
  price: string;
}>> = {
  'salbuurun': {
    ru: {
      title: 'Шоу Салбуурун (Соколиная охота)',
      description: 'Древнее искусство кыргызских охотников. Демонстрация охоты с ловчими птицами (беркутами, соколами) и тайганами (кыргызскими борзыми), стрельба из традиционного лука верхом.',
      duration: '3-4 часа',
      intensity: 'легкий',
      price: '3 500 KGS / чел'
    },
    ky: {
      title: 'Салбуурун шоусу (Мүнүшкөрчүлүк)',
      description: 'Кыргыз мергенчилеринин байыркы искусствосу. Алгыр куштар (бүркүт, шумкар) жана тайгандар менен аңчылык кылууну көрсөтүү, ат үстүндө салттуу жаа тартуу.',
      duration: '3-4 саат',
      intensity: 'жеңил',
      price: '3 500 KGS / киши'
    },
    tr: {
      title: 'Salbuurun Gösterisi (Yırtıcı Kuşlarla Avlanma)',
      description: 'Kırgız avcılarının eski sanatı. Kartallar, şahinler ve Taigan (Kırgız tazısı) köpekleri ile geleneksel av şovları, at sırtında olimpik yay atış gösterileri.',
      duration: '3-4 saat',
      intensity: 'kolay',
      price: '3 500 KGS / kişi'
    },
    en: {
      title: 'Salbuurun Show (Falconry & Eagle Hunting)',
      description: 'Ancient art of Kyrgyz hunters. Dynamic live demonstration of hunting with golden eagles, falcons, Taigan sighthounds, and speed archery on a horseback.',
      duration: '3-4 hours',
      intensity: 'easy',
      price: '3,500 KGS / user'
    },
    de: {
      title: 'Salbuurun-Show (Falknerei und Adlerjagd)',
      description: 'Die uralte Kunst der kirgisischen Jäger. Demonstration der Jagd mit Steinadlern, Falken und Taiganen (kirgisische Windhunde), Bogenschießen zu Pferd.',
      duration: '3-4 Std.',
      intensity: 'leicht',
      price: '3 500 KGS / Pers.'
    },
    fr: {
      title: 'Spectacle de Salbuurun (Chasse à l\'Aigle)',
      description: 'L\'art ancestral des fauconniers kirghizes. Démonstration de chasse en vol libre avec des aigles royaux, des faucons, des lévriers Taigan et tir à l\'arc équestre.',
      duration: '3-4 heures',
      intensity: 'facile',
      price: '3 500 KGS / pers.'
    },
    ar: {
      title: 'عروض سالبورون التراثية (الصيد بالصقور والنسور)',
      description: 'الفن القديم والاستثنائي للرعاة والأجداد القيرغيز. عرض حي تفاعلي للصيد بالنسور الذهبية، الصقور، كلاب الصيد القرغيزية تايغان، ورمي القوس العتيق من على فرس جارية.',
      duration: '3-4 ساعات',
      intensity: 'خفيف',
      price: '3 500 KGS / فرد'
    }
  },
  'shyrdak': {
    ru: {
      title: 'Мастер-класс по изготовлению Шырдаков',
      description: 'Уникальное ремесло создания войлочных ковров «Шырдак», внесенное в список нематериального культурного наследия ЮНЕСКО. Изготовьте свой памятный узорчатый сувенир из чистой шерсти.',
      duration: '2.5 часа',
      intensity: 'легкий',
      price: '2 200 KGS / чел'
    },
    ky: {
      title: 'Шырдак жасоо боюнча мастер-класс',
      description: 'ЮНЕСКОнун маданий мурастар тизмесине кирген уникалдуу кыргыз кийиз коомунун «Шырдак» кол өнөрчүлүгү. Таза жүндөн, улуттук оюмдардан жасалган жеке сувенириңизди жасаңыз.',
      duration: '2.5 саат',
      intensity: 'жеңил',
      price: '2 200 KGS / киши'
    },
    tr: {
      title: 'Şırdak Halısı Yapımı Masterclassı',
      description: 'UNESCO acil koruma gerektiren kültürel miras listesinde yer alan keçe halı Şırdak yapımı. Saf koyun yününden kendi desenli küçük anı hediyenizi yapın.',
      duration: '2.5 saat',
      intensity: 'kolay',
      price: '2 200 KGS / kişi'
    },
    en: {
      title: 'Shyrdak Wool Rug Masterclass',
      description: 'Unique craft of felt carpet making "Shyrdak", registered in UNESCO cultural heritage list. Hand-felt your own patterned souvenir rug from organic sheep wool.',
      duration: '2.5 hours',
      intensity: 'easy',
      price: '2,200 KGS / user'
    },
    de: {
      title: 'Shyrdak-Teppich-Meisterklasse',
      description: 'Die traditionelle Kunst der Filzteppichherstellung (Sbyrdak), eingetragen im UNESCO-Welterbe. Stellen Sie aus reiner Schurwolle Ihr eigenes gemustertes Souvenir her.',
      duration: '2.5 Std.',
      intensity: 'leicht',
      price: '2 200 KGS / Pers.'
    },
    fr: {
      title: 'Atelier Artisanat du Shyrdak',
      description: 'Le savoir-faire de la confection de tapis de feutre kirghizes, classé au patrimoine culturel de l\'UNESCO. Créez votre propre motif souvenir en laine pure.',
      duration: '2.5 heures',
      intensity: 'facile',
      price: '2 200 KGS / pers.'
    },
    ar: {
      title: 'مطبخ وورشة عمل صناعة سجاد الشيرداك',
      description: 'الحرفة الفريدة لصناعة السجاد الصوفي الملون "شيرداك"، المدرج ضمن قائمة التراث الثقافي اللامادي لليونسكو. بادر حياكة وتصنيع تذكارك الصوفي ونقوشك بيدك من الصوف الطبيعي.',
      duration: 'ساعة ونصف',
      intensity: 'خفيف',
      price: '2 200 KGS / فرد'
    }
  },
  'horse-trekking': {
    ru: {
      title: 'Конные переходы на джайлоо',
      description: 'Живописная конная прогулка по альпийским лугам Тянь-Шаня под руководством сертифицированных инструкторов. Идеально подходит как для начинающих, так и для опытных наездников.',
      duration: 'От 2 часов до целого дня',
      intensity: 'активный',
      price: 'От 1 800 KGS'
    },
    ky: {
      title: 'Жайлоого ат менен чыгуу',
      description: 'Сертификатталган нускамачылардын көзөмөлү астында Тянь-Шандын кооз альпинисттик мүрөктөрүнө ат менен сейилдөө. Ат минүүнү жаңы баштагандар жана тажрыйбалуу чабандестер үчүн идеалдуу келет.',
      duration: '2 сааттан толук күнгө чейин',
      intensity: 'активдүү',
      price: 'Каалагандай, 1 800 KGS баштап'
    },
    tr: {
      title: 'Yayla Alplarında At Binme Turları',
      description: 'Tanrı Dağları alpin çayırlarında profesyonel lisanslı at eğiticileri liderliğinde muazzam doğa gezisi. Hem yeni başlayanlar hem usta biniciler için oldukça uygundur.',
      duration: '2 saatten tüm güne kadar',
      intensity: 'aktif',
      price: '1 800 KGS\'den başlayan'
    },
    en: {
      title: 'Alpine Horseback Riding on Jailoo',
      description: 'Stunning equestrian trip across Tien Shan alpine valleys led by certified horse guides. Perfectly suitable for absolute beginners as well as seasoned riders.',
      duration: 'From 2 hours to full-day trip',
      intensity: 'active',
      price: 'From 1,800 KGS'
    },
    de: {
      title: 'Ausritte auf das Hochweiden-Dschailoo',
      description: 'Malerischer Ausritt über die alpinen Wiesen des Tian-Shan unter der Anleitung zertifizierter Instruktoren. Ideal für Anfänger und Fortgeschrittene.',
      duration: 'Ab 2 Std. bis zu einem ganzen Tag',
      intensity: 'aktiv',
      price: 'Ab 1 800 KGS'
    },
    fr: {
      title: 'Randonnée Équestre dans les Alpages',
      description: 'Une superbe promenade à cheval dans les vallées alpines du Tian-Shan avec des instructeurs diplômés. Convient aux débutants comme aux confirmés.',
      duration: 'De 2 heures à la journée complète',
      intensity: 'actif',
      price: 'À partir de 1 800 KGS'
    },
    ar: {
      title: 'مسارات ركوب الخيل في المروج الجبلية الخصبة',
      description: 'جولة ركوب خил ساحرة وسط مروج جبال تيان شان الساحرة برفقة وتوجيه مرشدين ومربي خيول مرخصين. مناسبة ومجهزة تماماً للمبتدئين وكذلك الفرسان ذوي الخبرة.',
      duration: 'من ساعتين إلى يوم كامل',
      intensity: 'نشط',
      price: 'تبدأ من 1 800 KGS'
    }
  },
  'boorsok-fest': {
    ru: {
      title: 'Кулинарное шоу «Боорсок и Бешбармак»',
      description: 'Участие в традиционной жарке знаменитого национального хлеба «боорсок» в казане на открытом воздухе, дегустация лепешек и ручное приготовление бешбармака в большой компании.',
      duration: '3 часа',
      intensity: 'легкий',
      price: '2 500 KGS / чел'
    },
    ky: {
      title: '«Боорсок жана Бешбармак» кулинардык шоусу',
      description: 'Ачык асманда казанда даамдуу «боорсок» нанын бышырууга катышуу, ысык нандардан ооз тийүү жана чоң шайыр компанияда колго бешбармак жасоо уюштуруу.',
      duration: '3 саат',
      intensity: 'жеңил',
      price: '2 500 KGS / киши'
    },
    tr: {
      title: 'Mutfak Şovu «Boorsok ve Beşparmak»',
      description: 'Açık havada büyük kazanda ünlü Kırgız ekmeği "Boorsok" pişirilmesi interaktif turu, sıcak sıcak tadımı ve kalabalık grup arkadaşlığıyla el yapımı beşparmak yapma deneyimi.',
      duration: '3 saat',
      intensity: 'kolay',
      price: '2 500 KGS / kişi'
    },
    en: {
      title: 'Boorsok Fried Bread & Beshbarmak Cooking Show',
      description: 'Interactive cooking show making Kyrgyz traditional fried bread "Boorsok" in hot cauldrons outdoors, and hand-crafting standard national noodle-meat dish Beshbarmak.',
      duration: '3 hours',
      intensity: 'easy',
      price: '2,500 KGS / user'
    },
    de: {
      title: 'Koch-Show „Boorsok und Beschbarmak“',
      description: 'Teilnahme am traditionellen Braten des kirgisischen Hefebrots „Boorsok“ im Kessel im Freien, Verkostung und handgemachte Zubereitung des Nationalgerichts Beschbarmak.',
      duration: '3 Std.',
      intensity: 'leicht',
      price: '2 500 KGS / Pers.'
    },
    fr: {
      title: 'Spectacle Culinaire «Boorsok et Beshbarmak»',
      description: 'Apprenez à friture le pain rituel kirghize « boorsok » dans de grands chaudrons en plein air, puis cuisinez à la main le célèbre plat national le Beshbarmak.',
      duration: '3 heures',
      intensity: 'facile',
      price: '2 500 KGS / pers.'
    },
    ar: {
      title: 'مهرجان الطبخ التراثي «البورصوك والبيشبارماك»',
      description: 'جولة طبخ ومهرجان شعبي تفاعلي لمشاهدة والمشاركة في قلي العجين القرغيزي اللذيذ البورصوك في القدور الكبيرة في الهواء الطلق، متبوعاً بإعداد طبق المكرونة واللحم الوطني باليد (بيشبارماك).',
      duration: '3 ساعات',
      intensity: 'خفيف',
      price: '2 500 KGS / فرد'
    }
  }
};
