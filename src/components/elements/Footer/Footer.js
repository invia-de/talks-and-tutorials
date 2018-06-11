import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

export default function Footer(props) {
  return (
    <footer className="footer" role="contentinfo">
      <a
        rel="noopener noreferrer"
        className="footer__link"
        href="https://help.github.com/articles/github-privacy-statement/"
        target="_blank"
      >
        GitHubs Privacy Statement
      </a>
      <small className="footer__notice">
        This website is hosted on GitHub using the GitHub Pages feature. We did
        not include any tracking or personal data collection methods. For more
        information about how GitHub is processing your personal data and
        information head over to GitHubs Privacy Statement (link listed above).
      </small>
    </footer>
  );
}
Footer.propTypes = {
  children: PropTypes.any
};
