(() => {
  const minutesInSaoPaulo = () => {
    const parts = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(new Date());

    const hour = Number(parts.find((part) => part.type === 'hour').value);
    const minute = Number(parts.find((part) => part.type === 'minute').value);

    return hour * 60 + minute;
  };

  const isOpen = (schedule, minutes) => (
    schedule === 'lunch'
      ? minutes >= 540 && minutes < 960
      : minutes >= 1020 || minutes < 60
  );

  const updateAvailability = () => {
    const now = minutesInSaoPaulo();

    document.querySelectorAll('[data-schedule]').forEach((card) => {
      const open = isOpen(card.dataset.schedule, now);
      const status = card.querySelector('[data-status]');

      card.classList.toggle('closed', !open);
      card.classList.toggle('open', open);

      status.textContent = open
        ? 'Aberto agora'
        : card.dataset.store === 'marmita'
          ? 'Fechado • abre às 09h'
          : 'Fechado • abre às 17h';

      card.querySelectorAll('[data-order]').forEach((link) => {
        if (!link.dataset.url) {
          link.dataset.url = link.href;
        }

        if (open) {
          link.href = link.dataset.url;
          link.removeAttribute('aria-disabled');
        } else {
          link.removeAttribute('href');
          link.setAttribute('aria-disabled', 'true');
        }
      });
    });
  };

  updateAvailability();
  setInterval(updateAvailability, 60000);
})();
