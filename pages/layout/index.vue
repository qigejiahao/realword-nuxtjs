<!--  -->
<template>
  <div>
      <!-- /顶部导航栏-->
      <nav class="navbar navbar-light">
      <div class="container">
        <!-- <a class="navbar-brand" href="index.html">conduit</a> -->
        <nuxt-link class="avbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <!-- <a class="nav-link active" href="">Home</a> -->
            <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link><!--exact精确匹配路由从而控制高亮样式-->
          </li>

          <template v-if="user">
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/editor">
                    <i class="ion-compose"></i>&nbsp;New Post
                </nuxt-link>
            </li>
            <li class="nav-item">
                <!-- <a class="nav-link" href="">
                <i class="ion-gear-a"></i>&nbsp;Settings
                </a> -->
                <nuxt-link class="nav-link" to="/settings">
                    <i class="ion-gear-a"></i>&nbsp;Settings
                </nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/profile/123">
                <img class="user-pic" src=""> 
                {{user.username}}
                </nuxt-link>
            </li>
          </template>

        <template v-else>
          <li class="nav-item">
            <!-- <a class="nav-link" href="">Sign in</a> -->
            <nuxt-link class="nav-link" to="/login">
                Sign in
            </nuxt-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="">Sign up</a> -->
            <nuxt-link class="nav-link" to="/register">
                Sign up
            </nuxt-link>
          </li>
        </template>
         
        </ul>
      </div>
    </nav>
    <!-- /顶部导航栏-->

    <!--子路由-->
    <nuxt-child />
    <!--子路由-->

    <!--底部-->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
    <!--底部-->
  </div>

</template>

<script type='text/ecmascript-6'>
import {mapState}from 'vuex'
export default {
  name:'LayoutIndex',
  computed:{
      ...mapState(['user'])
  }
}
</script>

<style>

</style>
