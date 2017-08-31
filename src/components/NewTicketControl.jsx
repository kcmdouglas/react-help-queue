import React from "react";

class NewTicketControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {formVisibleOnPage: false};
	}

	handleDisplayingNewTicketForm(event){
		console.log("New ticket button clicked~");
		this.setState({formVisibleOnPage: true});
		
	}

	render(){
		return (
		 	<button onClick={this.handleDisplayingNewTicketForm}>Pls Halp</button>
		);
	}

}

export default NewTicketControl;