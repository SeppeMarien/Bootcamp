export default {
  getMails() {
    // eslint-disable-next-line no-console
    console.log('>>>>>> Access database to get mails');
    return [
      { id: 123, to: 'peter.cosemans@gmail.com', body: 'aaaa...' },
      { id: 123, to: 'wim.vanhoye@euri.com', body: 'bbb...' },
    ];
  },
};
