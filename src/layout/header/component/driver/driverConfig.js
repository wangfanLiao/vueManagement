export const driverConfig = (t) => {
  return {
    steps: [
      {
        element: '.guide',
        popover: { title: t('driver.guideBtn'), description: 'Description' }
      },
      {
        element: '.avatarItem',
        popover: { title: t('driver.avatar'), description: 'Description' }
      },
      {
        element: '.breadcrumb',
        popover: { title: t('driver.breadcrumb'), description: 'Description' }
      },
      {
        element: '.hamburnger-container',
        popover: { title: t('driver.hamburgerBtn'), description: 'Description' }
      },
      {
        element: '.lang',
        popover: { title: t('driver.languageBtn'), description: 'Description' }
      },
      {
        element: '.screenfull',
        popover: { title: t('driver.fullScreen'), description: 'Description' }
      }
    ],
    showProgress: true,
    nextBtnText: t('driver.nextBtnText'),
    prevBtnText: t('driver.prevBtnText'),
    doneBtnText: t('driver.closeBtnText')
  }
}
