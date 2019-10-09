import resolve from 'rollup-plugin-node-resolve';

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
    file: "build/index.umd.js",
    format: "umd",
    name: "component",
  },
  plugins: [
    resolve()
  ],
};
