cmapi.channel["map.overlay.create"] = {
    schema: {
    "map.overlay.create": {
        "type": "Overlay",
        "description": "Create an overlay into which data can be aggregated.",
        "properties": {
            "name": {
                "description": "The name of the overlay. If not included, the ID is used as the name. Note that overlay names do not have to be unique and are intended for display purposes only.",
                "type": "string",
                "required": false
            },
            "overlayId": {
                "description": "The unique ID of the new overlay. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will have no effect. Note that overlay IDs must be unique even across multiple parent overlays.",
                "type": "string",
                "required": false
            },
            "parentId": {
                "description": "The ID of the parent overlay in which to create this overlay.",
                "type": "string",
                "required": false
            }
        }
    }
},
notes : []
}