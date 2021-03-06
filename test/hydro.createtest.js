var hydro = new Hydro;
var fn = function(){};

t('test creation without meta', function() {
  var a = hydro.createTest('foo');
  var b = hydro.createTest('foo', fn);

  assert(a.title === 'foo');
  assert(b.title === 'foo');

  assert(a.fn === null);
  assert(b.fn === fn);
});

t('test creation with meta and without body', function() {
  var test = hydro.createTest('foo', 'bar', 'baz');

  assert(test.title === 'foo');
  assert(test.meta[0] === 'bar');
  assert(test.meta[1] === 'baz');
});

t('test creation with meta and with body', function() {
  var test = hydro.createTest('foo', 'bar', 'baz', fn);

  assert(test.title === 'foo');
  assert(test.fn === fn);
  assert(test.meta[0] === 'bar');
  assert(test.meta[1] === 'baz');
});

t('setting test timeout', function() {
  hydro.set('timeout', 42);
  var test = hydro.createTest('foo', 'bar', 'baz', fn);
  assert(test._timeout === 42);
});
