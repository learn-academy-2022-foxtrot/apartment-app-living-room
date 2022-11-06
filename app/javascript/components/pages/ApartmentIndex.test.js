import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import mockApartments from "../mockApartments"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentIndex />, div)
  })

  it("renders cards without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentIndex mockApartments={mockApartments} />, div)
    mockApartments.forEach((apartment) => {
      const apartmentStreet = screen.getByText(apartment.street)
      expect(apartmentStreet).toBeInTheDocument()
    })
  })
})

