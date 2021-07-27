import React from 'react';

const DisplayComments = (props) => {
    return (
        <React.Fragment>
            <div>
                <table className="ui celled padded table">
                    <thead>
                    <tr>
                        <th>Comments</th>
                    </tr>
                    </thead>
                        {props.allComments.map((comment) => {
                            return (
                                <tr>
                                    <td>{comment.userComment}</td>
                                    {/* <td>
                                        <i class="thumbs up icon" onClick={() => props.likeSong(comment)}></i>
                                        <i className="thumbs down icon" onClick={() => props.deleteSong(song)}></i>
                                    </td> */}
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </React.Fragment>
    );
}
 
export default DisplayComments;