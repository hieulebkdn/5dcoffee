# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')
Rails.application.config.assets.precompile += %w(bootstrap.css bootstrap.min.css
  custom.scss default.css fancybox.css overwrite.css prettyPhoto.css animate.css
  bootstrap-theme.css custom-fonts.css slippry.css fancybox/jquery.fancybox.css style.css sidebar.css )
Rails.application.config.assets.precompile += %w( cable.js animate.js bootstrap.js classie.js
  custom.js jquery-1.9.1.min.js jquery.min.js jquery.nav.js jquery.scrollTo.js
  masonry.pkgd.min.js modernizr.custom.js nagging-menu.js slippry.min.js validate.js )


# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
