import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedApartmentIndex from "./ApartmentIndex"
import mockApartments from "../mockApartments"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ProtectedApartmentIndex />, div)
  })

  it("renders cards without crashing", () => {
    const div = document.createElement("div")
    render(<ProtectedApartmentIndex mockApartments={mockApartments} />, div)
    mockApartments.forEach((apartment) => {
      const apartmentStreet = screen.getByText(apartment.street)
      screen.debug(apartmentStreet)
      expect(apartmentStreet).toBeInTheDocument()
    })
  })
})