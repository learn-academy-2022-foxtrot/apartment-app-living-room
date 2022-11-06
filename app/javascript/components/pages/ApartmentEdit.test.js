import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentEdit from "./ApartmentEdit"
import BrowserRouter from "react-router-dom"

describe("<ApartmentEdit />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentEdit />, div)
    expect(screen.getByRole(""))
    screen.debug()
  })
  it("renders the form text", () => {
    const div = document.createElement("div")
    render(<ApartmentEdit />, div)
    const updateStreet = screen.getByText("Street")
    expect(updateStreet).toBeInTheDocument()
    const updateCity = screen.getByText("City")
    expect(updateCity).toBeInTheDocument()
    const updateState = screen.getByText("State")
    expect(updateState).toBeInTheDocument()
    const updateManager = screen.getByText("Manager")
    expect(updateManager).toBeInTheDocument()
    const updateEmail = screen.getByText("Email")
    expect(updateEmail).toBeInTheDocument()
    const updatePrice = screen.getByText("Price")
    expect(updatePrice).toBeInTheDocument()
    const updateBedrooms = screen.getByText("Bedrooms")
    expect(updateBedrooms).toBeInTheDocument()
    const updateBathrooms = screen.getByText("Bathrooms")
    expect(updateBathrooms).toBeInTheDocument()
  })
})
