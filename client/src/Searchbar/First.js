import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function First() {
    let [inp, setInp] = useState("");
    let [btn, setBtn] = useState("");
    const data = [
        {
            "id": "1",
            "title": "Big Buck Bunny",
            "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "Vlc Media Player",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
        {
            "id": "2",
            "title": "The first Blender Open Movie from 2006",
            "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
            "duration": "12:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "Blender Inc.",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
        {
            "id": "3",
            "title": "For Bigger Blazes",
            "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "T-Series Regional",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
        {
            "id": "4",
            "title": "For Bigger Escape",
            "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "T-Series Regional",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            "subscriber": "25254545 Subscribers",
            "isLive": false
        },
        {
            "id": "5",
            "title": "Big Buck Bunny",
            "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "Vlc Media Player",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
        {
            "id": "6",
            "title": "For Bigger Blazes",
            "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "T-Series Regional",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
            "subscriber": "25254545 Subscribers",
            "isLive": false
        },
        {
            "id": "7",
            "title": "For Bigger Escape",
            "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "T-Series Regional",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
        {
            "id": "8",
            "title": "The first Blender Open Movie from 2006",
            "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
            "duration": "12:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "Blender Inc.",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
            "subscriber": "25254545 Subscribers",
            "isLive": false
        }
    ]
    function input(e) {
        setInp(e.target.value)
    }
    function btnHandle(e) {
        e.preventDefault();
        setBtn(inp);
        setInp("")
    }
    const filteredData = data.filter(val =>
        val.title.toLowerCase().includes(btn.toLowerCase()) ||
        val.description.toLowerCase().includes(btn.toLowerCase())
    );

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-bar-chart-fill"></i></button>
                    <h3>&nbsp;<b>Youtube</b></h3>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel"><i class="bi bi-bicycle"></i>Youtube</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="list-group text-start p-3">
                                <li className="list-group-item mb-3"><i class="bi bi-house-door-fill"></i> Home</li>
                                <li className="list-group-item mb-3"><i class="bi bi-fast-forward-btn-fill"></i> Shorts</li>
                                <li className="list-group-item mb-3"><i class="bi bi-file-earmark-play"></i> Subscriptions</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-clock"></i>History</li>
                                <li className="list-group-item mb-3"><i class="bi bi-skip-end-circle-fill"></i> Your Videos</li>
                                <li className="list-group-item mb-3"><i class="bi bi-person-fill"></i> You</li>
 
                            </ul>
                        </div>
                    </div>
                    <form className="d-flex mx-auto" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={input}
                            value={inp}
                            style={{ width: "450px" }}
                        />
                        <button className="btn btn-outline-success" type="submit" onClick={btnHandle}>
                            Search
                        </button>
                    </form>
                    <div>
                        <a class="navbar-brand" href="#"><i class="bi bi-mic-fill"></i></a>
                    </div>
                    <div>
                        <button type="button" class="btn btn-light"> <a class="navbar-brand" href="#"><i class="bi bi-plus-lg"></i> Create</a></button>
                    </div>
                    <div>
                        <a class="navbar-brand" href="#"><i class="bi bi-bell-fill"></i></a>
                    </div>
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-person-circle"></i></button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">user name</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="list-group text-start p-3">
                                <li className="list-group-item mb-3"> <i class="bi bi-google"></i> Google Account</li>
                                <li className="list-group-item mb-3"><i class="bi bi-person-circle"></i>  Switch Account</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-arrow-bar-right"></i> Sign out</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-play-circle"></i> Youtube Studio</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-currency-dollar"></i> Purchase and memberships</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-person-bounding-box"></i> Your Data in Youtube</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-brightness-high"></i> Appearqnce:Device theme</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-translate"></i> Language:English</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-person-badge-fill"></i> Restricted Mode:Off</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-geo-alt"></i> Location:India</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-keyboard"></i> Keyboard shortcuts</li>
                                <li className="list-group-item mb-3"><i class="bi bi-gear"></i> Settings</li>
                                <li className="list-group-item mb-3"><i class="bi bi-question-circle"></i> Help</li>
                                <li className="list-group-item mb-3"> <i class="bi bi-exclamation-diamond"></i> Send feedback</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <section>
                <p>{btn}</p>
            </section>
            <section className="container my-4">
                <div className="row">
                    {
                        filteredData.map((val, index) => {
                            return (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card h-100">

                                        <video width="320" height="240" className="card-img-top" controls>
                                            <source src={val.videoUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>

                                        <div className="card-body">
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text text-truncate" style={{ maxHeight: "60px", overflow: "hidden" }}>
                                                {val.description}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default First
