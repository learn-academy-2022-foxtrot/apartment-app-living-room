import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentNew from "./ApartmentNew"
import BrowserRouter from "react-router-dom"

describe("<ApartmentNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentNew />, div)
  })
  it("renders the form text", () => {
    const div = document.createElement("div")
    render(<ApartmentNew />, div)
    const newStreet = screen.getByText("Street")
    expect(newStreet).toBeInTheDocument()
    const newCity = screen.getByText("City")
    expect(newCity).toBeInTheDocument()
    const newState = screen.getByText("State")
    expect(newState).toBeInTheDocument()
    const newManager = screen.getByText("Manager")
    expect(newManager).toBeInTheDocument()
    const newEmail = screen.getByText("Email")
    expect(newEmail).toBeInTheDocument()
    const newPrice = screen.getByText("Price")
    expect(newPrice).toBeInTheDocument()
    const newBedrooms = screen.getByText("Bedrooms")
    expect(newBedrooms).toBeInTheDocument()
    const newBathrooms = screen.getByText("Bathrooms")
    expect(newBathrooms).toBeInTheDocument()
  })

  it("renders the form input", () => {
    const div = document.createElement("div")
    render(<ApartmentNew />, div)
    const placeholderStreet = screen.getByPlaceholderText(
      "What street is your apartment on?"
    )
    expect(placeholderStreet).toBeInTheDocument()
    const placeholderCity = screen.getByPlaceholderText(
      "What city is your apartment in?"
    )
    expect(placeholderCity).toBeInTheDocument()
  })
})
