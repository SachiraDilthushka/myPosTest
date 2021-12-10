import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
export default class Invoice extends Component {
	constructor(props) {
		super(props);
		this.onChangeInvoiceId = this.onChangeInvoiceId.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			users: []
		}
	}

	componentDidMount() {
		this.setState(
			{
				users: ['test user'],
				username: 'test user'
			}
		)
	}

	
	onChangeInvoiceId(e) {
		this.setState({
			duration: e.target.value
		});
	}
	onChangeDate(date) {
		this.setState({
			date: date
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		}
		console.log(exercise);
		window.location = '/';
	}
	render() {
		return (
			<div>
				<h3>Invoice</h3>
				<div className="card">
					<div class="container">
						<div class="row">
							<div class="col">

								<div className="form-group">
									<label>Date: </label>
									<div>
										<DatePicker

											selected={this.state.date}
											onChange={this.onChangeDate}
										/>
									</div>
								</div>
							</div>
							<div class="col">
								<div className="form-group">
									<label>Customer: </label>
									<input type="text"
										required

										className="form-control"
										onChange={this.onChangeUsername}
									/>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col">
								<div className="form-group">
									<label>Invoice ID: </label>
									<input type="text"
										required
										value="10"
										className="form-control"
										onChange={this.onChangeInvoiceId}
									/>
								</div>
							</div>
							<div class="col">

							</div>
							<div class="col">

							</div>
						</div>

						<div class="row">
							<div class="col">
								<div className="form-group">
									<label>ItemId: </label>
									<input type="text"
										required

										className="form-control"
										onChange={this.onChangeItemId}
									/>
								</div>
							</div>
							<div class="col">
								<div className="form-group">
									<label>Description: </label>
									<input type="text"
										required
										value = "bla bla bla..."
										className="form-control"
										onChange={this.onChangeDescription}
									/>
								</div>
							</div>
							<div class="col">
								<div className="form-group">
									<label>Qty: </label>
									<input type="text"
										required

										className="form-control"
										onChange={this.onChangeQty}
									/>
								</div>
							</div>
							<div class="col">
								<div className="form-group">
									<label>Price: </label>
									<input type="text"
										required

										className="form-control"
										onChange={this.onChangePrice}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="card-body">
						<table class="table table-striped">
							<thead>
								<tr>
									<th>Item</th>
									<th>Description</th>
									<th>Qty</th>
									<th>amount</th>
								</tr>
							</thead>
						</table>

					</div>
					<form onSubmit={this.onSubmit}>

						<div class="row">
						<div class="col">
								<div className="form-group">
									<label>Total: </label>
									
								</div>
							</div>
							<div class="col">
								<div className="form-group">
									<input type="submit"
										value="Proceed"
										className="btn btn-primary"

									/>
								</div>
								
							</div>
							<div class="col">
								<div className="form-group">
									<input type="submit"
										value="Clear"
										className="btn btn-primary"

									/>
								</div>
								
							</div>
						</div>
						{/*<div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput" required className="form-control" value={this.state.username}
                            onChange={this.onChangeUsername} >{
                                this.state.users.map(function (user) {
                                    return <option key={user} value={user}>{user} </option>
                                })
                            }
                        </select>
                    </div>*/}

						{/*<div className="form-group">

                        <input type="submit"
                            value="Create Exercise Log"
                            className="btn btn-primary"
                            
                        />
                    </div>*/}

					</form>
				</div>

			</div>
		)
	}
}
