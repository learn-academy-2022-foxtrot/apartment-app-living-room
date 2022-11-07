import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const ApartmentShow = ({ mockApartments }) => {
  const { id } = useParams()
  const showApartment = mockApartments?.find((apartment) => apartment.id === +id)
  return (
    <>
      <h3>Apartment Show</h3>
      <div className="apartmentShowPage">
        {showApartment &&
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
              <NavLink to="/apartmentindex" className="nav-link"> <Button> Go Back </Button> </NavLink>
            </CardBody>
          </Card>
        }
      </div>
    </>
  )
}

export default ApartmentShow
