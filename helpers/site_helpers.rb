
# Helpers & global variables
module SiteHelpers

    # def daticon(path, *p)
    #     File.open('source/assets/icons/'+path+'.svg', "r").read
    # end
    # def daticavg(path, *p)
    #     File.open('source/assets/img/'+path+'.svg', "r").read
    # end

    # The idea here is to display a quote based on customer.slug.
    # def customer_quote(slug)
        # quote = data.site.quotes.to_a.find { |p| p[1]['customer']['slug'] == slug }
        # p["quote_body"]
        # partial("partials/snippets/quote", :locals => { :p => quote[1] })
    # end

    def get_previous_item(items, current_item, sort_by_key, reverse=false)
        if !items.kind_of?(Array)
            items = items.to_a
        end
        sorted = items.sort_by! { |id, i| i[sort_by_key] }
        if reverse == true
            sorted = sorted.reverse!
        end
        current_index = sorted.index([current_item['id'], current_item])
        previous_item = nil
        if current_index != nil && current_index > 0
            previous_item = sorted.fetch(current_index-1)[1]
        end
        return previous_item
    end
    def get_next_item(items, current_item, sort_by_key, reverse=false)
        if !items.kind_of?(Array)
            items = items.to_a
        end
        sorted = items.to_a.sort_by! { |id, i| i[sort_by_key] }
        if reverse == true
            sorted = sorted.reverse!
        end
        current_index = sorted.index([current_item['id'], current_item])
        next_item = nil
        if current_index != nil && current_index < sorted.length-1
            next_item = sorted.fetch(current_index+1)[1]
        end
        return next_item
    end

    # def get_cf_item_by_key(items, key_value, key_name)
    #     #TODO do this without the to_a
    #     ary = items.to_a

    #     key_name = key_name.split(".")

    #     ret_val = nil
    #     ary.each do |id, item|
    #         check_item = nil
    #         #copy key_name
    #         cur_key_name = key_name
    #         #Make sure there's at least one thing
    #         if cur_key_name.length > 0
    #             check_item = item[cur_key_name[0]]
    #             cur_key_name = cur_key_name.drop(1)
    #             if cur_key_name.length > 0
    #                 cur_key_name.each do |key|
    #                     check_item = check_item[key]
    #                 end
    #             end
    #         end
    #         if check_item == key_value
    #             ret_val = item
    #         end
    #     end
    #     return ret_val
    # end
    # def get_tag_list(tags)
    #     tag_stringArray = Array.new
    #     tags.each do |tag|
    #         if tag.has_key?('tag_full')
    #             tag_stringArray.push(tag['tag_full'])
    #         end
    #     end
    #     return tag_stringArray.join(', ')
    # end
    # # Converts any markdown first to html, then strips tags
    # def plain_text(item)
    #     source_text = Kramdown::Document.new(item).to_html
    #     return strip_tags(source_text)
    # end
    # # Converts any markdown first to html, then strips tags, then truncates approx 160 chr
    # def safe_summary(item)
    #     source_text = Kramdown::Document.new(item).to_html
    #     return truncate_words(strip_tags(source_text), :length => 45)
    # end
    # # some common SVG sprites
    # def icon_permalink
    #     '<svg class="icon icon-size--small" viewBox="0 0 37 34" width="37" height="34"><use xlink:href="/public/icons/util-icons-sprite.svg#icon-links"></use></svg>'
    # end
    # def icon_tag
    #     '<svg class="icon icon-size--small" width="27" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32"><use xlink:href="/public/icons/util-icons-sprite.svg#icon-tag"></use></svg>'
    # end
    #  # super tiny images to use as src preloaders while lozad loads main image
    # def loader_rect
    #     "https://images.ctfassets.net/189dvqdsjh46/60M3sIMdt8dyJUuX1a5oJw/ce77d30769d913103fcf480dee9df865/loader-rect.png"
    # end
    # def loader_square
    #     "https://images.ctfassets.net/189dvqdsjh46/10BSgwANXD4R7OKMT1j20G/3ba1fd760173695d4e4fb9ec4199fab9/loader-square.png"
    # end
    # def loader_square_svg
    #     "https://images.ctfassets.net/189dvqdsjh46/14EaN5W0ItsJ3B8V8LfrWS/02dd779de703aa4925587ef089bd9953/loader-square.svg"
    # end
    # def loader_disc
    #     "https://images.ctfassets.net/189dvqdsjh46/vF47dwGxa0HXRIENBELUG/2061b735cacc34af74a85f337f471550/loader-disc.png"
    # end
    # def loader_disc_svg
    #     "https://images.ctfassets.net/189dvqdsjh46/7dsvS1pbuo2etN908phqGD/4acf3ebbf566f0f31cf74882f6faa3e8/loader-disc.svg"
    # end
end
