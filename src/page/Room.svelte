<script>
  import { createEventDispatcher } from 'svelte';
  import Rule from './Rule.svelte'; // 你的規則元件

  export let roomId = '';
  const dispatch = createEventDispatcher();

  let showRules = false;

  function handleLogout() {
    dispatch('logout');
  }

  function toggleRules() {
    showRules = !showRules;
  }
</script>
<div class="room-container">
  <div class="room-header">
    <h1>room #{roomId}</h1>
      <button on:click={toggleRules} class="rule-btn">規則</button>
    
  </div>
  <button on:click={handleLogout} class="logout-btn">退出</button>

  <div class="room-content">
    <p>welcome</p>
    <p>room id: <strong>{roomId}</strong></p>
  </div>

  {#if showRules}
    <Rule on:close={toggleRules} />
  {/if}
</div>

<style>
.room-container {
  position: relative;
  padding: 1rem;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.rule-btn, .logout-btn {
  padding: 0.3rem 0.8rem;
  cursor: pointer;
}
</style>
