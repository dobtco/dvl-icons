require 'dvl/icons/definitions'

module Dvl::IconHelper
  def icon(name)
    Dvl::Icons::Definitions.const_get(name.upcase).html_safe
  end
end
