import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {

    const [lat, errorMessage] = useLocation();

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>
    }
    else if (lat) {
        content = <SeasonDisplay lat={lat} />

    }
    else {
        content = <Spinner text='Waiting for user input..' />;
    }

    return (<div className="border red">
        {content}
    </div>);
};

//class App extends React.Component {
//    //constructor(props) {
//    //    super(props);

//    //    //this is the ONLY time we set state like this, every other time we must use this.setState({ props set here like lat: 2})
//    //    this.state = { lat: null, errorMessage: '' };
//    //}

//    state = { lat: null, errorMessage: '' };

//    componentDidMount() {
//        window.navigator.geolocation.getCurrentPosition(
//            position => this.setState({ lat: position.coords.latitude }),
//            error => this.setState({ errorMessage: error.message })
//        );
//    }

//    renderContent() {
//        if (this.state.errorMessage && !this.state.lat) {
//            return (
//                <div>
//                    Error: {this.state.errorMessage}
//                </div>
//            );
//        }
//        else if (this.state.lat) {
//            return (
//                <SeasonDisplay lat={this.state.lat} />
//            );
//        } else {
//            return (
//                <Spinner text='Waiting for user input..' />
//            );
//        }
//    }
//    //React says we must define a render method for a class based component
//    render() {
//        return <div className="border red">
//            {this.renderContent()}
//            </div>
//    }


//}

ReactDOM.render(<App />, document.querySelector('#root'));
