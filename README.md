# LANChat

Web app to chat with others on your local network. Built using Go and React.

# Requirements

For easy usage, this app requires:

- One Linux or Mac Device (WSL is untested, though you're welcome to try)
  - The `hostname` tool must be installed (installed on most Linux and Mac
    systems by default)
- Git ([Install here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))
- Docker ([Install here](https://docs.docker.com/get-docker/))
- Docker Compose
  - Mac: comes with Docker Desktop by default, no installation needed.
  - Linux: you may have to install it manually. Refer to [this
    guide](https://docs.docker.com/compose/install/compose-plugin/#installing-compose-on-linux-systems)
    for details.

# Usage

Since LANChat runs on your local network, it requires **one Linux or Mac
device** on which it needs to be **run**.

_Once LANChat is running_, the app itself can be used from **any** device by
visiting the URL shown in the terminal after the app starts succesfully (see
Build and Run section below). Note that any device you use the app from **must
be on the same network.**

# Build and Run

## One Time Setup

To set up this app, you must **open a new terminal** on your Linux/Mac device
and **clone this repository**:

```
git clone https://github.com/pranavrao145/lanchat.git
```

Then, run the setup for the app by executing the following command in the
terminal:

```
make setup
```

## To Run Each Time

To run this app each time, you must **open a new terminal** and **change into
the directory** where LANChat resides:

```
cd lanchat
```

Run this command to **build and run** the app:

```
make all
```

**NOTE:** the first time you run this, it can take a while to get set everything
set up. Subsequent runs, however, will be much faster.

Once you see the message that says _LANChat started succesfully_, You can now
visit the URL shown on the terminal on ANY device on the network, and you
will be able to use the app.

## To Stop Running

When you are done using the app, run the following command to shut LANChat down:

```
make stop
```
