<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let username = '';
  let password = '';

  function enter() {
    dispatch('login', { roomId: username });
  }
</script>

<div class="login-container">
  <h1>Login</h1>
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
    <div style="display: flex; gap:10px;">
      <button>註冊</button>
      <button on:click={enter}>ENTER</button>
    </div>
  </div>
</div>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
  }
</style>
