import React from 'react'
import Icon from '../components/icon/icon'

export const iconList = [
  'FaAccessibleIcon',
  'FaAccusoft',
  'FaAcquisitionsIncorporated',
  'FaAdn',
  'FaAdversal',
  'FaAffiliatetheme',
  'FaAirbnb',
  'FaAlgolia',
  'FaAlipay',
  'FaAmazonPay',
  'FaAmazon',
  'FaAmilia',
  'FaAndroid',
  'FaAngrycreative',
  'FaAngular',
  'FaAppStoreIos',
  'FaAppStore',
  'FaApper',
  'FaApplePay',
  'FaApple',
  'FaArtstation',
  'FaAsymmetrik',
  'FaAtlassian',
  'FaAudible',
  'FaAutoprefixer',
  'FaAvianex',
  'FaAviato',
  'FaAws',
  'FaBandcamp',
  'FaBattleNet',
  'FaBehanceSquare',
  'FaBehance',
  'FaBimobject',
  'FaBitbucket',
  'FaBitcoin',
  'FaBity',
  'FaBlackTie',
  'FaBlackberry',
  'FaBloggerB',
  'FaBlogger',
  'FaBluetoothB',
  'FaBluetooth',
  'FaBootstrap',
  'FaBtc',
  'FaBuffer',
  'FaBuromobelexperte',
  'FaBuyNLarge',
  'FaBuysellads',
  'FaCanadianMapleLeaf',
  'FaCcAmazonPay',
  'FaCcAmex',
  'FaCcApplePay',
  'FaCcDinersClub',
  'FaCcDiscover',
  'FaCcJcb',
  'FaCcMastercard',
  'FaCcPaypal',
  'FaCcStripe',
  'FaCcVisa',
  'FaCentercode',
  'FaCentos',
  'FaChrome',
  'FaChromecast',
  'FaCloudflare',
  'FaCloudscale',
  'FaCloudsmith',
  'FaCloudversify',
  'FaCodepen',
]
function SvgImport() {
  return (
    <h3>
      {iconList.map((name) => (
        <Icon key={name} iconName={name} />
      ))}
    </h3>
  )
}

export default SvgImport
