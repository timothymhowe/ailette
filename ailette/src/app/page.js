import styles from './page.module.css'
import ProjectGallery from '../components/ProjectGallery'
import SocialLinks from '../components/SocialLinks'

export default function Home() {
  return (
    <main className={styles.main}>
      <SocialLinks />
      
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logoBackground}></div>
          <div className={styles.logoMiddleground}></div>
          <div className={styles.logoForeground}>
            <h1 className={`${styles.title} tracking-widest`}>A</h1>
          </div>
        </div>
        
        <h2 className={`${styles.title} tracking-widest`}>AILETTE.DEV</h2>
        <p className={`${styles.subtitle} tracking-wider text-center`}>
          A curated portfolio of innovative projects and technological solutions.
          Crafted with precision and expertise.
        </p>
        
        <ProjectGallery />
      </div>
      
      <footer className={styles.footer}>
        © 2024 by Ailette.io. All rights reserved.
      </footer>
    </main>
  )
}
