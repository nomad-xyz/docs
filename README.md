# Nomad Docs


## Development

- You will need `docusaurus` and `node 16` to develop and test locally the documentation website
- [Install Docusaurus](https://docusaurus.io/docs/installation)
- `git clone` the repository locally
- Run `yarn` or `npm install` from inside the repository to install all dependencies
- `yarn start`: Will start a local dev server that will automatically reload with every change to the source code
- Please use named or forked branches. All changes should be PRed to `dev` and if everything works as expected, only then `dev` should be merged into `main`

## Deployment

- The docs are automatically deployed from the github repo via Netlify
    - `main` is deployed to `docs.nomad.xyz`
    - `dev` is deployed to `dev.docs.nomad.xyz`

## License

Apache License 2.0
