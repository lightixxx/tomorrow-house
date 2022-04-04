const shipmentSectionHeaderIconButton = document.querySelector(
  '.product-shipment .product-section-header.sm-only .icon-button'
)
const inquirySectionHeaderIconButton = document.querySelector(
  '.product-inquiry .product-section-header .icon-button'
)

function showShipmentFullSection() {
  const shipmentSection = this.parentNode.parentNode
  shipmentSection.classList.add('is-open')
}

shipmentSectionHeaderIconButton.addEventListener(
  'click',
  showShipmentFullSection
)

function showInquiryFullSection() {
  const inquirySection = this.parentNode.parentNode
  inquirySection.classList.add('is-open')
}

inquirySectionHeaderIconButton.addEventListener('click', showInquiryFullSection)
