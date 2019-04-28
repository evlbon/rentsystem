import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';
import Items from '../../models/item';
import {Meteor} from "meteor/meteor";
import Profile from "../../models/profile";
import {Input, Checkbox, Button, Popover, Dropdown, Menu, Icon} from 'antd';
import ItemList from "../components/ItemListView";
import Category from "../../models/category";

const Search = Input.Search;
const ANY_CAT = 'Any category';

class MySearch extends React.Component {

    levenshteinDistance = (s, t) => {
        console.log(s, t)
        let d = [];
        let n = s.length;
        let m = t.length;

        if (n === 0) return m;
        if (m === 0) return n;

        for (let i = n; i >= 0; i--) d[i] = [];

        for (let i = n; i >= 0; i--) d[i][0] = i;
        for (let j = m; j >= 0; j--) d[0][j] = j;

        for (let i = 1; i <= n; i++) {
            let s_i = s.charAt(i - 1);

            for (let j = 1; j <= m; j++) {

                if (i === j && d[i][j] > 4) return n;

                let t_j = t.charAt(j - 1);
                let cost = (s_i === t_j) ? 0 : 1;
                let mi = d[i - 1][j] + 1;
                let b = d[i][j - 1] + 1;
                let c = d[i - 1][j - 1] + cost;

                if (b < mi) mi = b;
                if (c < mi) mi = c;

                d[i][j] = mi;

                if (i > 1 && j > 1 && s_i === t.charAt(j - 2) && s.charAt(i - 2) === t_j) {
                    d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
                }
            }
        }
        return d[n][m];
    };

    searchByName = (itemName, exact) => {
        if (exact) {
            return Items.find({itemName}).fetch()
        } else {
            let result = Items.find({}).fetch();

            return result.filter(x => {
                console.log(this.levenshteinDistance(x.itemName, itemName));
                return (this.levenshteinDistance(x.itemName, itemName) <= 2)
            })
        }

    };

    searchByOwner = (username, exact) => {
        let user = null;
        if (exact) {
            user = [this.props.users.findOne({username})];
        } else {
            user = this.props.users.find({}).fetch();
            user = user.filter(x => this.levenshteinDistance(x.username, username) <= 2)
        }

        if (user) {
            let result = [];
            user.forEach(u => {
                const OwnerID = u._id;
                result = result.concat(Items.find({OwnerID}).fetch())
            });
            return result
        }
        return []
    };

    searchByKey = (key, exact) => {

        let result = [];

        Items.find({}).fetch().forEach(item => {
            let keys = item.keywords;
            if (exact && keys.indexOf(key) !== -1)
                result.push(item);
            if (!exact) {
                keys = keys.split(',');
                for (let i=0; i<keys.length; i++) {
                    keys[i] = keys[i].replace(/\s/g, '');
                    console.log('q  '+keys[i]);
                    if (!exact && this.levenshteinDistance(key, keys[i]) <= 2) {
                        result.push(item);
                        break;
                    }
                }
            }
        });

        return result
    };

    getApprovedCat = () => {

        const cat = Category.find({approved_add: true}, {sort: {approved_add: 1}}).map(e => e.categoryName);
        cat.splice(0, 0, 'Any category');
        return cat;
    };

    handleMenuClick = (e) => {
        this.setState({
            selectedCat: this.getApprovedCat()[e.key]
        })
    };

    search = (value) => {
        let result = [];

        if (value) {

            if (this.state.byName)
                result = result.concat(this.searchByName(value, this.state.exactMatch));

            if (this.state.byOwner)
                this.searchByOwner(value, this.state.exactMatch).forEach(item => {

                    if (result.findIndex(r => {
                            return item._id === r._id
                        }) === -1)
                        result.push(item)

                });

            if (this.state.byKeyWords)
                this.searchByKey(value, this.state.exactMatch).forEach(item => {
                    if (result.findIndex(r => {
                            return item._id === r._id
                        }) === -1)
                        result.push(item)
                });

        } else {
            result = Items.find({}).fetch()
        }

        if (this.state.selectedCat !== ANY_CAT) {
            result = result.filter(item => {
                return item.category === this.state.selectedCat
            });
        }


        // result = result.concat(this.searchByOwner(value));
        // result = result.concat(this.searchByKey(value));
        return result;

    };

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            exactMatch: false,
            byName: true,
            byOwner: true,
            byKeyWords: true,
            selectedCat: ANY_CAT,
        };
    }

    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }


    render() {

        const menu = (
            <Menu onClick={(e) => this.handleMenuClick(e)}>
                {this.getApprovedCat().map((e, i) => {
                    return <Menu.Item key={i}>{e}</Menu.Item>
                })}
            </Menu>
        );

        return (
            <div style={{background: "white", padding: "100px 100px 20px 100px", minHeight: 1000}}>


                <div style={{float: 'left', width: '94%'}}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"

                        onSearch={value => {
                            this.setState({
                                items: this.search(value)
                            })

                        }}
                    />
                </div>
                <div style={{float: 'right', width: '5%'}}>
                    <Popover placement="bottom" title={'Choose'} content={<div>

                        <Checkbox onChange={e => {
                            this.setState({exactMatch: e.target.checked})
                        }}>Exact match</Checkbox><br/>
                        <Checkbox defaultChecked onChange={e => {
                            this.setState({byName: e.target.checked})
                        }}>By name</Checkbox><br/>
                        <Checkbox defaultChecked onChange={e => {
                            this.setState({byOwner: e.target.checked})
                        }}>By owner</Checkbox><br/>
                        <Checkbox defaultChecked onChange={e => {
                            this.setState({byKeyWords: e.target.checked})
                        }}>By key words</Checkbox>
                        <br/>

                        <Dropdown overlay={menu}>
                            <Button style={{marginTop: 8}}>
                                {this.state.selectedCat} <Icon type="down"/>
                            </Button>
                        </Dropdown>

                    </div>} trigger="click">
                        <Button type='primary' style={{height: 40, width: '100%'}}>By</Button>
                    </Popover>
                </div>


                <div style={{height: 50}}/>

                <ItemList items={this.state.items} currentUser={this.props.currentUser}/>

            </div>

        )

    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
        items: Items,
        profiles: Profile,
        users: Meteor.users,
    };
})(MySearch);
