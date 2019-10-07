(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f(require('react')):typeof define==='function'&&define.amd?define(['react'],f):(g=g||self,g.component=f(g.React));}(this,function(React){'use strict';React=React&&React.hasOwnProperty('default')?React['default']:React;var Notebook = props => {
  const {
    define,
    runtime = new Runtime(),
    targets,
    redefine = {},
    observers = {}
  } = props;

  const ref = React.useRef(null);
  const moduleRef = React.useRef(null);

  React.useEffect(() => {
    let observer;

    if (targets) {
      const map = new Map();
      targets.map(target => {
        const div = document.createElement('div');
        ref.current.appendChild(div);
        map.set(target, div);
      });
      observer = name => {
        if (map.has(name)) return new Inspector(map.get(name));
      };
    } else {
      observer = name => {
        return new Inspector(
          ref.current.appendChild(document.createElement('div'))
        );
      };
    }

    moduleRef.current = runtime.module(define, name => {
      if (observers[name]) return observers[name];
      return observer(name);
    });
    return () => {
      runtime.dispose();
    };
  }, [...Object.keys(observers)]);

  React.useEffect(() => {
    Object.keys(redefine).map(name => {
      moduleRef.current.redefine(name, [], redefine[name]);
    });
  }, [Object.keys(redefine)]);

  return React.createElement('div', { ref });
};return Notebook;}));