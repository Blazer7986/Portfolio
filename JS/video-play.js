window.onload = function() {
    // Add a delay before playing the video
    const video = this.document.getElementById("myVideo");
    this.setTimeout(() => {
        video.play(); 
    }, 3000); // Wait for 3 seconds
}
