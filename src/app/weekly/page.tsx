import styles from './weekly.module.css'; // 我们将为此页面创建新的样式

export default function WeeklyPage() {
    // 第21期视频信息
    const youtubeVideoIdEp21 = "5uQFhjBescM";
    const bilibiliLinkEp21 = "https://www.bilibili.com/video/BV1rXEgzaEkz/?vd_source=42f3b28aaf388089ee3a2288e1dee11f";

    // 第20期视频信息
    const youtubeVideoIdEp20 = "3YmD_Y1aVys";
    const youtubeVideoEp20StartTime = 430; // YouTube 视频开始时间 (秒)
    const bilibiliLinkEp20 = "https://www.bilibili.com/video/BV1rXEgzaEkz/?spm_id_from=333.1387.homepage.video_card.click&vd_source=42f3b28aaf388089ee3a2288e1dee11f";

    return (
        <div className={styles.container}>
            {/* 第21期 */}
            <h1 className={styles.pageTitle}>Weekly - 第21期</h1>
            <div className={styles.videoSection}>
                <h2 className={styles.videoSourceTitle}>YouTube</h2>
                <div className={styles.videoEmbedContainer}>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoIdEp21}`}
                        title="YouTube video player - Weekly 21"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className={styles.videoIframe}
                    ></iframe>
                </div>
            </div>
            <div className={styles.videoSection}>
                <h2 className={styles.videoSourceTitle}>Bilibili</h2>
                <p className={styles.bilibiliLinkContainer}>
                    <a href={bilibiliLinkEp21} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                        在B站观看第21期视频
                    </a>
                </p>
            </div>

            {/* 分隔线或额外间距 (可选) */}
            {/* <hr className={styles.divider} /> */}

            {/* 第20期 */}
            <h1 className={styles.pageTitle} style={{ marginTop: '40px' }}>Weekly - 第20期</h1>
            <div className={styles.videoSection}>
                <h2 className={styles.videoSourceTitle}>YouTube</h2>
                <div className={styles.videoEmbedContainer}>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoIdEp20}?start=${youtubeVideoEp20StartTime}`}
                        title="YouTube video player - Weekly 20"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className={styles.videoIframe}
                    ></iframe>
                </div>
            </div>
            <div className={styles.videoSection}>
                <h2 className={styles.videoSourceTitle}>Bilibili</h2>
                <p className={styles.bilibiliLinkContainer}>
                    <a href={bilibiliLinkEp20} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                        在B站观看第20期视频
                    </a>
                </p>
            </div>
        </div>
    );
}