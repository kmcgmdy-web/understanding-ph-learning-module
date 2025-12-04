(function () {

  /* -------------------------------------------------------
     INJECT CSS DIRECTLY (CIMA-SAFE)
  ------------------------------------------------------- */
  (function loadCSS() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://animated-sfogliatella-5ffbf1.netlify.app/PHModuleModal/ph-modal.css";
    document.head.appendChild(link);
  })();


  /* -------------------------------------------------------
     BIND LAUNCH BUTTON (CIMA loads async)
  ------------------------------------------------------- */
  function bindButton() {
    const btn = document.getElementById("ph-launch");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "true";
      btn.addEventListener("click", openModuleModal);
    }
  }
  setInterval(bindButton, 400);


  /* -------------------------------------------------------
     OPEN FULLSCREEN MODAL
  ------------------------------------------------------- */
  function openModuleModal() {

    // Remove old versions
    const oldOverlay = document.getElementById("ph-modal-overlay");
    const oldModal = document.getElementById("ph-modal");
    if (oldOverlay) oldOverlay.remove();
    if (oldModal) oldModal.remove();

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "ph-modal-overlay";

    // Create modal window
    const modal = document.createElement("div");
    modal.id = "ph-modal";
    modal.innerHTML = `
      <button id="ph-close">✕</button>
      <iframe 
        class="ph-iframe"
        src="https://proud-shape-4583.dev.animaapp.io/?v=1763751847.009854"
      ></iframe>
    `;

    /* ---------------------------------------------------
       CRITICAL:
       Delay append so modal escapes CIMA containers.
    --------------------------------------------------- */
    setTimeout(() => {
      document.body.appendChild(overlay);
      document.body.appendChild(modal);

      overlay.style.zIndex = "999999999";
      modal.style.zIndex = "1000000000";

      // Close button
      document.getElementById("ph-close").onclick = () => {
        overlay.remove();
        modal.remove();
      };

      // Clicking backdrop closes modal
      overlay.onclick = () => {
        overlay.remove();
        modal.remove();
      };

    }, 0);
  }

})();
