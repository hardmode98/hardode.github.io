
function alertMessage(text) {

   
const video = document.querySelector('video');
const constraints = {
    video: true
  };
navigator.mediaDevices.getUserMedia(constraints).
  then((stream) => {video.srcObject = stream});

  QCodeDecoder()
  .decodeFromCamera(video, function(er,res){
    console.log(res);
    document.getElementById("result").innerHTML = res;
  });

 
}


window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}

