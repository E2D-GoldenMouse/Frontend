<script>
  import { createEventDispatcher } from 'svelte';

  let roomNumber = '';
  const dispatch = createEventDispatcher();

  function handleLogin() {
    dispatch('login');
  }

  function generateRandomRoom() {
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    roomNumber = randomId;
    dispatch('room', { roomId: randomId });
  }


</script>

<div class="login-container">
  <button on:click={handleLogin} class="top-right-btn">login</button>
  <div class="login-box">
    <h1 class="title">Quoridor</h1>
    
    <div  class="input-group">
      <input
        id="room-input"
        type="text"
        bind:value={roomNumber}
        placeholder="enter room id"
      />
      <button  class="join-btn">
        join
      </button>
    </div>

    <button on:click={generateRandomRoom} class="create-btn">
      create
    </button>
  </div>
</div>

<style>
.title {
  font-size: 3rem;
  color: white;
  background-color: #9B9B9B;
  border-radius: 0.5rem;
padding: 1rem;
}
.login-box {
  display: flex;
    flex-direction: column;
  height: 100vh;
}
.input-group {
  gap: 10px;
}
</style>