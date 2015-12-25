const allfiles = require.context('../src/', true, /\.js$/);

allfiles.keys().forEach(allfiles);
