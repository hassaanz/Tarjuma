const logger = (log, ctx='main') => {
  console.group(`Tarjuma - ${ctx}`);
  console.log(log);
  console.groupEnd();
};

const Tarjuma = (opts) => () => {
  const window = window || {};
  window.tarjuma = {options: opts};
  window.tarjuma.log = logger;
};
