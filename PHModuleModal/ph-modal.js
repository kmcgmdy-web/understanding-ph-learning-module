(function () {

  // continually try binding the button (CIMA loads widgets async)
  function bindButton() {
    const btn = document.getElementById("ph-launch");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "true";
      btn.addEventListener("click", openModuleModal);
    }
  }
  setInterval(bindButton, 400);

  function openModuleModal() {
    // remove old versions if they exist
    const oldOverlay = document.getElementById("ph-modal-overlay");
    const oldModal = document.getElementById("ph-modal");
    if (oldOverlay) oldOverlay.remove();
    if (oldModal) oldModal.remove();

    // ---- OVERLAY (background only) ----
    const overlay = document.createElement("div");
    overlay.id = "ph-modal-overlay";

    // ---- MODAL WINDOW (separate element) ----
    const modal = document.createElement("div");
    modal.id = "ph-modal";
    modal.innerHTML = `
      <button id="ph-close">✕</button>
      <iframe 
        class="ph-iframe"
        src="https://proud-shape-4583.dev.animaapp.io/?v=1763751847.009854"
      ></iframe>
    `;

    // ---- append both to BODY ----
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // ---- close button ----
    document.getElementById("ph-close").onclick = () => {
      overlay.remove();
      modal.remove();
    };

    // ---- clicking backdrop closes modal ----
    overlay.onclick = () => {
      overlay.remove();
      modal.remove();
    };
  }

})();
