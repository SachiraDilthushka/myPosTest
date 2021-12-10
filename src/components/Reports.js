import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
export default class Report extends Component {
	constructor(props) {
		super(props);
		this.onChangeDateFrom = this.onChangeDateFrom.bind(this);
		this.onChangeDateTo = this.onChangeDateTo.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			
			Fromdate: new Date(),
			Todate: new Date(),
			users: []
		}
	}
	onChangeDateFrom(date) {
		this.setState({
			Fromdate: date
		});
	}
	onChangeDateTo(date) {
		this.setState({
			Todate: date
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const user = {
			username: this.state.username,

		}
		console.log(user);

		axios.post('http://localhost:5000/users/add', user)
			.then(res => console.log(res.data));

		this.setState({
			username: ''
		}
		)
	}
	render() {
		return (
			
			<div>
				<div className ="container">
					<div className = "card">
				
				<h3>Reports</h3>
				<form onSubmit={this.onSubmit}>
					<div className="row">
						<div className="col">
						
						<div className="form-group">
									<label>Date From: </label>
									<div>
										<DatePicker

											selected={this.state.Fromdate}
											onChange={this.onChangeDateFrom}
										/>
									</div>
								</div>
						</div>
						<div className="col">

						<div className="form-group">
									<label>Date To: </label>
									<div>
										<DatePicker

											selected={this.state.Todate}
											onChange={this.onChangeDateTo}
										/>
									</div>
								</div>
						</div>
					</div>
					<div className="row">

					</div>
				</form>
					
				</div>
				</div>
			</div>
		)
	}
}
