# Encrypted Web
-------------------------------------------------------------------------------

Encrypted Web is a "fork" of [HTTPS-Everywhere](https://eff.org/https-everywhere) ([GitHub](https://github.com/EFForg/https-everywhere/)) for the [Pale Moon] (http://www.palemoon.org/) browser.

## Installing
-------------------------------------------------------------------------------

The extension files are available on the [releases page](https://github.com/squarefractal/encryptedweb/releases). To install the extension, click on the encryptedweb-*.xpi link.

Some older version releases have the XPI within a ZIP file.

## Building it yourself
-------------------------------------------------------------------------------

Get the packages you need and install a git hook to run tests before push:

    sudo apt-get install libxml2-dev libxml2-utils libxslt1-dev python-dev zip sqlite3 python-pip zlib1g-dev libcurl4-openssl-dev
	sudo pip install lxml

Run the tests for the Pale Moon version:

    bash test.sh

Build the Pale Moon extension as a .xpi package:

    bash makexpi.sh

Both of the build commands store their output under pkg/.

## Precommit Testing
-------------------------------------------------------------------------------

One can run the available test suites automatically by enabling the precommit
hook provided with:

    ln -s ../../hooks/precommit .git/hooks/pre-commit

## Source Tree
-------------------------------------------------------------------------------

This is the source tree for HTTPS Everywhere for Pale Moon.

Important directories you might want to know about

    src/                      The Pale Moon source

    src/components            |
    src/chrome/content        | Pale Moon JS+XUL
    src/chrome/content/code   |

    src/chrome/content/rules  The rulesets live here

## Hacking on the Source Code
-------------------------------------------------------------------------------

Please submit changes by making a pull request to this repository. Issues may be reported via the bug tracker in this repository.

## Writing rulesets
-------------------------------------------------------------------------------

Please submit your rulesets to the HTTPS Everywhere project. Rulesets will be pulled from upstream from time to time.


Tests
-------------------------------------------------------------------------------

There are some very basic unittests under https-everywhere-tests/. These are run with

    bash test.sh

Please help write more unittests and integration tests!

There are also ruleset tests, which aim to find broken rulesets by actually
loading URLs in a browser and watching for Mixed Content Blocking to fire.
The easiest way to run ruleset tests is to load a standalone Firefox instance
with the tests enabled:

    bash test.sh --justrun

Then click the HTTPS Everywhere icon on the toolbar, and click "Run HTTPS
Everywhere Ruleset Tests." When you run the tests, be prepared to let your
computer run them for a really long time.
