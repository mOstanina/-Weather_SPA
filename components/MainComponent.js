import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from '../pages/PagesRouter';
import PagesLinks from '../pages/PagesLinks';
import './MainComponent.css';


class MainComponent extends React.PureComponent {
  
    render() {
        //console.log("MainComponent is render");
        return (

            <BrowserRouter>
                <div className="mainComponent_container">
                    <PagesLinks />
                    <PagesRouter />
                </div>
            </BrowserRouter>

        );

    }

}



// export default connect(mapStateToProps)(MainComponent);
export default MainComponent;