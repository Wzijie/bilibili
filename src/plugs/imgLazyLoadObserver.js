// 图片懒加载
// IntersectionObserver监测元素是否可见
function imgLazyLoadObserver() {
  let io = null;
  return () => {
    if (!window.IntersectionObserver) return false;
    if (!io) {
      // console.log('看看执行了几次new IntersectionObserver')
      io = new IntersectionObserver((iose) => {
        iose.forEach((ioseItem) => {
          if (ioseItem.intersectionRatio > 0) {
            ioseItem.target.src = ioseItem.target.getAttribute('data-img');
            io.unobserve(ioseItem.target);
          }
        });
      });
    }
    return io;
  }
}

let imgObserver = imgLazyLoadObserver();

export default imgObserver;
