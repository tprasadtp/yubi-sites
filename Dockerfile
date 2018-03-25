FROM jekyll/builder
LABEL maintainer "Prasad Tengse"
WORKDIR /srv/jekyll
RUN bundler install
CMD ["jeykyll serve"]