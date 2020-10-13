---
layout: faq
permalink: /faq
title: FAQ
description: Frequently Asked Questions about RGBDS
---

# FAQ

Here you can find solutions to common RGBDS problems and errors.

{% for question in site.faq %}
- [{{ question.question }}](#{{ question.path | split: "/" | last | split: "." | first }})
{% endfor %}

<div itemscope itemtype="https://schema.org/FAQPage">
	{% for question in site.faq %}
	<article itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name" id="{{ question.path | split: "/" | last | split: "." | first }}">{{ question.question | markdownify }}</h2> <a class="totop" href="#" title="Go back to top">↑</a>
		<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
			<div itemprop="text">
				{{ question.content | markdownify }}
			</div>
		</div>
	</article>
	{% endfor %}
</div>
