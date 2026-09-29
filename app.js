'use strict';
const siteConfig = Object.freeze({ contactEmail: 'hello@semisocket.com' });
const experienceContent = [
  { title: 'Designed for the entire truck.', copy: 'Wide approaches and pull-through charging lanes are central to the concept. The goal is a simple stop that works with a full tractor-trailer, without planning around a passenger-car parking space.', caption: 'Space to arrive. Space to leave.', image: 'charger-station', width: 1672, height: 941, position: 'center', alt: 'White SemiSocket chargers arranged along spacious pull-through lanes beside a driver lounge.' },
  { title: 'A clear connection, from the start.', copy: 'Our charger concept pairs a white housing and lime S with a clear digital readout, cable management, and payment at the charger. Equipment, connectors, and electrical capacity will be evaluated around the vehicles each location intends to serve.', caption: 'Meet the SemiSocket charger.', image: 'charger-hero', width: 1536, height: 1024, position: '68% center', alt: 'White SemiSocket charger concept with a lime S, charging progress screen, contactless and card payment, and side-mounted cable.' },
  { title: 'A proper break is part of the plan.', copy: 'A bright, welcoming lounge, comfortable seating, and access to everyday essentials are part of our station vision. Because drivers deserve a thoughtful place to reset while their trucks recharge.', caption: 'Recharge the truck. Reset for the road.', image: 'charging-plaza', width: 1672, height: 941, position: '75% center', alt: 'Architectural concept of the warm, glass-fronted driver lounge beside the SemiSocket charging bays.' }
];
const tabs = [...document.querySelectorAll('[data-experience]')];
function selectExperience(index, focus = false) {
  const next = experienceContent[index];
  if (!next) return;
  tabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
  });
  document.getElementById('experience-title').textContent = next.title;
  document.getElementById('experience-copy').textContent = next.copy;
  document.getElementById('scene-label').textContent = next.caption;
  const scene = document.getElementById('experience-image');
  scene.srcset = next.image === 'charging-plaza' ? '' : `assets/${next.image}-800.webp 800w, assets/${next.image}.webp ${next.width}w`;
  scene.src = `assets/${next.image}.webp`;
  scene.alt = next.alt;
  scene.width = next.width;
  scene.height = next.height;
  scene.style.objectFit = next.image === 'charger-hero' ? 'contain' : 'cover';
  scene.style.objectPosition = next.position;
  document.getElementById('experience-panel').setAttribute('aria-labelledby', tabs[index].id);
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectExperience(index));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectExperience(next, true); }
  });
});
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() { menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation'); mobileNav.hidden = true; }
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !expanded;
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 1151px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const contactDialog = document.getElementById('contact-dialog');
const privacyDialog = document.getElementById('privacy-dialog');
const contactForm = document.getElementById('contact-form');
let lastDialogTrigger = null;
function showDialog(dialog, trigger) { closeMenu(); lastDialogTrigger = trigger; dialog.showModal(); document.body.classList.add('modal-open'); }
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => {
  contactForm.elements.interest.value = button.dataset.contact;
  document.getElementById('inquiry-result').hidden = true;
  document.getElementById('copy-status').textContent = '';
  showDialog(contactDialog, button);
}));
document.getElementById('privacy-open').addEventListener('click', event => showDialog(privacyDialog, event.currentTarget));
[contactDialog, privacyDialog].forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); if (lastDialogTrigger) lastDialogTrigger.focus(); });
});
let inquiryText = '';
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const field = name => String(data.get(name) || '').trim();
  const interest = field('interest');
  inquiryText = `Hello SemiSocket,\n\nI'm reaching out as a ${interest.toLowerCase()}.\n\nName: ${field('name')}\nEmail: ${field('email')}\nCompany: ${field('company') || 'Not provided'}\n\n${field('message')}\n\nSent from the SemiSocket website.`;
  const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent('SemiSocket inquiry — ' + interest)}&body=${encodeURIComponent(inquiryText)}`;
  document.getElementById('inquiry-result').hidden = false;
  document.getElementById('inquiry-fallback').hidden = true;
  document.getElementById('copy-status').textContent = '';
  window.location.href = mailto;
});
document.getElementById('copy-inquiry').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(inquiryText);
    status.textContent = 'Inquiry copied. Paste it into your email.';
  } catch {
    const fallback = document.getElementById('inquiry-fallback');
    fallback.value = inquiryText;
    fallback.hidden = false;
    fallback.focus();
    fallback.select();
    status.textContent = 'Select and copy the prepared text above.';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
