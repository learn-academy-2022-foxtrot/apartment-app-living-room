import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

const ApartmentNew = ({ createApartment }) => {
  // I set the default state for the options that I used a drop select for. These can still be updated by the user and submitted correctly, but if the user does NOT change the drop down, it will default to the value that's shown on the page. (This will be the first value in the options.)
  const [newApartment, setNewApartment] = useState({
    street: "",
    city: "",
    state: "AL",
    manager: "",
    email: "",
    price: "",
    bedrooms: 1,
    bathrooms: 1,
    pets: "Yes",
    image: ""
  })

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value })
    console.log(e.target.name, e.target.value)
  }

  const handleSubmit = () => {
    // createApartment(newApartment)
    console.log("User Submitted Information:", newApartment)
  }

  return (
    <>
      <div className="center-column-flex">
        <div className="form-card">
          <Form>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input
                type="text"
                name="street"
                id="street"
                placeholder="What street is your apartment on?"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="What city is your apartment in?"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
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
                type="text"
                name="manager"
                id="manager"
                placeholder="Who manages the apartment(s)?"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="What's your email?"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="text"
                name="price"
                id="price"
                placeholder="What's the price of the apartment?"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="bedrooms">Bedrooms</Label>
              <Input
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
                type="text"
                name="image"
                id="image"
                placeholder="Please include an Apartment image."
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

export default ApartmentNew
