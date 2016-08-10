(function(){
	
   	window.KPIColor={
   		green:'#22ac38',
   		red:'#c13711',
   		yellow:'#f8b551',
   		hgreen:'#00ff29',
   		hred:'#ff3600',
   		hyellow:'#f9d6a1',
   	}
   
    window.KPIData = [{
        "period": "第一周",
        "head": "商品",
        "products": [
            {
                "name": "商品1",
                "items": [
                    {
                        "name": "销售额",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1200,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 950,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售额 VS 上周期",
                        "state": {
                            "arrow": "down",
                            "color": KPIColor.red
                        },
                        "main_data": {
                            "data": 1200.52,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 800,
                            "format": "float"
                        }
                    },
                    {
                        "name": "数量",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 120,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 950,
                            "format": "float"
                        }
                    },
                    {
                        "name": "毛利",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 122,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 100,
                            "format": "float"
                        }
                    },
                    {
                        "name": "净利润",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 111,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 100,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售增长率",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 0.12,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 0.1,
                            "format": "percentage"
                        }
                    },
                    {
                        "name": "销售目标",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 1000,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 1300,
                            "format": "float"
                        }
                    },
                    {
                        "name": "目标达成率",
                        "state":{
                        	"arrow": "up",
                            "color": KPIColor.yellow,
                        },
                        "main_data": {
                            "data": 1.05,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 1.03,
                            "format": "percentage"
                        }
                    }
                ]
            },
            {
                "name": "商品2",
                "items": [
                    {
                        "name": "销售额",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1500,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 1000.24,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售额 VS 上周期",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1500,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 900,
                            "format": "float"
                        }
                    },
                    {
                        "name": "数量",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 60,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 1000.24,
                            "format": "float"
                        }
                    },
                    {
                        "name": "毛利",
                        "state":{
                        	"arrow": "up",
                            "color": KPIColor.green,
                        },
                        "main_data": {
                            "data": 562,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 440,
                            "format": "float"
                        }
                    },
                    {
                        "name": "净利润",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 121,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 100,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售增长率",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 0.6,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 0.3,
                            "format": "percentage"
                        }
                    },
                    {
                        "name": "销售目标",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 1000,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 900,
                            "format": "float"
                        }
                    },
                    {
                        "name": "目标达成率",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 1.11,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 1.05,
                            "format": "percentage"
                        }
                    }
                ]
            },
            {
                "name": "商品3",
                "items": [
                    {
                        "name": "销售额",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1000.52,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 600,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售额 VS 上周期",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.red
                        },
                        "main_data": {
                            "data": 1200.52,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 1000,
                            "format": "float"
                        }
                    },
                    {
                        "name": "数量",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 38,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 600,
                            "format": "float"
                        }
                    },
                    {
                        "name": "毛利",
                        "state": {
                            "arrow": "down",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1500,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 900,
                            "format": "float"
                        }
                    },
                    {
                        "name": "净利润",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 800,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 500,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售增长率",
                        "state": {
                            "arrow": "down",
                            "color": KPIColor.red
                        },
                        "main_data": {
                            "data": 0.19,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 0.11,
                            "format": "percentage"
                        }
                    },
                    {
                        "name": "销售目标",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 1100,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 800,
                            "format": "float"
                        }
                    },
                    {
                        "name": "目标达成率",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1.6,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 1.3,
                            "format": "percentage"
                        }
                    }
                ]
            }
        ]
    },{
        "period": "第二周",
        "head": "商品",
        "products": [
            {
                "name": "商品1",
                "items": [
                    {
                        "name": "销售额",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1800,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 950,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售额 VS 上周期",
                        "state": {
                            "arrow": "down",
                            "color": KPIColor.red
                        },
                        "main_data": {
                            "data": 1400.52,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 600,
                            "format": "float"
                        }
                    },
                    {
                        "name": "数量",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 120,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 950,
                            "format": "float"
                        }
                    },
                    {
                        "name": "毛利",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 122,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 100,
                            "format": "float"
                        }
                    },
                    {
                        "name": "净利润",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 111,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 100,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售增长率",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 0.12,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 0.1,
                            "format": "percentage"
                        }
                    },
                    {
                        "name": "销售目标",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 1000,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 1300,
                            "format": "float"
                        }
                    },
                    {
                        "name": "目标达成率",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 1.05,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 1.03,
                            "format": "percentage"
                        }
                    }
                ]
            },
            {
                "name": "商品2",
                "items": [
                    {
                        "name": "销售额",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 2500,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 1000.24,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售额 VS 上周期",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1500,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 900,
                            "format": "float"
                        }
                    },
                    {
                        "name": "数量",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 60,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 1000.24,
                            "format": "float"
                        }
                    },
                    {
                        "name": "毛利",
                        "state":{
                        	"arrow": "up",
                            "color": KPIColor.green,
                        },
                        "main_data": {
                            "data": 562,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 440,
                            "format": "float"
                        }
                    },
                    {
                        "name": "净利润",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 121,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 100,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售增长率",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 0.6,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 0.3,
                            "format": "percentage"
                        }
                    },
                    {
                        "name": "销售目标",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 1000,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 900,
                            "format": "float"
                        }
                    },
                    {
                        "name": "目标达成率",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 1.11,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 1.05,
                            "format": "percentage"
                        }
                    }
                ]
            },
            {
                "name": "商品3",
                "items": [
                    {
                        "name": "销售额",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1200.52,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 600,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售额 VS 上周期",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.red
                        },
                        "main_data": {
                            "data": 1200.52,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 1000,
                            "format": "float"
                        }
                    },
                    {
                        "name": "数量",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 38,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 600,
                            "format": "float"
                        }
                    },
                    {
                        "name": "毛利",
                        "state": {
                            "arrow": "down",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1500,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 900,
                            "format": "float"
                        }
                    },
                    {
                        "name": "净利润",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 800,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 500,
                            "format": "float"
                        }
                    },
                    {
                        "name": "销售增长率",
                        "state": {
                            "arrow": "down",
                            "color": KPIColor.red
                        },
                        "main_data": {
                            "data": 0.19,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 0.11,
                            "format": "percentage"
                        }
                    },
                    {
                        "name": "销售目标",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.yellow
                        },
                        "main_data": {
                            "data": 1100,
                            "format": "float"
                        },
                        "sub_data": {
                            "data": 800,
                            "format": "float"
                        }
                    },
                    {
                        "name": "目标达成率",
                        "state": {
                            "arrow": "up",
                            "color": KPIColor.green
                        },
                        "main_data": {
                            "data": 1.6,
                            "format": "percentage"
                        },
                        "sub_data": {
                            "data": 1.3,
                            "format": "percentage"
                        }
                    }
                ]
            }
        ]
    }];
}).call(this)
