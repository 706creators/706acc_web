import styles from "./page.module.css";
import Link from 'next/link'; // 导入 Link 组件

export default function Home() {
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
          {/* 你可以在这里添加合作品牌的 logos */}
        </section>
      </main>
    </div>
  );
}
