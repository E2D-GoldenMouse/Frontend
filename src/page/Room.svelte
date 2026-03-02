<script>
  import { createEventDispatcher } from 'svelte';

  export let roomId = '';
  const dispatch = createEventDispatcher();

  function handleLogout() {
    dispatch('logout');
  }
</script>

<div class="room-container">
  <div class="room-header">
    <h1>room #{roomId}</h1>
    <button on:click={handleLogout} class="logout-btn">
      退出
    </button>
  </div>

  <div class="room-content">
    <p>welcome</p>
    <p>room id: <strong>{roomId}</strong></p>
  </div>
</div>

<style>
</style>
