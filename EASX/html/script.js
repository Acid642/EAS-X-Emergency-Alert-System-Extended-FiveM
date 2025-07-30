window.addEventListener("message", (event) => {
  const data = event.data;

  if (data.action === "show") {
    const overlay = document.getElementById("eas-overlay");
    const staticBox = document.getElementById("eas-static");
    const messageBox = document.getElementById("eas-message");

    overlay.className = data.displayMode === "top" ? "topbar" : "fullscreen";
    overlay.style.display = "flex";

    staticBox.innerHTML = `
      <span>EMERGENCY ALERT SYSTEM</span><br>
      <span>Alert Issued by:</span>
      <span><strong>${data.authority}</strong></span><br>
    `;

    messageBox.innerText = data.message;

    if (data.repeatText) {
      messageBox.classList.add("scroll-text");
      messageBox.style.animationDuration = `${data.scrollSpeed}s`;
    } else {
      messageBox.classList.remove("scroll-text");
      messageBox.style.animationDuration = '';
    }

    if (data.tts) {
      const utter = new SpeechSynthesisUtterance(`${data.authority} reports: ${data.message}`);
      utter.rate = 0.9;
      utter.pitch = 1;
      speechSynthesis.cancel(); // stop other TTS
      speechSynthesis.speak(utter);
    }
  }

  if (data.action === "hide") {
    document.getElementById("eas-overlay").style.display = "none";
    document.getElementById("eas-message").classList.remove("scroll-text");
  }

  if (data.action === "openUI") {
    document.getElementById("eas-form").style.display = "block";
  }

  if (data.action === "playSound") {
    const audio = document.getElementById("eas-audio");
    audio.src = "sounds/" + data.sound;
    audio.volume = data.volume || 0.5;
    audio.play();
  }
});

function sendEAS() {
  const message = document.getElementById("message").value;
  const sound = document.getElementById("sound").value;
  const authority = document.getElementById("authority").value;
  const tts = document.getElementById("enableTTS").checked;
  const repeatText = document.getElementById("repeatText").checked;
  const displayMode = document.getElementById("displayMode").value;

  fetch(`https://${GetParentResourceName()}/submitEAS`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, sound, authority, tts, repeatText, displayMode })
  }).then(() => {
    document.getElementById("eas-form").style.display = "none";
  });
}

function closeUI() {
  fetch(`https://${GetParentResourceName()}/closeUI`, {
    method: "POST"
  }).then(() => {
    document.getElementById("eas-form").style.display = "none";
  });
}

function loadPreset() {
  const preset = document.getElementById("preset").value;

  switch (preset) {
    case "tornado":
      document.getElementById("authority").value = "National Weather Service";
      document.getElementById("message").value = "Tornado Warning: Seek shelter immediately in a basement or interior room.";
      document.getElementById("sound").value = "eas";
      break;
    case "storm":
      document.getElementById("authority").value = "National Weather Service";
      document.getElementById("message").value = "Severe Thunderstorm Warning: Stay indoors and avoid windows.";
      document.getElementById("sound").value = "eas";
      break;
    case "flood":
      document.getElementById("authority").value = "National Weather Service";
      document.getElementById("message").value = "Flash Flood Warning: Move to higher ground immediately.";
      document.getElementById("sound").value = "eas";
      break;
    case "amber":
      document.getElementById("authority").value = "State Police Department";
      document.getElementById("message").value = "AMBER Alert: Missing child reported. Check local alerts for details.";
      document.getElementById("sound").value = "amber";
      break;
    case "nuke":
      document.getElementById("authority").value = "Department of Homeland Security";
      document.getElementById("message").value = "Nuclear Emergency: Shelter indoors and await further instructions.";
      document.getElementById("sound").value = "eas";
      break;
    case "test":
      document.getElementById("authority").value = "Emergency Alert System";
      document.getElementById("message").value = "This is a test of the Emergency Alert System. No action is required.";
      document.getElementById("sound").value = "eas";
      break;
    default:
      document.getElementById("authority").value = "";
      document.getElementById("message").value = "";
      break;
  }
}
