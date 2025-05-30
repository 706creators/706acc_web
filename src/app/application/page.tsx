import styles from './application.module.css'; // 我们将为此页面创建新的样式

export default function ApplicationPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>706acc</h1>
            <p className={styles.subtitle}>Ideation/Weekly</p>
            <p className={styles.subtitle}>Application</p>
            <button className={styles.applyButton}>Apply</button>
        </div>
    );
}