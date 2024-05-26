FROM debian:10.1

EXPOSE 9100

LABEL maintainer="Leszek Rączka <leszek.raczka@ponadnorme.pl>"

RUN apt-get update \
  && apt-get -y \
    install \
      curl \
      wget

RUN apt-get update \
  && apt-get -y \
    install \
      lsb-release \
      apt-transport-https \
      ca-certificates \
      libgnutls30

# Install Nginx and other dependencies
RUN apt-get update \
  && apt-get -y \
    install \
      nginx \
      git \
      unzip \
      supervisor \
      acl \
      vim

# Node.js setup
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get update \
  && apt-get install -y nodejs

# Nginx site configuration
COPY ./nginx-site.conf /etc/nginx/sites-available/default

# Adjust the permissions for the Nginx root directory
RUN chown -R www-data:www-data /var/www/html

# Supervisor configuration
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN adduser docker \
  && usermod -p $(openssl passwd asd) docker

# Set the working directory to the root of your web app
WORKDIR /srv/www/website.local

CMD ["/usr/bin/supervisord"]
