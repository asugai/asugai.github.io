---
layout: post
title:  "Loading Timezone Tables in MAMP (MYSQL CONVERT_TZ)"
date:   2015-02-11 13:37:17
categories: mamp timezones convert_tz
comments: true
---

This caused me quite a bit of trouble so here it is:

#####In console
{% highlight bash linenos=table %}
/Applications/MAMP/Library/bin/mysql_tzinfo_to_sql /usr/share/zoneinfo | \
/Applications/MAMP/Library/bin/mysql -u root -p mysql
{% endhighlight %}