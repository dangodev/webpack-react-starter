![Dependencies status][status]
![devDependencies status][status-dev]

# webpack-react-starter

👩‍🔬 Boilerplate for React and React Router 🚀 powered by webpack.

This is the base from which I start all new projects. Ideal for people who like
Create React App but need tighter control over Babel and Jest, or want to add
SSR without drowning in configuration.

This is the result of years of managing webpack configs, and I can start any
React project imaginable with this base.

# Concepts

- Dynamic routing via [react-router](https://github.com/ReactTraining/react-router)
- Code Splitting via [react-loadable](https://github.com/thejameskyle/react-loadable)
- [package.json hack](https://codeburst.io/ab-using-package-json-over-index-js-8a7af1cd6550) to prevent `index.js`-es everywhere

# Setup

```
npm i
```

# Development

```
npm run start
```

Dev server is available at `localhost:8080`. Edit `webpack.dev.js` to customize.

# Building

```
npm run build
```

Edit `webpack.prod.js` to customize.

[status]: https://david-dm.org/dangodev/optimize-image-loader/status.svg
[status-dev]: https://david-dm.org/dangodev/optimize-image-loader/dev-status.svg
