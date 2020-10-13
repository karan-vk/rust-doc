---
id: doc1
title: Get Started
sidebar_label: Getting Started
slug: /
---

## Introduction

<!-- You can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/). -->

### The language

**Rust** is a multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++, and provides memory safety without using garbage collection, but instead through the use of a borrow checking system.

Rust was originally designed by Graydon Hoare at Mozilla Research, with contributions from Dave Herman, Brendan Eich, and others. The designers refined the language while writing the Servo layout or browser engine, and the Rust compiler. It has gained increasing use in industry, and Microsoft has been experimenting with the language for secure and safety-critical software components.

Rust has been named the "most loved programming language" in the Stack Overflow Developer Survey every year since 2016.

## Installation

### Using rustup (Recommended)

#### For Windows

To start using Rust, download the installer, then run the program and follow the onscreen instructions. You may need to install the Visual Studio C++ Build tools when prompted to do so. If you are not on Windows see "Other Installation Methods".

Download rustup for [(32Bit)](https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe) [(64Bit)](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe)

##### For WSL

If you’re a Windows Subsystem for Linux user run the following in your terminal, then follow the on-screen instructions to install Rust.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### Toolchain management with `rustup`

Rust is installed and managed by the `rustup` tool. Rust has a 6-week rapid release process and supports a great number of platforms, so there are many builds of Rust available at any time. `rustup` manages these builds in a consistent way on every platform that Rust supports, enabling installation of Rust from the beta and nightly release channels as well as support for additional cross-compilation targets.

If you've installed rustup in the past, you can update your installation by running rustup update.

For more information see the rustup [documentation](https://github.com/rust-lang/rustup.rs/blob/master/README.md).

##### Configuring the `PATH` environment variable

In the Rust development environment, all tools are installed to the `~/.cargo/bin` directory, and this is where you will find the Rust toolchain, including `rustc`, `cargo`, and `rustup`.

Accordingly, it is customary for Rust developers to include this directory in their `PATH` environment variable. During installation `rustup` will attempt to configure the `PATH`. Because of differences between platforms, command shells, and bugs in `rustup`, the modifications to `PATH` may not take effect until the console is restarted, or the user is logged out, or it may not succeed at all.

If, after installation, running `rustc --version` in the console fails, this is the most likely reason.
