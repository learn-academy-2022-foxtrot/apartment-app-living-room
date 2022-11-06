import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const ProtectedApartmentShow = ({
  mockApartments,
  deleteApartment,
  current_user
}) => {
  const { id } = useParams()
  const showApartment = mockApartments?.find(
    (apartment) => apartment.id === +id
  )

  const handleClick = () => {
    // SAFEGUARD #2: This double-checks that the user owns the apartment before it will let them delete it.
    if (current_user.id !== showApartment.user_id) {
      alert("You cannot delete an apartment that doesn't belong to you!")
    } else if (current_user.id === showApartment.user_id) {
      // This is a variable that will store a boolean value based on user input. If the user hits cancel, the conditional below will not run the delete code and instead console log that the delete was cancelled. If the user hits confirm, the function will return the ID to App.js to be deleted.
      const confirmDelete = confirm(
        "Are you sure you want to delete this Apartment? This action cannot be undone."
      )
      if (confirmDelete) {
        deleteApartment(showApartment.id)
      } else if (!confirmDelete) {
        console.log("Delete cancelled.")
      }
    }
  }

  // SAFEGUARD #1: The page will render this text if a user attempts to manually enter the apartment ID into the url when they are not the logged in owner of that apartment. It will return the correct show when the user IS logged in.
  if (current_user.id !== showApartment.user_id) {
    return (
      <h4>
        This page cannot be rendered because you are not the owner of this
        apartment.
      </h4>
    )
  } else {
    return (
      <>
        <h3>Apartment Show</h3>
        <div className="apartmentShowPage">
          {showApartment && (
            <Card style={{ width: "500px", height: "760px" }}>
              <img src={showApartment.image} alt="image is broken" />
              <CardBody>
                <CardTitle tag="h5">
                  <p> Address: {showApartment.street} </p>
                </CardTitle>
                <CardSubtitle>
                  <p>City: {showApartment.city}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>State: {showApartment.state}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Manager: {showApartment.manager}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Email: {showApartment.email}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Price: {showApartment.price}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Beds: {showApartment.bedrooms}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Bath: {showApartment.bathrooms}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Pets: {showApartment.pets}</p>
                </CardSubtitle>
                <Button>
                  <a href={`/apartmentedit/${showApartment.id}`}>
                    Edit Listing
                  </a>
                </Button>
                <Button onClick={handleClick}>Delete Listing</Button>
              </CardBody>
            </Card>
          )}
        </div>
      </>
    )
  }
}

export default ProtectedApartmentShow
