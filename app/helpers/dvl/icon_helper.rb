require 'dvl/icons/definitions'

module Dvl::IconHelper
  include ActionView::Helpers::TagHelper
  include ActionView::Context

  def icon(name, opts = {})
    classes = ['icon', "icon_#{name}"]

    content_tag(
      :svg,
      class: classes.join(' '),
      role: 'img',
      version: '1.1',
      viewbox: '0 0 24 24',
      'aria-hidden' => !opts[:title]
    ) {
      opts[:title] ? content_tag(title, opts[:title]) : '' +
      Dvl::Icons::Definitions.const_get(name.upcase).html_safe
    }
  end
end
