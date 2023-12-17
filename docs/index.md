
# Release information

## What is `master`? {#master}

`master` is the name of RGBDS' main development branch. It's usually employed as a version name to refer to the state of in-development RGBDS: it contains the latest changes as they are pushed, but for this reason it's very unstable.

### Pros and cons of `master` over releases

Pros:

- Get the latest changes quickly
- Also get bugfixes quickly
- Help development by submitting feedback early

Cons:

- Tested, but unstable, so expect things to break often
- Must be compiled manually, unless you [use our CI](/install/master#using-our-ci)
- Updated often

In general, we only recommend using `master` to experienced users that can afford breakage from time to time.
If you do decide to use `master`, we thank you and encourage you to [report any bugs you find](https://github.com/gbdev/rgbds/issue)!

## Table of contents

These pages are HTML renders of the various `man` pages provided with RGBDS.
PDFs are also offered for offline reading, and maybe printing.

- **Language reference**: documentation of the various languages used throughout RGBDS.
  - [Assembly syntax](./rgbasm.5.md): how to write RGBASM-flavored Game Boy assembly, and what the various directives do. ([PDF](./rgbasm.5.pdf))
  - [CPU instructions](./gbz80.7.md): a list of CPU instructions, as well as quick descriptions of their various effects.  ([PDF](./gbz80.7.pdf))
  - [Linkerscript format](./rgblink.5.md): how to write a linker script for RGBLINK. [PDF](./rgblink.5.pdf))
  - [Object file format](./rgbds.5.md): a description of the format of files emitted by RGBASM and expected by RGBLINK; useful for integrating custom tooling with RGBDS.  ([PDF](./rgbds.5.pdf))
- **Command-line options**: how to write the command lines to invoke RGBDS programs.
  - [RGBASM](./rgbasm.1.md), the assembler; ([PDF](./rgbasm.1.pdf))
  - [RGBLINK](./rgblink.1.md), the linker; [PDF](./rgblink.1.pdf))
  - [RGBFIX](./rgbfix.1.md), the header manipulator; ([PDF](./rgbfix.1.pdf))
  - and [RGBGFX](./rgbgfx.1.md), the image converter. ([PDF](./rgbgfx.1.pdf))
- The [history](./rgbds.7.md) of RGBDS is also available for the curious.  ([PDF](./rgbds.7.pdf))
