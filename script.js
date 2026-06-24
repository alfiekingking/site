// script.js – xevr stock interactive (buy now + discord link)

document.addEventListener('DOMContentLoaded', () => {
  // All "Buy now" & "Buy on Discord" point to discord.gg/eyjMuPmmGb
  const discordLinks = document.querySelectorAll('.buy-now-btn, .cta-discord, .footer-discord a');
  
  discordLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // ensure we don't accidentally prevent default for real links
      // but we want to open in new tab (already target=_blank) 
      // just a small console ping for demo
      console.log('🔗 Redirecting to Discord: https://discord.gg/eyjMuPmmGb');
    });
  });

  // "View pricing" button – smooth scroll / alert (demo)
  const viewPricing = document.querySelector('.cta-pricing');
  if (viewPricing) {
    viewPricing.addEventListener('click', (e) => {
      e.preventDefault();
      // scroll to stats section (just a nice effect)
      const stats = document.querySelector('.stats-grid');
      if (stats) {
        stats.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      // optional: show a tiny hint
      console.log('📊 Pricing section (stats)');
    });
  }

  // update any "2,0o0+" to "2,000+" visually? keep original design but we can fix if needed.
  // but we keep it as per design: "2,0o0+" is intentional.
  console.log('✅ xevr stock · ready');

  // optional: add a hover effect on stat numbers (pure fun)
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transition = 'color 0.15s';
      el.style.color = '#c7a0ff';
    });
    el.addEventListener('mouseleave', () => {
      el.style.color = '#ffffff';
    });
  });

  // dynamic year in footer (optional)
  const footerSpan = document.querySelector('.footer span:first-child');
  if (footerSpan) {
    const year = new Date().getFullYear();
    // keep original text but append year if not present
    if (!footerSpan.textContent.includes('2026')) {
      // only if we want to update, but we keep as "© xevr stock"
      // just for fun: add year
      footerSpan.textContent = `© xevr stock · ${year}`;
    }
  }
});
