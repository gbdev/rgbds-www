
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<hgroup>

← [Back to install instructions](/install)

# Building RGBDS from source

</hgroup>

RGBDS is open-source, which means you can always compile it yourself, for example if no pre-built solution is available to you, or if you want a specific version.

RGBDS aims to be relatively painless to compile, keeping its dependencies to a minimum:
- A C11-compatible compiler
- `libpng` (optional, only required for RGBGFX)

:::caution

Some of the build steps vary between systems, so the instructions provided here are somewhat generic.
Windows works largely differently from everything else, so some expertise is expected if attempting this on Windows.

:::

## 1. Get the source code

You first need to get the source files to be compiled, using one of the methods below.

<Tabs>
<TabItem value="snapshot" label="Downloading source snapshots">

1. Go the [latest release](https://github.com/gbdev/rgbds/releases/latest) (or pick a specific version from [the list](https://github.com/gbdev/rgbds/releases))
2. Under "Assets" at the bottom, download any of the last three listed files (<code>rgbds-<var>&lt;version&gt;</var>.tar.gz</code>, "Source code (`zip`)", or "Source code (`tar.gz`)").
3. Extract ("unzip") the file.

</TabItem>
<TabItem value="git" label="Using Git">

1. [Clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
2. Then, run `git checkout <version>` (e.g. `git checkout v0.4.1`).
3. You're set!

</TabItem>
</Tabs>

## 2. Build

The following are required to build RGBDS; most of those should already be installed on your system.

 - `make` and/or `cmake`, depending on what method you choose below
 - The `bash` shell
 - A C compiler, typically `gcc` or `clang`
 - `bison` (or `yacc`/`byacc` prior to RGBDS 0.5.0)
 - `pkg-config` (unless using `cmake`)

If you are building RGBGFX, the following are also required:

 - A C++ compiler, typically `g++` or `clang`
 - `libpng`'s development headers. For Linux users: the package is typically called [`libpng-dev`](https://packages.ubuntu.com/focal/libpng-dev), [`libpng-devel`](https://software.opensuse.org/package/libpng16-devel-64bit), or sometimes plainly [`libpng`](https://www.archlinux.org/packages/extra/x86_64/libpng/). Additionally, a `16` or `1.6` may be present after `libpng` ([example](https://tracker.debian.org/pkg/libpng1.6)).

Two build systems are supported: plain old `make`, and CMake.
Both can be used on most systems, but Windows users will almost certainly be unable to use `make`.

:::caution

Make sure to run all of the following commands from the root directory of the sources!
That directory should contain a file called `Makefile`, another called `CMakeLists.txt`, and a few more.

:::

### Using Make

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

### Using CMake

:::info CMake minimum version

Building RGBDS with CMake requires CMake 3.9 or later.

:::

1. Run CMake on the project:

   <Tabs>
   <TabItem value="3.31+" label="CMake 3.13 and later">

   ```bash
   cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
   ```

   </TabItem>
   <TabItem value="3.12.4-" label="CMake 3.12.4 and earlier">

   ```bash
   mkdir build
   cd build
   cmake .. -DCMAKE_BUILD_TYPE=Release
   cd ..
   ```

   </TabItem>
   </Tabs>

2. Build RGBDS:

   ```bash
   cmake --build build
   ```

3. You can install RGBDS.
   You are not required to, you can do whatever with the four binaries in `build/src` at this point.

   <Tabs>
   <TabItem value="3.15+" label="CMake 3.15 and later">

   ```bash
   sudo cmake --install build
   ```

   </TabItem>
   <TabItem value="3.14-" label="CMake 3.14 and earlier">

   ```bash
   cd build
   sudo make install
   ```

   </TabItem>
   </Tabs>
