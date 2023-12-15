import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contentContainer}>
      <h1>Thanks for your interest in contacting Flynn!</h1>
      <p>Some of Flynn&apos;s favorite ways of being contacted are:</p>
      <ul>
        <li>His email, which you should already have</li>
        <li>His phone number (especially texts!), which you should already have</li>
        <li>His dreams</li>
      </ul>
    </div>
  )
}

export default Contact