/* Store and Interactive Portfolio Client Engine */
const ARCH_DATA = {
  profile: {
    name: "Ar. Haseeb Ullah",
    title: "Architectural Designer & BIM Practice Lead",
    image: "assets/img/438348077_467159666264180_1363624297685461631_n.jpg",
    email: "haseebkhankpk1@gmail.com",
    phone: "+92 313 0961515",
    location: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      whatsapp: "https://wa.me/923130961515"
    }
  },

  heroSlides: [
    {
      title: "Biophilic Hillside Villa",
      status: "Under Construction",
      typology: "Residential Architecture",
      location: "Northern Mountain Ridge",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      desc: "Cantilevered sustainable residence sculpted into steep natural topography featuring localized limestone and solar envelope analysis."
    },
    {
      title: "Apex Horizon Tech Hub",
      status: "Design Development",
      typology: "Commercial Tower",
      location: "Metropolitan Central District",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85",
      desc: "A 22-storey commercial headquarters engineered with double-skin glass curtain walls and Level 400 BIM parametric coordination."
    },
    {
      title: "Minimalist Loft Atelier",
      status: "Completed",
      typology: "Interior Architecture",
      location: "Riverside Quarter",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85",
      desc: "Bespoke architectural joinery, muted terrazzo accents, and rhythmic acoustic timber battens celebrating spatial purity."
    }
  ],

  stats: [
    { value: "50+", label: "Completed Projects" },
    { value: "LOD 400", label: "BIM Precision Standards" },
    { value: "100%", label: "Sustainable & Climate Responsive" },
    { value: "8+", label: "Industry Awards & Publications" }
  ],

  projects: [
    {
      id: "p1",
      title: "The Stone Cantilever Residence",
      category: "Residential",
      year: "2025",
      location: "Northern Terraces",
      client: "Private Client",
      desc: "A contemporary multi-level hillside home designed with zero-carbon footprint intentions, cascading terrace gardens, and passive solar heating.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
      ]
    },
    {
      id: "p2",
      title: "Vanguard Corporate Tower",
      category: "Commercial",
      year: "2024",
      location: "Central Business District",
      client: "Vanguard Global",
      desc: "14-floor high performance office building equipped with dynamic parametric louver shading and integrated green sky courts.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=85"
      ]
    },
    {
      id: "p3",
      title: "Serenade Penthouse Interior",
      category: "Interior",
      year: "2024",
      location: "Riverside Marina",
      client: "Private Client",
      desc: "Curated luxury interior pairing travertine marble finishes, recessed linear illumination, and handcrafted fluted woodwork.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
      ]
    },
    {
      id: "p4",
      title: "Colonial Arcade Heritage Revival",
      category: "Heritage",
      year: "2023",
      location: "Historic Walled Quarter",
      client: "Urban Conservation Trust",
      desc: "Preservation and adaptive reuse of 19th-century masonry arches, seamlessly inserting hidden HVAC and steel structural ties.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
      ]
    },
    {
      id: "p5",
      title: "Courtyard Courtesan Villa",
      category: "Residential",
      year: "2023",
      location: "Orchard Enclave",
      client: "Private Residence",
      desc: "Inspired by traditional Mughal wind-catchers and central courtyard fountains, redesigned for clean modernist sensibilities.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
      ]
    },
    {
      id: "p6",
      title: "Aura Creative Studios",
      category: "Commercial",
      year: "2022",
      location: "Design District",
      client: "Aura Media",
      desc: "Industrial warehouse conversion featuring raw concrete floors, exposed steel bow trusses, and acoustic glass meeting pods.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
      ]
    }
  ],

  services: [
    {
      icon: "fa-compass-drafting",
      title: "Architectural Design & Planning",
      desc: "From initial concept sketches to comprehensive construction documentation sets, municipal zoning approvals, and 3D spatial massing."
    },
    {
      icon: "fa-cube",
      title: "BIM & Computational Modeling",
      desc: "Parametric Revit modeling, Level of Development (LOD 200-400), structural clash detection, bill of quantities (BOQ), and BIM execution plans."
    },
    {
      icon: "fa-vr-cardboard",
      title: "3D Photorealistic Visualization",
      desc: "High-end Ray-traced exterior/interior architectural visualization, cinematic 4K walkthrough animations, and interactive VR client presentations."
    },
    {
      icon: "fa-couch",
      title: "Interior Architecture & Detailing",
      desc: "Harmonious material palettes, custom joinery, ergonomic spatial layouts, and architectural lighting plans for signature living spaces."
    },
    {
      icon: "fa-leaf",
      title: "Sustainable & Climate Analysis",
      desc: "Solar angle orientation studies, natural wind simulation, daylight harvesting strategies, and envelope energy efficiency optimization."
    },
    {
      icon: "fa-helmet-safety",
      title: "Site Supervision & Execution",
      desc: "Rigorous quality control on-site, contractor coordination, construction verification, and architectural compliance auditing."
    }
  ],

  process: [
    {
      step: "01",
      title: "Contextual Discovery & Program Brief",
      desc: "Comprehensive site topographic analysis, sun-path studies, regulatory checks, and client design aspirations."
    },
    {
      step: "02",
      title: "Conceptual Massing & Schematic Design",
      desc: "Exploring volumetric options, spatial zoning, and presenting initial 3D renderings to establish architectural language."
    },
    {
      step: "03",
      title: "Parametric BIM & Technical Drawings",
      desc: "Formulating detailed structural, MEP, architectural sets and clash-free coordination packages in Autodesk Revit."
    },
    {
      step: "04",
      title: "Construction Administration & Delivery",
      desc: "Active site supervision, material inspections, and meticulous craftsmanship oversight to guarantee exact execution."
    }
  ],

  ebooks: [
    {
      id: "b1",
      title: "BIM for Architects: Parametric Precision & Workflows",
      author: "Ar. Haseeb Ullah",
      tag: "Masterclass E-Book",
      year: "2026",
      desc: "A hands-on technical handbook explaining parametric Revit modeling, LOD 300/400 standards, and BIM automation.",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "b2",
      title: "Topographic Integration in Mountainous Architecture",
      author: "Ar. Haseeb Ullah",
      tag: "Research Paper",
      year: "2025",
      desc: "Structural stabilization methodologies, stone masonry detailing, and ecological slope water runoff strategies.",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "b3",
      title: "Commercial Facade Engineering & Thermal Dynamics",
      author: "Ar. Haseeb Ullah",
      tag: "Technical Monograph",
      year: "2024",
      desc: "Comprehensive engineering breakdown of double-skin glass curtain walls, acoustic damping, and wind load mechanics.",
      cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

// UI Engine Controller
let currentHeroIndex = 0;
let heroTimer = null;

function initHeroSlider() {
  const container = document.getElementById('heroSliderBg');
  if (!container) return;

  container.innerHTML = ARCH_DATA.heroSlides.map((slide, i) => `
    <div class="hero-slide-item ${i === 0 ? 'active' : ''}" id="heroSlide-${i}" style="background-image: url('${slide.image}');"></div>
  `).join('');

  updateHeroSlideContent(0);

  heroTimer = setInterval(() => {
    nextHeroSlide();
  }, 7000);
}

function updateHeroSlideContent(index) {
  const slide = ARCH_DATA.heroSlides[index];
  const titleEl = document.getElementById('heroCurrentTitle');
  const descEl = document.getElementById('heroCurrentDesc');
  const statusEl = document.getElementById('heroStatusBadge');
  const counterEl = document.getElementById('heroCounter');

  if (titleEl) titleEl.innerText = slide.title;
  if (descEl) descEl.innerText = slide.desc;
  if (statusEl) statusEl.innerText = `${slide.status} • ${slide.typology}`;
  if (counterEl) counterEl.innerText = `0${index + 1} / 0${ARCH_DATA.heroSlides.length}`;

  document.querySelectorAll('.hero-slide-item').forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function nextHeroSlide() {
  currentHeroIndex = (currentHeroIndex + 1) % ARCH_DATA.heroSlides.length;
  updateHeroSlideContent(currentHeroIndex);
}

function prevHeroSlide() {
  currentHeroIndex = (currentHeroIndex - 1 + ARCH_DATA.heroSlides.length) % ARCH_DATA.heroSlides.length;
  updateHeroSlideContent(currentHeroIndex);
}

// Portfolio Grid Render from live MongoDB backend API
let liveProjectsCache = [];

async function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = `
    <div class="col-12 text-center py-5">
      <div class="spinner-border text-warning" role="status"></div>
      <p class="font-mono text-secondary mt-2" style="font-size:0.85rem;">Retrieving projects from MongoDB...</p>
    </div>
  `;

  try {
    const url = filter === 'all' ? '/api/projects' : `/api/projects?category=${encodeURIComponent(filter)}`;
    const res = await fetch(url);
    const result = await res.json();
    const projects = result.data || [];
    liveProjectsCache = projects;

    if (projects.length === 0) {
      grid.innerHTML = `
        <div class="col-12 text-center py-5">
          <p class="text-secondary font-mono">No architectural projects found for this typology.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = projects.map(p => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="project-card" onclick="openProjectModal('${p._id || p.id}')">
          <div class="project-img-wrapper">
            <span class="project-category-badge">${p.category}</span>
            <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'">
          </div>
          <div class="project-info">
            <div class="project-meta">
              <span><i class="fa-solid fa-location-dot me-1 text-brass"></i>${p.location || 'Studio Project'}</span>
              <span><i class="fa-regular fa-calendar me-1 text-brass"></i>${p.year || '2026'}</span>
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.desc}</p>
            <div class="mt-auto d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-10">
              <span class="font-mono text-brass" style="font-size:0.8rem; letter-spacing:0.05em;">${p.status || 'View Blueprint'}</span>
              <i class="fa-solid fa-arrow-right text-brass"></i>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  } catch (err) {
    // If backend API is unreachable (e.g. static hosting like GitHub Pages), display built-in project portfolio
    const fallbackProjects = filter === 'all' 
      ? ARCH_DATA.projects 
      : ARCH_DATA.projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());
    liveProjectsCache = fallbackProjects;

    grid.innerHTML = fallbackProjects.map(p => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="project-card" onclick="openProjectModal('${p.id}')">
          <div class="project-img-wrapper">
            <span class="project-category-badge">${p.category}</span>
            <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'">
          </div>
          <div class="project-info">
            <div class="project-meta">
              <span><i class="fa-solid fa-location-dot me-1 text-brass"></i>${p.location || 'Studio Project'}</span>
              <span><i class="fa-regular fa-calendar me-1 text-brass"></i>${p.year || '2026'}</span>
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.desc}</p>
            <div class="mt-auto d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-10">
              <span class="font-mono text-brass" style="font-size:0.8rem; letter-spacing:0.05em;">View Blueprint</span>
              <i class="fa-solid fa-arrow-right text-brass"></i>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Project Modal Trigger using MongoDB object
function openProjectModal(id) {
  const project = liveProjectsCache.find(p => (p._id === id || p.id === id));
  if (!project) return;

  const modalTitle = document.getElementById('projectModalTitle');
  const modalBody = document.getElementById('projectModalBody');

  if (modalTitle) modalTitle.innerText = project.title;
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="mb-4 rounded-3 overflow-hidden" style="max-height: 480px;">
        <img src="${project.image}" alt="${project.title}" class="w-100 h-100 object-fit-cover" onerror="this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'">
      </div>
      <div class="row g-4 mb-4">
        <div class="col-sm-4">
          <div class="font-mono text-brass" style="font-size:0.75rem;">TYPOLOGY</div>
          <div class="fw-bold text-white">${project.category}</div>
        </div>
        <div class="col-sm-4">
          <div class="font-mono text-brass" style="font-size:0.75rem;">LOCATION</div>
          <div class="fw-bold text-white">${project.location || 'Not Specified'}</div>
        </div>
        <div class="col-sm-4">
          <div class="font-mono text-brass" style="font-size:0.75rem;">YEAR & STATUS</div>
          <div class="fw-bold text-white">${project.year || '2026'} • ${project.status || 'Active'}</div>
        </div>
      </div>
      <p class="text-secondary mb-4" style="font-size:1.05rem; line-height:1.7;">${project.desc}</p>
      <div class="p-3 rounded-2" style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.2);">
        <i class="fa-solid fa-drafting-compass text-brass me-2"></i>
        <span class="font-mono" style="font-size:0.85rem;">Client: ${project.client || 'Private Studio Client'} • BIM Documentation LOD 400.</span>
      </div>
    `;
  }

  const modalEl = document.getElementById('projectModal');
  if (modalEl && window.bootstrap) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

// Render Services
function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  container.innerHTML = ARCH_DATA.services.map(s => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="service-card">
        <div class="service-icon">
          <i class="fa-solid ${s.icon}"></i>
        </div>
        <h4 class="mb-3 text-white">${s.title}</h4>
        <p class="text-muted-custom mb-0" style="font-size:0.95rem; line-height:1.65;">${s.desc}</p>
      </div>
    </div>
  `).join('');
}

// Render Process
function renderProcess() {
  const container = document.getElementById('processGrid');
  if (!container) return;

  container.innerHTML = ARCH_DATA.process.map(p => `
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="process-step">
        <div class="process-number">${p.step}</div>
        <h4 class="mb-2 text-white" style="font-size:1.15rem;">${p.title}</h4>
        <p class="text-muted-custom mb-0" style="font-size:0.9rem; line-height:1.6;">${p.desc}</p>
      </div>
    </div>
  `).join('');
}

// Render Publications
function renderEbooks() {
  const container = document.getElementById('ebooksGrid');
  if (!container) return;

  container.innerHTML = ARCH_DATA.ebooks.map(b => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="book-card">
        <div class="book-cover-wrapper">
          <img src="${b.cover}" alt="${b.title}" loading="lazy">
        </div>
        <div class="book-content">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge bg-dark border border-warning text-brass">${b.tag}</span>
            <span class="font-mono text-muted-custom" style="font-size:0.75rem;">${b.year}</span>
          </div>
          <h4 class="text-white mb-2" style="font-size:1.15rem;">${b.title}</h4>
          <p class="text-muted-custom mb-3" style="font-size:0.88rem; line-height:1.5;">${b.desc}</p>
          <div class="mt-auto pt-2 border-top border-secondary border-opacity-10 d-flex justify-content-between align-items-center">
            <span class="font-mono text-brass" style="font-size:0.75rem;">${b.author}</span>
            <a href="#contact" class="btn btn-sm btn-outline-warning py-1 px-3 rounded-pill" style="font-size:0.75rem;">Request Copy</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Navbar scroll detection
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar-custom');
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  renderProjects('all');
  renderServices();
  renderProcess();
  renderEbooks();

  // Filter Buttons Handler
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Contact Form Submission saving directly to MongoDB
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('formAlert');
      
      const payload = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        phone: contactForm.querySelectorAll('input[type="text"]')[1]?.value || '',
        typology: contactForm.querySelector('select')?.value || 'residential',
        message: contactForm.querySelector('textarea')?.value || '',
      };

      try {
        const res = await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (res.ok && data.success) {
          alertBox.classList.remove('d-none');
          alertBox.innerHTML = `
            <div class="alert alert-success d-flex align-items-center gap-2 mb-0" style="background: rgba(40,167,69,0.15); border: 1px solid #28a745; color: #a3e635;">
              <i class="fa-solid fa-circle-check"></i>
              <div>Thank you ${payload.name}! Your consultation inquiry has been saved directly into our studio database.</div>
            </div>
          `;
          contactForm.reset();
          setTimeout(() => alertBox.classList.add('d-none'), 6000);
        } else {
          throw new Error(data.message || 'Error submitting');
        }
      } catch (err) {
        alertBox.classList.remove('d-none');
        alertBox.innerHTML = `
          <div class="alert alert-danger mb-0">${err.message}</div>
        `;
      }
    });
  }
});

