# CreateBlip



<pre class="language-lua"><code class="lang-lua">local Bridge = exports.community_bridge:Bridge()

-- coords - this can be a vector 2/3/4
-- sprite - this would be the blip icon
-- color - this would be the blip color
-- scale - this would be the size of the blip (usually 0.8)
-- shortrange - this is how it would appear on the minimap. If you can see it on the
-- minimap only at short range (proximity) then pass true, if you wish to always see it pass false

<strong>local myBlip = Bridge.Utility.CreateBlip(coords, sprite, color, scale, label, shortRange)
</strong><strong>
</strong><strong>-- myBlip will return the blip handle
</strong>
</code></pre>

