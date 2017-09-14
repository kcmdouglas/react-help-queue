import React from "react";
import NewTicketForm from "./NewTicketForm";

class NewTicketControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {formVisibleOnPage: false};
		this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
	}

	handleDisplayingNewTicketForm(event){
		console.log("New ticket button clicked~");
		this.setState({formVisibleOnPage: true});

	}

	render(){
		let formAreaContent = null;
		this.state.formVisibleOnPage? formAreaContent = <NewTicketForm/> : formAreaContent = <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Pls Halp</button>
		
		return (
			<div>
				{formAreaContent}
			</div>
		);
	}

}

export default NewTicketControl;