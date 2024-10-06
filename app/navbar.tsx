import styles from './navbar.module.css';
import Sidebar from './sidebar';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-top']}>
        <div className={styles['navbar-logo']}>
          <Sidebar />
          <img 
            src="https://www.pngall.com/wp-content/uploads/8/Retail-Business-Store-PNG-Free-Download.png" 
            alt="Retail Business Store Logo"
          />
        </div>
        <div className={styles['navbar-title']}>
          <h1 id="shop">Shop-Z</h1>
        </div>
        <div className={styles['navbar-container']} style={{ cursor: "pointer" }}>
          <ul>
            <li>
              <img 
                src="https://cdn-icons-png.flaticon.com/128/54/54481.png" 
                alt="Icon 1"
              />
            </li>
            <li>
              <img 
                src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png" 
                alt="Icon 2"
              />
            </li>
            <li>
              <img 
                src="https://cdn-icons-png.flaticon.com/128/11530/11530382.png" 
                alt="Icon 3"
              />
            </li>
            <li id={styles['navbar-profile']}>
              <img 
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" 
                alt="User Profile Icon"
              />
            </li>
            <li id={styles['navbar-select']}>
              <select aria-label="Select Language">
                <option value="ENG">ENG</option>
                <option value="HIN">HIN</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['navbar-bottom']}>
        <div className={styles['navbar-bottom-container']} style={{ cursor: "pointer" }}>
          <h2>SHOP</h2>
          <h2>SKILLS</h2>
          <h2>STORIES</h2>
          <h2>ABOUT</h2>
          <h2>CONTACT US</h2>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
