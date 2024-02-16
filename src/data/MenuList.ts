export const menuList = [
    {
        id: 1,
        name: "Hareketler",
        icon: "account",
        isOpen: false,
        submenuList: [
            {
                id: 1,
                name: "Hesap Hareketleri",
                icon: "account",
                image: "report",
                screen: "TransactionScreen",
                isSelect: false
            },
        ]
    },
    {
        id: 2,
        name: "Lorem Ipsum 2",
        icon: "stocking",
        isOpen: false,
        submenuList: [
            {
                id: 1,
                name: "Lorem Ipsum 2.1",
                icon: "stocking",
                image: "report",
                screen: "TransactionListScreen",
                isSelect: false
            },
            {
                id: 2,
                name: "Lorem Ipsum 2.2",
                icon: "stocking",
                image: "report",
                screen: "TransactionListScreen",
                isSelect: false
            },
            {
                id: 3,
                name: "Lorem Ipsum 2.3",
                icon: "stocking",
                isOpen: false,
                submenuList: [
                    {
                        id: 1,
                        name: "Lorem Ipsum 2.3.1",
                        icon: "stocking",
                        image: "report",
                        screen: "TransactionListScreen",
                        isSelect: false
                    },
                    {
                        id: 2,
                        name: "Lorem Ipsum 2.3.2",
                        icon: "stocking",
                        image: "report",
                        screen: "TransactionListScreen",
                        isSelect: false
                    }
                ]
            },
        ]
    },
    {
        id: 3,
        name: "Bütçe Yönetimi",
        icon: "account",
        isOpen: false,
        submenuList: [
            {
                id: 1,
                name: "Bütçe Yönetimi",
                icon: "account",
                image: "report",
                screen: "BudgetScreen",
                isSelect: false
            },
        ]
    },
];