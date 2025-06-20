"use client";
import { useEffect, useState } from 'react';

export default function Component() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // 图片数组 1-31
  const backgroundImages = Array.from({ length: 31 }, (_, i) => ({
    id: i + 1,
    src: `/${i + 1}.jpg`,
    alt: `Project ${i + 1}`,
  }));

  return (
    <div className="relative min-h-screen bg-black">
      {/* 背景图片马赛克效果 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1 p-1 h-full opacity-40">
          {backgroundImages.map((image) => (
            <div 
              key={image.id}
              className={`
                relative aspect-video overflow-hidden rounded-sm
                ${Math.random() > 0.7 ? 'col-span-2 row-span-2' : ''}
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
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
      </div>

      {/* 半透明深色遮罩层 */}
      <div className="absolute inset-0 bg-black/75" />

      {/* 中央内容区域 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        {/* 706 Logo */}
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

        {/* 标语 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          WHERE SEEKERS SHAPE THE FUTURE
        </h1>
      </div>

      {/* 装饰性模糊光球效果 */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl" />
    </div>
  );
}
