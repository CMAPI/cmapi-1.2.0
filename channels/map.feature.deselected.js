cmapi.channel["map.feature.deselected"] = {
     "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.feature.deselected",
         "description": "De-Select, or report that object was de-selected.",
         "properties": {
             "deSelectedId": {
                 "description": "The ID of the object to be de-selected (may be a sub-feature contained within the aggregate feature data with the given featureId).",
                 "type": "string",
				 "default": "N/A"
             },
             "deSelectedName": {
                 "description": "The name of the de-selected object.",
                 "type": "string",
				 "default": "N/A"
             },
             "featureId": {
                "description": "The ID of the feature that contains the de-selected object.",
                "type": "string",
				"default": "N/A"
             },
			 "overlayId": {
                "description": "The ID of the overlay which contains the de-selected object. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
                "type": "string",
				"default": "sending widget's ID"
             }
         },
         "required" : ["featureId"]
     },
     "notes" : [
        "Although both deSelectedId and deSelectedName are optional, one MUST be passed in if a sub-feature is to be identified. Generally, deSelectedId is preferred and deSelectedName is used when no deSelectedId is available.",
        "The expected behavior resulting from this message is that this feature will be removed from the list of currently selected features (see map.status.selected below).  If the identified feature is not currently selected when the message is received, then the map widget SHOULD ignore this message (i.e., this message is idempotent)."
     ]
 }