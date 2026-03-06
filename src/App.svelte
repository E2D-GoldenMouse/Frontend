<script>
  import Login from './page/Login.svelte';
  import Room from './page/Room.svelte';
  import Desktop from './page/desktop.svelte';  
  import Signup from './page/Signup.svelte';

  let currentPage = 'desktop';


  let roomId = '';
  let username = '';

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

  function getusername(event){ //取得登入後username 要傳給Desktop的
    username = event.detail.username;
    currentPage = 'desktop';
  }

  function handleLogout(){ //登出
    currentPage = 'desktop';
    username = '';
  }

  function handleHome() { //返回主畫面
    currentPage = 'desktop';
    roomId = '';
  }
</script>

{#if currentPage === 'desktop'}
  <Desktop {username} on:login={handleLogin} on:room={handleRoom} on:logout={handleLogout}/> 
{:else if currentPage === 'login'}
  <Login on:login={getusername}  on:signup={handleSignup}/>
{:else if currentPage === 'signup'}
  <Signup on:signup={handleHome} />
{:else if currentPage === 'room'}
  <Room {roomId} on:logout={handleHome} />
{/if}

<style>
</style>
