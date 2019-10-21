<template>
  <div>
    <div class="index_top" fixed title>
      <!-- <router-link to="/" slot="left"> -->
        <h1 class="index_top_title"></h1>
        <span @click="fenlei()"></span>
        

        <ul class="nav">
          <li >
            <a href="#" style="color: rgb(42, 184, 204);">小组</a>
          </li>
          <li>
            <a href="#" style="color: rgb(228, 168, 19);">广播</a>
          </li>
          <li>
            <a href="#" style="color: rgb(159, 120, 96);">图书</a>
          </li>
          <li>
            <a href="#" style="color: rgb(35, 132, 232);">电影</a>
          </li>
        </ul>
      <!-- </router-link> -->
    </div>
    <!-- 影院热映 -->
    <div class="move_hot" style="padding-top:50px">
      <h2>
        影院热映
        <span>
          <a href="#">更多</a>
        </span>
      </h2>
      <meta name="referrer" content="no-referrer" />
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide banner1"
            v-for="(v,i) in movehot"
            :key="i"
            style="margin-right:5px!important"
          >
            <ul>
              <li >
                <a :href="v.alt">
                  <img :src="v.images.medium" style="width:108px;height:151px" />
                  <p>{{v.title}}</p>
                  <div>
                    <span>暂无评分</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
    <!-- 免费在线观影 -->
    <div class="move_hot">
      <h2>
        免费在线观影
        <span>
          <a href="#">更多</a>
        </span>
      </h2>
      <meta name="referrer" content="no-referrer" />
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide banner1"
            v-for="(v,i) in beimei"
            :key="i"
            style="margin-right:5px !important"
          >
            <ul>
              <li>
                <a :href="v.subject.alt">
                  <img :src="v.subject.images.medium" style="width:108px;height:151px" />
                  <p style="width:108px">{{v.subject.title}}</p>
                  <div>
                    <span>暂无评分</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
    <!-- 新片速递 -->

    <div class="move_hot">
      <h2>
        新片速递
        <span>
          <a href="#">更多</a>
        </span>
      </h2>
      <meta name="referrer" content="no-referrer" />
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide banner1"
            v-for="(v,i) in movenew"
            :key="i"
            style="margin-right:5px !important"
          >
            <ul>
              <li>
                <a :href="v.alt">
                  <img :src="v.images.medium" style="width:108px;height:151px" />
                  <p>{{v.title}}</p>
                  <div>
                    <span>暂无评分</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
    <!-- 发现好电影 -->
    <div class="content">
      <h2>
        发现好电影
        <span>
          <a href="#">更多</a>
        </span>
      </h2>
      <ul>
        <li style="border-color: rgb(255, 172, 45);" @click="tops">
          <a href="#" style="color: rgb(255, 172, 45);">同时入选IMDB250和豆瓣电影250的电影</a>
        </li>
        <li style="border-color: rgb(255, 172, 45);" @click="fiction">
          <a href="#" style="color: rgb(35, 132, 232);">科幻是未来的钥匙——科幻启示录【科幻题材】</a>
        </li>
      </ul>
    </div>
    <!-- 分类浏览 -->
    <div class="index_sort">
      <h2>分类浏览</h2>
      <ul>
        <li>
          <a href="#">
            经典
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            动作
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            喜剧
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            爱情
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            悬疑
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            恐怖
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            科幻
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            治愈
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            文艺
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            成长
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            动画
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            华语
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            欧美
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            韩国
            <span>></span>
          </a>
        </li>
        <li>
          <a href="#">
            日本
            <span>></span>
          </a>
        </li>
      </ul>
    </div>
    <!-- <router-link ></router-link> -->

    <!-- 首页底部 -->
    <div class="index_bottom">
      <div class="b_l">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjIyMUZGOTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjIyMUZGQTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMjIxRkY3NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyMjIxRkY4NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vlyY+wAAAYBQTFRFBa8QAKoAFdkhLsg4E8YeAMYBALEAN9JBAMoJErAcB8wTBsYSg9qIB9ITB88TWthijt+TBbAQB84TAM0ABsASBsQS////BsISALsABsoTBscTBrkRBroRBbYRBr4SdNt7b+V3SuFTBbQRBbMR5frmALIJoeOl7fvuE7sdBrwSKbwzCcgWTNRUeOh/FNAf0fbUxvXJHbUnt+i6QsVKSstTk+uYoOylcN13tvK6yu/N8/z0Y9psverAo++oAKMAwuzF+v77AK8LbNVxUsdaAbcKdNN74vbjYMtnrOawxu3JvvPB2/XdGMAjVs5fCNMW2fnbac9wBboQAtEQC7MUOsJDB80WB7oTB7gT/P/8BrYSBLYRBawQB9cUB9YUB9QUB9UUBa0QBrcRQtpLBrwRB64SBbURV+JfC9gYDdYab8919/33BrYUqvGvBc4SBrMTCK8PBrsTBrQSELwbBbEQ+/77BbgRBbgSCK8T6PnqBMsOBbwQA84NC70V2PTazvDQ////esWf9QAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAEbUlEQVR42uzb/V/aRhzA8Ts0B2yM0rI6NrcpKoJYmIA4yxR8SBWcWmmpXS3Wyaabm9s6Hzasq/zrDTjygM038Y7c+Wr7+a25+H2TiIEqQY3OooeJcM3VxdzhwamRKwzq+PfhvqvqROFsFIDnss6orVyJETN4wkG2Rc++HU5UHW8/ehV+WKtyyDXdCR9WOZUwwtxcVb6E61WOrejgGk/4l6gKJ6pcq7XhiSrnsv/Drm3ePWzBWe7udrgF8z/g5iGjxrQAd3tQgfd3BORqoNyvIuCdFXQoxN0ZRIkXQqqhsBjYjdxiYBdyfYB5wclPzHvEGDA6CcDrQebW12ng8+TsClPT4SDNEful2T7GTvxBCvhRcIIV/iEJwX6TzoPTrHAuGTSbDsIrrPBvdLDEfKr7qGC/tM/qTnnOaWC/5K4x5fac+QH4jml/SIyd+01ng7CTKfBHQrrJ8JmHojNm+IlHooElzxNL+HMwz/jUNxRlx8/guZawNEh37bglscIJOvg7ZvhbQUccooVDNxbu/QJMD0eXRuByehie23sd2C2Ng4VuOQT3hOAXo5DbqSO2GBa6dy34YzAjbLGvAYb3fS/hu2BG2GJfAwzv+wF+L+DPwIywxb4GGN5XgT8FIwYY3tcIw/u+GzDRw6SLcC8mYLjHITi7MAC2UHQIvtZbH0t49Wswehieu3pz4QFRsI/yfxKWcGwMjGTo4B4Cz42ho5/AXpHJgHW+UVX83tfckCGv4LlHKPYl2FiZ2Ci/psKT+daWsTF4bswKViorvZTbhvyyfCWZvFZ/mfcfaW6xHGoHbnZ61HNZXJE7FzeJdq1ME9nWQLswVn+qRq9OLuOACi/gTbtwv53IpDq6gjc7FmUyoq7Gia15/XZhWa63Rxdx2bi2ibVHdUFk2/CprXRnc5U8NSzJOK2uDeB+e/MUeNdOT3VH5cP/6JdOSUx/3Ti1NW/XLrxLjubaw5dIxPiYFlS3LpPdLsMyntGuEfiZYaWkrpSIbB/+yl7aD5Ty9NrSL6xqZzpgWIG6BlzR5sfwM3X7Fta9flV0C5bwnr30T6FAfkvdHhmuay8QJGJz2h4ID0V0EVzQfv0TIep2HNcekC8fMQTDQyb9TozvZvO6U7qW1zZvaJsz+Y73u3t/m00H4PnHo/f1FZZ0f1AqqZtLc9rm1wX9F1yU1vAQAA+blH/A/GenvsfEbDoEB5jduRimgX3McI4OZj/iEzq4G99jAPYemzT/V2CGrfQiNht+7DWH/5zPY9aGaeDj49vzjJmPbsK3heRFKTFwCsWRkFIoIwaOow0xcAWNioGXUV0MXESNigj33xxqBETAiw3UyP38I/8Kzc/eHvB3460P/Ub5H/LM5eeri885t9z+KHuGr+s9acM5L1e4pN01UODpBvQ3aDzg52aMt6RwkxdPOm7CSXs5nmfDbUdLHJ7bqZm33mjlc9rdyJncWnZ/0Um2kgZuprs4SDl00VhOw3fxKc+yg0w8lfJ2r1S8slyMdjJvBBgAjaD61EhSiREAAAAASUVORK5CYII="
          alt
        />
        
      </div>
      <div class="b_r">
          <p>豆瓣</p>
          我们的精神角落
        </div>

         <a href="#">去 App Store 免费下载 iOS 客户端</a>

    </div>
       

  </div>
</template>

<script>
import Swiper from "swiper";
import "../assets/index.css";
import "../../node_modules/swiper/css/swiper.min.css";

export default {
  data() {
    return {
      movehot: [],
      movenew: [],
      beimei: []
    };
  },
  methods: {
    fenlei(){
      this.$router.push({
        path:'/classify'
      })

    },
    tops(){
      this.$router.push({
        path:'/top'
      })

    },
    fiction(){
      this.$router.push({
        path:'/fiction'
      })

    }
  },
  
  mounted() {
    this.$http({
      url: "http://localhost:8080/static/reying.json"
    }).then(res => {
      // console.log(res.data.subjects);
      this.movehot = res.data.subjects;
      this.$nextTick(() => {
        var swiper = new Swiper(".swiper-container", {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
      });
    });

    this.$http({
      url: "http://localhost:8080/static/beimei.json"
    }).then(res => {
      // console.log(res.data.subjects);
      this.beimei = res.data.subjects;
      this.$nextTick(() => {
        var swiper = new Swiper(".swiper-container", {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
      });
    });

    this.$http({
      url: "http://localhost:8080/static/newmove.json"
    }).then(res => {
      this.movenew = res.data.subjects;
      this.$nextTick(() => {
        var swiper = new Swiper(".swiper-container", {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
      });
    });
  }
};
</script>


<style scoped>

</style>
