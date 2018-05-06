module Jekyll

  class CategoryPage < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), site.config['blog']['category']['layout'])
      self.data['category'] = category

      category_title_prefix = site.config['blog']['category']['title_prefix'] || 'blog - category: '
      self.data['title'] = "#{category_title_prefix}#{category}"
      self.data['filter_category'] = "#{category}"
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'category'
        dir = site.config['blog']['category']['dir'] || 'blog/category/'
        site.config["categories_list"].each do |category|
          category_name = category.gsub(/\s+/, '-').downcase
          file_name = category_name + "/index.html"
          site.pages << CategoryPage.new(site, site.source, File.join(dir, category_name), category)
        end
      end
    end
  end

end
