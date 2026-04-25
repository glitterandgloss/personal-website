import { useEffect, useState } from 'react'
import './App.css'

interface SocialLink {
  name: string
  icon: string
}

const socialLinks: SocialLink[] = [
  { name: '微信', icon: 'wechat' },
  { name: '语雀', icon: 'yuque' },
  { name: 'Bilibili', icon: 'bilibili' },
  { name: 'DeepSeek', icon: 'deepseek' },
  { name: 'Youtube', icon: 'youtube' },
  { name: '小红书', icon: 'xiaohongshu' },
  { name: 'X', icon: 'x' },
  { name: '微信公众号', icon: 'wechat-mp' },
  { name: '即刻', icon: 'jike' },
]

interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'AI 智能助手',
    description: '基于大语言模型的智能对话助手，支持多轮对话和知识检索。',
    tech: ['React', 'TypeScript', 'FastAPI', 'OpenAI'],
  },
  {
    title: '图像生成工具',
    description: '使用 Stable Diffusion 的 AI 绘画应用，支持文生图和图生图。',
    tech: ['Python', 'PyTorch', 'Gradio', 'Docker'],
  },
  {
    title: '智能内容平台',
    description: 'AI 驱动的内容创作与管理平台，自动化生成和分发内容。',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel AI'],
  },
]

function App() {
  useEffect(() => {
    const existing = document.getElementById('busuanzi-script')
    if (!existing) {
      const script = document.createElement('script')
      script.id = 'busuanzi-script'
      script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="app">
      <main className="container">
        {/* 个人信息区域 */}
        <section className="profile">
          <div className="avatar">
            <img src="https://tse4.mm.bing.net/th/id/OIP.0U2IF52xDhkTheONZrx3XwHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3" alt="玄渊策鸣" className="avatar-img" />
          </div>
          <div className="profile-info">
            <h1 className="name">玄渊策鸣</h1>
            <div className="tags">
              <p>AI发烧友 | 探索人工智能的无限可能</p>
              <p>INFJ | 理想主义者的温柔内心</p>
              <p>喜欢弹琴的理工男 | 代码与音符的浪漫</p>
            </div>
          </div>
        </section>

        {/* 社交媒体区域 */}
        <section className="social-section">
          <div className="social-grid">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href="#"
                className="social-card"
                title={social.name}
              >
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* 个人项目区域 */}
        <section className="projects-section">
          <h2 className="section-title">个人项目</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 访问统计 */}
        <section className="stats-section">
          <div className="stats-item">
            <span className="stats-label">总访客</span>
            <span id="busuanzi_value_site_uv" className="stats-value">...</span>
          </div>
          <div className="stats-divider">|</div>
          <div className="stats-item">
            <span className="stats-label">总访问量</span>
            <span id="busuanzi_value_site_pv" className="stats-value">...</span>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="footer">
          <p>© 2026 玄渊策鸣. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
