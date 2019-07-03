import React from 'react';
import WeatherComponent from "./weather";
import './style.scss';
import { Manager, Reference, Popper } from "react-popper";

class TopSection extends React.Component{

    state = {
        isOpen: false,
        
    };

    handleChange = (e) =>{
        this.setState({
            city: e.target.value
        })

    }

    handlePress = (e) => {
       
        if (e.key === "Enter" && e.target.value !== "" ) {
            let c = e.target.value;
            this.props.updateTheWeather(c);
            this.setState({
                isOpen: false
            })
            console.log(`Handle press ${c}`);

        }

           // this.props.getTheWeather()
            /*let url =  `https://api.apixu.com/v1/current.json?key=${Key}&q=${c}`; 
            fetch(`${url}`)
              .then(res => res.json())
              .then(data => {
                console.log(`this this this ${data.location.name}`)
                 
                  
               // console.log(`This is the response location ${Object.keys(data)}`)
               //console.log(`This is the response location ${data.current.icon}`)
              // console.log(`This is the response location ${data.current.condition.icon}`)
               //console.log(`This is the response current ${Object.keys(data.current)}`)
              this.setState({temp: data.current.temp_f, 
                isLoading: false, 
                city: data.location.name,
                text: data.current.condition.text,
                icon: data.current.condition.icon
              
              })
               
              })*/
           
           
            //}
            //const {city,days,isLoading} = this.state;
            //console.log(`CITY ${this.state.city}`);
            /**/
        
         
    
    }

    getlocation = () =>{
        this.setState({
            isOpen: true
        })
    }

    render(){
        return(
            <div className="top-container">
            <div className="title">Weather App</div>
            
            {!this.state.isOpen &&
            <div>
            <WeatherComponent {...this.props}/>
            <button className="btn btn-select-location " 
         onClick={this.getlocation}
        
         >
         Select Location
         </button>
         </div>
            }

            {this.state.isOpen && 
            <div>
            <WeatherComponent {...this.props}/>
                
            <Manager>
    <Reference>
      {({ ref }) => (
         <button className="btn-select-location " 
         onClick={this.getlocation}
         ref={ref}
         >
         Select Location
         </button>
      )}
    </Reference>
    <Popper placement="bottom">
      {({ ref, style, placement, arrowProps }) => (

        <div className="popup-container" ref={ref} style={style} data-placement={placement}>

         <input type="text" 
                id="location-name" 
                onChange={this.handleChange} 
                onKeyPress={this.handlePress}
         />
          <div ref={arrowProps.ref} style={arrowProps.style} />
        </div>
      )}
    </Popper>
    
  </Manager>
  </div>
 }
           

             
           
            </div>
        
        );
    }

}


export default TopSection;