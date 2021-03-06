---
id: one-of
title: one_of
---


## Content Family: OneOf
#### Content: OneOf
`OneOf` is similar in principle to the `Categorical` but variants can be arbitrary content types.

`OneOf` has a concept of a `weight` per entry - where weight represents the individual entry's contribution to the probability distribution.

Below is an example of a field `address` taking the value of a `Content::String` address generated by faker, or a `Content::Object`. 

###### Example
```json
"address" : {
    "type": "one_of",
    "variants": [
        {
            "type": "string",
            "faker": {
                "generator": "address"
            },
            "weight" : 9.5
        },
        {
            "weight" : 0.5,
            "type": "object",
            "postcode": {
                "type": "string",
                "faker": {
                    "generator": "postcode"
                }
            },
            "number": {
                "type": "number",
                "subtype": "u64",
                "range": {
                    "low": 1,
                    "high": 200,
                    "step": 2
                }
            }
        }
    ]
}
```

###### Example Output
```json
[
    {
      "address": "88292 Griffin Squares\nPort Luistown, IL 76037"
    },
    {
      "address": "839 Duffy Street\nLake Nicole, DC 70017"
    },
    {
      "address": {
        "number": 149,
        "postcode": "58762"
      }
    },
    {
      "address": {
        "number": 159,
        "postcode": "44704"
      }
    },
    {
      "address": "207 Nicholas Loop Apt. 012\nRobertview, NV 01670"
    }
  ]
```
