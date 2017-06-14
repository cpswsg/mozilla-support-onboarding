# Mozilla Support Onboarding

This repo contains a prototype for the get involved pages of [Mozilla Support](https://support.mozilla.org), which aim to provide a better experience for new contributors on how to start contributing to Knowledge Base, L10n, Support Forum and Social Support.

# Get started

### Dependencies

To get a local version of the site running, you'll need to have installed on your local machine:

* [git](https://git-scm.com/)
* [node](https://nodejs.org/)

### Clone

In order to contribute to this project, you'll need to **create your own fork** of it and make pull-requests against our master branch.

Clone from your own fork or from the original:

```
git clone git@github.com:cynthiapereira/mozilla-support-onboarding.git
cd mozilla-support-onboarding
```

### Build and Develop

To start developing, all you need to do is run the following in the `mozilla-support-onboarding` directory you just created:

```
npm install
npm start
```

The first command installs all the dependencies for Node.js to do its thing, and the second command runs a compile for the server and client code, while also starting a local server on [http://localhost:8001](http://localhost:8001), with the compiles running in watch mode, so that any changes you make to files result in the updated code getting bundled in.


## License
Licensed under the Mozilla Public License 2.0. For details, see the [LICENSE](LICENSE) file.
