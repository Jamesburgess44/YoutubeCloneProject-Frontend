import React from 'react';

const CommentSection = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <table>
                        <thead>
                            <th>Comment Section</th>
                        </thead>
                        <tbody>
                            <td>Comments Go Here</td>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default CommentSection;