import React from 'react';
import MyMap from './MyMap';

class Counter extends React.Component {
  state = { //random intial state
    lon: 151.209900,
    lat: -33.865143,
    rad: 50,
    result: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.type === 'float' ? parseFloat(e.target.value) : e.target.value });
  };

  render() {
    return (
      <>
        <MyMap lat={this.state.lat} lon={this.state.lon} rad={this.state.rad}/>

        <form>
          Longitude: <input type="number" step="any" name="lon" value={this.state.lon} onChange={this.handleChange} />
          Latitude: <input type="number" step="any" name="lat" value={this.state.lat} onChange={this.handleChange} />
          Radius: <input type="number" step="any" name="rad" value={this.state.rad} onChange={this.handleChange} />

          <input type="submit" value="Generate Manuel GET" id="btn" onClick={(e) => {
            e.preventDefault();  //this prevents onClick's ability to refresh page when its clicked
            var params = { ...this.state }  //spread attribute: all of state's attributes can be used here
            delete params.result //delete previous state params
            var url = new URL('http://127.0.0.1:8070/process_get')

            Object.keys(params).forEach(key => url.searchParams.append(key, params[key])) //add map parameters at the end of URL

            fetch(url) // like this form: "http://127.0.0.1:8070/process_get?lon=151.2099&lat=-33.865143&rad=50"
            .then(response => console.log(response))
            .then(response =>  response.json()) //code for handling the data you get from the API
            .then(data => this.setState({ result: data.resp})) //set react components(maps) state to new data
            .catch(function(error) {
              console.log(error); //catch response errors
            }); 
            //console.log(this.state);
          }} />

        </form>
        {this.state.result ? <p>Result: {this.state.result}</p> : <p>Change coordinates to see result</p>}
      </>
    );
  }
}

export default Counter;
