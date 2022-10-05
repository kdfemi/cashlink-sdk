[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Cashlink-sdk

> Write a project description

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Cashlink-sdk](#cashlink-sdk)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
    - [Running the tests](#running-the-tests)
    - [Building a distribution version](#building-a-distribution-version)
  - [API](#api)
    - [init](#init)
      - [Options](#options)
    - [transact](#transact)
      - [Options](#options-1)
    - [transactExternal](#transactexternal)
      - [Options](#options-2)
    - [profile](#profile)
      - [Options](#options-3)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Built With](#built-with)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/ORG/PROJECT.git
$ cd PROJECT
```

To install and set up the library, run:

```sh
$ npm install -S cashlink-sdk
```

Or if you prefer using Yarn:

```sh
$ yarn add cashlink-sdk
```

## Usage

### Serving the app

```sh
$ npm build:staging
```

### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `lib/` folder

## API

### init

```js
init(isDev: boolean)
```

`init` method should be called before calling other methods, the method should be called only ones.

#### Options

`isDev`

| Type | Default value |
| --- | --- |
| boolean | false |

If present, dev environment is used

Example:

```tsx
import CashlinkSdk from 'cashlink-sdk';

const MyComponent: React.FC = () => {
  useEffect(() => {
    CashlinkSdk.init();
  }, []);


  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
    </div>
  );
};
```

### transact

```js
transact(props: InitTransaction)
```

Open the cashlink payment view

```tsx
const ChuckNorrisJokes: React.FC = () => {


  const onOpenP2p = () => {
    // TOKEN is gotten from cashlink 
    CashlinkSdk.transact({amount: 0, orderType: 'DEPOSIT', token: 'TOKEN'}, true)
  };

  return (
    <div className="Comments">
      <p>Pay money</p>
      <button disabled={loading} onClick={onOpenP2p}>
        Next Joke
      </button>
    </div>
  );
};
```

#### Options

`props`

| Type | Default value |
| --- | --- |
| InitTransaction | {amount: 0} |

```tsx
interface InitTransaction {
    amount?: number; 
    orderType: OrderType;
    token: string;
}

type OrderType =  'WITHDRAWAL' | 'DEPOSIT';
```

The property passed to cashlink modal

### transactExternal

```js
transactExternal(props: ExternInitTransaction)
```

Open the cashlink payment view for 3rd party integration

```tsx
const ChuckNorrisJokes: React.FC = () => {


  const onOpenP2p = () => {
    // TOKEN is gotten from cashlink 
    CashlinkSdk.transactExternal({requestId: '', requestId: '', token: ''}, true)
  };

  return (
    <div className="Comments">
      <p>Pay money</p>
      <button disabled={loading} onClick={onOpenP2p}>
        Next Joke
      </button>
    </div>
  );
};
```

#### Options

`props`

| Type | Default value |
| --- | --- |
| ExternInitTransaction |  |

```tsx
export interface ExternInitTransaction {
    token: string;
    orderId: string;
    chatToken: string;
}
```

The property passed to cashlink modal

### profile

```js
profile(props: IProfile)
```

Open the cashlink profile

```tsx
const ChuckNorrisJokes: React.FC = () => {


  const onOpenP2p = () => {
    // TOKEN is gotten from cashlink 
    CashlinkSdk.profile({token: ''})
  };

  return (
    <div className="Comments">
      <p>Pay money</p>
      <button disabled={loading} onClick={onOpenP2p}>
        Next Joke
      </button>
    </div>
  );
};
```

#### Options

`props`

| Type | Default value |
| --- | --- |
| IProfile |  |

```tsx
interface IProfile {
    token: string;
}
```

The property passed to cashlink modal

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

TODO: Write credits

## Built With

* Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/kdfemi/cashlink-sdk/tags).

## Authors

* **Kolade Femi** - *All work on lowkey* - [devfemi](https://github.com/kdfemi)

See also the list of [contributors](https://github.com/kdfemi/cashlink-sdk/contributors) who participated in this project.

## License

[ISC License](https://andreasonny.mit-license.org/2019) © Andrea SonnY
