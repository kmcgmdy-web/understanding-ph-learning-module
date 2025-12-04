(function () {

  // CIMA loads HTML widgets asynchronously, so we bind repeatedly
  function bindButton() {
    const btn = document.getElementById("ph-launch");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "true";
      btn.addEventListener("click", openModuleModal);
    }
  }
  setInterval(bindButton, 400);

  function openModuleModal() {

    // Remove any existing modal/overlay
    const oldOverlay = document.getElementById("ph-modal-overlay");
    const oldModal = document.getElementById("ph-modal");
    if (oldOverlay) oldOverlay.remove();
    if (oldModal) oldModal.remove();

    // -- Create overlay (background only) --
    const overlay = document.createElement("div");
    overlay.id = "ph-modal-overlay";

    // -- Create modal window --
    const modal = document.createElement("div");
    modal.id = "ph-modal";
    modal.innerHTML = `
      <button id="ph-close">✕</button>
      <iframe 
        class="ph-iframe"
        src="https://proud-shape-4583.dev.animaapp.io/?v=1763751847.009854"
      ></iframe>
    `;

    // --- CRITICAL ---
    // Append asynchronously to escape Cypher container clipping
    setTimeout(() => {
      document.body.appendChild(overlay);
      document.body.appendChild(modal);

      // Reinforce escaping stacking contexts
      overlay.style.zIndex = "999999999";
      modal.style.zIndex = "1000000000";

      // Close behavior
      document.getElementById("ph-close").onclick = () => {
        overlay.remove();
        modal.remove();
      };

      overlay.onclick = () => {
        overlay.remove();
        modal.remove();
      };

    }, 0);
  }

})();
