import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import NavLink, { useNavigate, useParams } from "react-router-dom"

const ProtectedApartmentIndex = ({ mockApartments, current_user }) => {
  return (
    <>
      <div>
        <h3 className="centerTitle">Cheap Apartments</h3>
      </div>
      <div className="centerThisHoe">
        {mockApartments
          .filter((apartment) => apartment.user_id === current_user.id)
          .map((apartment, index) => {
            return (
              <Card style={{ width: "350px", height: "650px" }} key={index}>
                <img alt="image not working bro" src={apartment.image} />
                <CardBody>
                  <CardTitle tag="h5">{apartment.street}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <p>City: {apartment.city}</p>
                    <p>Manager: {apartment.manager}</p>
                    <p>Email: {apartment.email}</p>
                    <p>Price: {apartment.price}</p>
                    <p>Bedrooms: {apartment.bedrooms}</p>
                    <p>Bathrooms: {apartment.bathrooms}</p>
                    <p>Pets: {apartment.pets}</p>
                  </CardSubtitle>
                  <Button>
                    <a href={`/protectedapartmentshow/${apartment.id}`}>
                      See More Details
                    </a>
                  </Button>
                </CardBody>
              </Card>
            )
          })}
      </div>
    </>
  )
}

export default ProtectedApartmentIndex
