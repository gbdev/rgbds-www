---
layout: default
permalink: /install
title: Installing
---

# Installing RGBDS

Please select one OS from those below:
{% for os in site.installation %}
	{% if os.name %}
- [{{ os.name }}]({{ os.url }})
	{% endif %}
{% endfor %}

If your OS isn't listed above, try finding `rgbds` in your package manager. If you can't find it, you will have to compile RGBDS from source. The instructions are linked to below.

## Build from source

If you can't find RGBDS packaged for your OS, you can [build it from source]({{ site.baseurl }}/install/source). In this way, you can also build a specific version.

If you [want]({{ site.baseurl }}/docs/master/#what), you can use the [`master`]({{ site.baseurl }}/install/master) branch.
