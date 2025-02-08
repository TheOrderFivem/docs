# SendAlert



<pre class="language-lua"><code class="lang-lua">local Bridge = exports.community_bridge:Bridge()

local data = {
        vehicle = vehicle or nil,
        plate = vehicle and GetVehicleNumberPlateText(vehicle) or nil,
        ped = ped,
        pedCoords = ped and GetEntityCoords(ped),
        coords = GetEntityCoords(ped),
        blipData = {
            sprite = 161,
            color = 1,
            scale = 0.8,
        },
        message = "Vehicle is being stolen",
        code = '10-80',
        icon = 'fas fa-question',
        jobs = {'police'},
        alertTime = 10
}

-- The above is an exmaple but covers all supported keys

<strong>Bridge.Dispatch.SendAlert(data)
</strong>
</code></pre>
