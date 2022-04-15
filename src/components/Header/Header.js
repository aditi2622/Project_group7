import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-secondary"
      aria-label="Fifth navbar example"
    >
      <div class="container-fluid">
        <a class="navbar-brand">GROUP-7</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample05">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="btn text-warning text-decoration-none fw-bold">
              <Link class="text-warning text-decoration-none" to="/">
                Home
              </Link>
            </li>
            <li class="btn text-warning text-decoration-none fw-bold">
              <Link class="text-warning text-decoration-none" to="/about">
                About
              </Link>
            </li>
            <li class="btn text-warning text-decoration-none fw-bold">
              <Link class="text-warning text-decoration-none" to="/contact">
                Contact Us
              </Link>
            </li>
            <li class="btn text-warning text-decoration-none fw-bold">
              <Link class="text-warning text-decoration-none" to="/faqs">
                FAQs
              </Link>
            </li>
            <li class="btn text-warning text-decoration-none fw-bold">
              <Link class="text-warning text-decoration-none" to="/gallery">
                Gallery
              </Link>
            </li>
            {
              <li class="nav-item dropdown fw-bold">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown05"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdown05">
                  <li>
                    <a class="dropdown-item" href="/computer">
                      Computer
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/autocad">
                      Autocad
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/robotics">
                      Robotics
                    </a>
                  </li>
                </ul>
              </li>
            }
          </ul>
          <form>
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
            .
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header
