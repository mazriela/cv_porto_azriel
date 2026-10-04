export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "fintech" | "enterprise" | "ecommerce" | "lifestyle";
  description: string;
  image: string;
  tags: string[];
  role: string;
  keyFeatures: string[];
  architecture: string;
  impact: string;
}

export interface Book {
  id: string;
  title: string;
  tagline: string;
  coverImage: string;
  description: string;
  topics: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  language: string;
  year: string;
}

export interface TrainingItem {
  id: string;
  client: string;
  location: string;
  role: string;
  date: string;
  image: string;
  description: string;
  topics: string[];
  attendees: string;
}

export interface Certificate {
  id: string;
  title: string;
  event: string;
  organizer: string;
  rank: string;
  year: string;
  image: string;
  badge: "Gold" | "Silver" | "Finalist";
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Full-time" | "Project-based" | "Freelance" | "Internship";
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  focus: string;
  achievements: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    shortBio: string;
    fullBio: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    profileImage: string;
    cvUrl: string;
    stats: { label: string; value: string; icon: string }[];
  };
  skills: {
    mobile: { name: string; level: number; category: string }[];
    architecture: { name: string; level: number; category: string }[];
    backendAndDb: { name: string; level: number; category: string }[];
    creativeAndDrone: { name: string; level: number; category: string }[];
    toolsAndWorkflow: { name: string; level: number; category: string }[];
  };
  projects: Project[];
  books: Book[];
  trainings: TrainingItem[];
  certificates: Certificate[];
  experiences: Experience[];
  education: Education[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Muhamad Azriel Akbar",
    title: "Senior Mobile Engineer & Creative Technologist",
    shortBio: "Specializing in enterprise Flutter & native Android architecture, high-performance mobile systems, and licensed aerial drone operations.",
    fullBio: "A highly curious and enthusiastic Mobile Developer with 5+ years of dedicated professional experience, constantly exploring next-generation mobile technologies and clean architectural methodologies. Specialized in engineering mission-critical mobile platforms tailored to enterprise scale (Fintech, State Apparatus, Oil & Gas), complemented by extensive background in IT infrastructure management, corporate developer training, and licensed aerial cinematography.",
    email: "zriel789@gmail.com",
    phone: "+62 821 2035 1636",
    location: "Perumahan Villa Indah Permai Blok H32/16, Bekasi Utara, Indonesia",
    linkedin: "https://www.linkedin.com/in/muhamad-azriel-akbar",
    github: "https://github.com/azrielakbar",
    profileImage: "/assets/profile-azriel.png",
    cvUrl: "/Muhamad_Azriel_Akbar_CV.pdf",
    stats: [
      { label: "Years Experience", value: "5+", icon: "Briefcase" },
      { label: "Production Apps", value: "8+", icon: "Smartphone" },
      { label: "Books Published", value: "4", icon: "BookOpen" },
      { label: "National Awards", value: "5", icon: "Trophy" },
      { label: "Engineers Trained", value: "100+", icon: "GraduationCap" },
    ],
  },

  skills: {
    mobile: [
      { name: "Flutter & Dart", level: 95, category: "Mobile" },
      { name: "Kotlin (Native Android)", level: 90, category: "Mobile" },
      { name: "Java (Native Android)", level: 88, category: "Mobile" },
      { name: "Android Studio & Toolchains", level: 95, category: "Mobile" },
      { name: "RxAndroid & Coroutines", level: 85, category: "Mobile" },
      { name: "Jetpack Compose", level: 80, category: "Mobile" },
    ],
    architecture: [
      { name: "BLoC Pattern", level: 92, category: "Architecture" },
      { name: "Provider & State Management", level: 90, category: "Architecture" },
      { name: "MVVM & MVP Patterns", level: 92, category: "Architecture" },
      { name: "Repository Pattern", level: 90, category: "Architecture" },
      { name: "Clean Architecture", level: 88, category: "Architecture" },
      { name: "Offline Sync & Caching", level: 85, category: "Architecture" },
    ],
    backendAndDb: [
      { name: "RESTful API Integration", level: 95, category: "Backend" },
      { name: "Retrofit & HTTP Clients", level: 94, category: "Backend" },
      { name: "PHP & API Services", level: 82, category: "Backend" },
      { name: "Laravel Framework", level: 80, category: "Backend" },
      { name: "CodeIgniter Framework", level: 78, category: "Backend" },
      { name: "SQLite & SQFlite", level: 88, category: "Backend" },
      { name: "Postman API Testing", level: 92, category: "Backend" },
    ],
    creativeAndDrone: [
      { name: "DJI Drone Pilot Operations", level: 92, category: "Creative" },
      { name: "Adobe Premiere Pro", level: 85, category: "Creative" },
      { name: "Adobe After Effects", level: 80, category: "Creative" },
      { name: "CapCut & Social Video", level: 90, category: "Creative" },
      { name: "Figma UI/UX Prototyping", level: 85, category: "Creative" },
      { name: "Canva Design Suite", level: 88, category: "Creative" },
    ],
    toolsAndWorkflow: [
      { name: "Git, GitHub & GitLab", level: 92, category: "Workflow" },
      { name: "Scrum & Agile Methodologies", level: 90, category: "Workflow" },
      { name: "QA Release & CI/CD Support", level: 88, category: "Workflow" },
      { name: "MS Excel & Visual Basic (Macros)", level: 85, category: "Workflow" },
      { name: "IT Infrastructure & Licensing", level: 86, category: "Workflow" },
      { name: "Technical Training & Mentorship", level: 94, category: "Workflow" },
    ],
  },

  projects: [
    {
      id: "dumi-asn",
      title: "Dumi - Sahabat ASN Indonesia",
      subtitle: "Official Digital Financial Platform for Civil Servants",
      category: "fintech",
      description: "Comprehensive financial services & automated micro-loan platform specifically built for Indonesian State Civil Apparatus (ASN/PNS) with seamless salary-deduction integration and high-security compliance.",
      image: "/assets/app-dumi-asn.png",
      tags: ["Flutter", "Kotlin", "Retrofit", "MVVM", "REST API", "Fintech"],
      role: "Lead Mobile Developer",
      keyFeatures: [
        "Automated loan application & instant eligibility assessment",
        "Encrypted biometric e-KYC and digital signature verification",
        "Direct salary payroll integration for automated installment deduction",
        "Real-time notifications, payment ledger, and digital statement generation"
      ],
      architecture: "Clean Architecture with BLoC State Management & Repository Pattern",
      impact: "Adopted nationwide across government agencies with thousands of active ASN users."
    },
    {
      id: "tomi-mitra",
      title: "Tomi - Mitra ASN Sejahtera",
      subtitle: "B2B Business Partnership & Franchise Management",
      category: "enterprise",
      description: "Dedicated mobile platform empowering Indonesian civil servants to explore, purchase, and manage competitive franchise business packages and SME entrepreneurship programs.",
      image: "/assets/app-tomi-mitra.png",
      tags: ["Flutter", "Dart", "Provider", "REST API", "E-Commerce"],
      role: "Mobile App Developer",
      keyFeatures: [
        "Curated catalog of high-performing franchise packages (Bakso Wong Djojo, Kedai, Warung)",
        "Direct business partnership application and contract monitoring",
        "Automated point-of-sale reporting and revenue-sharing analytics",
        "Integrated digital payment channels and investment tracking"
      ],
      architecture: "Modular MVVM with Provider State Management and Local Secure Storage",
      impact: "Enabled hundreds of civil servants to launch sustainable side ventures seamlessly."
    },
    {
      id: "dumi-verval",
      title: "Dumi - Verifikasi & Validasi (VerVal)",
      subtitle: "Internal Field Verification & Compliance System",
      category: "enterprise",
      description: "High-security corporate verification app for internal auditors and risk assessment officers to validate identity documents, credit scores, and physical survey checklists.",
      image: "/assets/app-dumi-verval.png",
      tags: ["Kotlin", "Android Java", "Retrofit", "SQLite", "Camera API", "Security"],
      role: "Mobile Systems Engineer",
      keyFeatures: [
        "High-definition document capture with automated skew correction and watermarking",
        "Field agent GPS geofencing & fraud prevention checks",
        "Multi-stage digital approval workflows with role-based access control",
        "Offline-first survey data caching with background background auto-sync"
      ],
      architecture: "Native Android Architecture Components with Room DB & WorkManager",
      impact: "Cut loan verification turnaround time by 65% while reducing fraud risk to near-zero."
    },
    {
      id: "dumi-pensiun",
      title: "Dumi Pensiun",
      subtitle: "Specialized Financial Services for Retired Civil Servants",
      category: "fintech",
      description: "Tailored mobile application designed specifically with high accessibility, large typography, and simplified workflows for retired state officials to access retirement funds and benefits.",
      image: "/assets/app-dumi-pensiun.png",
      tags: ["Flutter", "Dart", "Accessibility", "MVVM", "Fintech"],
      role: "Mobile Developer & UX Specialist",
      keyFeatures: [
        "Accessibility-first UI/UX tailored for senior citizens with voice guidance prompts",
        "Simplified document upload with real-time face liveness detection",
        "Dedicated emergency assistance helpline and pension loan calculator",
        "Biometric one-touch login with SMS OTP redundancy"
      ],
      architecture: "Flutter Clean Architecture with Provider & Hardware Biometrics Plugin",
      impact: "Praised by retirement communities for intuitive, friction-free loan onboarding."
    },
    {
      id: "pertamina-ep",
      title: "Pertamina EP Apps",
      subtitle: "Enterprise Field Exploration & Asset Tracking Platform",
      category: "enterprise",
      description: "Mission-critical internal enterprise application engineered for PT Pertamina EP oil and gas exploration teams to monitor equipment status, field logs, and team dispatches.",
      image: "/assets/app-pertamina-ep.png",
      tags: ["Android Java", "Kotlin", "SQLite", "REST API", "Enterprise"],
      role: "Mobile Developer",
      keyFeatures: [
        "Real-time operational dashboard for oil exploration equipment and telemetry",
        "Emergency incident reporting with high-priority push dispatching",
        "Standard operating procedure (SOP) digital checklist and QA signoffs",
        "Offline operational capability for remote field exploration sites"
      ],
      architecture: "Native Android MVP with SQLite Local Cache and Sync Adapter",
      impact: "Enhanced operational reporting speed and safety compliance in oil exploration zones."
    },
    {
      id: "dec-club",
      title: "Diamond Exponential Club App",
      subtitle: "Exclusive VIP Membership, Rewards & Lifestyle Catalog",
      category: "lifestyle",
      description: "Luxury digital membership application featuring VIP privileges, high-end fine jewelry catalogs, reward point redemption, and exclusive networking events.",
      image: "/assets/app-dec-club.png",
      tags: ["Flutter", "Dart", "Payment Gateway", "Figma", "BLoC"],
      role: "Mobile Application Developer",
      keyFeatures: [
        "Interactive high-resolution 360-degree jewelry catalog and virtual try-on assets",
        "Tiered loyalty reward system with dynamic QR membership card",
        "Private concierge booking & VIP event reservation",
        "Secure digital payment gateway integration for luxury asset reservations"
      ],
      architecture: "BLoC State Management with Custom Glassmorphism UI Components",
      impact: "Streamlined member engagement and elevated luxury brand retention by 40%."
    },
    {
      id: "pondok-mart",
      title: "Pondok Mart Apps",
      subtitle: "Pesantren Boarding School E-Commerce Ecosystem",
      category: "ecommerce",
      description: "Community-driven digital commerce ecosystem connecting Islamic Boarding Schools (Pondok Pesantren), santri students, parents, and local sharia MSME cooperative stores.",
      image: "/assets/app-pondok-mart.png",
      tags: ["Android Java", "Kotlin", "PHP API", "SQLite", "E-Commerce"],
      role: "Mobile Developer",
      keyFeatures: [
        "Cashless student allowance management with parent top-up authorization",
        "Halal merchant marketplace for pesantren cooperatives and student groceries",
        "Barcode/QR code scanning for express dormitory store checkouts",
        "Delivery tracking to student dormitory complexes"
      ],
      architecture: "Android Native MVVM with RESTful PHP Backend Integration",
      impact: "Digitized transactions for Islamic boarding schools, replacing manual cash vouchers."
    },
    {
      id: "sahabat-muslim",
      title: "Sahabat Muslim Apps",
      subtitle: "Islamic Community Utility, Prayer Calculation & Quran",
      category: "lifestyle",
      description: "Comprehensive religious companion application offering high-precision astronomical prayer calculation, digital Quran recitation, community agenda, and donation gateway.",
      image: "/assets/app-sahabat-muslim.png",
      tags: ["Java Android", "Kotlin", "GPS Sensor", "SQLite", "Audio Engine"],
      role: "Mobile Developer",
      keyFeatures: [
        "Offline astronomical prayer calculation based on device GPS coordinates",
        "Interactive Digital Quran with audio recitation reciters and bookmarking",
        "Qibla compass orientation using hardware geomagnetic sensors",
        "Local mosque event calendar and integrated infaq/waqf donation portal"
      ],
      architecture: "Native Android Architecture with SensorManager and MediaPlayer Service",
      impact: "Featured in educational competitions and downloaded by community members."
    }
  ],

  books: [
    {
      id: "kotlin-zero-to-hero",
      title: "Kotlin Zero to Hero",
      tagline: "The Definitive Modern Guide to Kotlin for Android",
      coverImage: "/assets/book-kotlin-zero-to-hero.png",
      description: "A comprehensive handbook taking developers from fundamental programming syntax to modern asynchronous development with Coroutines, Flow, and clean Android architecture.",
      topics: ["Kotlin Fundamentals", "Null Safety", "Coroutines & Flow", "Object-Oriented & Functional", "Android Studio Integration"],
      level: "Beginner" as const,
      language: "Indonesian",
      year: "2019"
    },
    {
      id: "android-java-basic",
      title: "Android Java Basic",
      tagline: "Foundational Native Android Development",
      coverImage: "/assets/book-android-java-basic.png",
      description: "Master the bedrock principles of native Android engineering. Covers Activities, Fragments, Intent mechanisms, UI Layouts, and foundational lifecycle management using Java.",
      topics: ["Activity & Fragment Lifecycles", "XML Layout Design", "Intents & Broadcast Receivers", "Event Listeners", "Basic SQLite DB"],
      level: "Beginner" as const,
      language: "Indonesian",
      year: "2018"
    },
    {
      id: "android-java-intermediate",
      title: "Android Java Intermediate",
      tagline: "Production-Grade Architectures & REST Integration",
      coverImage: "/assets/book-android-java-intermediate.png",
      description: "Deep dive into advanced design patterns, Retrofit network communication, JSON parsing, background threading with RxAndroid, and secure SQLite persistence.",
      topics: ["Retrofit & OkHttp", "JSON Parsing with Gson", "MVP Pattern", "RxAndroid & Schedulers", "Complex Recycler Adapters"],
      level: "Intermediate" as const,
      language: "Indonesian",
      year: "2019"
    },
    {
      id: "android-kotlin-intermediate",
      title: "Android Kotlin Intermediate",
      tagline: "Architecting Modern Android Apps with Jetpack & MVVM",
      coverImage: "/assets/book-android-kotlin-intermediate.png",
      description: "Focused on enterprise software engineering standards for Android: MVVM, LiveData, StateFlow, Room Database, Dependency Injection, and Unit Testing.",
      topics: ["MVVM with ViewModel & LiveData", "Room Database & DAOs", "Repository Architecture", "Coroutines in ViewModelScope", "Dependency Injection"],
      level: "Intermediate" as const,
      language: "Indonesian",
      year: "2019"
    }
  ],

  trainings: [
    {
      id: "batan-nuklir",
      client: "BATAN (Badan Tenaga Nuklir Nasional)",
      location: "Tangerang, Banten",
      role: "Lead Corporate Android Instructor",
      date: "Corporate Training Program",
      image: "/assets/training-batan-nuklir.png",
      description: "Conducted intensive inhouse native Android development training for scientific engineers and IT staff at Indonesia's National Nuclear Energy Agency, focusing on secure enterprise mobile data collection.",
      topics: ["Native Android Architecture", "Offline Data Caching", "Hardware Sensor Integration", "Enterprise Security"],
      attendees: "Nuclear Agency Software Engineers & IT Specialists"
    },
    {
      id: "varash-bali",
      client: "PT. Varash Saddan Nusantara",
      location: "Denpasar, Bali",
      role: "Lead Corporate Flutter Trainer",
      date: "Corporate Training Program",
      image: "/assets/training-varash-bali.png",
      description: "Delivered hands-on enterprise Flutter training for corporate software engineers at herbal health enterprise PT Varash Saddan Nusantara, transitioning their legacy web tools to cross-platform mobile apps.",
      topics: ["Cross-Platform Flutter", "BLoC State Management", "Custom Animation & Theming", "Payment & Inventory API"],
      attendees: "Corporate IT & Mobile Engineering Division"
    },
    {
      id: "muhammadiyah-purwokerto",
      client: "Universitas Muhammadiyah Purwokerto",
      location: "Purwokerto, Central Java",
      role: "Guest Lecturer & Intermediate Android Trainer",
      date: "Campus Technical Workshop",
      image: "/assets/training-muhammadiyah-purwokerto.png",
      description: "Empowered university IT faculty, system engineers, and top computer science students in mastering modern Android Intermediate development, REST API consumptions, and MVVM patterns.",
      topics: ["Android Intermediate", "Retrofit API Communication", "Database Architecture", "Clean Code Best Practices"],
      attendees: "University IT Staff, Lecturers & Senior Developers"
    },
    {
      id: "mitra-digital",
      client: "PT Mitra Digital Sejahtera",
      location: "Kebayoran, Jakarta Selatan",
      role: "Corporate Kotlin & Mobile Architecture Mentor",
      date: "Corporate Tech Upskilling",
      image: "/assets/training-mitra-digital.png",
      description: "Designed and conducted a targeted corporate training curriculum in Kotlin language transitions, Coroutines, and scalable mobile application design for digital agency developers.",
      topics: ["Kotlin Idioms & Coroutines", "Jetpack Architecture", "Code Review & Refactoring", "CI/CD Pipeline Setup"],
      attendees: "Mobile Development Team & Technical Leads"
    }
  ],

  certificates: [
    {
      id: "gontor-direct-2016",
      title: "2nd Winner – Islamic Apps Development Competition",
      event: "Darussalam Informatics and Robotics Competition (DIRECT 2016)",
      organizer: "Universitas Darussalam Gontor, Ponorogo",
      rank: "National 2nd Place",
      year: "2016",
      image: "/assets/cert-gontor-2016.jpeg",
      badge: "Silver",
      description: "Awarded 2nd Prize at national level among senior high schools and vocational institutions across Indonesia for exceptional mobile app innovation."
    },
    {
      id: "bukit-asam-2017",
      title: "Juara Harapan I (1st Runner-Up) Kategori Pelajar",
      event: "Lomba Pembuatan Aplikasi Edukasi Tingkat Nasional (AKSI BAF 2017)",
      organizer: "Bukit Asam Foundation, Tanjung Enim / Palembang",
      rank: "National 1st Runner-Up",
      year: "2017",
      image: "/assets/cert-bukit-asam-2017.jpeg",
      badge: "Gold",
      description: "Recognized for engineering an innovative interactive mobile educational application for national students in Palembang."
    },
    {
      id: "dinus-2017",
      title: "Finalis Tingkat Nasional (Top 10 Finalist)",
      event: "DINUS Application Competition (DINACOM 2017)",
      organizer: "Universitas Dian Nuswantoro (UDINUS), Semarang",
      rank: "National Top 10",
      year: "2017",
      image: "/assets/cert-dinus-2017.jpeg",
      badge: "Finalist",
      description: "Selected into the exclusive Top 10 National Finalists for creative application development among hundreds of nationwide entries."
    },
    {
      id: "its-mage-2016",
      title: "Finalis Application Dev Competition (Top 20 Finalist)",
      event: "Multimedia and Game Event (MAGE 2016)",
      organizer: "Institut Teknologi Sepuluh Nopember (ITS), Surabaya",
      rank: "National Top 20",
      year: "2016",
      image: "/assets/cert-its-mage-2016.jpeg",
      badge: "Finalist",
      description: "Top 20 finalist at Indonesia's prestigious technology event organized by Computer Engineering ITS Surabaya."
    },
    {
      id: "multipolar-telkom-2016",
      title: "Grand Finalis 20 Besar Aplikasi Tingkat Nasional",
      event: "Membangun Indonesia bersama Telkom University & Multipolar",
      organizer: "PT Multipolar Technology Tbk & Telkom University Bandung",
      rank: "National Top 20 Grand Finalist",
      year: "2016",
      image: "/assets/cert-telkom-multipolar-2016.jpeg",
      badge: "Finalist",
      description: "Honored among top young Indonesian application innovators solving real-world digital transformation challenges."
    }
  ],

  experiences: [
    {
      id: "cemara-muto-semesta",
      role: "Drone Pilot & Administration Staff",
      company: "PT. Cemara Muto Semesta",
      period: "Februari 2025 – Oktober 2025",
      location: "Indonesia",
      type: "Full-time",
      description: "Spearheaded drone aerial operations and administrative infrastructure for high-level supervision consultancy projects.",
      highlights: [
        "Operated commercial aerial drones for infrastructure surveillance, mapping, and photographic documentation.",
        "Produced and edited aerial cinematic footage utilizing Adobe Premiere Pro, After Effects, and CapCut.",
        "Managed comprehensive daily, weekly, and monthly operational reports with Excel automated macros (Visual Basic).",
        "Oversaw software licenses and organized corporate administrative documentation."
      ],
      technologies: ["DJI Drone Systems", "Adobe Premiere Pro", "After Effects", "CapCut", "Excel VBA", "Administrative Ops"]
    },
    {
      id: "fidac-inovasi-teknologi",
      role: "Lead Mobile Developer",
      company: "PT. Fidac Inovasi Teknologi",
      period: "November 2020 – Maret 2024",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      description: "Spearheaded architecture, development, and release cycles for high-volume enterprise financial technology solutions (Dumi ecosystem).",
      highlights: [
        "Engineered and maintained more than 3 major enterprise applications (Dumi ASN, Tomi Mitra, Dumi VerVal, Dumi Pensiun).",
        "Transformed legacy UI/UX into ultra-responsive, ergonomic interfaces, boosting user session time and comfort.",
        "Implemented rigorous MVVM and BLoC architectures with robust offline-first synchronization.",
        "Collaborated tightly with QA teams for release gating, automated issue resolution, and performance tuning."
      ],
      technologies: ["Flutter", "Kotlin", "Java Android", "BLoC", "Provider", "Retrofit", "Room/SQLite", "GitLab CI/CD", "Scrum"]
    },
    {
      id: "passion-abadi-korpora",
      role: "Mobile Developer (Project Based)",
      company: "PT. Passion Abadi Korpora",
      period: "Mei 2020 – Agustus 2020",
      location: "Jakarta, Indonesia",
      type: "Project-based",
      description: "Developed and shipped bespoke mobile application modules under demanding client project specifications.",
      highlights: [
        "Implemented high-performance mobile UI features and RESTful backend integrations.",
        "Reduced app launch latency and optimized asset loading pipelines.",
        "Maintained clear architectural documentation and delivered on-time milestones."
      ],
      technologies: ["Flutter", "Kotlin", "REST APIs", "Git", "Figma"]
    },
    {
      id: "freelance-dev",
      role: "Freelance Mobile Developer",
      company: "Independent Consultant",
      period: "Maret 2020 – April 2020",
      location: "Remote",
      type: "Freelance",
      description: "Delivered customized mobile client applications, payment gateway integrations, and API services for private clients.",
      highlights: [
        "End-to-end delivery from wireframing to Google Play Store submission.",
        "Client consultation on mobile architecture, security best practices, and server integration."
      ],
      technologies: ["Flutter", "Android Java", "PHP APIs", "Postman"]
    },
    {
      id: "rajawali-prima-teknik",
      role: "Mobile Developer & IT Support",
      company: "PT. Rajawali Prima Teknik",
      period: "Januari 2020 – Februari 2020",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      description: "Built specialized operational mobile software while maintaining corporate IT support infrastructure.",
      highlights: [
        "Developed field operational apps according to internal technical specifications.",
        "Maintained network infrastructure, local workstation security, and hardware diagnostics."
      ],
      technologies: ["Android Java", "Kotlin", "IT Support", "Hardware Diagnostic", "SQLite"]
    },
    {
      id: "koding-teknologi-asia",
      role: "Mobile Developer & Corporate Trainer",
      company: "PT. Koding Teknologi Asia",
      period: "Juli 2018 – Desember 2019",
      location: "Jakarta / Indonesia",
      type: "Full-time",
      description: "Authored technical programming books, developed client mobile apps, and instructed corporate engineering teams across Indonesia.",
      highlights: [
        "Authored 4 published technical books on Kotlin and Android development.",
        "Conducted professional inhouse developer trainings for state institutions including BATAN and PT Varash.",
        "Mentored over 100 junior engineers and university IT staff nationwide."
      ],
      technologies: ["Kotlin", "Android Java", "Technical Writing", "Curriculum Design", "Mentorship", "Public Speaking"]
    },
    {
      id: "ima-studio",
      role: "Android Developer Intern",
      company: "IMA Studio",
      period: "Januari 2016 – Januari 2017",
      location: "Jakarta, Indonesia",
      type: "Internship",
      description: "Accelerated career foundation building commercial Android apps based on client specifications.",
      highlights: [
        "Built responsive Android views and integrated JSON REST endpoints.",
        "Explored native sensor APIs, camera capture, and SQLite databases."
      ],
      technologies: ["Android Java", "XML Layouts", "REST APIs", "Git"]
    }
  ],

  education: [
    {
      school: "SMK TI MADINATUL QURAN",
      degree: "Vocational High School Diploma in Information Technology",
      period: "Januari 2015 – Juni 2018",
      focus: "IT-Based Pesantren Education, Software Engineering, Mobile Applications & Character Building",
      achievements: "Multiple National App Competition Winner representing school nationwide."
    }
  ]
};
