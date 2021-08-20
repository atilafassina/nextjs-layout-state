import Link from 'next/link'
import styles from '@styles/table.module.css'
import { PAGE_LINKS } from '@utils/settings'
import { useRouter } from 'next/router'

const LinksTable = () => {
  const { pathname } = useRouter()
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.cell}>Code</th>
          <th className={styles.cell}>Page</th>
          <th className={styles.cell}>Description</th>
        </tr>
      </thead>
      <tbody>
        {PAGE_LINKS.map(({ name, url, code, description }) => (
          <tr key={url} className={styles.bodyRow}>
            <td className={styles.cell}>
              <Link href={code}>
                <a>source</a>
              </Link>
            </td>
            <td className={styles.cell}>
              {pathname === url ? (
                name
              ) : (
                <Link href={url}>
                  <a>{name}</a>
                </Link>
              )}
            </td>
            <td
              className={styles.cell}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { LinksTable }
