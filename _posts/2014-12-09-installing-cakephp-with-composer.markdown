---
layout: post
title:  "Installing CakePHP with Composer"
date:   2014-12-09 16:44:17
categories: php cakephp composer
comments: true
---
####Installation

To install CakePHP with Composer in your project, I prefer to move the folders from the standard 2.x directory structure to the root level.

    - app
        - Config
        - Console
        - Controller
        ...
        - webroot
        .htaccess
        composer.json
        index.php
    - lib
        - Cake
    - plugins
    - vendors
    ...

to

    - Config
    - Console
    - Controller
    ...
    - webroot
    .htaccess
    composer.json
    index.php

#####composer.json
{% highlight json linenos=table %}
{
    "name": "test/a-new-project",
    "description": "A new Project",
    "config": {
        "vendor-dir": "Vendor"
    },
    "require": {
		"cakephp/debug_kit": "2.2.*",
        "cakephp/cakephp": "2.5.*"
    },
    "authors": [
        {
            "name": "Test T.",
            "email": "test@test.com"
        }
    ]
}
{% endhighlight %}

#####webroot/index.php - define the CAKE\_CORE\_INCLUDE\_PATH
{% highlight php linenos=table %}
define(
    'CAKE_CORE_INCLUDE_PATH',
    ROOT . DS . APP_DIR . DS . 'Vendor' . DS . 'cakephp' . DS . 'cakephp' . DS . 'lib'
);
{% endhighlight %}

#####Console/cake.php - replace the whole file (fixes console commands)
{% highlight php linenos=table %}
#!/usr/bin/php -q
<?php
/**
 * Command-line code generation utility to automate programmer chores.
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Console
 * @since         CakePHP(tm) v 2.0
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

if (!defined('DS')) {
	define('DS', DIRECTORY_SEPARATOR);
}

$dispatcher = 'Cake' . DS . 'Console' . DS . 'ShellDispatcher.php';

if (function_exists('ini_set')) {
	$root = dirname(dirname(dirname(__FILE__)));
	$appDir = basename(dirname(dirname(__FILE__)));
	$install = $root . DS . 'lib';
	$composerInstall = $root . DS . $appDir . DS . 'Vendor' . DS . 'cakephp' . DS . 'cakephp' . DS . 'lib';

	// the following lines differ from its sibling
	// /lib/Cake/Console/Templates/skel/Console/cake.php
	if (file_exists($composerInstall . DS . $dispatcher)) {
		$install = $composerInstall;
	}

	ini_set('include_path', $install . PATH_SEPARATOR . ini_get('include_path'));
	unset($root, $appDir, $install, $composerInstall);
}

if (!include $dispatcher) {
	trigger_error('Could not locate CakePHP core files.', E_USER_ERROR);
}
unset($dispatcher);

return ShellDispatcher::run($argv);
{% endhighlight %}