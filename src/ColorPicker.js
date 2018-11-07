import React, { Component } from 'react';
import './ColorPicker.scss';
import colorPickerArray from './colorPickerArray.json'
const textAccessibility = {text:'accessibility'};
const colors = colorPickerArray.colors;

class ColorPicker extends Component {
  constructor(props){
   // initialize state of color
    super(props);
    this.state = {
      color: 'transparent',
      colorTxt: '',
      didUpdate:false
   };
   this.colorMethodUpdate = this.colorMethodUpdate.bind(this);
  }

// The method function that called and update setState (color)
colorMethodUpdate(event, clrTxt){
  const colorID = event;
  this.setState({
      color:colorID,
      colorTxt: clrTxt,
      didUpdate:true
    });  
}

  // lifecycle event to update after setState and method was fired
  componentDidUpdate(prevProps, prevState) {
    const body = document.querySelectorAll('body');
    const header = document.querySelectorAll('.header');
    const footer = document.querySelectorAll('footer');
    if(body.length > 0 && header.length > 0 && footer.length > 0){
      body[0].style.backgroundColor = `${this.state.color}`;
      header[0].style.backgroundColor = `${this.state.color}`;
      footer[0].style.backgroundColor = `${this.state.color}`;
      }

    }
    componentDidMount() {
          // this check will log the correct class present at the time and target the text color of that module

      const updateColors = 
        setInterval(() => {
          const homeText = document.querySelector('.home');
          const portfolioText = document.querySelector('.portfolio');
          const contactsText = document.querySelector('.contacts');
          const library = document.querySelector('.library');

          if(homeText != null){
            homeText.style.color =  `${this.state.colorTxt}`;
            if(this.state.didUpdate){
              document.querySelector('.home .jumbotron').style.backgroundColor = `${this.state.color}`;
            }
          }else if(portfolioText != null){
            portfolioText.style.color =  `${this.state.colorTxt}`;
          }else if(contactsText != null){
            contactsText.style.color =  `${this.state.colorTxt}`;
          }else if(library != null){
            library.style.color =  `${this.state.colorTxt}`;
          }
        }, 1000);
    }

   componentWillUnmount() {
     console.log('unmounted');
      // Make sure to remove the DOM listener when the component is unmounted.
      //this.nv.removeEventListener("nv-enter", this.handleNvEnter);
    }


// https://stackoverflow.com/questions/36180414/reactjs-add-custom-event-listener-to-component


// const homeText = document.querySelector('.home');
// const portfolioText = document.querySelector('.portfolio');
// const contactsText = document.querySelector('.contacts');
// const library = document.querySelector('.library');

    // componentDidMount() {
    //   // When the component is mounted, add your DOM listener to the "nv" elem.
    //   // (The "nv" elem is assigned in the render function.)
    //   this.nv.addEventListener("nv-enter", this.handleNvEnter);
    // }
  
 


          // convert string url to array and find last position for current location


//       homeText.style.color = `${this.state.color}`;
//  portfolioText.style.color = `${this.state.color}`;
//   contactsText.style.color = `${this.state.color}`;
//        library.style.color = `${this.state.color}`;
    // const currentLocation = window.location.href.split('/');
    // const currentLocationLength = currentLocation.length - 1;   
    // switch(currentLocation[currentLocationLength]){
    //   case 'portfolio':
    //   console.log('portfolio');
    //   break;

    //   case 'contacts':
    //   console.log('contacts');
    //   break;

    //   case 'library':
    //   console.log('library');
    //   break;

    //   default:
    //   console.log('home');
    // }


  render() {

    return (
      <div className="colorPicker">
      <span>{textAccessibility.text}</span>
        <ul>
          {colors.map((color) => <li key={color.bg} style={{backgroundColor:`${color.bg}`}} onMouseOver={event => (this.colorMethodUpdate(event.target.innerText, color.txt))}>{color.bg}</li>)}
        </ul>
      </div>
    );
  }
}

export default ColorPicker;
