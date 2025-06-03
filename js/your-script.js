document.addEventListener("DOMContentLoaded", function () {
  const scrollWrapper = document.querySelector(".scroll");
  const imgList = document.querySelectorAll(".scroll ul li"); // 图片列表
  const dotList = document.querySelectorAll(".scroll_dot span"); // 小圆点
  const prevBtn = document.querySelector(".left.scroll_arrows_back"); // 左箭头
  const nextBtn = document.querySelector(".right.scroll_arrows_back"); // 右箭头
  const imgCount = imgList.length; // 图片总数
  let currentIndex = 0; // 当前显示的图片索引
  let isAutoPlay = true; // 自动播放开关
  let timer = null; // 定时器

  // 初始化轮播图
  function initCarousel() {
    // 设置图片列表总宽度（假设容器宽度100%，图片数量动态计算）
    const wrapperWidth = scrollWrapper.offsetWidth;
    document.querySelector(".scroll ul").style.width =
      wrapperWidth * imgCount + "px";

    // 初始化圆点状态
    dotList[currentIndex].classList.add("scroll_dot_span");

    // 启动自动播放
    startAutoPlay();
  }

  // 切换图片
  function switchImage(direction) {
    const wrapperWidth = scrollWrapper.offsetWidth;
    const ulElement = document.querySelector(".scroll ul");

    // 清除当前圆点样式
    dotList[currentIndex].classList.remove("scroll_dot_span");

    // 计算下一张图片索引
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % imgCount;
    } else {
      currentIndex = (currentIndex - 1 + imgCount) % imgCount;
    }

    // 移动图片列表
    ulElement.style.transform = `translateX(-${currentIndex * wrapperWidth}px)`;

    // 激活当前圆点
    dotList[currentIndex].classList.add("scroll_dot_span");
  }

  // 自动播放
  function startAutoPlay() {
    if (isAutoPlay && imgCount > 1) {
      timer = setInterval(() => {
        switchImage("next");
      }, 3000); // 3秒切换一次，可调整
    }
  }

  // 暂停自动播放
  function stopAutoPlay() {
    clearInterval(timer);
  }

  // 绑定事件
  prevBtn.addEventListener("click", () => {
    switchImage("prev");
    stopAutoPlay(); // 点击按钮后重新开始自动播放
    startAutoPlay();
  });

  nextBtn.addEventListener("click", () => {
    switchImage("next");
    stopAutoPlay();
    startAutoPlay();
  });

  dotList.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      switchImage(index - currentIndex > 0 ? "next" : "prev"); // 根据点击位置判断切换方向
      stopAutoPlay();
      startAutoPlay();
    });
  });

  // 鼠标进入/离开事件
  scrollWrapper.addEventListener("mouseenter", () => {
    stopAutoPlay();
  });

  scrollWrapper.addEventListener("mouseleave", () => {
    startAutoPlay();
  });

  // 初始化
  initCarousel();
});
