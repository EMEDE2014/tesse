
import 'core-js/stable';
import 'regenerator-runtime';



import FilesExist from './modules/VerifyIsFile';

const files = new FilesExist('.verifyFiles');
files.init();