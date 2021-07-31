import axios from 'axios';
import React, { Component } from 'react';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: '',
            userComment: '',
            like: 0,
            dislike: 0,
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.postComment(this.state);    
    }

    postComment = async comment => {
        try {
            await axios.post(`http://127.0.0.1:8000/youtube_app/`, comment)
        }
        catch (err){console.log(err)}
        this.props.commentTable()
    }
    render() { 
        return (
            <React.Fragment>
                <div className="ui main">
                    <h1>Leave a Comment</h1>
                        <form className="ui form">
                            <div className="field">   
                                <input name='userComment' type="text" onChange={this.handleChange} value={this.state.userComment}></input>
                            </div>
                                <button className="ui button blue" type='submit' onSubmit={this.handleSubmit} onClick={this.postComment}>Add Comment</button>
                        </form>
                            </div>
            </React.Fragment>
        );
    }
}
export default AddComment;