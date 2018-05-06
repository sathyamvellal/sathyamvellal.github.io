module Jekyll
  module RegexFilter
    def replace_regex(input, reg_str, repl_str)
      if input != nil
        re = Regexp.new(reg_str)
        input.gsub(re, repl_str)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)
