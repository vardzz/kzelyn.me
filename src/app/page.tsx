import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Background Elements */}
      <div className={styles.backgroundCircle}></div>
      <div className={styles.thinLine}></div>
      <div className={styles.dot}></div>
      <div className={styles.dotsPattern}></div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>K</span>
          <span>Kzelyn Artilo</span>
        </div>
        <div className={styles.navLinks}>
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
          <button className={styles.connectBtn}>
            Let's Connect
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className={styles.mainContent}>
        
        {/* Left Column (Text & Skills) */}
        <div className={styles.leftCol}>
          <div className={styles.greeting}>
            HELLO, I'M <div className={styles.greetingLine}></div>
          </div>
          
          <h1 className={styles.title}>
            KZELYN<br />ARTILLO
          </h1>
          
          <h2 className={styles.tagline}>
            MARKETING-DRIVEN. PEOPLE-FOCUSED.<br />RESULTS-ORIENTED.
          </h2>
          
          <p className={styles.description}>
            A fresh graduate in Marketing Management with a passion for building brands, connecting with people, and creating impact through strategic ideas.
          </p>
          
          <div className={styles.actions}>
            <button className={styles.workBtn}>
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
            <a href="#" className={styles.resumeLink}>
              Download Resume
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
          
          {/* Skills Container */}
          <div className={styles.skillsContainer}>
            <div className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <div className={styles.skillIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
                  </svg>
                </div>
                <span className={styles.skillTitle}>STRATEGIC</span>
              </div>
              <p className={styles.skillDesc}>I turn ideas into strategies that drive real results.</p>
            </div>
            
            <div className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <div className={styles.skillIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 11.5v-1a4.5 4.5 0 0 1 4.5-4.5h.5A2.5 2.5 0 0 1 18.5 8.5v3A2.5 2.5 0 0 1 16 14h-.5a4.5 4.5 0 0 1-4.5-4.5v-1z"/>
                    <path d="M16 14v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4"/>
                    <path d="M6 14h2"/>
                    <path d="M4 11h3"/>
                    <path d="M5 8h2"/>
                  </svg>
                </div>
                <span className={styles.skillTitle}>CREATIVE</span>
              </div>
              <p className={styles.skillDesc}>I craft campaigns that capture attention and value.</p>
            </div>
            
            <div className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <div className={styles.skillIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V10M12 20V4M6 20v-6"/>
                  </svg>
                </div>
                <span className={styles.skillTitle}>ANALYTICAL</span>
              </div>
              <p className={styles.skillDesc}>I use data to understand, adapt, and grow.</p>
            </div>
          </div>
        </div>

        {/* Right Column (Visuals & Floating Cards) */}
        <div className={styles.rightCol}>
          
          <div className={styles.floatingCard1}>
            <div className={styles.cardIcon1}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <path d="M7 17V13M12 17V9M17 17V5"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Goal-Driven</h3>
            <p className={styles.cardDesc}>Turning insights into impactful marketing strategies.</p>
          </div>
          
          <div className={styles.connectorLine}></div>
          
          <div className={styles.floatingCard2}>
            <div className={styles.cardIcon2}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>People First</h3>
            <p className={styles.cardDesc}>
              Understanding audiences.<br/>
              Building relationships.<br/>
              Driving loyalty.
            </p>
          </div>
          
          <div className={styles.scriptContainer}>
            <div className={styles.scriptText}>Strategy</div>
            <div className={styles.scriptText} style={{marginLeft: '20px'}}>Creativity</div>
            <div className={styles.scriptText} style={{marginLeft: '40px'}}>Connection.</div>
            <div className={styles.scriptUnderline}></div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
