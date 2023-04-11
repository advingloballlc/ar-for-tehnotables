export const getBreadcrumbsUrl = breadcrumbs => {
  return breadcrumbs.map(breadcrumb => {
    return {
      text: breadcrumb.name,
      url: breadcrumb.item && breadcrumb.item.split(/(http(s)?:\/\/[a-z\.]+[a-z]+)/g)[3]
    }
  })
}