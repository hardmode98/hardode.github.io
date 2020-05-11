
function alertMessage(text) {

  console.log('hello');

}


window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}

