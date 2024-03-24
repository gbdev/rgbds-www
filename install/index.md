---
sidebar_label: Available install methods
---

# Installing RGBDS

Most people will want to use a stable release (the more recent the better).

These are the operating systems for which pre-built executables are available:
- [Linux](linux.md)
- [macOS](macos.md)
- [Windows](windows.md)

If none of these options fit your needs, you can [build from source](source.md).

### Docker

We distribute an [official container image for RGBDS](https://github.com/gbdev/rgbds/pkgs/container/rgbds).
It contains the built executables *and* the build dependencies, in case you want to compile from source.

```bash
docker pull ghcr.io/gbdev/rgbds:latest
```

### Installing a development version

If you are willing to help us test new features, consider [using a development version](master.md).

### Managing multiple versions

If you need to frequently switch between different versions of RGBDS, consider using [rgbenv](https://github.com/gbdev/rgbenv), the RGBDS version manager.
