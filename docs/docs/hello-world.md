---
id: hello-world
title: Hello World
---

## Installation

To get started you need the Rust package manager `cargo`. If you don't have it, you can install Rust and Cargo using:

```bash
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Next, clone the Synth repository:

```bash
$ git clone https://github.com/openquery-io/synth
```

Finally, navigate to the `synth` source folder and run:

```bash
$ cd synth && cargo install
```

You should then be able to interact with the `synth` cli.

Synth uses the Python [Faker](https://pypi.org/project/Faker/) library to generate different flavours of dummy data. To install Faker, run:

```bash
$ pip3 install Faker
```

## Hello World

After install the Synth cli, the next step is to create a `workspace`. To do this create a directory and run `synth init`.

```bash
$ mkdir my_synth_workspace && cd my_synth_workspace && synth init
```

This will create a `.synth` subdirectory in `my_synth_workspace`. Currently, this directory acts as simply an anchor to tell Synth that this is a workspace.

Next we create a namespace with a dummy collection:

```bash
$ mkdir my_app 
```
And then a file, `my_app/dummy.json` with the following content:

```json
{
    "type": "array",
    "length": {
        "type": "number",
        "subtype": "u64",
        "constant": 1
    },
   "content": {
        "type": "string",
        "pattern": "Hello world!"
    }
}
```

Finally, run `synth generate my_app/` to get a bunch of hello worlds!

## Running Synth in Daemon mode

Synth comes can be run in Daemon mode using the subcommand `synth-serve`. 

Synth exposes an HTTP RESTful API on port `8182` and create an internal state which is managed by a vesion controlled index.

It is preferable to use Daemon mode in the context of a collaborating team and comes with this handy [Python client](https://openquery-io.github.io/synthpy/)

More information on Daemon mode can be found [here](cli.md). 

## Examples

For more complex examples, see the [examples section](examples/bank.md).
