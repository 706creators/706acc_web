"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Component() {
  const [mounted, setMounted] = useState(false);
  const [showPressModal, setShowPressModal] = useState(false);
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

  return (
    <div className="relative min-h-screen bg-black">
      {/* 导航栏代码保持不变 */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md">
        {/* 左侧 Logo和导航 */}
        <div className="flex items-center space-x-6">
          <div className="text-white text-lg font-bold">706ACC</div>
          <div className="flex space-x-4">
            <button 
              className="text-white hover:bg-white/10 px-3 py-1 rounded-sm"
              onClick={() => window.open('https://space.bilibili.com/263714704', '_blank')}
            >
              Weekly
            </button>
            <button 
            className="text-white hover:bg-white/10 px-3 py-1 rounded-sm"
            onClick={() => window.open('#', '_blank')}
            >
              IDEATION
            </button>
            <button 
            className="text-white hover:bg-white/10 px-3 py-1 rounded-sm"
            onClick={() => window.open('#', '_blank')}
            >
              Starter
            </button>
          </div>
        </div>
        
        {/* 中间搜索框 */}
        <div className="flex-1 max-w-md mx-4">
          <button 
            className="flex items-center justify-between w-full rounded-md bg-white/10 px-4 py-2"
            onClick={() => setShowPressModal(true)}
          >
            <span className="text-white/70">Press</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
        
        {/* 右侧链接和信息，代码保持不变 */}
        <div className="flex items-center space-x-6">
          <button 
            className="text-white hover:underline flex items-center"
            onClick={() => window.open('https://x.com/labs706', '_blank')}
          >
            <span>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
          
          <div className="text-white/70 text-sm hidden md:block">706ACC the a16z</div>
          
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

      {/* 半透明遮罩层 - 调低透明度 */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/30' : 'bg-gray-500/20'}`} />

      {/* 重新设计的Press模态框 */}
      {showPressModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowPressModal(false)}></div>
          <div className="bg-white text-black w-full max-w-xl max-h-[80vh] overflow-y-auto rounded-md relative z-10">
            {/* 头部 */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h2 className="text-xl font-medium">Press</h2>
              <button onClick={() => setShowPressModal(false)} className="p-1 hover:bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            {/* Twitter推文预览 - 类似YouTube预览 */}
            <div className="p-5">
              <div 
                className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg"
                onClick={() => window.open(tweetInfo.url, '_blank')}
              >
                {/* 推文头部 */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 mr-3 flex items-center justify-center">
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
                  <div>
                    <div className="font-bold flex items-center">
                      {tweetInfo.user}
                      <svg className="ml-1 text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                      </svg>
                    </div>
                    <div className="text-gray-500 text-sm">@{tweetInfo.user}</div>
                  </div>
                </div>
                
                {/* 推文内容 */}
                <div className="p-4">
                  <p className="text-gray-800 mb-2">{tweetInfo.text}</p>
                  <p className="text-gray-500 text-sm">{tweetInfo.date}</p>
                </div>
                
                {/* 推文预览图 - 使用渐变背景模拟 */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent text-white">
                    <p className="font-medium">点击查看完整推文</p>
                  </div>
                </div>
                
                {/* 推文底部 */}
                <div className="flex items-center justify-between p-4 border-t border-gray-100">
                  <div className="text-gray-500 text-sm">来自 Twitter</div>
                  <div className="flex items-center text-blue-500">
                    <span className="mr-1">查看原文</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 背景图像渲染部分 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-rows-5 gap-1 p-1 h-full opacity-40">
          {backgroundImageRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex gap-1 w-full h-full">
              {row.map((image, imageIndex) => (
                <div 
                  key={image.id}
                  className={`flex-1 relative overflow-hidden rounded-sm flex h-full ${
                    imageIndex === 0 || imageIndex === row.length - 1 
                      ? 'items-stretch justify-start' 
                      : 'items-center justify-center'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`h-full object-contain ${
                      imageIndex === 0 || imageIndex === row.length - 1 
                        ? 'w-full object-cover' 
                        : 'w-4/5'
                    }`}
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
          ))}
        </div>
      </div>

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
