import Header from "./Components/Header";
import About from "./Components/About/About";
import Sports from "./Components/Sports/Sports";
import Events from "./Components/Events/Events";
import News from "./Components/News/News";
import Sponsors from "./Components/Sponsors/Sponsors";
import Footer from "./Footer/Footer";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Header />
        <About />
        <Sports />
        <Events />
        <Slide right>
          <News />
        </Slide>
        <Slide right>
          <Sponsors />
        </Slide>
        <Slide right>
          <Footer />
        </Slide>
      </LocalizationProvider>
    </>
  );
}

export default App;
