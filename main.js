const CART_KEY = "technostics-cart";

const catalog = {
  personalStarter: {
    id: "personalStarter",
    name: "Personal Starter",
    price: 1999,
    description: "Core personal security checks covering router, passwords, Wi-Fi, and guest network setup.",
  },
  personalStandard: {
    id: "personalStandard",
    name: "Personal Standard",
    price: 3749,
    description: "Expanded personal coverage with device and IoT review plus a written security report.",
  },
  personalPremium: {
    id: "personalPremium",
    name: "Personal Premium",
    price: 5599,
    description: "Full 13-service personal security treatment with follow-up support included.",
  },
  businessStandard: {
    id: "businessStandard",
    name: "Business Standard",
    price: 12499,
    description: "Baseline business assessment covering network, ports, Wi-Fi, password risk, and internal vulnerability.",
  },
  businessProfessional: {
    id: "businessProfessional",
    name: "Business Professional",
    price: 24999,
    description: "Expanded business protection with mapping, firewall review, and actionable reporting.",
  },
  businessRetainer: {
    id: "businessRetainer",
    name: "Business Monthly Retainer",
    price: 37999,
    description: "Complete 13-service business support with ongoing audits, updates, intelligence, and consultation.",
  },
  customFull: {
    id: "customFull",
    name: "Custom Full Package",
    price: 1499,
    description: "Complete custom engagement including the full 13-service list and tailored security support.",
  },
  personal: {
    id: "personal",
    name: "Personal Package",
    price: 299,
    description: "Security help for individuals, freelancers, and small setups that need practical protection.",
  },
  business: {
    id: "business",
    name: "Business Package",
    price: 899,
    description: "Broader protection for growing teams that need monitoring, hardening, and response support.",
  },
  custom: {
    id: "custom",
    name: "Custom Package",
    price: 1500,
    description: "A tailored engagement built around your environment, priorities, and security goals.",
  },
};

Object.assign(catalog, {
  customRouterSecurityChecking: {
    id: "customRouterSecurityChecking",
    name: "Router Security Checking",
    price: 499,
    description: "Review of router exposure and baseline configuration.",
  },
  customPasswordStrengthReview: {
    id: "customPasswordStrengthReview",
    name: "Password Strength Review",
    price: 299,
    description: "Assessment of password hygiene and account resilience.",
  },
  customWiFiEncryption: {
    id: "customWiFiEncryption",
    name: "Wi-Fi Encryption",
    price: 299,
    description: "Validation of wireless encryption and access security.",
  },
  customGuestNetworkSetup: {
    id: "customGuestNetworkSetup",
    name: "Guest Network Setup",
    price: 299,
    description: "Separate guest access for safer segmentation.",
  },
  customDeviceScanning: {
    id: "customDeviceScanning",
    name: "Device Scanning",
    price: 399,
    description: "Checks for obvious device-level risks and weaknesses.",
  },
  customIoTDeviceRiskCheck: {
    id: "customIoTDeviceRiskCheck",
    name: "IoT Device Risk Check",
    price: 499,
    description: "Review of connected devices that often go unmonitored.",
  },
  customRouterHardening: {
    id: "customRouterHardening",
    name: "Router Hardening",
    price: 699,
    description: "Stronger baseline controls for the gateway layer.",
  },
  customDnsPrivacySetup: {
    id: "customDnsPrivacySetup",
    name: "DNS/Privacy Setup",
    price: 399,
    description: "Privacy-focused configuration improvements.",
  },
  customWrittenSecurityReport: {
    id: "customWrittenSecurityReport",
    name: "Written Security Report",
    price: 599,
    description: "Clear findings and next steps in a usable report.",
  },
  customRemoteWalkthroughSupport: {
    id: "customRemoteWalkthroughSupport",
    name: "Remote Walkthrough & Support",
    price: 799,
    description: "Guided help to apply the recommended changes.",
  },
  customAdvancedFirewallConfiguration: {
    id: "customAdvancedFirewallConfiguration",
    name: "Advanced Firewall Configuration",
    price: 699,
    description: "More advanced controls for traffic filtering and defense.",
  },
  customVpnSetupConfiguration: {
    id: "customVpnSetupConfiguration",
    name: "VPN Setup & Configuration",
    price: 699,
    description: "Secure remote access setup for safer connectivity.",
  },
  customFollowUpSupport30Days: {
    id: "customFollowUpSupport30Days",
    name: "Follow-Up Support (30 days)",
    price: 799,
    description: "Post-delivery support to keep the implementation on track.",
  },
  customOpenPortScanning: {
    id: "customOpenPortScanning",
    name: "Open Port Scanning",
    price: 999,
    description: "Discovery of externally visible services and exposure.",
  },
  customWeakPasswordIdentification: {
    id: "customWeakPasswordIdentification",
    name: "Weak Password Identification",
    price: 599,
    description: "Checks for weak, reused, or guessable credentials.",
  },
  customNetworkMapping: {
    id: "customNetworkMapping",
    name: "Network Mapping",
    price: 799,
    description: "Identification of key systems and connectivity paths.",
  },
  customSecurityRecommendationsBestPractices: {
    id: "customSecurityRecommendationsBestPractices",
    name: "Security Recommendations & Best Practices",
    price: 699,
    description: "Practical advice for improving your day-to-day security posture.",
  },
  customPeriodicSecurityAuditsMonthly: {
    id: "customPeriodicSecurityAuditsMonthly",
    name: "Periodic Security Audits Monthly",
    price: 2499,
    description: "Recurring audit coverage for continuous oversight.",
  },
  customExposureMonitoringThreatIntelligence: {
    id: "customExposureMonitoringThreatIntelligence",
    name: "Exposure Monitoring & Threat Intelligence",
    price: 1599,
    description: "Ongoing monitoring and intelligence-backed risk awareness.",
  },
  customBasicNetworkAssessment: {
    id: "customBasicNetworkAssessment",
    name: "Basic Network Assessment",
    price: 749,
    description: "Baseline assessment of network structure and weaknesses.",
  },
  customWiFiSecurityReview: {
    id: "customWiFiSecurityReview",
    name: "Wi-Fi Security Review",
    price: 799,
    description: "Assessment of Wi-Fi protections and configuration.",
  },
  customInternalVulnerabilityAssessment: {
    id: "customInternalVulnerabilityAssessment",
    name: "Internal Vulnerability Assessment",
    price: 2499,
    description: "Inspection of internal weaknesses and likely attack paths.",
  },
  customFirewallConfigurationReview: {
    id: "customFirewallConfigurationReview",
    name: "Firewall Configuration Review",
    price: 1199,
    description: "Review of firewall policy structure and rule quality.",
  },
  customDetailedSecurityReportWithActionableInsights: {
    id: "customDetailedSecurityReportWithActionableInsights",
    name: "Detailed Security Report with Actionable Insights",
    price: 499,
    description: "A detailed report with practical recommendations.",
  },
  customVulnerabilityPatchingUpdates: {
    id: "customVulnerabilityPatchingUpdates",
    name: "Vulnerability Patching & Updates",
    price: 1299,
    description: "Support for applying key fixes and updates.",
  },
  customOngoingSecurityConsultationSupport: {
    id: "customOngoingSecurityConsultationSupport",
    name: "Ongoing Security Consultation & Support",
    price: 1999,
    description: "Continued advisory support for evolving needs.",
  },
});

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartBadges();
}

function getCartCount() {
  return readCart().reduce((sum, item) => sum + item.quantity, 0);
}

function formatMoney(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount);
}

function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
    node.style.display = count ? "inline-flex" : "none";
  });
}

function addToCart(serviceId, quantity = 1) {
  const item = catalog[serviceId];
  if (!item) return;

  const cart = readCart();
  const existing = cart.find((entry) => entry.id === serviceId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }

  writeCart(cart);
}

function setQuantity(serviceId, quantity) {
  const cart = readCart();
  const item = cart.find((entry) => entry.id === serviceId);
  if (!item) return;

  item.quantity = Math.max(1, quantity);
  writeCart(cart);
}

function removeFromCart(serviceId) {
  writeCart(readCart().filter((entry) => entry.id !== serviceId));
}

function clearCart() {
  writeCart([]);
}

function renderCartItems() {
  const mount = document.querySelector("[data-cart-items]");
  if (!mount) return;

  const cart = readCart();
  if (!cart.length) {
    mount.innerHTML = `
      <div class="empty-state">
        Your cart is empty. Browse the services page to add a security package or retainer.
      </div>
    `;
    return;
  }

  mount.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item" data-reveal>
          <div>
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:8px">
              <h4 style="margin:0">${item.name}</h4>
              <span class="chip">Qty ${item.quantity}</span>
            </div>
            <p>${item.description}</p>
            <p><strong>${formatMoney(item.price)}</strong> ${item.id === "businessRetainer" ? "per month" : "per order"}</p>
          </div>
          <div style="text-align:right">
            <div class="quantity-controls" aria-label="Quantity controls for ${item.name}">
              <button type="button" data-action="decrease" data-id="${item.id}">−</button>
              <strong>${item.quantity}</strong>
              <button type="button" data-action="increase" data-id="${item.id}">+</button>
            </div>
            <div style="margin-top: 12px">
              <div><strong>${formatMoney(item.price * item.quantity)}</strong></div>
              <button class="remove-btn" type="button" data-action="remove" data-id="${item.id}" style="margin-top:12px">×</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  bindRevealObserver();
}

function renderCheckoutSummary() {
  const mount = document.querySelector("[data-checkout-summary]");
  if (!mount) return;

  const cart = readCart();
  if (!cart.length) {
    mount.innerHTML = `<div class="empty-state">Add services to your cart before checking out.</div>`;
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  mount.innerHTML = `
    <h3>Order Summary</h3>
    ${cart
      .map(
        (item) => `
          <div class="summary-row">
            <div>
              <strong>${item.name}</strong>
              <p>${item.quantity} x ${formatMoney(item.price)}</p>
            </div>
            <strong>${formatMoney(item.price * item.quantity)}</strong>
          </div>
        `,
      )
      .join("")}
    <div class="summary-row">
      <span>Subtotal</span>
      <strong>${formatMoney(subtotal)}</strong>
    </div>
    <div class="summary-row">
      <span>Estimated Tax</span>
      <strong>${formatMoney(tax)}</strong>
    </div>
    <div class="summary-total">
      <span>Total</span>
      <span>${formatMoney(total)}</span>
    </div>
  `;
}

function bindCatalogButtons() {
  document.querySelectorAll("[data-add-to-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.addToCart, 1);
      button.textContent = "Added";
      setTimeout(() => {
        button.textContent = button.dataset.label || "Add to cart";
      }, 900);
    });
  });
}

function bindServiceChecklist() {
  const form = document.querySelector("[data-service-selection]");
  const button = document.querySelector("[data-add-selected-services]");
  const status = document.querySelector("[data-service-selection-status]");
  if (!form || !button) return;

  button.addEventListener("click", () => {
    const selected = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'));
    if (!selected.length) {
      if (status) status.textContent = "Select one or more services to add to the cart.";
      return;
    }

    selected.forEach((input) => {
      const serviceId = input.dataset.serviceId;
      if (serviceId) addToCart(serviceId, 1);
      input.checked = false;
    });

    if (status) {
      status.textContent = `${selected.length} service${selected.length === 1 ? "" : "s"} added to the cart.`;
      setTimeout(() => {
        if (status.textContent.startsWith(String(selected.length))) {
          status.textContent = "";
        }
      }, 3000);
    }
  });
}

function bindCartControls() {
  const mount = document.querySelector("[data-cart-items]");
  if (!mount) return;

  mount.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const id = button.dataset.id;
    const cart = readCart();
    const item = cart.find((entry) => entry.id === id);
    if (!item) return;

    if (button.dataset.action === "increase") {
      setQuantity(id, item.quantity + 1);
    } else if (button.dataset.action === "decrease") {
      if (item.quantity === 1) {
        removeFromCart(id);
      } else {
        setQuantity(id, item.quantity - 1);
      }
    } else if (button.dataset.action === "remove") {
      removeFromCart(id);
    }

    renderCartItems();
    renderCheckoutSummary();
    bindRevealObserver();
  });
}

function bindClearCartButton() {
  const button = document.querySelector("[data-clear-cart]");
  if (!button) return;

  button.addEventListener("click", () => {
    clearCart();
    renderCartItems();
    renderCheckoutSummary();
    bindRevealObserver();
  });
}

function bindCheckoutForm() {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) return;

  const status = document.querySelector("[data-checkout-status]");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const cart = readCart();
    if (!cart.length) {
      status.textContent = "Your cart is empty. Add a service before checking out.";
      return;
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    const reference = `TX-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const cartSummary = cart
      .map((item) => `${item.name} x ${item.quantity} (${formatMoney(item.price)})`)
      .join("; ");

    const orderItemsField = form.querySelector("#order_items");
    const orderSubtotalField = form.querySelector("#order_subtotal");
    const orderTaxField = form.querySelector("#order_tax");
    const orderTotalField = form.querySelector("#order_total");
    const orderReferenceField = form.querySelector("#order_reference");

    if (orderItemsField) orderItemsField.value = cartSummary;
    if (orderSubtotalField) orderSubtotalField.value = formatMoney(subtotal);
    if (orderTaxField) orderTaxField.value = formatMoney(tax);
    if (orderTotalField) orderTotalField.value = formatMoney(total);
    if (orderReferenceField) orderReferenceField.value = reference;

    const payload = new FormData(form);
    if (!orderItemsField) payload.append("cart", cartSummary);
    if (!orderTotalField) payload.append("total", formatMoney(total));
    payload.append("order_reference", reference);

    status.textContent = "Submitting your order...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Checkout submission failed");
      }

      writeCart([]);
      renderCartItems();
      renderCheckoutSummary();
      status.innerHTML = `Order placed successfully. Reference <strong>${reference}</strong>. A Technostics analyst will contact you shortly.`;
      form.reset();
    } catch {
      status.textContent = "We couldn’t submit the order just now. Please try again in a moment.";
    }
  });
}

function bindContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const payload = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      form.reset();
      const note = document.createElement("p");
      note.textContent = "Thanks. Your message has been queued for the Technostics team.";
      note.style.marginTop = "14px";
      note.style.color = "#ffb347";
      form.appendChild(note);
      setTimeout(() => note.remove(), 4500);
    } catch {
      const note = document.createElement("p");
      note.textContent = "We couldn’t send your message right now. Please try again in a moment.";
      note.style.marginTop = "14px";
      note.style.color = "#ffb347";
      form.appendChild(note);
      setTimeout(() => note.remove(), 4500);
    }
  });
}

function initCursor() {
  const cursor = document.querySelector(".cursor");
  if (!cursor) return;

  window.addEventListener("pointermove", (event) => {
    cursor.style.transform = `translate3d(${event.clientX - 9}px, ${event.clientY - 9}px, 0)`;
  });

  document.querySelectorAll("a, button, input, textarea, .feature-card, .team-card, .offer-card").forEach((el) => {
    el.addEventListener("pointerenter", () => cursor.classList.add("is-hover"));
    el.addEventListener("pointerleave", () => cursor.classList.remove("is-hover"));
  });
}

function bindMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function bindRevealObserver() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  nodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 80, 480)}ms`;
    observer.observe(node);
  });
}

function bindTiltCards() {
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
      card.style.transform = `translateY(-4px) rotateX(${y}deg) rotateY(${x}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function initHeroParallax() {
  const shell = document.querySelector("[data-hero-shell]");
  if (!shell) return;

  window.addEventListener("pointermove", (event) => {
    const bounds = shell.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    shell.style.transform = `rotateX(${12 - y * 8}deg) rotateY(${ -14 + x * 10 }deg)`;
  });
}

function init() {
  updateCartBadges();
  bindMobileNav();
  bindCatalogButtons();
  bindServiceChecklist();
  bindCartControls();
  bindClearCartButton();
  bindCheckoutForm();
  bindContactForm();
  initCursor();
  bindRevealObserver();
  bindTiltCards();
  initHeroParallax();
  renderCartItems();
  renderCheckoutSummary();
}

document.addEventListener("DOMContentLoaded", init);
