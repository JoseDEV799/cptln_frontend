import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode, lazy, Suspense } from "react";
import { AuthProvider } from "./context/Usuario_context";


const AboutUs = lazy(() => import("@/pages/client/pages/AboutUs"));
const Home = lazy(() => import("@/pages/client/pages/Home"));
const Donate = lazy(() => import("@/pages/client/pages/Donate"));
const Contact = lazy(() => import("@/pages/client/pages/Contact"))
const Devo = lazy(() => import("@/pages/client/pages/Devo"))

// Admin const
const LoginAdmin = lazy(() => import("@/pages/Admin/pages/LoginAdmin"));
const RegisterAdmin = lazy(() => import("@/pages/Admin/pages/RegisterAdmin"));
const DevoAd = lazy(() => import("@/pages/Admin/pages/DevoAdmin"));
const NewsAdmin = lazy(() => import("@/pages/Admin/pages/NewsAdmin"))
const EventsAdmin = lazy(() => import("@/pages/Admin/pages/EventsAdmin"))
const Navbar = lazy(() => import("@/pages/client/components/Navbar"));
const Administracion = lazy(() => import("@/pages/Admin/pages/Administracion"))
const TablaEvento = lazy(() => import("@/pages/Admin/pages/TablaEvento"))


const App = () => {
  return (
    <>
      <StrictMode>
        <AuthProvider>
          <div className="bg-[#EAE9E5]">
            <Suspense fallback={<div>Loading...</div>}>

              <BrowserRouter>
                <Routes>
                  <Route element={<Navbar />} path="/">
                    <Route index element={<Home />} />
                    <Route path="conocenos" element={<AboutUs />} />
                    <Route path="home" element={<Home />} />
                    <Route path="donate" element={<Donate />} />
                    <Route path="contactanos" element={<Contact />} />
                    <Route path="devo" element={<Devo />} />
                  </Route>
                  <Route path="/admin" element={<Administracion/>}>
                    <Route path="register" element={<RegisterAdmin />} />
                    <Route path="devoAd" element={<DevoAd />} />
                    <Route path="login" element={<LoginAdmin />} />
                    <Route path="newsad" element={<NewsAdmin />} />
                    <Route path="eventad" element={<EventsAdmin />} />
                    <Route path="tablaevento" element={<TablaEvento />} />
                    {/* <Route path="/programas" element={<Programs/>} /> */}
                  </Route>

                </Routes>

              </BrowserRouter>

            </Suspense>
          </div>
        </AuthProvider>
      </StrictMode>
    </>
  );
};

export default App;
