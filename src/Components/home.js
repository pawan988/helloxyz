import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import MinimizeIcon from '@material-ui/icons/Minimize';


const Home = () => {

    return (
        <>
            <div className="main_div">
                <Navbar />
                <div className="wraper">
                    {/* start Twitter and star blog */}
                    <div className="twitter-star-blog">
                        <div className="twitter-blog">
                            <TwitterIcon />
                            <p>Follow @Reactnative</p>
                        </div>
                        <div className="star-blog">
                            <StarOutlineIcon />
                            <p>star</p>
                        </div>
                    </div>
                    {/* End Twitter and star blog */}


                    {/* Start Black Blog Div  */}
                    <div className="center-div">
                        <div className="center-left">
                            <h1 className="react-para">React Native</h1>
                            <br />
                            <h1>Learn once, write anyWhere.</h1>
                            <br />
                            <button className="button1">Get started</button>
                            <button className="button2">Learn basic  </button>

                        </div>
                        <div className="center-right">
                            <img src="logo512.png" alt="react-logo" />
                            <div className="underline">
                                <MinimizeIcon />
                            </div>
                        </div>
                    </div>
                    {/* End  Black Blog Div  */}
                    {/* Second Blog Start */}
                    <div className="second_wraper">
                        <div className="second_left">
                            <img className="mobo_pic" alt="mobile-img" src="https://d33wubrfki0l68.cloudfront.net/d74da08f08b4a17c368b58d36ee23c368b4a6819/fff62/img/homepage/phones.png" />

                        </div>
                        <div className="second_right">
                            <h2>Create native apps for Android <br /> and iOS using React</h2>
                            <p className="second_blog_para1">React Native combines the best parts of native development with React,
                                a best-in-class JavaScript library for building user interfaces.</p>
                            <p className="second_blog_para2">Use a little—or a lot.You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.</p>
                        </div>
                    </div>
                    {/* Second Blog End */}

                </div>
                {/* Third Blog Start  */}
                <div className="third-wrapper">
                    <div className="third-left">
                        <div className="text-blog">
                            <h2>Written in JavaScript—rendered with native code</h2>
                            <p className="third-para1">
                                React primitives render to native platform UI,<br />
                                meaning your app uses the same native platform<br /> APIs other apps do.
                            </p>
                            <p className="third-para2">
                                Many platforms, one React. Create platform-specific<br /> versions of components so a single codebase can<br /> share code across platforms.
                                With React Native, one <br /> team can maintain two platforms and share a<br /> common technology—React.
                            </p>
                        </div>

                    </div>
                    <div className="third-right">
                        <h3>Code Bolck</h3>
                    </div>
                </div>
                {/* Third Blog End  */}

                {/* Fourth Blog Start  */}
                <div className="fourth-wraper">
                    <div className="fourth-left">

                    </div>
                    <div className="fourth-right">

                    </div>
                </div>
                {/* Fourth Blog Start  */}
            </div>
        </>
    )
}
export default Home;