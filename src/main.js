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

    if (room === 'chat') {
      openChatRoom()
     } else {
      alert(`${room} room will be built next.`)
     }
  
})
})

function openChatRoom() {
  const app = document.querySelector('.app')
  app.innerHTML = `
    <main class="chat-app">
      <header class="chat-header">
        <button id="back-button" class="back-button"><- Back</button>
           <div>
              <h1>Chat Room</h1>
              <p>Local messages • Connection not configured</p>
            </div>
          <span class="connection-status">Offline</span>
      </header>
      
      <section class="chat-panel">
        <div id="messages" class="messages">
        <div class="empty-state">
          <h2>Your conversation starts here.</h2>
          <p>Messages currently appear on this device only.</p>
          </div>
          </div>
      <form id="message-form" class="message-form">
      <input
        id="message-input"
        type="text"
        placeholder="Write a message..."
        autocomplete="off"
        maxlength="2000"
        required
      />
      <button type="submit">Send</button>
    </form>
  </section>
</main>
  `
  document.querySelector('#back-button').addEventListener('click', () => {
    location.reload()
  })

  const form = document.querySelector('#message-form')
  const input = document.querySelector('#message-input')
  const messages = document.querySelector('#messages')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const text = input.value.trim()
    if (!text) return

    const emptyState = messages.querySelector('.empty-state')
    if (emptyState) emptyState.remove()

    const message = document.createElement('div')
    message.className = 'message message-sent'

    const content = document.createElement('p')
    content.textContent = text

    const time = document.createElement('span')
    time.className = 'message-time'
    time.textContent = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })

    message.append(content, time)
    messages.appendChild(message)

    messages.scrollTop = messages.scrollHeight
    input.value = ''
    input.focus()
  })
}