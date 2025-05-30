import styles from './community.module.css'; // 我们将为此页面创建新的样式
import Link from 'next/link'; // 如果这些项需要链接到其他地方

export default function CommunityPage() {
    return (
        <div className={styles.container}>
            <ul className={styles.outputList}>
                <li className={styles.outputItem}>Essays</li>
                <li className={styles.outputItem}>Podcast</li>
                <li className={styles.outputItem}>project</li>
            </ul>
            {/* 你可以在这里为每个项目添加链接或更详细的内容 */}
        </div>
    );
}