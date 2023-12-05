
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installing RGBDS

Most people will want to use a stable release (the more recent the better). 

Below is a list of Operative Systems for which pre-built executables are available. If none of these options fits your needs, you can [build from source](/install/source).


## Linux

Generic Linux x86_64 ready binaries are available in our [Releases](https://github.com/gbdev/rgbds/releases) page.

##### Arch

RGBDS is available in the official Arch Linux repositories as [`extra/rgbds`](https://www.archlinux.org/packages/extra/x86_64/rgbds/); you can also get the [latest master](/docs/master) via the [`rgbds-git`](https://aur.archlinux.org/packages/rgbds-git) AUR package.

```bash
pacman -S rgbds
```


## macOS

RGBDS is available on [Homebrew](https://brew.sh) as the [`rgbds` package](https://formulae.brew.sh/formula/rgbds).

```bash
brew install rgbds
```

You can also install the [`master` branch](/docs/master) by passing the `--HEAD` flag:

```bash
brew install rgbds --HEAD
```

## Windows

The install instructions change a bit depending on the environment you wish to use RGBDS with.

<Tabs>
<TabItem value="wsl" label="WSL / Linux-like environments">

For these, please refer to the Linux instructions for the installed Linux distribution (the default Linux distribution on WSL is Ubuntu, whose package manager is `apt`).

</TabItem>
<TabItem value="cygwin" label="Cygwin / MSYS2">

1. First, [pick the version you want to install](/docs). If you want to [use `master`](/docs/master/#what) instead of a release, [go here](/install/master).
2. Follow the "release page" link below "GitHub links", and grab either of the `win32` (for 32-bit Windows) or `win64` (for 64-bit Windows) `.zip` files, near the bottom of the page.
3. Unzip that file, you should get the `.exe` files alongside a couple of `.dll`s.
4. Copy all of those `.exe` and `.dll` files to the `/usr/local/bin` directory of Cygwin/MSYS2's installation.
   (You can get its equivalent Windows path by running `cygpath -w /usr/local/bin`.)

   **Do not put them in a subdirectory** (e.g. `/usr/local/bin/rgbds`)**!**
   This would not work.

After that, you should be able to use RGBDS from within the Cygwin/MSYS2 terminal, which you can confirm by running `rgbasm -V`.
If this doesn't work, check that `/usr/local/bin` is within the PATH there (`echo $PATH`); if it isn't, you must add it (e.g. run `echo 'export PATH="/usr/local/bin:$PATH"' >>~/.bashrc`, and open a new Cygwin terminal).

Note: if you can choose between using Cygwin or MSYS2, be advised that Cygwin is slower and has been reported to cause a bit of trouble to some.

</TabItem>
<TabItem value="win32" label="None of those">

1. First, [pick the version you want to install](/docs). If you want to [use `master`](/docs/master/#what) instead of a release, [go here](/install/master).
2. Follow the "release page" link below "GitHub links", and grab either of the `win32` (for 32-bit Windows) or `win64` (for 64-bit Windows) `.zip` files, near the bottom of the page.
3. Unzip that file, you should get the `.exe` files alongside a couple of `.dll`s.
4. Either:
   - ...put all of the files in a directory, then add it to the `PATH`.
     This will **permanently** allow you to use RGBDS **from anywhere**.

     <Tabs>
     <TabItem value="gui" label="Graphically">

       1. Open Control Panel
       2. Click "User Accounts"
       3. Click "User Accounts" again
       4. Click "Change my environment variables"
       5. Select the "Path" line in the **top** panel
       6. Click "Edit..."
       7. Click "Browse...", select the folder the files are in, and click OK
       8. Make sure that the new entry (which should be highlighted) is at the bottom of the list; if not, click on "Move Down" until it is
       9. Click "OK"
       10. Click "OK"

     </TabItem>
     <TabItem value="cmd.exe" label="cmd.exe">

       Run the following, replacing `<rgbds_path>` with the path to the directory that contains `rgbasm.exe`, `rgblink.exe`, etc.

       ```cmd
       setx PATH "%PATH%<rgbds_path>;"
       ```

       ...then open a new window for the changes to take effect.

       If you only want to modify the PATH temporarily, instead of the permanent [`setx` command](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/setx), you can use  the **temporary** [`set`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/set_1).

     </TabItem>
     <TabItem value="pwsh" label="PowerShell">

       Run the following, replacing `<rgbds_path>` with the path to the directory that contains `rgbasm.exe`, `rgblink.exe`, etc.

       ```cmd
       setx PATH ${Env:PATH}<rgbds_path>;
       ```

       ...then open a new window for the changes to take effect.

       If you only want to modify the PATH temporarily, instead of the permanent [`setx` command](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/setx), you can use  the **temporary** [`set`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/set_1).

     </TabItem>
     </Tabs>

   - ...or put all of the files in your project's directory.
   - ...or put all of the files in a directory already in the `PATH`.
5. Profit! RGBDS can now be used from your favorite command line (`cmd.exe` or PowerShell, most likely). You can test it by running `rgbasm --version`.

</TabItem>
</Tabs>

## Other

### Docker

We distribute an [official container image for RGBDS](https://github.com/gbdev/rgbds/pkgs/container/rgbds). It contains the built executables and the build dependencies in case you want to compile from source.

```bash
docker pull ghcr.io/gbdev/rgbds:latest
```

### Installing a development version

If you are willing to help us test new features, consider [using a development version](/install/master).

### Managing multiple versions

If you need to frequently switch between different versions of RGBDS, consider using [rgbenv](https://github.com/gbdev/rgbenv), the RGBDS version manager.
