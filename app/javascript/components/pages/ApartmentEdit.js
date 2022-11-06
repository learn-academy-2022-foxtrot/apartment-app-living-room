import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

const ApartmentEdit = ({ mockApartments }) => {

  const { id } = useParams()
  const currentApartment = mockApartments?.find((apartment) => apartment.id === +id)
  const [updateApartment, setUpdateApartment] = useState({
    street: currentApartment.street,
    city: currentApartment.city,
    state: currentApartment.state,
    manager: currentApartment.manager,
    email: currentApartment.email,
    price: currentApartment.price,
    bedrooms: currentApartment.bedrooms,
    bathrooms: currentApartment.bathrooms,
    pets: currentApartment.pets,
    image: currentApartment.image
  })

  const handleChange = (e) => {
    setUpdateApartment({...updateApartment, [e.target.name]: e.target.value})
    console.log("Is this Working?", e.target.name, e.target.value)
  }
  const handleSubmit = () => {
    console.log("This should update the apartment data!", updateApartment, currentApartment.id)
  }

  return (
    <>
      <div className="center-column-flex">
        <div className="form-card">
          <Form>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input 
                defaultValue={currentApartment.street}
                type="text"
                name="street"
                id="street"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                defaultValue={currentApartment.city}
                type="text"
                name="city"
                id="city"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                defaultValue={currentApartment.state}
                type="select"
                name="state"
                id="state"
                onChange={handleChange}
                required
              >
                <option>AL</option>
                <option>AK</option>
                <option>AZ</option>
                <option>AR</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>DE</option>
                <option>FL</option>
                <option>GA</option>
                <option>HI</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>IA</option>
                <option>KS</option>
                <option>KY</option>
                <option>LA</option>
                <option>ME</option>
                <option>MD</option>
                <option>MA</option>
                <option>MI</option>
                <option>MN</option>
                <option>MS</option>
                <option>MO</option>
                <option>MT</option>
                <option>NE</option>
                <option>NV</option>
                <option>NH</option>
                <option>NJ</option>
                <option>NM</option>
                <option>NY</option>
                <option>NC</option>
                <option>ND</option>
                <option>OH</option>
                <option>OK</option>
                <option>OR</option>
                <option>PA</option>
                <option>RI</option>
                <option>SC</option>
                <option>SD</option>
                <option>TN</option>
                <option>TX</option>
                <option>UT</option>
                <option>VT</option>
                <option>VA</option>
                <option>WA</option>
                <option>WV</option>
                <option>WI</option>
                <option>WY</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="manager">Manager</Label>
              <Input
                defaultValue={currentApartment.manager}
                type="text"
                name="manager"
                id="manager"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                defaultValue={currentApartment.email}
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                defaultValue={currentApartment.price}
                type="text"
                name="price"
                id="price"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="bedrooms">Bedrooms</Label>
              <Input
                defaultValue={currentApartment.bedrooms}
                type="select"
                name="bedrooms"
                id="bedrooms"
                onChange={handleChange}
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="bathrooms">Bathrooms</Label>
              <Input
                defaultValue={currentApartment.bathrooms}
                type="select"
                name="bathrooms"
                id="bathrooms"
                onChange={handleChange}
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="pets">Pets Allowed?</Label>
              <Input
                defaultValue={currentApartment.pets}
                type="select"
                name="pets"
                id="pets"
                onChange={handleChange}
                required
              >
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                defaultValue={currentApartment.image}
                type="text"
                name="image"
                id="image"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <div className="center-flex">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ApartmentEdit
