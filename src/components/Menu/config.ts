import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://localhost:3000/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://localhost:3000/farms'
  },
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: 'https://localhost:3000/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x896eDE222D3f7f3414e136a2791BDB08AAa25Ce0',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/paper-moniez/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/paper-moniez',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/VikingDefi/",
      },
      {
        label: "Docs",
        href: "https://vikingswap.gitbook.io/viking-swap/",
      },
      {
        label: "Blog",
        href: "https://viking-swap.medium.com/",
      },
    ],
  },
  {
    label: 'Audit by Hacken',
    icon: 'HelmetIcon',
    href: 'https://www.vikingswap.finance/files/vikingHackenAudit.pdf',
  },
]

export default config
