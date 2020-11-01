import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  maxWidth: '100%',
  height: '400px'
};

const location = {
    lat: 25.716871,
    lng: 89.263355
}
  
const onLoad = marker => {
    console.log('marker: ', marker)
}

function ContactWithMe(){
    return (
        <div className="section pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ml-auto mr-auto">
                        <h1 className="text-center section-title mb-5">Contact with Me..</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="ml-auto mr-auto mb-5">
                        <button className="projectBtn  btn"><Link className="link" to="/contact">Contact Me</Link></button>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <LoadScript googleMapsApiKey="AIzaSyAOTSErm-hGrIaOJbbVeAMelezegnsR3HY">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={14}
                    >
                                { /* Child components, such as markers, info windows, etc. */ }
                        <Marker
                            onLoad={onLoad}
                            position={location}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default React.memo(ContactWithMe)