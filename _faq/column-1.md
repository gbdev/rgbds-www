---
question: "`Macro <macro> not defined`"
---

There are two main reasons for this error to occur. If this error occurs when calling a macro, it simply hasn't been defined, you may have e.g. forgotten to `INCLUDE` a file.

However, if this error appears when you were trying to define `<macro>`, it's probably because RGBASM is sensitive to whitespace.
**This only applies to RGBASM versions strictly before v0.5.0!**

Quoting [the documentation on symbol definition](http://localhost:4000/docs/v0.4.1/rgbasm.5#SYMBOLS):

> *In the line where a symbol is defined there must not be any whitespace before it*, otherwise `rgbasm` will treat it as a macro invocation.

If you were trying to define a macro on that line, make sure there is **no** whitespace (spaces or tabs) before the macro's name. For example, the following will trigger the error:

{% highlight nasm %}
	my_macro: MACRO
		; Awesome stuff
	ENDM
{% endhighlight %}

And this fixes it:

{% highlight nasm %}
my_macro: MACRO
	; Awesome stuff
ENDM
{% endhighlight %}
