import styles from "./page.module.css";
import Link from 'next/link'; // 导入 Link 组件
import Image from 'next/image'; // 导入 Image 组件

export default function Home() {
  const brandLogos = [
    { src: "/706.svg", alt: "706" }, // 修改此处的路径
    { src: "/Creators.svg", alt: "Creators" },
    { src: "/FUEL.svg", alt: "FUEL" },
    { src: "/OpenBuild.svg", alt: "OpenBuild" },
    { src: "/SEEDAO.svg", alt: "SEEDAO" },
    { src: "/SOLANA.svg", alt: "SOLANA" },
    { src: "/Sui.svg", alt: "Sui" },
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <h1 className={styles.sidebarTitle}>706/acc</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/application">application</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/ideation">ideation</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/weekly">weekly</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/community">社区成员产出</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h2 className={styles.heroTitle}>点燃你的创意与技术</h2>
          <p className={styles.heroSubtitle}>让我在706/acc共建创造</p>
          <button className={styles.applyButton}>Apply</button>
        </section>
        <section className={styles.brandsSection}>
          <h3 className={styles.brandsTitle}>合作品牌</h3>
          <div className={styles.brandLogosContainer}>
            {brandLogos.map((logo) => (
              <div key={logo.src} className={styles.brandLogoItem}>
                <Image src={logo.src} alt={logo.alt} width={100} height={50} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
