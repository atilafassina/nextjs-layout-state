import styles from '@styles/hint.module.css'

const Hints = () => (
  <aside className={styles.hintWrap}>
    <p>
      open your <b>DevTools</b> to check what <code>props</code> this page
      receives
    </p>
    <p>
      to learn more, check the article on{' '}
      <a href="https//atila.io/smashingmag" target="_blank" rel="noopener">
        {' '}
        Smashing Magazine
      </a>
    </p>
  </aside>
)

export { Hints }
