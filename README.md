## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

Then you can run it by:

```sh
cd gatsby-example-site
npm install
gatsby develop
```

### Personalization

Edit `config.js` to put up your details

```javascript
module.exports = {
  siteTitle: 'Gatsby Identity Website', // <title>
  ...
  authorName: 'Chervin Tanilon',
  heading: 'Software Developer',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/chervintani',
    }
    ...
  ],
};

```
### Contribution

Suggestions and PRs are welcome!

Please create issue or open PR request for contribution.

