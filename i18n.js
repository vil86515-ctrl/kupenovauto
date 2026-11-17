/* Kupenov Auto — i18n (BG default, RU, EN) */
(function () {
  const MONTHS = {
    'Януари': { ru: 'Январь', en: 'January' },
    'Февруари': { ru: 'Февраль', en: 'February' },
    'Март': { ru: 'Март', en: 'March' },
    'Април': { ru: 'Апрель', en: 'April' },
    'Май': { ru: 'Май', en: 'May' },
    'Юни': { ru: 'Июнь', en: 'June' },
    'Юли': { ru: 'Июль', en: 'July' },
    'Август': { ru: 'Август', en: 'August' },
    'Септември': { ru: 'Сентябрь', en: 'September' },
    'Октомври': { ru: 'Октябрь', en: 'October' },
    'Ноември': { ru: 'Ноябрь', en: 'November' },
    'Декември': { ru: 'Декабрь', en: 'December' }
  };

  const MAP = {
    /* chrome / dividers / chips */
    'Налични автомобили': { ru: 'Доступные автомобили', en: 'Available Vehicles' },
    'Услуги': { ru: 'Услуги', en: 'Services' },
    'Натисни': { ru: 'Нажмите', en: 'Click' },
    'Информация за услугата': { ru: 'Информация об услуге', en: 'About the service' },
    'Внос от чужбина по запитване': { ru: 'Импорт из-за рубежа по запросу', en: 'Import from abroad on request' },
    'Доверен сервиз и резервни части': { ru: 'Проверенный сервис и запчасти', en: 'Trusted service and spare parts' },
    'Застрахователен брокер': { ru: 'Страховой брокер', en: 'Insurance broker' },
    'Регистрация в КАТ': { ru: 'Регистрация в КАТ', en: 'Vehicle registration (KAT)' },
    'Автомобили на склад': { ru: 'Автомобили в наличии', en: 'Cars in Stock' },
    'Автомобилен ключар 24/7': { ru: 'Автомобильный ключник 24/7', en: 'Car Locksmith 24/7' },
    'Услуги в автомобилния бранш': { ru: 'Автомобильные услуги', en: 'Automotive Services' },
    'Брандови продукти': { ru: 'Брендовая продукция', en: 'Branded Products' },
    'Мърч': { ru: 'Мерч', en: 'Merch' },
    'Технически характеристики': { ru: 'Технические характеристики', en: 'Technical Specifications' },
    'Налично': { ru: 'В наличии', en: 'Available' },
    '← Назад към всички автомобили': { ru: '← Назад ко всем автомобилям', en: '← Back to all vehicles' },
    'Свържи се': { ru: 'Связаться', en: 'Contact' },
    'Свържете се': { ru: 'Свяжитесь с нами', en: 'Contact us' },
    'За оглед, въпроси или допълнителна информация — свържете се с нас.': { ru: 'Для осмотра, вопросов или дополнительной информации — свяжитесь с нами.', en: 'For a viewing, questions, or additional information — get in touch with us.' },
    /* class labels */
    'Ежедневен': { ru: 'Повседневный', en: 'Everyday' },
    'Спортен': { ru: 'Спортивный', en: 'Sport' },
    'Луксозен': { ru: 'Премиум', en: 'Luxury' },
    /* filter / sort */
    'Подредба:': { ru: 'Сортировка:', en: 'Sort:' },
    'Клас:': { ru: 'Класс:', en: 'Class:' },
    'Всички': { ru: 'Все', en: 'All' },
    'По подразбиране': { ru: 'По умолчанию', en: 'Default' },
    '↑ Възходяща година': { ru: '↑ Возрастание года', en: '↑ Year ascending' },
    '↓ Низходяща година': { ru: '↓ Убывание года', en: '↓ Year descending' },
    /* service titles */
    'Внос на автомобил по поръчка': { ru: 'Импорт автомобиля под заказ', en: 'Custom vehicle import' },
    'Изкупуване на стария Ви автомобил': { ru: 'Выкуп вашего автомобиля', en: 'Buying your old vehicle' },
    'Съдействие в КАТ': { ru: 'Помощь в регистрации (КАТ)', en: 'Vehicle registration assistance' },
    'Съдействие при намиране на автомобил': { ru: 'Помощь в подборе автомобиля', en: 'Vehicle search assistance' },
    /* spec section titles */
    'Общи характеристики': { ru: 'Общие характеристики', en: 'General Specifications' },
    'Екстри': { ru: 'Оснащение', en: 'Features' },
    /* spec labels — general */
    'Модел': { ru: 'Модель', en: 'Model' },
    'Година на производство': { ru: 'Год выпуска', en: 'Year of Manufacture' },
    'Фейслифт': { ru: 'Рестайлинг', en: 'Facelift' },
    'Километри': { ru: 'Пробег', en: 'Mileage' },
    'Гориво': { ru: 'Тип топлива', en: 'Fuel Type' },
    'Кубатура на двигател': { ru: 'Объём двигателя', en: 'Engine Displacement' },
    'Код на двигател': { ru: 'Код двигателя', en: 'Engine Code' },
    'Скоростна кутия': { ru: 'Коробка передач', en: 'Transmission' },
    'Задвижване': { ru: 'Привод', en: 'Drivetrain' },
    'Размер на гуми': { ru: 'Размер шин', en: 'Tire Size' },
    'Конски сили': { ru: 'Мощность (л.с.)', en: 'Horsepower (hp)' },
    'Нютон метри': { ru: 'Тяга мотора (Н·м)', en: 'Torque (Nm)' },
    'Турбо': { ru: 'Турбонаддув', en: 'Turbocharged' },
    'Произход': { ru: 'Происхождение', en: 'Origin' },
    'Ускорение 0–100 км/ч': { ru: 'Разгон 0–100 км/ч', en: '0–100 km/h Acceleration' },
    'Цвят': { ru: 'Цвет', en: 'Color' },
    'Салон': { ru: 'Салон', en: 'Interior' },
    /* spec labels — features */
    'Безключов достъп': { ru: 'Бесключевой доступ', en: 'Keyless Entry' },
    'Подгрев седалки': { ru: 'Подогрев сидений', en: 'Heated Seats' },
    'Подгрев волан': { ru: 'Подогрев рулевого колеса', en: 'Heated Steering Wheel' },
    'Вентилация на седалки': { ru: 'Вентиляция сидений', en: 'Ventilated Seats' },
    'Подгрев челно стъкло': { ru: 'Подогрев лобового стекла', en: 'Heated Windshield' },
    'Панорама': { ru: 'Панорамная крыша', en: 'Panoramic Roof' },
    '360° камера': { ru: 'Камера 360°', en: '360° Camera' },
    'Парктроник': { ru: 'Парктроник', en: 'Parking Sensors' },
    'Паркинг асистент': { ru: 'Ассистент парковки', en: 'Parking Assist' },
    'Адаптивен автопилот': { ru: 'Адаптивный круиз-контроль', en: 'Adaptive Cruise Control' },
    'Вид салон': { ru: 'Тип салона', en: 'Interior Type' },
    'Електрически багажник': { ru: 'Электропривод багажника', en: 'Power Tailgate' },
    'Затъмнени стъкла': { ru: 'Тонированные стёкла', en: 'Tinted Windows' },
    'Прибиране на огледала': { ru: 'Электроскладывание зеркал', en: 'Power Folding Mirrors' },
    'Електрически седалки': { ru: 'Электрорегулировка сидений', en: 'Power Seats' },
    'Carplay / Android Auto': { ru: 'Apple CarPlay / Android Auto', en: 'Apple CarPlay / Android Auto' },
    'Heads Up Display': { ru: 'Проекционный дисплей (Head-Up Display)', en: 'Head-Up Display' },
    'Озвучителна система': { ru: 'Аудиосистема', en: 'Sound System' },
    'Задна камера': { ru: 'Камера заднего вида', en: 'Rear View Camera' },
    'Фарове': { ru: 'Фары', en: 'Headlights' },
    'Спорт пакет': { ru: 'Спортивный пакет', en: 'Sport Package' },
    /* spec labels — admin */
    'Годишен технически преглед': { ru: 'Годовой технический осмотр', en: 'Annual Technical Inspection' },
    'Застраховка ГО': { ru: 'ОСАГО', en: 'Third-Party Liability Insurance' },
    'Каско': { ru: 'КАСКО', en: 'Comprehensive Insurance (Casco)' },
    'Винетка': { ru: 'Виньетка', en: 'Road Toll Sticker (Vignette)' },
    'Годишен данък': { ru: 'Годовой транспортный налог', en: 'Annual Vehicle Tax' },
    /* values */
    'Да': { ru: 'Да', en: 'Yes' },
    'Не': { ru: 'Нет', en: 'No' },
    'Бензин': { ru: 'Бензин', en: 'Petrol' },
    'Дизел': { ru: 'Дизель', en: 'Diesel' },
    'Бензин + Електричество': { ru: 'Бензин + электричество', en: 'Petrol + Electric' },
    'Дизел + Електричество': { ru: 'Дизель + электричество', en: 'Diesel + Electric' },
    'Бензин + Газ': { ru: 'Бензин + газ', en: 'Petrol + LPG' },
    'Автоматична': { ru: 'Автоматическая', en: 'Automatic' },
    '8-степенна автоматична': { ru: '8-ступенчатая автоматическая', en: '8-speed automatic' },
    '6-степенна автоматична': { ru: '6-ступенчатая автоматическая', en: '6-speed automatic' },
    'Автоматична, 7-степенна DCT': { ru: 'Автоматическая, 7-ступенчатая DCT', en: 'Automatic, 7-speed DCT' },
    'Ръчна': { ru: 'Механическая', en: 'Manual' },
    '4×4 (xDrive)': { ru: '4×4 (xDrive)', en: '4×4 (xDrive)' },
    'Задно': { ru: 'Задний', en: 'Rear-wheel drive' },
    'Предно': { ru: 'Передний', en: 'Front-wheel drive' },
    'Кожен': { ru: 'Кожаный', en: 'Leather' },
    'Кожен, черен': { ru: 'Кожаный, чёрный', en: 'Leather, black' },
    'Плат': { ru: 'Ткань', en: 'Cloth' },
    'Плат, спортен': { ru: 'Ткань, спортивный', en: 'Cloth, sport' },
    'Черен': { ru: 'Чёрный', en: 'Black' },
    'Сив': { ru: 'Серый', en: 'Grey' },
    'Червен': { ru: 'Красный', en: 'Red' },
    'Син, матов': { ru: 'Синий, матовый', en: 'Blue, matte' },
    'Тъмно Сив': { ru: 'Тёмно-серый', en: 'Dark grey' },
    'Германия': { ru: 'Германия', en: 'Germany' },
    'България': { ru: 'Болгария', en: 'Bulgaria' },
    'Швейцария': { ru: 'Швейцария', en: 'Switzerland' },
    'Италия': { ru: 'Италия', en: 'Italy' },
    'Халогенни': { ru: 'Галогенные', en: 'Halogen' },
    'Стандартна': { ru: 'Стандартная', en: 'Standard' },
    'Не, само AUX': { ru: 'Нет, только AUX', en: 'No, AUX only' },
    'Да, без челно': { ru: 'Да, кроме лобового', en: 'Yes, except windshield' },
    'Да, само заден': { ru: 'Да, только задний', en: 'Yes, rear only' },
    'Платен за 2026': { ru: 'Оплачен за 2026', en: 'Paid for 2026' },
    'Платен 2026': { ru: 'Оплачен 2026', en: 'Paid 2026' },
    /* merch */
    '← Назад към начало': { ru: '← Назад на главную', en: '← Back to home' },
    'Елегантен ключодържател': { ru: 'Элегантный брелок', en: 'Elegant keychain' },
    'Ключодържател': { ru: 'Брелок', en: 'Keychain' },
    'Характеристики': { ru: 'Характеристики', en: 'Specifications' },
    'Материал': { ru: 'Материал', en: 'Material' },
    'Неръждаема стомана': { ru: 'Нержавеющая сталь', en: 'Stainless steel' },
    'Ринг': { ru: 'Кольцо', en: 'Ring' },
    'За лесно поставяне': { ru: 'Для удобного крепления', en: 'For easy attachment' },
    'Надпис': { ru: 'Надпись', en: 'Inscription' },
    'Лазерно гравиран': { ru: 'Лазерная гравировка', en: 'Laser-engraved' },
    'Изработка': { ru: 'Изготовление', en: 'Construction' },
    'Здрава, стилна и дълготрайна': { ru: 'Прочное, стильное и долговечное', en: 'Durable, stylish, and long-lasting' },
    'Размери': { ru: 'Размеры', en: 'Dimensions' },
    'Тънък и лек': { ru: 'Тонкий и лёгкий', en: 'Slim and lightweight' },
    'Поръчай сега': { ru: 'Заказать', en: 'Order now' },
    'Поръчай': { ru: 'Заказ', en: 'Order' },
    'Свържете се с нас за поръчка на ключодържателя — ще се радваме да помогнем.': { ru: 'Свяжитесь с нами для заказа брелока — будем рады помочь.', en: 'Contact us to order the keychain — we’ll be happy to help.' },
    /* pen */
    'Черен химикал': { ru: 'Чёрная ручка', en: 'Black pen' },
    'Химикал': { ru: 'Ручка', en: 'Pen' },
    'Химикал със стилус': { ru: 'Ручка со стилусом', en: 'Pen with stylus' },
    'Мастило': { ru: 'Чернила', en: 'Ink' },
    'Стилус': { ru: 'Стилус', en: 'Stylus' },
    'Неръждаема стомана + Пластмаса': { ru: 'Нержавеющая сталь + пластик', en: 'Stainless steel + plastic' },
    'Черно': { ru: 'Чёрные', en: 'Black' },
    'За работа по тъч скрийн': { ru: 'Для работы с сенсорным экраном', en: 'For use with a touchscreen' },
    'Свържете се с нас за поръчка на химикала — ще се радваме да помогнем.': { ru: 'Свяжитесь с нами для заказа ручки — будем рады помочь.', en: 'Contact us to order the pen — we’ll be happy to help.' }
  };

  const HTML_MAP = {
    'contact-title': {
      bg: 'Свържете се<br>с <span>нас</span>',
      ru: 'Свяжитесь<br>с <span>нами</span>',
      en: 'Get in<br><span>touch</span>'
    },
    'contact-sub': {
      bg: 'За въпроси, огледи или допълнителна информация — не се колебайте да се свържете с нас.',
      ru: 'Не стесняйтесь связаться с нами. По вопросам, осмотрам или дополнительной информации.',
      en: 'For questions, viewings, or additional information — don’t hesitate to contact us.'
    },
    'pen-title': {
      bg: 'Черен <span>Химикал</span>',
      ru: 'Чёрная <span>Ручка</span>',
      en: 'Black <span>Pen</span>'
    }
  };

  const SERVICES = [
    {
      title: { bg: 'Внос от чужбина по запитване', ru: 'Импорт из-за рубежа по запросу', en: 'Import from abroad on request' },
      text: {
        bg: 'Намираме и доставяме автомобил от чужбина според Вашите изисквания и бюджет.\nДоставката отнема до 45 дни. Работим с партньори за Европа, САЩ, Канада, Южна Корея.',
        ru: 'Находим и доставляем автомобиль из-за рубежа в соответствии с Вашими требованиями и бюджетом.\nДоставка занимает до 45 дней. Работаем с партнёрами в Европе, США, Канаде и Южной Корее.',
        en: 'We find and deliver a vehicle from abroad to match your requirements and budget.\nDelivery takes up to 45 days. We work with partners for Europe, the USA, Canada and South Korea.'
      }
    },
    {
      title: { bg: 'Доверен сервиз и резервни части', ru: 'Проверенный сервис и запчасти', en: 'Trusted service and spare parts' },
      text: {
        bg: 'Осигуряваме професионално обслужване за всички видове ремонти по един автомобил в доверен сервиз.\nНамираме подходящите резервни части на най-добрите пазарни цени.',
        ru: 'Обеспечиваем профессиональное обслуживание и все виды ремонта автомобиля в проверенном сервисе.\nНаходим подходящие запчасти по лучшим рыночным ценам.',
        en: 'We provide professional servicing for all types of vehicle repairs at a trusted workshop.\nWe source the right spare parts at the best market prices.'
      }
    },
    {
      title: { bg: 'Застрахователен брокер', ru: 'Страховой брокер', en: 'Insurance broker' },
      text: {
        bg: 'Съдействаме при сключването на подходяща автомобилна застраховка с доверен брокер.',
        ru: 'Помогаем оформить подходящую автомобильную страховку через проверенного брокера.',
        en: 'We help you arrange suitable car insurance through a trusted broker.'
      }
    },
    {
      title: { bg: 'Регистрация в КАТ', ru: 'Регистрация в КАТ', en: 'Vehicle registration (KAT)' },
      text: {
        bg: 'Поемаме изцяло процеса по регистрацията на Вашия автомобил, чрез доверен регистратор.',
        ru: 'Полностью берём на себя процесс регистрации Вашего автомобиля через проверенного регистратора.',
        en: 'We take care of the entire registration process for your vehicle through a trusted registration agent.'
      }
    },
    {
      title: { bg: 'Автомобилен ключар 24/7', ru: 'Автомобильный ключник 24/7', en: 'Car Locksmith 24/7' },
      text: {
        bg: '• Дубликат на автомобилен ключ\n• Дубликат на битов ключ и чип за достъп\n• Ремонт на автомобилен ключ\n• Намиране на резервни компоненти\n• Идваме на място — на посочен от Вас адрес\n• На разположение денонощно, 7 дни в седмицата',
        ru: '• Дубликат автомобильного ключа\n• Дубликат бытового ключа и чипа доступа\n• Ремонт автомобильного ключа\n• Поиск запасных компонентов\n• Выезд на место — по указанному Вами адресу\n• Работаем круглосуточно, 7 дней в неделю',
        en: '• Car key duplication\n• House key and access chip duplication\n• Car key repair\n• Sourcing replacement components\n• On-site service at an address of your choice\n• Available around the clock, 7 days a week'
      }
    }
  ];

  let LANG = 'bg';

  function tr(s, lang) {
    lang = lang || LANG;
    s = (s == null ? '' : String(s)).trim();
    if (!s || lang === 'bg') return s;
    if (MAP[s] && MAP[s][lang]) return MAP[s][lang];
    const m = s.match(/^([А-Яа-яA-Za-z]+)\s+(\d{4})$/);
    if (m && MONTHS[m[1]]) return MONTHS[m[1]][lang] + ' ' + m[2];
    const d = s.match(/^До\s+([А-Яа-я]+)\s+(\d{4})$/);
    if (d && MONTHS[d[1]]) return (lang === 'en' ? 'Until ' : 'До ') + MONTHS[d[1]][lang] + ' ' + d[2];
    let u;
    if ((u = s.match(/^(.+?)\s*сек\.?$/))) return lang === 'en' ? u[1].trim() + ' sec' : s;
    if ((u = s.match(/^([\d\s.]+)\s*к\.\s*с\.?$/))) return u[1].trim() + (lang === 'en' ? ' hp' : ' л.с.');
    if ((u = s.match(/^([\d\s]+)\s*см³$/))) return lang === 'en' ? u[1].trim() + ' cc' : s;
    return s;
  }

  const STATIC_SEL = [
    '[data-i18n]',
    '.divider span',
    '.specs-full-title',
    '.specs-full-table td',
    '.hero-table td',
    '.tag-available',
    '.tag-class',
    '.service-title',
    '.section-nav-title',
    '.back-link',
    '.contact-cta',
    '.filter-btn-pre',
    '.filter-option',
    '.service-modal-title',
    '.service-modal-text',
    '.product-sub',
    '.product-specs-title',
    '.product-specs td',
    '.product-cta'
  ].join(', ');

  function applyStatic(lang) {
    document.querySelectorAll(STATIC_SEL).forEach(el => {
      if (el.dataset.i18nBg === undefined) el.dataset.i18nBg = el.textContent.trim();
      el.textContent = tr(el.dataset.i18nBg, lang);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const h = HTML_MAP[el.dataset.i18nHtml];
      if (h) el.innerHTML = h[lang] || h.bg;
    });
  }

  function applyLang(lang) {
    LANG = lang;
    window.KA_LANG = lang;
    try { localStorage.setItem('ka_lang', lang); } catch (e) {}
    document.documentElement.lang = lang;
    applyStatic(lang);
    document.dispatchEvent(new CustomEvent('ka:lang', { detail: lang }));
  }

  function initSwitcher() {
    const sw = document.getElementById('langSwitch');
    if (!sw) return;
    const btn = document.getElementById('langBtn');
    const current = document.getElementById('langCurrentCode');
    const options = Array.from(sw.querySelectorAll('.lang-option'));
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = sw.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', () => {
      sw.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
    function sync(lang) {
      const act = options.find(o => o.dataset.lang === lang) || options[0];
      options.forEach(o => o.classList.toggle('active', o === act));
      if (current) current.textContent = act.querySelector('.lang-code').textContent;
    }
    document.addEventListener('ka:lang', e => sync(e.detail));
    options.forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        sw.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        applyLang(opt.dataset.lang);
      });
    });
    sync(LANG);
  }

  function init() {
    initSwitcher();
    let saved = 'bg';
    try { saved = localStorage.getItem('ka_lang') || 'bg'; } catch (e) {}
    applyLang(saved);
  }

  window.KA = { tr: tr, applyLang: applyLang, services: SERVICES, get lang() { return LANG; } };
  window.KA_LANG = 'bg';

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
