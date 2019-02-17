import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import loadingProgress from './loadingProgress';
import menu from './menu';
import { reducer as nextArrowReducer } from 'components/NextArrow/NextArrow';
import { reducer as previousArrowReducer } from 'components/PreviousArrow/PreviousArrow';
import { reducer as projectsReducer } from 'containers/Projects/Projects';
import { reducer as aboutMeReducer } from 'containers/AboutMe/AboutMe';
import { reducer as scrollReducer } from 'scroll';
import audiosReducer from './audios';
import loadingStatus from './loadingStatus';

export default combineReducers({ //Component container reducer has been removed
  routing: routerReducer,
  form: formReducer,
  loadingProgress,
  menu,
  loadingStatus,
  audios: audiosReducer,
  scroll: scrollReducer,
  nextArrow: nextArrowReducer,
  previousArrow: previousArrowReducer,
  projects: projectsReducer,
  aboutMe: aboutMeReducer,
});
