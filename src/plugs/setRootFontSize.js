function setRootFontsize(){
  var deviceWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px';
}

export default setRootFontsize