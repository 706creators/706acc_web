"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Component() {
  const [mounted, setMounted] = useState(false);
  const [showPressModal, setShowPressModal] = useState(false);
  const [showIdeationModal, setShowIdeationModal] = useState(false);
  const [showWeeklyModal, setShowWeeklyModal] = useState(false);
  const [showStarterModal, setShowStarterModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState('');
  const { theme, setTheme } = useTheme();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 背景图像数组按行组织
  const backgroundImageRows = [
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      src: `/${i + 1}.jpg`,
      alt: `Project ${i + 1}`,
    })),
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 7,
      src: `/${i + 7}.jpg`,
      alt: `Project ${i + 7}`,
    })),
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 13,
      src: `/${i + 13}.jpg`,
      alt: `Project ${i + 13}`,
    })),
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 19,
      src: `/${i + 19}.jpg`,
      alt: `Project ${i + 19}`,
    })),
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
    userImage: "/706acc.svg",
    text: "706ACC创新工作室最新动态，点击查看完整推文",
    date: "2024-05-07",
    url: "https://x.com/Labs706/status/1922238801264706002"
  };

  // Ideation文章信息
  const ideationArticles = [
    {
      id: 1,
      title: "你为什么留在社区？",
      excerpt: "我偶尔也会想，为什么我还留在社区？",
      url: "https://mp.weixin.qq.com/s/A2sSkByrrK8JXQ_DTbF6YQ",
      tag: "706/acc Ideation #1"
    },
    {
      id: 2,
      title: "你的电子股东已就位",
      excerpt: "新老朋友们分享了有意思的项目，收获了一众电子股东，还有的获得了潜在投资意向",
      url: "https://mp.weixin.qq.com/s/JTbVZNd219TrbU_S7nBVhw",
      tag: "706/acc Ideation #2"
    },
    {
      id: 3,
      title: "面向社区编程",
      excerpt: "我寻思 🤔，能承载 706 等社区用户最小行为的、最轻量级的产品形态。",
      url: "https://mp.weixin.qq.com/s/oZT9p0H7BAIZNr_e9MiOhg",
      tag: "706/acc Ideation #3"
    }
  ];

  // Weekly视频信息
  const weeklyVideos = [
    {
      id: 1,
      title: "使用 v0，快速构建一个产品原型",
      description: "邀请了 706 的老朋友 & 合约工程师 Yan 来给我们分享 v0 的实践 ",
      url: "https://www.bilibili.com/video/BV1nQMHziETt/?share_source=copy_web",
      thumbnail: "/weekly-thumbnail-1.jpg",
      tag: "706/acc Weekly #24"
    },
    {
      id: 2,
      title: "Pendle 创新型 AMM 协议的设计范式",
      description: "邀请了 Buzzing Club Co-Founder & Defi 资深研究者 Luke 🧑🏻‍🎤，跟大家深入聊聊备受关注的 Pendle 协议",
      url: "https://www.bilibili.com/video/BV1sRTHz6EQC/?share_source=copy_web&vd_source=1b0d687b21b6f10f4eec82b7eb751c27",
      thumbnail: "/weekly-thumbnail-2.jpg",
      tag: "706/acc Weekly #23"
    },
    {
      id: 3,
      title: "CopilotKit 探索 Agent 交互的新方式",
      description: "社区技术发电机 & 纯爱永动机星 sir一起聊聊 CopilotKit",
      url: "https://www.bilibili.com/video/BV191EXzTEVv/?share_source=copy_web&vd_source=1b0d687b21b6f10f4eec82b7eb751c27",
      thumbnail: "/weekly-thumbnail-3.jpg",
      tag: "706/acc Weekly #22"
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        {/* 添加动态背景 */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl border-b border-white/10" />
        <div 
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`
          }}
        />
        
        {/* 左侧 Logo和导航 */}
        <div className="flex items-center space-x-6 relative z-10">
          <div className="text-white text-lg font-bold hover:scale-110 transition-transform duration-300 cursor-pointer">
            706/acc
          </div>
          <div className="flex space-x-4">
            {/* 增强Weekly按钮 */}
            <div className="relative">
              <button 
                className={`relative overflow-hidden text-white px-4 py-2 rounded-xl transition-all duration-300 group ${
                  showWeeklyModal ? 'bg-white/20 shadow-lg' : 'hover:bg-white/10'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWeeklyModal(!showWeeklyModal);
                  // 关闭其他下拉菜单
                  setShowIdeationModal(false);
                  setShowPressModal(false);
                }}
                onMouseEnter={() => setShowTooltip('weekly')}
                onMouseLeave={() => setShowTooltip('')}
              >
                {/* 添加动态背景光效 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 to-purple-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 font-medium">Weekly</span>
              </button>
              
              {/* 增强Tooltip样式 */}
              {showTooltip === 'weekly' && !showWeeklyModal && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-black/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-6 text-white z-[70] animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 shadow-lg shadow-blue-500/50"></div>
                    <h4 className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {moduleDescriptions.weekly.title}
                    </h4>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed font-medium">
                    {moduleDescriptions.weekly.description}
                  </p>
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-black/95 border-l border-t border-white/20 transform rotate-45"></div>
                  
                  {/* 添加装饰性元素 */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-spin-slow"></div>
                </div>
              )}

              {/* Weekly 下拉展开内容 */}
              <div 
                className={`absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 transition-all duration-300 ease-out origin-top z-[60] ${
                  showWeeklyModal 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Weekly 最新视频</h3>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    {weeklyVideos.map((video, index) => (
                      <div 
                        key={video.id}
                        className="bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] group"
                        onClick={() => window.open(video.url, '_blank')}
                      >
                        <div className="flex gap-3 p-3">
                          <div className="flex-shrink-0 w-20 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-md flex items-center justify-center relative overflow-hidden">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                              {video.duration}
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1">
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                                {video.tag}
                              </span>
                              <div className="flex items-center text-gray-400 group-hover:text-blue-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="7" y1="17" x2="17" y2="7"></line>
                                  <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                              </div>
                            </div>
                            
                            <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {video.title}
                            </h4>
                            
                            <p className="text-xs text-gray-600 line-clamp-1 mb-2">
                              {video.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span>{video.date}</span>
                              <span>B站视频</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">查看全部视频</span>
                      <button 
                        className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
                        onClick={() => window.open('https://space.bilibili.com/263714704', '_blank')}
                      >
                        B站主页
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
            
            {/* 增强Ideation按钮 */}
            <div className="relative">
              <button 
                className={`relative overflow-hidden text-white px-4 py-2 rounded-xl transition-all duration-300 group ${
                  showIdeationModal ? 'bg-white/20 shadow-lg' : 'hover:bg-white/10'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowIdeationModal(!showIdeationModal);
                  // 关闭其他下拉菜单
                  setShowWeeklyModal(false);
                  setShowPressModal(false);
                }}
                onMouseEnter={() => setShowTooltip('ideation')}
                onMouseLeave={() => setShowTooltip('')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 to-red-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 font-medium">Ideation</span>
              </button>
              
              {/* 增强Ideation Tooltip */}
              {showTooltip === 'ideation' && !showIdeationModal && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-black/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-6 text-white z-[70] animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 shadow-lg shadow-orange-500/50"></div>
                    <h4 className="font-bold text-lg bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      {moduleDescriptions.ideation.title}
                    </h4>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed font-medium">
                    {moduleDescriptions.ideation.description}
                  </p>
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-black/95 border-l border-t border-white/20 transform rotate-45"></div>
                  
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full animate-spin-slow"></div>
                </div>
              )}
              
              {/* Ideation下拉内容 - 调整位置避免重叠 */}
              <div 
                className={`absolute top-full left-[-150px] mt-2 w-96 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 transition-all duration-300 ease-out origin-top z-[60] ${
                  showIdeationModal 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Ideation每期总结</h3>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    {ideationArticles.map((article, index) => (
                      <div 
                        key={article.id}
                        className="bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] group"
                        onClick={() => window.open(article.url, '_blank')}
                      >
                        <div className="p-4">
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
                          
                          <h4 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h4>
                          
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">更多文章</span>
                      <button 
                        className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
                        onClick={() => window.open('https://x.com/Labs706', '_blank')}
                      >
                        link to 706/acc
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
            
            {/* 增强Starter按钮 */}
            <div className="relative">
              <button 
                className="relative overflow-hidden text-white px-4 py-2 rounded-xl transition-all duration-300 group hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowStarterModal(true);
                }}
                onMouseEnter={() => setShowTooltip('starter')}
                onMouseLeave={() => setShowTooltip('')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 to-pink-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 font-medium">Starter</span>
              </button>
              
              {/* 增强Starter Tooltip */}
              {showTooltip === 'starter' && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-black/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-6 text-white z-[70] animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 shadow-lg shadow-purple-500/50"></div>
                    <h4 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {moduleDescriptions.starter.title}
                    </h4>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed font-medium">
                    {moduleDescriptions.starter.description}
                  </p>
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-black/95 border-l border-t border-white/20 transform rotate-45"></div>
                  
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-spin-slow"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* 中间搜索框 */}
        <div className="flex-1 max-w-md mx-4 relative">
          <button 
            className={`flex items-center justify-between w-full rounded-xl px-4 py-2 transition-all duration-300 group ${
              showPressModal 
                ? 'bg-white/20 border-white/30 border shadow-lg' 
                : 'bg-white/10 hover:bg-white/15'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setShowPressModal(!showPressModal);
              // 关闭其他下拉菜单
              setShowWeeklyModal(false);
              setShowIdeationModal(false);
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            <span className="text-white/70 relative z-10">Press</span>
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
              className={`transition-transform duration-200 relative z-10 ${showPressModal ? 'rotate-45' : ''}`}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          {/* Press下拉内容 */}
          <div 
            className={`absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 transition-all duration-300 ease-out origin-top z-[60] ${
              showPressModal 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 保持原有的Press内容 */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Latest from 706ACC</h3>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <div 
                className="bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] group"
                onClick={() => window.open(tweetInfo.url, '_blank')}
              >
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
                
                <div className="p-4">
                  <p className="text-gray-800 text-sm leading-relaxed">{tweetInfo.text}</p>
                </div>
                
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
        <div className="flex items-center space-x-6 relative z-10">
          <button 
            className="text-white hover:underline flex items-center group transition-all duration-300"
            onClick={() => window.open('706creators.io', '_blank')}
          >
            <span className="group-hover:scale-105 transition-transform duration-300">Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
          
          <div className="text-white/70 text-sm hidden md:block hover:text-white transition-colors duration-300">COME HERE AND FIND YOURSELF</div>
          
          <button 
            className="p-2 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Starter 弹窗 - 提升z-index */}
      {showStarterModal && (
        <>
          {/* 弹窗背景遮罩 */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
            onClick={() => setShowStarterModal(false)}
          />
          {/* 弹窗内容 */}
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6M12 17v6M5.64 5.64l4.24 4.24M14.12 14.12l4.24 4.24M1 12h6M17 12h6M5.64 18.36l4.24-4.24M14.12 9.88l4.24-4.24"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Starter Modal</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This is a beautifully designed placeholder for the Starter modal content. Here you can add project startup information, application forms, or other relevant content.
                </p>
                <div className="flex gap-3">
                  <button 
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                    onClick={() => setShowStarterModal(false)}
                  >
                    Get Started
                  </button>
                  <button 
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                    onClick={() => setShowStarterModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 添加全局点击事件监听器，点击其他地方关闭下拉菜单 */}
      <div 
        className="fixed inset-0 z-[30]"
        style={{ 
          pointerEvents: (showPressModal || showIdeationModal || showWeeklyModal) ? 'auto' : 'none' 
        }}
        onClick={() => {
          setShowPressModal(false);
          setShowIdeationModal(false);
          setShowWeeklyModal(false);
        }}
      />

      {/* 半透明遮罩层 */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/30' : 'bg-gray-500/20'}`} />

      {/* 背景图像渲染部分 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="grid grid-cols-8 gap-3 p-6 h-full">
            {backgroundImageRows.flat().slice(0, 24).map((image, index) => {
              const sizeVariants = [
                'col-span-2 row-span-2',
                'col-span-1 row-span-2',
                'col-span-2 row-span-1',
              ];
              
              const getSizeClass = (idx) => {
                if (idx % 8 === 0 || idx % 8 === 3) return sizeVariants[0];
                if (idx % 8 === 1 || idx % 8 === 6) return sizeVariants[1];
                return sizeVariants[2];
              };
              
              return (
                <div
                  key={image.id}
                  className={`${getSizeClass(index)} relative overflow-hidden rounded-lg group transition-all duration-500 ease-out hover:scale-105 hover:z-10`}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <div className="absolute inset-0 ring-1 ring-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute inset-0 opacity-15">
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

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
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

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.9) rotateX(10deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(-5deg) scale(1);
          }
          33% {
            transform: translateY(-8px) rotate(-3deg) scale(1.02);
          }
          66% {
            transform: translateY(-12px) rotate(-7deg) scale(0.98);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) rotate(180deg);
          }
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }
      `}</style>

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

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl" />
    </div>
  );
}
