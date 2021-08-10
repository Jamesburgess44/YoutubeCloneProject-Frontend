import React from 'react'
import './addComment.css';


// This comment section was originally from a Bootsnipp.com user named: Besnikhetemi
// Check out his profile here: https://bootsnipp.com/Besnikhetemi
// Or on here: http://www.facebook.com/besnik.hetemii
// I'm adapting it to fit my current comment section that I want to show up on this web app.
export default function AddComment() {
    return (
        <section class="comments">
            <article class="comment">
                <a class="comment-img" href="">
                    <img src="" alt="" width="50" height="50" />
                </a>
                <div class="comment-body">
                    <div class="text">
                    <p>Hello, this is an example from me</p>
                    </div>
                    <p class="attribution">by <a href="">User Two</a> at 14:23pm, 4 Dec 2015</p>
                </div>
            </article>
            <article class="comment">
                <a class="comment-img" href="">
                    <img src="" alt="" width="50" height="50" />
                </a>
                <div class="comment-body">
                    <div class="text">
                        <p>Here is a comment</p>
                    </div>
                    <p class="attribution">by <a href="">User One</a> at 14:23pm, 4 Dec 2015</p>
                </div>
            </article>
        </section>
    );
}
