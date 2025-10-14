---
permalink: /
title: "Yang Xiang"
author_profile: true
redirect_from:
  - /about
  - /about.html
---

## About Me
I am a second-year PhD Candidate in Computer Science Department at the University of Liverpool (UoL), based at Xi'an Jiaotong-Liverpool University (XJTLU), jointly supervised by Dr. Chengtao Ji, Prof. Yong Yue (XJTLU) and Dr. Lutz Oettershagen (UoL).

My research interests include trustworthy graph learning and recommendation systems. I am particularly interested in exploring the robustness, explainability, and fairness of graph neural networks (GNNs) and their applications in various domains. You can refer to my publications for more details about my research work.

And I am open to collaborations and discussions on these topics or other interesting areas. Feel free to reach out to me via ([email](mailto:Y.Xiang17@liverpool.ac.uk) \| [X](https://x.com/xiang01_yang)).

## News & Updates
{% assign recent_updates = site.updates | sort: 'date' | reverse %}
{% for update in recent_updates limit:5 %}
  {% include update-card.html update=update %}
{% endfor %}