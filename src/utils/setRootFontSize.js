// 设置html的font-size，用于rem适配
// css方法：calc(100vw / 3.75rem)
function setRootFontsize(){
  let deviceWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${deviceWidth / 3.75}px`;
}

export default setRootFontsize;
