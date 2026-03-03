<script>
  import Login from './page/Login.svelte';
  import Room from './page/Room.svelte';
  import Desktop from './page/desktop.svelte';  
  import Signup from './page/Signup.svelte';

  let currentPage = 'desktop';


  let roomId = '';

  function handleLogin() {
    currentPage = 'login';
  }
  function handleSignup() {
    currentPage = 'signup';
  }
  function handleRoom(event) {
    roomId = event.detail.roomId;
    currentPage = 'room';
  }

  function handleHome() {
    currentPage = 'desktop';
    roomId = '';
  }
</script>

{#if currentPage === 'desktop'}
  <Desktop on:login={handleLogin} on:room={handleRoom} />
{:else if currentPage === 'login'}
  <Login on:login={handleHome}  on:signup={handleSignup}/>
{:else if currentPage === 'signup'}
  <Signup on:signup={handleHome} />
{:else if currentPage === 'room'}
  <Room {roomId} on:logout={handleHome} />
{/if}

<style>
</style>
