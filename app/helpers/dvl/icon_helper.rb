require 'dvl/icons/definitions'

module Dvl::IconHelper
  include ActionView::Helpers::TagHelper
  include ActionView::Context

  def icon(name, opts = {})
    classes = ['icon', "icon_#{name}"]

    if opts[:size]
      if opts[:size].to_s.in? %w(sm lg xl)
        classes << "icon_#{opts[:size]}"
      else
        fail 'Invalid icon size'
      end
    end

    content_tag(
      :svg,
      class: classes.join(' '),
      role: 'img',
      version: '1.1',
      viewbox: '0 0 24 24'
    ) {
      Dvl::Icons::Definitions.const_get(name.upcase).html_safe
    }
  end
end
