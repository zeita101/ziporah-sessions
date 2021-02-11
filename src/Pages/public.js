import React, { Component } from 'react'
import { Link, Route, Switch, useRouteMatch, withRouter } from 'react-router-dom';
import LessDetails from './lessDetails';
import MoreDetails from './moreDetails';

class Public extends Component {

    render() {
        const counter = 5

        return (
            <div>
                <div style={{ width: '300px', height: '300px', border: 'solid black 5px' }}>
                    <p>Public page  is mounted with nested routing</p>
                    <Link to={'/public/moredetails'}>
                        more</Link ><br />
                    <Link to='/public/lessdetails'>
                        less</Link>

                    <div style={{ marginTop: '10px', border: 'solid black 1px' }}>
                        <Switch>
                            <Route exact path={`/public/moredetails`}>
                                <MoreDetails id={5} />
                            </Route>
                            <Route exact path="/public/lessdetails">
                                <LessDetails />
                            </Route>


                        </Switch>

                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Public)