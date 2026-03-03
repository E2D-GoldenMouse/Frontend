<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let username = '';
  let password = '';
  let email='';

  function enter() {
    dispatch('signup', { roomId: username });
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
    flex-direction: column;
    width: 300px;
    gap: 10px;
  }
</style>
