import React, {FC} from 'react';
import SrcComponent from "./SrcComponent";
import Locations from "./Locations";
import AboutUs from "./AboutUs";
import EventFeed from "./EventFeed";
const Main:FC = () => {
    return (
        <>
            <SrcComponent />
            <Locations />
            <AboutUs />
            <EventFeed />

        </>
    );
};

export default Main;