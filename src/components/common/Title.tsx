//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";

export const Title = ({ style, name }: { style?: string; name: string }) => (
    <div className={`${styles.titleH2} ${style}`}>{name}</div>
);
