import React, { Component } from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
const Footer = () => {
    return (
        <footer className="page-footer font-small special-color-dark pt-4 ">

            <div className='flex-wrap' style={{ textAlign: "center" }}>
                <div className='m-2'><GitHubButton href="https://github.com/mishalgupta" data-show-count="true" aria-label="Follow @mishalgupta on GitHub">Follow @mishalgupta</GitHubButton></div>
                <GitHubButton href="https://github.com/Mishalgupta/algorithmeasy" data-icon="octicon-star" data-show-count="true" aria-label="Star mishalgupta/algorithmeasy on GitHub">Star</GitHubButton>
                &nbsp
                <GitHubButton href="https://github.com/Mishalgupta/algorithmeasy/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork mishalgupta/algorithmeasy on GitHub">Fork</GitHubButton>
                &nbsp
                <img src="https://hitcounter.pythonanywhere.com/count/tag.svg" alt="Hits" />
            </div>

            <div className="footer-copyright text-center py-3">Made with ❤️ by
                <a href="https://www.linkedin.com/in/mishal-gupta-42550a194" target="_blank" style={{ color: "#65b6f0" }}> Mishal Gupta</a>
            </div>

        </footer>
    );
}

export default Footer;