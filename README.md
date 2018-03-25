# List of sites supporting various Yubikey Authentication methods.

[![Build Status](https://travis-ci.org/tprasadtp/yubi-sites)](https://travis-ci.org/tprasadtp/yubi-sites/)
[![License](https://img.shields.io/badge/license-mit-blue.svg?style=flat)](/LICENSE)

A list of popular sites and whether or not they accept Yubikey Features

## The Goal

The goal is to build a website ([yubikey.prasadt.com](https://yubikey.prasadt.com)) with a comprehensive list of sites that support
Yubikey Features like u2f, Yubicloud OTP, PIV (Smart card), HMAC Challenge-Response, OATH_HOTP, Static password modes. PGP is exluded.

## Contributing

If you'd like to contribute, read the entire guidelines here in
[CONTRIBUTING.md][contrib].

## Running Locally

This project is built upon [Jekyll](https://jekyllrb.com/).
In order to run the site locally, it is necessary to install bundler, install all dependencies, and then use Jekyll to serve
the site. If the `gem` command is not available to you, it is necessary to install Ruby with RubyGems.
Once Ruby and RubyGems are installed and available from the command line, TwoFactorAuth can be setup using the following commands.
Alternatively you can use Docker.

``` bash
gem install bundler
cd ~/twofactorauth
bundle install
bundle exec jekyll serve
```

OR

```bash
docker-compose up
```

Website should then be accessible from `http://localhost:4000`.

## License

This code is distributed under the MIT license. For more info, read the
[LICENSE][license] file distributed with the source code.

[contrib]: /CONTRIBUTING.md
[license]: /LICENSE

## Credits

Javascript and the code is based on twofactorauth.org