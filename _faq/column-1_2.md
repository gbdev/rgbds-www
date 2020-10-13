---
question: "`<macro> already defined at <location>`"
---

There are two main reasons for this error to occur. If this error occurs when defining a macro, then you have two identically-named macros, and you should either remove or rename one of them.

However, if this error appears when you were trying to use `<macro>`, it's probably because RGBASM is sensitive to whitespace.

Quoting [the documentation on symbol definition](http://localhost:4000/docs/v0.4.1/rgbasm.5#SYMBOLS):

> *In the line where a symbol is defined there must not be any whitespace before it*, otherwise `rgbasm` will treat it as a macro invocation.

If you were trying to call a macro on that line, make sure there is whitespace (spaces or tabs) before the macro's name. For example, the following will trigger the error:

{% highlight nasm %}
my_macro: MACRO
	; Cool stuff
ENDM
my_macro
{% endhighlight %}

And this fixes it:

{% highlight nasm %}
my_macro: MACRO
	; Cool stuff
ENDM
	my_macro
{% endhighlight %}
