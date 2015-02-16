---
layout: post
title:  "Install composer on Amazon AMI Running on EC2"
date:   2015-02-15 13:37:17
categories: composer amazon ami ec2 install
comments: true
---

I've had a few people tell me this has come in handy:

#####In console
{% highlight bash linenos=table %}
$ cd ~
$ sudo curl -sS https://getcomposer.org/installer | sudo php
$ sudo mv composer.phar /usr/local/bin/composer
$ sudo ln -s /usr/local/bin/composer /usr/bin/composer
 
then you can run 
$ sudo composer install
{% endhighlight %}