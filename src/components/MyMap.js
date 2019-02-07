import React from 'react';

const MyMap = (props) => {
    console.log(props)
    var mykey = '{MY_API_KEY}'
    var m =  <div>
        <iframe title="map"
        width="100%"
        height="600"
        src={`https://www.google.com/maps/embed/v1/search?zoom=15&q=${props.lat},${props.lon}&key=${mykey}`}
 >
 </iframe>
    </div>
   return m;
 }

 export default MyMap;