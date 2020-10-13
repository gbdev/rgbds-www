---
layout: page
title: Using RGBDS master
---

# Using RGBDS `master`

## Using a package manager

Your package manager *may* have a `master` version of RGBDS available, such as Arch's [`rgbds-git` AUR package](https://aur.archlinux.org/packages/rgbds-git). There is no single way, you will have to look for it manually.

## Building yourself

[Build the source](source) as usual, but replace step 1 with getting the `master` repo instead. The recommended way is to clone the repo (see [GitHub's help on it](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) if you have trouble), but you can also download the repo as ZIP.

Then, follow the rest of the instructions to build from source.

## Using our <abbr title="Continuous Integration">CI</abbr>

RGBDS has [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration): as part of our testing process, each time a modification is made to the code, a server builds RGBDS for several platforms, and runs a battery of tests to ensure nothing was broken. The executables built during the process are [made available on GitHub](https://github.com/gbdev/rgbds/actions?query=workflow%3A%22Regression+testing%22).

We only recommend doing this on Windows, as the Windows zips are stand-alone, but the others aren't. You can still use them if you know what you're doing, but we don't recommend it.
