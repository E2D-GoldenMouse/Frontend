<script>
  let apiResponse = null
  let loading = false
  
  async function callHelloAPI() {
    loading = true
    try {
      const res = await fetch('http://localhost:8000/api')
      const data = await res.json()
      apiResponse = data.message
    } catch (error) {
      apiResponse = `Error: ${error.message}`
    }
    loading = false
  }
</script>

<main>
  <h1>API串接</h1>
  
  <div>
    <button on:click={callHelloAPI}>
      {loading ? '載入中...' : '呼叫 API Hello'}
    </button>
    {#if apiResponse}
      <p>{apiResponse}</p>
    {/if}
  </div>

</main>

<style>
</style>
