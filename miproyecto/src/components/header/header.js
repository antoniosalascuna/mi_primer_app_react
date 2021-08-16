import React, { Component, useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// /* export default class header extends Component {
//   render() {
//     return (
//       <div>
//         <>
//           <header id="home">
//             <nav id="nav-wrap">
//               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
//               <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
//               <ul id="nav" className="nav">
//                 <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
//                 <li><a className="smoothscroll" href="#about">Sobre mi</a></li>
//                 <li><a className="smoothscroll" href="#resume">Resumen</a></li>
//                 <li><a className="smoothscroll" href="#portfolio">Portafolio</a></li>
//                 <li><a className="smoothscroll" href="#contact">Titulos</a></li>
//               </ul> {/* end #nav */}
//             </nav> {/* end #nav-wrap */}
//             <div className="row banner">
//               <div className="banner-text">
//                 <h1 className="responsive-headline">Saludos Visitante!!</h1>
//                 <h3> <span> <strong>Bienvenido a mi portafolio virtual.</strong> Mi nombre es Carlos Antonio Salas Caballero soy un apasionado con la Tecnología y Desarrollo Web. </span> <span>Soy egresado de la Universidad Nacional de Costa Rica</span>. <span>A continuación encontraras un poco de información sobre mi persona</span> <a className="smoothscroll" href="#about">Sigue bajando y verás más </a>
//                   <a className="smoothscroll" href="#about">Sobre mi</a>.</h3>
//                 <hr />
//                 <ul className="social">
//                   <li><a href="https://www.facebook.com/antonio.salascaballero/"><i className="fa fa-facebook" /></a></li>
//                   <li><a href="#"><i className="fa fa-twitter" /></a></li>
//                   <li><a href="#"><i className="fa fa-google-plus" /></a></li>
//                   {/*<li><a href="#"><i className="fa fa-linkedin" /></a></li>*/}
//                   <li><a href="https://www.instagram.com/mm.salas97/"><i className="fa fa-instagram" /></a></li>
//                   {/*<li><a href="#"><i className="fa fa-dribbble" /></a></li>*/}
//                   {/*<li><a href="#"><i className="fa fa-skype" /></a></li>*/}
//                 </ul>
//               </div>
//             </div>
//             <p className="scrolldown">
//               <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
//             </p>
//           </header> {/* Header End */}
//         </>
//       </div>
//     )
//   }
// } */

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Header = () => {

  const classes = useStyles();
  const [value, setValue] = useState('Sobre mi')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div>
        <>


          
          <header id="home">




             <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
              <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
                <li><a className="smoothscroll" href="#about">Sobre mi</a></li>
                <li><a className="smoothscroll" href="#resume">Resumen</a></li>
                <li><a className="smoothscroll" href="#portfolio">Portafolio</a></li>
                <li><a className="smoothscroll" href="#contact">Titulos</a></li>
              </ul> {/* end #nav */}
             </nav>


            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">Saludos Visitante!!</h1>
                <h3> <span> <strong>Bienvenido a mi portafolio virtual.</strong> Mi nombre es Carlos Antonio Salas Caballero soy un apasionado con la Tecnología y Desarrollo Web. </span> <span>Soy egresado de la Universidad Nacional de Costa Rica</span>. <span>A continuación encontraras un poco de información sobre mi </span> <a className="smoothscroll" href="#about">Sigue bajando y verás más </a>
                  <a className="smoothscroll" href="#about">Sobre mi</a>.</h3>
                <hr />
                <ul className="social">
                  <li><a href="https://www.facebook.com/antonio.salascaballero/"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  {/*<li><a href="#"><i className="fa fa-linkedin" /></a></li>*/}
                  <li><a href="https://www.instagram.com/mm.salas97/"><i className="fa fa-instagram" /></a></li>
                  {/*<li><a href="#"><i className="fa fa-dribbble" /></a></li>*/}
                  {/*<li><a href="#"><i className="fa fa-skype" /></a></li>*/}
                </ul>
              </div>
            </div>
            <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
          </header> {/* Header End */}
        </>
      </div>
    </>
  )
}

export default Header