var buildify = require('buildify');

buildify()
  .concat(['jquery.autosize.js','jquery.tagsinput.js','marked.js','StaticVariables.js', 'models.js','helpers.js','drafts.js','remarked.js']).wrap('base.js').save('./index.js')
.uglify().save('./index.min.js');
  

