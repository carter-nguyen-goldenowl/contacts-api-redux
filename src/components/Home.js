import React from "react";

import Navbar from "./Navbar";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div className='py-6 md:py-12'>
                    <h1> wellcome the home page</h1>
                </div>
            </>
        );
    }
}
