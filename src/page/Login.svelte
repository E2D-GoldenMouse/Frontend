<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let username = '';
  let password = '';

  function enter() {
    dispatch('login', { roomId: username });
  }
  function signup(){
    dispatch('signup');
  }
</script>

<div class="login-container">
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
    <div style="display: flex; gap: 20px; justify-content: center;">
      <button on:click={signup}>註冊</button>
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
