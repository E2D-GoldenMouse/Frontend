<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import {post} from '../api/api.js'

  const dispatch = createEventDispatcher();
  let username = '';
  let password = '';
  let s="";

  function back() {
    dispatch('desktop');
  }
  async function enter() {
    const FormData=new URLSearchParams();
    FormData.append('username',username);
    FormData.append('password',password);
    try{
      document.getElementById('mes').style.color='black';
      s="loading...";
      const result=await post('/login',FormData,'application/x-www-form-urlencoded');
      document.getElementById('mes').style.color='#18af17';
      s="登入成功!";
      dispatch('login', { username: username });
    }catch(err){
      document.getElementById('mes').style.color='#af1817';
      s=err.message;
    }
    //加上login api
  }
  function signup(){
    dispatch('signup');
  }
</script>

<div class="login-container">
  <button on:click={back} class="top-right-btn">BACK</button>
  <h1>Log In</h1>
  <div class="login-form">
    <div class="inputs">
      <input
        type="text"
        bind:value={username}
        placeholder="帳號"
        on:keydown={(e) => e.key === 'Enter' && enter()}
      />
    </div>
    <div class="inputs">
      <input
        type="password"
        bind:value={password}
        placeholder="密碼"
        on:keydown={(e) => e.key === 'Enter' && enter()}
      />
      <button on:click={() => console.log('forget')}>forget</button>
    </div>
    <p id="mes">{s}</p>
    <div style="display: flex; gap: 20px; justify-content: center;">
      <button on:click={back}>CANCEL</button>
      <button on:click={signup}>SIGN UP</button>
      <button on:click={enter}>ENTER</button>
    </div>
  </div>
</div>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .top-right-btn{
    margin: 30px 50px;
    display: flex;
    align-self: flex-end;
  }
  .login-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    gap: 10px;
  }
  .inputs input{
    border: none;
    outline: none;
    width: 250px;
    margin: 0px;
  }
  .inputs button{
    background-color: #878787;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 5px;
    margin-left: auto;
    margin-right: 10px;
    font-size: 10px;
  }
  .inputs{
    background-color: #ffffff;
    width: 300px;
    height: 35px;
    margin-top: 10px;
    border: 2px solid #000000;
    border-radius: 10px;
    text-align: left;
    align-items: center;
    display: flex;
  }
  .inputs button:hover{
    border-color: #2C2C2C;
  }
</style>
