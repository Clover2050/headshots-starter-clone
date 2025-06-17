import Head from 'next/head';

export default function HabitCompanionHome() {
  return (
    <>
      <Head>
        <title>习惯陪伴 - AI智能习惯养成助手</title>
        <meta name="description" content="AI驱动的个性化习惯养成助手，陪伴您的每一步成长" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <style jsx>{`
          .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .card-hover {
            transition: all 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
          .feature-icon {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          }
          .scroll-smooth {
            scroll-behavior: smooth;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .floating {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </Head>

      <div className="scroll-smooth">
        {/* 导航栏 */}
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <i className="fas fa-seedling text-white text-lg"></i>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">习惯陪伴</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">功能特色</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">工作原理</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">价格方案</a>
                <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">在线演示</a>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors">登录</button>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">开始使用</button>
              </div>
            </div>
          </div>
        </nav>

        {/* 公告栏 */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center py-2 mt-20">
          <p className="text-sm">🎉 全新AI智能推荐功能已上线！立即体验个性化习惯养成计划</p>
        </div>

        {/* 英雄区域 */}
        <section className="gradient-bg text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  AI智能<br/>
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">习惯养成</span><br/>
                  陪伴助手
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  利用AI技术为您量身定制个性化习惯养成计划，智能陪伴您的每一步成长，让好习惯自然而然地融入生活。
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <i className="fas fa-rocket mr-2"></i>
                    立即开始免费体验
                  </button>
                  <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                    <i className="fas fa-play mr-2"></i>
                    观看演示视频
                  </button>
                </div>
                <div className="mt-8 flex items-center space-x-6 text-blue-100">
                  <div className="flex items-center">
                    <i className="fas fa-users mr-2"></i>
                    <span>10,000+ 用户信赖</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    <span>4.9/5 用户评分</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="floating">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-brain text-white text-2xl"></i>
                      </div>
                      <h3 className="text-xl font-semibold">AI智能分析</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                        <span>早起习惯</span>
                        <div className="w-16 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                        <span>运动锻炼</span>
                        <div className="w-12 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                        <span>阅读学习</span>
                        <div className="w-20 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 功能特色 */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">强大功能，助力成长</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                集成先进AI技术，为您提供全方位的习惯养成解决方案
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-hover bg-white rounded-xl p-8 shadow-lg">
                <div className="feature-icon w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <i className="fas fa-robot text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI个性化推荐</h3>
                <p className="text-gray-600 mb-4">基于您的生活方式、目标和偏好，AI为您量身定制最适合的习惯养成计划。</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 智能分析个人特征</li>
                  <li>• 动态调整计划难度</li>
                  <li>• 个性化提醒时间</li>
                </ul>
              </div>

              <div className="card-hover bg-white rounded-xl p-8 shadow-lg">
                <div className="feature-icon w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">智能进度跟踪</h3>
                <p className="text-gray-600 mb-4">实时监测习惯执行情况，提供详细的数据分析和可视化图表。</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 多维度数据统计</li>
                  <li>• 趋势分析报告</li>
                  <li>• 成就里程碑</li>
                </ul>
              </div>

              <div className="card-hover bg-white rounded-xl p-8 shadow-lg">
                <div className="feature-icon w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <i className="fas fa-comments text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI陪伴聊天</h3>
                <p className="text-gray-600 mb-4">24/7 AI助手陪伴，提供鼓励、建议和情感支持，让您不再孤单。</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 情感智能对话</li>
                  <li>• 及时鼓励反馈</li>
                  <li>• 困难时期支持</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 价格方案 */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">选择适合您的方案</h2>
              <p className="text-xl text-gray-600">从免费体验到专业版，总有一款适合您</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">免费版</h3>
                  <div className="text-4xl font-bold mb-2">¥0</div>
                  <p className="text-gray-600">永久免费</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>基础习惯跟踪</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>简单进度统计</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>3个习惯同时跟踪</span>
                  </li>
                </ul>
                <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors">
                  开始免费使用
                </button>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">推荐</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">专业版</h3>
                  <div className="text-4xl font-bold mb-2">¥29</div>
                  <p className="text-gray-600">每月</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>无限习惯跟踪</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>AI个性化推荐</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>AI陪伴聊天</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  立即升级
                </button>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">团队版</h3>
                  <div className="text-4xl font-bold mb-2">¥199</div>
                  <p className="text-gray-600">每月 (5人)</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>专业版全部功能</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>团队协作功能</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>管理员仪表板</span>
                  </li>
                </ul>
                <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors">
                  联系销售
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <i className="fas fa-seedling text-white text-sm"></i>
                  </div>
                  <span className="text-xl font-bold">习惯陪伴</span>
                </div>
                <p className="text-gray-400 mb-4">AI驱动的个性化习惯养成助手，陪伴您的每一步成长。</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">产品</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">功能特色</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">价格方案</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">用户案例</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">支持</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">联系方式</h4>
                <p className="text-gray-400">support@habitcompanion.ai</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 习惯陪伴. MIT许可证下发布.</p>
            </div>
          </div>
        </footer>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          // 平滑滚动
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            });
          });

          // 导航栏滚动效果
          window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
              nav.classList.add('bg-white');
              nav.classList.remove('bg-white/90');
            } else {
              nav.classList.add('bg-white/90');
              nav.classList.remove('bg-white');
            }
          });
        `
      }} />
    </>
  );
}
