import React from 'react'

const VideoModal = () => {
    return (

        // {/* <!-- Video Modal Start --> */}
        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* <!-- 16:9 aspect ratio --> */}
                        <div className="ratio ratio-16x9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/07d2dXHYb94" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // {/* <!-- Video Modal End --> */}  
    )
}

export default VideoModal