// ===== AniMerch — Shared JS =====
const PRODUCTS = {
  1: { name: "Akatsuki Cloud T-Shirt", cat: "NARUTO · MEN'S COLLECTION", price: "P350.00", img: "images/akatsuki-tee.jpg", desc: "Embrace the ninja way with this Akatsuki Cloud T-Shirt. Made from 100% premium cotton for maximum comfort. Perfect for everyday wear or cosplay events.", features: ["100% premium cotton","High-quality screen print","Machine wash cold, inside-out","Original AniMerch design"] },
  2: { name: "Jujutsu Kaisen Hoodie", cat: "JUJUTSU KAISEN · MEN'S COLLECTION", price: "P650.00", img: "images/jjk-hoodie.jpg", desc: "Channel cursed energy with this premium Jujutsu Kaisen pullover hoodie. Heavyweight fleece interior keeps you warm in any season.", features: ["Heavyweight fleece blend","Kangaroo pocket","Adjustable drawstring hood","Officially inspired graphic"] },
  3: { name: "Demon Slayer Cap", cat: "DEMON SLAYER · ACCESSORIES", price: "P250.00", img: "images/demon-slayer-cap.jpg", desc: "Top off your fit with this Demon Slayer embroidered cap. Adjustable strap for the perfect fit, every time.", features: ["Structured 6-panel cap","Embroidered front emblem","Adjustable metal buckle","One size fits most"] },
  4: { name: "Straw Hat Crew T-Shirt", cat: "ONE PIECE · MEN'S COLLECTION", price: "P380.00", img: "images/straw-hat-tee.jpg", desc: "Set sail with the Straw Hat crew on this bold graphic tee. Soft cotton, relaxed fit, ready for any adventure.", features: ["Soft ringspun cotton","Relaxed unisex fit","Crew neck","Original AniMerch print"] },
  5: { name: "Survey Corps Jacket", cat: "ATTACK ON TITAN · WOMEN'S COLLECTION", price: "P850.00", img: "images/survey-corps-jacket.jpg", desc: "Suit up like a scout with this Survey Corps inspired jacket. Tailored cut with signature Wings of Freedom emblem on the back.", features: ["Tailored fit","Wings of Freedom back emblem","Front zip closure","Side hand pockets"] },
  6: { name: "Anime Character Sweater", cat: "ANIME ICONS · WOMEN'S COLLECTION", price: "P550.00", img: "images/anime-sweater.jpg", desc: "Cozy oversized sweater featuring iconic anime characters. The perfect everyday layer for any otaku.", features: ["Oversized cozy fit","Soft knit blend","Ribbed cuffs and hem","Original AniMerch artwork"] }
};

document.addEventListener('DOMContentLoaded', () => {

  // Product detail hydration
  const pdName = document.getElementById('pd-name');
  if (pdName) {
    const id = new URLSearchParams(location.search).get('id') || '1';
    const p = PRODUCTS[id] || PRODUCTS[1];
    pdName.textContent = p.name;
    document.getElementById('pd-cat').textContent = p.cat;
    document.getElementById('pd-price').textContent = p.price;
    document.getElementById('pd-desc').textContent = p.desc;
    document.getElementById('pd-img').src = p.img;
    document.getElementById('pd-img').alt = p.name;
    document.getElementById('pd-features').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    document.title = `${p.name} — AniMerch`;
  }


  // Quantity selector (product page)
  const qty = document.querySelector('.quantity-selector input');
  const minus = document.querySelector('.quantity-selector button:first-child');
  const plus = document.querySelector('.quantity-selector button:last-child');
  if (qty && minus && plus) {
    minus.addEventListener('click', () => {
      const v = parseInt(qty.value) || 1;
      if (v > 1) qty.value = v - 1;
    });
    plus.addEventListener('click', () => {
      const v = parseInt(qty.value) || 1;
      if (v < 10) qty.value = v + 1;
    });
  }

  // Size selector (product page)
  const sizeBtns = document.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => {
        b.style.background = '';
        b.style.borderColor = '';
        b.style.color = '';
      });
      btn.style.background = '#ff6b35';
      btn.style.borderColor = '#ff6b35';
      btn.style.color = 'white';
    });
  });

  // Add to cart (demo alert)
  const addBtn = document.querySelector('.product-detail .btn-primary');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      alert('✓ Added to cart! (Demo — checkout coming soon)');
    });
  }

  // Filter links (shop page) — toggles active class
  const filters = document.querySelectorAll('.filter-link');
  filters.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      filters.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Feedback form
  const form = document.getElementById('feedbackForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('✓ Thank you for your feedback!');
      form.reset();
    });
  }
});
