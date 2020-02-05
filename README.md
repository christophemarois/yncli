# yncli

CLI utility that asks a y/n prompt and exits with the corresponding status code. Uses [prompts](https://github.com/terkelg/prompts).

Useful for preventing destructive actions from happening unintentionally.

### Install

```sh
npm install --save yncli ## for use in a project
npm install --global yncli ## for use globally
```

### Usage

```sh
yncli && echo 1 # echos 1 if user answered positively
yncli 'This will launch the rocket. Confirm?' && ./launch
```
