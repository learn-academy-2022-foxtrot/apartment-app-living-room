import React from "react"
import { render } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentShow />, div)
  })
})
import React from "react"
import { render } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import mockApartments from "../mockApartments"
import { MemoryRouter, Route, Routes } from "react-router-dom"


describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {

    const div = document.createElement("div")

    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={ mockApartments }/>} />
        </Routes>
      </MemoryRouter>
    )
        const apartmentStreet = screen.getByText(apartment.street)
        screen.debug(apartmentStreet)
        expect(apartmentStreet).toBeInTheDocument()
      })
    })
