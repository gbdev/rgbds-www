
# Installing RGBDS on macOS

RGBDS is available on [Homebrew](https://brew.sh) as the [`rgbds` package](https://formulae.brew.sh/formula/rgbds).

```bash
brew install rgbds
```

If not, and you want to install version v0.5.2 or newer, you can download our pre-built binaries.

1. Select [the version you want](/docs/).
2. Under the "GitHub links" heading, follow the "release page" link.
3. Scroll down to "Assets".
4. Download <code>rgbds-<var>&lt;version&gt;</var>-macos-x86-64.zip</code> (for example, version 0.7.0 would have `rgbds-0.7.0-macos-x86-64.zip`).
5. Extract the .zip file into a new directory, and run `install.sh` as root inside that directory.
   For example, you can do that with these Console commands:
   ```console
   % unzip -d rgbds rgbds-0.7.0-macos-x86-64.zip
   % cd rgbds
   % sudo ./install.sh
   ```
6. Check that RGBDS was correctly installed by running `rgbasm -V`.
   It should print out the version number you installed!

---

If none of these options are available to you, you will have to [build RGBDS from source](source).
