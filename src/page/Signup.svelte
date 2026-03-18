<script>
  import { createEventDispatcher } from 'svelte';
  import {post} from '../api/api.js'
  import {onMount} from 'svelte'

  const dispatch = createEventDispatcher();
  let username = '';
  let password = '';
  let email='';
  let s="";
  $: jwtToken = ""; 

  onMount(() => {
    window['verify']=(token)=>{
      console.log("成功拿到 Token:", token);
      jwtToken=token;
    }
    // 檢查 turnstile 是否載入完成並手動渲染
    if (window['turnstile']) {
      window['turnstile'].render('.cf-turnstile');
    }
    console.log()
  });

  async function enter() {
    if(!jwtToken){
      document.getElementById('mes').style.color='#af1817';
      s='請先完成機器人驗證';
      return ;
    }

    try{
      document.getElementById('mes').style.color='black';
      s="loading...";
      const result=await post('/register',JSON.stringify({"username":username,"password":password,"email":email,"captcha_token":jwtToken}),'application/json');
      document.getElementById('mes').style.color='#18af17';
      s="註冊成功!";
      dispatch('signup');
    }catch(err){
      document.getElementById('mes').style.color='#af1817';
      if(username.length<4){
        s='帳號長度需大於4位';
      }else if(password.length<8){
        s='密碼長度需大於8位';
      }else{
        s=err.message;
      }
    }
  }

</script>

<div class="login-container">
  <h1>Sign Up</h1>
  <div class="login-form">
    <input
      type="text"
      bind:value={username}
      placeholder="帳號"
      on:keydown={(e) => e.key === 'Enter' && enter()}
    />
    <input
      type="password"
      bind:value={password}
      placeholder="密碼"
      on:keydown={(e) => e.key === 'Enter' && enter()}
    />
    <input
      type="text"
      bind:value={email}
      placeholder="Email"
      on:keydown={(e) => e.key === 'Enter' && enter()}
    />
    <div class="cf-turnstile" data-sitekey="1x00000000000000000000AA" data-callback="verify"></div>
    <p id="mes">{s}</p>
    <div style="display: flex; gap: 20px; justify-content: center;">
      <button on:click={enter}>ENTER</button>
    </div>
  </div>
</div>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    height: 100vh;
  }
  .login-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    gap: 10px;
  }
  .cf-turnstile{
    margin-top: 20px;
  }
</style>
