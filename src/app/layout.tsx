// filepath: src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import layoutStyles from "./layout.module.css"; // 导入布局样式
import Link from 'next/link'; // 导入 Link 组件

export const metadata: Metadata = {
  title: "706/acc",
  description: "点燃你的创意与技术",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <div className={layoutStyles.container}>
          <nav className={layoutStyles.sidebar}>
            <h1 className={layoutStyles.sidebarTitle}>706/acc</h1>
            <ul className={layoutStyles.navList}>
              <li className={layoutStyles.navItem}>
                {/* 添加一个返回首页的链接 */}
                <Link href="/">首页</Link>
              </li>
              <li className={layoutStyles.navItem}>
                <Link href="/application">application</Link>
              </li>
              <li className={layoutStyles.navItem}>
                <Link href="/ideation">ideation</Link>
              </li>
              <li className={layoutStyles.navItem}>
                <Link href="/weekly">weekly</Link>
              </li>
              <li className={layoutStyles.navItem}>
                <Link href="/community">社区成员产出</Link>
              </li>
            </ul>
          </nav>
          <main className={layoutStyles.mainContent}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
