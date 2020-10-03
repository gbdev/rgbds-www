
# rgbds-www

This is the source of the official RGBDS website at [https://rgbds.gbdev.io](https://rgbds.gbdev.io).

We use [Jekyll](https://jekyllrb.com/) and [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages).

Note that a bot is set up to automatically update `master` documentation (`_documentation/master/`) every time the man pages at https://github.com/gbdev/rgbds/ are updated.

## Setting up

You will need [Bundler](https://bundler.io/), which you may be able to get using your favorite package manager.

From the root of the repository (i.e. the directory that this file is in), first run `bundle install` to install all dependencies (by default to the `vendor` directory). This is only needed once.

Afterwards, testing the site is as simple as running `bundle exec jekyll serve`, which will start a web server and tell you the URL to open in your browser. Modifying files generally does not require restarting the server, *except* `_config.yml`.

## Organization

Note that directories and files prefixed with an underscore or a dot (.) are *not* part of the website, but

- `_data`: Global website information.
  - `doc.json`: Which versions of the documentation are available.
  - `nav.json`: The navigation hierarchy used for breadcrumbs.
- `_documentation`: Where the online `man` pages live. Each version (see `_data/doc.json`) gets its own folder; the `html` pages directly in the folder should redirect to the latest stable version.
- `_installation`: Installation procedures for various OSes.
- `_layouts`: [Jekyll layouts](https://jekyllrb.com/docs/layouts/).
- `_sass`: [Sass](https://sass-lang.com/) style sheets that do not get directly served; generally `@include`d from within `css/`.
- `assets`: Assets to be served on the site; currently only images.
- `css`: Stylesheets to be served directly on the site.
- `404.html`: The page displayed when something cannot be found.
- `CNAME`: The domain name that the site is served at. Don't touch!
- `favicon.ico`: The site's favicon. At the root of the site, instead of `assets/`, for compatibility.
- `Gemfile`: Specifies the Ruby libraries ("gems") required by this site.
- `Gemfile.lock`: Specifies the libraries installed.
