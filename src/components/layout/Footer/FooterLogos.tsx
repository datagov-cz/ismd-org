import { brandAsset } from '../../../lib/assets'

function DiaLogo() {
  return (
    <div
      className="h-footer-dia-height w-footer-dia-width relative shrink-0 overflow-hidden"
      role="img"
      aria-label="Digitální a informační agentura"
    >
      <img
        className="absolute left-0 top-0 max-w-none"
        src={brandAsset('imgGroup1.svg')}
        alt=""
      />
      <img
        className="left-footer-dia-mark-left top-footer-dia-mark-top absolute max-w-none"
        src={brandAsset('imgGroup.svg')}
        alt=""
      />
    </div>
  )
}

function EuFundingLogo() {
  return (
    <img
      className="h-footer-logo-height w-footer-eu-width shrink-0"
      src={brandAsset('financovano-eu.svg')}
      alt="Financováno Evropskou unií"
    />
  )
}

function RecoveryPlanLogo() {
  return (
    <div
      className="h-footer-logo-height w-footer-recovery-size relative shrink-0 overflow-hidden"
      role="img"
      aria-label="Národní plán obnovy"
    >
      <img
        className="h-footer-recovery-size w-footer-recovery-size -top-footer-recovery-offset absolute left-0 max-w-none"
        src={brandAsset('imgNarodniPlanObnovy1.png')}
        alt=""
      />
    </div>
  )
}

function FooterLogos() {
  return (
    <div className="mt-1 flex flex-wrap items-center gap-6">
      <DiaLogo />
      <EuFundingLogo />
      <RecoveryPlanLogo />
    </div>
  )
}

export default FooterLogos
