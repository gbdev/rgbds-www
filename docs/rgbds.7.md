# RGBDS(7) - Miscellaneous Information Manual

# NAME

**rgbds** - Rednex Game Boy Development System

# EXAMPLES

To get a working ROM image from a single assembly source file:

	$ rgbasm -o bar.o foo.asm
	$ rgblink -o baz.gb bar.o
	$ rgbfix -v -p 0 baz.gb

Or in a single command line:

	$ rgbasm -o - foo.asm | rgblink -o - - | rgbfix -v -p 0 - > baz.gb

# SEE ALSO

rgbasm(1),
rgbfix(1),
rgblink(1),
rgbds(5),
gbz80(7)

# HISTORY

1997, Carsten S&#248;rensen (AKA SurfSmurf) writes ASMotor as a general-purpose
assembler/linker system for DOS/Win32.

1999, Justin Lloyd (AKA Otaku no Zoku) adapts ASMotor to read and produce GBZ80
assembly/machine code, and releases this version as RGBDS.

2009, Vegard Nossum adapts the code to be more UNIX-like and releases this
version as rgbds-linux on GitHub.

2010, Anthony J. Bentley forks that repository.
The fork becomes the reference implementation of rgbds.

2017, Bentley's repository is moved to a neutral name.
It is now maintained by a number of contributors at
[https://github.com/rednex/rgbds](https://github.com/rednex/rgbds).

2018, codebase relicensed under the MIT license.

2020, repository is moved to the gbdev organisation, at
[https://github.com/gbdev/rgbds](https://github.com/gbdev/rgbds).
The
[https://rgbds.gbdev.io](https://rgbds.gbdev.io)
website serving documentation and downloads is created.

Debian - March 28, 2021
