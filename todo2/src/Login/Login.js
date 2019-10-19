import React from 'react';

class Login extends React.Component{
	constructor(props){
		super();
		this.state= {username: '', password:''};
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleEmailChange(e) {
	   this.setState({username: e.target.value});
	}
	handlePasswordChange(e) {
	   this.setState({password: e.target.value});
	}

	async handleSubmit(event) {

		event.preventDefault();
		console.log("submited");

		var request = {
		    method: 'POST',
		    headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
		    body: `username=${this.state.username}&password=${this.state.password}`
		};

		var response = await fetch(`http://localhost:8080/auth`, request)

		var token = await response.json()

		console.log(token.token)

		localStorage.setItem('token', token.token);
		// .then( (response) => {
		// 	return response.json()
		// }).then( (data) => {
		// 	console.log(data)
		// })
    }

	 render() {
        return (
            <div className="">
                <div className="w-4/12 mx-auto justify-center bg-gray-200 ">
					<form  onSubmit={this.handleSubmit} className="w-full" id="form1">
						<div className="flex px-4 py-2">
							<input type="text" value={this.state.username} onChange={this.handleEmailChange}/>
							<input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
							<button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded float-right " type="submit" form="form1" value="Submit">Submit</button>
						</div>
					</form>
				</div>

            </div>

        );
	}
}
export default Login; 



