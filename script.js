/* ============================================
   瀚算云擎 - 交互脚本
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ========== 导航栏滚动效果 ==========
  const navbar = document.getElementById('navbar');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // init

  // ========== 移动端菜单切换 ==========
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      // 汉堡变X
      this.classList.toggle('active');
      const spans = this.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // 点击链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ========== 滚动入场动画 (Intersection Observer) ==========
  const animateElements = document.querySelectorAll('.animate-in');
  
  if ('IntersectionObserver' in window && animateElements.length > 0) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          // 延迟添加visible类，实现错落效果
          setTimeout(function() {
            entry.target.classList.add('visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animateElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: 直接显示
    animateElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // ========== 平滑滚动锚点跳转 ==========
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== 数字递增动画 ==========
  function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number, .data-num');
    
    statNumbers.forEach(function(el) {
      const text = el.textContent.trim();
      const numMatch = text.match(/[\d]+/);
      if (!numMatch) return;

      const finalNum = parseInt(numMatch[0]);
      const suffix = text.replace(numMatch[0], '');
      let current = 0;
      const duration = 2000; // ms
      const steps = 60;
      const increment = finalNum / steps;
      const stepTime = duration / steps;

      // 只在视口内触发
      if (!el.dataset.animated) {
        el.dataset.originalText = text;
        
        const numberObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting && !el.dataset.animated) {
              el.dataset.animated = 'true';
              const timer = setInterval(function() {
                current += increment;
                if (current >= finalNum) {
                  current = finalNum;
                  clearInterval(timer);
                }
                el.textContent = Math.floor(current) + suffix;
              }, stepTime);
              numberObserver.unobserve(el);
            }
          });
        }, { threshold: 0.5 });
        numberObserver.observe(el);
      }
    });
  }

  animateNumbers();

  // ========== 流光束动态位置随机化 ==========
  const beams = document.querySelectorAll('.hero-beam');
  beams.forEach(function(beam, i) {
    beam.style.animationDelay = (-i * 4) + 's';
    beam.style.top = (15 + i * 20) + '%';
  });

});
