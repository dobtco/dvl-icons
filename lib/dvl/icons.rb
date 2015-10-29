require 'dvl/icons/version'

module Dvl
  module Icons
    if defined?(Rails)
      class Engine < ::Rails::Engine
      end
    end
  end
end
