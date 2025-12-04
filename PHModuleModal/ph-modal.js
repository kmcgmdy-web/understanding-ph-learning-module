(function () {

  // continually try binding the button (CIMA renders widgets asynchronously)
  function bindButton() {
    const btn = document.getElementById("ph-launch");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "true";
      btn.addEventListener("click", openModuleModal);
    }
  }
  setInterval(bindButton, 400);

  function openModuleModal() {
    // remove old modal if exists
    const oldOverlay = document.getElementById("ph-modal-overlay");
    const oldModal = document.getElementById("ph-modal");
    if (oldOverlay) oldOverlay.remove();
    if (oldModal) oldModal.remove();

    // create overlay (background only)
    const overlay = document.createElement("div");
    overlay.id = "ph-modal-overlay";

    // create modal container
    const modal = document.createElement("div");
    modal.id = "ph-modal";
    modal.innerHTML = `
      <button id="ph-close">✕</button>
      <iframe 
        class="ph-iframe"
        src="https://proud-shape-4583.dev.animaapp.io/?v=1763751847.009854"
      ></iframe>
    `;

    // append both to BODY (critical to escape CIMA containers)
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // close behavior
    document.getElementById("ph-close").onclick = () => {
      overlay.remove();
      modal.remove();
    };

    // clicking outside modal closes it
    overlay.onclick = () => {
      overlay.remove();
      modal.remove();
    };
  }

})();
