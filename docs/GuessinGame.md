---
id: GuessingGame
title: The Guessing game
sidebar_label: Variables and IO
description: A simple game like program to demonstrate the concepts of variable in Rust 
---

## Variables

Unlike a lot of programing languages like Javascript or Python Rust is a statically typed language

Avariable is declared as follows:


```rust
let foo = bar
```
If many are familiar with JavaScript this looks like a mutable variable but it is not this is anon mutable constant
This line creates a new variable named ```foo``` and binds it to the value of the ```bar``` variable. In Rust, variables are immutable by default

:::note
Note: The ```//``` syntax starts a comment that continues until the end of the line. Rust ignores everything in comments
:::

So let kick on with a program

```rust
use std::io;

fn main() {
    println!("Hello, world!");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("failed to read the line");
    println!("your guess is {}", guess);
}


```
