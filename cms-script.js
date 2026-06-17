// ============================================
// 瀚算云擎 CMS - 后台管理脚本
// 使用 localStorage 实现数据持久化
// ============================================

// === 初始化数据 ===
const DEFAULT_ARTICLES = [
  {
    id: '1',
    title: '什么是GEO优化？企业为什么要提前布局AI搜索推荐',
    category: 'GEO优化',
    excerpt: '随着ChatGPT、豆包、DeepSeek等大模型产品的普及，用户的搜索行为正在从"关键词搜索"向"AI对话式提问"转变。GEO（Generative Engine Optimization）应运而生——它是一种全新的数字营销方法论，旨在帮助企业在AI生成的回答中获得优先展示和推荐...',
    content: '随着ChatGPT、豆包、DeepSeek等大模型产品的普及，用户的搜索行为正在从"关键词搜索"向"AI对话式提问"转变。GEO（Generative Engine Optimization）应运而生——它是一种全新的数字营销方法论，旨在帮助企业在AI生成的回答中获得优先展示和推荐。\n\n## 什么是GEO优化？\n\nGEO优化（Generative Engine Optimization）是指通过优化企业的品牌内容、知识库结构和数字资产，使其在AI生成式搜索引擎（如ChatGPT、豆包、DeepSeek等）的回答中获得更高的可见度和推荐率。\n\n与传统的SEO（搜索引擎优化）不同，GEO优化关注的是：\n- AI如何理解和引用品牌信息\n- 品牌在AI生成答案中的出现频率\n- 品牌被推荐为"最佳答案"的概率\n\n## 为什么企业需要GEO优化？\n\n1. **搜索行为正在改变**：越来越多的用户直接向AI提问，而不是在搜索引擎中输入关键词。\n\n2. **AI成为信息入口**：AI平台正在成为用户获取信息的主要渠道，品牌需要在这个新渠道中建立存在感。\n\n3. **先发优势**：越早布局GEO优化，越能在AI搜索生态中建立品牌认知壁垒。\n\n4. **成本效益**：相比传统广告投放，GEO优化是一种长期有效的品牌资产建设。',
    date: '2026-06-15',
    status: 'published',
    views: 234
  },
  {
    id: '2',
    title: '本地企业做AI搜索优化，官网应该增加哪些栏目',
    category: '实操指南',
    excerpt: '对于本地生活服务型企业而言，想要在AI时代获得更多自然流量，官网的结构优化是第一步。本文将详细解析适合GEO优化的官网栏目规划，包括品牌介绍、FAQ问答库、案例展示、新闻中心、服务详情等关键模块的设计要点...',
    content: '对于本地生活服务型企业而言，想要在AI时代获得更多自然流量，官网的结构优化是第一步。本文将详细解析适合GEO优化的官网栏目规划。\n\n## 1. 品牌介绍页面\n\n清晰的品牌介绍是AI理解企业的基础。建议包含：\n- 公司全称和简称\n- 成立时间和发展历程\n- 核心业务范围\n- 企业资质和荣誉\n\n## 2. FAQ问答库\n\nFAQ是AI引用最多的内容形式。建议整理：\n- 客户最常问的20个问题\n- 每个问题提供详细、专业的回答\n- 使用结构化格式（问题+答案+补充说明）\n\n## 3. 案例展示\n\n真实的案例能显著提升AI对品牌的信任度：\n- 详细描述服务过程\n- 量化展示成果数据\n- 客户评价和反馈\n\n## 4. 新闻动态\n\n持续更新的新闻内容有助于保持品牌在AI搜索中的活跃度：\n- 行业观点文章\n- 公司动态\n- 服务升级公告',
    date: '2026-06-12',
    status: 'published',
    views: 189
  },
  {
    id: '3',
    title: '瀚算云擎官网升级：新增新闻动态与案例墙展示',
    category: '公司动态',
    excerpt: '瀚算云擎官方网站完成全新升级，新增新闻动态栏目与行业案例墙展示区。本次升级旨在强化品牌在AI搜索中的内容资产建设，通过持续输出高质量的GEO优化相关内容，进一步提升品牌在各大AI平台的可见度和推荐率...',
    content: '瀚算云擎官方网站完成全新升级，新增新闻动态栏目与行业案例墙展示区。\n\n## 升级亮点\n\n### 1. 新闻动态栏目\n新增新闻动态板块，用于发布：\n- GEO优化前沿洞察\n- 行业观点分享\n- 公司最新动态\n- 客户案例故事\n\n### 2. 案例墙展示\n采用卡片式布局，展示各行业典型案例：\n- 医疗眼科GEO内容矩阵\n- 餐饮门店点评与外卖联动\n- 零售门店收银系统部署\n- 教育培训短视频获客\n\n### 3. 科技感设计升级\n- 深蓝+青+紫渐变科技风\n- AI数据面板视觉效果\n- 流光束+粒子动画\n- 全站响应式适配\n\n## 未来规划\n\n我们将持续优化官网内容，定期发布高质量的GEO优化相关文章，帮助更多企业了解并应用AI搜索优化技术。',
    date: '2026-06-16',
    status: 'published',
    views: 156
  }
];

// === 数据管理 ===
const DataManager = {
  getArticles() {
    const data = localStorage.getItem('hansuan_articles');
    return data ? JSON.parse(data) : [...DEFAULT_ARTICLES];
  },

  saveArticles(articles) {
    localStorage.setItem('hansuan_articles', JSON.stringify(articles));
  },

  getArticle(id) {
    return this.getArticles().find(a => a.id === id);
  },

  addArticle(article) {
    const articles = this.getArticles();
    article.id = Date.now().toString();
    article.views = 0;
    articles.unshift(article);
    this.saveArticles(articles);
    return article;
  },

  updateArticle(id, updates) {
    const articles = this.getArticles();
    const index = articles.findIndex(a => a.id === id);
    if (index !== -1) {
      articles[index] = { ...articles[index], ...updates };
      this.saveArticles(articles);
      return articles[index];
    }
    return null;
  },

  deleteArticle(id) {
    const articles = this.getArticles().filter(a => a.id !== id);
    this.saveArticles(articles);
  },

  exportData() {
    const data = {
      articles: this.getArticles(),
      exportDate: new Date().toISOString(),
      version: '1.0'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hansuan-cms-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importData(jsonData) {
    if (jsonData.articles && Array.isArray(jsonData.articles)) {
      this.saveArticles(jsonData.articles);
      return true;
    }
    return false;
  }
};

// === 认证管理 ===
const AuthManager = {
  isLoggedIn() {
    return sessionStorage.getItem('hansuan_cms_login') === 'true';
  },

  login(username, password) {
    // 默认账号：admin / hansuan2026
    if (username === 'admin' && password === 'hansuan2026') {
      sessionStorage.setItem('hansuan_cms_login', 'true');
      return true;
    }
    return false;
  },

  logout() {
    sessionStorage.removeItem('hansuan_cms_login');
  }
};

// === 页面管理 ===
const PageManager = {
  currentPage: 'dashboard',

  showPage(page) {
    this.currentPage = page;
    
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });

    // 更新页面标题
    const titles = {
      dashboard: '仪表盘',
      articles: '文章管理',
      write: '写文章',
      settings: '系统设置'
    };
    document.getElementById('pageTitle').textContent = titles[page] || '仪表盘';

    // 显示对应页面
    document.querySelectorAll('.page-content').forEach(content => {
      content.style.display = 'none';
    });
    
    const pageMap = {
      dashboard: 'dashboardPage',
      articles: 'articlesPage',
      write: 'writePage',
      settings: 'settingsPage'
    };
    const pageEl = document.getElementById(pageMap[page]);
    if (pageEl) pageEl.style.display = 'block';

    // 加载页面数据
    if (page === 'dashboard') this.loadDashboard();
    if (page === 'articles') this.loadArticles();
  },

  loadDashboard() {
    const articles = DataManager.getArticles();
    const published = articles.filter(a => a.status === 'published');
    
    document.getElementById('totalArticles').textContent = articles.length;
    document.getElementById('totalViews').textContent = articles.reduce((sum, a) => sum + (a.views || 0), 0);
    
    const lastArticle = published[0];
    document.getElementById('lastPublish').textContent = lastArticle ? lastArticle.date : '-';

    // 加载最近文章
    const recentList = document.getElementById('recentArticleList');
    recentList.innerHTML = published.slice(0, 5).map(article => `
      <div class="article-list-item">
        <div class="article-list-title">${article.title}</div>
        <div class="article-list-meta">
          <span class="category-tag cat-${this.getCategoryClass(article.category)}">${article.category}</span>
          <span>${article.date}</span>
          <span>👁️ ${article.views || 0}</span>
        </div>
      </div>
    `).join('');
  },

  loadArticles() {
    const articles = DataManager.getArticles();
    const tbody = document.getElementById('articleTableBody');
    
    tbody.innerHTML = articles.map(article => `
      <tr>
        <td><strong>${article.title}</strong></td>
        <td><span class="category-tag cat-${this.getCategoryClass(article.category)}">${article.category}</span></td>
        <td><span class="status-badge status-${article.status}">${article.status === 'published' ? '已发布' : '草稿'}</span></td>
        <td>${article.date}</td>
        <td>${article.views || 0}</td>
        <td>
          <div class="action-btns">
            <button class="btn-edit" onclick="editArticle('${article.id}')">编辑</button>
            <button class="btn-delete" onclick="deleteArticle('${article.id}')">删除</button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  getCategoryClass(category) {
    const map = {
      'GEO优化': 'geo',
      '实操指南': 'guide',
      '公司动态': 'update',
      '行业洞察': 'insight',
      '客户案例': 'case'
    };
    return map[category] || 'geo';
  }
};

// === 全局函数 ===
function editArticle(id) {
  const article = DataManager.getArticle(id);
  if (!article) return;

  document.getElementById('articleId').value = article.id;
  document.getElementById('articleTitle').value = article.title;
  document.getElementById('articleCategory').value = article.category;
  document.getElementById('articleExcerpt').value = article.excerpt || '';
  document.getElementById('articleDate').value = article.date;
  document.getElementById('articleContent').value = article.content;

  PageManager.showPage('write');
}

function deleteArticle(id) {
  if (!confirm('确定要删除这篇文章吗？此操作不可恢复。')) return;
  
  DataManager.deleteArticle(id);
  PageManager.loadArticles();
  
  // 显示提示
  showToast('文章已删除');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    padding: 12px 20px;
    color: var(--text-primary);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// === 事件绑定 ===
document.addEventListener('DOMContentLoaded', () => {
  // 检查登录状态
  if (AuthManager.isLoggedIn()) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('cmsPage').style.display = 'flex';
    PageManager.showPage('dashboard');
  }

  // 登录表单
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (AuthManager.login(username, password)) {
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('cmsPage').style.display = 'flex';
      PageManager.showPage('dashboard');
    } else {
      alert('用户名或密码错误');
    }
  });

  // 退出登录
  document.getElementById('logoutBtn').addEventListener('click', () => {
    AuthManager.logout();
    location.reload();
  });

  // 导航切换
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      PageManager.showPage(item.dataset.page);
    });
  });

  // 新建文章
  document.getElementById('newArticleBtn').addEventListener('click', () => {
    document.getElementById('articleId').value = '';
    document.getElementById('articleForm').reset();
    document.getElementById('articleDate').value = new Date().toISOString().split('T')[0];
    PageManager.showPage('write');
  });

  // 保存草稿
  document.getElementById('saveDraftBtn').addEventListener('click', () => {
    const id = document.getElementById('articleId').value;
    const articleData = {
      title: document.getElementById('articleTitle').value,
      category: document.getElementById('articleCategory').value,
      excerpt: document.getElementById('articleExcerpt').value,
      date: document.getElementById('articleDate').value,
      content: document.getElementById('articleContent').value,
      status: 'draft'
    };

    if (id) {
      DataManager.updateArticle(id, articleData);
    } else {
      DataManager.addArticle(articleData);
    }

    showToast('草稿已保存');
    PageManager.showPage('articles');
  });

  // 发布文章
  document.getElementById('articleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('articleId').value;
    const articleData = {
      title: document.getElementById('articleTitle').value,
      category: document.getElementById('articleCategory').value,
      excerpt: document.getElementById('articleExcerpt').value,
      date: document.getElementById('articleDate').value,
      content: document.getElementById('articleContent').value,
      status: 'published'
    };

    if (id) {
      DataManager.updateArticle(id, articleData);
      showToast('文章已更新');
    } else {
      DataManager.addArticle(articleData);
      showToast('文章已发布');
    }

    PageManager.showPage('articles');
  });

  // 搜索
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const articles = DataManager.getArticles();
    const filtered = articles.filter(a => a.title.toLowerCase().includes(keyword));
    
    const tbody = document.getElementById('articleTableBody');
    tbody.innerHTML = filtered.map(article => `
      <tr>
        <td><strong>${article.title}</strong></td>
        <td><span class="category-tag cat-${PageManager.getCategoryClass(article.category)}">${article.category}</span></td>
        <td><span class="status-badge status-${article.status}">${article.status === 'published' ? '已发布' : '草稿'}</span></td>
        <td>${article.date}</td>
        <td>${article.views || 0}</td>
        <td>
          <div class="action-btns">
            <button class="btn-edit" onclick="editArticle('${article.id}')">编辑</button>
            <button class="btn-delete" onclick="deleteArticle('${article.id}')">删除</button>
          </div>
        </td>
      </tr>
    `).join('');
  });

  // 导出数据
  document.getElementById('exportBtn').addEventListener('click', () => {
    DataManager.exportData();
    showToast('数据已导出');
  });

  // 导入数据
  document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFile').click();
  });

  document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (DataManager.importData(data)) {
          showToast('数据已导入');
          PageManager.loadArticles();
        } else {
          alert('数据格式错误');
        }
      } catch (err) {
        alert('文件解析失败');
      }
    };
    reader.readAsText(file);
  });

  // 修改密码
  document.getElementById('changePasswordBtn').addEventListener('click', () => {
    const newPassword = document.getElementById('newPassword').value;
    if (!newPassword) {
      alert('请输入新密码');
      return;
    }
    // 这里可以实现密码修改逻辑
    showToast('密码修改功能需要后端支持，当前版本为演示模式');
  });

  // 编辑器工具栏
  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      const textarea = document.getElementById('articleContent');
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const selected = text.substring(start, end);

      let insertion = '';
      switch (cmd) {
        case 'bold':
          insertion = `**${selected || '粗体文字'}**`;
          break;
        case 'italic':
          insertion = `*${selected || '斜体文字'}*`;
          break;
        case 'heading':
          insertion = `\n## ${selected || '标题'}\n`;
          break;
        case 'link':
          insertion = `[${selected || '链接文字'}](https://)`;
          break;
        case 'list':
          insertion = `\n- ${selected || '列表项'}\n- 列表项\n- 列表项\n`;
          break;
      }

      textarea.value = text.substring(0, start) + insertion + text.substring(end);
      textarea.focus();
    });
  });
});

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100px); opacity: 0; }
  }
`;
document.head.appendChild(style);