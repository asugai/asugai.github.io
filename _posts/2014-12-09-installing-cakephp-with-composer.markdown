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

#####composer.json - phpunit included
{% highlight json linenos=table %}
{
    "name": "{useraname}/{project-name}",
    "description": "Example Project",
    "config": {
        "vendor-dir": "Vendor"
    },
    "require": {
		"cakephp/debug_kit": "2.2.*",
        "cakephp/cakephp": "2.5.*",
        "phpunit/phpunit": "3.7.*"
    },
    "authors": [
        {
            "name": "Andre Sugai",
            "email": "example@example.com"
        }
    ]
}
{% endhighlight %}

#####webroot/index.php - define the CAKE\_CORE\_INCLUDE\_PATH
{% highlight php linenos=table %}
<?php
//...
define(
    'CAKE_CORE_INCLUDE_PATH',
    ROOT.DS.APP_DIR.DS.'Vendor'.DS.'cakephp'.DS.'cakephp'.DS.'lib'
);
{% endhighlight %}

#####webroot/test.php - define the CAKE\_CORE\_INCLUDE\_PATH
{% highlight php linenos=table %}
<?php
//...
define(
    'CAKE_CORE_INCLUDE_PATH',
    ROOT.DS.APP_DIR.DS.'Vendor'.DS.'cakephp'.DS.'cakephp'.DS.'lib'
);
{% endhighlight %}

#####Config/bootstrap.php - Fixes autoloader issues
{% highlight php linenos=table %}
<?php
//...
// Load composer autoload.
require APP.'Vendor'.DS.'autoload.php';

// Remove and re-prepend CakePHP's autoloader as composer thinks it is the most important.
// See https://github.com/composer/composer/commit/c80cb76b9b5082ecc3e5b53b1050f76bb27b127b
spl_autoload_unregister(array('App', 'load'));
spl_autoload_register(array('App', 'load'), true, true);
{% endhighlight %}

#####Console/cake.php - If you are using an older version of cake (<2.6) replace the whole file (fixes console commands)
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

$dispatcher = 'Cake'.DS.'Console'.DS.'ShellDispatcher.php';

if (function_exists('ini_set')) {
    $root = dirname(dirname(dirname(__FILE__)));
    $appDir = basename(dirname(dirname(__FILE__)));
    $install = $root.DS.'lib';
    $composerInstall = $root.DS.$appDir.DS.'Vendor'.DS.'cakephp'.DS.'cakephp'.DS.'lib';

    // the following lines differ from its sibling
    // /lib/Cake/Console/Templates/skel/Console/cake.php
    if (file_exists($composerInstall.DS.$dispatcher)) {
        $install = $composerInstall;
    }

    ini_set('include_path', $install.PATH_SEPARATOR.ini_get('include_path'));
    unset($root, $appDir, $install, $composerInstall);
}

if (!include $dispatcher) {
    trigger_error('Could not locate CakePHP core files.', E_USER_ERROR);
}
unset($dispatcher);

return ShellDispatcher::run($argv);
{% endhighlight %}

#####.travis.yml - a sample file showing how to set up file paths
{% highlight yaml linenos=table %}
language: php

php:
  - 5.5

before_script:
  - composer install
  - sh -c "mysql -u travis -e 'CREATE DATABASE test;'"
  - chmod -R 777 tmp
  - echo "<?php
    class DATABASE_CONFIG
    {
      public \$test = array(
          'datasource' => 'Database/Mysql',
          'persistent' => false,
          'host' => '0.0.0.0',
          'login' => 'travis',
          'password' => '',
          'database' => 'test',
          'prefix' => '',
          'encoding' => 'utf8'
      );
    }" > Config/database.php 

script:
  - ./Console/cake test app All

notifications:
  email: false;
{% endhighlight %}