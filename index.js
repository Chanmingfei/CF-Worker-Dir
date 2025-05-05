/**
 * 自定义网站配置 
 */
const config = {
  title: "唐山师范学院吧",                 // 网站标题
  subtitle: "吧务组官网（非学校官方）", // 网站副标题
  hitokoto: true,                     // 是否使用一言
  search: true,                        // 是否启用搜索功能
  search_engine: [                     // 选择使用的搜索引擎
    {
      name: "百度",
      template: "https://www.baidu.com/s?wd=$s"
    },
  ],
  selling_ads: true,                  // 是否显示意见反馈功能
  sell_info: {
    domain: "",
    price: "意见反馈",                        // 反馈标题
    contact: [                         // 联系方式
      {
        type: "mail icon",               // 联系类型（"envelope"）
        content: "bazhu@tstc.pp.ua"
      }
    ]                        
  },
  lists: [                            // URL 列表
    {
      name: "快速链接",
      list: [
        {
          url: "https://www.tstc.edu.cn",
          name: "唐山师范学院",
          desc: "您所在的网页并非学校官方，这个才是唐山师范学院官方网站"
        },
        {
          url: "https://tieba.baidu.com/f?kw=%E5%94%90%E5%B1%B1%E5%B8%88%E8%8C%83%E5%AD%A6%E9%99%A2",
          name: "唐山师范学院吧",
          desc: "唐山师范学院百度贴吧"
        },
        {
          url: "https://www.wjx.top/vm/wFv03EP.aspx#",
          name: "邮箱申请",
          desc: "吧务组免费向吧友提供自定义用户名、后缀为@tstc.pp.ua的邮箱"
        },
        {
          url: "https://qy.163.com/static/login/",
          name: "邮箱登录",
          desc: "自定义邮箱登录 由网易企业邮箱提供服务"
        },
      ]
    },
    {
      name: "吧务组人员公示",
      list: [
        {
          url: "https://tieba.baidu.com/home/main?id=tb.1.f732ecff.LjVmXUAOI9XIE0v0G6bM3Q&fr=userbar",
          name: "雨雪👀",
          desc: "吧主 唐山师范学院在读 2025年5月当选"
        },
        {
          url: "https://tieba.baidu.com/home/main?id=tb.1.22841357._vT29AYL11XgG5fv1jvjCA",
          name: "Duncan365",
          desc: "小吧主 唐山师范学院在读 2025年5月任命"
        },
        {
          url: "https://tieba.baidu.com/home/main?id=tb.1.ea2e8210.PNYITnnpR_owXac5m6qrog",
          name: "总会有人把我照亮",
          desc: "小吧主 唐山师范学院在读 2025年5月任命"
        },
        {
          url: "https://tieba.baidu.com/f?kw=%E5%94%90%E5%B1%B1%E5%B8%88%E8%8C%83%E5%AD%A6%E9%99%A2",
          name: "欢迎申请",
          desc: "小吧主"
        },
      ]
    }
  ]
};

// 创建元素的辅助函数
const el = (tag, attrs, content) => {
  let attrString = attrs.map(attr => `${attr}`).join(' ');
  return `<${tag} ${attrString || ''}>${content}</${tag}>`;
};

// 获取网站的favicon
function getFavicon(url) {
  if (!url.match(/https?:\/\//)) {
    url = "http://" + url;
  }
  const faviconUrl = `https://icon.bqb.cool?url=${encodeURIComponent(url)}`;
  return faviconUrl;
}

// 渲染完整的HTML页面
function renderHTML() {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <style>
        /* 定制样式 */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        
        body {
          background-color: #f0f4f8;
          color: #333;
          line-height: 1.6;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* 头部样式 */
        header {
          background: linear-gradient(135deg, #0465bc 0%, #398cc9 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: fadeInDown 1s ease-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .header-content {
          position: relative;
          z-index: 1;
        }
        
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .logo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          animation: scaleIn 0.8s ease-out;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .site-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .site-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 5px;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .site-subtitle {
          font-size: 1.2rem;
          font-weight: 400;
          opacity: 0.9;
          margin-bottom: 1rem;
          animation: fadeInUp 1.2s ease-out;
        }
        
        .quote {
          margin-top: 1rem;
          font-style: italic;
          text-align: center;
          color: white;
          font-size: 1.1rem;
          animation: fadeInUp 1.4s ease-out;
        }
        
        /* 搜索框功能样式 */
        .search-container {
          max-width: 600px;
          margin: 1.5rem auto;
          position: relative;
          animation: fadeInUp 1.6s ease-out;
        }
        
        .search-box {
          width: 100%;
          padding: 15px 20px;
          border: none;
          border-radius: 30px;
          font-size: 1rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .search-box:focus {
          outline: none;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }

        .search-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #2575fc;
          cursor: pointer;
        }
        
        /* 意见反馈按钮 */
        .feedback-container {
          display: flex;
          justify-content: center;
          margin: 1.5rem 0;
          animation: fadeInUp 1.8s ease-out;
        }
        
        .feedback-btn {
          background-color: white;
          color: #2575fc;
          border: none;
          padding: 12px 25px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        .feedback-btn:hover {
          background-color: #2575fc;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .feedback-btn svg {
          margin-right: 8px;
        }
        
        /* 主要内容区域 */
        .main-content {
          padding: 4rem 0;
        }
        
        .section {
          margin-bottom: 4rem;
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .section-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .section-title {
          font-size: 2rem;
          color: #2575fc;
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .section-title::before {
          content: '';
          display: inline-block;
          width: 30px;
          height: 30px;
          margin-right: 15px;
          background-size: contain;
          background-repeat: no-repeat;
        }
        
        .quick-links .section-title::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232575fc'%3E%3Cpath d='M20 6h-4V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z'/%3E%3C/svg%3E");
        }
        
        .team .section-title::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232575fc'%3E%3Cpath d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E");
        }
        
        /* 卡片样式 */
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .card {
          background-color: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .card-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
        }
        
        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          margin-bottom: 20px;
          object-fit: cover;
        }
        
        .card-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #2575fc;
        }
        
        .card-description {
          font-size: 1rem;
          color: #777;
          flex-grow: 1;
        }
        
        /* 底部样式 */
        footer {
          background-color: #0465bc;
          color: white;
          padding: 3rem 0;
          text-align: center;
          animation: fadeInUp 1s ease-out;
        }
        
        .footer-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .footer-logo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 1rem;
          border: 4px solid white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        
        .footer-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .footer-email {
          color: white;
          text-decoration: none;
          display: block;
          margin-bottom: 1rem;
        }
        
        .copyright {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }
        
        /* 模态框样式 */
        .modal-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          justify-content: center;
          align-items: center;
          animation: fadeIn 0.3s ease-out;
        }
        
        .modal {
          background-color: white;
          border-radius: 15px;
          width: 90%;
          max-width: 500px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          animation: scaleInModal 0.3s ease-out;
        }

        @keyframes scaleInModal {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .modal-header {
          padding: 25px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2575fc;
        }
        
        .modal-close {
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: #777;
        }
        
        .modal-body {
          padding: 25px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #e0e6ed;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
          color: #2575fc;
        }
        
        .contact-info {
          flex-grow: 1;
        }
        
        .contact-label {
          font-size: 0.9rem;
          color: #777;
          margin-bottom: 5px;
        }
        
        .contact-value {
          font-weight: 500;
          color: #2575fc;
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
          .site-title {
            font-size: 2rem;
          }
          
          .search-container {
            flex-direction: column;
            align-items: center;
          }
          
          .search-box {
            width: 100%;
            margin-bottom: 10px;
          }
          
          .feedback-container {
            flex-direction: column;
            align-items: center;
          }
          
          .feedback-btn {
            width: 100%;
            justify-content: center;
            margin-top: 10px;
          }
        }

        /* 背景图片样式 */
        .header-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://s1.imagehub.cc/images/2025/05/04/46e0a76a0875740296805499009e7a4a.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.2;
          z-index: 0;
        }
      </style>
  </head>
  <body>
    <header>
      <div class="header-background"></div>
      <div class="container">
        <div class="header-content">
          <div class="logo-container">
            <img src="https://s1.imagehub.cc/images/2025/05/04/0458fef2ac8d47bc88ee2151cf193573.jpg" alt="${config.title}" class="logo">
            <div class="site-info">
              <h1 class="site-title">${config.title}</h1>
              <p class="site-subtitle">${config.subtitle}</p>
            </div>
          </div>
          <p class="quote" id="hitokoto">勤思笃学 修身律己 （加载中...）</p>
          
          ${config.search ? `
          <form class="search-container" id="searchForm">
            <input type="text" class="search-box" id="searchinput" placeholder="搜索你想要知道的……">
            <button class="search-btn" id="searchBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          ` : ''}
          
          ${config.selling_ads ? `
          <div class="feedback-container">
            <button class="feedback-btn" id="feedbackBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              意见建议反馈
            </button>
          </div>
          ` : ''}
        </div>
      </div>
    </header>
    
    <main class="main-content">
      <div class="container">
        ${config.lists.map(group => `
        <section class="section ${group.name === '吧务组人员公示' ? 'team' : 'quick-links'}">
          <div class="section-header">
            <h2 class="section-title">${group.name}</h2>
          </div>
          
          <div class="cards-container">
            ${group.list.map(item => `
            <a href="${item.url}" target="_blank" class="card">
              <div class="card-content">
                <img src="${getFavicon(item.url)}" alt="${item.name}" class="card-icon">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-description">${item.desc}</p>
              </div>
            </a>
            `).join('')}
          </div>
        </section>
        `).join('')}
      </div>
    </main>
    
    ${config.selling_ads ? `
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal">
        <div class="modal-header">
          <h3 class="modal-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            ${config.title} - ${config.sell_info.price}
          </h3>
          <button class="modal-close" id="modalClose">&times;</button>
        </div>
        <div class="modal-body">
          <div class="contact-list">
            ${config.sell_info.contact.map(contact => `
            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="contact-info">
                <div class="contact-label">吧主信箱</div>
                <div class="contact-value">${contact.content}</div>
              </div>
            </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
    ` : ''}
    
    <footer>
      <div class="container">
        <div class="footer-content">
          <img src="https://s1.imagehub.cc/images/2025/05/04/0458fef2ac8d47bc88ee2151cf193573.jpg" alt="${config.title}" class="footer-logo">
          <h3 class="footer-title">${config.title}</h3>
          <a href="mailto:bazhu@tstc.pp.ua" class="footer-email">吧主信箱📬️ bazhu@tstc.pp.ua</a>
          <p class="copyright">&copy; ${new Date().getFullYear()} 唐山师范学院吧务组（非学校官方） 版权所有</p>
        </div>
      </div>
    </footer>
    
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        // 搜索框功能
        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchinput');
        
        if (searchForm) {
          searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
              let searchUrl = '${config.search_engine[0].template}'.replace('$s', encodeURIComponent(searchTerm));
              window.open(searchUrl, '_blank');
            }
          });
        }
        
        const searchBtn = document.getElementById('searchBtn');
        
        if (searchBtn) {
          searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
              let searchUrl = '${config.search_engine[0].template}'.replace('$s', encodeURIComponent(searchTerm));
              window.open(searchUrl, '_blank');
            }
          });
        }
        
        // 意见反馈功能
        const feedbackBtn = document.getElementById('feedbackBtn');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        
        if (feedbackBtn && modalOverlay && modalClose) {
          feedbackBtn.addEventListener('click', function() {
            modalOverlay.style.display = 'flex';
          });
          
          modalClose.addEventListener('click', function() {
            modalOverlay.style.display = 'none';
          });
          
          modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
              modalOverlay.style.display = 'none';
            }
          });
        }
        
        // 一言加载
        const hitokotoEl = document.getElementById('hitokoto');
        
        if (hitokotoEl) {
          fetch('https://v1.hitokoto.cn/?c=d')
            .then(response => response.json())
            .then(data => {
              hitokotoEl.textContent = data.hitokoto;
            })
            .catch(() => {
              // 默认文案
              const quotes = [
                '勤思笃学 修身律己',
                '学而不思则罔，思而不学则殆',
                '三人行，必有我师焉',
                '敏而好学，不耻下问',
                '学而不厌，诲人不倦'
              ];
              hitokotoEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
            });
        }
      });
    </script>
  </body>
  </html>`;
}


// 处理请求并返回响应
async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  };
  return new Response(renderHTML(), init);
}
// 注册 fetch 事件处理程序
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
