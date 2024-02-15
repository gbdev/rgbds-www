
<hgroup>

← [Back to install instructions](/install)

# Installing RGBDS on macOS

</hgroup>

RGBDS is available on [Homebrew](https://brew.sh) as the [`rgbds` package](https://formulae.brew.sh/formula/rgbds).

```bash
brew install rgbds
```

:::caution

This may not be suitable if your version of macOS is too old for Brew to support it.
(In particular, this leads to very long installation times.)

:::

:::tip

You can also install the [`master` branch](/docs/master) by passing the `--HEAD` flag:
```bash
brew install rgbds --HEAD
```

:::

---

Instead of using Brew, versions v0.5.2 and newer can be installed by downloading our pre-built binaries:

1. Click the link of the version you want [from the list](/docs).
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
