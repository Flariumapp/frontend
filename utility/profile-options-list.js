import { ProfileOptionMap } from "./profile-option-map";

export const profileOptionsList = [
    {
        id: 'po1',
        title: 'Add Wallet',
        illustration: '/illustrations/profile/add-wallet.svg',
        path: '/add-wallet',
        type: ProfileOptionMap.AddWallet,
    },
    {
        id: 'po2',
        title: 'Check Wallet Balance',
        illustration: '/illustrations/profile/check-wallet-balance.svg',
        path: '/check-wallet-balance',
        type: ProfileOptionMap.CheckWalletBalance,
    },
    {
        id: 'po3',
        title: 'Wallet Top-Up',
        illustration: '/illustrations/profile/wallet-top-up.svg',
        path: '/top-up-wallet',
        type: ProfileOptionMap.WalletTopUp,
    },
    {
        id: 'po4',
        title: 'History',
        illustration: 'illustrations/profile/history.svg',
        path: '/history',
        type: ProfileOptionMap.History,
    },
];