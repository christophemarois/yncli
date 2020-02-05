# yncli [![npm](https://img.shields.io/npm/v/@christophemarois/yncli.svg?style=flat)](https://www.npmjs.org/package/@christophemarois/yncli)

CLI utility that asks a y/n prompt and exits with the corresponding status code. Uses [prompts](https://github.com/terkelg/prompts).

Useful for preventing destructive actions from happening unintentionally.

### Install

```sh
npm install --save @christophemarois/yncli ## for use in a project
npm install --global @christophemarois/yncli ## for use globally
```

### Usage

```sh
yn && echo 1 # echos 1 if user answered positively
yn 'This will launch the rocket. Confirm?' && ./launch
```
