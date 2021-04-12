FRRouting.org
-------------

The FRRouting site is powered by Hugo, a static-site generator.

```
content/
    Markdown files forming the basis information on the site
layouts/
    HTML framing for markdown content above
static/
    Images, CSS, PDFs etc.
www/
    Output folder for rendered HTML files
```

Hugo and git are the only dependencies (aside from the web-server) and can be
installed via:

```
apt-get install hugo git
```

If Hugo is not available in the system package manager it may be easily
installed as a Go binary according to [Hugo's install
instructions](https://gohugo.io/getting-started/installing/).

Documenting a New Release
-------------------------

All releases are documented in `content/release/`. To add a new release, simply
copy an old release file and edit its contents to reflect the new release
version, date and changelog.

New Site Installation
---------------------

The site is entirely static and consequently only needs to be generated when
changes are made to the source directory. These steps will clone the templating
code and generate HTML pages in `www/` for webserver hosting:

```
cd /var/www
sudo git clone git@github.com:FRRouting/frr-www.git
cd frr-www
# Simple testing w/o nginx
hugo --bind 0.0.0.0 server
# Build webpages in www/
hugo
```

Ensure the correct permissions on the new directories:

```
sudo addgroup frr-web
sudo addgroup ${USER} frr-web
sudo chgrp -R frr-web /var/www/frr-www
sudo chmod g+s /var/www/frr-www
sudo chmod g+s /var/www/frr-www/www/community
sudo chmod g+s /var/www/frr-www/www/user-guide
```

Finally, install the encrypted SSL certs. **NOTE**: Installation of SSL certs
requires GPG password.

```
cd /var/www/frr-www
sudo cp nginx/frr.conf /etc/nginx/sites-available/frr.conf
sudo ln -s /etc/nginx/sites-available/frr.conf /etc/nginx/sites-enabled/frr.conf
sudo mkdir /etc/nginx/ssl
sudo cp nginx/frrouting.ssl.tar.gpg /etc/nginx/ssl
cd /etc/nginx/ssl
sudo gpg frrouting.ssl.tar.gpg
sudo tar xf frrouting.ssl.tar
sudo chmod u=rw *
```

Restart the web server and (assuming you have some files in `www/` everything
should come up as expected!

```
sudo service nginx restart
```

It may also be possible to automate this workflow using Git hooks.

