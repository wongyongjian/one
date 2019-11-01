<template>
  <div class="home">
  <navbar class="nav-home">
    <template v-slot:center><p>首页</p></template>
    <!--v-slot 就是用template v-slot（简写#）包裹填充的内容-->
  </navbar>
  <BScroll class="warpper" ref="scroll" :probe-type="3" @scroll="conscroll">
    <ul>
    <li>ces1</li>
    <li>ces2</li>
    <li>ces3</li>
    <li>ces4</li>
    <li>ces5</li>
    <li>ces6</li>
    <li>ces7</li>
    <li>ces8</li>
    <li>ces9</li>
    <li>ces10</li>
    <li>ces11</li>
    <li>ces12</li>
    <li>ces13</li>
    <li>ces14</li>
    <li>ces15</li>
    <li>ces16</li>
    <li>ces17</li>
    <li>ces18</li>
    <li>ces19</li>
    <li>ces20</li>
    <li>ces21</li>
    <li>ces22</li>
    <li>ces23</li>
    <li>ces24</li>
    <li>ces25</li>
    <li>ces26</li>
    <li>ces27</li>
    <li>ces28</li>
    <li>ces29</li>
    <li>ces30</li>
    <li>ces31</li>
    <li>ces32</li>
    <li>ces33</li>
    <li>ces34</li>
    <li>ces35</li>
    <li>ces36</li>
    <li>ces37</li>
    <li>ces38</li>
    <li>ces39</li>
    <li>ces40</li>
    <li>ces41</li>
    <li>ces42</li>
    <li>ces43</li>
    <li>ces44</li>
    <li>ces45</li>
    <li>ces46</li>
    <li>ces47</li>
    <li>ces48</li>
    <li>ces49</li>
    <li>ces50</li>
    <li>ces51</li>
    <li>ces52</li>
    <li>ces53</li>
    <li>ces54</li>
    <li>ces55</li>
    <li>ces56</li>
    <li>ces57</li>
    <li>ces58</li>
    <li>ces59</li>
    <li>ces60</li>
    <li>ces61</li>
    <li>ces62</li>
    <li>ces63</li>
    <li>ces64</li>
    <li>ces65</li>
    <li>ces66</li>
    <li>ces67</li>
    <li>ces68</li>
    <li>ces69</li>
    <li>ces70</li>
    <li>ces71</li>
    <li>ces72</li>
    <li>ces73</li>
    <li>ces74</li>
    <li>ces75</li>
    <li>ces76</li>
    <li>ces77</li>
    <li>ces78</li>
    <li>ces79</li>
    <li>ces80</li>
    <li>ces81</li>
    <li>ces82</li>
    <li>ces83</li>
    <li>ces84</li>
    <li>ces85</li>
    <li>ces86</li>
    <li>ces87</li>
    <li>ces88</li>
    <li>ces89</li>
    <li>ces90</li>
    <li>ces91</li>
    <li>ces92</li>
    <li>ces93</li>
    <li>ces94</li>
    <li>ces95</li>
    <li>ces96</li>
    <li>ces97</li>
    <li>ces98</li>
    <li>ces99</li>
    <li>ces100</li>
  </ul>
  </BScroll>
  <Backtop @click.native="backtopclick" v-show="isshow"></Backtop>
  
  </div>
</template>

<script>
import BScroll from 'components/scroll/scroll.vue'
import navbar from 'components/navbar/navbar.vue'
import Backtop from 'components/backtop/backtop.vue'
export default {
  data(){
    return{
     isshow:false
    }
  },
  components:{
    navbar,
    BScroll,
    Backtop
  },
  methods:{
    //返回顶部
    //this.$refs.scroll拿到组件，使用组件中的方法
    backtopclick(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    //判断返回顶部是否消失
    conscroll(position){
      this.isshow = -position.y > 600
    }
  },
  //页面组件创建完发送网络请求
  create(){},
  mounted(){}

}
</script>

<style>
.home{
  position: relative;
  height: 100vh;
}
.nav-home{
  background-color: crimson;
  color: aliceblue;
}
.warpper{
  
  
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;


}

</style>