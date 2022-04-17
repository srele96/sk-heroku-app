// Demonstrate React usage alongside Pug
(function () {
  var e = React.createElement;

  /**
   * Creates form that handles creation of items.
   *
   * Doesn't send any requests at the moment.
   * */
  function Items() {
    return e(
      React.Fragment,
      null,
      e('h2', null, 'Create Item'),
      e(
        'form',
        { method: '', formAction: '' },
        e(
          'div',
          null,
          e('label', { htmlFor: 'name' }, 'name'),
          e('div', null, e('input', { type: 'text', name: 'name' }))
        ),
        e(
          'div',
          null,
          e('label', { htmlFor: 'price' }, 'price'),
          e('div', null, e('input', { type: 'number', name: 'price' }))
        ),
        e(
          'div',
          null,
          e('label', { htmlFor: 'quantity' }, 'quantity'),
          e('div', null, e('input', { type: 'number', name: 'quantity' }))
        ),
        e(
          'div',
          null,
          e('label', { htmlFor: 'description' }, 'description'),
          e('div', null, e('textarea', { name: 'description' }))
        ),
        e('div', null, e('input', { type: 'submit', value: 'Create item' }))
      )
    );
  }

  var root = ReactDOM.createRoot(document.querySelector('#ingredients'));
  root.render(e(Items));
})();
