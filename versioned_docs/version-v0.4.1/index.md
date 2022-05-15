
# Release information

## GitHub links

The [release page](https://github.com/gbdev/rgbds/releases/???) contains the full changelog, as well as pre-built downloads.

## Table of contents

These pages are HTML renders of the various `man` pages provided with RGBDS.
PDFs are also offered for offline reading, and maybe printing.

- **Language reference**: documentation of the various languages used throughout RGBDS.
  - [Assembly syntax](./rgbasm.5.md): how to write RGBASM-flavored Game Boy assembly, and what the various directives do.
  - [CPU instructions](./gbz80.7.md): a list of CPU instructions, as well as quick descriptions of their various effects.
  - [Linkerscript format](./rgblink.5.md): how to write a linker script for RGBLINK.
  - [Object file format](./rgbds.5.md): a description of the format of files emitted by RGBASM and expected by RGBLINK; useful for integrating custom tooling with RGBDS.
- **Command-line options**: how to write the command lines to invoke RGBDS programs.
  - [RGBASM](./rgbasm.1.md), the assembler;
  - [RGBLINK](./rgblink.1.md), the linker;
  - [RGBFIX](./rgbfix.1.md), the header manipulator;
  - and [RGBGFX](./rgbgfx.1.md), the image converter.
- The [history](./rgbds.7.md) of RGBDS is also available for the curious.
