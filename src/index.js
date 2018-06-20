import h from 'hyperscript';
import hh from 'hyperscript-helpers';

const {
  div,
  button
}  = hh(h);

const tempModel = 100000;

let view = (model) => {
  return div([
    div({className: 'mv2'}, `Count: ${model}`),
    button({className: 'pv1 ph2 mr2'}, `+`),
    button({className: 'pv1 ph2'}, `-`)
  ]);
}

const node = document.getElementById('app');

node.appendChild(view(tempModel));
