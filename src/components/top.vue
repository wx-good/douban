<template>
  <div>
    <header>
      <h1>同时入选IMDB250和豆瓣电影250的电影</h1>
      <p class="inof">
        <span>东方快车</span>
      </p>
      <p class="center-full" v-show="!yc">
        <span>
          同时入选IMDB250和豆瓣电影250的电影
          <br />2018年11月29日更新
        </span>
        <br />
        <span class="zhankai" @click="yc1()">...展开</span>
      </p>
      <p class="center" v-show="yc">
        <span>
          同时入选IMDB250和豆瓣电影250的电影
          <br />2018年11月29日更新
          <br />感谢影迷朋友对这个豆列的支持，已经有超过200000人关注了
          ，根据IMDB250和豆瓣电影250最新排名进行更新，
          并增加了其他只进入IMDBtop100或豆瓣电影top100的影片，
          希望大家继续支持。
          <br />超过3 部电影入选的导演统计：
          <br />克里斯托弗·诺兰 （6部）：同时入选IMDB250和豆瓣电影250的电影 盗梦空间
          蝙蝠侠：黑暗骑士 蝙蝠侠：黑暗骑士崛起 星际穿越 致命魔术 记忆碎片
          <br />宫崎骏 （6部）：同时入选IMDB250和豆瓣电影250的电影
          千与千寻 龙猫 幽灵公主 天空之城 哈尔的移动城堡 风之谷
          <br />斯坦利·库布里克（6部）：同时入选IMDB250和豆瓣电影250的电影 发条橙
          进入IMDBtop100或豆瓣电影top100的电影 2001太空漫游 奇爱博士 闪灵 光荣之路 全金属外壳
          <br />昆汀·塔伦蒂诺 （4部）：同时入选IMDB250和豆瓣电影250的电影：低俗小说 无耻混蛋 被解救的姜戈
          进入IMDBtop100或豆瓣电影top100的电影 落水狗
          <br />
        </span>
      </p>
    </header>
    <div class="doulist-btn-group">
      <div class="doulist_l">
        <span>221572</span>
      </div>
      <div class="doulist_r">...</div>
    </div>
    <meta name="referrer" content="no-referrer" />
    <div class="uls">
      <ul>
        <li v-for="(v,i) in tops" :key="i">
          <a :href="v.alt">
            <div class="top_l">
              <img :src="v.images.large"  width="100%" />
            </div>
            <div class="top_r">
              <h2>{{v.title}}</h2>
              <div class="xing">
                <span v-for="(value,index) in Math.floor(v.rating.average/2)" :key="index"></span>
                <i>{{v.rating.average}}</i>
              </div>
              <div>
                <span v-for="(g,s) in v.casts" :key="s">{{g.name}}</span>
              </div>
            </div>
          </a>

          <div class="botm">评语：豆瓣电影250NO.7, IMDB250NO.6</div>
        </li>
      </ul>
    </div>

    <section class="tags">
      <p>查看更多豆列</p>
      <ul>
        <li>
          <a href="#">电影</a>
          <a href="#">纪录片</a>
          <a href="#">奥斯卡</a>
          <a href="#">影人</a>
          <a href="#">电影截图</a>
        </li>
      </ul>
    </section>

    <div class="yeshu">. &nbsp; 1 &nbsp; .</div>
    <div class="btn">
      <a href="#">上一页</a>
      <a href="#">下一页</a>
    </div>
    <div class="inof">
      <div class="inof_l">
        <img
          src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png"
          alt width="100%"
        />
      </div>
      <div class="inof_r">
          豆瓣
      </div>
      <div class="downlod">
          <a href="#">去 App Store 免费下载 iOS 客户端</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      yc: false,
      tops: [],
       min: 0,
       max: 9,
    };
  },
  methods: {
    yc1() {
      this.yc = !this.yc;
    }
  },
  mounted() {
    this.$http({
      url: "http://localhost:8080/static/top250.json"
    }).then(res => {
      console.log(res.data.subjects);
      this.tops = res.data.subjects;
    });
  }
};
</script>
<style scoped>
header h1 {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 15px;
  color: #494949;
  padding-top: 50px;
  margin: 30px 38px 5px;
  font-size: 24px;
  line-height: 32px;
  word-break: break-all;
}
header .inof {
  text-align: center;
  margin-bottom: 15px;
}
header .inof span {
  text-align: center;
  width: 100px;
  color: #494949;
  font-size: 15px;
  display: inline-block;
  vertical-align: middle;
}
header .center-full {
  text-align: center;
}
.zhankai {
  color: #42bd56;
}
.center {
  padding: 0 30px;
  text-align: center;
}
.doulist-btn-group {
  margin: 20px auto 25px;
  overflow: hidden;
}
.doulist-btn-group .doulist_l {
  border: solid 1px #42bd56;
  background-color: #ffffff;
  color: #42bd56;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  background: url(https://img3.doubanio.com/f/talion/22c02fa5adbc12a91da713d4be30c9462871c13d/pics/card/ic_liked@2x.png)
    no-repeat 18px 7px;
  background-size: 18px 18px;
  width: 111px;
  height: 32px;
  border-radius: 5px;
  position: relative;
  float: left;
  margin-left: 109px;
  margin-right: 5px;
}
.doulist-btn-group .doulist_l span {
  position: absolute;
  top: 4px;
  right: 15px;
}
.doulist-btn-group .doulist_r {
  border: solid 1px #42bd56;
  background-color: #ffffff;
  color: #42bd56;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  position: relative;
  float: left;
  text-align: center;
  overflow: hidden;
}
.uls ul {
  padding-left: 20px;
  padding-right: 25px;
}

.uls ul li {
  overflow: hidden;
  padding: 20px 18px 20px 0;
  border-bottom: 0.1px solid rgb(246, 246, 246);
}
.uls ul li:nth-child(1) {
  border-top: 0.1px solid rgb(246, 246, 246);
}

.uls ul li h2 {
  color: #494949;
  font-size: 17px;
  line-height: 1.3;
  font-weight: 500;
  margin: 0;
}

.uls ul li .top_l {
  width: 75px;
  float: left;
  margin-right: 10px;
}
.uls ul li .top_r {
  float: left;
  font-size: 12px;
  line-height: 1.5;
  color: #aaaaaa;
  margin: 0;
  width: 66%;
  margin-top: 5px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.uls ul li .top_r .xing span {
  width: 13px;
  height: 13px;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvVJREFUSA21lj1oFFEQx2d2jwTydXsRQUEw2BhiIcGgxkSwUbw7gkhCxCpJIXaCjWUKLQWxshbLgPEzZ2NhREGChSjY2BgMoiC3l3gazceO/3fHbi7Z9+7uncnC8ubNm5nf7Oy8t8vU4CXPUg+J+CCt5Y/wEP22DePYOih7edx5CNBzELvJ9UYaidEQmBIyHsGYJyLZQmAL25KpTJFLbZ0LxLSn7CtCf+QAny98toll/8QtqbMbUIVipiZn3AaqbO3BDschjowJMrCBW4FlqqMTrTUUB3AXPfVOxfVmjRWYWt2LqGyzNpxr12R2YNaUOcxCeFgeUXs4rTXWDS7tXaY+Y0CmFmpKjhrXtyywPOk4So7TjzbzKHCSaBEPd5IkHMWDT1lPnNjiv3kqsoJX8QO+i1hYwl0e1dwJNmSRVyy5VB7Gqc0RdngmMo9Sy+0dxujCzzqcKVyngC4hgTWdxfbrgls0509Emx4lT6PkUwC1bT8MEUXW0TtXOO3fUfEjsJpIzusldmYg7lXzbbyKiH4B0FwYcxNYKWXG2w94Din1hEb/OX6lIMhytvCuMk5sH8Ngnv4GAyjNbKVhQ7LIe5LlY1uhKlYMrJT4xBWo6J/B86t33uAlL2jVH+TM8oIugBasDHmUVtDtL3VOdemEPuEf5afJ1gguOTANmhxr6plPVrOpDiZuHIz/Mcm17TbBjWB54HWhs/eZHOvSc8KYuBFMTVS1VHWBA8cYwwzmGmVG8wD+vGoCbE7eDCZDc6ijj+QmFfOHOZ0/jcNhAnve1ycgvdiQ2iNYC5bp9l3E0h0LVjoQguM4+q5huy2rdRwOd0lW1Ck3HbNndqk12R/TQ6EFU7OLpsBva3ipD7wEk/TF7+Ps4ttQHY6c/fUNTz9MwfoIfgK+h/rSyK72PevBDg9EzkJviFZ78fm8wZdpNdJrBCR1n4prPSj9vYrlExVyJOrBgXxA5gt4yqs0lx/gTPFj5FFD4NGlPGf8MZx6acRQfq91Lv8AZLTfj0RLVbcAAAAASUVORK5CYII=);
  background-size: 13px 13px;
}
.uls ul li .botm {
  width: 75%;
  float: left;
  margin: 10px 0 0 6px;
  padding: 0 8px;
  font-size: 12px;
  line-height: 1.5;
  border-left: 2px solid #e5e5e5;
  color: #494949;
}
.tags {
  margin: 30px 0;
}
.tags p {
  color: #818181;
  font-size: 14px;
  padding-left: 25px;
  margin: 10px 0;
}
.tags ul li {
  padding-left: 25px;
  width: 80%;
}

.tags ul li a {
  font-size: 15px;
  line-height: 28px;
  padding: 0 12px;
  border-radius: 28px;
  text-align: center;
  color: #494949;
  background: #f5f5f5;
  display: inline-block;
  text-decoration: none;
  margin-bottom: 10px;
}
.yeshu {
  text-align: center;
}
.btn a {
  font-size: 18px;
  width: 45%;
  height: 32px;
  line-height: 1.8;
  padding: 1px;
  display: inline-block;
  background-color: #f2f2f2;
  color: #494949;
  margin-top: 20px;
  margin-left: 2%;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
}
.inof{
    overflow: hidden;
    text-align: center;
    margin: 50px 0;


}
.inof .inof_l{
    width: 15%;
    display: inline-block;
    padding-right: 15px;
    vertical-align: middle
}


.inof .inof_r{
    font-size: 25px;
    display: inline-block;
    top: 10px;
    margin-bottom: 30px

}
.downlod a{
    color: #42bd56;
    text-decoration: none;
}
</style>
