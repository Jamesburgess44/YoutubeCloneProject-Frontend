import React from 'react'
import AddComment from '../AddComment/addComment'

export default function DisplayComments() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center p-5">
                        <h1 className="lead">Leave A Comment</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center p-5 commentList">
                        <AddComment />
                    </div>
                </div>
            </div>
        </>
    )
}
