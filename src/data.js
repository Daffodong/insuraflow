const lifeInsuranceNotAPriority = {
    "message": "Life insurance may not be a priority for now.",
    "type" : "FINAL"
}

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
        "yes" : lifeInsuranceNotAPriority,
        "no" : {
            "type" : "QUESTION",
            "message" : "Am I insured adequately under a group insurance arrangement (i.e. from a permanent company)?",
            "notes" : "**Recommended life insurance coverage is around 3-5x of your household's annual expenses.",
            "yes" : lifeInsuranceNotAPriority,
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
        "next" : keyPoint,
        "recommendationIntro" : "Not sure where to get CI? Browse through these links: ",
            "recommendations" : [
                {
                    message: "Reddit thread: Where to get term insurance with critical illness coverage",
                    link: "https://www.reddit.com/r/phinvest/comments/9s5szz/btid_approach_advice_on_where_to_get_term/"
                }, 
                {
                    message: "Reddit thread: [Company Redacted]'s insurance policy offering.",
                    link: "https://www.reddit.com/r/phinvest/comments/ev5vpy/fwds_insurance_for_only_1799php_annually_for_a/"
                }
            ]
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
            "name" : "SelfInsurance",
            "message": "You can opt for self insurance.",
            "type" : "FINAL",
            "recommendationIntro" : "Curious to learn more? Read through these links: ",
            "recommendations" : [
                {
                    message: "Reddit thread: VUL vs BTID vs Self-insurance comparison",
                    link: "https://www.reddit.com/r/phinvest/comments/c4zsxu/vul_vs_btid_vs_selfinsurance_comparison/"
                }, 
                {
                    message: "r/phinvest Search results",
                    link: "https://www.reddit.com/r/phinvest/search/?q=self%20insurance&restrict_sr=1"
                }
            ]
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
                    "next" : amIHealthyKeyPoint,
                    "recommendationIntro" : "No idea about HMOs? Read through these links: ",
                    "recommendations" : [
                        {
                            message: "Reddit thread: Hey guys, for those supporting their aging parent, what have you guys in place to ensure that their health services are covered even after they reach 60? ",
                            link: "https://www.reddit.com/r/phinvest/comments/e4cdzr/hey_guys_for_those_supporting_their_aging_parent/"
                        },
                        {
                            message: "Reddit thread: Best bang for the buck hmo for parents.",
                            link: "https://www.reddit.com/r/phinvest/comments/cdauso/best_bang_for_the_buck_hmo_for_parents/"
                        },
                        {
                            message: "Reddit thread: How does your current health care plan/ health fund?",
                            link: "https://www.reddit.com/r/phinvest/comments/b240ep/how_does_your_current_health_care_planhealth_fund/"
                        },
                        {
                            message: "Reddit thread: Undeserved rant when philhealth and hmo fail",
                            link: "https://www.reddit.com/r/phinvest/comments/dlzpe3/undeserved_rant_when_philhealth_and_hmo_fail/"
                        },
                        {
                            message: "Reddit thread: New Philhealth Contributions. Ouch!",
                            link: "https://www.reddit.com/r/phinvest/comments/e8zx4z/new_philhealth_contributions_ouch/"
                        },
                        {
                            message: "PHInvest Reddit FAQ",
                            link: "https://www.reddit.com/r/phinvest/wiki/faq"
                        }
                    ]
                }
            }
            
        }
    }
}