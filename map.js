'use strict';

// Illustrative planning cities, not secured sites or operational stations.
const proposedCities = [
  {
    "id": "seattle",
    "city": "Seattle",
    "state": "WA",
    "stateName": "Washington",
    "lat": 47.619335,
    "lon": -122.351538,
    "corridors": [
      "I-5",
      "I-90"
    ],
    "infoUrl": "https://www.seattle.gov/",
    "description": "Pacific Northwest crossroads where I-5 meets I-90.",
    "x": 177.115,
    "y": 73.203
  },
  {
    "id": "sacramento",
    "city": "Sacramento",
    "state": "CA",
    "stateName": "California",
    "lat": 38.567694,
    "lon": -121.468161,
    "corridors": [
      "I-5",
      "I-80"
    ],
    "infoUrl": "https://www.cityofsacramento.gov/",
    "description": "Northern California's meeting point for I-5 and I-80.",
    "x": 139.08,
    "y": 258.818
  },
  {
    "id": "san-bernardino",
    "city": "San Bernardino",
    "state": "CA",
    "stateName": "California",
    "lat": 34.14114,
    "lon": -117.294635,
    "corridors": [
      "I-10",
      "I-215"
    ],
    "infoUrl": "https://www.sanbernardino.gov/",
    "description": "Inland Empire access along I-10 and I-215.",
    "x": 183.613,
    "y": 365.76
  },
  {
    "id": "bozeman",
    "city": "Bozeman",
    "state": "MT",
    "stateName": "Montana",
    "lat": 45.683155,
    "lon": -111.053782,
    "corridors": [
      "I-90"
    ],
    "infoUrl": "https://www.bozemanmt.gov/",
    "description": "A Gallatin Valley stop along Montana's I-90 corridor.",
    "x": 326.376,
    "y": 147.259
  },
  {
    "id": "salt-lake-city",
    "city": "Salt Lake City",
    "state": "UT",
    "stateName": "Utah",
    "lat": 40.776928,
    "lon": -111.930991,
    "corridors": [
      "I-15",
      "I-80"
    ],
    "infoUrl": "https://www.slc.gov/",
    "description": "Wasatch Front crossroads for I-15 and I-80.",
    "x": 296.692,
    "y": 246.268
  },
  {
    "id": "phoenix",
    "city": "Phoenix",
    "state": "AZ",
    "stateName": "Arizona",
    "lat": 33.572154,
    "lon": -112.090132,
    "corridors": [
      "I-10",
      "I-17"
    ],
    "infoUrl": "https://www.phoenix.gov/",
    "description": "Desert metro connecting I-10 with Arizona's I-17 corridor.",
    "x": 268.77,
    "y": 394.877
  },
  {
    "id": "albuquerque",
    "city": "Albuquerque",
    "state": "NM",
    "stateName": "New Mexico",
    "lat": 35.10478,
    "lon": -106.646809,
    "corridors": [
      "I-25",
      "I-40"
    ],
    "infoUrl": "https://www.cabq.gov/",
    "description": "New Mexico crossroads where I-25 meets I-40.",
    "x": 365.074,
    "y": 376.082
  },
  {
    "id": "denver",
    "city": "Denver",
    "state": "CO",
    "stateName": "Colorado",
    "lat": 39.76185,
    "lon": -104.881105,
    "corridors": [
      "I-25",
      "I-70"
    ],
    "infoUrl": "https://www.denvergov.org/",
    "description": "Front Range connections along I-25 and I-70.",
    "x": 403.821,
    "y": 281.797
  },
  {
    "id": "dallas",
    "city": "Dallas",
    "state": "TX",
    "stateName": "Texas",
    "lat": 32.793333,
    "lon": -96.766513,
    "corridors": [
      "I-20",
      "I-35E",
      "I-45"
    ],
    "infoUrl": "https://dallascityhall.com/",
    "description": "North Texas connections along I-20, I-35E, and I-45.",
    "x": 530.957,
    "y": 434.501
  },
  {
    "id": "kansas-city",
    "city": "Kansas City",
    "state": "MO",
    "stateName": "Missouri",
    "lat": 39.125155,
    "lon": -94.550313,
    "corridors": [
      "I-35",
      "I-70"
    ],
    "infoUrl": "https://www.kcmo.gov/",
    "description": "Central US crossroads along I-35 and I-70.",
    "x": 567.44,
    "y": 301.553
  },
  {
    "id": "chicago",
    "city": "Chicago",
    "state": "IL",
    "stateName": "Illinois",
    "lat": 41.837045,
    "lon": -87.684939,
    "corridors": [
      "I-55",
      "I-90",
      "I-94"
    ],
    "infoUrl": "https://www.choosechicago.com/",
    "description": "Great Lakes access across I-55, I-90, and I-94.",
    "x": 672.001,
    "y": 239.254
  },
  {
    "id": "indianapolis",
    "city": "Indianapolis",
    "state": "IN",
    "stateName": "Indiana",
    "lat": 39.776664,
    "lon": -86.145935,
    "corridors": [
      "I-65",
      "I-70",
      "I-74"
    ],
    "infoUrl": "https://www.indy.gov/",
    "description": "Midwest connections along I-65, I-70, and I-74.",
    "x": 700.035,
    "y": 279.971
  },
  {
    "id": "memphis",
    "city": "Memphis",
    "state": "TN",
    "stateName": "Tennessee",
    "lat": 35.109164,
    "lon": -89.968511,
    "corridors": [
      "I-40",
      "I-55"
    ],
    "infoUrl": "https://memphistn.gov/",
    "description": "Mississippi River connections along I-40 and I-55.",
    "x": 645.934,
    "y": 382.811
  },
  {
    "id": "atlanta",
    "city": "Atlanta",
    "state": "GA",
    "stateName": "Georgia",
    "lat": 33.762909,
    "lon": -84.422675,
    "corridors": [
      "I-20",
      "I-75",
      "I-85"
    ],
    "infoUrl": "https://discoveratlanta.com/",
    "description": "Southeast crossroads for I-20, I-75, and I-85.",
    "x": 742.484,
    "y": 402.171
  },
  {
    "id": "charlotte",
    "city": "Charlotte",
    "state": "NC",
    "stateName": "North Carolina",
    "lat": 35.209045,
    "lon": -80.83099,
    "corridors": [
      "I-77",
      "I-85"
    ],
    "infoUrl": "https://www.charlottesgotalot.com/",
    "description": "Piedmont connections where I-77 meets I-85.",
    "x": 798.696,
    "y": 363.597
  },
  {
    "id": "harrisburg",
    "city": "Harrisburg",
    "state": "PA",
    "stateName": "Pennsylvania",
    "lat": 40.275891,
    "lon": -76.88502,
    "corridors": [
      "I-76",
      "I-81",
      "I-83"
    ],
    "infoUrl": "https://harrisburgpa.gov/",
    "description": "Pennsylvania capital region serving I-76, I-81, and I-83.",
    "x": 842.83,
    "y": 247.453
  },
  {
    "id": "jacksonville",
    "city": "Jacksonville",
    "state": "FL",
    "stateName": "Florida",
    "lat": 30.336864,
    "lon": -81.661603,
    "corridors": [
      "I-10",
      "I-95"
    ],
    "infoUrl": "https://www.jacksonville.gov/",
    "description": "Northeast Florida gateway where I-10 meets I-95.",
    "x": 800.188,
    "y": 466.503
  },
  {
    "id": "oklahoma-city",
    "city": "Oklahoma City",
    "state": "OK",
    "stateName": "Oklahoma",
    "lat": 35.467079,
    "lon": -97.513657,
    "corridors": [
      "I-35",
      "I-40",
      "I-44"
    ],
    "infoUrl": "https://www.visitokc.com/",
    "description": "Southern Plains crossroads for I-35, I-40, and I-44.",
    "x": 518.868,
    "y": 378.327
  }
];

(() => {
  const shell = document.getElementById('map-shell');
  const viewport = document.getElementById('map-viewport');
  const pins = document.getElementById('map-pins');
  const select = document.getElementById('city-select');
  const popup = document.getElementById('city-popover');
  const name = document.getElementById('map-city-name');
  const state = document.getElementById('map-city-state');
  const description = document.getElementById('map-city-description');
  const corridors = document.getElementById('map-corridors');
  const infoLink = document.getElementById('map-city-link');
  if (!shell || !proposedCities.length) return;
  const pinById = new Map();
  let activeId = null;
  let suppressFocus = false;
  let resizeFrame = 0;
  const mobile = window.matchMedia('(max-width: 700px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function positionPopup() {
    if (popup.hidden || !activeId || mobile.matches) return;
    const pin = pinById.get(activeId).getBoundingClientRect();
    const container = shell.getBoundingClientRect();
    const width = popup.offsetWidth;
    const height = popup.offsetHeight;
    const midpoint = pin.left + pin.width / 2 - container.left;
    const idealLeft = midpoint > container.width * 0.58 ? midpoint - width - 22 : midpoint + 22;
    popup.style.left = `${Math.max(12, Math.min(idealLeft, container.width - width - 12))}px`;
    popup.style.top = `${Math.max(12, Math.min(pin.top - container.top - 25, container.height - height - 12))}px`;
  }

  function openCity(id, reveal = false) {
    const city = proposedCities.find(item => item.id === id);
    if (!city) return;
    activeId = city.id;
    pinById.forEach((button, key) => {
      const active = key === id;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-expanded', String(active));
    });
    name.textContent = city.city;
    state.textContent = city.stateName;
    description.textContent = city.description;
    corridors.replaceChildren(...city.corridors.map(route => {
      const chip = document.createElement('span');
      chip.textContent = route;
      return chip;
    }));
    infoLink.href = city.infoUrl;
    infoLink.setAttribute('aria-label', `Official information about ${city.city}, ${city.stateName} (opens in a new tab)`);
    select.value = id;
    popup.hidden = false;
    if (reveal) pinById.get(id).scrollIntoView({ block: 'nearest', inline: 'center', behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    positionPopup();
  }

  function closeCity(restoreFocus = false) {
    if (popup.hidden) return;
    const previous = pinById.get(activeId);
    popup.hidden = true;
    pinById.forEach(button => { button.classList.remove('is-active'); button.setAttribute('aria-expanded', 'false'); });
    activeId = null;
    select.value = '';
    if (restoreFocus && previous) {
      suppressFocus = document.activeElement !== previous;
      previous.focus({ preventScroll: true });
    }
  }

  function navigatePins(event, city) {
    const directions = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
    const direction = directions[event.key];
    if (!direction) return;
    event.preventDefault();
    const candidates = proposedCities.filter(next => next.id !== city.id).map(next => {
      const dx = next.x - city.x;
      const dy = next.y - city.y;
      const forward = dx * direction[0] + dy * direction[1];
      const sideways = Math.abs(dx * direction[1] - dy * direction[0]);
      return { next, forward, score: Math.hypot(dx, dy) + sideways * 2 };
    }).filter(item => item.forward > 0).sort((a, b) => a.score - b.score);
    if (candidates[0]) {
      const next = candidates[0].next;
      pinById.get(next.id).focus({ preventScroll: true });
      openCity(next.id, true);
    }
  }

  const sorted = [...proposedCities].sort((a, b) => a.city.localeCompare(b.city));
  sorted.forEach(city => {
    const option = document.createElement('option');
    option.value = city.id;
    option.textContent = `${city.city}, ${city.state}`;
    select.append(option);
    const pin = document.createElement('button');
    pin.type = 'button';
    pin.className = 'map-pin';
    pin.dataset.city = city.id;
    pin.style.left = `${city.x / 10}%`;
    pin.style.top = `${city.y / 6.3}%`;
    pin.setAttribute('aria-label', `${city.city}, ${city.stateName}: proposed city area`);
    pin.setAttribute('aria-controls', 'city-popover');
    pin.setAttribute('aria-expanded', 'false');
    pin.innerHTML = '<svg viewBox="0 0 24 30" aria-hidden="true"><path d="M12 28C9 24 3 17 3 11a9 9 0 0 1 18 0c0 6-6 13-9 17Z"/><circle cx="12" cy="11" r="3.2"/></svg>';
    pin.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse' || event.pointerType === 'pen') openCity(city.id); });
    pin.addEventListener('focus', () => { if (suppressFocus) { suppressFocus = false; return; } openCity(city.id); });
    pin.addEventListener('click', event => { openCity(city.id); if (event.detail === 0) infoLink.focus(); });
    pin.addEventListener('keydown', event => {
      if (event.key === 'Tab' && !event.shiftKey && activeId === city.id) { event.preventDefault(); infoLink.focus(); return; }
      navigatePins(event, city);
    });
    pinById.set(city.id, pin);
    pins.append(pin);
  });

  select.addEventListener('change', () => select.value ? openCity(select.value, true) : closeCity());
  document.getElementById('map-close').addEventListener('click', () => closeCity(true));
  shell.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); closeCity(true); } });
  document.addEventListener('pointerdown', event => { if (!shell.contains(event.target) && event.target !== select) closeCity(); });
  function queuePosition() {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(positionPopup);
  }
  viewport.addEventListener('scroll', queuePosition, { passive: true });
  window.addEventListener('resize', queuePosition, { passive: true });
})();
