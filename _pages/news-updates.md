---
permalink: /news-updates/
title: "News & Updates"
author_profile: true
redirect_from: 
  - /news-updates.html
---

{% assign recent_updates = site.updates | sort: 'date' | reverse %}
{% for update in recent_updates %}
  {% include update-card.html update=update %}
{% endfor %}