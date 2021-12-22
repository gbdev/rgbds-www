# FAQ

## Unable to place "<section\>"

This error occurs when RGBLINK is unable to place a `SECTION`. There are several causes, notably depending on the rest of the error message.

This is almost always caused by some modification growing a section too large, **although not necessarily the one being reported**. To understand why, imagine several groups renting a bus, where members of the same group all try to board together; if the bus became overfull, the problem is shared, not the fault of the last group that tried to board.

The error message is of the form `Unable to place "\<section\>" <where>: <reason>`. `\<section\>` is the section's name. `<where>` is RGBLINK telling which constraints were put on the section, which is one of, or a combination of the following. (Note that the list is ordered from most to least restrictive, and that combinations are more restrictive than either of their components.)

 - **in bank &lt;bank&gt;**: The section was restricted to a certain bank.
 - **at address &lt;addr&gt;**: The section was restricted to a certain address.
 - **with align mask &lt;mask&gt;**: The section was restricted to a certain alignment; `<mask>` indicates the specified mask, i.e. the mask applied to all addresses considered. For example, `ALIGN[4]` yields alignment mask `$FFF0` (lowest **4** bits clear). Consider relaxing the alignment requirement, or making some room.
 - **anywhere**: No constraints were put on the section. It's likely you're simply running out of memory, and need to make some room.

Keep in mind that RGBLINK assigns the most constrained sections first, so if a section with a bank constraint fails to be assigned, sections with e.g. only an address constraint will not change the problem.

Keep also in mind that loosening restrictions (or better, removing them) allow RGBLINK to optimize section placement better, and generally make this error much rarer. You should always consider *why* the constraints were put there before modifying them, though!

Here are some general tips that may help solve the error; they work often, but not always.

### `section runs past end of region`

The section is likely too big, or (if the section's address is fixed) the fixed address is too large.

### Sections with bank and address constraints

Since this kind of section can only be placed in one spot, this is the only case where RGBLINK will report a conflicting section name (`section overlaps with <other>`). One of the sections (the one with the lowest fixed address) probably grew too large.

Consider removing either, or both, of the constraints.

### Sections with a bank constraint

Consider using the `BANK()` built-in function; instead of this:

```
SECTION "Somewhere", ROMX,BANK[42]
Label:

SECTION "Somewhere else", ROM0
	ld a, 42
```

Use this:

```
SECTION "Somewhere", ROMX,BANK[42]
Label:

SECTION "Somewhere else", ROM0
	ld a, BANK(Label)
```

So you can do this:

```

SECTION "Somewhere", ROMX
Label:

SECTION "Somewhere else", ROM0
	ld a, BANK(Label)
```


Even if you still need to force the bank, at least you can now safely change which one. Speaking of, moving *any section within that bank* to another one may also fix the problem. Keep in mind that this bank was chosen for a reason, though, and changing it may cause issues.

### Sections with an address constraint

Consider using `ALIGN` instead, if possible.

### Sections with an alignment constraint

You can try relaxing the alignment constraint; examine why it's there, and if you can make the operand smaller. The alignment offset isn't likely to change much.

### None of the above

At this point, you've likely just run out of memory. If none of the above worked or apply, all that is left is reducing the size of things.
