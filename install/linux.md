---
sidebar_label: Linux
---

# Installing RGBDS on Linux

## Using your package manager

Check if RGBDS is available in your distribution's software center or package manager repositories.
If a satisfactory version is available, it is a good idea to install from there.

## Using our pre-built binaries

1. Go the [latest release](https://github.com/gbdev/rgbds/releases/latest) (or pick [a specific version](https://github.com/gbdev/rgbds/releases))
2. Under "Assets" at the bottom, download <code>rgbds-<var>&lt;version&gt;</var>-linux-x86_64.tar.xz</code> (for example, version 0.7.0 would have `rgbds-0.7.0-linux-x86_64.tar.xz`)
3. Extract the .tar.xz file into a new directory, and run `install.sh` as root in that directory. E.g.:
   ```console
   % mkdir rgbds
   % tar xf rgbds-0.7.0-linux-x86_64.tar.xz -C rgbds
   % cd rgbds
   % sudo ./install.sh
   ```
4. Check that RGBDS was correctly installed by running `rgbasm -V`.
   It should print out the version number you installed!

---

If none of these options are suitable to you, [build RGBDS from source](source.md).
