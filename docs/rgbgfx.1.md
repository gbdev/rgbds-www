# RGBGFX(1) - General Commands Manual

# NAME

**rgbgfx** - Game Boy graphics converter

# SYNOPSIS

**rgbgfx**
\[**-CDhmuVv**]
\[**-f**&nbsp;|&nbsp;**-F**]
\[**-a**&nbsp;*attrmap*&nbsp;|&nbsp;**-A**]
\[**-d**&nbsp;*depth*]
\[**-o**&nbsp;*out\_file*]
\[**-p**&nbsp;*pal\_file*&nbsp;|&nbsp;**-P**]
\[**-t**&nbsp;*tilemap*&nbsp;|&nbsp;**-T**]
\[**-x**&nbsp;*tiles*]
*file*

# DESCRIPTION

The
**rgbgfx**
program converts PNG images into the Nintendo Game Boy's planar tile format.

The resulting colors and their palette indices are determined differently depending on the input PNG file:

-	If the file has an embedded palette, that palette's color and order are used.

-	If not, and the image only contains shades of gray, rgbgfx maps them to the indices appropriate for each shade.
	Any undetermined indices are set to respective default shades of gray.
	For example: if the bit depth is 2 and the image contains light gray and black, they become the second and fourth colors, and the first and third colors get set to default white and dark gray.
	If the image has multiple shades that map to the same index, the palette is instead determined as if the image had color.

-	If the image has color (or the grayscale method failed), the colors are sorted from lightest to darkest.

The input image may not contain more colors than the selected bit depth allows.
Transparent pixels are set to palette index 0.

# ARGUMENTS

Note that options can be abbreviated as long as the abbreviation is unambiguous: **-&#45;verb**
is **-&#45;verbose**,
but **-&#45;ver**
is invalid because it could also be **-&#45;version**.
The arguments are as follows:

**-a** *attrmap*, **-&#45;attr-map** *attrmap*

> Generate a file of tile mirroring attributes for OAM or (CGB-only) background tiles.
> For each tile in the input file, a byte is written representing the dimensions that the associated tile in the output file should be mirrored.
> Useful in combination with
> **-m**
> to keep track the mirror direction of mirrored duplicate tiles.

**-A**, **-&#45;output-attr-map**

> Same as
> **-a**,
> but the attrmap file output name is made by taking the input filename, removing the file extension, and appending
> *.attrmap*.

**-C**, **-&#45;color-curve**

> Use the color curve of the Game Boy Color when generating palettes.

**-D**, **-&#45;debug**

> Debug features are enabled.

**-d** *depth*, **-&#45;depth** *depth*

> The bit depth of the output image (either 1 or 2).
> By default, the bit depth is 2 (two bits per pixel).

**-f**, **-&#45;fix**

> Fix the input PNG file to be a correctly indexed image.

**-F**, **-&#45;fix-and-save**

> Same as
> **-f**,
> but additionally, the supplied command line parameters are saved within the PNG and will be loaded and automatically used next time.

**-h**, **-&#45;horizontal**

> Lay out tiles in column-major order (column by column), instead of the default row-major order (line by line).
> Especially useful for "8x16" OBJ mode, if the input image is 16 pixels tall.

**-m**, **-&#45;mirror-tiles**

> Truncate tiles by checking for tiles that are mirrored versions of others and omitting these from the output file.
> Useful with tilemaps and attrmaps together to keep track of the duplicated tiles and the dimension mirrored.
> Tiles are checked for horizontal, vertical, and horizontal-vertical mirroring.
> Implies
> **-u**.

**-o** *out\_file*, **-&#45;output** *out\_file*

> The name of the output file.

**-p** *pal\_file*, **-&#45;palette** *pal\_file*

> Output the image's palette in standard GBC palette format: bytes (8 bytes for two bits per pixel, 4 bytes for one bit per pixel) containing the RGB15 values in little-endian byte order.
> If the palette contains too few colors, the remaining entries are set to black.

**-P**, **-&#45;output-palette**

> Same as
> **-p**,
> but the palette file output name is made by taking the input PNG file's filename, removing the file extension, and appending
> *.pal*.

**-t** *tilemap*, **-&#45;tilemap** *tilemap*

> Generate a file of tile indices.
> For each tile in the input file, a byte is written representing the index of the associated tile in the output file.
> Useful in combination with
> **-u**
> or
> **-m**
> to keep track of duplicate tiles.

**-T**, **-&#45;output-tilemap**

> Same as
> **-t**,
> but the tilemap file output name is made by taking the input filename, removing the file extension, and appending
> *.tilemap*.

**-u**, **-&#45;unique-tiles**

> Truncate tiles by checking for tiles that are exact duplicates of others and omitting these from the output file.
> Useful with tilemaps to keep track of the duplicated tiles.

**-V**, **-&#45;version**

> Print the version of the program and exit.

**-v**, **-&#45;verbose**

> Verbose.
> Print errors when the command line parameters and the parameters in the PNG file don't match.

**-x** *tiles*, **-&#45;trim-end** *tiles*

> Trim the end of the output file by this many tiles.

# EXAMPLES

The following will take a PNG file with a bit depth of 1, 2, or 8, and output planar 2bpp data:

> $ rgbgfx -o out.2bpp in.png

The following creates a planar 2bpp file with only unique tiles, and its tilemap
*out.tilemap*:

> $ rgbgfx -T -u -o out.2bpp in.png

The following creates a planar 2bpp file with only unique tiles
*accounting for tile mirroring*
and its associated tilemap
*out.tilemap*
and attrmap
*out.attrmap*:

> $ rgbgfx -A -T -m -o out.2bpp in.png

The following will do nothing:

> $ rgbgfx in.png

# BUGS

Please report bugs on
[GitHub](https://github.com/gbdev/rgbds/issues).

# SEE ALSO

rgbds(7),
rgbasm(1),
rgblink(1),
rgbfix(1),
gbz80(7)

# HISTORY

**rgbgfx**
was created by
stag019
to be included in RGBDS.
It is now maintained by a number of contributors at
[https://github.com/gbdev/rgbds](https://github.com/gbdev/rgbds).

Debian - March 28, 2021
