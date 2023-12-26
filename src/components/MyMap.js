"use client"
import { useState, useCallback, memo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
const containerStyle = {
    width: '100%',
    height: '100%',
    overflow: "hidden"
};

const center = {
    lat: 7.799196765717471,
    lng: 4.590234151155966
};
function MyMap() {

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
    })
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <div>Hello map</div>
        </GoogleMap>
    ) : <></>
}


export default memo(MyMap)

