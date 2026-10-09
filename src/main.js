import './style.css'

document.querySelector('#app').innerHTML = `

<main class="app">
  <header class="header">
    <div class="logo">W</div>
      <h1>WebChat</h1>
        <p>Private spaces, same network.</p>
  </header>
  <section class="rooms">
    <button class="room-card" data-room="chat">
      <span class="room-icon">01</span>
        <h2>Chat Room</h2>
        <p>Message devices on your local network.</p>
        <span class="open-link">Open room -></span>
        </button>
    <button class="room-card" data-room="drawing">
      <span class="room-icon">02</span>
        <h2>Drawing Room</h2>
        <p>Draw with friends on your local network.</p>
        <span class="open-link">Open room -></span>
    </button>
    <button class="room-card" data-room="files">
      <span class="room-icon">03</span>
        <h2>File Room</h2>
        <p>Share files with devices on your local network.</p>
        <span class="open-link">Open room -></span>
    </button>
  </section>
  <footer>
    <span class="status-dot"></span>
    Designed for devices on the same Wi-Fi network. No internet connection required.
  </footer>

</main>
`

document.querySelectorAll('.room-card').forEach((card) => {
  card.addEventListener('click', () => {
    const room = card.dataset.room
    alert(`${room} room will be built next.`)
  })
})