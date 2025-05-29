import React from "react";
// import Classcompo from "./Compent/Classcompo";
// import Funcompo from "./Compent/Funcompo";
// import Hello from "./Jsx/Hello";
// import Hello2 from "./Jsx/Hello2";
// import Css from "./CSS/Css";
// import Mainprops from "./Props/Mainprops";
// import Mainstate from "./State/Mainstate";
// import Form from "./Form/Form";
// import Formobject from "./Form/Formobject";
// import Usedata from "./UssEffect/Usedata";
// import Usetable from "./UssEffect/Usetable";
// import Useaxios from "./UssEffect/Useaxios";
// import Carddata from "./UssEffect/Carddata";
// import UseCard from "./UssEffect/UseCard";
// import Reactboot from "./Bootsrtap/Reactboot";
import Footerdata from "./Bootsrtap/Footerdata";
import Maincontext from "./Context/Maincontext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import Help from "./Layout/Pages/Help";
import About1 from "./Layout/Pages/About1";
import About2 from "./Layout/Pages/About2";
import Notfound from "./Layout/Pages/Notfound";

function App() {
    return (
        <BrowserRouter>
            <div>
                {/* <h1>hello this App data</h1> */}
                {/* <h1>hello this h1</h1> */}

                {/* Compoennt */}
                {/* <Classcompo /> */}
                {/* <Funcompo /> */}

                {/* jsx compo */}
                {/* <Hello /> */}
                {/* <Hello2 /> */}


                {/* CSS Compoennt */}
                {/* <Css /> */}

                {/* props data */}
                {/* <Mainprops /> */}



                {/* State */}
                {/* <Mainstate /> */}


                {/* form halding */}
                {/* <Form /> */}
                {/* <Formobject /> */}


                {/* useEffect */}
                {/* <Usedata /> */}
                {/* <Usetable /> */}
                {/* <Useaxios /> */}
                {/* <Carddata /> */}
                {/* <UseCard /> */}

                {/* Bootstrap */}
                {/* <Reactboot /> */}
                {/* <Footerdata /> */}
                {/* <Maincontext /> */}
            </div>

            <Routes>

                {/* website */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} >
                    <Route path="about1" element={<About1 />} />
                    <Route path="about2" element={<About2 />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/help" element={<Help />} />

                {/* not found */}
                <Route path="*" element={<Notfound />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App;