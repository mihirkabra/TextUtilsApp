import React from "react";
import { Link } from "react-router-dom";

type NavProps = {
  title: string
  page1?: string
  page2?: string
  switchMode: () => void
}

export default function Navbar(props: NavProps) {
  const { page1 = "Home", page2 = "About" } = props

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                {page1}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {page2}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.switchMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: '#ffffff' }}
            >
              <b>Dark Mode</b>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}