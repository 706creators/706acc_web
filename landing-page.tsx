"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Component() {
  const [mounted, setMounted] = useState(false);
  const [showPressModal, setShowPressModal] = useState(false);
  const [showIdeationModal, setShowIdeationModal] = useState(false);
  const [showStarterModal, setShowStarterModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState('');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // 背景图像数组按行组织
  const backgroundImageRows = [
    // 第一行：1-6
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      src: `/${i + 1}.jpg`,
      alt: `Project ${i + 1}`,
    })),
    // 第二行：7-12
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 7,
      src: `/${i + 7}.jpg`,
      alt: `Project ${i + 7}`,
    })),
    // 第三行：13-18
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 13,
      src: `/${i + 13}.jpg`,
      alt: `Project ${i + 13}`,
    })),
    // 第四行：19-24
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 19,
      src: `/${i + 19}.jpg`,
      alt: `Project ${i + 19}`,
    })),
    // 第五行：25-31
    Array.from({ length: 7 }, (_, i) => ({
      id: i + 25,
      src: `/${i + 25}.jpg`,
      alt: `Project ${i + 25}`,
    })),
  ];

  // Twitter推文信息
  const tweetInfo = {
    id: "1922238801264706002",
    user: "Labs706",
    userImage: "/706acc.svg", // 用您的 logo 或默认图像
    text: "706ACC创新工作室最新动态，点击查看完整推文",
    date: "2024-05-07",
    url: "https://x.com/Labs706/status/1922238801264706002"
  };

  // Ideation文章信息
  const ideationArticles = [
    {
      id: 1,
      title: "创新思维的培养与实践",
      excerpt: "探讨如何在现代社会中培养创新思维，从理论到实践的全面指南...",
      date: "2024-05-10",
      readTime: "8 分钟阅读",
      url: "https://mp.weixin.qq.com/s/A2sSkByrrK8JXQ_DTbF6YQ",
      tag: "思维方法"
    },
    {
      id: 2,
      title: "设计思维在产品开发中的应用",
      excerpt: "深入分析设计思维如何改变传统产品开发流程，提升用户体验...",
      date: "2024-05-03",
      readTime: "6 分钟阅读",
      url: "https://mp.weixin.qq.com/s/JTbVZNd219TrbU_S7nBVhw",
      tag: "产品设计"
    },
    {
      id: 3,
      title: "数字化时代的创新策略",
      excerpt: "解析数字化转型背景下的创新策略制定与执行要点...",
      date: "2024-04-28",
      readTime: "10 分钟阅读",
      url: "https://mp.weixin.qq.com/s/oZT9p0H7BAIZNr_e9MiOhg",
      tag: "数字化"
    }
  ];

  // 模块介绍信息
  const moduleDescriptions = {
    weekly: {
      title: "WEEKLY",
      description: "学以致用，工具即能力。每周掌握一个前沿工具，用技能加速从想法到实现的全过程。"
    },
    ideation: {
      title: "IDEATION", 
      description: "激发想法，连接观点。每周夜谈式讨论，聚焦前沿趋势与创新项目，为创意找到落地的起点。"
    },
    starter: {
      title: "STARTER",
      description: "启动你的项目，获得社区支持。完成MVP后可发起众筹，让社区参与、支持并见证项目的起飞。"
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md">
        {/* 左侧 Logo和导航 */}
        <div className="flex items-center space-x-6">
          <div className="text-white text-lg font-bold">706/acc</div>
          <div className="flex space-x-4">
            {/* Weekly按钮 - 添加Tooltip */}
            <div className="relative">
              <button 
                className="text-white hover:bg-white/10 px-3 py-1 rounded-sm transition-all duration-200"
                onClick={() => window.open('https://space.bilibili.com/263714704', '_blank')}
                onMouseEnter={() => setShowTooltip('weekly')}
                onMouseLeave={() => setShowTooltip('')}
              >
                Weekly
              </button>
              
              {/* Weekly Tooltip */}
              {showTooltip === 'weekly' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/90 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 p-4 text-white z-60">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <h4 className="font-semibold text-sm">{moduleDescriptions.weekly.title}</h4>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {moduleDescriptions.weekly.description}
                  </p>
                  {/* 小箭头 */}
                  <div className="absolute -top-1 left-4 w-2 h-2 bg-black/90 border-l border-t border-white/20 transform rotate-45"></div>
                </div>
              )}
            </div>
            
            {/* Ideation按钮 - 添加Tooltip */}
            <div className="relative">
              <button 
                className={`text-white hover:bg-white/10 px-3 py-1 rounded-sm transition-all duration-200 ${
                  showIdeationModal ? 'bg-white/10' : ''
                }`}
                onClick={() => setShowIdeationModal(!showIdeationModal)}
                onMouseEnter={() => setShowTooltip('ideation')}
                onMouseLeave={() => setShowTooltip('')}
              >
                Ideation
              </button>
              
              {/* Ideation Tooltip */}
              {showTooltip === 'ideation' && !showIdeationModal && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/90 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 p-4 text-white z-60">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <h4 className="font-semibold text-sm">{moduleDescriptions.ideation.title}</h4>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {moduleDescriptions.ideation.description}
                  </p>
                  {/* 小箭头 */}
                  <div className="absolute -top-1 left-4 w-2 h-2 bg-black/90 border-l border-t border-white/20 transform rotate-45"></div>
                </div>
              )}
              
              {/* Ideation 下拉展开内容 */}
              <div 
                className={`absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 transition-all duration-300 ease-out origin-top ${
                  showIdeationModal 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="p-6">
                  {/* 标题区域 */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">最新思考</h3>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* 文章列表 */}
                  <div className="space-y-3">
                    {ideationArticles.map((article, index) => (
                      <div 
                        key={article.id}
                        className="bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] group"
                        onClick={() => window.open(article.url, '_blank')}
                      >
                        <div className="p-4">
                          {/* 文章标签和日期 */}
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                              {article.tag}
                            </span>
                            <div className="flex items-center text-gray-400 group-hover:text-blue-500 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                              </svg>
                            </div>
                          </div>
                          
                          {/* 文章标题 */}
                          <h4 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h4>
                          
                          {/* 文章摘要 */}
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          
                          {/* 文章元信息 */}
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        {/* 底部装饰条 */}
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 底部链接 */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">更多文章</span>
                      <button 
                        className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
                        onClick={() => window.open('https://mp.weixin.qq.com/mp/homepage?__biz=MzU3ODYzNjk2MA==', '_blank')}
                      >
                        微信公众号
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Starter按钮 - 添加Tooltip */}
            <div className="relative">
              <button 
                className="text-white hover:bg-white/10 px-3 py-1 rounded-sm transition-all duration-200"
                onClick={() => setShowStarterModal(true)}
                onMouseEnter={() => setShowTooltip('starter')}
                onMouseLeave={() => setShowTooltip('')}
              >
                Starter
              </button>
              
              {/* Starter Tooltip */}
              {showTooltip === 'starter' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/90 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 p-4 text-white z-60">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <h4 className="font-semibold text-sm">{moduleDescriptions.starter.title}</h4>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {moduleDescriptions.starter.description}
                  </p>
                  {/* 小箭头 */}
                  <div className="absolute -top-1 left-4 w-2 h-2 bg-black/90 border-l border-t border-white/20 transform rotate-45"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* 中间搜索框 */}
        <div className="flex-1 max-w-md mx-4 relative">
          <button 
            className={`flex items-center justify-between w-full rounded-md px-4 py-2 transition-all duration-200 ${
              showPressModal 
                ? 'bg-white/20 border-white/30 border' 
                : 'bg-white/10 hover:bg-white/15'
            }`}
            onClick={() => setShowPressModal(!showPressModal)}
          >
            <span className="text-white/70">Press</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${showPressModal ? 'rotate-45' : ''}`}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          {/* Press 下拉展开内容 */}
          <div 
            className={`absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 transition-all duration-300 ease-out origin-top ${
              showPressModal 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="p-6">
              {/* 标题区域 */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Latest from 706ACC</h3>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* Twitter推文卡片 */}
              <div 
                className="bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] group"
                onClick={() => window.open(tweetInfo.url, '_blank')}
              >
                {/* 推文头部 */}
                <div className="flex items-center p-4 border-b border-gray-50">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 mr-3 flex items-center justify-center">
                    <img 
                      src={tweetInfo.userImage} 
                      alt={tweetInfo.user}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 flex items-center">
                      {tweetInfo.user}
                      <svg className="ml-1 text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                      </svg>
                    </div>
                    <div className="text-gray-500 text-sm">@{tweetInfo.user} · {tweetInfo.date}</div>
                  </div>
                  <div className="flex items-center text-gray-400 group-hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
                
                {/* 推文内容 */}
                <div className="p-4">
                  <p className="text-gray-800 text-sm leading-relaxed">{tweetInfo.text}</p>
                </div>
                
                {/* 推文预览图 - 简化版 */}
                <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center border-t border-gray-50">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Click to view full post</p>
                  </div>
                </div>
              </div>
              
              {/* 底部链接 */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">More updates on</span>
                  <button 
                    className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
                    onClick={() => window.open('https://x.com/labs706', '_blank')}
                  >
                    Twitter
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧链接和信息 */}
        <div className="flex items-center space-x-6">
          <button 
            className="text-white hover:underline flex items-center"
            onClick={() => window.open('706creators.io', '_blank')}
          >
            <span>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
          
          <div className="text-white/70 text-sm hidden md:block">COME HERE AND FIND YOURSELF</div>
          
          {/* 主题切换按钮 */}
          <button 
            className="p-2 text-white hover:bg-white/10 rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Starter 弹窗 */}
      {showStarterModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4">Starter Modal</h2>
            <p className="text-sm text-gray-600">This is a placeholder for the Starter modal content.</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => setShowStarterModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 点击外部区域关闭下拉菜单 */}
      {(showPressModal || showIdeationModal) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowPressModal(false);
            setShowIdeationModal(false);
          }}
        />
      )}

      {/* 半透明遮罩层 - 调低透明度 */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/30' : 'bg-gray-500/20'}`} />

      {/* 背景图像渲染部分 - 简洁优雅版本 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 主背景网格 - 使用更规整的布局 */}
        <div className="absolute inset-0 opacity-25">
          <div className="grid grid-cols-8 gap-3 p-6 h-full">
            {backgroundImageRows.flat().slice(0, 24).map((image, index) => {
              // 定义3种不同的卡片尺寸，创造节奏感
              const sizeVariants = [
                'col-span-2 row-span-2', // 大卡片
                'col-span-1 row-span-2', // 竖直卡片
                'col-span-2 row-span-1', // 横向卡片
              ];
              
              // 根据位置分配不同尺寸，创造有序的视觉层次
              const getSizeClass = (idx) => {
                if (idx % 8 === 0 || idx % 8 === 3) return sizeVariants[0]; // 大卡片
                if (idx % 8 === 1 || idx % 8 === 6) return sizeVariants[1]; // 竖直卡片
                return sizeVariants[2]; // 横向卡片
              };
              
              return (
                <div
                  key={image.id}
                  className={`${getSizeClass(index)} relative overflow-hidden rounded-lg group transition-all duration-500 ease-out hover:scale-105 hover:z-10`}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* 卡片背景和边框 */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg" />
                  
                  {/* 悬浮时的渐变覆盖 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* 图片 */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.endsWith('.jpg')) {
                        target.src = target.src.replace('.jpg', '.png');
                      }
                    }}
                  />
                  
                  {/* 悬浮时的光晕边框 */}
                  <div className="absolute inset-0 ring-1 ring-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* 背景装饰元素 - 更少更精致 */}
        <div className="absolute inset-0 opacity-15">
          {/* 大型浮动卡片作为背景层 */}
          {[2, 8, 15, 22].map((imageIndex, i) => (
            <div
              key={`bg-card-${imageIndex}`}
              className="absolute rounded-xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10"
              style={{
                width: `${200 + i * 30}px`,
                height: `${120 + i * 20}px`,
                top: `${20 + i * 25}%`,
                right: `${10 + i * 15}%`,
                transform: `rotate(${-5 + i * 3}deg)`,
                animation: `gentleFloat 8s ease-in-out infinite`,
                animationDelay: `${i * 2}s`
              }}
            >
              <img
                src={`/${imageIndex}.jpg`}
                alt={`Background ${imageIndex}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith('.jpg')) {
                    target.src = target.src.replace('.jpg', '.png');
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* 几何装饰元素 */}
        <div className="absolute inset-0 opacity-10">
          {/* 简洁的几何线条 */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* 角落的装饰圆点 */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                top: `${10 + i * 15}%`,
                left: `${5 + (i % 2) * 90}%`,
                animation: `pulse 4s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* 自定义CSS动画 */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `}</style>

      {/* 中央内容 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        <div className="mb-8">
          <img
            src="/706acc.svg"
            alt="706 Logo"
            className="h-32 md:h-40 lg:h-56 w-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith('.svg')) {
                target.src = '/706acc.png';
              }
            }}
          />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          WHERE SEEKERS SHAPE THE FUTURE
        </h1>
      </div>

      {/* 装饰性光球效果 */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl" />
    </div>
  );
}
