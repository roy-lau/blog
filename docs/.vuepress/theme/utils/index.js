 /**
  * 获取滚动条当前所在的位置
  * @return {[type]} 滚动条位置
  */
 export function getScrollTop() {
     if (typeof window === "undefined") return;
     var scrollPos;
     if (window.pageYOffset) {
         scrollPos = window.pageYOffset;
     } else if (document.compatMode && document.compatMode != "BackCompat") {
         scrollPos = document.documentElement.scrollTop;
     } else if (document.body) {
         scrollPos = document.body.scrollTop;
     }
     return scrollPos;
 }