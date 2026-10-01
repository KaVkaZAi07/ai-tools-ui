/* A Studio: public, read-only availability. No account credentials or customer data. */
(() => {
  'use strict';
  const trigger = document.getElementById('open-calc');
  if (!trigger || document.getElementById('account-availability')) return;
  const data = typeof DATA === 'object' ? DATA : null;
  const offer = data && data.plans && data.plans[3990];
  if (!offer) return;
  const money = new Intl.NumberFormat('ru-RU');
  const style = document.createElement('style');
  style.textContent = `
  #account-availability{color-scheme:dark;width:min(470px,calc(100% - 32px));max-height:calc(100dvh - 32px);max-height:calc(var(--vh,100vh) - 32px);padding:28px;border:1px solid #bf845954;border-radius:27px;color:#fff0df;background:radial-gradient(ellipse at 100% 0%,#75391e55,transparent 65%),#171415;box-shadow:0 36px 120px #000b;overflow:auto;overscroll-behavior:contain;animation:availability-enter .28s ease}
  #account-availability::backdrop{background:#050505ad;-webkit-backdrop-filter:blur(9px);backdrop-filter:blur(9px)}
  #account-availability .av-top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:23px}
  #account-availability .av-eyebrow{font-size:10px;letter-spacing:.18em;color:#dba77d}
  #account-availability h2{font-size:27px;line-height:1.15;font-weight:600;letter-spacing:-.9px;margin-top:7px}
  #account-availability .av-close{width:44px;height:44px;flex:none;border:1px solid #dbaa7d40;border-radius:50%;font-size:24px;background:#ffffff06;color:#eed3b9}
  #account-availability .av-offer{position:relative;padding:23px;border:1px solid #ffd7a887;border-radius:19px;background:linear-gradient(130deg,#fff0d5,#eac39e);color:#442618;box-shadow:0 12px 35px #0004}
  #account-availability .av-plan{font-size:12px;font-weight:600;letter-spacing:.08em;color:#92502b}
  #account-availability .av-price{font-size:46px;font-weight:650;line-height:1.12;letter-spacing:-2px;margin:12px 0 19px;white-space:nowrap}
  #account-availability .av-price small{font-size:12px;font-weight:400;letter-spacing:0;color:#76533a}
  #account-availability .av-quota{border-top:1px solid #623a202a;padding-top:14px;font-size:13px;font-weight:550}
  #account-availability .av-quota small{display:block;font-size:11px;font-weight:400;color:#77533d;margin-top:4px}
  #account-availability .av-status{margin:19px 0 0;display:flex;align-items:center;gap:9px;font-size:14px;font-weight:550;color:#ffd0a4}
  #account-availability .av-status:before{content:'';width:7px;height:7px;flex:none;border-radius:50%;background:#f9bd77;box-shadow:0 0 12px #fbba582f}
  #account-availability[data-stock='available'] .av-status{color:#c6e9b5}#account-availability[data-stock='available'] .av-status:before{background:#a5d492}
  #account-availability[data-stock='sold_out'] .av-status{color:#d7b7ad}#account-availability[data-stock='sold_out'] .av-status:before{background:#b28a7e}
  #account-availability .av-note{font-size:11px;line-height:1.55;color:#baa797;margin:7px 0 0}
  #account-availability .av-updated{font-size:10px;color:#a9927d;margin-top:5px}
  #account-availability .av-actions{display:grid;gap:9px;margin-top:23px}
  #account-availability .av-primary,#account-availability .av-secondary{min-height:50px;padding:13px 17px;border-radius:13px;display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13px;font-weight:600}
  #account-availability .av-primary{color:#392217;background:linear-gradient(110deg,#ffd5aa,#ff9c6b)}#account-availability .av-secondary{border:1px solid #dfb18a39;color:#f0d2b5;background:#ffffff04}
  #account-availability .av-response{font-size:11px;color:#d9c1a9;margin-top:10px;min-height:17px;line-height:1.5}
  #account-availability textarea{width:100%;font:16px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;border:1px solid #ae84595c;border-radius:12px;padding:12px;margin-top:10px;color:#edd8c0;background:#231b17;resize:vertical;min-height:108px}
  .availability-open .floating,.availability-open .tag,.availability-open .slab.front:after{animation-play-state:paused!important}
  @keyframes availability-enter{from{opacity:.5;transform:translateY(18px)}to{opacity:1;transform:none}}
  @media(max-width:640px){#account-availability{position:fixed;inset:auto 0 0;width:100%;max-width:100%;margin:0;max-height:calc(var(--vh,100vh) - max(18px,env(safe-area-inset-top,0px)));border-radius:25px 25px 0 0;padding:23px 22px calc(16px + env(safe-area-inset-bottom,0px))}#account-availability .av-top{margin-bottom:19px}#account-availability h2{font-size:25px}#account-availability .av-price{font-size:43px}#account-availability .av-offer{padding:21px}#account-availability .av-actions{margin-top:18px}#account-availability .av-response{margin-top:9px}}
  @media(max-height:620px){#account-availability{padding-top:17px}#account-availability .av-top{margin-bottom:12px}#account-availability .av-offer{padding:17px}#account-availability .av-price{font-size:36px;margin:7px 0 11px}#account-availability .av-quota{padding-top:10px}#account-availability .av-status{margin-top:13px}#account-availability .av-actions{margin-top:15px;gap:7px}#account-availability .av-primary,#account-availability .av-secondary{min-height:46px}#account-availability h2{font-size:23px}}
  @media(prefers-reduced-motion:reduce){#account-availability{animation:none!important}}
  `;
  document.head.append(style);
  const modal = document.createElement('dialog');
  modal.id = 'account-availability';
  modal.setAttribute('aria-labelledby', 'av-title');
  modal.setAttribute('aria-describedby', 'av-note');
  modal.innerHTML = `
    <div class="av-top"><div><p class="av-eyebrow">A STUDIO / НА МЕСЯЦ</p><h2 id="av-title">Аккаунты Dreamina</h2></div><button type="button" class="av-close" id="av-close" aria-label="Закрыть окно наличия">×</button></div>
    <div class="av-offer"><p class="av-plan">ADVANCED</p><p class="av-price"><span id="av-price"></span> <small>/ месяц</small></p><p class="av-quota"><span id="av-quota"></span><small>Seedance 2.0 / 2.5 · 5 режимов</small></p></div>
    <p class="av-status" id="av-status" role="status" aria-live="polite">Наличие уточняется</p><p class="av-note" id="av-note">Перед оплатой подтвердите наличие у продавца.</p><p class="av-updated" id="av-updated" hidden></p>
    <div class="av-actions"><a class="av-primary" id="av-contact" target="_blank" rel="noopener noreferrer" hidden>Связаться с продавцом <span aria-hidden="true">↗</span></a><button type="button" class="av-primary" id="av-copy">Скопировать запрос <span aria-hidden="true">↗</span></button><button type="button" class="av-secondary" id="av-compare">Сравнить стоимость видео <span aria-hidden="true">→</span></button></div>
    <p class="av-response" id="av-response" role="status" aria-live="polite">Запрос можно отправить продавцу, который дал ссылку.</p><textarea id="av-request" aria-label="Текст запроса продавцу" readonly hidden></textarea>
  `;
  document.body.append(modal);
  const el = id => document.getElementById(id);
  el('av-price').textContent = money.format(offer.price) + ' ₽';
  el('av-quota').textContent = money.format(offer.dreamina) + ' кредит в месяц';
  let controller = null;
  let opening = 0;
  let focusBefore = trigger;
  const stockURL = new URL('./availability.json', document.baseURI);

  // Only an explicit, recently confirmed count can be shown as stock.
  function applyConfig(config) {
    modal.dataset.stock = 'on_request';
    el('av-status').textContent = 'Наличие уточняется';
    el('av-updated').hidden = true;
    el('av-contact').hidden = true;
    el('av-contact').removeAttribute('href');
    el('av-copy').hidden = false;
    if (!config || config.version !== 1) return;
    const entry = config.offers && config.offers['3990'];
    const date = typeof config.updatedAt === 'string' ? Date.parse(config.updatedAt) : NaN;
    const age = Date.now() - date;
    const fresh = Number.isFinite(age) && age >= 0 && age <= 48 * 60 * 60 * 1000;
    if (entry && fresh && Number.isSafeInteger(entry.available) && entry.available >= 0) {
      if (entry.status === 'available' && entry.available > 0) {
        modal.dataset.stock = 'available';
        el('av-status').textContent = 'Свободных аккаунтов: ' + money.format(entry.available);
      } else if (entry.status === 'sold_out' && entry.available === 0) {
        modal.dataset.stock = 'sold_out';
        el('av-status').textContent = 'Сейчас свободных аккаунтов нет';
      }
      if (modal.dataset.stock !== 'on_request') {
        el('av-updated').textContent = 'Подтверждено продавцом: ' + new Date(date).toLocaleString('ru-RU', {day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit'});
        el('av-updated').hidden = false;
      }
    }
    // Do not infer a sales contact from repository owner or personal data.
    if (typeof config.salesContact === 'string') {
      try {
        const url = new URL(config.salesContact);
        const allowed = url.protocol === 'https:' && !url.username && !url.password && !url.port &&
          ((url.hostname === 't.me' && /^\/[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(url.pathname)) ||
           (url.hostname === 'wa.me' && /^\/[1-9][0-9]{6,14}$/.test(url.pathname)));
        if (allowed) {
          el('av-contact').href = url.href;
          el('av-contact').hidden = false;
          el('av-copy').hidden = true;
          el('av-response').textContent = 'Наличие и передачу доступа подтверждает продавец.';
        }
      } catch (_) { /* Invalid contact is kept hidden. */ }
    }
  }
  async function refresh(ticket) {
    controller = new AbortController();
    const currentController = controller;
    const timeout = setTimeout(() => currentController.abort(), 7000);
    try {
      const response = await fetch(stockURL, {cache:'no-store', credentials:'omit', signal:currentController.signal});
      if (!response.ok) throw new Error('Availability could not be loaded');
      const config = await response.json();
      if (ticket === opening && modal.open) applyConfig(config);
    } catch (_) {
      // Network failure does not mean sold out and never invents stock.
      if (ticket === opening && modal.open) applyConfig(null);
    } finally { clearTimeout(timeout); }
  }
  function openAvailability(event) {
    if (event) event.preventDefault();
    if (modal.open) return;
    if (typeof modal.showModal !== 'function') { location.hash = 'calculator'; return; }
    focusBefore = document.activeElement;
    el('av-request').hidden = true;
    el('av-response').textContent = 'Запрос можно отправить продавцу, который дал ссылку.';
    applyConfig(null);
    modal.showModal();
    document.documentElement.classList.add('availability-open');
    el('av-close').focus({preventScroll:true});
    refresh(++opening);
  }
  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.setAttribute('aria-controls', modal.id);
  trigger.addEventListener('click', openAvailability);
  el('av-close').addEventListener('click', () => modal.close());
  modal.addEventListener('close', () => {
    ++opening;
    if (controller) controller.abort();
    document.documentElement.classList.remove('availability-open');
    if (focusBefore instanceof HTMLElement && focusBefore.isConnected) focusBefore.focus({preventScroll:true});
  });
  modal.addEventListener('click', event => {
    if (event.target !== modal) return;
    const r = modal.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) modal.close();
  });
  el('av-compare').addEventListener('click', () => { modal.close(); location.hash = 'calculator'; });
  el('av-copy').addEventListener('click', async () => {
    const text = 'Здравствуйте! Интересует аккаунт Dreamina Advanced на месяц за ' + money.format(offer.price) + ' ₽ с ' + money.format(offer.dreamina) + ' кредитом. Подскажите наличие и условия получения доступа.';
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Manual copy required');
      await navigator.clipboard.writeText(text);
      el('av-response').textContent = 'Запрос скопирован. Отправьте его продавцу. Сайт его не отправляет.';
    } catch (_) {
      el('av-request').value = text;
      el('av-request').hidden = false;
      el('av-request').focus();
      el('av-request').select();
      el('av-response').textContent = 'Скопируйте текст ниже и отправьте продавцу.';
    }
  });
})();
