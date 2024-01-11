
# Installing RGBDS on Linux

First, please check if Linux is available in your distribution's software center / respositories.
If a satisfactory version is available, it is a good idea to install from there.

If not, and you want a version no earlier than v0.6.1, you can get pre-built binaries.

1. Select [the version you want](/docs/).
2. Under "GitHub links", follow the "release page" link.
3. Scroll down to "Assets".
4. Download `rgbds-<version>-linux-x86_64.tar.xz` (so, for example, `rgbds-0.7.0-linux-x86_64.tar.xz`)
5. Extract that file to a new directory, go into it, and run `install.sh` as root. For example:
   ```console
   % mkdir rgbds
   % tar xf rgbds-0.7.0-linux-x86_64.tar.xz
   % cd rgbds
   % sudo ./install.sh
   ```
6. Check that RGBDS was correctly installed by running `rgbasm -V`!

---

If none of these options are available to you, you will have to [build RGBDS from source](source).
