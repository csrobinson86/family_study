import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="devise"
export default class extends Controller {
  connect() {
    // Fix for Devise + Turbo
    document.addEventListener("turbo:load", () => {
      // Clear flash messages after navigation
      const flashMessages = document.querySelectorAll(".flash-message")
      flashMessages.forEach(message => message.remove())
    })

    document.addEventListener("turbo:submit-end", (event) => {
      if (event.detail.success) {
        // Reload the page after successful form submission
        Turbo.visit(window.location.href, { action: "replace" })
      }
    })
  }
} 