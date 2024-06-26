---
sidebar_label: Using a development version
---

# Using RGBDS `master`

`master` is the name of RGBDS' main development branch.
Using a "master" version of RGBDS means using an in-development version: this means you get access to the newest features faster (and you help test them!), but it also means that they have undergone a little less testing.

We are very grateful to all who takes the time to use `master` versions; all of you help make the releases better for everyone.

## Using a package manager

Your package manager *may* have a `master` version of RGBDS available, such as Arch Linux [`rgbds-git` AUR package](https://aur.archlinux.org/packages/rgbds-git).
If that is the case, it is recommended to use that, as it should be simpler and integrate better with the rest of your system.

## Building it yourself

[Build the source](source.md) as usual, but replace step 1 (getting the sources) with getting the `master` repo instead.
The recommended way is to clone the repo (see [GitHub's help on it](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) if you have trouble), but you can also download the repo as ZIP.

Then, follow the rest of the instructions to build from source.

## Using our <abbr title="Continuous Integration">CI</abbr>

:::caution

We only recommend doing this on Windows, as the Windows zips are stand-alone, but the others aren't.
You can still use non-Windows zips if you know what you're doing, but we don't recommend it.

:::

RGBDS has [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration): as part of our testing process, each time a modification is made to the code, a server builds RGBDS for several platforms, and runs a battery of tests to ensure nothing was broken.
The executables built during the process are [available on GitHub](https://github.com/gbdev/rgbds/actions?query=workflow%3A%22Regression+testing%22) (and [here](https://nightly.link/gbdev/rgbds/workflows/testing/master) if you don't have a GitHub account).
