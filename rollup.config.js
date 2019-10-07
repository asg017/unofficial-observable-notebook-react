//import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  external: ['react'],
  output: 
  {
    globals: {
      react: 'React'
    },
    extend: true,
    compact: true,
    indent: false,
    //file: "build/index.umd.js",
    //format: "umd",
    file: "build/index.iife.js",
    format: "iife",
    name: "component",
  },
  plugins: [
    //peerDepsExternal(),
  ],
};
