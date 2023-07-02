
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installing RGBDS

Most people will want to use a release (the more recent the better), but if you are willing to help us test new features, you may consider [using a development version](/install/master).

The two main options to install a release of RGBDS are to download pre-built executables, or to [build from source](/install/source).
Below is a list of <abbr title="Operating System">OS</abbr>es for which we know pre-built executables are available.

If your OS isn’t listed below, try finding `rgbds` in your package manager—refer to your OS' documentation for help.
If you still can’t find RGBDS, or the specific version you are looking for is unavailable, you will have to [compile it from source](#building-from-source).


<Tabs>
<TabItem value="linux" label="Linux">

TO DO

</TabItem>

<TabItem value="windows" label="Windows">

The install instructions change a bit depending on the environment you wish to use RGBDS with.

<details>
<summary>"Plain" Windows (CMD, PowerShell)</summary>

1. First, [pick the version you want to install](/docs). If you want to [use `master`](/docs/master/#what) instead of a release, [go here](#using-rgbds-master).
2. Follow the "release page" link below "GitHub links", and grab either of the `win32` (for 32-bit Windows) or `win64` (for 64-bit Windows) `.zip` files, near the bottom of the page.
3. Unzip that file, you should get the `.exe` files alongside a couple of `.dll`s.
4. Either:
   - Put all of the files in a directory, then add it to the `PATH`.
     This will permanently allow you to use RGBDS. If you only want to modify the PATH temporarily, instead of the permanent [`setx` command](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/setx), you can use  the **temporary** [`set` one](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/set_1): <code>set PATH="%PATH%<var>&lt;rgbds_path&gt;</var></code> for `cmd.exe`.
     Use one of the following methods:
     - Graphically:
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
     - Using a command line:
       1. Use Explorer to go into the folder the files are in (you should see `rgbasm.exe` etc.), and click a blank part of the address bar near the top. Copy this path, and **use this instead of <code><var>&lt;rgbds_path&gt;</var></code> in the third step!**
       2. Open `cmd` or PowerShell
       3. Type <code>setx PATH "%PATH%<var>&lt;rgbds_path&gt;</var>;"</code> for `cmd.exe`, or <code>setx PATH ${"{"}Env:PATH}<var>&lt;rgbds_path&gt;</var>;</code> for PowerShell; replace <code><var>&lt;rgbds_path&gt;</var></code> with the path you copied in the first step
       4. Close the window for the changes to take effect
   - Put all of the files in your project's directory
   - Put all of the files in a directory already in the `PATH`
5. Profit! RGBDS can now be used from your favorite command line (`cmd.exe` or PowerShell, most likely). You can test it by running `rgbasm --version`.

</details>
<details>
<summary>Cygwin, MSYS2</summary>

Follow steps 1 to 3 of the "plain Windows" instructions to get the release's files; then, copy all of the `.exe` and `.dll` files to the `/usr/local/bin` directory of Cygwin/MSYS2's installation.
(You can get its equivalent Windows path by running `cygpath -w /usr/local/bin`.)
**Do not put them in a subdirectory** (e.g. `/usr/local/bin/rgbds`)**!**
This would not work.

After that, you should be able to use RGBDS from within the Cygwin/MSYS2 terminal, which you can confirm by running `rgbasm -V`.
If this doesn't work, check that `/usr/local/bin` is within the PATH there (`echo $PATH`); if it isn't, you must add it (e.g. `export PATH="/usr/local/bin:$PATH"` in the `~/.bashrc`).

Note: if you can choose between using Cygwin or MSYS2, be advised that Cygwin is slower and has been reported to cause a bit of trouble to some.

</details>
<details>
<summary>WSL, and all other Linux-like environments</summary>

For these, you have to [build from source](/install/source).
On WSL, the default package manager (to install any build prerequisites) is `apt-get` (example: `sudo apt-get install libpng-dev`).

</details>

</TabItem>
<TabItem value="arch" label="Arch Linux">

RGBDS is now available in the official repos as [`community/rgbds`](https://www.archlinux.org/packages/community/x86_64/rgbds/); you can also get the [latest master](/docs/master) via the [`rgbds-git`](https://aur.archlinux.org/packages/rgbds-git) AUR package.

```bash
pacman -S rgbds
```

We refer you to the Arch Linux wiki on how to install [official packages](https://wiki.archlinux.org/index.php/Pacman#Installing_packages) or [AUR packages](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_and_upgrading_packages), or to find and use an [AUR helper](https://wiki.archlinux.org/index.php/AUR_helpers).

</TabItem>
<TabItem value="macos" label="macOS">

RGBDS is available on [Homebrew](https://brew.sh) as the [`rgbds` package](https://formulae.brew.sh/formula/rgbds).

```bash
brew install rgbds
```

You can also install the [`master` branch](/docs/master) by passing the `--HEAD` flag:

```bash
brew install rgbds --HEAD
```

</TabItem>
</Tabs>
