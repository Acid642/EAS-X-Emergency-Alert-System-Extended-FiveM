📢 FiveM Emergency Alert System (EAS) Script
A fully standalone and configurable Emergency Alert System for FiveM servers, featuring in-game GUI message input, scrolling TTS alerts, and customizable alert types like Tornado, Flood, and Test Alerts.

🚀 Features
📜 Realistic EAS GUI Interface
🔊 Custom Sirens & TTS Support
🧠 Auto Duration Based on Message Length
💡 Full-screen OR Top-banner display
🧾 Presets: Tornado, Flood, Storm, Test
🔁 Repeatable and Scrollable Messages
🎛️ Easy Configuration via config.lua
🛡️ ACE Permissions Support
🖥️ Flashing Text for Visibility
🧩 Installation
Download or Clone this repository to your resources folder.

Add the following to your server.cfg:

ensure eas
Configure config.lua to your preferences:

Config.BaseDuration = 30000 -- default duration (ms)
Config.ExtraPerChar = 100   -- extra ms per character after 200 chars
Config.Sounds = {
  ["eas"] = "eas_siren.ogg",
  ["amber"] = "amber_alert.ogg"
}
Add the ACE permission to allow access:

add_ace group.admin eas.open allow
📋 Usage
Command to Open Menu:

/eas
(Only available to authorized ACE users)

In-Menu Options:

Enter custom alert text
Select sound (EAS, Amber)
Select preset (Tornado, Storm, Flood, Test)
Choose display mode: Fullscreen or Banner
Enable/Disable TTS and Repeating scroll
🔒 Permissions
Set access control using ACE permissions. Example for admin group:

add_ace group.admin eas.open allow
You may define your own ACE groups like group.eas_operator as needed.

🗂️ File Structure
/eas
├── client.lua
├── config.lua
├── fxmanifest.lua
├── html/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── sounds/
│       ├── eas_siren.ogg
│       └── amber_alert.ogg
└── server.lua
📷 Preview
Preview Image

🤝 Credits
Script by: \Tyler W
Inspiration: Real-world EAS alerts & LGDevelopment
📄 License
MIT License. Free for personal and community use. Commercial resale prohibited.
