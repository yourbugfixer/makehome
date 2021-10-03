import { Route, Switch } from "react-router-dom";
import GetdataProvider from "./context/GetData";
import adminRoute from "./admin/adminRoute";
import homePage from "./pages/homePage";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import interiorDesign from "./pages/services/interiorDesign";
import Plumbing from "./pages/services/Plumbing";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Property from "./pages/property/Property";

function App() {
  return (
    <GetdataProvider>
      <Switch>
        <Route path="/admin" component={adminRoute} />

        <>
          <Navbar />
          <Route path="/" exact component={homePage} />
          <Route path="/about" component={About} />
          <Route path="/services/interior-design" component={interiorDesign} />
          <Route path="/services/plumbing" component={Plumbing} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/property" component={Property} />
          <Footer />
        </>
      </Switch>
    </GetdataProvider>
  );
}

export default App;
