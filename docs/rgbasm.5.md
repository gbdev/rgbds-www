# rgbasm(5) — language documentation

import generated from '!!raw-loader!./rgbasm.5.html';

<div className="manual-text" dangerouslySetInnerHTML={{ __html: generated }} />

export const toc = [
{
	"value": "DESCRIPTION",
	"id": "DESCRIPTION",
	"level": 2,
},
{
	"value": "SYNTAX",
	"id": "SYNTAX",
	"level": 2,
},
{
	"value": "Symbol interpolation",
	"id": "Symbol_interpolation",
	"level": 3,
},
{
	"value": "EXPRESSIONS",
	"id": "EXPRESSIONS",
	"level": 2,
},
{
	"value": "Numeric formats",
	"id": "Numeric_formats",
	"level": 3,
},
{
	"value": "Operators",
	"id": "Operators",
	"level": 3,
},
{
	"value": "Integer functions",
	"id": "Integer_functions",
	"level": 3,
},
{
	"value": "Fixed-point expressions",
	"id": "Fixed-point_expressions",
	"level": 3,
},
{
	"value": "String expressions",
	"id": "String_expressions",
	"level": 3,
},
{
	"value": "Character maps",
	"id": "Character_maps",
	"level": 3,
},
{
	"value": "Other functions",
	"id": "Other_functions",
	"level": 3,
},
{
	"value": "SECTIONS",
	"id": "SECTIONS",
	"level": 2,
},
{
	"value": "Section stack",
	"id": "Section_stack",
	"level": 3,
},
{
	"value": "RAM code",
	"id": "RAM_code",
	"level": 3,
},
{
	"value": "Unionized sections",
	"id": "Unionized_sections",
	"level": 3,
},
{
	"value": "Section fragments",
	"id": "Section_fragments",
	"level": 3,
},
{
	"value": "Fragment literals",
	"id": "Fragment_literals",
	"level": 3,
},
{
	"value": "SYMBOLS",
	"id": "SYMBOLS",
	"level": 2,
},
{
	"value": "Labels",
	"id": "Labels",
	"level": 3,
},
{
	"value": "Anonymous labels",
	"id": "Anonymous_labels",
	"level": 3,
},
{
	"value": "Variables",
	"id": "Variables",
	"level": 3,
},
{
	"value": "Numeric constants",
	"id": "Numeric_constants",
	"level": 3,
},
{
	"value": "Offset constants",
	"id": "Offset_constants",
	"level": 3,
},
{
	"value": "String constants",
	"id": "String_constants",
	"level": 3,
},
{
	"value": "Macros",
	"id": "Macros",
	"level": 3,
},
{
	"value": "Exporting and importing symbols",
	"id": "Exporting_and_importing_symbols",
	"level": 3,
},
{
	"value": "Purging symbols",
	"id": "Purging_symbols",
	"level": 3,
},
{
	"value": "Predeclared symbols",
	"id": "Predeclared_symbols",
	"level": 3,
},
{
	"value": "DEFINING DATA",
	"id": "DEFINING_DATA",
	"level": 2,
},
{
	"value": "Defining constant data in ROM",
	"id": "Defining_constant_data_in_ROM",
	"level": 3,
},
{
	"value": "Including binary data files",
	"id": "Including_binary_data_files",
	"level": 3,
},
{
	"value": "Statically allocating space in RAM",
	"id": "Statically_allocating_space_in_RAM",
	"level": 3,
},
{
	"value": "Allocating overlapping spaces in RAM",
	"id": "Allocating_overlapping_spaces_in_RAM",
	"level": 3,
},
{
	"value": "Requesting alignment",
	"id": "Requesting_alignment",
	"level": 3,
},
{
	"value": "THE MACRO LANGUAGE",
	"id": "THE_MACRO_LANGUAGE",
	"level": 2,
},
{
	"value": "Invoking macros",
	"id": "Invoking_macros",
	"level": 3,
},
{
	"value": "Automatically repeating blocks of code",
	"id": "Automatically_repeating_blocks_of_code",
	"level": 3,
},
{
	"value": "Conditionally assembling blocks of code",
	"id": "Conditionally_assembling_blocks_of_code",
	"level": 3,
},
{
	"value": "Including other source files",
	"id": "Including_other_source_files",
	"level": 3,
},
{
	"value": "Printing things during assembly",
	"id": "Printing_things_during_assembly",
	"level": 3,
},
{
	"value": "Aborting the assembly process",
	"id": "Aborting_the_assembly_process",
	"level": 3,
},
{
	"value": "MISCELLANEOUS",
	"id": "MISCELLANEOUS",
	"level": 2,
},
{
	"value": "Changing options while assembling",
	"id": "Changing_options_while_assembling",
	"level": 3,
},
{
	"value": "Excluding locations from backtraces",
	"id": "Excluding_locations_from_backtraces",
	"level": 3,
},
{
	"value": "SEE ALSO",
	"id": "SEE_ALSO",
	"level": 2,
},
{
	"value": "HISTORY",
	"id": "HISTORY",
	"level": 2,
},
];
