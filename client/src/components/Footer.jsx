const Footer = () => {
  return (
      <footer className='page-footer grey lighten-5'>
          <div className='footer-copyright'>
              <div className='container black-text'>
                  © {new Date().getFullYear()} Copyright OWL Group
                  <a className='black-text text-lighten-4 right' href='#!'>
                      More Links
                  </a>
              </div>
          </div>
      </footer>
  );
}
 
export default Footer;