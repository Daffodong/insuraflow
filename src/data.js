const estatePlanningKeyPoint = {
    "type" : "QUESTION",
    "message" : "Do I need the insurance for estate planning purposes?",
    "yes" : {
        "message": "Consider getting a whole life product.",
        "type" : "FINAL"
    },
    "no" : {
        "type" : "QUESTION",
        "message" : "Are my children grown up?",
        "yes" : {
            "message": "Life insurance may not be a priority for now.",
            "type" : "FINAL"
        },
        "no" : {
            "type" : "QUESTION",
            "message" : "Am I insured adequately under a group insurance arrangement (i.e. from a permanent company)?",
            "notes" : "**Recommended life insurance coverage is around 3-5x of your household's annual expenses.",
            "yes" : {
                "message": "Life insurance may not be a priority for now.",
                "type" : "FINAL"
            },
            "no" : {
                "type" : "QUESTION",
                "message" : "Can I afford to pay relatively higher premiums for a long period of time?",
                "yes" : {
                    "message": "Consider getting a whole life product.",
                    "type" : "FINAL"
                },
                "no" : {
                    "type" : "QUESTION",
                    "message" : "Am I willing to put in time and effort in learning how to invest on my own?",
                    "yes" : {
                        "message": "BTID - Buy term, invest the difference.",
                        "type" : "FINAL"
                    },
                    "no" : {
                        "message": "Look for an inexpensive VUL or a limited pay product.",
                        "type" : "FINAL"
                    }
                }
            }
        }
    }
}

const keyPoint = {
    "type" : "QUESTION",
    "message" : "Does someone rely on me financially?",
    "yes" : {
        "type" : "QUESTION",
        "message" : "Do I have children? Am I caring for relatives?",
        "yes" : estatePlanningKeyPoint,
        "no" : {
            "message": "Life insurance may not be a priority for now.",
            "type" : "FINAL"
        }
                
    },
    "no" : {
        "type" : "QUESTION",
        "message" : "Am I married, or planning to have dependents in the future?",
        "yes" : estatePlanningKeyPoint,
        "no" : {
            "type" : "QUESTION",
            "message" : "Do I have co-signed loans?",
            "yes" : {
                "type" : "QUESTION",
                "message" : "Can I afford to pay relatively higher premiums for a long period of time?",
                "yes" : {
                    "message": "Consider getting a whole life product.",
                    "type" : "FINAL"
                },
                "no" : {
                    "type" : "QUESTION",
                    "message" : "Am I willing to put in time and effort in learning how to invest on my own?",
                    "yes" : {
                        "message": "BTID - Buy term, invest the difference.",
                        "type" : "FINAL"
                    },
                    "no" : {
                        "message": "Look for an inexpensive VUL or a limited pay product.",
                        "type" : "FINAL"
                    }
                }
            },
            "no" : {
                "message": "Life insurance may not be a priority for now.",
                "type" : "FINAL"
            }
        }
    }
    
    
}

const amIHealthyKeyPoint = {
    "type" : "QUESTION",
    "message" : "Am I healthy and not at a relatively high risk of acquiring a terminal illness?",
    "yes" : keyPoint,
    "no" : {
        "type" : "PASS",
        "message" : "Consider getting a CI (Critical Illness) coverage. When you have one, please proceed.",
        "next" : keyPoint
    }
}

export const data = {
    "type" : "START",
    "message" : "",
    "start":{
        "type" : "QUESTION",
        "message": "Is my passive income or net worth high enough to answer for my, or my loved ones needs in case I succumb to death/ illness?",
        "notes": "If your target coverage is less than your passive  income (from a source that is not affected in case of critical illness/ unemployment), or if it is less than 5% of your net worth, then it may be considered enough to sustain your household's lifestyle",
        "yes": {
            "message": "You can opt for self insurance",
            "type" : "FINAL"
        },
        "no" : {
            "type" : "QUESTION",
            "message" : "Am I already protected against unforseen medical expenses?",
            "yes" : keyPoint,
            "no" : {
                "type" : "QUESTION",
                "message" : "Do I have adequate HMO/ health insurance coverage?",
                "notes" : "HMO coverage should be around 150K-500K per year on average, while Critical Illess coverage should be at least 1M.",
                "yes" : amIHealthyKeyPoint,
                "no" : {
                    "type" : "PASS",
                    "message" : "You need HMO/ health insurance. When you have one, please proceed.",
                    "next" : amIHealthyKeyPoint
                }
            }
        }
    }
}