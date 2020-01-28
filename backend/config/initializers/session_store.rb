if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_foodcrwlr_app", domain: "https://foodcrwlr-app.herokuapp.com"
else
  Rails.application.config.session_store :cookie_store, key: "_foodcrwlr_app"
end
