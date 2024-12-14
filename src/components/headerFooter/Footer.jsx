import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3
              C276.7,2.9,330,4,383,9.8c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <h1>CSST</h1>
              </a>
            </div> 
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Company</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item">
                  <a href="#">Contact</a>
                </li>
                <li className="menu-item">
                  <a href="#">News</a>
                </li>
                <li className="menu-item">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item">
                  <a href="#">Privacy Notice</a>
                </li>
                <li className="menu-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Support Center
                  </a>
                </li>
                <li className="menu-item">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Service Status
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#">Security</a>
                </li>
                <li className="menu-item">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item">
                  <a href="#">Customers</a>
                </li>
                <li className="menu-item">
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">Let's Chat</h2>
              <p className="footer-call-to-action-description">
                Have a support question?
              </p>
              <a className="footer-call-to-action-button button" href="#">
                Get in Touch
              </a>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">You Call Us</h2>
              <p className="footer-call-to-action-link-wrapper">
                <a className="footer-call-to-action-link" href="tel:0124-64XXXX">
                  0124-64XXXX
                </a>
              </p>
            </div>
          </div>
          <div className="footer-social-links">
            <svg
              className="footer-social-amoeba-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 236 54">
              <path
                className="footer-social-amoeba-path"
                d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
              ></path>
            </svg>
            <a className="footer-social-link linkedin" href="#" target="_blank">
              <span className="hidden-link-text">Linkedin</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  className="footer-social-icon-path"
                  d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065
                    c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
                ></path>
              </svg>
            </a>
            <a className="footer-social-link twitter" href="#" target="_blank">
              <span className="hidden-link-text">Twitter</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  className="footer-social-icon-path"
                  d="M25.5,9.46c0.01,0.23,0.01,0.45,0.01,0.68c0,6.94-5.28,14.94-14.94,14.94c-2.97,0-5.74-0.87-8.06-2.36
                    c0.41,0.05,0.83,0.07,1.25,0.07c2.46,0,4.72-0.84,6.52-2.26c-2.3-0.04-4.23-1.56-4.9-3.64c0.32,0.06,0.64,0.09,0.98,0.09
                    c0.47,0,0.92-0.06,1.35-0.18c-2.4-0.48-4.21-2.61-4.21-5.16c0-0.02,0-0.04,0-0.06c0.71,0.4,1.52,0.65,2.39,0.68
                    c-1.41-0.94-2.33-2.54-2.33-4.35c0-0.96,0.26-1.86,0.71-2.64c2.6,3.19,6.49,5.28,10.88,5.5c-0.09-0.38-0.13-0.77-0.13-1.18
                    c0-2.83,2.3-5.13,5.13-5.13c1.48,0,2.83,0.62,3.78,1.62c1.17-0.23,2.28-0.66,3.28-1.25c-0.38,1.18-1.18,2.16-2.23,2.78
                    c1.04-0.13,2.04-0.4,2.97-0.8C27.45,8.04,26.53,8.81,25.5,9.46z"
                ></path>
              </svg>
            </a>
            <a className="footer-social-link youtube" href="#" target="_blank">
              <span className="hidden-link-text">YouTube</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  className="footer-social-icon-path"
                  d="M26.445,10.198c0,0-0.258-1.826-1.052-2.63c-1.008-1.052-2.137-1.057-2.655-1.117C19.5,6.187,15,6.187,15,6.187h-0.01
                    c0,0-4.5,0-7.739,0.264c-0.518,0.061-1.647,0.065-2.655,1.117c-0.793,0.804-1.052,2.63-1.052,2.63S3,12.42,3,14.641v1.078
                    c0,2.22,0.255,4.443,0.255,4.443s0.258,1.826,1.052,2.63c1.008,1.052,2.33,1.02,2.92,1.133C10.5,23.813,15,23.813,15,23.813
                    s4.5,0,7.739-0.264c0.518-0.061,1.647-0.065,2.655-1.117c0.793-0.804,1.052-2.63,1.052-2.63S27,17.439,27,15.719v-1.078
                    C27,12.42,26.445,10.198,26.445,10.198z M12.813,18.958v-6.25l5.208,3.13L12.813,18.958z"
                ></path>
              </svg>
            </a>
            <a className="footer-social-link whatsapp" href="#" target="_blank">
    <span className="hidden-link-text">WhatsApp</span>
    <svg
      className="footer-social-icon-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <path
        className="footer-social-icon-path"
        d="M14.95,0.92C7.23,0.92,1.04,7.11,1.04,14.83c0,2.7,0.76,5.24,2.09,7.37L2,29.92l7.95-1.97c2.07,1.12,4.42,1.76,6.95,1.76
        c7.71,0,13.91-6.19,13.91-13.91C28.86,7.11,22.67,0.92,14.95,0.92z M20.58,19.92c-0.34,0.96-1.68,1.78-2.29,1.89
        c-0.59,0.12-1.32,0.17-2.12-0.13c-0.49-0.2-1.12-0.38-1.87-0.75c-3.31-1.44-5.47-4.81-5.64-5.03c-0.15-0.22-1.33-1.78-1.33-3.4
        s0.84-2.41,1.15-2.75c0.3-0.33,0.66-0.42,0.88-0.42c0.22,0,0.44,0.01,0.63,0.03c0.2,0.02,0.49-0.08,0.77,0.59
        c0.29,0.67,0.98,2.32,1.07,2.48c0.09,0.15,0.14,0.33,0.03,0.53c-0.1,0.2-0.15,0.33-0.29,0.51c-0.15,0.19-0.31,0.42-0.44,0.56
        c-0.15,0.16-0.3,0.33-0.13,0.64c0.17,0.32,0.78,1.29,1.67,2.08c1.15,1.02,2.11,1.34,2.43,1.5c0.32,0.16,0.51,0.14,0.69-0.09
        c0.18-0.23,0.8-0.94,1.01-1.26c0.21-0.31,0.42-0.27,0.7-0.16c0.29,0.11,1.81,0.85,2.12,1c0.31,0.15,0.52,0.23,0.61,0.36
        C20.93,18.93,20.93,18.96,20.58,19.92z"
      ></path>
    </svg>
  </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
