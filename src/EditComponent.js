import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;

        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({type: 'UPDATE', id:this.props.post.id, data:data})

    }

    render(){
        return (
            <div key={this.props.post.id} className="post">
                <form onSubmit={this.handleSubmit} className="form">
                    <input required type="text" ref={(input) => this.getTitle = input}
                    defaultValue={this.props.post.title} placeholder="Enter Post File"
                    ></input><br />< br />
                    <input required rows="5" cols="28" ref={(input) => this.getMessage = input}
                    defaultValue={this.props.post.message} placeholder="Enter Post"
                    ></input><br /><br />
                    <button>Update</button>
                </form>
            </div>        
        )
    }
}

export default connect()(EditComponent);