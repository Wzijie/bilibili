import React from 'react';
import { Link } from 'react-router-dom';
// import html2canvas from 'html2canvas';

// function onScreenShot() {
//   html2canvas(document.body)
//     .then((canvas) => {
//       let eleLink = document.createElement('a');
//       eleLink.style.display = 'none';
//       canvas.toBlob((blob) => {
//         eleLink.href = URL.createObjectURL(blob);
//         document.body.append(eleLink);
//         eleLink.click();
//         eleLink.remove();
//       });
//     });
// }

const Header = () => (
  <header className='header'>
    <Link to='/' className='logo'></Link>
    <div className='btn-box'>
      {/* <a className='screen-shot' onClick={onScreenShot}>
        <p>截屏</p>
      </a> */}
      <Link to='/search' className='search-btn' >
        <i className='icon-search'></i>
      </Link>
      <a className='history-btn'>
        <i className='icon-history'></i>
      </a>
    </div>
  </header>
);

export default Header;
