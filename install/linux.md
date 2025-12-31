---
sidebar_label: Linux
---

# Installing RGBDS on Linux

## Using your package manager

Check if RGBDS is available in your distribution's software center or package manager repositories.
If a satisfactory version is available, it is a good idea to install from there.

## Using our pre-built binaries

1. Download the [latest release of `rgbds-linux-x86_64.tar.xz`](https://github.com/gbdev/rgbds/releases/latest/download/rgbds-linux-x86_64.tar.xz).
   (Or pick [a specific version](https://github.com/gbdev/rgbds/releases) and download it under "Assets" at the bottom.)
2. Extract the downloaded `rgbds-linux-x86_64.tar.xz` file into a new directory, and run `install.sh` as root in that directory.
   For example, you can do that with these shell commands:
   ```bash
   mkdir rgbds
   tar xf rgbds-linux-x86_64.tar.xz -C rgbds
   cd rgbds
   sudo ./install.sh
   ```
3. Check that RGBDS was correctly installed by running `rgbasm -V`.
   It should print out the version number you installed!

---

If none of these options are suitable to you, [build RGBDS from source](source.md).
