
import {app} from 'hyperapp';
import view from './app/view';
import state, {actions} from './app/store';
import './index.css';

app(state, actions, view, document.body);
