const result = () => {
    return {
        "data": {
          "context": {
            "status": "incomplete",
            "sessionId": "ClQIARJQCk4KJGMwMTNmMDlkLWJlYTktNDViZi05N2RhLWY3MGRlNWUyYzJhOBACGiRlMDhhYWExYi04N2VkLTQ2NTAtOWU3NC1iZWY1NzAzNjFmODUSKHVzc184ZTNiZjZjYi04Mjc5LTQwZTctYWE4Yy04MDc3OWEwMmY2ODI=",
            "totalResults": 10
          },
          "itineraries": [
            {
              "id": "10413-2408222130--31435-0-10075-2408230950",
              "price": {
                "raw": 374.16,
                "formatted": "$375",
                "pricingOptionId": "GGpi_QDzyHT0"
              },
              "legs": [
                {
                  "id": "10413-2408222130--31435-0-10075-2408230950",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 530,
                  "stopCount": 0,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T21:30:00",
                  "arrival": "2024-08-23T09:50:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -31435,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
                        "name": "Vistara"
                      }
                    ],
                    "operationType": "fully_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-10075-2408222130-2408230950--31435",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-22T21:30:00",
                      "arrival": "2024-08-23T09:50:00",
                      "durationInMinutes": 530,
                      "flightNumber": "24",
                      "marketingCarrier": {
                        "id": -31435,
                        "name": "Vistara",
                        "alternateId": "IK",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -31435,
                        "name": "Vistara",
                        "alternateId": "IK",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "eco": {
                "ecoContenderDelta": 22.9088
              },
              "fareAttributes": {},
              "tags": [
                "shortest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.999
            },
            {
              "id": "10413-2408222035--32672-1-10075-2408231235",
              "price": {
                "raw": 319.16,
                "formatted": "$320",
                "pricingOptionId": "i1RmU6sb19_f"
              },
              "legs": [
                {
                  "id": "10413-2408222035--32672-1-10075-2408231235",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 750,
                  "stopCount": 1,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T20:35:00",
                  "arrival": "2024-08-23T12:35:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -32672,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AI.png",
                        "name": "Air India"
                      }
                    ],
                    "operating": [
                      {
                        "id": -31435,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
                        "name": "Vistara"
                      }
                    ],
                    "operationType": "partially_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-10957-2408222035-2408230810--32672",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "DEL",
                        "displayCode": "DEL",
                        "parent": {
                          "flightPlaceId": "IDEL",
                          "displayCode": "DEL",
                          "name": "New Delhi",
                          "type": "City"
                        },
                        "name": "Indira Gandhi International ",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-22T20:35:00",
                      "arrival": "2024-08-23T08:10:00",
                      "durationInMinutes": 485,
                      "flightNumber": "142",
                      "marketingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    },
                    {
                      "id": "10957-10075-2408231020-2408231235--32672",
                      "origin": {
                        "flightPlaceId": "DEL",
                        "displayCode": "DEL",
                        "parent": {
                          "flightPlaceId": "IDEL",
                          "displayCode": "DEL",
                          "name": "New Delhi",
                          "type": "City"
                        },
                        "name": "Indira Gandhi International ",
                        "type": "Airport",
                        "country": "India"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-23T10:20:00",
                      "arrival": "2024-08-23T12:35:00",
                      "durationInMinutes": 135,
                      "flightNumber": "6446",
                      "marketingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -31435,
                        "name": "Vistara",
                        "alternateId": "IK",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "fareAttributes": {},
              "tags": [
                "cheapest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.894496
            },
            {
              "id": "10413-2408221625--31939-1-10075-2408230805",
              "price": {
                "raw": 325.38,
                "formatted": "$326",
                "pricingOptionId": "dFDgwv7s1S-v"
              },
              "legs": [
                {
                  "id": "10413-2408221625--31939-1-10075-2408230805",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 730,
                  "stopCount": 1,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T16:25:00",
                  "arrival": "2024-08-23T08:05:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -31939,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/QR.png",
                        "name": "Qatar Airways"
                      }
                    ],
                    "operating": [
                      {
                        "id": -32213,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/49.png",
                        "name": "IndiGo"
                      }
                    ],
                    "operationType": "partially_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-11089-2408221625-2408222350--31939",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "DOH",
                        "displayCode": "DOH",
                        "parent": {
                          "flightPlaceId": "DOHA",
                          "displayCode": "DOH",
                          "name": "Doha",
                          "type": "City"
                        },
                        "name": "Hamad International",
                        "type": "Airport",
                        "country": "Qatar"
                      },
                      "departure": "2024-08-22T16:25:00",
                      "arrival": "2024-08-22T23:50:00",
                      "durationInMinutes": 385,
                      "flightNumber": "40",
                      "marketingCarrier": {
                        "id": -31939,
                        "name": "Qatar Airways",
                        "alternateId": "QR",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -31939,
                        "name": "Qatar Airways",
                        "alternateId": "QR",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    },
                    {
                      "id": "11089-10075-2408230200-2408230805--31939",
                      "origin": {
                        "flightPlaceId": "DOH",
                        "displayCode": "DOH",
                        "parent": {
                          "flightPlaceId": "DOHA",
                          "displayCode": "DOH",
                          "name": "Doha",
                          "type": "City"
                        },
                        "name": "Hamad International",
                        "type": "Airport",
                        "country": "Qatar"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-23T02:00:00",
                      "arrival": "2024-08-23T08:05:00",
                      "durationInMinutes": 215,
                      "flightNumber": "4784",
                      "marketingCarrier": {
                        "id": -31939,
                        "name": "Qatar Airways",
                        "alternateId": "QR",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32213,
                        "name": "IndiGo",
                        "alternateId": "49",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "fareAttributes": {},
              "tags": [
                "third_shortest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.875538
            },
            {
              "id": "10413-2408220905--31939-1-10075-2408230210",
              "price": {
                "raw": 325.38,
                "formatted": "$326",
                "pricingOptionId": "JqNnC0adoHCU"
              },
              "legs": [
                {
                  "id": "10413-2408220905--31939-1-10075-2408230210",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 815,
                  "stopCount": 1,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T09:05:00",
                  "arrival": "2024-08-23T02:10:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -31939,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/QR.png",
                        "name": "Qatar Airways"
                      }
                    ],
                    "operating": [
                      {
                        "id": -32213,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/49.png",
                        "name": "IndiGo"
                      }
                    ],
                    "operationType": "partially_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-11089-2408220905-2408221630--31939",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "DOH",
                        "displayCode": "DOH",
                        "parent": {
                          "flightPlaceId": "DOHA",
                          "displayCode": "DOH",
                          "name": "Doha",
                          "type": "City"
                        },
                        "name": "Hamad International",
                        "type": "Airport",
                        "country": "Qatar"
                      },
                      "departure": "2024-08-22T09:05:00",
                      "arrival": "2024-08-22T16:30:00",
                      "durationInMinutes": 385,
                      "flightNumber": "42",
                      "marketingCarrier": {
                        "id": -31939,
                        "name": "Qatar Airways",
                        "alternateId": "QR",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -31939,
                        "name": "Qatar Airways",
                        "alternateId": "QR",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    },
                    {
                      "id": "11089-10075-2408222005-2408230210--31939",
                      "origin": {
                        "flightPlaceId": "DOH",
                        "displayCode": "DOH",
                        "parent": {
                          "flightPlaceId": "DOHA",
                          "displayCode": "DOH",
                          "name": "Doha",
                          "type": "City"
                        },
                        "name": "Hamad International",
                        "type": "Airport",
                        "country": "Qatar"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-22T20:05:00",
                      "arrival": "2024-08-23T02:10:00",
                      "durationInMinutes": 215,
                      "flightNumber": "4770",
                      "marketingCarrier": {
                        "id": -31939,
                        "name": "Qatar Airways",
                        "alternateId": "QR",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32213,
                        "name": "IndiGo",
                        "alternateId": "49",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "fareAttributes": {},
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.809796
            },
            {
              "id": "10413-2408221105--32213-1-10075-2408230505",
              "price": {
                "raw": 322.89,
                "formatted": "$323",
                "pricingOptionId": "j2M-ym3Gijr8"
              },
              "legs": [
                {
                  "id": "10413-2408221105--32213-1-10075-2408230505",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 870,
                  "stopCount": 1,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T11:05:00",
                  "arrival": "2024-08-23T05:05:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -32213,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/49.png",
                        "name": "IndiGo"
                      }
                    ],
                    "operating": [
                      {
                        "id": -31734,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/TK.png",
                        "name": "Turkish Airlines"
                      }
                    ],
                    "operationType": "partially_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-12585-2408221105-2408221545--32213",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "IST",
                        "displayCode": "IST",
                        "parent": {
                          "flightPlaceId": "ISTA",
                          "displayCode": "IST",
                          "name": "Istanbul",
                          "type": "City"
                        },
                        "name": "Istanbul",
                        "type": "Airport",
                        "country": "Türkiye (Turkey)"
                      },
                      "departure": "2024-08-22T11:05:00",
                      "arrival": "2024-08-22T15:45:00",
                      "durationInMinutes": 220,
                      "flightNumber": "4044",
                      "marketingCarrier": {
                        "id": -32213,
                        "name": "IndiGo",
                        "alternateId": "49",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -31734,
                        "name": "Turkish Airlines",
                        "alternateId": "TK",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    },
                    {
                      "id": "12585-10075-2408221920-2408230505--32213",
                      "origin": {
                        "flightPlaceId": "IST",
                        "displayCode": "IST",
                        "parent": {
                          "flightPlaceId": "ISTA",
                          "displayCode": "IST",
                          "name": "Istanbul",
                          "type": "City"
                        },
                        "name": "Istanbul",
                        "type": "Airport",
                        "country": "Türkiye (Turkey)"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-22T19:20:00",
                      "arrival": "2024-08-23T05:05:00",
                      "durationInMinutes": 435,
                      "flightNumber": "18",
                      "marketingCarrier": {
                        "id": -32213,
                        "name": "IndiGo",
                        "alternateId": "49",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32213,
                        "name": "IndiGo",
                        "alternateId": "49",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "fareAttributes": {},
              "tags": [
                "third_cheapest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.744228
            },
            {
              "id": "10413-2408221020--32339-1-10075-2408230240",
              "price": {
                "raw": 389.04,
                "formatted": "$390",
                "pricingOptionId": "nw1QcxGM6qQg"
              },
              "legs": [
                {
                  "id": "10413-2408221020--32339-1-10075-2408230240",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 770,
                  "stopCount": 1,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T10:20:00",
                  "arrival": "2024-08-23T02:40:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -32339,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/60.png",
                        "name": "Etihad Airways"
                      }
                    ],
                    "operationType": "fully_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-9618-2408221020-2408221900--32339",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "AUH",
                        "displayCode": "AUH",
                        "parent": {
                          "flightPlaceId": "AUHA",
                          "displayCode": "AUH",
                          "name": "Abu Dhabi",
                          "type": "City"
                        },
                        "name": "Zayed International",
                        "type": "Airport",
                        "country": "United Arab Emirates"
                      },
                      "departure": "2024-08-22T10:20:00",
                      "arrival": "2024-08-22T19:00:00",
                      "durationInMinutes": 400,
                      "flightNumber": "32",
                      "marketingCarrier": {
                        "id": -32339,
                        "name": "Etihad Airways",
                        "alternateId": "60",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32339,
                        "name": "Etihad Airways",
                        "alternateId": "60",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    },
                    {
                      "id": "9618-10075-2408222150-2408230240--32339",
                      "origin": {
                        "flightPlaceId": "AUH",
                        "displayCode": "AUH",
                        "parent": {
                          "flightPlaceId": "AUHA",
                          "displayCode": "AUH",
                          "name": "Abu Dhabi",
                          "type": "City"
                        },
                        "name": "Zayed International",
                        "type": "Airport",
                        "country": "United Arab Emirates"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-22T21:50:00",
                      "arrival": "2024-08-23T02:40:00",
                      "durationInMinutes": 200,
                      "flightNumber": "206",
                      "marketingCarrier": {
                        "id": -32339,
                        "name": "Etihad Airways",
                        "alternateId": "60",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32339,
                        "name": "Etihad Airways",
                        "alternateId": "60",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "eco": {
                "ecoContenderDelta": 24.957525
              },
              "fareAttributes": {},
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.697559
            },
            {
              "id": "10413-2408222035--32672-2-10075-2408231805",
              "price": {
                "raw": 319.16,
                "formatted": "$320",
                "pricingOptionId": "dG3l_WXipE-Z"
              },
              "legs": [
                {
                  "id": "10413-2408222035--32672-2-10075-2408231805",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 1080,
                  "stopCount": 2,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T20:35:00",
                  "arrival": "2024-08-23T18:05:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -32672,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AI.png",
                        "name": "Air India"
                      }
                    ],
                    "operationType": "fully_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-10957-2408222035-2408230810--32672",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "DEL",
                        "displayCode": "DEL",
                        "parent": {
                          "flightPlaceId": "IDEL",
                          "displayCode": "DEL",
                          "name": "New Delhi",
                          "type": "City"
                        },
                        "name": "Indira Gandhi International ",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-22T20:35:00",
                      "arrival": "2024-08-23T08:10:00",
                      "durationInMinutes": 485,
                      "flightNumber": "142",
                      "marketingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    },
                    {
                      "id": "10957-12423-2408231430-2408231605--32672",
                      "origin": {
                        "flightPlaceId": "DEL",
                        "displayCode": "DEL",
                        "parent": {
                          "flightPlaceId": "IDEL",
                          "displayCode": "DEL",
                          "name": "New Delhi",
                          "type": "City"
                        },
                        "name": "Indira Gandhi International ",
                        "type": "Airport",
                        "country": "India"
                      },
                      "destination": {
                        "flightPlaceId": "IDR",
                        "displayCode": "IDR",
                        "parent": {
                          "flightPlaceId": "IIDR",
                          "displayCode": "IDR",
                          "name": "Indore",
                          "type": "City"
                        },
                        "name": "Indore",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-23T14:30:00",
                      "arrival": "2024-08-23T16:05:00",
                      "durationInMinutes": 95,
                      "flightNumber": "636",
                      "marketingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    },
                    {
                      "id": "12423-10075-2408231640-2408231805--32672",
                      "origin": {
                        "flightPlaceId": "IDR",
                        "displayCode": "IDR",
                        "parent": {
                          "flightPlaceId": "IIDR",
                          "displayCode": "IDR",
                          "name": "Indore",
                          "type": "City"
                        },
                        "name": "Indore",
                        "type": "Airport",
                        "country": "India"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-23T16:40:00",
                      "arrival": "2024-08-23T18:05:00",
                      "durationInMinutes": 85,
                      "flightNumber": "636",
                      "marketingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "fareAttributes": {},
              "tags": [
                "second_cheapest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.692913
            },
            {
              "id": "10413-2408222130--32672-0-10075-2408230950",
              "price": {
                "raw": 518.9,
                "formatted": "$519",
                "pricingOptionId": "6uwpHRrYMKev"
              },
              "legs": [
                {
                  "id": "10413-2408222130--32672-0-10075-2408230950",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 530,
                  "stopCount": 0,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T21:30:00",
                  "arrival": "2024-08-23T09:50:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -32672,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AI.png",
                        "name": "Air India"
                      }
                    ],
                    "operating": [
                      {
                        "id": -31435,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
                        "name": "Vistara"
                      }
                    ],
                    "operationType": "not_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-10075-2408222130-2408230950--32672",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-22T21:30:00",
                      "arrival": "2024-08-23T09:50:00",
                      "durationInMinutes": 530,
                      "flightNumber": "6350",
                      "marketingCarrier": {
                        "id": -32672,
                        "name": "Air India",
                        "alternateId": "AI",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -31435,
                        "name": "Vistara",
                        "alternateId": "IK",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "eco": {
                "ecoContenderDelta": 22.9088
              },
              "fareAttributes": {},
              "tags": [
                "second_shortest"
              ],
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.687022
            },
            {
              "id": "10413-2408221040--32257-1-10075-2408230455",
              "price": {
                "raw": 398.27,
                "formatted": "$399",
                "pricingOptionId": "c6syU5muCznO"
              },
              "legs": [
                {
                  "id": "10413-2408221040--32257-1-10075-2408230455",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 885,
                  "stopCount": 1,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T10:40:00",
                  "arrival": "2024-08-23T04:55:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -32257,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/GF.png",
                        "name": "Gulf Air"
                      }
                    ],
                    "operationType": "fully_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-9715-2408221040-2408221840--32257",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "BAH",
                        "displayCode": "BAH",
                        "parent": {
                          "flightPlaceId": "BAHA",
                          "displayCode": "BAH",
                          "name": "Manama",
                          "type": "City"
                        },
                        "name": "Bahrain",
                        "type": "Airport",
                        "country": "Bahrain"
                      },
                      "departure": "2024-08-22T10:40:00",
                      "arrival": "2024-08-22T18:40:00",
                      "durationInMinutes": 420,
                      "flightNumber": "18",
                      "marketingCarrier": {
                        "id": -32257,
                        "name": "Gulf Air",
                        "alternateId": "GF",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32257,
                        "name": "Gulf Air",
                        "alternateId": "GF",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    },
                    {
                      "id": "9715-10075-2408222245-2408230455--32257",
                      "origin": {
                        "flightPlaceId": "BAH",
                        "displayCode": "BAH",
                        "parent": {
                          "flightPlaceId": "BAHA",
                          "displayCode": "BAH",
                          "name": "Manama",
                          "type": "City"
                        },
                        "name": "Bahrain",
                        "type": "Airport",
                        "country": "Bahrain"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-22T22:45:00",
                      "arrival": "2024-08-23T04:55:00",
                      "durationInMinutes": 220,
                      "flightNumber": "56",
                      "marketingCarrier": {
                        "id": -32257,
                        "name": "Gulf Air",
                        "alternateId": "GF",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32257,
                        "name": "Gulf Air",
                        "alternateId": "GF",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "eco": {
                "ecoContenderDelta": 6.235176
              },
              "fareAttributes": {},
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.633177
            },
            {
              "id": "10413-2408220720--32213-1-10075-2408230505",
              "price": {
                "raw": 322.89,
                "formatted": "$323",
                "pricingOptionId": "p4FcPvBMHBgg"
              },
              "legs": [
                {
                  "id": "10413-2408220720--32213-1-10075-2408230505",
                  "origin": {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle",
                    "displayCode": "CDG",
                    "city": "Paris",
                    "country": "France",
                    "isHighlighted": false
                  },
                  "destination": {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai",
                    "displayCode": "BOM",
                    "city": "Mumbai",
                    "country": "India",
                    "isHighlighted": false
                  },
                  "durationInMinutes": 1095,
                  "stopCount": 1,
                  "isSmallestStops": false,
                  "departure": "2024-08-22T07:20:00",
                  "arrival": "2024-08-23T05:05:00",
                  "timeDeltaInDays": 1,
                  "carriers": {
                    "marketing": [
                      {
                        "id": -32213,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/49.png",
                        "name": "IndiGo"
                      }
                    ],
                    "operating": [
                      {
                        "id": -31734,
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/TK.png",
                        "name": "Turkish Airlines"
                      }
                    ],
                    "operationType": "partially_operated"
                  },
                  "segments": [
                    {
                      "id": "10413-12585-2408220720-2408221205--32213",
                      "origin": {
                        "flightPlaceId": "CDG",
                        "displayCode": "CDG",
                        "parent": {
                          "flightPlaceId": "PARI",
                          "displayCode": "PAR",
                          "name": "Paris",
                          "type": "City"
                        },
                        "name": "Paris Charles de Gaulle",
                        "type": "Airport",
                        "country": "France"
                      },
                      "destination": {
                        "flightPlaceId": "IST",
                        "displayCode": "IST",
                        "parent": {
                          "flightPlaceId": "ISTA",
                          "displayCode": "IST",
                          "name": "Istanbul",
                          "type": "City"
                        },
                        "name": "Istanbul",
                        "type": "Airport",
                        "country": "Türkiye (Turkey)"
                      },
                      "departure": "2024-08-22T07:20:00",
                      "arrival": "2024-08-22T12:05:00",
                      "durationInMinutes": 225,
                      "flightNumber": "4043",
                      "marketingCarrier": {
                        "id": -32213,
                        "name": "IndiGo",
                        "alternateId": "49",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -31734,
                        "name": "Turkish Airlines",
                        "alternateId": "TK",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    },
                    {
                      "id": "12585-10075-2408221920-2408230505--32213",
                      "origin": {
                        "flightPlaceId": "IST",
                        "displayCode": "IST",
                        "parent": {
                          "flightPlaceId": "ISTA",
                          "displayCode": "IST",
                          "name": "Istanbul",
                          "type": "City"
                        },
                        "name": "Istanbul",
                        "type": "Airport",
                        "country": "Türkiye (Turkey)"
                      },
                      "destination": {
                        "flightPlaceId": "BOM",
                        "displayCode": "BOM",
                        "parent": {
                          "flightPlaceId": "IBOM",
                          "displayCode": "BOM",
                          "name": "Mumbai",
                          "type": "City"
                        },
                        "name": "Mumbai",
                        "type": "Airport",
                        "country": "India"
                      },
                      "departure": "2024-08-22T19:20:00",
                      "arrival": "2024-08-23T05:05:00",
                      "durationInMinutes": 435,
                      "flightNumber": "18",
                      "marketingCarrier": {
                        "id": -32213,
                        "name": "IndiGo",
                        "alternateId": "49",
                        "allianceId": 0,
                        "displayCode": ""
                      },
                      "operatingCarrier": {
                        "id": -32213,
                        "name": "IndiGo",
                        "alternateId": "49",
                        "allianceId": 0,
                        "displayCode": ""
                      }
                    }
                  ]
                }
              ],
              "isSelfTransfer": false,
              "isProtectedSelfTransfer": false,
              "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
              },
              "fareAttributes": {},
              "isMashUp": false,
              "hasFlexibleOptions": false,
              "score": 0.616995
            }
          ],
          "messages": [],
          "filterStats": {
            "duration": {
              "min": 530,
              "max": 1095,
              "multiCityMin": 530,
              "multiCityMax": 1095
            },
            "airports": [
              {
                "city": "Mumbai",
                "airports": [
                  {
                    "id": "BOM",
                    "entityId": "95673320",
                    "name": "Mumbai"
                  }
                ]
              },
              {
                "city": "Paris",
                "airports": [
                  {
                    "id": "CDG",
                    "entityId": "95565041",
                    "name": "Paris Charles de Gaulle"
                  }
                ]
              }
            ],
            "carriers": [
              {
                "id": -32672,
                "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AI.png",
                "name": "Air India"
              },
              {
                "id": -32339,
                "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/60.png",
                "name": "Etihad Airways"
              },
              {
                "id": -32257,
                "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/GF.png",
                "name": "Gulf Air"
              },
              {
                "id": -32213,
                "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/49.png",
                "name": "IndiGo"
              },
              {
                "id": -31939,
                "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/QR.png",
                "name": "Qatar Airways"
              },
              {
                "id": -31435,
                "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/IK.png",
                "name": "Vistara"
              }
            ],
            "stopPrices": {
              "direct": {
                "isPresent": true,
                "formattedPrice": "$375"
              },
              "one": {
                "isPresent": true,
                "formattedPrice": "$320"
              },
              "twoOrMore": {
                "isPresent": true,
                "formattedPrice": "$320"
              }
            }
          },
          "flightsSessionId": "c013f09d-bea9-45bf-97da-f70de5e2c2a8",
          "destinationImageUrl": "https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg",
          "token": "eyJhIjoxLCJjIjowLCJpIjowLCJjYyI6ImVjb25vbXkiLCJvIjoiUEFSSSIsImQiOiJCT00iLCJkMSI6IjIwMjQtMDgtMjIifQ=="
        },
        "status": true,
        "message": "Successful"
      }
};

export default result;