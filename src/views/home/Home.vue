<!-- 首页 -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper :options="swiperOption" ref="mySwiper" v-if="banner.length>0">
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { homeData } from "network/home/home-api";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "home",
  components: {
    NavBar,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 3000, //自动循环时间
        }, //可选选项，自动滑动
        speed: 2000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        loop: true, //循环切换
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        //  // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        //  autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        //  scrollbar: '.swiper-scrollbar',
        mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
        //  observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper

        pagination: {
          el: ".swiper-pagination",
          clickable: true, //点击分页器的指示点分页器会控制Swiper切换
        },
      },
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getData();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},

  updated() {
    // if(this.banner.length > 1) {
    //   this.swiper.init();
    // }
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper;
    // }
  },
  methods: {
    getData() {
      let that = this;
      homeData().then((res) => {
        if (res.returnCode == "SUCCESS") {
          that.banner = res.data?.banner?.list;
          that.dKeyword = res.data?.dKeyword?.list;
          that.keywords = res.data?.keywords?.list;
          that.recommend = res.data?.recommend?.list;
        }
      });
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.home-nav {
  background-color: var(--home-color);
  color: #fff;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  width: 100%;
  --swiper-pagination-color: #1afa29;
}
.swiper-slide {
  position: relative;
  width: 100%;
}
.swiper-container img {
  width: 100%;
  display: block;
}
.swiper-container .swiper-pagination {
  width: 100%;
  position: absolute;
  text-align: center;
  z-index: 210;
  bottom: 10px;
  left: 0;
}
.swiper-container .swiper-pagination-bullet {
  margin: 0 5px;
}
</style>