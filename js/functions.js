// Geração de pontos na malha digital
    function generateMeshDots() {
      const meshDots = document.getElementById('meshDots');
      meshDots.innerHTML = '';

      for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animationDelay = (Math.random() * 3) + 's';
        meshDots.appendChild(dot);
      }
    }

    generateMeshDots();

    // Scroll para seções
    document.getElementById('portfolioBtn').addEventListener('click', () => {
      document.querySelector('.section-portfolio').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('ctaBtn').addEventListener('click', () => {
      document.querySelector('.section-contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Element SDK Configuration
    const defaultConfig = {
      company_name: "CODE & PIXELLAB",
      hero_subtitle: "Tecnologia & Design Digital",
      hero_description: "Criamos soluções digitais modernas e sofisticadas para empresas que querem evoluir no mundo digital.",
      cta_button_text: "SOLICITAR ORÇAMENTO",
      portfolio_button_text: "VER PROJETOS",
      about_title: "Sobre a Code & Pixellab",
      about_text: "A Code & Pixellab desenvolve soluções digitais modernas, unindo tecnologia, design e estratégia para criar experiências profissionais e eficientes.",
      whatsapp_number: "(21) 99100-2934",
      instagram: "code.pixellab",
      email: "code.pixellab2025@gmail.com"
    };

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange: async (config) => {
          document.getElementById('heroTitle').textContent = config.company_name || defaultConfig.company_name;
          document.getElementById('heroSubtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
          document.getElementById('heroDescription').textContent = config.hero_description || defaultConfig.hero_description;
          document.getElementById('ctaBtn').textContent = config.cta_button_text || defaultConfig.cta_button_text;
          document.getElementById('portfolioBtn').textContent = config.portfolio_button_text || defaultConfig.portfolio_button_text;
          document.querySelector('.section-about .section-title').innerHTML = config.about_title || defaultConfig.about_title + ' <span>Code & Pixellab</span>';
          document.getElementById('aboutText1').textContent = config.about_text || defaultConfig.about_text;
          document.getElementById('contactDescription').textContent = "Entre em contato para solicitar uma proposta personalizada para o seu projeto.";

          const whatsappNum = config.whatsapp_number || defaultConfig.whatsapp_number;
          const whatsappLink = whatsappNum.replace(/\D/g, '');
          document.getElementById('whatsappDisplay').href = `https://wa.me/55${whatsappLink}`;
          document.getElementById('whatsappDisplay').textContent = whatsappNum;

          const instagram = config.instagram || defaultConfig.instagram;
          document.getElementById('instagramDisplay').href = `https://instagram.com/${instagram.replace('@', '')}`;
          document.getElementById('instagramDisplay').textContent = instagram;

          const email = config.email || defaultConfig.email;
          document.getElementById('emailDisplay').href = `mailto:${email}`;
          document.getElementById('emailDisplay').textContent = email;
        },
        mapToCapabilities: (config) => ({
          recolorables: [],
          borderables: [],
          fontEditable: undefined,
          fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => new Map([
          ["company_name", config.company_name || defaultConfig.company_name],
          ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
          ["hero_description", config.hero_description || defaultConfig.hero_description],
          ["cta_button_text", config.cta_button_text || defaultConfig.cta_button_text],
          ["portfolio_button_text", config.portfolio_button_text || defaultConfig.portfolio_button_text],
          ["about_title", config.about_title || defaultConfig.about_title],
          ["about_text", config.about_text || defaultConfig.about_text],
          ["whatsapp_number", config.whatsapp_number || defaultConfig.whatsapp_number],
          ["instagram", config.instagram || defaultConfig.instagram],
          ["email", config.email || defaultConfig.email]
        ])
      });
    }
    
(function () {

  function injectCloudflareScript(iframe) {
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    if (!doc) return;

    const script = doc.createElement('script');

    script.innerHTML = `
      window.__CF$cv$params = {
        r: '9cf1552596aeff94',
        t: 'MTc3MTI4OTg2Ny4wMDAwMDA='
      };

      var s = document.createElement('script');
      s.src = '/cdn-cgi/challenge-platform/scripts/jsd/main.js';
      document.head.appendChild(s);
    `;

    doc.head.appendChild(script);
  }

  function createHiddenIframe() {
    const iframe = document.createElement('iframe');

    iframe.height = 1;
    iframe.width = 1;
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.border = 'none';
    iframe.style.visibility = 'hidden';

    document.body.appendChild(iframe);

    return iframe;
  }

  function init() {
    const iframe = createHiddenIframe();
    injectCloudflareScript(iframe);
  }

  if (document.body) {
    if (document.readyState !== 'loading') {
      init();
    } else {
      document.addEventListener('DOMContentLoaded', init);
    }
  }

})();
