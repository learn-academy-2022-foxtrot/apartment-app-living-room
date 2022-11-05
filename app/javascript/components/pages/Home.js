import React from "react"

const Home = (props) => {
  return (
    <>
      <h2>Welcome!</h2>
      <h3>Browse and view all available apartment listings</h3>
      {props.logged_in && (
        <>
          <button>
            <a href="/protectedapartmentindex">My Listings</a>
          </button>
          <button>
            <a href="/apartmentindex">View Listings</a>
          </button>
        </>
      )}
      {!props.logged_in && (
        <>
          <button>
            <a href={props.sign_in_route}>Sign In</a>
          </button>
          <button>
            <a href={props.new_user_route}>Sign Up</a>
          </button>
        </>
      )}
    </>
  )
}

export default Home
