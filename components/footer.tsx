import styles from '@styles/footer.module.css'
import { AtilaIO } from '@components/atila-logo'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        by{' '}
        <a href="https://atila.io">
          <AtilaIO className={styles.atila} />
        </a>
      </footer>
    </>
  )
}
