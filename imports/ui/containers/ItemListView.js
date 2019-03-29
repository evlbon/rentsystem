import React from 'react';
import Items from '../components/Item';
import CustomForm from '../components/Form';

class ItemList extends React.Component {

    // state = {
    //     articles: []
    // }
    //
    // componentDidMount() {
    //     axios.get('http://127.0.0.1:8000/api/')
    //         .then(res => {
    //             this.setState({
    //                 articles: res.data
    //             });
    //         })
    // }

    render() {
        return (
            <div>
                {/*<Items data={this.state.articles} />*/}


            </div>
        )
    }
}

export default ItemList;