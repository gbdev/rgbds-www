
# Installing RGBDS on macOS

RGBDS is available on [Homebrew](https://brew.sh) as the [`rgbds` package](https://formulae.brew.sh/formula/rgbds).

```bash
brew install rgbds
```

If not, and you want to install version v0.5.2 or newer, you can download our pre-built binaries.

1. Select [the version you want](/docs/).
2. Under "GitHub links", follow the "release page" link.
3. Scroll down to "Assets".
4. Download `rgbds-<version>-macos-x86-64.zip` (so, for example, `rgbds-0.7.0-macos-x86-64.zip`)
5. Extract that file to a new directory, go into it, and run `install.sh` as root. For example:
   ```console
   % unzip -d rgbds rgbds-0.7.0-macos-x86-64.zip
   % cd rgbds
   % sudo ./install.sh
   ```
6. Check that RGBDS was correctly installed by running `rgbasm -V`!

---

If none of these options are available to you, you will have to [build RGBDS from source](source).

---

You can also install the [`master` branch](/docs/master) by passing the `--HEAD` flag:

```bash
brew install rgbds --HEAD
```
