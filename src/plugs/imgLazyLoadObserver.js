// 图片懒加载
// IntersectionObserver监测元素是否可见
function imgLazyLoadObserver() {
  let io = null;
  console.log('imgLazyLoadObserver');
  return () => {
    if (!window.IntersectionObserver) return false;
    if (!io) {
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
