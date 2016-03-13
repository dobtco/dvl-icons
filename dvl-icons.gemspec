$:.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'dvl/icons/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name = 'dvl-icons'
  s.version = Dvl::Icons::VERSION
  s.required_ruby_version = Gem::Requirement.new('>= 2.0.0')
  s.authors = ['Adam Becker']
  s.summary = 'DOBT icon font.'
  s.email = 'adam@dobt.co'
  s.files = `git ls-files`.split("\n")
  s.test_files = `git ls-files -- {features,spec}/*`.split("\n")
  s.homepage = 'http://github.com/dobtco/dvl-icons'
  s.add_dependency 'sass'
end
