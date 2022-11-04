import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <Nav>
        {/* User is NOT logged in, viewing the page from outside. */}
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/apartmentindex" className="nav-link">
            View Listings
          </NavLink>
        </NavItem>
        {/* User is logged in. */}
        {logged_in && (
          <>
            <NavItem>
              <NavLink to="/apartmentshow" className="nav-link">
                My Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew" className="nav-link">
                Create Listing
              </NavLink>
            </NavItem>
            <NavItem>
              <a href={sign_out_route} className="nav-link">
                Sign Out
              </a>
            </NavItem>
          </>
        )}
        {!logged_in && (
          <NavItem>
            <a href={sign_in_route} className="nav-link">
              Sign In
            </a>
          </NavItem>
        )}
        {/* User is NOT logged in, can also see this. */}
        {!logged_in && (
          <>
            <NavItem>
              <a href={new_user_route} className="nav-link">
                Sign Up
              </a>
            </NavItem>
          </>
        )}
      </Nav>
    </>
  )
}

export default Navigation
