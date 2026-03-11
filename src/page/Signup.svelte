<script>
  import { createEventDispatcher } from 'svelte';
  import {post} from '../api/api.js'

  const dispatch = createEventDispatcher();
  let username = '';
  let password = '';
  let email='';
  let s="";

  async function enter() {
    try{
      s="loading...";
      const result=await post('/register',JSON.stringify({"username":username,"password":password,"email":email}),'application/json');
      s="註冊成功!";
      dispatch('signup');
    }catch(err){
      s=err.message;
    }
    //加上signup api
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
    <p>{s}</p>
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
</style>
