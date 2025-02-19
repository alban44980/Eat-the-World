import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function CountryPage () {

return(
    <div className="nav-bar">
                <Link to="/">
                    <div className="home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
                    </div>
                </Link>
                <Link to="/countrypage">
                    <div className="countrypage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z"/></svg>
                    </div>
                </Link>
                <Link to="/dishinfo">
                    <div className="food">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562 4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151 1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>
                    </div>
                </Link>
                <Link to="/favorites">
                    <div className="food">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
                    </div>
                </Link>
    </div>
)

}