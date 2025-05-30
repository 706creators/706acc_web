import styles from "./page.module.css";
import Image from 'next/image'; // Image 组件仍然需要，用于品牌logo

export default function Home() {
  const brandLogos = [
    { src: "/706.svg", alt: "706" },
    { src: "/Creators.svg", alt: "Creators" },
    { src: "/FUEL.svg", alt: "FUEL" },
    { src: "/OpenBuild.svg", alt: "OpenBuild" },
    { src: "/SEEDAO.svg", alt: "SEEDAO" },
    { src: "/SOLANA.svg", alt: "SOLANA" },
    { src: "/Sui.svg", alt: "Sui" },
  ];

  return (
    <> {/* 使用 Fragment 或直接渲染 section */}
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
    </>
  );
}
