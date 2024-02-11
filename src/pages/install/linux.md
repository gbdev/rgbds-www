
# Installing RGBDS on Linux

First, please check if RGBDS is available in your distribution's software center or package manager repositories.
If a satisfactory version is available, it is a good idea to install from there.

If not, and you want to install version v0.6.1 or newer, you can download our pre-built binaries.

1. Select [the version you want](/docs/).
2. Under the "GitHub links" heading, follow the "release page" link.
3. Scroll down to "Assets".
4. Download <code>rgbds-<var>&lt;version&gt;</var>-linux-x86_64.tar.xz</code> (for example, version 0.7.0 would have `rgbds-0.7.0-linux-x86_64.tar.xz`)
5. Extract the .tar.xz file into a new directory, and run `install.sh` as root in that directory. For example, you can do that with these shell commands:
   ```console
   % mkdir rgbds
   % tar xf rgbds-0.7.0-linux-x86_64.tar.xz -C rgbds
   % cd rgbds
   % sudo ./install.sh
   ```
6. Check that RGBDS was correctly installed by running `rgbasm -V`.
   It should print out the version number you installed!

---

If none of these options are available to you, you will have to [build RGBDS from source](source).
