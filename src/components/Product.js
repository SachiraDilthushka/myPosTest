import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
export default class Product extends Component {

	constructor(props) {
		super(props);
		this.onChangeProductID = this.onChangeProductID.bind(this);
		this.onChangeProductName = this.onChangeProductName.bind(this);
		this.onChangePrice = this.onChangePrice.bind(this);
		this.onChangeQty = this.onChangeQty.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			ProductID: '',
			ProductName: '',
			Price: 0,
			Qty: 0,
			Products: []
		}
	}

	componentDidMount() {
		this.setState(
			{
				Products: ['test user'],

			}
		)
	}

	onChangeProductID(e) {
		this.setState({
			ProductID: e.target.value
		});
	}
	onChangeProductName(e) {
		this.setState({
			ProductName: e.target.value
		});
	}
	onChangePrice(e) {
		this.setState({
			Price: e.target.value
		});
	}
	onChangeQty(e) {
		this.setState({
			Qty: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const exercise = {
			ProductID: this.state.ProductID,
			ProductName: this.state.ProductName,
			Price: this.state.Price,
			Qty: this.state.Qty
		}
		console.log(exercise);
		window.location = '/';
	}
	render() {
		return (
			<div>
				<h3>Product</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Product ID: </label>
						<input type="text"
							required
							className="form-control"

							onChange={this.onChangeProductID}
						/>
					</div>
					<div className="form-group">
						<label>Product Name: </label>
						<input type="text"
							required
							className="form-control"
							value={this.state.description}
							onChange={this.onChangeProductName}
						/>
					</div>

					<div className="form-group">
						<label>Price : </label>
						<input type="text"
							required
							className="form-control"

							onChange={this.onChangePrice}
						/>
					</div>
					<div className="form-group">
						<label>Qty: </label>
						<input type="text"
							required
							className="form-control"
							value={this.state.duration}
							onChange={this.onChangeQty}
						/>
					</div>

					<div className="row">
						<div className="col">
							<div className="form-group">

								<input type="submit"
									value="Save"
									className="btn btn-primary"

								/>
							</div>
						</div>
						<div className="col">
							<div className="form-group">

								<input type="submit"
									value="Update"
									className="btn btn-primary"

								/>
							</div>
						</div>
						<div className="col">
							<div className="form-group">

								<input type="submit"
									value="Clear"
									className="btn btn-primary"

								/>
							</div>
						</div>

					</div>



				</form>
			</div>
		)
	}
}
