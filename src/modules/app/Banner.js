import React from 'react';
import { ReadyShow, LazyLoadImg } from '../../components';

// 属性名根据type区分
function switchBannerProperty(banner, type) {
  switch (type) {
    case 'home':
      let { id, pic } = banner;
      return { key: id, url: pic };
    case 'live':
      let { remark, img } = banner;
      return { key: remark, url: img };
    default: return {};
  }
}

const BannerItem = ({ url }) => (
  <li>
    <a>
      <LazyLoadImg url={url} />
    </a>
  </li>
);

class Banner extends React.Component {

  state = {
    slideIndex: 1,
    slideActiveIndex: 0,
    isTransition: false,
    touchStartX: 0,
    diffX: 0,
    translateX: -3.75,
    timerId: null
  }

  componentDidMount() {
    this.setState(() => {
      return { timerId: setInterval(this.slideNext, 3000) };
    });
  }

  componentWillUnmount() {
    const { timerId } = this.state;
    clearInterval(timerId);
    clearTimeout(this.aroundSwitchTimerId);
  }

  // 记录touchstart坐标；停止定时器
  onSlideTouchStart = (event) => {
    event.persist();
    const { timerId } = this.state;
    this.setState(() => {
      return { touchStartX: event.touches[0].pageX };
    });
    clearInterval(timerId);
  }

  // 记录拖动的距离；设置translate位移
  onSlideTouchMove = (event) => {
    event.persist();
    // event.preventDefault();
    const { touchStartX, translateX } = this.state;
    const touchMoveX = event.touches[0].pageX;
    const diffX = touchMoveX - touchStartX;
    this.slide.style.transform = `translateX(${translateX + diffX / 100}rem)`;
    this.setState((prevState) => {
      return { diffX: diffX };
    });
  }

  // 判断拖动方向后设置焦点图index
  onTouchEnd = (event) => {
    event.persist();
    const { touchStartX, diffX, slideIndex, slideActiveIndex } = this.state;
    const { dataList } = this.props;
    const slideTotal = dataList.length + 2;
    let nextSlideIndex = null;
    let nextSlideActiveIndex = null;
    if (touchStartX === event.changedTouches[0].pageX) return;
    if (diffX > 0) {
      if (slideIndex > 0) {
        nextSlideIndex = slideIndex - 1;
      }
      if (slideActiveIndex > 0) {
        nextSlideActiveIndex = slideActiveIndex - 1;
      }
    } else if (diffX < 0) {
      if (slideIndex < slideTotal - 1) {
        nextSlideIndex = slideIndex + 1;
      }
      if (slideActiveIndex < dataList.length - 1) {
        nextSlideActiveIndex = slideActiveIndex + 1;
      }
    }
    this.setState(() => {
      return {
        slideIndex: nextSlideIndex,
        slideActiveIndex: nextSlideActiveIndex
      };
    });
    this.slideSwitch();
  }

  // 判断是否移动到了前后两张焦点图，做特殊处理
  slideAroundSwitch = () => {
    this.setState(() => {
      return { isTransition: false };
    });
    const { slideIndex, timerId } = this.state;
    const { dataList } = this.props;
    const slideTotal = dataList.length + 2;
    const lastSlideIndex = slideTotal - 2;

    if (slideIndex === slideTotal - 1) {
      this.setState(() => {
        return {
          slideIndex: 1,
          translateX: -3.75,
          slideActiveIndex: 0
        };
      });
    }

    if (slideIndex === 0) {
      this.setState(() => {
        return {
          slideIndex: lastSlideIndex,
          translateX: lastSlideIndex * -3.75,
          slideActiveIndex: dataList.length - 1
        };
      });
    }

    clearInterval(timerId);
    this.setState(() => {
      return { timerId: setInterval(this.slideNext, 3000) };
    });

  }

  // 焦点图切换设置translateX
  slideSwitch = () => {
    this.setState((prevState) => {
      return {
        isTransition: true,
        translateX: prevState.slideIndex * -3.75
      };
    });
    this.aroundSwitchTimerId = setTimeout(this.slideAroundSwitch, 200);
  }

  // 定时器执行下一张焦点图
  slideNext = () => {
    const { slideIndex, slideActiveIndex } = this.state;
    const { dataList } = this.props;
    const slideTotal = dataList.length + 2;
    if (slideIndex < slideTotal - 1) {
      this.setState(() => {
        return { slideIndex: slideIndex + 1 };
      });
    }
    if (slideActiveIndex < dataList.length - 1) {
      this.setState(() => {
        return { slideActiveIndex: slideActiveIndex + 1 };
      });
    }
    this.slideSwitch();
  }

  render() {

    const { translateX, slideActiveIndex, isTransition } = this.state;
    const { dataList, loading, error } = this.props;
    const slideTotal = dataList.length + 2;

    const { url: firstUrl } = switchBannerProperty(dataList[0], dataList.type);
    const { url: lastUrl } = switchBannerProperty(dataList[dataList.length - 1], dataList.type);

    return (
      <div className='banner'>
        <ReadyShow loading={loading} error={error} >
          <ul
            className='slide'
            style={{ width: `${slideTotal}00%`, transform: `translateX(${translateX}rem)`, transition: isTransition && 'all 0.2s ease' }}
            ref={(slide) => { this.slide = slide; }}
            onTouchStart={this.onSlideTouchStart}
            onTouchMove={this.onSlideTouchMove}
            onTouchEnd={this.onTouchEnd}
          >
            <BannerItem url={lastUrl} />;
            {
              dataList.map((banner) => {
                let { key, url } = switchBannerProperty(banner, dataList.type);
                return <BannerItem key={key} url={url} />;
              })
            }
            <BannerItem url={firstUrl} />;
          </ul>
        </ReadyShow>
        <ul className="slide-active">
          {
            dataList.map((item, index) => {
              return <li key={index} className={slideActiveIndex === index && 'active'} ></li>
            })
          }
        </ul>
      </div>
    );
  }
}

export { Banner, BannerItem };
