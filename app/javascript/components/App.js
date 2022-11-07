import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import ProtectedApartmentShow from "./pages/ProtectedApartmentShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockApartments from "./mockApartments.js"
import ProtectedApartmentIndex from "./pages/ProtectedApartmentIndex"

const App = (props) => {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }

  const createApartment = (apartment) => {
    fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(apartment),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readApartments())
      .catch((errors) => console.log("Aparment create errors:", errors))
  }

  const updateApartment = (apartment, id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then(() => readApartments())
      .catch((errors) => console.log("Apartment Create Errors:", errors))
  }

  const deleteApartment = (id) => {
    console.log(id)
    fetch(`http://localhost:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => readApartments())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route
          path="/protectedapartmentindex"
          element={
            <ProtectedApartmentIndex
              mockApartments={mockApartments}
              {...props}
            />
          }
        />
        <Route exact path="/" element={<Home {...props} />} />
        <Route
          path="/apartmentindex"
          element={<ApartmentIndex mockApartments={mockApartments} />}
        />
        <Route path="/apartmentshow/:id" element={<ApartmentShow deleteApartment={deleteApartment} mockApartments={mockApartments} />} />
        <Route
          path="/protectedapartmentshow/:id"
          element={
            <ProtectedApartmentShow
              deleteApartment={deleteApartment}
              mockApartments={mockApartments}
              {...props}
            />
          }
        />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit mockApartments={mockApartments}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App
