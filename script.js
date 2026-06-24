// script.js — xvr's stock 1:1 (dynamic content + interactions)

document.addEventListener('DOMContentLoaded', () => {
  const DISCORD = 'https://discord.gg/ZzWjddrme';
  const PRICE_PER_1K = 3;

  // ----- packages data -----
  const packages = [
    { robux: 1000, popular: false },
    { robux: 2500, popular: false },
    { robux: 5000, popular: true },
    { robux: 10000, popular: false },
    { robux: 25000, popular: false },
    { robux: 50000, popular: false },
  ];

  // ----- payment methods -----
  const paymentMethods = [
    'PayPal', 'CashApp', 'Venmo', 'Zelle', 'Apple Pay', 'Google Pay',
    'Visa', 'Mastercard', 'Amex', 'Discover', 'Crypto (BTC)', 'Crypto (ETH)',
    'Crypto (LTC)', 'USDT', 'Bank Transfer', 'Gift Cards',
  ];

  // ----- steps -----
  const steps = [
    { n: '01', t: 'Join Discord', d: 'Hop into our server and open a ticket with the amount you want.' },
    { n: '02', t: 'Pay your way', d: 'Choose any of our accepted payment methods. Confirmation is instant.' },
    { n: '03', t: 'Get your Robux', d: 'Delivered straight to your Roblox account in minutes.' },
  ];

  // ----- FAQ -----
  const faqs = [
    { q: 'Is this safe and legit?', a: 'Yes. We\'ve completed hundreds of orders with zero issues. Vouches available in our Discord.' },
    { q: 'How long does delivery take?', a: 'Most orders are delivered in under 5 minutes after payment confirms.' },
    { q: 'What\'s the minimum order?', a: '500 Robux ($1.50). No maximum — we have plenty in stock.' },
    { q: 'Do you offer refunds?', a: 'Yes, if we can\'t deliver for any reason you get a full refund instantly.' },
  ];

  // ----- render pricing -----
  const pricingGrid = document.getElementById('pricing-grid');
  if (pricingGrid) {
    pricingGrid.innerHTML = packages.map(p => {
      const price = ((p.robux / 1000) * PRICE_PER_1K).toFixed(2);
      const popularClass = p.popular ? 'popular' : '';
      const badge = p.popular ? `<div class="popular-badge">Most popular</div>` : '';
      return `
        <div class="pricing-card ${popularClass}">
          ${badge}
          <div class="pricing-robux-label">Robux</div>
          <div class="pricing-robux">${p.robux.toLocaleString()}</div>
          <div class="pricing-price">
            <span class="pricing-amount">$${price}</span>
            <span class="pricing-currency">USD</span>
          </div>
          <a href="${DISCORD}" target="_blank" rel="noopener noreferrer" class="pricing-btn">Buy ${p.robux.toLocaleString()} R$</a>
        </div>
      `;
    }).join('');
  }

  // ----- render payments -----
  const paymentGrid = document.getElementById('payment-grid');
  if (paymentGrid) {
    paymentGrid.innerHTML = paymentMethods.map(m => `
      <a href="${DISCORD}" target="_blank" rel="noopener noreferrer" class="payment-btn">
        <div class="payment-dot"></div>
        ${m}
      </a>
    `).join('');
  }

  // ----- render steps -----
  const stepsGrid = document.getElementById('steps-grid');
  if (stepsGrid) {
    stepsGrid.innerHTML = steps.map(s => `
      <div class="step-card">
        <div class="step-number">${s.n}</div>
        <div class="step-title">${s.t}</div>
        <div class="step-desc">${s.d}</div>
      </div>
    `).join('');
  }

  // ----- render FAQ -----
  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.innerHTML = faqs.map((f, i) => `
      <div class="faq-item" data-index="${i}">
        <div class="faq-question">
          <span>${f.q}</span>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">${f.a}</div>
      </div>
    `).join('');

    // FAQ toggle
    document.querySelectorAll('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-question');
      q.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });
    // open first by default
    const first = document.querySelector('.faq-item');
    if (first) first.classList.add('open');
  }

  // ----- custom range -----
  const range = document.getElementById('custom-range');
  const robuxDisplay = document.getElementById('custom-robux');
  const priceDisplay = document.getElementById('custom-price');
  if (range && robuxDisplay && priceDisplay) {
    const update = () => {
      const val = Number(range.value);
      robuxDisplay.innerHTML = `${val.toLocaleString()} <span>R$</span>`;
      priceDisplay.textContent = `$${((val / 1000) * PRICE_PER_1K).toFixed(2)}`;
    };
    range.addEventListener('input', update);
    update();
  }

  // ----- footer year -----
  document.getElementById('year').textContent = new Date().getFullYear();

  // ----- all discord links already point to DISCORD via href -----
  console.log('✅ xvr\'s stock · 1:1 replica loaded');
});
