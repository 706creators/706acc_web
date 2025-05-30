import styles from './ideation.module.css'; // 我们将为此页面创建新的样式

export default function IdeationPage() {
    return (
        <div className={styles.container}>
            <p className={styles.summaryText}>每一期所产生的研究、项目idea总结</p>
            {/* 你可以在这里添加更多关于 ideation 的内容 */}
        </div>
    );
}