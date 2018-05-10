import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <p>Copyright &copy; CadenLawrence.com</p>
          <section>
            <div className="container">
              <div className="col-sm-12">
                <div className="socialmedia">
                    <a id="facebook" href="https://www.facebook.com/caden.lawrence" target="_blank"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                    <a id="twitter" href="https://twitter.com/claw_20" target="_blank"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                    <a id="github" href="https://github.com/CadenLawrence" target="_blank"><i id="social-git" className="fa fa-github-square fa-3x social" aria-hidden="true"></i></a>
                    <a id="linkedin" href="https://www.linkedin.com/in/caden-lawrence-b68686119/" target="_blank" ><i id="social-link" className="fa fa-linkedin-square fa-3x social" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    );
  }
}