---
layout: post
title:  "Setting up a new Macbook Pro"
date:   2014-11-26 13:44:17
categories: jekyll update
comments: true
---
One of the most horrifying things for a developer is to watch your computer lock up for 10 - 20 minutes and not know if it will just snap out of it and continue working. Even worse is, after all else fails, restarting the computer and having it continously crash during boot.

####RIP - Macbook Pro

After 2 years of running it ragged and keeping the fans at full blast just so it wouldn't overheat, the stress caught up with my little Late 2011 Macbook Pro.

####A New Hope

Starting a fresh machine is like wearing a new pair of shoes - it's awesome and you want to start running right away, but I need to spend my time breaking it in.

I'll continue to update this as I run into more things that I missed, but meanwhile, here are my shortlists:

####The App List

1. [Chrome][chrome]
2. [Dropbox][dropbox] (shout out to [Drew Houston][drew])
3. [Textmate 2][textmate2]
4. [MAMP][mamp]
5. [Sequel Pro][sequelpro]
6. [Evernote][evernote]
7. [Skype][skype]
8. [VLC][vlc]
9. [Google Drive][gdrive]
10. [Spotify][spotify]
11. [Adobe Photoshop][photoshop]
12. [Github for Mac][github]

####The Utlities

#####[Git][git]
{% highlight bash %}
$ git
{% endhighlight %}

#####[Homebrew][homebrew]
{% highlight bash %}
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

#####[Composer][composer]
{% highlight bash %}
$ curl -sS https://getcomposer.org/installer | sudo php
$ mv composer.phar /usr/local/bin/composer
$ sudo ln -s /usr/local/bin/composer /usr/bin/composer
{% endhighlight %}

#####[Jekyll][jekyll]
{% highlight bash %}
$ gem install jekyll
{% endhighlight %}

#####[PHP-CS-Fixer][fixer]
{% highlight bash %}
$ curl http://get.sensiolabs.org/php-cs-fixer.phar -o php-cs-fixer
$ sudo chmod a+x php-cs-fixer
$ sudo mv php-cs-fixer /usr/local/bin/php-cs-fixer
# usage
$ php-cs-fixer fix /path/to/dir
{% endhighlight %}

####The Configuration

#####[.bash\_profile][bash_profile]
{% highlight bash %}
export PATH=/Applications/MAMP/bin/php/php5.6.2/bin:$PATH
{% endhighlight %}

[chrome]: https://www.google.com/chrome/
[dropbox]: https://www.dropbox.com/downloading?os=mac
[drew]: https://twitter.com/drewhouston
[textmate2]: http://macromates.com/download
[mamp]: http://www.mamp.info/en/downloads/
[sequelpro]: http://www.sequelpro.com/
[evernote]: https://evernote.com/download/
[skype]: http://www.skype.com/en/download-skype/skype-for-mac/downloading/
[vlc]: http://www.videolan.org/vlc/download-macosx.html
[gdrive]: https://tools.google.com/dlpage/drive
[spotify]: https://www.spotify.com/us/download/mac/
[photoshop]: https://www.adobe.com/
[github]: https://mac.github.com/
[git]: http://git-scm.com/
[homebrew]: http://brew.sh/
[composer]: https://getcomposer.org/
[jekyll]: jekyllrb.com
[fixer]: https://github.com/FriendsOfPHP/PHP-CS-Fixer
[bash_profile]: http://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html