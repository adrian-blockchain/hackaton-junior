
import './App.css';
import Parallax from "react-rellax/lib";
//MaTerial UI
import Button from '@material-ui/core/Button';
import Navbar from "./components/Navbar.js";
import cap from "./images/kozel.png";
import React from "react";
import Histoire from "./components/paragrah_histoire.js";
import Kozel from "./components/pack card/kozel.js";
import Branik from "./components/pack card/branik";
import Vlad from "./components/pack card/vlad.js";
import Footer from "./components/footer.js";




function App() {
  return (
<>

        <Navbar/>
        <div className='caps'>


                <Parallax speed={-12}>
                    <img className="cap2" src={cap}/>
                </Parallax>

        </div>

          <Histoire/>
          <h5>Nos offres</h5>
          <Parallax speed={9}>
          <div className='cards'>
    <Kozel/>
    <Branik/>
    <Vlad/>
          </div>
              </Parallax>
                  <Footer/>

    </>

  )
}

export default App;
