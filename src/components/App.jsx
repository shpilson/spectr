import { Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Footer } from "./Footer/Footer";
import { NotFoundPage } from "./Pages/NotFoundPage/NotFoundPage";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   let allElements = document.querySelectorAll("*");
  //   allElements.forEach((element) => {
  //     element.style.transition = "0.3s";
  //   });

  //   console.log(allElements);
  // }, []);
  return (
    <>
      <Header />
      <main className="main d-fl-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export { App };
