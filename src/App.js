import React from 'react';

import Header from './Component/Header';
import Add from './Component/Add';
import Todos from './Component/Todos';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Todos />
                <Add />
            </div>
        );
    }
}

export default App;
