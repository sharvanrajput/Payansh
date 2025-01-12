import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogDetails, Footer, Navbar } from "./Components"
import { About, Blog, Contact, Expertise } from "./Page"
import Home from "./Page/Home"



const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>



        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
