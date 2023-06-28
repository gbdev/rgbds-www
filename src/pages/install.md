
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installing RGBDS

You can either [use a pre-built version](#pre-built), if one is available for your operating system; or you can [build RGBDS from source](#building-from-source).

<hr />

## Pre-built

Below is a list of OSes we know are supported.

If your OS isn’t listed below, try finding `rgbds` in your package manager—refer to your OS' documentation for help.
If you still can’t find RGBDS, or the specific version you are looking for is unavailable, you will have to [compile it from source](#building-from-source).

<details>
<summary>Arch Linux</summary>
<div>

RGBDS is now available in the official repos as [`community/rgbds`](https://www.archlinux.org/packages/community/x86_64/rgbds/); you can also get the [latest master](/docs/master) via the [`rgbds-git`](https://aur.archlinux.org/packages/rgbds-git) AUR package, or RGBDS 0.2.5 from [`rgbds2`](https://aur.archlinux.org/packages/rgbds2), still from the AUR.

```bash
pacman -S rgbds
```

We refer you to the Arch Linux wiki on how to install [official packages](https://wiki.archlinux.org/index.php/Pacman#Installing_packages) or [AUR packages](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_and_upgrading_packages), or to find and use an [AUR helper](https://wiki.archlinux.org/index.php/AUR_helpers).

</div>
</details>

<details>
<summary>macOS</summary>
<div>

RGBDS is available on [Homebrew](https://brew.sh) as the [`rgbds` package](https://formulae.brew.sh/formula/rgbds).

```bash
brew install rgbds
```

You can also install the [`master` branch](/docs/master) by passing the `--HEAD` flag:

```bash
brew install rgbds --HEAD
```

</div>
</details>

<details>
<summary>Windows</summary>
<div>

The install instructions change a bit depending on the environment you wish to use RGBDS with.

:::tip

The "plain Windows" instructions may also work for some environments listed further below, since most of them pick up Windows' `PATH`.
However, if you have such an environment, we recommend you follow its specific install instructions instead.

:::

<Tabs>
<TabItem value="plain" label="&quot;Plain&quot; Windows (CMD, PowerShell)">

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

</TabItem>
<TabItem value="cygwin_msys2" label="Cygwin, MSYS2">

Follow steps 1 to 3 of the "plain Windows" instructions to get the release's files; then, copy all of the `.exe` and `.dll` files to the `/usr/local/bin` directory of Cygwin/MSYS2's installation.
(You can get its equivalent Windows path by running `cygpath -w /usr/local/bin`.)
**Do not put them in a subdirectory** (e.g. `/usr/local/bin/rgbds`)**!**
This would not work.

After that, you should be able to use RGBDS from within the Cygwin/MSYS2 terminal, which you can confirm by running `rgbasm -V`.
If this doesn't work, check that `/usr/local/bin` is within the PATH there (`echo $PATH`); if it isn't, you must add it (e.g. `export PATH="/usr/local/bin:$PATH"` in the `~/.bashrc`).

Note: if you can choose between using Cygwin or MSYS2, be advised that Cygwin is slower and has been reported to cause a bit of trouble to some.

</TabItem>
<TabItem value="wsl_linux-like" label="WSL, and all other Linux-like environments">

For these, you have to [build from source](#building-from-source). On WSL, you should install any build prerequisites using `apt-get` (example: `sudo apt-get install libpng-dev`).

</TabItem>
</Tabs>
</div>
</details>

<hr />

## Building from source

RGBDS is open-source, which means you can always compile it yourself, for example if no pre-built solution is available to you, or if you want a specific version.

RGBDS aims to be relatively painless to compile, keeping its dependencies to a minimum:
- A C11-compatible compiler
- `libpng` (optional, only required for RGBGFX)

:::caution

Some of the build steps vary between systems, so the instructions provided here are somewhat generic.
Windows works largely differently from everything else, so some expertise is expected if attempting this on Windows.

:::

### 1. Get the source

You first need to get the source files to be compiled, using one of the methods below.

<Tabs>
<TabItem value="snapshot" label="Downloading source snapshots">

1. [Pick a release](/docs).
2. Under the "GitHub links" heading, follow the `release page` link.
3. Go to "**Assets**" at the bottom of that page.
4. Download any of the last three listed files (`rgbds-<version>.tar.gz`, "Source code (`zip`)", or "Source code (`tar.gz`)").
5. Extract ("unzip") the file.

</TabItem>
<TabItem value="git" label="Using Git">

1. [Clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
2. Then, run `git checkout <version>` (e.g. `git checkout v0.4.1`).
3. You're set!

</TabItem>
</Tabs>

### 2. Build

The following are required to build RGBDS; it's possible that some are already installed on your system.

 - `make` and/or `cmake`, depending on what method you choose below
 - `bash` shell
 - a C compiler, typically `gcc` or `clang`
 - `bison` (or `yacc`/`byacc` prior to RGBDS 0.5.0)
 - `pkg-config` (unless using `cmake`)

If you are building RGBGFX, the following are also required:

 - a C++ compiler, typically `g++` or `clang`
 - `libpng`'s development headers. For Linux users: the package is typically called [`libpng-dev`](https://packages.ubuntu.com/focal/libpng-dev), [`libpng-devel`](https://software.opensuse.org/package/libpng16-devel-64bit), or sometimes plainly [`libpng`](https://www.archlinux.org/packages/extra/x86_64/libpng/). Additionally, a `16` or `1.6` may be present after `libpng` ([example](https://tracker.debian.org/pkg/libpng1.6)).

Two build systems are supported: plain old `make`, and CMake.
Both can be used on most systems, but Windows users will almost certainly be unable to use `make`.

Make sure to run all of the following commands from the root directory of the sources!
That directory should contain a file called `Makefile`, another called `CMakeLists.txt`, and a few more.

#### Using Make

Simply run the following two commands:

```bash
make
sudo make install
```

The second command is optional if you don't want to install RGBDS system-wide.

The following variables can be defined to control installation, like so: `make Q=`, `make install PREFIX=~/.local`

 - `PREFIX`: Location where RGBDS will be installed. Defaults to `/usr/local`.
 - `bindir`: Location where the binaries will be installed. Defaults to `${PREFIX}/bin`.
 - `mandir`: Location where the manpages will be installed. Defaults to `${PREFIX}/share/man`.
 - `DESTDIR`: This is prepended to all paths during the installation. It is mainly used for packaging.
 - `Q`: Whether to quiet the build or not. To make the build more verbose, clear this variable. Defaults to `@`.
 - `STRIP`: Whether to strip the installed binaries of debug symbols or not. Defaults to `-s`.
 - `BINMODE`: Permissions of the installed binaries. Defaults to `755`.
 - `MANMODE`: Permissions of the installed man pages. Defaults to `644`.

#### Using CMake

:::info CMake minimum version

Building RGBDS with CMake requires CMake 3.9 or later.

:::

First, run CMake on the project.

`cmake` 3.13 and later:
```bash
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
```

`cmake` 3.12.4 and earlier:
```bash
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cd ..
```

Then, build RGBDS:

```bash
cmake --build build
```

Finally, you may install RGBDS.
You are not required to, you can do whatever with the four binaries in `build/src` at this point.

`cmake` 3.15 and later:

```bash
sudo cmake --install build
```

`cmake` 3.14 and earlier:

```bash
cd build
sudo make install
```

<hr />

## Using RGBDS `master`

### Using a package manager

Your package manager *may* have a `master` version of RGBDS available, such as Arch's [`rgbds-git` AUR package](https://aur.archlinux.org/packages/rgbds-git).
There is no single way, you will have to look for it manually.

### Building yourself

[Build the source](#building-from-source) as usual, but replace step 1 with getting the `master` repo instead.
The recommended way is to clone the repo (see [GitHub's help on it](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) if you have trouble), but you can also download the repo as ZIP.

Then, follow the rest of the instructions to build from source.

### Using our <abbr title="Continuous Integration">CI</abbr>

RGBDS has [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration): as part of our testing process, each time a modification is made to the code, a server builds RGBDS for several platforms, and runs a battery of tests to ensure nothing was broken.
The executables built during the process are [made available on GitHub](https://github.com/gbdev/rgbds/actions?query=workflow%3A%22Regression+testing%22).

We only recommend doing this on Windows, as the Windows zips are stand-alone, but the others aren't.
You can still use them if you know what you're doing, but we don't recommend it.
