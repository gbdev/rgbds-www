---
layout: default
title: Building RGBDS from source
---

# Building RGBDS from source

Foreword: building RGBDS is largely dependent on your system, so the instructions provided here are somewhat generic. Windows works largely differently from everything else, so some expertise is expected if attempting this on Windows.

RGBDS does not require more than a regular environment, except RGBGFX that relies on `libpng`; if you wish to use RGBGFX, you should install `libpng`.

## 1. Get sources

### Using [Git](https://git-scm.com/)

First, [clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). Then, run `git checkout <version>` (e.g. `git checkout v0.4.1`), and you're set.

### Downloading source snapshots

Go to your desired [release](/docs)'s release page. Near the bottom of the page is a list of *assets*; grab either of the last three (`rgbds-<version>.tar.gz`, "Source code (`zip`)", or "Source code (`tar.gz`)"), and extract it.

## 2. Build

The following are required to build RGBDS; it's possible that some are already installed on your system.

 - `make` and/or `cmake`, depending on what method you choose below
 - a C compiler, typically `gcc` or `clang`
 - `yacc`/`bison`
 - `libpng`'s development headers. The package is typically called [`libpng-dev`](https://packages.ubuntu.com/focal/libpng-dev), [`libpng-devel`](https://software.opensuse.org/package/libpng16-devel-64bit), or sometimes plainly [`libpng`](https://www.archlinux.org/packages/extra/x86_64/libpng/). Additionally, a `16` or `1.6` may be present after `libpng` ([example](https://tracker.debian.org/pkg/libpng1.6)).

Two build systems are supported: plain old `make`, and `cmake`. Both can be used on most systems, but Windows users will almost certainly be unable to use `make`.

Make sure to run all of the following commands from the root directory!

### make

Simply run the following two commands:

{% highlight bash %}
make
sudo make install
{% endhighlight %}

The second command is optional if you don't want to install RGBDS system-wide.

### cmake

First, run CMake on the project.

`cmake` 3.13 and later:
{% highlight bash %}
cmake -S . -B build
{% endhighlight %}

`cmake` 3.12.4 and earlier:
{% highlight bash %}
mkdir build
cd build
cmake ..
cd ..
{% endhighlight %}

Then, build RGBDS.

{% highlight bash %}
cmake --build build
{% endhighlight %}

Finally, you may install RGBDS. You are not required to, you can do whatever with the four binaries in `build/src` at this point.

`cmake` 3.15 and later:

{% highlight bash %}
sudo cmake --install build
{% endhighlight %}

`cmake` 3.14 and earlier:

{% highlight bash %}
cd build
sudo make install
{% endhighlight %}
