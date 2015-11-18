const allfiles = require.context('../lib/', true, /\.js$/);

allfiles.keys().forEach(allfiles);
