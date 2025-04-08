# Open

<pre class="language-lua"><code class="lang-lua">local Bridge = exports.community_bridge:Bridge()

Bridge.ProgressBar.Open(options)
<strong>
</strong><strong>
</strong><strong>
</strong><strong>
</strong><strong>Bridge.ProgressBar.Open({
</strong>    duration = duration,
    label = label,
    disable = {
        move = true,
        combat = true
    },
    anim = {
        dict = animation.dict,
        clip = animation.clip,
        flag = 49,
    }
}, function(cancelled)
    if not cancelled then return true end
    return false
end)
</code></pre>
