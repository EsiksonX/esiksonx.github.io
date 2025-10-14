---
permalink: /publications/
title: "Publications"
author_profile: true
redirect_from: 
  - /publications.html
---

## Journal Articles

{% assign journals = site.publications | where: "pub_type", "Journal Articles" | sort: "date" | reverse %}
{% for pub in journals %}
  {% include pub-card.html pub=pub %}
{% endfor %}


## Conference Papers

{% assign confs = site.publications | where: "pub_type", "Conference Papers" | sort: "date" | reverse %}
{% for pub in confs %}
  {% include pub-card.html pub=pub %}
{% endfor %}


## Preprint

{% assign preprints = site.publications | where: "pub_type", "Preprint" | sort: "date" | reverse %}
{% for pub in preprints %}
  {% include pub-card.html pub=pub %}
{% endfor %}