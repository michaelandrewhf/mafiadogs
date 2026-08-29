(() => {
  const schedules = {
    marmita: { opens: 11 * 60, closes: 15 * 60, label: '11h' },
    burger: { opens: 19 * 60, closes: 23 * 60 + 30, label: '19h' },
    pizza: { opens: 18 * 60, closes: 23 * 60 + 30, label: '18h' },
  };

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

  const isOpen = ({ opens, closes }, minutes) => (
    opens < closes
      ? minutes >= opens && minutes < closes
      : minutes >= opens || minutes < closes
  );

  const updateAvailability = () => {
    const now = minutesInSaoPaulo();

    document.querySelectorAll('[data-store]').forEach((card) => {
      const schedule = schedules[card.dataset.store];
      if (!schedule) return;

      const open = isOpen(schedule, now);
      const status = card.querySelector('[data-status]');

      card.classList.toggle('closed', !open);
      card.classList.toggle('open', open);

      status.textContent = open
        ? 'Aberto agora'
        : `Fechado • abre às ${schedule.label}`;

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
