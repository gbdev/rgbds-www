---
sidebar_label: macOS
---

# Installing RGBDS on macOS

## Using the Homebrew package manager

On recent macOS major releases[^1], RGBDS is available on [Homebrew](https://brew.sh) as the [`rgbds` package](https://formulae.brew.sh/formula/rgbds).

```bash
brew install rgbds
```

Then you will be able to update RGBDS at any time by simply running `brew update` then `brew upgrade`!

You can also install the [`master` branch](/docs/master) by passing the `--HEAD` flag:
```bash
brew install rgbds --HEAD
```

## Using our pre-built binaries

1. Download the [latest release of `rgbds-macos.zip`](https://github.com/gbdev/rgbds/releases/latest/download/rgbds-macos.zip). (Or pick [a specific version](https://github.com/gbdev/rgbds/releases) and download it under "Assets" at the bottom.)

3. Extract the downloaded `rgbds-macos.zip` file into a new directory, and run `install.sh` as root inside that directory.
   For example, you can do that with these Console commands:
   ```console
   % unzip -d rgbds rgbds-macos.zip
   % cd rgbds
   % sudo ./install.sh
   ```
4. Check that RGBDS was correctly installed by running `rgbasm -V`.
   It should print out the version number you installed!

---

If none of these options are suitable to you, [build RGBDS from source](source.md).

[^1]: Older macOS systems have been reported to compile for several days with Homebrew.
