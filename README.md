<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>智竞AI - 领先的AI竞赛推荐平台</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background: #fafbfc;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: #fff;
            padding: 1rem 0;
            border-bottom: 1px solid #eee;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1a365d;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-links a {
            text-decoration: none;
            color: #2d3748;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
            color: #2c5282;
        }
        
        .cta-btn {
            background: linear-gradient(135deg, #2c5282 0%, #1a365d 100%);
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(44, 82, 130, 0.2);
        }
        
        .cta-btn:hover {
            background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(44, 82, 130, 0.3);
        }
        
        main {
            margin-top: 80px;
        }
        
        .hero {
            text-align: center;
            padding: 4rem 0;
            background: linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #3182ce 100%);
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%);
            pointer-events: none;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .trusted-by {
            padding: 2rem 0;
            background: #f7fafc;
            text-align: center;
        }
        
        .trusted-by p {
            margin-bottom: 1rem;
            color: #64748b;
        }
        
        .logos {
            display: flex;
            justify-content: center;
            gap: 3rem;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .logo-item {
            padding: 0.5rem 1rem;
            background: white;
            border-radius: 0.5rem;
            font-weight: 600;
            color: #475569;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .how-it-works {
            padding: 4rem 0;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #1a202c;
            font-weight: 700;
        }
        
        .steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .step {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .step:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 35px rgba(0,0,0,0.12);
        }
        
        .step-icon {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #2c5282 0%, #3182ce 100%);
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.75rem;
            color: white;
            box-shadow: 0 8px 25px rgba(44, 82, 130, 0.2);
        }
        
        .step h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #1a202c;
            font-weight: 600;
        }
        
        .step p {
            color: #4a5568;
            line-height: 1.6;
        }
        
        .features {
            padding: 4rem 0;
            background: #f8fafc;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .feature {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 6px 20px rgba(0,0,0,0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .feature-icon {
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, #2c5282 0%, #3182ce 100%);
            border-radius: 0.75rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.25rem;
            box-shadow: 0 4px 15px rgba(44, 82, 130, 0.15);
        }
        
        .feature h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
            color: #1a202c;
            font-weight: 600;
        }
        
        .feature p {
            color: #4a5568;
        }
        
        .testimonials {
            padding: 4rem 0;
        }
        
        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .testimonial {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 6px 20px rgba(0,0,0,0.06);
            border-left: 4px solid #2c5282;
            transition: transform 0.3s ease;
        }
        
        .testimonial:hover {
            transform: translateY(-2px);
        }
        
        .testimonial p {
            font-style: italic;
            margin-bottom: 1rem;
            color: #2d3748;
        }
        
        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .author-avatar {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #2c5282 0%, #3182ce 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        .author-info h4 {
            font-size: 1rem;
            color: #1a202c;
            font-weight: 600;
        }
        
        .author-info p {
            font-size: 0.875rem;
            color: #4a5568;
            margin: 0;
        }
        
        .pricing {
            padding: 4rem 0;
            background: #f8fafc;
        }
        
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .plan {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 6px 20px rgba(0,0,0,0.06);
            text-align: center;
            position: relative;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .plan:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .plan.featured {
            border: 2px solid #2c5282;
            transform: scale(1.05);
        }
        
        .plan.featured::before {
            content: "推荐";
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #2c5282 0%, #3182ce 100%);
            color: white;
            padding: 0.25rem 1rem;
            border-radius: 1rem;
            font-size: 0.875rem;
            box-shadow: 0 4px 15px rgba(44, 82, 130, 0.2);
        }
        
        .plan h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #1a202c;
            font-weight: 600;
        }
        
        .price {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2c5282;
            margin-bottom: 1rem;
        }
        
        .plan ul {
            list-style: none;
            margin-bottom: 2rem;
        }
        
        .plan li {
            padding: 0.5rem 0;
            color: #4a5568;
        }
        
        .plan li:before {
            content: "✓";
            color: #10b981;
            font-weight: bold;
            margin-right: 0.5rem;
        }
        
        .faq {
            padding: 4rem 0;
        }
        
        .faq-item {
            margin-bottom: 2rem;
            background: white;
            border-radius: 0.75rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: box-shadow 0.3s ease;
        }
        
        .faq-item:hover {
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }
        
        .faq-question {
            padding: 1.5rem;
            font-weight: 600;
            color: #1a202c;
            cursor: pointer;
            border-bottom: 1px solid #e2e8f0;
            transition: color 0.3s ease;
        }
        
        .faq-question:hover {
            color: #2c5282;
        }
        
        .faq-answer {
            padding: 1.5rem;
            color: #4a5568;
            line-height: 1.6;
        }
        
        footer {
            background: #1a202c;
            color: white;
            text-align: center;
            padding: 2rem 0;
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .steps {
                grid-template-columns: 1fr;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .plan.featured {
                transform: none;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <div class="logo">智竞AI</div>
            <ul class="nav-links">
                <li><a href="#how">如何使用</a></li>
                <li><a href="#features">功能特色</a></li>
                <li><a href="#pricing">价格方案</a></li>
                <li><a href="#faq">常见问题</a></li>
            </ul>
            <a href="#pricing" class="cta-btn">立即开始</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>领先的AI竞赛推荐平台</h1>
                <p>智能匹配最适合您的AI竞赛，助力您在人工智能领域脱颖而出</p>
                <a href="#how" class="cta-btn" style="display: inline-block; margin-top: 1rem;">探索竞赛</a>
            </div>
        </section>

        <section class="trusted-by">
            <div class="container">
                <p>已帮助来自顶尖平台的参赛者</p>
                <div class="logos">
                    <div class="logo-item">Kaggle</div>
                    <div class="logo-item">天池</div>
                    <div class="logo-item">DataFountain</div>
                    <div class="logo-item">AI Studio</div>
                    <div class="logo-item">FlyAI</div>
                </div>
            </div>
        </section>

        <section id="how" class="how-it-works">
            <div class="container">
                <h2 class="section-title">如何使用</h2>
                <p style="text-align: center; color: #64748b; font-size: 1.125rem;">我们的AI平台通过三个简单步骤为您找到最适合的竞赛</p>
                
                <div class="steps">
                    <div class="step">
                        <div class="step-icon">📝</div>
                        <h3>填写技能档案</h3>
                        <p>告诉我们您的技术背景、兴趣方向和参赛经验，让AI更好地了解您</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-icon">🤖</div>
                        <h3>AI智能分析</h3>
                        <p>我们的AI算法分析当前热门竞赛，根据您的档案匹配最合适的项目</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-icon">🏆</div>
                        <h3>获得精准推荐</h3>
                        <p>收到个性化的竞赛推荐列表，包含详细分析和参赛建议</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" class="features">
            <div class="container">
                <h2 class="section-title">完善的竞赛推荐体验</h2>
                
                <div class="features-grid">
                    <div class="feature">
                        <div class="feature-icon">🎯</div>
                        <h3>精准匹配</h3>
                        <p>基于机器学习算法，根据您的技能水平和兴趣精准推荐竞赛</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">⚡</div>
                        <h3>实时更新</h3>
                        <p>竞赛信息实时同步，第一时间获得最新的竞赛动态和机会</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">📊</div>
                        <h3>详细分析</h3>
                        <p>提供竞赛难度分析、获奖概率评估和参赛策略建议</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">👥</div>
                        <h3>团队匹配</h3>
                        <p>智能推荐互补技能的队友，提高团队作战成功率</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">📚</div>
                        <h3>学习资源</h3>
                        <p>提供相关学习资料和解决方案，帮助您快速提升竞赛技能</p>
                    </div>
                    
                    <div class="feature">
                        <div class="feature-icon">🔔</div>
                        <h3>智能提醒</h3>
                        <p>重要时间节点提醒，确保您不错过任何关键截止日期</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <div class="container">
                <h2 class="section-title">用户反馈</h2>
                <p style="text-align: center; color: #64748b; font-size: 1.125rem;">数千名AI爱好者通过我们的平台找到了理想的竞赛</p>
                
                <div class="testimonials-grid">
                    <div class="testimonial">
                        <p>"通过智竞AI推荐的计算机视觉竞赛，我不仅学到了很多新技术，还获得了第三名的好成绩！推荐算法真的很精准。"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">王</div>
                            <div class="author-info">
                                <h4>王小明</h4>
                                <p>算法工程师</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="testimonial">
                        <p>"作为AI初学者，平台推荐的入门级竞赛让我快速积累了实战经验。现在我已经能参加更高难度的比赛了。"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">李</div>
                            <div class="author-info">
                                <h4>李小红</h4>
                                <p>数据科学家</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="testimonial">
                        <p>"团队匹配功能太棒了！通过平台找到了技能互补的队友，我们一起在NLP竞赛中取得了优异成绩。"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">张</div>
                            <div class="author-info">
                                <h4>张大华</h4>
                                <p>机器学习研究员</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing" class="pricing">
            <div class="container">
                <h2 class="section-title">选择适合您的方案</h2>
                <p style="text-align: center; color: #64748b; font-size: 1.125rem;">专业级竞赛推荐服务，价格实惠</p>
                
                <div class="pricing-grid">
                    <div class="plan">
                        <h3>免费版</h3>
                        <div class="price">¥0<span style="font-size: 1rem; font-weight: normal;">/月</span></div>
                        <ul>
                            <li>基础竞赛推荐</li>
                            <li>每月3次推荐</li>
                            <li>基础难度分析</li>
                            <li>邮件通知</li>
                        </ul>
                        <a href="#" class="cta-btn" style="display: block;">免费开始</a>
                    </div>
                    
                    <div class="plan featured">
                        <h3>专业版</h3>
                        <div class="price">¥49<span style="font-size: 1rem; font-weight: normal;">/月</span></div>
                        <ul>
                            <li>无限竞赛推荐</li>
                            <li>高级匹配算法</li>
                            <li>详细分析报告</li>
                            <li>团队匹配服务</li>
                            <li>学习资源库</li>
                            <li>优先客服支持</li>
                        </ul>
                        <a href="#" class="cta-btn" style="display: block;">立即升级</a>
                    </div>
                    
                    <div class="plan">
                        <h3>企业版</h3>
                        <div class="price">¥199<span style="font-size: 1rem; font-weight: normal;">/月</span></div>
                        <ul>
                            <li>团队账户管理</li>
                            <li>企业专属推荐</li>
                            <li>定制化分析</li>
                            <li>专属客户经理</li>
                            <li>API接口访问</li>
                            <li>数据导出功能</li>
                        </ul>
                        <a href="#" class="cta-btn" style="display: block;">联系销售</a>
                    </div>
                </div>
                
                <p style="text-align: center; margin-top: 2rem; color: #64748b;">
                    所有方案均包含7天满意保证。需要定制方案？<a href="#" style="color: #6366f1;">联系我们</a>
                </p>
            </div>
        </section>

        <section id="faq" class="faq">
            <div class="container">
                <h2 class="section-title">常见问题</h2>
                <p style="text-align: center; color: #64748b; font-size: 1.125rem;">关于AI竞赛推荐服务的常见问题解答</p>
                
                <div style="max-width: 800px; margin: 2rem auto;">
                    <div class="faq-item">
                        <div class="faq-question">平台如何确保推荐的准确性？</div>
                        <div class="faq-answer">我们使用先进的机器学习算法，结合您的技能档案、历史参赛记录和竞赛特点进行多维度匹配。算法会持续学习和优化，确保推荐的准确性不断提升。</div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question">支持哪些类型的AI竞赛？</div>
                        <div class="faq-answer">平台覆盖计算机视觉、自然语言处理、推荐系统、时间序列预测、强化学习等各个AI领域的竞赛，包括Kaggle、天池、DataFountain等主流平台。</div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question">团队匹配功能如何工作？</div>
                        <div class="faq-answer">系统会分析您的技能优势和不足，智能匹配具有互补技能的队友。您可以查看潜在队友的技能档案和历史成绩，主动发起合作邀请。</div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question">初学者也能使用这个平台吗？</div>
                        <div class="faq-answer">当然可以！平台会根据您的技能水平推荐适合的入门级竞赛，并提供相应的学习资源和指导，帮助您快速入门AI竞赛。</div>
                    </div>
                    
                    <div class="faq-item">
                        <div class="faq-question">如何更新我的技能档案？</div>
                        <div class="faq-answer">您可以随时在个人中心更新技能档案，包括新学习的技术、参赛经历等。系统会根据最新信息调整推荐策略，确保推荐的竞赛始终符合您的当前水平。</div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 智竞AI. 专注于AI竞赛推荐服务</p>
        </div>
    </footer>

    <script>
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

        // FAQ交互
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isVisible = answer.style.display === 'block';
                
                // 关闭所有其他答案
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.style.display = 'none';
                });
                
                // 切换当前答案
                answer.style.display = isVisible ? 'none' : 'block';
            });
        });

        // 导航栏滚动效果
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#fff';
                header.style.backdropFilter = 'none';
            }
        });
    </script>
</body>
</html>
