# WebChat
WebChat is a serverless, browser-based communication platform designed for devices connected to the same local Wi-Fi network. It enables users to communicate and share content directly between devices using WebRTC.

## Features
- Chat Room: Real-time text messaging between connected devices.
- Drawing Room: A shared drawing canvas where multiple users can draw and collaborate in real time.
- File Sharing: Direct peer-to-peer file transfers between connected devices.

## Technology Stack
- HTML5
- CSS3
- JavaScript
- WebRTC

## Architecture
WebChat is designed around peer-to-peer communication. Messages, drawing updates, and file transfers are intended to travel directly between connected browsers rather than through a server.

The initial implementation targets devices on the same local Wi-Fi network. A connection setup mechanism will be needed to establish WebRTC peer connections without a centralized signaling server.

## Goals
- Keep the application lightweight and accessible through a web browser.
- Avoid accounts and unecessary dependencies.
- Enable direct communication between devices.
- Provide a simple interface for messaging, collaborative drawing, and file sharing.

## Project Status
**Currently in Development**

WebChat is being built with HTML, CSS, and JavaScript as part of the Terra Hack Club project.