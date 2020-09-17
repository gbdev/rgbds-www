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

## Alternative methods

You can [build RGBDS from source](/install/source), for example if you want to get a specific version.

If [it's what you want](/docs/master/#what), you can [use `master`](/install/master).
