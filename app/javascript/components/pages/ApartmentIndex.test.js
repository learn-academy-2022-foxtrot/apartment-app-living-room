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

// import { render, screen } from '@testing-library/react'
// import ApartmentIndex from './ApartmentIndex'
// import mockApartments from "../mockApartments"
// import {BrowserRouter} from "react-router-dom"

// describe("<ApartmentIndex/>", ()=> {
//     beforeEach(() => {
//       render(
//         <BrowserRouter>
//           <CatIndex mockApartments={mockApartments} />
//         </BrowserRouter>
//         )
//     })
//     test("renders the ApartmentIndex page for the user", ()=> {
//         console.log("cat index render")
//         screen.debug()
//         const element = screen.getByText("Cheap Apartments")
//         screen.debug(element)
//         expect(element).toBeInTheDocument()
//     })

//     test("renders cat cards", () => {

//       mockApartments.forEach(apartment => {
//         const apartmentStreet = screen.getByText(apartment.street)
//         expect(apartmentStreet).toBeInTheDocument()
//       })

//       const apartmentImage = screen.getAllByRole('image')
//       screen.debug(apartmentImage[0])
//       expect(apartmentImage[0]).toBeInTheDocument()

//     })

// })
