import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Mail, 
  Github, 
  ExternalLink, 
  MapPin,
  FileText,
  GraduationCap,
  Code,
  Brain,
  Terminal,
  Layers,
  Linkedin,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  Award
} from 'lucide-react';

// --- DATA ---

const PROFILE = {
  name: "Ibna Kowsar",
  role: "Ph.D. Student in Computer Science",
  affiliation: "University of California, Davis",
  prevAffiliation: "Formerly: CIDA Lab, Tennessee State Univ.",
  location: "Davis, CA",
  email: "ikowsar@ucdavis.edu",
  scholarUrl: "https://scholar.google.com/citations?user=kJI4lecAAAAJ&hl=en",
  githubUrl: "https://github.com/kawseribn",
  linkedinUrl: "https://www.linkedin.com/in/ikowsar/",
  researchGateUrl: "https://www.researchgate.net/profile/Ibna-Kowsar",
  cvUrl: "/assets/papers/CV_Ibna_Kowsar__short_ (2).pdf", 
  bio: `I am a Ph.D. student in Computer Science at the University of California, Davis. My research focuses on the intersection of Deep Learning, Computer Vision, and Healthcare Informatics. I am driven by the need to make deep learning models interpretable, ensuring that AI systems are transparent and trustworthy enough for critical tasks like medical diagnosis.
  
  Before starting my Ph.D., I worked as a Research Associate at the CIDA Lab at Tennessee State University and as a Machine Learning Engineer at Apurba Technologies.`,
  interests: [
    "Deep Learning Model Interpretability",
    "Large Language Models (LLMs)",
    "Cross-Domain Transfer Learning",
    "Electronic Health Records (EHR) Analysis",
    "Self-supervised Learning"
  ]
};

const SKILL_GROUPS = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C++", "C", "SQL", "Bash"]
  },
  {
    category: "Machine Learning & AI",
    icon: Brain,
    skills: ["Deep Learning", "Computer Vision", "LLMs", "Explainable AI", "Transfer Learning", "Transformers", "Self-Supervised Learning"]
  },
  {
    category: "Frameworks & Libraries",
    icon: Layers,
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Matplotlib"]
  },
  {
    category: "Tools & Platforms",
    icon: Terminal,
    skills: ["Git", "Docker", "AWS", "LaTeX", "Flask", "FastAPI", "Vercel", "Linux"]
  }
];

const EXPERIENCE = [
  {
    role: "Research Associate",
    company: "CIDA Lab, Tennessee State University",
    period: "July 2025 - Aug 2025",
    desc: "Advancing deep learning and transfer learning techniques for medical imaging and EHR data."
  },
  {
    role: "Graduate Research Assistant",
    company: "CIDA Lab, Tennessee State University",
    period: "Aug 2023 - June 2025",
    desc: "Implemented and enhanced deep learning algorithms for image and tabular data. Investigated domain adaptation strategies."
  },
  {
    role: "Machine Learning Engineer",
    company: "Apurba Technologies Ltd.",
    period: "July 2021 - Jan 2023",
    desc: "Implemented ML systems for OCR and document analysis. Researched adversarial attacks for Bengali OCR."
  },
  {
    role: "Lecturer",
    company: "BRAC University",
    period: "Oct 2021 - Aug 2023",
    desc: "Mentored over 150 students per term. Delivered lectures for CSE110, CSE221, CSE321, CSE370, and more."
  }
];

const SERVICE = [
  "Reviewer, AMIA Symposium Workshop 2025",
  "Reviewer, IEEE International Conference on Healthcare Informatics (ICHI) 2025"
];

const NEWS = [
  { 
    date: "December 2025", 
    content: "Attended NeurIPS'2025", 
    type: "Conference",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    date: "Fall 2025", 
    content: "Started my Ph.D. in Computer Science at UC Davis.", 
    type: "Milestone",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    date: "2025", 
    content: "Paper on 'DeepIFSAC' accepted to Knowledge-Based Systems.", 
    type: "Publication",
    color: "from-emerald-500 to-green-500"
  },
  { 
    date: "2024", 
    content: "Presented 'Attention-based imputation' at IEEE ICHI 2024.", 
    type: "Conference",
    color: "from-purple-500 to-pink-500"
  }
];

const PUBLICATIONS = [
  {
    id: "deepifsac-2025",
    title: "DeepIFSAC: Deep imputation of missing values using feature and sample attention within contrastive framework",
    authors: "I Kowsar, SB Rabbani, Y Hou, MD Samad",
    venue: "Knowledge-Based Systems",
    year: 2025,
    link: "https://doi.org/10.1016/j.knosys.2025.113506", 
    tags: ["Deep Learning", "Imputation"]
  },
  {
    id: "llm-transplant-2025",
    title: "LLM Attention Transplant for Transfer Learning of Tabular Data Across Disparate Domains",
    authors: "I Kowsar, KF Akhter, MD Samad",
    venue: "arXiv preprint arXiv:2511.06161",
    year: 2025,
    link: "https://arxiv.org/abs/2511.06161", 
    tags: ["LLM", "Transfer Learning"]
  },
  {
    id: "ichi-2024",
    title: "Attention-based imputation of missing values in electronic health records tabular data",
    authors: "I Kowsar, SB Rabbani, MD Samad",
    venue: "IEEE 12th International Conference on Healthcare Informatics (ICHI)",
    year: 2024,
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11463999/",
    tags: ["EHR", "Attention"]
  },
  {
    id: "contrastive-2024",
    title: "Contrastive Domain Adaptation by Minimizing Divergence in Source-Target Image Distributions",
    authors: "I Kowsar, SB Rabbani, KFB Akhter, MD Samad",
    venue: "8th International Conference on Imaging, Signal Processing and Communication",
    year: 2024,
    link: "https://ieeexplore.ieee.org/document/10677715",
    tags: ["Computer Vision", "Domain Adaptation"]
  },
  {
    id: "ictp-2023",
    title: "Deep clustering of electronic health records tabular data for clinical interpretation",
    authors: "I Kowsar, SB Rabbani, KFB Akhter, MD Samad",
    venue: "IEEE International Conference on Telecommunications and Photonics (ICTP)",
    year: 2023,
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11255553/", 
    tags: ["Clustering", "EHR"]
  },
  {
    id: "monet-2023",
    title: "A novel approach to enhance safety on drowsy driving in self-driving car",
    authors: "MM Islam, I Kowsar, MS Zaman, MFR Sakib, N Saquib, SMS Alam",
    venue: "Mobile Networks and Applications 28 (1)",
    year: 2023,
    link: "https://link.springer.com/article/10.1007/s11036-022-01932-8", 
    tags: ["Autonomous Systems"]
  },
  {
    id: "icpr-2022",
    title: "A Deep Learning-based Unified Solution for Character Recognition",
    authors: "A Das, AKMSA Rabby, I Kowsar, F Rahman",
    venue: "26th International Conference on Pattern Recognition (ICPR)",
    year: 2022,
    link: "https://ieeexplore.ieee.org/document/9956348", 
    tags: ["OCR", "Pattern Recognition"]
  },
  {
    id: "tensymp-2020",
    title: "An algorithmic approach to driver drowsiness detection for ensuring safety in an autonomous car",
    authors: "MM Islam, I Kowsar, MS Zaman, MFR Sakib, N Saquib",
    venue: "IEEE Region 10 Symposium (TENSYMP)",
    year: 2020,
    link: "https://ieeexplore.ieee.org/document/9230766", 
    tags: ["Computer Vision"]
  }
];

const EDUCATION = [
  {
    school: "University of California, Davis",
    degree: "Ph.D. in Computer Science",
    year: "2025 - Present",
  },
  {
    school: "Tennessee State University",
    degree: "M.Sc. in Computer Science",
    year: "2023 - 2025",
    details: "Research Focus: Deep Learning & EHR"
  },
  {
    school: "BRAC University",
    degree: "B.Sc. in Computer Science & Engineering",
    year: "2017 - 2021",
    details: "Highest Distinction (CGPA: 3.87/4.00)"
  }
];

const SECTIONS = ["About", "News", "Skills", "Experience", "Publications", "Service"];

// --- COMPONENTS ---

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
           {/* Dark Mode Toggle - Upper Left */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white hidden sm:block">
            Ibna Kowsar
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {SECTIONS.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-slate-600 dark:text-slate-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-4 space-y-4 shadow-lg">
           {SECTIONS.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Sidebar = () => (
  <div className="md:col-span-1 md:sticky md:top-24 h-fit text-center md:text-left transition-colors duration-300">
    
    {/* Profile Photo */}
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto md:mx-0 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-700 shadow-lg mb-5 transition-colors duration-300">
       {/* IMAGE PATH NOTE: This assumes the image is in public/assets/img/Dp.JPG */}
       <img 
         src="/assets/img/Dp.JPG" 
         alt={PROFILE.name} 
         className="w-full h-full object-cover"
         onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Ibna+Kowsar&background=random"; }} 
       />
    </div>

    <div className="space-y-2 mb-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">{PROFILE.name}</h1>
      <p className="text-blue-600 dark:text-blue-400 font-medium text-base">{PROFILE.role}</p>
      <p className="text-slate-600 dark:text-slate-400 text-xs">{PROFILE.affiliation}</p>
      <p className="text-slate-500 dark:text-slate-500 text-xs pt-1 flex items-center justify-center md:justify-start gap-1">
        <MapPin size={12} /> {PROFILE.location}
      </p>
    </div>

    {/* Social Links - UPDATED with target="_blank" */}
    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
      <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex justify-center items-center gap-2 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors text-xs font-bold shadow-sm">
        <FileText size={14} /> Curriculum Vitae
      </a>
      
      <div className="flex gap-2 mt-2 md:mt-0">
        <a href={`mailto:${PROFILE.email}`} className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors" title="Email">
            <Mail size={18} />
        </a>
        <a href={PROFILE.scholarUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors" title="Google Scholar">
            <GraduationCap size={18} />
        </a>
        <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors" title="GitHub">
            <Github size={18} />
        </a>
        <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors" title="LinkedIn">
            <Linkedin size={18} />
        </a>
        <a href={PROFILE.researchGateUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors" title="ResearchGate">
            <Globe size={18} />
        </a>
      </div>
    </div>

    <div className="hidden md:block w-full h-px bg-slate-200 dark:bg-slate-700 my-5" />

    {/* Education Desktop */}
    <div className="hidden md:block space-y-4">
       <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Education</h3>
       <div className="space-y-4">
         {EDUCATION.map((edu, idx) => (
           <div key={idx} className="relative pl-3 border-l-2 border-slate-200 dark:border-slate-700">
             <div className="font-bold text-slate-800 dark:text-slate-200 text-xs">{edu.school}</div>
             <div className="text-[11px] text-slate-600 dark:text-slate-400">{edu.degree}</div>
             <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{edu.year}</div>
           </div>
         ))}
       </div>
    </div>

    <div className="hidden md:block w-full h-px bg-slate-200 dark:bg-slate-700 my-5" />

    {/* Visitors Map Section */}
    <div className="hidden md:block">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Visitors</h3>
      <div className="w-full h-28 bg-slate-100 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center text-[10px] text-slate-400 border border-slate-200 dark:border-slate-700 overflow-hidden">
         <div className="relative w-full h-full bg-slate-50 dark:bg-slate-900 p-2">
             <div className="absolute inset-0 flex items-center justify-center text-center p-2 opacity-50">
                <MapPin className="mb-1" size={14}/> 
                <span>Visitor Map Widget</span>
             </div>
         </div>
      </div>
    </div>

  </div>
);

const PublicationItem = ({ pub }) => (
  <div className="flex flex-col sm:flex-row gap-3 group p-3 -mx-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300">
    {/* Year Marker */}
    <div className="hidden sm:block flex-shrink-0 w-12 pt-1 text-right text-xs font-bold text-slate-400 dark:text-slate-500">
      {pub.year}
    </div>
    
    <div className="flex-1 space-y-1.5">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
        <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {pub.title}
        </h4>
        <span className="sm:hidden text-xs font-bold text-slate-500 mb-1">{pub.year}</span>
      </div>
      
      <div className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
        {pub.authors.replace("I Kowsar", "I. Kowsar").replace("Ibna Kowsar", "I. Kowsar")}
      </div>
      
      <div className="flex flex-wrap items-center gap-2 text-xs mt-1">
        <span className="italic text-slate-500 dark:text-slate-500">{pub.venue}</span>
        {pub.link && (
          <a 
            href={pub.link} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 font-bold uppercase tracking-wide transition-colors"
          >
            <ExternalLink size={10} /> Paper / DOI
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 transition-colors duration-300 text-sm ${darkMode ? 'bg-slate-900 text-slate-300' : 'bg-white text-slate-700'}`}>
      
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <div className="max-w-6xl mx-auto px-6 py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 relative">
          
          {/* --- LEFT COLUMN: PROFILE --- */}
          <Sidebar />

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <main className="md:col-span-3 space-y-12">
            
            {/* About Section */}
            <section id="about" className="space-y-4 scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">About Me</h2>
              <div className="prose prose-sm dark:prose-invert max-w-none leading-relaxed space-y-3 text-slate-700 dark:text-slate-300">
                 {PROFILE.bio.split('\n').map((paragraph, i) => (
                   <p key={i}>{paragraph}</p>
                 ))}
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-700 mt-4 transition-colors duration-300">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
                  <Brain size={16} className="text-blue-500"/> Research Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PROFILE.interests.map((interest, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs border border-slate-200 dark:border-slate-600 shadow-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* News / Updates Section */}
            <section id="news" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">Latest News</h2>
              <div className="grid gap-3">
                {NEWS.map((item, idx) => (
                   <div key={idx} className="relative overflow-hidden rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 shadow-sm hover:shadow-md transition-all duration-300 group">
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color}`} />
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                         <span className={`inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded text-white bg-gradient-to-r ${item.color}`}>
                           {item.type}
                         </span>
                         <span className="text-xs font-mono text-slate-400 dark:text-slate-500">{item.date}</span>
                      </div>
                      <p className="text-sm text-slate-800 dark:text-slate-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.content}
                      </p>
                   </div>
                ))}
              </div>
            </section>

            {/* Technical Skills Section */}
            <section id="skills" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">Technical Skills</h2>
              <div className="space-y-6">
                {SKILL_GROUPS.map((group, idx) => (
                  <div key={idx}>
                    <h3 className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                      <group.icon size={16} className="text-blue-600 dark:text-blue-400" />
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2 mb-6">Experience</h2>
              <div className="space-y-8">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="group relative pl-6 border-l-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.period}</span>
                    </div>
                    <div className="text-blue-700 dark:text-blue-400 text-sm font-medium mb-2">{exp.company}</div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl text-sm">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Publications Section */}
            <section id="publications" className="scroll-mt-20">
              <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-700 pb-2 mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Selected Publications</h2>
                <a href={PROFILE.scholarUrl} target="_blank" rel="noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium">
                   View Google Scholar <ExternalLink size={12} />
                </a>
              </div>

              <div className="space-y-2">
                {PUBLICATIONS.map((pub) => (
                  <PublicationItem key={pub.id} pub={pub} />
                ))}
              </div>
            </section>

            {/* NEW: Professional Service Section */}
            <section id="service" className="scroll-mt-20">
               <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">Professional Service</h2>
               <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 shadow-sm">
                 <ul className="space-y-3">
                   {SERVICE.map((item, idx) => (
                     <li key={idx} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                       <Award size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                       <span>{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </section>

            {/* Mobile-only Education Block */}
            <div className="md:hidden pt-6 border-t border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Education</h2>
              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                   <div key={idx}>
                     <div className="font-bold text-slate-800 dark:text-slate-200">{edu.school}</div>
                     <div className="text-xs text-slate-600 dark:text-slate-400">{edu.degree}</div>
                     <div className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{edu.year}</div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Mobile Visitor Map */}
            <div className="md:hidden pt-6 border-t border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Visitor Map</h2>
              <div className="w-full h-28 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-slate-200 dark:border-slate-700">
                 <div className="text-center opacity-50">
                    <MapPin className="mx-auto mb-1" size={14}/> 
                    <span>Visitor Map Widget</span>
                 </div>
              </div>
            </div>

            <footer className="pt-12 mt-12 border-t border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-4 transition-colors duration-300">
              <p>© {new Date().getFullYear()} Ibna Kowsar</p>
              <p>Academic Portfolio</p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}
