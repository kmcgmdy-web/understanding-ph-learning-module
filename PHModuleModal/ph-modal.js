(function () {
  console.log("PH Module script loaded");

  function bindButton() {
    const btn = document.getElementById("ph-launch");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "true";
      btn.addEventListener("click", openModuleModal);
    }
  }

  setInterval(bindButton, 400);

  function openModuleModal() {
    const old = document.getElementById("ph-modal-overlay");
    if (old) old.remove();

    const overlay = document.createElement("div");
    overlay.id = "ph-modal-overlay";

    overlay.innerHTML = `
      <div id="ph-modal">
        <button id="ph-close">✕</button>

        <iframe 
          class="ph-iframe"
          src="https://proud-shape-4583.dev.animaapp.io/?v=1763751847.009854"
        ></iframe>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("ph-close").onclick = () => {
      overlay.remove();
    };
  }
})();
