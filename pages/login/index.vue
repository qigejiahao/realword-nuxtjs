<!--  -->
<template>
<div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{isLogin  ? 'Sign  in':'Sign up'}}</h1>
        <p class="text-xs-center">
          <!-- <a href="">Have an account?</a> -->
          <nuxt-link v-if="isLogin" to="register">Need an account?</nuxt-link>
          <nuxt-link v-else to="/login">Have an account?</nuxt-link>
        </p>

        <ul class="error-messages">
            <template v-for="(messages, field ) in errors"> <!--外层遍历errors对象，内层li遍历messages属性值-->
                <li v-for="(message,index) in messages"
                :key="index">{{field}} {{messages}}</li>
            </template>
          
        </ul>

        <form @submit.prevent="onSubmit"> 
          <fieldset v-if="!isLogin" class="form-group">
            <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" required><!--required 原生表单验证，必填项-->
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email" required>
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" required minlength="8">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{isLogin  ? 'Sign  in':'Sign up'}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script type='text/ecmascript-6'>
import {login,register}  from "@/api/user"

// 仅在客户端加载js-cookie包
//process.client nuxt中提供的用来获取 解析器是浏览器还是服务器类型的对象参数
const Cookie = process.client ? require('js-cookie'):undefined//如果是客户端（浏览器）则加载js-cookie，否则复制undefined
export default {
    middleware:'notAuthenticated',
    name:"LoginPages",
    computed:{
        isLogin(){
            return this.$route.name == 'login'
        }
    },
   data(){
      return {
          user:{
              username:'',
              email:'',
              password:''
          },
          errors:{} //错误信息
      }
  },
  methods:{
      async onSubmit(){
          try {
              //提交表单请求登录
          const { data }=this.isLogin 
          ? await login({
              user:this.user
            })
          : await register({
              user:this.user
            })

           console.log(data);
//             //TODO：保存用户的登录状态
                //存储到容器是为了方便共享
            this.$store.commit('setUser',data.user)

//             //为了防止刷新页面数据丢失，需要把数据持久化
                // 把登录状态存储到cookie中
                Cookie.set('user',data.user)

            // 跳转到首页
            this.$router.push('/')
          } catch (err) {
                console.log('请求失败',err);
                console.dir(err)
                this.errors=err.response.data.errors
         
           }
       }
   }
}
</script>

<style  lang='stylus' rel='stylesheet/stylus'>

</style>
