var join = require('path').join;
var nixt = require('nixt');
var bin = join(__dirname, '..', '..', 'bin');

t('--version', function(done) {
  cli()
  .stdout(require('../../package.json').version)
  .run('--version')
  .code(0)
  .end(done);
});

t('--help', function(done) {
  cli()
  .stdout(/Usage: hydro \[debug\] \[options\]/)
  .run('--help')
  .code(0)
  .end(done);
});

function cli() {
  return nixt({ newlines: false }).cwd(bin).base('./hydro ');
}
