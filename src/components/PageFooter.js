import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <footer id="footer">
      <ul className="copyright">
        <li>&copy; {config.authorName} | 2021</li>
      </ul>
    </footer>
  );
}
