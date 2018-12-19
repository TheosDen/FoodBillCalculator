import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            provider: null,
            selectedCount: 0,
            selectedTotal: 0,
        };
    }

    componentDidMount() {
        fetch('//food-bill.test/food/provider/') // TODO: move domain to config
            .then(response => response.json())
            .then(data =>
                this.setState({
                provider: data[0]
            }));
    }

    render() {
        return <div>
            <Header provider={this.state.provider} total={this.state.selectedTotal} totalCount={this.state.selectedCount} />
            <Main categories={this.state.provider ? this.state.provider.categories : []} />
        </div>;
    }
}

export default App;