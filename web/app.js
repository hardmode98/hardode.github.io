
function alertMessage(text) {

   
const video = document.querySelector('video');
const constraints = {
    video: true
  };
navigator.mediaDevices.getUserMedia(constraints).
  then((stream) => {video.srcObject = stream});

  const qrScanner = new QrScanner(videoElem, result => console.log('decoded qr code:', result));

}


window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}

