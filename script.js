/* ============================================
   瀚算云擎 - 交互脚本 v3
   导航 / 滚动入场 / 数字递增 / 表单提交
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========== 导航栏滚动效果 ==========
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function handleNavScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // 当前位置高亮
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ========== 移动端菜单切换 ==========
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksEl = document.getElementById('navLinks');

  mobileToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('active');
    const spans = mobileToggle.querySelectorAll('span');
    if (navLinksEl.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // 点击菜单项后关闭
  navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('active');
      const spans = mobileToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });

  // ========== 滚动入场动画 ==========
  const animateElements = document.querySelectorAll('.animate-in');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach(el => observer.observe(el));

  // ========== 数字递增动画 ==========
  function countUp(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counters = document.querySelectorAll('.num-counter');
  let countersStarted = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        counters.forEach(counter => countUp(counter));
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) statsObserver.observe(statsSection);

  // ========== 表单提交处理 ==========
  const consultForm = document.getElementById('consultForm');
  const formFeedback = document.getElementById('formFeedback');

  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // 简单校验
      const inputs = consultForm.querySelectorAll('input[required], select[required], textarea[required]');
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = '#ef4444';
          setTimeout(() => input.style.borderColor = '', 2000);
        }
      });

      if (!valid) return;

      // 模拟提交成功
      const submitBtn = consultForm.querySelector('.form-submit-btn');
      submitBtn.textContent = '⏳ 提交中...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      setTimeout(() => {
        formFeedback.style.display = 'block';
        formFeedback.style.animation = 'fadeInUp 0.5s ease both';
        consultForm.reset();
        submitBtn.textContent = '提交需求，2小时内回复 →';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';

        // 5秒后隐藏提示
        setTimeout(() => {
          formFeedback.style.display = 'none';
        }, 5000);
      }, 800);
    });
  }

  // ========== 平滑滚动（导航链接） ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = navbar.offsetHeight;
        const targetPos = target.offsetTop - navHeight - 20;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

});
