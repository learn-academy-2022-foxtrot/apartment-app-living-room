import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentIndex = ({ mockApartments }) => {
  return (
    <>
      <div>
        <h3 className="centerTitle">Cheap Apartments</h3>
      </div>
      <div className="centerListings">
        {mockApartments?.map((apartments, index) => {
          return (
            <>
              <Card style={{ width: "350px", height: "525px" }} key={index}>
                <img alt="image not working bro" src={apartments.image} />
                <CardBody>
                  <CardTitle tag="h5">{apartments.street}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    City: {apartments.city}
                    <br />
                    Manager: {apartments.manager}
                    <br />
                    Email: {apartments.email}
                    <br />
                    Price: {apartments.price}
                    <br />
                    Bedrooms: {apartments.bedrooms}
                    <br />
                    Bathrooms: {apartments.bathrooms}
                    <br />
                    Pets: {apartments.pets}
                  </CardSubtitle>
                  <NavLink to={`/apartmentshow/${apartments.id}`}>
                    <Button>See More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            </>
          )
        }
        )}
      </div>
    </>
  )
}

export default ApartmentIndex
