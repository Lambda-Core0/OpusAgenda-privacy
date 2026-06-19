document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");
  const root = document.documentElement;

  const baseTexts = Array.from(document.querySelectorAll("[data-i18n]")).reduce((acc, el) => {
    acc[el.dataset.i18n] = el.textContent.trim();
    return acc;
  }, {});

  const translations = {
    es: baseTexts,
    es: {
      title: "Política de Privacidad",
      introText: "<strong>OpusAgenda</strong> funciona íntegramente de forma local en el dispositivo.",
      dataTitle: "Datos del usuario",
      dataText: "Esta aplicación no recopila, almacena ni transmite datos personales a servidores externos.",
      storageTitle: "Almacenamiento",
      storageText: "Toda la información, incluyendo tareas, categorías, notas, audios y archivos, se guarda únicamente en el dispositivo del usuario mediante almacenamiento local.",
      permTitle: "Acceso a permisos",
      permText: "La aplicación puede solicitar permisos como micrófono o acceso a archivos locales.",
      extTitle: "Servicios externos",
      extText: "La aplicación no utiliza servicios de análisis, publicidad ni seguimiento de usuarios.",
      contactTitle: "Contacto",
      contactText: "Puedes contactar al desarrollador a través del repositorio del proyecto.",
      lastUpdateText: "<em>Última actualización: <time datetime=\"2026-06-19\">19 de junio de 2026</time></em>"
    },
    en: {
      title: "Privacy Policy",
      introText: "<strong><strong>OpusAgenda</strong></strong> works entirely locally on the device.",
      dataTitle: "User Data",
      dataText: "This app does not collect, store, or transmit personal data.",
      storageTitle: "Storage",
      storageText: "All information is stored locally on the device.",
      permTitle: "Permissions",
      permText: "The app may request microphone and file access.",
      extTitle: "External Services",
      extText: "No analytics, ads, or tracking services are used.",
      contactTitle: "Contact",
      contactText: "Contact via the project repository.",
      lastUpdateText: "<em>Last updated: <time datetime=\"2026-06-19\">June 19, 2026</time></em>"
    },
    ar: {
      title: "سياسة الخصوصية",
      introText: "تعمل <strong>OpusAgenda</strong> بالكامل محليًا على الجهاز.",
      dataTitle: "بيانات المستخدم",
      dataText: "لا تجمع هذه التطبيق أو يخزن أو ينقل بيانات شخصية.",
      storageTitle: "التخزين",
      storageText: "يتم تخزين جميع المعلومات محليًا على الجهاز.",
      permTitle: "الأذونات",
      permText: "قد يطلب التطبيق إذن الوصول إلى الميكروفون والملفات.",
      extTitle: "الخدمات الخارجية",
      extText: "لا يتم استخدام خدمات التحليلات أو الإعلانات أو التتبع.",
      contactTitle: "التواصل",
      contactText: "اتصل عبر مستودع المشروع.",
      lastUpdateText: "<em>آخر تحديث: <time datetime=\"2026-06-19\">19 يونيو 2026</time></em>"
    },
    de: {
      title: "Datenschutzerklärung",
      introText: "<strong>OpusAgenda</strong> funktioniert vollständig lokal auf dem Gerät.",
      dataTitle: "Benutzerdaten",
      dataText: "Diese App sammelt, speichert oder überträgt keine personenbezogenen Daten.",
      storageTitle: "Speicherung",
      storageText: "Alle Informationen werden lokal auf dem Gerät gespeichert.",
      permTitle: "Berechtigungen",
      permText: "Die App kann Mikrofon- und Dateizugriff anfordern.",
      extTitle: "Externe Dienste",
      extText: "Es werden keine Analyse-, Werbe- oder Tracking-Dienste verwendet.",
      contactTitle: "Kontakt",
      contactText: "Kontakt über das Projekt-Repository.",
      lastUpdateText: "<em>Zuletzt aktualisiert: <time datetime=\"2026-06-19\">19. Juni 2026</time></em>"
    },
    fr: {
      title: "Politique de confidentialité",
      introText: "<strong>OpusAgenda</strong> fonctionne entièrement localement sur l'appareil.",
      dataTitle: "Données utilisateur",
      dataText: "Cette application ne collecte, n'enregistre ni ne transmet de données personnelles.",
      storageTitle: "Stockage",
      storageText: "Toutes les informations sont stockées localement sur l'appareil.",
      permTitle: "Autorisations",
      permText: "L'application peut demander l'accès au microphone et aux fichiers.",
      extTitle: "Services externes",
      extText: "Aucun service d'analyse, publicité ou suivi n'est utilisé.",
      contactTitle: "Contact",
      contactText: "Contact via le dépôt du projet.",
      lastUpdateText: "<em>Dernière mise à jour : <time datetime=\"2026-06-19\">19 juin 2026</time></em>"
    },
    it: {
      title: "Informativa sulla privacy",
      introText: "<strong>OpusAgenda</strong> funziona interamente in locale sul dispositivo.",
      dataTitle: "Dati utente",
      dataText: "Questa app non raccoglie, archivia o trasmette dati personali.",
      storageTitle: "Archiviazione",
      storageText: "Tutte le informazioni sono memorizzate localmente sul dispositivo.",
      permTitle: "Autorizzazioni",
      permText: "L'app potrebbe richiedere l'accesso al microfono e ai file.",
      extTitle: "Servizi esterni",
      extText: "Non vengono utilizzati servizi di analisi, pubblicità o tracciamento.",
      contactTitle: "Contatto",
      contactText: "Contatta tramite il repository del progetto.",
      lastUpdateText: "<em>Ultimo aggiornamento: <time datetime=\"2026-06-19\">19 giugno 2026</time></em>"
    },
    pt: {
      title: "Política de Privacidade",
      introText: "O <strong>OpusAgenda</strong> funciona inteiramente localmente no dispositivo.",
      dataTitle: "Dados do usuário",
      dataText: "Este app não coleta, armazena ou transmite dados pessoais.",
      storageTitle: "Armazenamento",
      storageText: "Todas as informações são armazenadas localmente no dispositivo.",
      permTitle: "Permissões",
      permText: "O app pode solicitar acesso ao microfone e arquivos.",
      extTitle: "Serviços externos",
      extText: "Não são usados serviços de análise, anúncios ou rastreamento.",
      contactTitle: "Contato",
      contactText: "Entre em contato via o repositório do projeto.",
      lastUpdateText: "<em>Última atualização: <time datetime=\"2026-06-19\">19 de junho de 2026</time></em>"
    },
    ru: {
      title: "Политика конфиденциальности",
      introText: "<strong>OpusAgenda</strong> работает полностью локально на устройстве.",
      dataTitle: "Данные пользователя",
      dataText: "Это приложение не собирает, не хранит и не передает персональные данные.",
      storageTitle: "Хранение",
      storageText: "Вся информация хранится локально на устройстве.",
      permTitle: "Разрешения",
      permText: "Приложение может запрашивать доступ к микрофону и файлам.",
      extTitle: "Внешние сервисы",
      extText: "Сервисы аналитики, рекламы или отслеживания не используются.",
      contactTitle: "Контакты",
      contactText: "Свяжитесь через репозиторий проекта.",
      lastUpdateText: "<em>Последнее обновление: <time datetime=\"2026-06-19\">19 июня 2026</time></em>"
    },
    ja: {
      title: "プライバシーポリシー",
      introText: "<strong>OpusAgenda</strong>はデバイス上ですべてローカルに動作します。",
      dataTitle: "ユーザーデータ",
      dataText: "このアプリは個人データを収集、保存、送信しません。",
      storageTitle: "保存",
      storageText: "すべての情報はデバイス上にローカルに保存されます。",
      permTitle: "権限",
      permText: "アプリはマイクやファイルへのアクセスを要求する場合があります。",
      extTitle: "外部サービス",
      extText: "分析、広告、追跡サービスは使用されません。",
      contactTitle: "お問い合わせ",
      contactText: "プロジェクトリポジトリから連絡してください。",
      lastUpdateText: "<em>最終更新: <time datetime=\"2026-06-19\">2026年6月19日</time></em>"
    },
    ko: {
      title: "개인정보처리방침",
      introText: "<strong>OpusAgenda</strong>는 기기에서 완전히 로컬로 작동합니다.",
      dataTitle: "사용자 데이터",
      dataText: "이 앱은 개인 데이터를 수집, 저장 또는 전송하지 않습니다.",
      storageTitle: "저장소",
      storageText: "모든 정보는 기기에 로컬로 저장됩니다.",
      permTitle: "권한",
      permText: "앱이 마이크 및 파일 접근을 요청할 수 있습니다.",
      extTitle: "외부 서비스",
      extText: "분석, 광고 또는 추적 서비스는 사용되지 않습니다.",
      contactTitle: "연락처",
      contactText: "프로젝트 저장소를 통해 연락하세요.",
      lastUpdateText: "<em>마지막 업데이트: <time datetime=\"2026-06-19\">2026년 6월 19일</time></em>"
    },
    zh: {
      title: "隐私政策",
      introText: "<strong>OpusAgenda</strong>完全在设备上本地运行。",
      dataTitle: "用户数据",
      dataText: "此应用程序不收集、存储或传输个人数据。",
      storageTitle: "存储",
      storageText: "所有信息均本地保存在设备上。",
      permTitle: "权限",
      permText: "该应用可能会请求麦克风和文件访问权限。",
      extTitle: "外部服务",
      extText: "不使用分析、广告或跟踪服务。",
      contactTitle: "联系",
      contactText: "通过项目仓库联系。",
      lastUpdateText: "<em>最后更新: <time datetime=\"2026-06-19\">2026年6月19日</time></em>"
    },
    hi: {
      title: "गोपनीयता नीति",
      introText: "<strong>OpusAgenda</strong> पूरी तरह से डिवाइस पर स्थानीय रूप से काम करता है।",
      dataTitle: "उपयोगकर्ता डेटा",
      dataText: "यह ऐप व्यक्तिगत डेटा एकत्र, संग्रहीत या स्थानांतरित नहीं करती है।",
      storageTitle: "भंडारण",
      storageText: "सारी जानकारी डिवाइस पर स्थानीय रूप से संग्रहीत की जाती है।",
      permTitle: "अनुमतियाँ",
      permText: "ऐप माइक्रोफोन और फ़ाइल एक्सेस का अनुरोध कर सकता है।",
      extTitle: "बाहरी सेवाएँ",
      extText: "कोई एनालिटिक्स, विज्ञापन या ट्रैकिंग सेवाएँ उपयोग नहीं की जातीं।",
      contactTitle: "संपर्क",
      contactText: "प्रोजेक्ट रिपॉजिटरी के माध्यम से संपर्क करें।",
      lastUpdateText: "<em>अंतिम अपडेट: <time datetime=\"2026-06-19\">19 जून 2026</time></em>"
    },
    tr: {
      title: "Gizlilik Politikası",
      introText: "<strong>OpusAgenda</strong> tamamen cihazda yerel olarak çalışır.",
      dataTitle: "Kullanıcı Verileri",
      dataText: "Bu uygulama kişisel verileri toplamaz, depolamaz veya iletmez.",
      storageTitle: "Depolama",
      storageText: "Tüm bilgiler cihazda yerel olarak saklanır.",
      permTitle: "İzinler",
      permText: "Uygulama mikrofon ve dosya erişimi isteyebilir.",
      extTitle: "Harici Servisler",
      extText: "Analiz, reklam veya izleme servisleri kullanılmaz.",
      contactTitle: "İletişim",
      contactText: "Proje deposu üzerinden iletişime geçin.",
      lastUpdateText: "<em>Son güncelleme: <time datetime=\"2026-06-19\">19 Haziran 2026</time></em>"
    },
    vi: {
      title: "Chính sách bảo mật",
      introText: "<strong>OpusAgenda</strong> hoạt động hoàn toàn cục bộ trên thiết bị.",
      dataTitle: "Dữ liệu người dùng",
      dataText: "Ứng dụng này không thu thập, lưu trữ hoặc truyền dữ liệu cá nhân.",
      storageTitle: "Lưu trữ",
      storageText: "Tất cả thông tin được lưu trữ cục bộ trên thiết bị.",
      permTitle: "Quyền hạn",
      permText: "Ứng dụng có thể yêu cầu truy cập micrô và tệp.",
      extTitle: "Dịch vụ bên ngoài",
      extText: "Không sử dụng dịch vụ phân tích, quảng cáo hoặc theo dõi.",
      contactTitle: "Liên hệ",
      contactText: "Liên hệ qua kho lưu trữ dự án.",
      lastUpdateText: "<em>Cập nhật lần cuối: <time datetime=\"2026-06-19\">19 tháng 6 năm 2026</time></em>"
    },
    nl: {
      title: "Privacybeleid",
      introText: "<strong>OpusAgenda</strong> werkt volledig lokaal op het apparaat.",
      dataTitle: "Gebruikersgegevens",
      dataText: "Deze app verzamelt, slaat of verzendt geen persoonlijke gegevens.",
      storageTitle: "Opslag",
      storageText: "Alle informatie wordt lokaal op het apparaat opgeslagen.",
      permTitle: "Machtigingen",
      permText: "De app kan om microfoon- en bestands toegang vragen.",
      extTitle: "Externe diensten",
      extText: "Er worden geen analytics-, advertenties- of trackingdiensten gebruikt.",
      contactTitle: "Contact",
      contactText: "Neem contact op via de projectrepository.",
      lastUpdateText: "<em>Laatst bijgewerkt: <time datetime=\"2026-06-19\">19 juni 2026</time></em>"
    },
    pl: {
      title: "Polityka prywatności",
      introText: "<strong>OpusAgenda</strong> działa całkowicie lokalnie na urządzeniu.",
      dataTitle: "Dane użytkownika",
      dataText: "Ta aplikacja nie zbiera, nie przechowuje ani nie przesyła danych osobowych.",
      storageTitle: "Przechowywanie",
      storageText: "Wszystkie informacje są przechowywane lokalnie na urządzeniu.",
      permTitle: "Uprawnienia",
      permText: "Aplikacja może poprosić o dostęp do mikrofonu i plików.",
      extTitle: "Usługi zewnętrzne",
      extText: "Nie są używane usługi analityczne, reklamowe ani śledzące.",
      contactTitle: "Kontakt",
      contactText: "Skontaktuj się przez repozytorium projektu.",
      lastUpdateText: "<em>Ostatnia aktualizacja: <time datetime=\"2026-06-19\">19 czerwca 2026</time></em>"
    },
    ro: {
      title: "Politica de confidențialitate",
      introText: "<strong>OpusAgenda</strong> funcționează complet local pe dispozitiv.",
      dataTitle: "Date utilizator",
      dataText: "Această aplicație nu colectează, stochează sau transmite date personale.",
      storageTitle: "Stocare",
      storageText: "Toate informațiile sunt stocate local pe dispozitiv.",
      permTitle: "Permisiuni",
      permText: "Aplicația poate solicita acces la microfon și fișiere.",
      extTitle: "Servicii externe",
      extText: "Nu sunt utilizate servicii de analiză, reclame sau urmărire.",
      contactTitle: "Contact",
      contactText: "Contactați prin depozitul proiectului.",
      lastUpdateText: "<em>Ultima actualizare: <time datetime=\"2026-06-19\">19 iunie 2026</time></em>"
    },
    sv: {
      title: "Integritetspolicy",
      introText: "<strong>OpusAgenda</strong> fungerar helt lokalt på enheten.",
      dataTitle: "Användardata",
      dataText: "Denna app samlar inte in, lagrar eller överför personuppgifter.",
      storageTitle: "Lagring",
      storageText: "All information lagras lokalt på enheten.",
      permTitle: "Behörigheter",
      permText: "Appen kan begära åtkomst till mikrofon och filer.",
      extTitle: "Externa tjänster",
      extText: "Inga analys-, annons- eller spårningstjänster används.",
      contactTitle: "Kontakt",
      contactText: "Kontakta via projektförvaret.",
      lastUpdateText: "<em>Senast uppdaterad: <time datetime=\"2026-06-19\">19 juni 2026</time></em>"
    },
    th: {
      title: "นโยบายความเป็นส่วนตัว",
      introText: "<strong>OpusAgenda</strong> ทำงานทั้งหมดในเครื่องบนอุปกรณ์",
      dataTitle: "ข้อมูลผู้ใช้",
      dataText: "แอปนี้จะไม่รวบรวม เก็บ หรือส่งข้อมูลส่วนบุคคลใด ๆ",
      storageTitle: "การจัดเก็บ",
      storageText: "ข้อมูลทั้งหมดจะถูกจัดเก็บไว้ในอุปกรณ์โดยตรง",
      permTitle: "สิทธิ์",
      permText: "แอปอาจขอสิทธิ์เข้าถึงไมโครโฟนและไฟล์",
      extTitle: "บริการภายนอก",
      extText: "ไม่มีการใช้บริการวิเคราะห์ โฆษณา หรือการติดตาม",
      contactTitle: "ติดต่อ",
      contactText: "ติดต่อผ่านที่เก็บโครงการ",
      lastUpdateText: "<em>อัปเดตล่าสุด: <time datetime=\"2026-06-19\">19 มิถุนายน 2569</time></em>"
    },
    uk: {
      title: "Політика конфіденційності",
      introText: "<strong>OpusAgenda</strong> працює повністю локально на пристрої.",
      dataTitle: "Дані користувача",
      dataText: "Цей додаток не збирає, не зберігає та не передає персональні дані.",
      storageTitle: "Зберігання",
      storageText: "Вся інформація зберігається локально на пристрої.",
      permTitle: "Дозволи",
      permText: "Додаток може запитувати доступ до мікрофону та файлів.",
      extTitle: "Зовнішні сервіси",
      extText: "Не використовуються сервіси аналітики, реклами чи відстеження.",
      contactTitle: "Контакт",
      contactText: "Зв'яжіться через репозиторій проекту.",
      lastUpdateText: "<em>Останнє оновлення: <time datetime=\"2026-06-19\">19 червня 2026</time></em>"
    },
    id: {
      title: "Kebijakan Privasi",
      introText: "<strong>OpusAgenda</strong> berfungsi sepenuhnya secara lokal di perangkat.",
      dataTitle: "Data Pengguna",
      dataText: "Aplikasi ini tidak mengumpulkan, menyimpan, atau mengirim data pribadi.",
      storageTitle: "Penyimpanan",
      storageText: "Semua informasi disimpan secara lokal di perangkat.",
      permTitle: "Izin",
      permText: "Aplikasi dapat meminta akses mikrofon dan file.",
      extTitle: "Layanan eksternal",
      extText: "Tidak menggunakan layanan analitik, iklan, atau pelacakan.",
      contactTitle: "Kontak",
      contactText: "Hubungi melalui repositori proyek.",
      lastUpdateText: "<em>Terakhir diperbarui: <time datetime=\"2026-06-19\">19 Juni 2026</time></em>"
    },
    hu: {
      title: "Adatvédelmi nyilatkozat",
      introText: "Az <strong>OpusAgenda</strong> teljesen helyben, az eszközön működik.",
      dataTitle: "Felhasználói adatok",
      dataText: "Ez az alkalmazás nem gyűjt, tárol vagy továbbít személyes adatokat.",
      storageTitle: "Tárolás",
      storageText: "Minden információ helyben, az eszközön tárolódik.",
      permTitle: "Engedélyek",
      permText: "Az alkalmazás mikrofon- és fájlhozzáférést kérhet.",
      extTitle: "Külső szolgáltatások",
      extText: "Nem használnak elemző, hirdetési vagy követési szolgáltatásokat.",
      contactTitle: "Kapcsolat",
      contactText: "Lépjen kapcsolatba a projekt tárolóján keresztül.",
      lastUpdateText: "<em>Utoljára frissítve: <time datetime=\"2026-06-19\">2026. június 19.</time></em>"
    },
    el: {
      title: "Πολιτική απορρήτου",
      introText: "Το <strong>OpusAgenda</strong> λειτουργεί πλήρως τοπικά στη συσκευή.",
      dataTitle: "Δεδομένα χρήστη",
      dataText: "Αυτή η εφαρμογή δεν συλλέγει, αποθηκεύει ή μεταδίδει προσωπικά δεδομένα.",
      storageTitle: "Αποθήκευση",
      storageText: "Όλες οι πληροφορίες αποθηκεύονται τοπικά στη συσκευή.",
      permTitle: "Δικαιώματα",
      permText: "Η εφαρμογή μπορεί να ζητήσει πρόσβαση στο μικρόφωνο και τα αρχεία.",
      extTitle: "Εξωτερικές υπηρεσίες",
      extText: "Δεν χρησιμοποιούνται υπηρεσίες ανάλυσης, διαφήμισης ή παρακολούθησης.",
      contactTitle: "Επικοινωνία",
      contactText: "Επικοινωνήστε μέσω του αποθετηρίου του έργου.",
      lastUpdateText: "<em>Τελευταία ενημέρωση: <time datetime=\"2026-06-19\">19 Ιουνίου 2026</time></em>"
    }
  };

  const savedTheme = localStorage.getItem("theme");
  const savedLang = localStorage.getItem("lang");

  function setLanguage(lang) {
    const translation = translations[lang] || baseTexts;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = translation[key] || baseTexts[key] || el.innerHTML;
      } else {
        el.textContent = translation[key] || baseTexts[key] || el.textContent;
      }
    });
    langSelect.value = lang;
    localStorage.setItem("lang", lang);
  }

  function updateTheme(theme) {
    root.setAttribute("data-theme", theme);
    const isLight = theme === "light";
    themeIcon.src = `assets/${isLight ? "sol" : "lua"}.png`;
    themeToggle.setAttribute("aria-label", isLight ? "Cambiar a tema oscuro" : "Cambiar a tema claro");
    themeToggle.title = isLight ? "Cambiar a tema oscuro" : "Cambiar a tema claro";
    localStorage.setItem("theme", theme);
  }

  const currentTheme = savedTheme || root.getAttribute("data-theme") || "dark";
  updateTheme(currentTheme);

  if (savedLang) {
    setLanguage(savedLang);
  }

  langSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });

  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    updateTheme(next);
  });
});
