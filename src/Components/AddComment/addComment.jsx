import React from 'react'
import './addComment.css';


// This comment section was originally from a Bootsnipp.com user named: Besnikhetemi
// Check out his profile here: https://bootsnipp.com/Besnikhetemi
// I'm adapting it to fit my current comment section that I want to show up on this web app.
export default function AddComment() {
    return (
        <section class="comments">
            <article class="comment">
                <a class="comment-img" href="#non">
                    <img src="https://pbs.twimg.com/profile_images/444197466133385216/UA08zh-B.jpeg" alt="" width="50" height="50" />
                </a>
                <div class="comment-body">
                    <div class="text">
                    <p>Hello, this is an example from me</p>
                    </div>
                    <p class="attribution">by <a href="#non">Besnik Hetemi</a> at 14:23pm, 4 Dec 2015</p>
                </div>
            </article>
            <article class="comment">
                <a class="comment-img" href="#non">
                    <img src="https://pbs.twimg.com/profile_images/444197466133385216/UA08zh-B.jpeg" alt="" width="50" height="50" />
                </a>
                <div class="comment-body">
                    <div class="text">
                        <p>if you are interested for  more about me visited my profile on social page</p>
                        <p>To visit me you can click my name  <a target="_blank" href="http://www.facebook.com/besnik.hetemii">Besnik Hetemi</a> and send me frends request or send me a message in inbox</p>
                    </div>
                    <p class="attribution">by <a href="#non">Besnik Hetemi</a> at 14:23pm, 4 Dec 2015</p>
                </div>
            </article>
        </section>
    );
}
