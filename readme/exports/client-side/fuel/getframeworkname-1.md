# CreateVehicle



<pre class="language-lua"><code class="lang-lua">local Bridge = exports.community_bridge:Bridge()

-- model can be number or string, it will check
-- This will request the model for you so no need to do it beforehand
-- coords vector3/4
-- heading 0.0 or any other
-- networked if you want the vehicle to be networked or not

<strong>local vehicle, additionalInfo = Bridge.Utility.CreateVehicle(model, coords, heading, networked)
</strong><strong>
</strong>-- this will return the entity handle in vehicle
-- additionalInfo will return a table with the keys networkid (with either the netid or 0) , coords (a vector3 of the entity ), heading (heading of the entity)

</code></pre>

