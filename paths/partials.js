const path = require('path');

const DIR_COMPONENTS = path.join(__dirname, '../src/components/');
const DIR_CORE = path.join(DIR_COMPONENTS, './core/');
const DIR_TEST_PAGES = path.join(__dirname, '../test-pages/pages/');

module.exports.pathsArray = [
    DIR_COMPONENTS + 'MainPage/Post',
    DIR_COMPONENTS + 'MainPage/SlideCarousel',
    DIR_COMPONENTS + 'MainPage/Main',
    DIR_COMPONENTS + 'MainPage/LangMenu',
    DIR_COMPONENTS + 'FullPost',
    DIR_CORE + 'Header',
    DIR_CORE + 'Footer',
    DIR_CORE + 'svg',
    DIR_TEST_PAGES,
];
