import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import mockApartments from "../mockApartments"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route path="/apartmentShow/:id" element={<ApartmentShow mockApartments={mockApartments} />} />
        </Routes>
      </MemoryRouter>
    )
    const showRender = screen.getByText(/pets/i)
    screen.debug(showRender)
  })
  it("NavLink exists", () => {
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route path="/apartmentShow/:id" element={<ApartmentShow mockApartments={mockApartments} />} />
        </Routes>
      </MemoryRouter>
    )
    const navLink = screen.getByText("Go Back")
    expect(navLink).toBeInTheDocument()
  })
})

