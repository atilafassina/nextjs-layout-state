import styles from '@styles/header.module.css'

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  )
}
