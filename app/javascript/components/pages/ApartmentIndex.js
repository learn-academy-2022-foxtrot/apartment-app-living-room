import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const ApartmentIndex = ({ mockApartments }) => {
  return (
    <>
      <div>
        <h3 className="centerTitle">Cheap Apartments</h3>
      </div>
      <div className="centerListings">
        {mockApartments?.map((apartments, index) => {
          return (
            <Card style={{ width: "350px", height: "625px" }} key={index}>

              <img alt="image not working bro" src={apartments.image} />
              <CardBody>
                <CardTitle tag="h5">{apartments.street}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <p>
                    City: {apartments.city}
                  </p>
                  <p>
                    Manager: {apartments.manager}
                  </p>
                  <p>
                    Email: {apartments.email}
                  </p>
                  <p>
                    Price: {apartments.price}
                  </p>
                  <p>
                    Bedrooms: {apartments.bedrooms}
                  </p>
                  <p>
                    Bathrooms: {apartments.bathrooms}
                  </p>
                  <p>
                    Pets: {apartments.pets}
                  </p>
                </CardSubtitle>
                  <Button>See More Details</Button>

              </CardBody>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default ApartmentIndex
