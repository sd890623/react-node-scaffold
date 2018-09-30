import React, { Component } from 'react';
import { Link } from 'react-router';
import { ButtonGroup, Button } from 'react-bootstrap';
import superagent from 'superagent';

export default class Header extends Component {

	constructor(props){
		super(props);
		this.state = { heading: '' };
	}

	componentWillMount(){
        superagent
            .get('/api/hello')
            .end((err, res) => {
                this.setState({
                    heading: res.body.msg
                });
            });
    }

	render(){
		return (
			<div className="header container">
				<div className="row">
					<h1 className="col-sm-6 col-sm-offset-3 well well-lg text-center">
						{this.state.heading}
					</h1>
				</div>
				<ButtonGroup vertical>
					<Link to="/total-sales">
						<button className="btn btn-default btn-sm">Find more about total sales</button>
					</Link>
					<Link to="/find-a-store">
						<button className="btn btn-default btn-sm">Find more about a specific store</button>
					</Link>
					<Link to="/">
						<button className="btn btn-default btn-sm">Go back home</button>
					</Link>
				</ButtonGroup>
			</div>
		)
	}
}

