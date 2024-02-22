---
sidebar_label: macOS
---

# Installing RGBDS on macOS

## Using the Homebrew package manager

:::info Availability

This is not advisable for users on older macOS versions, as binaries ("bottles") are only available for [recent macOS major releases](https://formulae.brew.sh/formula/rgbds).
Older macOS systems have been reported to compile for several days, but only when using Homebrew.

:::

RGBDS is available on [Homebrew](https://brew.sh) as the [`rgbds` package](https://formulae.brew.sh/formula/rgbds).

```bash
brew install rgbds
```

Then you will be able to update RGBDS at any time by simply running `brew update` then `brew upgrade`!

:::tip

You can also install the [`master` branch](/docs/master) by passing the `--HEAD` flag:
```bash
brew install rgbds --HEAD
```

:::

## Using our pre-built binaries

:::info Availability

This is only available for RGBDS v0.5.2 or newer.

:::

1. Go the [latest release](https://github.com/gbdev/rgbds/releases/latest) (or pick a specific version from [the list](https://github.com/gbdev/rgbds/releases))
2. Under "Assets" at the bottom, download <code>rgbds-<var>&lt;version&gt;</var>-macos-x86-64.zip</code> (for example, version 0.7.0 would have `rgbds-0.7.0-macos-x86-64.zip`).
3. Extract the .zip file into a new directory, and run `install.sh` as root inside that directory.
   For example, you can do that with these Console commands:
   ```console
   % unzip -d rgbds rgbds-0.7.0-macos-x86-64.zip
   % cd rgbds
   % sudo ./install.sh
   ```
4. Check that RGBDS was correctly installed by running `rgbasm -V`.
   It should print out the version number you installed!

---

If none of these options are available to you, you will have to [build RGBDS from source](source.md).
